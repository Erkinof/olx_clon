import React, { Suspense, lazy } from 'react';
import './language/i18next';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const App = lazy(() => import( './App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Provider store={store}>
         <App />
        </Provider>
      </Suspense>
            
    </BrowserRouter>
  
);


