<template>
 
	<div class="container">
		<div class="sellers-container" :class="{'green-border': isNotSelectedSeller}">
		<h3>Продавець:</h3>
		<div  v-for="(seller) in getSellersList" :key="seller"   class="seller-item">
		<input class="seller-input"   type="checkbox" :value="seller"  @change="onSelectToSeller(seller)">
		<label   class="seller-title">{{ seller }}</label>
		</div>
		</div>
		<div class="brends-container" :class="{'green-border': isNotSelectedBrand}">
		<h3>Бренд:</h3>
		<div  v-for="(brand) in getBrandsList" :key="brand"   class="seller-item">
		<input   type="checkbox" @change="onSelectToBrand(brand)" :value="brand">
		<label   class="seller-title">{{brand }}</label>
		</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
	export default {
		name:'ProductsFilters',
		computed:{
			...mapGetters(['getSellersList', 'getBrandsList', 'isNotSelectedSeller', 'isNotSelectedBrand'])

	},
 methods: {
 ...mapActions(['onSelectToSeller','onSelectToBrand'])
 },
	
	}

</script>

<style lang="css" scoped>
.container {
	padding-left: 30px;
	display: flex;
	flex-direction: column;
	align-items: start;
}

.sellers-container{
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 20px;
}
.green-border{
	border:3px solid green;
	border-radius: 10px;
}
.seller-item {}

.seller-input {
	display: inline-block;
}

.seller-title {}

.brends-container {
	padding: 20px 60px 20px 20px;
	display: flex;
	flex-direction: column;
	align-items: start;
}
input{
	display: inline-block;
}
</style>