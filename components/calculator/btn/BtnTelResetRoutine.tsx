import React, { useEffect, useRef } from "react";

type Props = {
  title: string;
  setKey:string
  setSkill: Function;
  setPosition: Function;
  setRoutine: Function;
};

function BtnTelResetRoutine({ title ,setKey,setRoutine, setPosition, setSkill}: Props) {
  const btnRef:any = useRef()
  const reset = () => {
    if (window.confirm("WARNING ! you are about to reset the routine")) {
      setRoutine([{}])
      setPosition('')
      setSkill('')
    }
  };
  useEffect(() => {
    {
      /* on the keypress define in the prop setKey lunch the onClick event*/
    }
    const handleKeyPress = (event: any) => {
      if (event.code === setKey) {
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
        reset();
      }}
      className="w-full py-2 flex flex-col items-center justify-center gap-1  rounded-lg bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white backdrop-blur-lg shadow-md "
    >
      <span>{title}</span>
      <kbd className="hidden md:block">{setKey}</kbd>
    </button>
  );
}

export default BtnTelResetRoutine;
