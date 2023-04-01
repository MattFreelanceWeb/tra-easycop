import React from 'react'

type Props = {setSkillsArray:Function}

function ResetArrayBtn({setSkillsArray}: Props) {

    const warning =()=>{
        
        if(confirm("WARNING, you are about to reset the routine !")){
            setSkillsArray([{}])
        } 
    }


  return (
    <button onClick={()=>{warning()}} className='px-12 py-2 bg-red-500 text-white rounded-lg'>
        RESET the routine
    </button>
  )
}

export default ResetArrayBtn