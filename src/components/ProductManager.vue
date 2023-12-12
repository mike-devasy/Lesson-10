<template>
	<div class="container">
<products-filters/>
<products-list/>
	</div>
</template>
<script>
import ProductsFilters from '@/components/ProductsFilters.vue';
import ProductsList from '@/components/ProductsList.vue';
	export default {
		name:'ProductManager',
		components:{ProductsFilters,
		ProductsList},

	}
</script>

<style lang="css" scoped>
.container{
	display: flex;
	gap: 50px;
}
</style>