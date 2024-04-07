import React from 'react'
import { addUser, getUsers } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useGetPostsQuery } from './features/postApi'

export default function App() {
  const dispatch=useDispatch()
  const users=useSelector(getUsers)
  const {data:posts=[],isLoading,isError,refetch}=useGetPostsQuery()
  
  return (
    <div className='p-2'>
      <button onClick={()=>dispatch(addUser({fname:'alireza',lname:'akbari',age:20,phone:'0913'}))}>addUser</button>
      <div>
        {
          users?.map((user,index)=>(
            <div key={index}>{user.fname}</div>
          ))
        }
      </div>
      <div className='border border-[#222]'>
        <div className='border-b border-[#222] p-2'>Posts</div>
        <div className='p-2'>
          {posts.map((post,index)=>(
            <div>{`${index+1}. ${post.title}`}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
