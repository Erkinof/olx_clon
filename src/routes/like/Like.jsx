import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from "react-icons/bs";
import { FiHeart } from "react-icons/fi"; 


const Like = () => {

const {likedProducts} = useSelector(state => state.likeReducer );
console.log(likedProducts);




   return (
   <div>
       <div className="search-results__wrapper">
          {
          likedProducts?.map((searchItem) => (
            <div className="product-item" key={searchItem.id}>
              <Link to={`/product/${searchItem.id}`}>
                <img width={300} src={searchItem.images?.at(0)} alt="" />
              </Link>
              <div>
                <h2>{searchItem.title}</h2>
                <p>{searchItem.description}</p>
                <strong>${searchItem.price}</strong>
              
              </div>
            </div>
          ))
          }
        </div>
   </div>
   )
};

export default Like;
