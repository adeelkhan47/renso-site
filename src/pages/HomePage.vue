<template>
  <div class="home-page">
    <template>
      <item-type-selection />
      <div class="content-selection">
        <heading text="Select Time" />
        <div class="pickers">
          <a-date-picker
            class="picker"
            :disabled-date="disabledStartDate"
            :disabled-time="disabledStartTime"
            show-time
            placeholder="Start Time"
            format="D MMMM YYYY, h:mm a"
            v-model="startTimeLocal"
            @change="(i) => setTime(i, true)"
          />
          <a-date-picker
            :disabled="!startTimeLocal"
            :disabled-date="disabledEndDate"
            :disabled-time="disabledEndTime"
            class="picker"
            show-time
            placeholder="End Time"
            format="D MMMM YYYY, h:mm a"
            v-model="endTimeLocal"
            @change="(i) => setTime(i, false)"
          />
        </div>
      </div>
      <div class="content-selection">
        <heading text="Select Location" />
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
          Add to Cart
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
import ExtrasSelection from "../components/ExtrasSelection.vue";
import ItemSubtypesSelection from "../components/ItemSubtypesSelection.vue";
import ItemTypeSelection from "../components/ItemTypeSelection.vue";
import Heading from "../views/Heading.vue";

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
      backendFormat: "YYYY-MM-DD HH:mm:ss",
      startTimeLocal: "",
      endTimeLocal: ""
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
      itemTypeLoading: "loading"
    }),

    ...mapState("itemSubtypeModule", {
      itemSubtypeLoading: "loading"
    }),

    ...mapState("bookingModule", {
      bookingLoading: "loading"
    }),

    ...mapGetters("itemSubtypeModule", ["canAddToCart", "getSelectionDetails"]),

    loading() {
      return (
        this.itemTypeLoading ||
        this.itemSubtypeLoading ||
        this.locationLoading ||
        this.bookingLoading
      );
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
    }
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
      if (isStartTime) this.setStartTime(instance.format(this.backendFormat));
      else this.setEndTime(instance.format(this.backendFormat));
    },

    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },

    disabledStartDate(current) {
      return current && this.endTimeLocal && current > this.endTimeLocal;
    },

    disabledStartTime() {
      if (this.endTimeLocal) {
        const h = this.endTimeLocal.hour();
        const m = this.endTimeLocal.minutes();
        const s = this.endTimeLocal.seconds();

        return {
          disabledHours: () => this.range(0, 24).splice(h, 24),
          disabledMinutes: () => this.range(0, 60).splice(m, 60),
          disabledSeconds: () => this.range(0, 60).splice(s, 60)
        };
      }
    },

    disabledEndDate(current) {
      return current && this.startTimeLocal && current < this.startTimeLocal;
    },

    disabledEndTime() {
      if (this.startTimeLocal) {
        let h = this.startTimeLocal.hour();
        let m = this.startTimeLocal.minutes();
        let s = this.startTimeLocal.seconds();

        if (m < 50) {
          m += 5;
          s = 0;
        } else if (h < 23) {
          h += 1;
          m = 0;
          s = 0;
        }

        return {
          disabledHours: () => this.range(0, 24).splice(0, h),
          disabledMinutes: () => this.range(0, 60).splice(0, m),
          disabledSeconds: () => this.range(0, 60).splice(0, s)
        };
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
</style>
