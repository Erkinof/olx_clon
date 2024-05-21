import React from 'react';
import Home from './home/Home';
import Auth from './auth/Auth';
import { Switch, Route } from 'react-router-dom';
import Product from './product/Product';
import Search from './search/Search';
import Like from './like/Like.jsx';

const Routes = () => {
   return (
      
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/auth">
        <Auth/>
        </Route>
        <Route path="/like">
        <Like/>
        </Route>
        <Route path="/product/:id">
        <Product/>
        </Route>
        <Route path="/search/:poductName">
        <Search/>
        </Route>
      </Switch>

   );
}

export default Routes;
