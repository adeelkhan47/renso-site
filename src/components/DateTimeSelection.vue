<template>
  <div class="date-time-selection">
    <a-date-picker
      :disabled="timePickerLoading || dayPickerLoading"
      class="picker"
      :disabled-date="disabledStartDate"
      :disabled-time="disabledStartTime"
      :show-time="showTime"
      :showNow="false"
      :placeholder="$t('startTime')"
      format="D MMMM YYYY, h:mm a"
      :mode="startTimeMode"
      :value="startTimeLocal"
      @change="(i) => setTime(i, true)"
      @panelChange="(i, mode) => changeTimeMode(i, mode, true)"
    />
    <a-date-picker
      :disabled="!startTimeLocal || timePickerLoading || dayPickerLoading"
      :disabled-date="disabledEndDate"
      :disabled-time="disabledEndTime"
      class="picker"
      :show-time="showTime"
      :showNow="false"
      :placeholder="$t('endTime')"
      format="D MMMM YYYY, h:mm a"
      :mode="endTimeMode"
      :value="endTimeLocal"
      @change="(i) => setTime(i, false)"
      @panelChange="(i, mode) => changeTimeMode(i, mode, false)"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { dayPickerApi } from "../apis";

const MIN_BOOKING_MINUTES = 30;

export default {
  name: "DateTimeSelection",

  data() {
    return {
      dayPickerLoading: false,
      startTimeLocal: "",
      endTimeLocal: "",
      dayPicker: null,
      backendFormat: "YYYY-MM-DD HH:mm:ss",
      startTimeMode: "date",
      endTimeMode: "date",
      showTime: { format: "HH:mm" }
    };
  },

  computed: {
    ...mapState(["startTime", "endTime"]),

    ...mapState("timePickerModule", {
      timePickerLoading: "loading",
      timePickers: "timePickers"
    }),

    ...mapState("itemTypeModule", {
      selectedItemType: "selectedItemType"
    }),

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
    }
  },

  watch: {
    selectedItemType() {
      if (this.selectedItemType && Object.keys(this.selectedItemType).length) {
        this.setDayPicker(this.selectedItemType.id);
        this.showTime =
          this.selectedItemType.show_time_picker === true
            ? { format: "HH:mm" }
            : false;
      }
    },

    startTime() {
      if (
        this.startTimeLocal &&
        this.startTimeLocal.format(this.backendFormat) !== this.startTime
      ) {
        this.startTimeLocal = this.startTime;
      }
    },

    endTime() {
      if (
        this.endTimeLocal &&
        this.endTimeLocal.format(this.backendFormat) !== this.endTime
      ) {
        this.endTimeLocal = this.endTime;
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

    ...mapActions("timePickerModule", {
      initializeTimePicker: "init"
    }),

    changeTimeMode(instance, mode, isStartMode) {
      if (isStartMode) {
        this.startTimeMode = mode;
      } else {
        this.endTimeMode = mode;
      }
    },

    getDisabledTime(weekdayNum, current) {
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

            const cH = current.hour();

            // Disabling hours
            for (let h = startH + 1; h < endH; h++) {
              hours[h] = true;
            }

            // Disabling minutes
            if (startH <= cH && endH >= cH) {
              if (cH === startH) {
                for (let m = startM; m < 60; m++) {
                  minutes[m] = true;
                }
              } else if (cH === endH) {
                for (let m = 0; m <= endM; m++) {
                  minutes[m] = true;
                }
              } else {
                for (let m = 0; m < 60; m++) {
                  minutes[m] = true;
                }
              }
            }
          }
        });
      }

      return {
        hours: Object.keys(hours).map((val) => Number.parseInt(val)),
        minutes: Object.keys(minutes).map((val) => Number.parseInt(val))
      };
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
    },

    disabledEndDate(current) {
      return current && this.startTimeLocal && current < this.startTimeLocal;
    },

    disabledStartTime(current) {
      if (current) {
        const disabledTimes = this.getDisabledTime(current.day(), current);
        return {
          disabledHours: () => disabledTimes.hours,
          disabledMinutes: () => disabledTimes.minutes
        };
      }
    },

    disabledStartDate(current) {
      return this.disabledWeekdays.includes(current.day());
    },

    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },

    setTime(instance, isStartTime) {
      if (isStartTime) {
        if (
          instance &&
          this.selectedItemType &&
          this.selectedItemType.show_time_picker === false
        ) {
          instance.set({ hour: 0, minute: 0, seconds: 0 });
        }

        this.startTimeLocal = instance;
        this.startTimeMode = "time";
        this.setStartTime(instance.format(this.backendFormat));
        this.endTimeLocal = "";
        this.setEndTime("");
      } else {
        if (
          instance &&
          this.selectedItemType &&
          this.selectedItemType.show_time_picker === false
        ) {
          instance.set({ hour: 23, minute: 59, seconds: 59 });
        }

        if (this.endTimeMode === "time") {
          this.endTimeLocal = instance;
        } else {
          this.endTimeLocal = this.getExtendedTime(instance);
        }
        this.setEndTime(this.endTimeLocal.format(this.backendFormat));
        this.endTimeMode = "time";
      }
    },

    getExtendedTime(instance) {
      if (!this.startTimeLocal || !instance) return;

      const extendIt =
        this.startTimeLocal >= instance ||
        this.startTimeLocal.format("MMMM Do YYYY, HH:mm") ===
          instance.format("MMMM Do YYYY, HH:mm");

      if (extendIt) {
        instance.add(MIN_BOOKING_MINUTES, "minutes");
      }
      return instance;
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
    }
  }
};
</script>

<style scoped>
.date-time-selection {
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
