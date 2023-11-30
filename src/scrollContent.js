import React from 'react'
import './scrollContent.css';

export default function scrollContent() {
  const vjk='https://www.behindwoods.com/tamil-movies/slideshow/when-kollywood-heroes-turned-teachers/images/vijayakanth-in-ramana.jpg';

  return (
        <div className='offers-main'>
            <div className='offers-content'>
              <div><h2>Time Limited Offers!</h2></div>
            </div>
          <div className='offers-sub'>
            <div className='offers-scroll'>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
            </div>
          </div>
       </div>
  )
}
