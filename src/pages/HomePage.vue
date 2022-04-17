<template>
  <div class="home-page">
    <template>
      <item-type-selection />
      <div class="content-selection">
        <heading :text="$t('selectTime')" />
        <date-time-selection></date-time-selection>
      </div>
      <div class="content-selection">
        <heading :text="$t('selectLocation')" />
        <div class="field-wrapper">
          <a-select
            :default-value="selectedLocation"
            class="field select"
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

import ItemTypeSelection from "../components/ItemTypeSelection.vue";
import Heading from "../views/Heading.vue";
import DateTimeSelection from "../components/DateTimeSelection.vue";
import ItemSubtypesSelection from "../components/ItemSubtypesSelection.vue";
import ExtrasSelection from "../components/ExtrasSelection.vue";

export default {
  name: "HomePage",

  components: {
    ItemTypeSelection,
    Heading,
    DateTimeSelection,
    ItemSubtypesSelection,
    ExtrasSelection
  },

  computed: {
    ...mapState(["startTime", "endTime"]),
    ...mapState("locationModule", {
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

    ...mapGetters("itemSubtypeModule", ["canAddToCart", "getSelectionDetails"]),

    loading() {
      return (
        this.itemTypeLoading ||
        this.itemSubtypeLoading ||
        this.locationLoading ||
        this.bookingLoading
      );
    },

    locations() {
      if (this.selectedItemType && this.selectedItemType.itemTypeLocations) {
        return this.selectedItemType.itemTypeLocations.map(
          (obj) => obj.location
        );
      } else {
        return [];
      }
    }
  },

  methods: {
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

.field-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.field {
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
