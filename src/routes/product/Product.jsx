import React from 'react';
import "./Product.scss";
import { useDispatch,useSelector } from 'react-redux';
import {BsFillSuitHeartFill} from "react-icons/bs";
import { FiHeart } from "react-icons/fi"; 
import { Link, useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';


const Product = () => {
   const productIdData = useParams ();
   const {likedProducts} = useSelector(state => state.likeReducer)
   const [data, isLoading] = useFetchData (`/products/${productIdData.id}`)
   
   return (
      <section className='single-product'>
         
      <Container>
         
          <div className='single-product__wrapper'> 
          {/* <Link className='' to="/">
            Orqaga
          </Link> */}
            <div className='single-product__image-wrapper'>
              <img src={data?.images?.at(0) } alt="" />
            </div>
            <div className='single-product__info'>
             <h1> {data.title} </h1>
               <p> {data.description} </p>
              <strong>${data.price} </strong>
             <button className='link link--dark'>Add to card</button>
             {likedProducts.find( p => p.id === data.id) ? <BsFillSuitHeartFill style={{color: "yellow"}} /> : <FiHeart/>}
            </div>
          </div>
     </Container>
         
      </section>
   );
}

export default Product;
