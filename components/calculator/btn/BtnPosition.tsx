import React, { useEffect, useRef } from "react";

type Props = { title: string; setPosition: Function; setKey: string, className?:string };

function BtnPosition({ title, setPosition, setKey, className }: Props) {
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
    <button
      ref={btnRef}
      onClick={() => {
        setPosition(title);
      }}
      className={`flex flex-col justify-center items-center gap-1 rounded-lg text-white bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 backdrop-blur-lg shadow-md `}
    >
      <span className="">{title}</span>
      <kbd className="hidden md:block">{setKey}</kbd>
    </button>
  );
}

export default BtnPosition;
