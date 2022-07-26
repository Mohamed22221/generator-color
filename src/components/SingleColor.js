import React, { useState } from 'react'
import Utils from "./Utils"
const SingleColor = ({item ,index}) => {
 const bcg = item.rgb.join(",")
 //copy to clipboard
 const [copy , setCopy] = useState(false)
 const HandelCopy = (item) =>{
  setCopy(true)
  navigator.clipboard.writeText(`#${item.hex}`)
  setTimeout(() =>{
    setCopy(false)
  }, 2000)
  
 }
  return (
    <div onClick={()=>HandelCopy(item)} className={index < 10 ? "item-color black" : "item-color white" } style={{backgroundColor: `rgb(${bcg})`}} >
     <h4>{item.weight} %</h4>
     <h3>#{item.hex} </h3>
     {copy === true && <p>Copy to clipboard</p> }
     </div>
  )
}

export default SingleColor