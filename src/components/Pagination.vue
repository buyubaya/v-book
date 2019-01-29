<template>
	<ul class='paginationList'>
        <li :key='index' :class='{"is-active": currentPage === x}' v-for='(x, index) in totalPage' @click='goToPage(x)'><a href='javascript:;'>{{ x }}</a></li>
    </ul>	
</template>

<script>
import store from '@/store';


export default {
    name: 'Pagination',
    store,
    props: ['count', 'size'],
    computed: {
		totalPage(){
			return Math.ceil(this.count / this.size);
		},
		currentPage(){
			return this.$store.getters.filterOptions.page;
		}
	},
	methods: {
		goToPage(x){
			const filterOptions = this.$store.getters.filterOptions;
			this.$store.dispatch('search', { ...filterOptions, page: x })
			.catch(err => console.log('ERROR'));
			return false;
		}
	}
}
</script>