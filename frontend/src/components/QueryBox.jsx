import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { DataUpload } from "../redux/action"
const QueryBox = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleAsk=()=>{
        let text = inputRef.current.value;
        console.log(text)
        if(text.length>0){
            dispatch(DataUpload(text))
            fetch('http://localhost:5000/search',{
                method:"POST",
                body:JSON.stringify({prompt:text}),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>{
                return res.json();
            }).then((res)=>{
                dispatch(DataUpload(res.data));
            })
        }
    }
  return (
    <div style={{
        margin:"auto",width:"95%",border:"1px solid"
    }}>
        <input ref={inputRef} style={{
            width:"90%",
            margin:"0px",
            padding:"5px",
            outline:"none",
            border:"1px solid transparent",
            fontSize:"24px"
        }} />
        <button style={{
            fontSize:"24px",
            border:"1px solid green",
            backgroundColor:"transparent",
            color:"green"
        }} onClick={handleAsk}>Ask</button>
    </div>
  )
}

export default QueryBox