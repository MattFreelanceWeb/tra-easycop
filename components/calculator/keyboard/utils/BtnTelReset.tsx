import React, { useEffect, useRef } from "react";

type Props = { title: string; setKey: string; setSkill: Function, setPosition:Function };

function BtnTelReset({ title, setKey, setSkill, setPosition }: Props) {
  const btnRef: any = useRef();

  useEffect(() => {
    {
      /* on the keypress define in the prop setKey lunch the onClick event*/
    }
    const handleKeyPress = (event: any) => {
      if (event.key === setKey) {
        btnRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setKey]);
  return (
    <button ref={btnRef} onClick={()=>{setSkill(''), setPosition('')}} className="w-full h-full flex flex-col items-center justify-center gap-1  rounded-lg bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white backdrop-blur-lg shadow-md ">
      <span>{title}</span>
      <span className="hidden md:block">{setKey}</span>
    </button>
  );
}

export default BtnTelReset;
