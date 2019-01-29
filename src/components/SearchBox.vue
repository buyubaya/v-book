<template>
	<div>
        <input type='text' v-model='searchText' />
        <button @click='cancel'>CANCEL</button>
    </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';
import { Subject } from 'rxjs';
// import 'rxjs-compat/add/operator/debounceTime';
// import 'rxjs-compat/add/operator/map';
// import 'rxjs-compat/add/operator/distinctUntilChanged';
// import 'rxjs-compat/add/operator/switchMap';
// import 'rxjs-compat/add/operator/takeUntil';


export default {
    name: 'home',
    store,
    data(){
		return({
			searchText: ''	
		});
	},
	mounted(){
		this.subject = new Subject();
		this.notifier = new Subject();
		
		this.subject
		.debounceTime(700)
		.distinctUntilChanged()
		.switchMap(x => {
			return this.$store.dispatch('search', { search: x });
		})
		.takeUntil(this.notifier)
		.subscribe(x => {
			console.log(`subscribe ${x.count} items`);
			this.$store.commit(FETCH_ITEM_LIST, x);
		});
	},
	created(){
		// this.search = _.debounce(this.getSearch, 1000);
	},
	watch: {
		searchText(to, from){
			this.search(to);
		}	
	},
	methods: {
		search(x){
			// this.subject.next(x);
			const filterOptions = this.$store.getters.filterOptions;
			this.$store.dispatch('search', { ...filterOptions, search: x, page: 1 })
			.catch(err => console.log('ERROR'));
		},
		// search: _.debounce((x) => {
		// 	this.$store.dispatch('search', { search: x });
		// }, 700),
		// getSearch(){
		// 	this.$store.dispatch('search', { search: 'the' });	
		// },
		cancel(){
			if(this.notifier){
			   this.notifier.next(true);
			}
		}
	}
}
</script>