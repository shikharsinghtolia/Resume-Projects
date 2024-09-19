import React from 'react'
import "../list/list.css"
import UserInfo from './userInfo'
import Chatlist from '../chatlist/Chatlist'
const List = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <Chatlist/>
    </div>
  )
}

export default List