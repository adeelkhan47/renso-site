<template>
  <div class="booking-tile" v-if="booking">
    <div class="content">
      <div class="row">
        <a-avatar class="block avatar" :size="55" :src="booking.item.image" />
        <a-statistic
          :title="$t('itemName')"
          :value="booking.item.name"
          class="block space"
        />
        <a-statistic
          :title="$t('subcategory')"
          :value="booking.item.item_subtype.name"
          class="block space"
        />
        <!-- <a-statistic
          :title="$t('category')"
          :value="booking.item.item_type.name"
          class="block space"
        /> -->
        <a-statistic
          :title="$t('location')"
          :value="location(booking)"
          class="block space"
        >
          <template #prefix>
            <a-icon type="environment" />
          </template>
        </a-statistic>
        <a-statistic
          :title="$t('startTime')"
          :value="time(booking.start_time, format)"
          class="block space"
        />
        <a-statistic
          :title="$t('endTime')"
          :value="time(booking.end_time, format)"
          class="block space"
        />
        <a-statistic
          :title="$t('price')"
          :value="booking.cost"
          class="block space"
        >
          <template #prefix> € </template>
        </a-statistic>
        <a-statistic :title="$t('taxes')" :value="taxes" class="block space" />
      </div>
      <div class="row">
        <a-button
          type="danger"
          shape="circle"
          icon="delete"
          class="action"
          @click="() => deleteB(booking)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";

export default {
  name: "BookingTile",

  props: {
    booking: {
      type: Object,
      required: true
    }
  },

  computed: {
    format() {
      const showTime = this.booking?.item?.item_type.show_time_picker;
      return showTime ? "L, LT" : "L";
    },

    time: () => (time, format) => {
      if (!time) return "";
      else return moment(time).format(format);
    },

    location: () => (booking) => {
      if (booking && booking.location && booking.location.name) {
        return booking.location.name;
      } else return "-";
    },

    taxes() {
      let temp = "-";
      if (
        this.booking &&
        this.booking.item &&
        this.booking.item.item_subtype &&
        this.booking.item.item_subtype.itemSubTypeTaxs &&
        this.booking.item.item_subtype.itemSubTypeTaxs.length
      ) {
        const taxes = this.booking.item.item_subtype.itemSubTypeTaxs.map(
          (obj) => {
            return obj.tax.name + " (" + obj.tax.percentage + "%)";
          }
        );
        temp = taxes.join(", ");
      }
      return temp;
    }
  },

  methods: {
    ...mapActions("bookingModule", ["deleteBooking"]),

    deleteB(booking) {
      this.deleteBooking(booking.id);
    }
  }
};
</script>

<style scoped>
.booking-tile {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 2px 3px;
  margin-right: 10px;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 4px 6px;
}

.action {
  margin: 5px;
}

.block {
  margin: 8px;
}

.space {
  min-width: 100px;
  width: auto;
  margin: 5px 15px;
}

@media only screen and (max-width: 750px) {
  .row {
    justify-content: flex-start;
  }
}

@media only screen and (max-width: 550px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .row {
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  .block {
    text-align: center;
  }
}
</style>

<style>
.booking-tile .ant-statistic-content {
  font-size: 14px;
}

.booking-tile .ant-statistic-content-value {
  font-size: 18px;
}

.space .ant-statistic-content-value {
  font-size: 16px;
}

.action .anticon {
  line-height: 2;
}

@media only screen and (max-width: 400px) {
  .booking-tile {
    width: 100%;
    margin: 10px;
  }

  .block,
  .space {
    width: 100%;
  }

  .booking-tile .ant-statistic-content {
    font-size: 11px;
  }

  .booking-tile .ant-statistic-content-value {
    font-size: 15px;
  }

  .space .ant-statistic-content-value {
    font-size: 14px;
  }
}
</style>
