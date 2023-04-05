import React, { useEffect, useRef } from "react";

type Props = { setKey: string; title: string ,skill:string, setSkill:Function};

function BtnTel({ setKey, title ,skill,setSkill}: Props) {
  const btnRef: any = useRef();

  const setUpSkill = () =>{
    if(skill.length < 6){
        setSkill((skill+title))
    }
  }

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
      onClick={()=>{setUpSkill()}}
      className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-lg shadow-md backdrop-blur-lg bg-white/30 "
    >
      <span>{title}</span>
    </button>
  );
}

export default BtnTel;
