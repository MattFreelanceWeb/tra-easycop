import React, { useEffect, useRef } from "react";

type Props = {
  title: string;
  setKey: string;
  setQuarterTurnCount: Function;
  setHalfTwistCount: Function;
  setPosition:Function
};

function BtnResetSkill({
  title,
  setKey,
  setQuarterTurnCount,
  setHalfTwistCount,
  setPosition
}: Props) {
  const btnRef: any = useRef();

  const reset = () => {
    setHalfTwistCount(0)
    setQuarterTurnCount(0)
    setPosition('tuck')
  };

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
        reset();
      }}
      className='px-12 py-2 grid place-items-center gap-2 border-2'
    >
      <span>{title}</span>
      <kbd>{setKey}</kbd>
    </button>
  );
}

export default BtnResetSkill;
