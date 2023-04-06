import { calc } from "@/utils/function/calc";
import { isDuplicateObject } from "@/utils/function/isDuplicateObject";
import React, { useState } from "react";

type Props = {
  item: { skill: string; position: string; difficulty: number };
  i: number;
  routine: any[];
  setRoutine: Function;
};

function BtnTelModifySkillRoutine({ item, i, routine, setRoutine }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [newSkill, setNewSkill] = useState(Number(item.skill));
  const [newPosition, setNewPosition] = useState(item.position);

  const updateSkill = () => {
    let UpdatedSkill: { skill: string; position: string; difficulty: number } =
      {
        skill: newSkill.toString(),
        position: newPosition,
        difficulty: calc(newSkill, newPosition),
      };
    if (isDuplicateObject(UpdatedSkill, routine)) {
      UpdatedSkill.difficulty = 0;
    }
    const newRoutine = [...routine];
    newRoutine[i] = UpdatedSkill;
    setRoutine(newRoutine);
  };

  return (
    <>
      <button
        onClick={() => {
          console.log(item, i);
          setToggle(!toggle);
        }}
        className="p-1 flex flex-col justify-center items-center gap-1 rounded-lg text-white bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 backdrop-blur-lg shadow-md "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
      {toggle && (
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center  p-4">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="absolute h-full w-full bg-black/30 "
          >
            {" "}
          </div>
          <div className=" z-50 bg-white h-1/2 w-full rounded-md shadow-lg flex flex-col items-center justify-center p-4 relative">
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
              className="  py-2 px-12 flex items-center justify-center gap-1  rounded-lg bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white backdrop-blur-lg shadow-md uppercase absolute top-4 right-4"
            >
              {"close"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="w-full flex flex-col items-center justify-center gap-4 text-xl">
              <input
                type="number"
                min={0}
                max={169999}
                value={newSkill}
                onChange={(e) => {
                  setNewSkill(Number(e.target.value));
                }}
                className="w-full flex items-center justify-center border-2 text-center rounded-md"
              />
              <select
                name="position"
                className="w-full border-2 flex items-center justify-center text-center rounded-md"
                value={newPosition}
                onChange={(e) => {
                  setNewPosition(e.target.value);
                }}
              >
                <option value="tuck">tuck °</option>
                <option value="pike">pike{"<"}</option>
                <option value="straight">straight {"/"}</option>
              </select>
              <div className="w-full flex items-center justify-between px-1">
                <span> Difficulty: </span>
                <span>{calc(newSkill, newPosition)}</span>{" "}
              </div>
            </div>
            <button
              onClick={() => {
                console.log(updateSkill());
              }}
              className=" absolute bottom-4 uppercase py-2 px-12 flex flex-col justify-center items-center gap-1 rounded-lg bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-white "
            >
              Update
            </button>
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default BtnTelModifySkillRoutine;
