<template>
	<div class='bookItem'>
        <h3>{{ item.name }}</h3>
        <h2>{{ item.price }}</h2>
    </div>	
</template>

<script>
export default {
    name: 'Item',
    props: ['item']
}
</script>