export const calc = (numericValue: number, position: string) => {
  let bonus: number = 0;
  let difficulty: number = 0;
  let numberTurn: string | number = "";
  let numberTwistTurnOne: string | number = "";
  let numberTwistTurnTwo: string | number = "";
  let numberTwistTurnThree: string | number = "";
  let numberTwistTurnFour: string | number = "";
  let numericValueString: string = numericValue.toString();
  let numberString: string[] = numericValueString.split("");

  if (numericValue < 40) {
    console.log("numeric value < 40");
    difficulty = numericValue;

    if (numberString.length > 1) {
      numberTurn = Number(numberString[0]);
      numberTwistTurnOne = Number(numberString[1]);

      difficulty = numberTurn + numberTwistTurnOne;
    }
  } else if (numericValue < 800) {
    console.log("numeric value < 800");
    numberTurn = Number(numberString[0]);
    numberTwistTurnOne = Number(numberString[1]);
    bonus = 1;

    if (position === "pike" || "straight") {
      console.log(position);
      bonus = 2;
    }
    if (position === "tuck") {
      bonus = 1;
    }
    if (numberTwistTurnOne > 0) {
      console.log("bonus = 1");
      bonus = 1;
    }

    difficulty = numberTurn + numberTwistTurnOne + bonus;

    if (numberString.length > 2) {
      numberTwistTurnTwo = Number(numberString[2]);
      console.log(
        "length > 2 |",
        numberTurn,
        numberTwistTurnOne,
        numberTwistTurnTwo,
        bonus
      );
      difficulty = numberTurn + numberTwistTurnOne + numberTwistTurnTwo + bonus;
    }
  } else if (numericValue < 12000) {
    numberTurn = Number(numberString[0]);
    numberTwistTurnOne = Number(numberString[1]);
    numberTwistTurnTwo = Number(numberString[2]);
    bonus = 2;

    if (position === "pike" || "straight") {
      bonus = 4;
    }
    if (position === "tuck") {
      bonus = 2;
    }
    difficulty = numberTurn + numberTwistTurnOne + numberTwistTurnTwo + bonus;
    if (numberString.length > 3) {
      numberTurn = Number(numberString[0]) * 10 + Number(numberString[1]);
      numberTwistTurnOne = Number(numberString[2]);
      numberTwistTurnTwo = Number(numberString[3]);
      numberTwistTurnThree = Number(numberString[4]);

      difficulty =
        numberTurn +
        numberTwistTurnOne +
        numberTwistTurnTwo +
        numberTwistTurnThree +
        bonus;
    }
  } else if (numericValue < 160000) {
    numberTurn = Number(numberString[0]) * 10 + Number(numberString[1]);
    numberTwistTurnOne = Number(numberString[2]);
    numberTwistTurnTwo = Number(numberString[3]);
    numberTwistTurnThree = Number(numberString[4]);
    bonus = 4;
    if (position === "pike" || "straight") {
      bonus = 7;
    }
    if (position === "tuck") {
      bonus = 4;
    }
    difficulty =
      numberTurn +
      numberTwistTurnOne +
      numberTwistTurnTwo +
      numberTwistTurnThree +
      bonus;
    if (numberString.length > 4) {
      numberTwistTurnFour = Number(numberString[5]);
      difficulty =
        numberTurn +
        numberTwistTurnOne +
        numberTwistTurnTwo +
        numberTwistTurnThree +
        numberTwistTurnFour +
        bonus;
    }
  } else if (numericValue >= 160000) {
    numberTurn = Number(numberString[0]) * 10 + Number(numberString[1]);
    numberTwistTurnOne = Number(numberString[2]);
    numberTwistTurnTwo = Number(numberString[3]);
    numberTwistTurnThree = Number(numberString[4]);
    numberTwistTurnFour = Number(numberString[5]);
    bonus = 6;
    if (position === "pike" || "straight") {
      bonus = 10;
    }
    if (position === "tuck") {
      bonus = 6;
    }
    difficulty =
      numberTurn +
      numberTwistTurnOne +
      numberTwistTurnTwo +
      numberTwistTurnThree +
      numberTwistTurnFour +
      bonus;
  }

  return difficulty;
};
