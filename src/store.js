import Vue from 'vue';
import Vuex from 'vuex';
import {
	FETCH_ITEM_LIST,
	FETCH_ITEM_LIST_FAIL,
	IS_LOADING,
	UPDATE_FILTER
} from '@/constants/ActionTypes';
import { fetchItem } from '@/utils/ApiUtils';


Vue.use(Vuex);


export default new Vuex.Store({
	state: {
		itemList: [],
		itemCount: 0,
		isLoading: 0,
		isError: false,
		filterOptions: {
			limit: 10,
			page: 1
		}
	},
	actions: {
		fetchItemList({ commit }, options) {
			commit(IS_LOADING, { isLoading: 1 });
			commit(UPDATE_FILTER, options);
			return fetchItem(options)
				.then(
					data => {
						commit(FETCH_ITEM_LIST, data);
						commit(IS_LOADING, { isLoading: 0 });
						return data;
					},
					err => {
						commit(FETCH_ITEM_LIST_FAIL);
						commit(IS_LOADING, { isLoading: 0 });
						return false;
					}
				);
		},

		search({ commit }, options) {
			commit(IS_LOADING, { isLoading: 1 });
			commit(UPDATE_FILTER, options);
			return fetchItem(options)
				.then(
					data => {
						commit(FETCH_ITEM_LIST, data);
						commit(IS_LOADING, { isLoading: 0 });
						return data;
					},
					err => {
						commit(FETCH_ITEM_LIST_FAIL);
						commit(IS_LOADING, { isLoading: 0 });
						return false;
					}
				);
		}
	},
	mutations: {
		FETCH_ITEM_LIST(state, data) {
			state.itemList = data.list;
			state.itemCount = data.count;
		},
		FETCH_ITEM_LIST_FAIL(state, data) {
			state.isError = true;
		},
		IS_LOADING(state, data) {
			state.isLoading = data.isLoading;
		},
		UPDATE_FILTER(state, data) {
			state.filterOptions = {
				...state.filterOptions,
				...data
			};
		}
	},
	getters: {
		itemList(state) {
			return state.itemList;
		},
		itemCount(state) {
			return state.itemCount;
		},
		isLoading(state) {
			return state.isLoading;
		},
		filterOptions(state) {
			return state.filterOptions;
		}
	}
});
