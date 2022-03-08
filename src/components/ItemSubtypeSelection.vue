<template>
  <div class="item-subtype-selection">
    <item-subtype-tile :itemSubtype="itemSubtype" />
    <div class="actions">
      <a-button
        type="primary"
        shape="circle"
        icon="minus"
        class="action"
        :disabled="!canRemove"
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
        :disabled="!canAdd"
        @click="add"
      />
    </div>
  </div>
</template>

<script>
import ItemSubtypeTile from "../views/ItemSubtypeTile.vue";

export default {
  name: "ItemSubtypeSelection",

  components: {
    ItemSubtypeTile
  },

  props: {
    itemSubtype: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      available: 7,
      quantity: 0
    };
  },

  computed: {
    canRemove() {
      return this.quantity > 0;
    },

    canAdd() {
      return this.quantity < this.available;
    }
  },

  methods: {
    add() {
      if (this.canAdd) this.quantity++;
    },

    remove() {
      if (this.canRemove) this.quantity--;
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
