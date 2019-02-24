<template>
	<div class='item-list-area'>
		<div class='bg-skew'></div>
		<div class='item-list-inner'>
			<div v-if='isLoading'>LOADING...</div>
			<ul class='card-list'>
				<li class='card-item' v-for='(item, index) in itemList' :key='index'>
					<Item :item='item'></Item>
				</li>
			</ul>
			<Pagination :count='itemCount' :size='size'></Pagination>
		</div>
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
	beforeMount(){
		const filterOptions = this.$store.getters.filterOptions;
		this.$store.dispatch('fetchItemList', { ...filterOptions });
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