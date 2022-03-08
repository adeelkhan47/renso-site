<template>
  <div class="booking-tile" v-if="booking">
    <div class="content">
      <div class="row">
        <a-avatar class="block" :size="60" :src="booking.item.image" />
        <a-statistic
          title="Item name"
          :value="booking.item.name"
          class="block space-1"
        />
      </div>
      <div class="row">
        <a-statistic
          title="Sub-Category"
          :value="booking.item.item_subtype.name"
          class="block space-3"
        />
        <a-statistic
          title="Category"
          :value="booking.item.item_type.name"
          class="block space-2"
        />
      </div>
    </div>
    <div class="content">
      <a-statistic
        title="Booking Status"
        :value="booking.booking_status.name"
        class="block space-2"
      />
      <a-statistic
        title="location"
        :value="booking.location"
        class="block space-2"
      >
        <template #prefix>
          <a-icon type="environment" />
        </template>
      </a-statistic>
    </div>
    <div class="content">
      <a-statistic
        title="Start Time"
        :value="time(booking.start_time)"
        class="block space-3 time"
      />
      <a-statistic
        title="End Time"
        :value="time(booking.end_time)"
        class="block space-3"
      />
    </div>
    <div class="content">
      <a-statistic
        title="Price"
        :value="'$ ' + price(booking)"
        class="block space-2"
      />
      <a-statistic
        title="Discount"
        :value="booking.discount + ' %'"
        class="block space-2"
      />
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "BookingTile",

  props: {
    booking: {
      type: Object,
      required: true
    }
  },

  computed: {
    time: () => (time) => {
      if (!time) return "";
      else return moment(time).format("L, LT");
    },

    price: () => () => {
      return (Math.random() * 100).toFixed(2);
    }
  }
};
</script>

<style scoped>
.booking-tile {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 5px 10px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.block {
  margin: 8px;
}

.space-1 {
  width: 200px;
}

.space-2 {
  width: 130px;
}

.space-3 {
  width: 180px;
}

@media only screen and (max-width: 900px) {
  .booking-tile {
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (max-width: 500px) {
  .content,
  .row {
    flex-direction: column;
    align-items: center;
  }

  .block {
    text-align: center;
  }
}
</style>

<style>
.booking-tile .ant-statistic-content-value {
  font-size: 20px;
}

.space-3 .ant-statistic-content-value {
  font-size: 18px;
}
</style>
