import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './searchBar.css';
import { UserContext } from './context';


const SearchBar = (props) => 
  {
    const [BusDetails,setBusDet]=useState([{from:'',to:'',date:''}]);
    const { setUser } = useContext(UserContext);

    const handleInputChange=(e)=>{
      setBusDet({...BusDetails, [e.target.name]:e.target.value});
    };
 
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
      e.preventDefault();
       
       if (!BusDetails.from || !BusDetails.to || !BusDetails.date) {
        alert("Please fill in all the required fields.");
        return;
      }

      setUser(BusDetails);
      navigate('/busList');
    }

  return (
    <div>
        <div className='search-main'>
          <div className='search'>
            <div className='search-bar'>
             <div><input type="text" name='from' placeholder="From" value={BusDetails.from} onChange={handleInputChange}></input></div>
             <div><input type='text' name='to' placeholder='To' value={BusDetails.to} onChange={handleInputChange}></input></div>
             <div><input type='date' name='date' value={BusDetails.date} onChange={handleInputChange}></input></div>
             <div><button onClick={handleSubmit} className='button-32'>Submit</button></div>
             </div>
          </div>
       </div>
    </div>
  )
}
export default SearchBar
