import React, { useState } from "react";
import ScreenTel from "./screen/ScreenTel";
import KeyboardTel from "./keyboard/KeyboardTel";

type Props = {};

function TelCalculator({}: Props) {
  const [position, setPosition] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [routine, setRoutine] = useState<any[]>([]);
  const [showRoutine, setShowRoutine] = useState<boolean>(false);

  return (
    <section className="h-full w-full grid grid-rows-2 backdrop-blur-md bg-gradient-to-r from-gray-100 to-gray-300 ">
      <ScreenTel
        routine={routine}
        skill={skill}
        position={position}
        setRoutine={setRoutine}
        setSkill={setSkill}
        setPosition={setPosition}
      />
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
    </section>
  );
}

export default TelCalculator;
