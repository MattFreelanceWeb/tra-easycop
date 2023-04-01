import React, { useEffect, useRef } from "react";

type Props = { title: string; setPosition: Function; setKey: string };

function BtnPosition({ title, setPosition, setKey }: Props) {
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
      className='w-20 h-20 border-2 flex flex-col justify-center items-center gap-1'
    >
      <span>{title}</span>
      <kbd>{setKey}</kbd>
    </button>
  );
}

export default BtnPosition;
