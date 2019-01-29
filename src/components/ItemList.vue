<template>
	<div id='itemList'>
		<div v-if='isLoading'>LOADING...</div>
		<ul class='bookList'>
				<li v-for='(item, index) in itemList' :key='index'>
				<Item :item='item'></Item>
			</li>
		</ul>
		<Pagination :count='itemCount' :size='size'></Pagination>
	</div>	
</template>

<script>
import store from '@/store';
import Item from '@/components/Item.vue';
import Pagination from '@/components/Pagination.vue';


export default {
	name: 'ItemList',
	store,
	components: {
		Item, Pagination
	},
    data(){
		return({
			size: 10
			// itemList: [
			// 	{ name: 'BOOK 01', price: 1000, description: 'Hello 01' },
			// 	{ name: 'BOOK 02', price: 2000, description: 'Hello 02' }
			// ]
		});
	},
	computed: {
		itemList(){
			return this.$store.getters.itemList;
		},
		itemCount(){
			return this.$store.getters.itemCount;
		},
		isLoading(){
			return this.$store.getters.isLoading;
		}
	},
	methods: {
		fetchItemList(){
			// this.isLoading = 1;
			this.$store.dispatch('fetchItemList')
			.then(x => {
				// this.isLoading = 0;
			});
		}
	}
}
</script>