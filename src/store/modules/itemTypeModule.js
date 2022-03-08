import { itemTypeApi } from "../../apis";

const itemTypeModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      selectedItemType: null,
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
    },

    setSelectedItemType(ctx, itemType) {
      if (itemType && Object.keys(itemType).length) {
        ctx.commit("SELECTED_ITEM_TYPE", itemType);
        ctx.dispatch("itemSubtypeModule/populateItemSubTypes", itemType.id, {
          root: true
        });
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
    }
  }
};

export default itemTypeModule;
