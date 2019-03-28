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
		isLoadingNextPage: false,
		filterOptions: {
			limit: 10,
			page: 1
		}
	},
	actions: {
		fetchItemList({ commit }, options) {
			commit(IS_LOADING, { isLoading: true });
			commit(UPDATE_FILTER, options);
			return fetchItem(options)
				.then(
					data => {
						commit(FETCH_ITEM_LIST, data);
						commit(IS_LOADING, { isLoading: false });
						return data;
					},
					err => {
						commit(FETCH_ITEM_LIST_FAIL);
						commit(IS_LOADING, { isLoading: false });
						return false;
					}
				);
		},

		search({ commit }, options) {
			commit(IS_LOADING, { isLoading: true });
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

		nextPage({ commit }, options){
			commit('IS_LOADING_NEXT_PAGE', { isLoadingNextPage: true });
			commit(UPDATE_FILTER, options);
			return fetchItem(options)
				.then(
					data => {
						commit('FETCH_NEXT_PAGE', data);
						commit('IS_LOADING_NEXT_PAGE', { isLoadingNextPage: false });
						return data;
					},
					err => {
						commit(FETCH_ITEM_LIST_FAIL);
						commit('IS_LOADING_NEXT_PAGE', { isLoadingNextPage: false });
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
		IS_LOADING_NEXT_PAGE(state, data) {
			state.isLoadingNextPage = data.isLoadingNextPage;
		},
		UPDATE_FILTER(state, data) {
			state.filterOptions = {
				...state.filterOptions,
				...data
			};
		},
		FETCH_NEXT_PAGE(state, data) {
			state.itemList = [...state.itemList, ...data.list];
			state.itemCount = data.count;
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
		isLoadingNextPage(state) {
			return state.isLoadingNextPage;
		},
		filterOptions(state) {
			return state.filterOptions;
		}
	}
});
