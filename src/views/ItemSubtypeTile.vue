<template>
  <div class="item-subtype-tile">
    <div class="content">
      <a-avatar class="description" :size="60" :src="itemSubtype.image" />
      <a-statistic
        :title="$t('subcategoryName')"
        :value="itemSubtype.name"
        class="description name"
      />
    </div>
    <div class="content">
      <!-- <a-statistic
        title="Price"
        :value="itemSubtype.price || 0"
        class="description"
      >
        <template #suffix>
          <a-icon type="dollar" />
        </template>
      </a-statistic> -->
      <a-statistic
        :title="$t('personCount')"
        :value="itemSubtype.person || 0"
        class="description"
      >
        <template #suffix>
          <a-icon type="user" />
        </template>
      </a-statistic>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSubtypeTile",

  props: {
    itemSubtype: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.item-subtype-tile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  padding: 2px 5px;
  border: 1px solid #e8e8e8;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2px;
}

.name {
  width: 150px;
}

.description {
  margin: 5px 15px;
}

@media only screen and (max-width: 400px) {
  .description {
    margin: 10px 15px;
  }
}
</style>

<style>
.item-subtype-tile .ant-statistic-content-value {
  font-size: 18px;
}

.item-subtype-tile .ant-statistic-content {
  font-size: 14px;
}
</style>
