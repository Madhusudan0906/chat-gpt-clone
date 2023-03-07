import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const OutputBox = () => {
  const {data} = useSelector((root)=>{
    return root.reducer;
  })
  useEffect(()=>{
    console.log("...",data);
  },[data]);
  return (
    <div style={{
        maxHeight:"500px",overflow:"scroll",minHeight:"500px",border:"1px solid",marginBottom:"20px"
    }}>
      <br/>
      {data.length>0&&data.map((el,i)=>{
        return (<div key={i} style={{
          display:"flex",
          gap:"20px",
          width:"90%",
          margin:"auto",
          marginBottom:"5px",
          border:"1px solid",
          padding:"5px",
          borderRadius:"10px"
        }}>
          <div style={{
            border:"1px solid",
            width:"70px"
          }}>
          {i%2===0?"You":"ChatBot"}
          </div>
          <p>{el}</p>
          </div>);
      })}
    </div>
  )
}

export default OutputBox