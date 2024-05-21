import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Create from './create/Create';
import Login from './login/Login';
import "./Auth.scss";

const Auth = () => {
   const email = "erkinof@gmail.com";
   return (
      <section className='auth'>

         <div className='animation-circle'>

         </div>

         <div className='auth-popup'>
         <ul className='auth-popup__nav'>
            <li>
               <NavLink activeClassName='auth__link--active' className="auth__link" to="/auth/login"> Kirish </NavLink>
            </li>
            <li>
               <NavLink activeClassName='auth__link--active' className="auth__link" to="/auth/create"> Ro'yxatdan O'tish </NavLink>
            </li>

         </ul>
         <Switch>
            <Route path="/auth/create">
               <Create/>
            </Route>
            <Route path="/auth/login">
               <Login/>
            </Route>
         </Switch>
         </div>
         
      </section>
   );
}

export default Auth;
