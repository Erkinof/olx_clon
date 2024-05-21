import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FiMessageCircle, FiHeart, FiUser} from "react-icons/fi";
import Container from '../../utils/Container';
import { RedirectButton } from '../../utils/Components';
import { useState } from 'react';
import {useTranslation} from 'react-i18next';
import i18n from "../../language/i18next"
import { useSelector } from 'react-redux';


const Header = () => {
  const { t } = useTranslation(); 
  const location = useLocation();
  const createUserData = useSelector(state => state.createReducer);
  const {likedProducts} = useSelector(state => state.likeReducer );

   return location.pathname.includes("/auth") ? <></> : (
      <header>
         <Container>
            <div className='header-wrapper'>
             <img className='header__logo' src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="" />

               <nav>
                <ul className='language-select'>
                 <li className={localStorage.getItem("lang") == "uz" ? "active-lang" : ""} onClick={() => i18n.changeLanguage("uz") }>O'Z</li>
                 <span> | </span>
                  <li className={localStorage.getItem("lang") == "ru" ? "active-lang" : ""} onClick={() => i18n.changeLanguage("ru") }>RU</li>
                </ul>
                <Link to='/message' className='header__nav-link'>
                  <FiMessageCircle/>
                  {t("header_message")}
                </Link>
                <Link to='/like' className='header__nav-link'>
                  <FiHeart/>
                  <div>
                    {likedProducts.length}
                  </div>
                </Link>
                <Link to='/auth' className='header__nav-link'>
                  <FiUser/>

                  {
                    createUserData.user?.email ? createUserData.user?.email : t("header_account")
                  }
                  
                </Link>
                <RedirectButton redirect ="/create-new" title="E'lon berish" type="light"/>
              </nav>
            </div>
         </Container>
      </header>
   );
} 

export default Header;
