<template>
  <div class="item-type-selection">
    <template v-if="itemTypes && itemTypes.length">
      <splide
        ref="splider"
        :options="options"
        @splide:click="selectSlide"
        @splide:active="itemActivated"
      >
        <splide-slide
          v-for="itemType of itemTypes"
          :key="itemType.id"
          :itemType="JSON.stringify(itemType)"
        >
          <item-type-tile :itemType="itemType" />
        </splide-slide>
      </splide>
    </template>
    <template v-else>
      <div class="no-item-types">
        <a-empty :image="$empty.PRESENTED_IMAGE_SIMPLE" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import ItemTypeTile from "../views/ItemTypeTile.vue";

export default {
  name: "ItemTypeSelection",

  components: {
    ItemTypeTile
  },

  data() {
    return {
      options: {
        perMove: 1,
        gap: "10px",
        drag: "free",
        rewind: true,
        width: "100%",
        autoWidth: true,
        pagination: false,
        speed: 100,
        breakpoints: {
          400: {
            perPage: 1,
            type: "loop",
            focus: "center"
          }
        }
      }
    };
  },

  computed: {
    ...mapState("itemTypeModule", ["itemTypes"])
  },

  methods: {
    ...mapActions("itemTypeModule", {
      setSelectedItemType: "setSelectedItemType"
    }),

    selectSlide(slide, event) {
      if (event && Object.hasOwnProperty.call(event, "index")) {
        this.$refs.splider.go(event.index);
      }
    },

    itemActivated(slide, event) {
      if (event && event.slide && event.slide.hasAttribute("itemType")) {
        let itemType = event.slide.getAttribute("itemType");
        if (itemType && itemType.length) {
          itemType = JSON.parse(itemType);
          this.setSelectedItemType(itemType);
        }
      }
    }
  }
};
</script>

<style scoped>
.item-type-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
</style>

<style>
.item-type-selection .splide {
  padding: 0 15px;
}

.splide__track {
  margin: 0px 20px;
}

.splide__arrow.splide__arrow--prev {
  left: 0em;
  font-size: 10px;
}
.splide__arrow.splide__arrow--next {
  right: 0em;
  font-size: 10px;
}

.item-type-selection .splide__slide .ant-card {
  border-width: 2px;
  border-radius: 5px;
}

.item-type-selection .splide__slide.is-active .ant-card {
  border-color: #009ce6;
}

.item-type-selection
  .splide__slide.is-active
  .ant-card
  .ant-statistic-content-value {
  color: #009ce6;
}
</style>
