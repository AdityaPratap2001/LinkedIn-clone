import React from 'react';
import loadSrc from '../../assets/loader1.gif';
import './Loader.css';

const Loader = (props) =>{
  return (
    <div className='fieldLoad'>
      <img src={loadSrc}/>
    </div>
  );
}

export default Loader;