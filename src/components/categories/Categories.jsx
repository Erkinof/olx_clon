import React, { useEffect, useState } from 'react';
import instance from "../../api/instance";
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import "./Categories.scss";
import useFetchData from '../../hooks/useFetchData';

const Categories = () => {

   const [data, isLoading] = useFetchData("/categories?offset=0&limit=5")
   return (
      <section className='categories'>
         <h2 className='category-title'>Bosh toifalar</h2>
         <Container>
            <div className='categories-wrapper'>
               {
                  data.map(category =>
                   
                   <Link to="/category" className='category-item' key={category.id}>
                     <div className='category__image-wrapper'>
                      <img className='category-image' src={category.image} alt="" />
                     </div>
                     <h3>{category.name} </h3>
                   </Link>   
                  ) 
               }
            </div>
         </Container>
      </section>
   );
}

export default Categories;
