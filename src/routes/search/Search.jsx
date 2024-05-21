import React from "react";
import "./Search.scss";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Container from "../../utils/Container";
import SearchCom from "../../components/search/Search";
import { useState, useEffect } from "react";
import uuid from 'react-uuid';
import instance from "../../api/instance";

const Search = () => {
   const [lowerSelect, setLowerSelect] = useState(1);
   const [upperSelect, setUpperSelect] = useState(1);
   const [filterResult, setFilterResult] = useState([]);
  const productInfo = useParams();
  var [data, isLoading] = useFetchData(`/products/?titile=${productInfo.productName}`);
// console.log(data);
  const prices = [1, 10, 100, 1000, 10000, 100000];
   
  useEffect(() => {
   if (lowerSelect > upperSelect){
       setLowerSelect(upperSelect);
       setUpperSelect(lowerSelect);

   }
   instance.get(`/products/?titile=${productInfo.productName}&price_min=${lowerSelect}&price_max=${upperSelect}`)
    .then(response => setFilterResult(response.data))
   //  instance.get(`/products/?title=${productInfo.productName}&price_min=${lowerSelect}&price_max=${upperSelect}`)
   //  .then(response => setFilterResult(response.data))


  }, [ lowerSelect, upperSelect])
  
   if(filterResult.length > 0){
       data = filterResult
      console.log(filterResult);
   }

  return (
    <section className="search-results">
      <SearchCom />

      <Container>
        <div className="search-filters">
          <select value={lowerSelect} onChange={ (e) => setLowerSelect(e.target.value)}>

            {
              prices.map(price =>
               <option value={`${price}`}>{price}</option>
               )
            }

          </select>
          <select value={upperSelect} onChange={ (e) => setUpperSelect(e.target.value)}>

            {
            prices.map(price => 
              <option value={`${price}`}> {price}</option>
            )
            }

          </select>
        </div>

        <div className="search-results__wrapper">
          {
          data.map((searchItem) => (
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
      </Container>
    </section>
  );
};

export default Search;
