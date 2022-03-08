import Vue from "vue";
import { itemSubtypeApi } from "../../apis";

const itemSubtypeModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      itemSubtypesMap: {}
    };
  },

  getters: {
    getItemSubtypes: (state) => (itemTypeId) => {
      if (
        itemTypeId &&
        Object.hasOwnProperty.call(state.itemSubtypesMap, itemTypeId)
      ) {
        return state.itemSubtypesMap[itemTypeId] || [];
      } else {
        return [];
      }
    }
  },

  actions: {
    populateItemSubTypes(ctx, itemTypeId) {
      if (
        !itemTypeId ||
        Object.hasOwnProperty.call(ctx.state.itemSubtypesMap, itemTypeId)
      ) {
        return;
      }

      ctx.commit("LOADING", true);
      itemSubtypeApi
        .getSubtypesByItemTypeId(itemTypeId)
        .then((res) => {
          if (res && res.data) {
            ctx.commit("ADD_ITEM_SUBTYPES", {
              itemTypeId,
              itemSubtypes: res.data.objects
            });
          }
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOADING", false);
        });
    }
  },

  mutations: {
    LOADING(state, val) {
      state.loading = val;
    },

    ADD_ITEM_SUBTYPES(state, { itemTypeId, itemSubtypes }) {
      Vue.set(state.itemSubtypesMap, itemTypeId, itemSubtypes);
    }
  }
};

export default itemSubtypeModule;
