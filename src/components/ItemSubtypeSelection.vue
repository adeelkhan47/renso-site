<template>
  <div
    class="item-subtype-selection"
    v-if="itemSubtypeRaw && itemSubtypeRaw.item_sub_type_object"
  >
    <item-subtype-tile :itemSubtype="itemSubtypeRaw.item_sub_type_object" />
    <div class="actions">
      <a-button
        type="primary"
        shape="circle"
        icon="minus"
        class="action"
        :disabled="!canRemove || loading"
        @click="remove"
      />
      <a-statistic
        title="Select Quantity"
        :value="quantity"
        class="quantity-detail"
      >
        <template #suffix>
          <span> / {{ available }}</span>
        </template>
      </a-statistic>
      <a-button
        type="primary"
        shape="circle"
        icon="plus"
        class="action"
        :disabled="!canAdd || loading"
        @click="add"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import ItemSubtypeTile from "../views/ItemSubtypeTile.vue";

export default {
  name: "ItemSubtypeSelection",

  components: {
    ItemSubtypeTile
  },

  props: {
    itemSubtypeRaw: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState("itemSubtypeModule", ["loading"]),

    ...mapGetters("itemSubtypeModule", ["getSubtypeQuantity"]),

    available() {
      if (this.itemSubtypeRaw && this.itemSubtypeRaw.available_item_ids) {
        return this.itemSubtypeRaw.available_item_ids.length;
      } else return 0;
    },

    canRemove() {
      return this.quantity > 0;
    },

    canAdd() {
      return this.quantity < this.available;
    },

    quantity: {
      set() {},

      get() {
        if (this.itemSubtypeRaw && this.itemSubtypeRaw.item_sub_type_object) {
          return this.getSubtypeQuantity(
            this.itemSubtypeRaw.item_sub_type_object.id
          );
        } else return 0;
      }
    }
  },

  methods: {
    ...mapActions("itemSubtypeModule", [
      "addToItemSubtype",
      "removeFromItemSubtype"
    ]),

    add() {
      if (this.canAdd && this.itemSubtypeRaw) {
        this.addToItemSubtype(this.itemSubtypeRaw);
      }
    },

    remove() {
      if (
        this.canRemove &&
        this.itemSubtypeRaw &&
        this.itemSubtypeRaw.item_sub_type_object
      ) {
        this.removeFromItemSubtype(this.itemSubtypeRaw.item_sub_type_object.id);
      }
    }
  }
};
</script>

<style scoped>
.item-subtype-selection {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.action {
  margin: 5px 15px;
}

.quantity-detail {
  text-align: center;
}
</style>
