import React from 'react'
import { addUser, getUsers } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const dispatch=useDispatch()
  const users=useSelector(getUsers)
  
  return (
    <div>
      <button onClick={()=>dispatch(addUser({fname:'alireza',lname:'akbari',age:20,phone:'0913'}))}>addUser</button>
      <div>
        {
          users?.map((user,index)=>(
            <div key={index}>{user.fname}</div>
          ))
        }
      </div>
    </div>
  )
}
