import React, { useEffect, useRef } from "react";

type Props = { title: string; setKey: string, count:number, setCount:Function};

function Btn({ title, setKey, count, setCount }: Props) {
  {/* get the dom element */ }  
  const btnRef: any = useRef();

  const incrementCount = () => {
    setCount(count + 1)
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
      className="w-40 h-40 border-2"
    >
      {title}
    </button>
  );
}

export default Btn;
