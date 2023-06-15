import React from 'react'
import "./Alert.scss"

export default function Alert(props) {
  const capitalize =(word)=>{
    if(word==="danger"){
      word = "error"
    }
    const lower =word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
  return (
   <div className='alert-container' style={{height:'50px' }}>
   {props.alert &&<div className="alert alert-success" role="alert">
<strong> {capitalize(props.alert.type)}</strong>:{props.alert.msg}
</div>}
</div>


  )
}