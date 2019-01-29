<template>
	<div>
		<SearchBox></SearchBox>
		<ItemList></ItemList>
	</div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue';
import ItemList from '@/components/ItemList.vue';


export default {
	name: 'home',
	components: {
		SearchBox, ItemList
	}
}
</script>