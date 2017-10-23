import Vue from 'vue'
import Vuex from 'vuex';
import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { State } from './State';

type BasketContext = ActionContext<State, State>;

export const storeOptions = {
  state: {
    count: 0,
  },
  actions: {
    INCREMENT: function ({ commit, state: Counter }):void {
      commit('UPDATE_COUNT', this.state.count + 1)
    },
    DECREMENT: function ({ commit }):void {
      commit('UPDATE_COUNT', this.state.count - 1)
    },
    SET_INITIAL_COUNT: function ({ commit }, count:number):void {
      commit('UPDATE_COUNT', count)
    }
  },

  mutations: {
    UPDATE_COUNT: (state, count:number) => {
      state.count = count;
    }
  },
}

export const createStore = () => new Vuex.Store<State>(storeOptions);

const { commit, read, dispatch } =
getStoreAccessors<State, State>("");

const actions = storeOptions.actions;

const mutations = storeOptions.mutations;

export const INCREMENT = dispatch(actions.INCREMENT);
export const DECREMENT = dispatch(actions.DECREMENT);
export const SET_INITIAL_COUNT = dispatch(actions.SET_INITIAL_COUNT);

export const UPDATE_COUNT = commit(mutations.UPDATE_COUNT);
