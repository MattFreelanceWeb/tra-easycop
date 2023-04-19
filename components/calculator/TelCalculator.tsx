import React, {  useState } from "react";
import ScreenTel from "./screen/ScreenTel";
import KeyboardTel from "./keyboard/KeyboardTel";
import ScreenRoutine from "./screen/ScreenRoutine";

type Props = {};

function TelCalculator({}: Props) {
  const [position, setPosition] = useState<string>("/");
  const [skill, setSkill] = useState<string>("");
  const [routine, setRoutine] = useState<any[]>([]);
  const [showRoutine, setShowRoutine] = useState<boolean>(false);


  return (
    <section className={`h-full w-full max-w-4xl md:max-h-[414px] grid backdrop-blur-md bg-gradient-to-r from-gray-100 to-gray-300 ${showRoutine ? '': 'grid-rows-2 sm:grid-rows-1 sm:grid-cols-2'} overflow-y-auto md:rounded-md md:shadow-lg`}>
      {showRoutine ? (
        <>
          <ScreenRoutine
            setShowRoutine={setShowRoutine}
            showRoutine={showRoutine}
            routine={routine}
            setRoutine={setRoutine}
            setSkill={setSkill}
            setPosition={setPosition}
          />
        </>
      ) : (
        <>
          <ScreenTel routine={routine} skill={skill} position={position} />
          <KeyboardTel
            routine={routine}
            skill={skill}
            position={position}
            setRoutine={setRoutine}
            setSkill={setSkill}
            setPosition={setPosition}
            showRoutine={showRoutine}
            setShowRoutine={setShowRoutine}
          />
        </>
      )}
    </section>
  );
}

export default TelCalculator;
