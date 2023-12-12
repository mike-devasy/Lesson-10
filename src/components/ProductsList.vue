<template>
	<div class="container-cards">
		<div  v-for="noteData in getSelectedProductsList" :key="noteData.id" class="card-container">
			<a class="card" :href="noteData.link">
			<div class="card__image">
			<img :src="noteData.imgSrc" alt="note">
			</div>
			<div class="card__title">{{ noteData.title }}</div>
			<div class="card__price"><span>{{noteData.price}}₴</span></div>
			</a>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex' 
	export default {
		name:'ProductsList',
		computed:{
...mapGetters(['getProductsList', 'getSelectedProductsList'])
		},
		created(){
			this.loadData()
		},

		methods: {
		 ...mapActions(['loadData'])
		},
	}
</script>

<style lang="css" scoped>
.container-cards{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}
 .card-container{
	padding-bottom: 30px;
	/* display: flex;
	justify-content: space-between; */
 }
	.card__image{
width: 300px;
padding-bottom: 80px ;
}
.card__image img{
	display: inline-block;
width: 80%;
    }

    .card__title {
			padding-bottom: 20px;
    }

    .card__price {
			font-size: 25px;
			color: red;
    }

</style>