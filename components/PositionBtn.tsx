import React, { useEffect, useRef } from 'react'


type Props = {title:string, setPosition:Function}

function PositionBtn({title, setPosition}: Props) {

  const setKey = (title:string) => {
    if(title === 'tuck' ){
      return '1'
    }
    else if(title === 'pike'){
      return '2'
    }
    else if(title === 'straight'){
      return '3'
    }
  }

  const btnRef:any = useRef()

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      if (event.key === setKey(title) ) {
        btnRef.current.click();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
  
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [title])
  

  return (
    <button ref={btnRef} onClick={()=>{setPosition(`${title}`)}} className='w-20 h-20 border-2 grid place-items-center active:scale-95'>
        {title}
        <kbd className='bg-gray-300 px-2'>{setKey(title)}</kbd>
    </button>
  )
}

export default PositionBtn