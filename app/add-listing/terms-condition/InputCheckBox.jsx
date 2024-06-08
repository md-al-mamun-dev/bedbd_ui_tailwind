'use client'
import { useEffect, useState } from 'react'
import { Square, SquareCheckBig } from 'lucide-react'

export default function InputCheckBox({inputId}) {
    const [checked, setChecked] = useState()

    function onInputElementClick(e) {
        setChecked(e.target.checked)
    }

    function onIconClick() {
        document.getElementById(inputId).click()
    }

    useEffect(()=>{
        let ignore = false
        if(!ignore){
            const inputElement = document.getElementById(inputId)
            inputElement.addEventListener('click',onInputElementClick )
        }        
        return ()=> ignore = true 
    }, [])

  return (
    checked 
        ? <SquareCheckBig onClick={onIconClick} className='icon cursor-pointer' />
        : <Square onClick={onIconClick} className='icon cursor-pointer'/>
  )
}
