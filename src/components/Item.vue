<template>
	<div class='book-item'>
        <h3>{{ item.name }}</h3>
        <h2>{{ item.price }}</h2>
        <img :src="`${imgUrl}${item.img}`" />
    </div>	
</template>

<script>
import { BASE_URL } from '@/constants/ApiUrls.js';

export default {
    name: 'Item',
    props: ['item'],
    data: () => ({
        imgUrl: `${BASE_URL}/public/images/`
    })
}
</script>