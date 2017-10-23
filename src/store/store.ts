import Vue from 'vue'
import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { State } from './state';

type Context = ActionContext<State, State>;

export const storeOptions = {
  state: {
    count: 0,
  },

  // actions without type-safety
  //
  // actions: {
  //   INCREMENT: function ({ commit, state }):void {
  //     commit('UPDATE_COUNT', state. + 1)
  //   },
  //   DECREMENT: function ({ commit }):void {
  //     commit('UPDATE_COUNT', this.state.count - 1)
  //   },
  //   SET_INITIAL_COUNT: function ({ commit }, count:number):void {
  //     commit('UPDATE_COUNT', count)
  //   }
  // },

  actions: {
    INCREMENT: function (context: Context):void {
      UPDATE_COUNT(context, this.state.count + 1)
    },
    DECREMENT: function (context: Context):void {
      UPDATE_COUNT(context, this.state.count - 1)
    },
    SET_INITIAL_COUNT: function (context: Context, count:number):void {
      UPDATE_COUNT(context, count)
    }
  },

  mutations: {
    UPDATE_COUNT: (state:State, count:number) => {
      state.count = count;
    }
  },
}

export const createStore = () => new Store<State>(storeOptions);

const { commit, read, dispatch } =
getStoreAccessors<State, State>("");

const actions = storeOptions.actions;
const mutations = storeOptions.mutations;

export const INCREMENT = dispatch(actions.INCREMENT);
export const DECREMENT = dispatch(actions.DECREMENT);
export const SET_INITIAL_COUNT = dispatch(actions.SET_INITIAL_COUNT);

export const UPDATE_COUNT = commit(mutations.UPDATE_COUNT);
