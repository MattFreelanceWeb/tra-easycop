import React from 'react'

type Props = {}

function TwistBtn({}: Props) {
  return (
    <button onClick={()=>{console.log('hello twist')}} className='w-40 h-40 border-2 grid place-items-center'>Twist</button>
  )
}

export default TwistBtn