import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import "./MainProducts.scss";
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import {BsFillSuitHeartFill} from "react-icons/bs";
import { FiHeart } from "react-icons/fi"; 


const MainProducts = () => {
   const [data, isLoading] = useFetchData("/products?offset=0&limit=20")
   const dispatch = useDispatch(); 
   const {likedProducts} = useSelector(state => state.likeReducer );
   function trimDescription (str){
      return str.split(" ") .slice (0, 8) .join(" ") + "..."
   }

   function addToLike (product){
      dispatch ({product, type: "LIKE_PRODUCT"})
   }

   function removeFromLikeProducts (product){
      dispatch({id: product.id, type: "REMOVE_FROM_LIKED"})
   }
   return (
      <section className='main-products'>
         <h2 className='main-products__title'>PREMIUM E'LONLAR</h2>
         <Container>
            <div className="main-product-wrapper">
               { !isLoading ?
                  data.map(product =>
                  <div className='product-item' key={product.id}>
                     <Link to={`/product/${product.id}`}>
                        {
                        product.images?.at(0) && product.images?.at(0).startsWith("https://") ?
                        <img className='product-item__image' src={product.images?.at(0)} alt="" />
                        :
                        <img className='product-item__image' src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt="" />
                        }
                      
                      <h3> {product.title} </h3>
                     </Link>
                     <div className='product-info'>
                       <div>
                        <p > {trimDescription(product.description)} </p>
                         <strong> ${product.price} </strong>
                       </div>
                       { likedProducts.find( p => p?.id === product?.id) ? <BsFillSuitHeartFill onClick={() => removeFromLikeProducts (product)} style={{color: "yellow "}}/> : <FiHeart onClick={() => addToLike (product)} />}
                     </div>
                  </div>   
                  )
                  :
                  <p className='loading'>Loading...</p>
               }
            </div>
         </Container>
      </section>
   );
}

export default MainProducts;
