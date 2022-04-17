import { itemTypeApi } from "../../apis";

const itemTypeModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      selectedItemType: null,
      extraItemType: null,
      itemTypes: []
    };
  },

  getters: {
    itemTypes(state) {
      return state.itemTypes.slice(0);
    }
  },

  actions: {
    init(ctx) {
      ctx.commit("LOADING", true);
      itemTypeApi
        .getItemTypes()
        .then((res) => {
          if (res && res.data) {
            ctx.commit("ITEM_TYPES", res.data.objects);
          }
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOADING", false);
        });

      itemTypeApi
        .getExtraItemTypes()
        .then((res) => {
          if (res && res.data) {
            const types = res.data.objects;
            const extra = types.find(
              (obj) => obj.name && obj.name.toLowerCase() === "extra"
            );

            if (extra) ctx.commit("EXTRA_ITEM_TYPE", extra);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },

    setSelectedItemType(ctx, itemType) {
      if (itemType && Object.keys(itemType).length) {
        ctx.commit("SELECTED_ITEM_TYPE", itemType);
      }
    }
  },

  mutations: {
    LOADING(state, val) {
      state.loading = val;
    },

    ITEM_TYPES(state, itemTypes) {
      state.itemTypes = itemTypes;
    },

    SELECTED_ITEM_TYPE(state, itemType) {
      state.selectedItemType = itemType;
    },

    EXTRA_ITEM_TYPE(state, val) {
      state.extraItemType = val;
    }
  }
};

export default itemTypeModule;
