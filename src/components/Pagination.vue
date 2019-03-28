<template>
	<ul class='pagination' id="pageTracker" v-if='!isLoading'>
		<li v-if='isLoadingNextPage' class='btn-next-page'>Loading more...</li>
		<!-- <li :key='index' :class='{"is-active": currentPage === x}' v-for='(x, index) in totalPage' @click='goToPage(x)'><a href='javascript:;'>{{ x }}</a></li> -->
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
		},
		isLoading(){
			return this.$store.getters.isLoading;
		},
		isLoadingNextPage(){
			return this.$store.getters.isLoadingNextPage;
		}
	},
	mounted(){
		window.addEventListener('scroll', this._scrollListener);
	},
	destroyed(){
		window.removeEventListener('scroll', this._scrollListener);
	},
	methods: {
		goToPage(x){
			const filterOptions = this.$store.getters.filterOptions;
			this.$store.dispatch('search', { ...filterOptions, page: x })
			.catch(err => console.log('ERROR'));
			return false;
		},
		nextPage(){
			const filterOptions = this.$store.getters.filterOptions;
			this.$store.dispatch('nextPage', { ...filterOptions, page: filterOptions.page + 1 })
			.catch(err => console.log('ERROR'));
			return false;
		},
		_scrollListener(){
			let pageTracker = document.querySelector('#pageTracker');
			if(pageTracker){
				let rect = pageTracker.getBoundingClientRect();
			
				if(rect.top <= window.innerHeight){
					if(this.currentPage < this.totalPage){
						if(!this.isLoading && !this.isLoadingNextPage){
							this.nextPage();
						}
					}
					else {
						window.removeEventListener('scroll', this._scrollListener);
					}
				}
			}
		}
	}
}
</script>