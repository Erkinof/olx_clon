import React from 'react';
import "./Loader.scss";
const Loader = () => {
   return (
      <div className='loader'>
         <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
   );
}

export default Loader;
