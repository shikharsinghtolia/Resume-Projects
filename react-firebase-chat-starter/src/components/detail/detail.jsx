import React from 'react'
import "../detail/detail.css"
const Detail = () => {
  return (
    <div className='detail'>
      <div className='user'>
        <img src="./avatar.png" alt="" />
        <h2>Shikhar Singh Tolia</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, voluptate.
        </p>

      </div>
      <div className='info' >
        <div className="option">
          <div className="title">
            <span>Setting</span>
            <img src='./arrowUp.png' alt=""/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src='./arrowUp.png' alt=""/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src='./arrowDown.png' alt=""/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Setting</span>
            <img src='./arrowUp.png' alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail