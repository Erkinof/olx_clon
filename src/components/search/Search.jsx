import React from 'react';
import { FiSearch } from 'react-icons/fi';
import instance from '../../api/instance';
import Container from '../../utils/Container';
import "./Search.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
   const [searchResult, setSearchResult] = useState( [] );
   const [ searchValue, setSearchValue] = useState ( "" )

   const giveSearch = (e) =>{
      setSearchValue(e.target.value);
    console.log(e.target.value);
    instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
    .then(response => setSearchResult(response.data))
    .catch(err => console.log(err))
   }

   const giveMoreResults = (e) =>{  
      e.preventDefault();
      window.location.pathname = `/search/${searchValue}`;
   }

   return (
      <section className='search'>
         <Container>
            <form onSubmit={giveMoreResults}>
            <div className="search-wrapper">
               <div className='search-elements'>
                  <FiSearch/>
                  <input onChange={giveSearch} className='search__input' type="text"  placeholder='1 141 964 e‘lonlar yoningizda'/>
                  {searchResult?.length > 0 && searchValue ?  <div className='search-suggestions'>
                     {

                        searchResult.map(searchItem =>
                          <Link className='search-item__link' to={`/product/${searchItem.id}`}>
                           <span>
                              {searchItem.title}
                           </span>
                          </Link>   
                           
                        )
                     }
                  </div> :<></>}
               </div>
                 <button className='search__btn'> <FiSearch/>Qidiruv</button>
            </div>
            
            </form>
         </Container>
      </section>
   );
}

export default Search;
