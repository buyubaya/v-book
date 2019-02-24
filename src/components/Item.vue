<template>
	<div class='card-item-inner'>
        <h3 class='card-title'>{{ item.name }}</h3>
        <img :src="`${imgUrl}${item.img}`" />
        <h2 class='card-price'>{{ item.price }}</h2>
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