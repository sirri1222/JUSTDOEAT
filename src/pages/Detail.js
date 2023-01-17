import React from 'react'
import { Link } from 'react-router-dom';
import DetailNav from '../components/DetailNav';
import List from "../components/List";

import Pagination from '../components/Pagination';


const Detail = () => {
  return (
    <div>

   <DetailNav/>
      
     
    
     <Link to="/about"><List/></Link> 
     <Link to="/about"><List/></Link> 
     <Link to="/about"><List/></Link> 
     <Link to="/about"><List/></Link> 
     <Link to="/about"><List/></Link> 
     <Link to="/about"><List/></Link> 
     <Link to="/about"><List/></Link> 
     <Link to="/about"><List/></Link> 
    
      <Pagination/>
    </div>
  )
}

export default Detail