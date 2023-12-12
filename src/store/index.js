import { createStore } from 'vuex'
import { notebooksList } from '@/data/notebooks'
 
const store = createStore({
    state() {
        return {
            productsList: [],
	selectedProductsList:[],
						 
						
            selectedBrandId: null,
            selectedSellerId: null,
        }
    },
    getters: {
			getSelectedProductsList:({selectedProductsList}) => selectedProductsList,
      getBrandsList:(state) => { 
				state.productsList = notebooksList
				return [...new Set(state.productsList.map(note => note.brand))]},
      getSellersList:(state) => {
				state.productsList = notebooksList
			 return [...new Set(state.productsList.map(note => note.seller))]
			 
		},
		isNotSelectedSeller:(state) =>{
			return !state.selectedSellerId
		},
		isNotSelectedBrand:(state) => {
			return !state.selectedBrandId

		},
    },
    mutations: {
        setData(state, { notebooksList }) {
            state.selectedProductsList = notebooksList
        },
	 
				setSellerId(state, seller){
		 
					if(!state.selectedSellerId)
					 {state.selectedSellerId = seller
					 state.selectedProductsList =  state.selectedProductsList.filter((note) => note.seller === state.selectedSellerId)}
					 else {
						state.selectedSellerId  = null
						state.selectedProductsList = state.productsList
					} 
				},
				setBrandId(state, brand){
					if(!state.selectedBrandId){
					 state.selectedBrandId = brand
					 state.selectedProductsList = state.selectedProductsList.filter((note) =>note.brand === state.selectedBrandId)}
					 else{
						state.selectedBrandId = null
						state.selectedProductsList = state.productsList
					 }
				},
    
	 
    },
    actions: {
        loadData({ commit }) {
            commit('setData', {notebooksList})
        },
				onSelectToSeller({commit}, seller){
					commit('setSellerId', seller)
				},
				onSelectToBrand({commit}, brand){
					commit('setBrandId', brand)
				},
    },
	
})

export default store

 
