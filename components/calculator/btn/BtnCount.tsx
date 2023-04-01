import React, { useEffect, useRef } from "react";

type Props = { title: string; setKey: string, count:number, setCount:Function, incrementNumber:number};

function BtnCount({ title, setKey, count, setCount, incrementNumber }: Props) {
  {/* get the dom element */ }  
  const btnRef: any = useRef();

  const incrementCount = () => {
    setCount(count + incrementNumber)
  }
  
  useEffect(() => {
    {/* on the keypress define in the prop setKey lunch the onClick event*/ }
    const handleKeyPress = (event: any) => {
      if (event.key === setKey ) {
        btnRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setKey]);


  return (
    <button
      ref={btnRef}
      onClick={() => {
        incrementCount()
      }}
      className="w-40 h-40 border-2 flex flex-col justify-center items-center gap-4"
    >
      <span>{title}</span> 
      <kbd>{setKey}</kbd>
    </button>
  );
}

export default BtnCount;
