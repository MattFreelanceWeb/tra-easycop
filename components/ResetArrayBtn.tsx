import React from 'react'

type Props = {setSkillsArray:Function}

function ResetArrayBtn({setSkillsArray}: Props) {

    const warning =()=>{
        
        if(confirm("WARNING, you are about to reset the routine !")){
            setSkillsArray([{}])
        } 
    }


  return (
    <button onClick={()=>{warning()}}>
        RESET the routine
    </button>
  )
}

export default ResetArrayBtn