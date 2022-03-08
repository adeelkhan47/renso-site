<template>
  <div class="item-type-tile">
    <a-card class="item-type-tile-card">
      <a-avatar shape="square" :size="130" :src="itemType.image" />
      <a-statistic :title="'Category #' + itemType.id" :value="itemType.name">
      </a-statistic>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "ItemTypeTile",

  props: {
    itemType: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.item-type-tile {
  padding: 3px;
  cursor: pointer;
}
</style>

<style>
.item-type-tile-card .ant-card-body {
  padding: 15px;
}
</style>
