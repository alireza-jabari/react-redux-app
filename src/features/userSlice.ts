import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { storeType } from "../store";


export type userSliceType={
    id:number,
    fname:string,
    lname:string,
    age:number,
    phone:string
}

type addUserActionType={
    fname:string,
    lname:string,
    age:number,
    phone:string
}

const initialState:userSliceType[]=[]

const userSlice=createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<addUserActionType>)=>{
            state.push({id:Math.round(Math.random()*1000),...action.payload})
        }
    }
})


export const getUsers=(store:storeType)=>store.userSlice

export const {addUser}=userSlice.actions
export default userSlice.reducer
