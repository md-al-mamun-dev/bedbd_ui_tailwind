'use client'
import { Square, SquareCheckBig } from "lucide-react"
import { useState, useEffect } from "react"

export default function InputCheckBox({ inputId,inputName, parentId }) {
    const [checked, setChecked]=useState(false)

    function onParentClickEvent(e) {
      if(   
            e.target.tagName.toLowerCase() === 'input' 
         && e.target.type.toLowerCase() === 'radio' 
         && e.target.name === inputName){

        if(e.target.id === inputId ){
            setChecked(true)
        }else{
            setChecked(false)
        }
      }
    }

    function onIconClickHandlar(event) {
        document.getElementById(inputId).click()
    }

  useEffect(()=>{
    const parentElement = document.getElementById(parentId)
    parentElement.addEventListener('click', onParentClickEvent)
  }, [])


  return (
        checked
            ? <SquareCheckBig  className="icon"/>
            : <Square onClick={onIconClickHandlar} className="icon"/>
    )
}
