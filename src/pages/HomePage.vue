<template>
  <div class="home-page">
    <item-type-selection />
    <div class="date-selection">
      <heading text="Select Time" />
      <div class="pickers">
        <a-date-picker
          class="picker"
          show-time
          placeholder="Start Time"
          format="D MMMM YYYY, h:mm a"
          v-model="startTime"
        />
        <a-date-picker
          class="picker"
          show-time
          placeholder="End Time"
          format="D MMMM YYYY, h:mm a"
          v-model="endTime"
        />
      </div>
    </div>
    <item-subtypes-selection />
    <extras-selection />
    <div class="actions">
      <a-button type="primary" size="large" class="action" @click="addToCart">
        Add to Cart
      </a-button>
    </div>
  </div>
</template>

<script>
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
      startTime: "",
      endTime: ""
    };
  },

  methods: {
    addToCart() {
      this.$router.push("/bookings");
    }
  }
};
</script>

<style scoped>
.date-selection {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  margin-bottom: 50px;
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
