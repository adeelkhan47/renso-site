<template>
  <div class="item-type-tile">
    <a-card class="item-type-tile-card">
      <a-avatar shape="square" :size="150" :src="itemType.image" />
      <a-statistic class="statistics" :value="itemType.name"> </a-statistic>
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

.item-type-tile-card {
  max-width: 175px;
}

.item-type-tile-card .statistics {
  width: 100%;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<style>
.item-type-tile-card .ant-card-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-type-tile-card .statistics .ant-statistic-content {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
