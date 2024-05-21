const initialState = {
 likedProducts: []
}
 
const likeReducer = (state = initialState, action ) => {
   console.log(action);
  switch(action.type){
   case "LIKE_PRODUCT":
      return {
         likedProducts: [...state.likedProducts, action.product]
      }

   case "REMOVE_FROM_LIKED":
      let removedProductIndex = state.likedProducts.findIndex (p => p?.id === action?.id)
      state.likedProducts.splice(removedProductIndex, 1)
      return {
         likedProducts: [...state.likedProducts]
      }
      default:
         return state
  }

}

export default likeReducer;