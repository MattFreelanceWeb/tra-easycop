import React from 'react'

type Props = {title:string, setPosition:Function}

function PositionBtn({title, setPosition}: Props) {
  return (
    <button onClick={()=>{setPosition(`${title}`)}} className='w-20 h-20 border-2 grid place-items-center'>
        {title}
    </button>
  )
}

export default PositionBtn