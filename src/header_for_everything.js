import React from 'react'
import './header_for_everything.css';
import {Link} from 'react-router-dom';

 function header_for_everything() {
  return (
    <div>
        <header>
        <nav className='nav-main'>
            <div><img src="https://t3.ftcdn.net/jpg/03/52/90/48/360_F_352904882_Uv8ZuVZNduEuE9KyjscqF1sXc2YzDppY.jpg"></img></div>
            <div >
              <ul className='nav-modes'>
              <Link to={{pathname:'/home'}}><li><button className="button-32">Bus</button></li></Link>
              <Link to={{pathname:'/train'}}><li><button className="button-32">Train</button></li></Link>
              <Link to={{pathname:'/flight'}}><li><button className="button-32">Flight</button></li></Link>
              </ul>
            </div>
            <div>
                <ul>
                <Link to={{pathname:'/'}}><li><button className="button-32">help</button></li></Link>
                <Link to={{pathname:'/hc'}}><li><button className="button-32">account</button></li></Link>
                </ul>
            </div>
            </nav>
        </header>
    </div>
  )
}

export default header_for_everything;
