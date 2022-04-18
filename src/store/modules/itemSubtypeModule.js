import { itemSubtypeApi } from "../../apis";

const itemSubtypeModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      loading_ex: false,
      itemSubtypes: [],
      extras: [],
      selectedItemSubtypes: {}
    };
  },

  getters: {
    getSubtypeQuantity(state) {
      return (id) => {
        if (Object.hasOwnProperty.call(state.selectedItemSubtypes, id)) {
          return state.selectedItemSubtypes[id].length;
        } else {
          return 0;
        }
      };
    },

    canAddToCart(state) {
      let can = false;
      for (const key in state.selectedItemSubtypes) {
        const selection = state.selectedItemSubtypes[key];
        if (selection && selection.length) {
          can = true;
          break;
        }
      }
      return can;
    },

    getSelectionDetails(state) {
      const selectedItems = [];

      for (const key in state.selectedItemSubtypes) {
        const selection = state.selectedItemSubtypes[key];
        if (selection && selection.length) {
          const id = Number.parseInt(key);
          selectedItems.push({
            item_sub_type_id: id,
            item_ids: selection
          });
        }
      }

      return selectedItems;
    }
  },

  actions: {
    getItemSubtypes(ctx, { locationId, itemTypeId, startTime, endTime }) {
      ctx.commit("LOADING", true);
      itemSubtypeApi
        .getItemSubtypes(locationId, itemTypeId, startTime, endTime)
        .then((res) => {
          if (res && res.data) {
            ctx.commit("ITEM_SUBTYPES", res.data.objects);
          }
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOADING", false);
        });
    },

    getExtraSubtypes(ctx, { locationId, itemTypeId, startTime, endTime }) {
      ctx.commit("LOADING_EX", true);
      itemSubtypeApi
        .getExtraItemSubtypes(locationId, itemTypeId, startTime, endTime)
        .then((res) => {
          if (res && res.data) {
            ctx.commit("EXTRAS", res.data.objects);
          }
          ctx.commit("LOADING_EX", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOADING_EX", false);
        });
    },

    setItemSubtypes(ctx, val) {
      ctx.commit("ITEM_SUBTYPES", val);
    },

    setExtraSubtypes(ctx, val) {
      ctx.commit("EXTRAS", val);
    },

    addToItemSubtype(ctx, rawObj) {
      if (rawObj && rawObj.item_sub_type_object && rawObj.available_item_ids) {
        if (rawObj.available_item_ids.length) {
          const itemSubtypeId = rawObj.item_sub_type_object.id;
          if (
            Object.hasOwnProperty.call(
              ctx.state.selectedItemSubtypes,
              itemSubtypeId
            )
          ) {
            const existing = ctx.state.selectedItemSubtypes[itemSubtypeId];
            const remaining = rawObj.available_item_ids.filter(
              (id) => !existing.includes(id)
            );
            ctx.commit("ADD_SELECTED_ITEM_SUBTYPE", {
              key: itemSubtypeId,
              value: [...existing, remaining[0]]
            });
          } else {
            ctx.commit("ADD_SELECTED_ITEM_SUBTYPE", {
              key: itemSubtypeId,
              value: [rawObj.available_item_ids[0]]
            });
          }
        }
      }
    },

    removeFromItemSubtype(ctx, id) {
      if (Object.hasOwnProperty.call(ctx.state.selectedItemSubtypes, id)) {
        ctx.commit("REMOVE_SELECTED_ITEM_SUBTYPE", id);
      }
    }
  },

  mutations: {
    LOADING(state, val) {
      state.loading = val;
    },

    LOADING_EX(state, val) {
      state.loading_ex = val;
    },

    ITEM_SUBTYPES(state, value) {
      state.itemSubtypes = value;
    },

    EXTRAS(state, val) {
      state.extras = val;
    },

    ADD_SELECTED_ITEM_SUBTYPE(state, { key, value }) {
      state.selectedItemSubtypes[key] = value;
      state.selectedItemSubtypes = JSON.parse(
        JSON.stringify(state.selectedItemSubtypes)
      );
    },

    REMOVE_SELECTED_ITEM_SUBTYPE(state, id) {
      state.selectedItemSubtypes[id].length =
        state.selectedItemSubtypes[id].length - 1;

      state.selectedItemSubtypes = JSON.parse(
        JSON.stringify(state.selectedItemSubtypes)
      );
    },

    RESET_SELECTION(state) {
      state.selectedItemSubtypes = {};
    }
  }
};

export default itemSubtypeModule;
