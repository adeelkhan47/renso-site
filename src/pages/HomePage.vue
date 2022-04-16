<template>
  <div class="home-page">
    <template>
      <item-type-selection />
      <div class="content-selection">
        <heading :text="$t('selectTime')" />
        <div class="pickers">
          <a-date-picker
            :disabled="timePickerLoading || dayPickerLoading"
            class="picker"
            :disabled-date="disabledStartDate"
            :disabled-time="disabledStartTime"
            show-time
            :showNow="false"
            :placeholder="$t('startTime')"
            format="D MMMM YYYY, h:mm a"
            v-model="startTimeLocal"
            @change="(i) => setTime(i, true)"
          />
          <a-date-picker
            :disabled="!startTimeLocal || timePickerLoading || dayPickerLoading"
            :disabled-date="disabledEndDate"
            :disabled-time="disabledEndTime"
            class="picker"
            show-time
            :showNow="false"
            :placeholder="$t('endTime')"
            format="D MMMM YYYY, h:mm a"
            v-model="endTimeLocal"
            @change="(i) => setTime(i, false)"
          />
        </div>
      </div>
      <div class="content-selection">
        <heading :text="$t('selectLocation')" />
        <div class="pickers">
          <a-select
            :default-value="selectedLocation"
            class="picker select"
            @change="setSelectedLocation"
          >
            <a-select-option
              v-for="loc of locations"
              :key="loc.id"
              :value="loc.id"
            >
              {{ loc.name }}
            </a-select-option>
          </a-select>
        </div>
      </div>
      <item-subtypes-selection />
      <extras-selection />
      <div class="actions">
        <a-button
          type="primary"
          icon="shopping-cart"
          size="large"
          class="action"
          :disabled="loading || !canAddToCart"
          @click="addToCart"
        >
          {{ $t("addToCart") }}
        </a-button>
      </div>
    </template>
    <template v-if="loading">
      <div class="full-page-cover">
        <a-spin size="large" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { dayPickerApi } from "../apis";
import ExtrasSelection from "../components/ExtrasSelection.vue";
import ItemSubtypesSelection from "../components/ItemSubtypesSelection.vue";
import ItemTypeSelection from "../components/ItemTypeSelection.vue";
import Heading from "../views/Heading.vue";

const MIN_BOOKING_MINUTES = 30;

export default {
  name: "HomePage",

  components: {
    ItemSubtypesSelection,
    ItemTypeSelection,
    Heading,
    ExtrasSelection
  },

  data() {
    return {
      dayPickerLoading: false,
      backendFormat: "YYYY-MM-DD HH:mm:ss",
      startTimeLocal: "",
      endTimeLocal: "",
      dayPicker: null
    };
  },

  computed: {
    ...mapState(["startTime", "endTime"]),
    ...mapState("locationModule", {
      locations: "locations",
      selectedLocation: "selectedLocation",
      locationLoading: "loading"
    }),

    ...mapState("itemTypeModule", {
      itemTypeLoading: "loading",
      selectedItemType: "selectedItemType"
    }),

    ...mapState("itemSubtypeModule", {
      itemSubtypeLoading: "loading"
    }),

    ...mapState("bookingModule", {
      bookingLoading: "loading"
    }),

    ...mapState("timePickerModule", {
      timePickerLoading: "loading",
      timePickers: "timePickers"
    }),

    ...mapGetters("itemSubtypeModule", ["canAddToCart", "getSelectionDetails"]),

    loading() {
      return (
        this.itemTypeLoading ||
        this.itemSubtypeLoading ||
        this.locationLoading ||
        this.bookingLoading
      );
    },

    isOnDifferentDates() {
      let result = true;
      try {
        if (this.startTimeLocal && this.endTimeLocal) {
          const sm = this.startTimeLocal.format("M");
          const sd = this.startTimeLocal.format("D");
          const sy = this.startTimeLocal.format("YYYY");

          const em = this.endTimeLocal.format("M");
          const ed = this.endTimeLocal.format("D");
          const ey = this.endTimeLocal.format("YYYY");

          const m = Number.parseInt(sm) <= Number.parseInt(em);
          let d = Number.parseInt(sd) < Number.parseInt(ed);
          const y = Number.parseInt(sy) <= Number.parseInt(ey);

          if (!d) {
            d =
              Number.parseInt(sm) < Number.parseInt(em) ||
              Number.parseInt(sy) < Number.parseInt(ey);
          }

          result = m && d && y;
        }
      } catch (error) {}
      return result;
    },

    disabledWeekdays() {
      const disabledWeekdays = [];
      if (this.dayPicker && Object.keys(this.dayPicker).length) {
        if (!this.dayPicker.sunday) disabledWeekdays.push(0);
        if (!this.dayPicker.monday) disabledWeekdays.push(1);
        if (!this.dayPicker.tuesday) disabledWeekdays.push(2);
        if (!this.dayPicker.wednesday) disabledWeekdays.push(3);
        if (!this.dayPicker.thursday) disabledWeekdays.push(4);
        if (!this.dayPicker.friday) disabledWeekdays.push(5);
        if (!this.dayPicker.saturday) disabledWeekdays.push(6);
      }
      return disabledWeekdays;
    }
  },

  watch: {
    startTime() {
      if (
        this.startTimeLocal &&
        this.startTimeLocal.format(this.backendFormat) === this.startTime
      ) {
      } else this.startTimeLocal = this.startTime;
    },

    endTime() {
      if (
        this.endTimeLocal &&
        this.endTimeLocal.format(this.backendFormat) === this.endTime
      ) {
      } else this.endTimeLocal = this.endTime;
    },

    selectedItemType() {
      if (this.selectedItemType && Object.keys(this.selectedItemType).length) {
        this.setDayPicker(this.selectedItemType.id);
      }
    }
  },

  created() {
    this.initializeTimePicker();
  },

  mounted() {
    if (this.startTime) {
      this.startTimeLocal = this.startTime;
    }

    if (this.endTime) {
      this.endTimeLocal = this.endTime;
    }
  },

  methods: {
    ...mapActions(["setStartTime", "setEndTime"]),
    ...mapActions("locationModule", ["setSelectedLocation"]),
    ...mapActions("bookingModule", ["createBookings"]),
    ...mapActions("timePickerModule", {
      initializeTimePicker: "init"
    }),

    getDisabledTime(weekdayNum) {
      const hours = {};
      const minutes = {};

      if (
        !(
          this.dayPicker &&
          this.dayPicker.id &&
          this.timePickers &&
          this.timePickers.length
        )
      ) {
        return {
          hours: [],
          minutes: []
        };
      }

      const dayPickerId = this.dayPicker.id;
      const weekdays = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
      ];
      const weekday = weekdays[weekdayNum];

      const timePikers = this.timePickers.filter(
        (obj) => obj.day_picker_id === dayPickerId && obj.day === weekday
      );

      if (timePikers && timePikers.length) {
        timePikers.forEach((obj) => {
          if (obj.start_time && obj.end_time) {
            const startH = Number.parseInt(obj.start_time.split(":")[0]);
            const startM = Number.parseInt(obj.start_time.split(":")[1]);
            const endH = Number.parseInt(obj.end_time.split(":")[0]);
            const endM = Number.parseInt(obj.end_time.split(":")[1]);

            for (let h = startH; h <= endH; h++) {
              hours[h] = true;
            }

            for (let m = startM; m <= endM; m++) {
              minutes[m] = true;
            }
          }
        });
      }

      return {
        hours: Object.keys(hours).map((val) => Number.parseInt(val)),
        minutes: Object.keys(minutes).map((val) => Number.parseInt(val))
      };
    },

    setDayPicker(itemTypeId) {
      if (!itemTypeId) return;
      this.dayPickerLoading = true;
      dayPickerApi
        .getDayPickerByItemTypeId(itemTypeId)
        .then((res) => {
          if (res.data.objects && res.data.objects.length) {
            this.dayPicker = res.data.objects[0];
          } else this.dayPicker = null;
          this.dayPickerLoading = false;
        })
        .catch((err) => {
          console.error(err);
          this.dayPicker = null;
          this.dayPickerLoading = false;
        });
    },

    addToCart() {
      if (this.canAddToCart) {
        this.createBookings({
          startTime: this.startTime,
          endTime: this.endTime,
          bookingDetails: this.getSelectionDetails,
          locationId: this.selectedLocation || "",
          cb: this.createdBookings
        });
      }
    },

    createdBookings(response) {
      if (response.success) this.$router.push("/cart");
    },

    setTime(instance, isStartTime) {
      if (isStartTime) {
        this.setStartTime(instance.format(this.backendFormat));
        this.setEndTime("");
      } else this.setEndTime(instance.format(this.backendFormat));
    },

    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },

    disabledStartDate(current) {
      return this.disabledWeekdays.includes(current.day());
    },

    disabledStartTime(current) {
      const disabledTimes = this.getDisabledTime(current.day());
      return {
        disabledHours: () => disabledTimes.hours,
        disabledMinutes: () => disabledTimes.minutes
      };
    },

    disabledEndDate(current) {
      return current && this.startTimeLocal && current < this.startTimeLocal;
    },

    disabledEndTime() {
      // no need to disable time
      if (this.isOnDifferentDates) return;

      if (this.startTimeLocal) {
        try {
          let sh = this.startTimeLocal.hour();
          let sm = this.startTimeLocal.minutes();

          if (sm < MIN_BOOKING_MINUTES) {
            sm += MIN_BOOKING_MINUTES;
          } else if (sh < 23) {
            sh += 1;
            sm = sm - MIN_BOOKING_MINUTES;
          }

          return {
            disabledHours: () => this.range(0, 24).splice(0, sh),
            disabledMinutes: () => this.range(0, 60).splice(0, sm)
          };
        } catch (error) {}
      }
    }
  }
};
</script>

<style scoped>
.content-selection {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  margin: 20px 0;
  margin-bottom: 10px;
}

.pickers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.picker {
  width: 210px;
  margin: 10px;
}

.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-bottom: 70px;
}
</style>

<style>
.ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active,
.ant-calendar-selected-day .ant-calendar-date,
.ant-calendar-selected-day.ant-calendar-today .ant-calendar-date,
.ant-calendar-time-picker-select-option-selected:hover,
.ant-calendar-time-picker-select li:hover {
  color: white !important;
}

.ant-calendar-footer-btn .ant-calendar-today-btn,
.ant-calendar-time .ant-calendar-footer .ant-calendar-today-btn {
  display: none !important;
}
</style>
