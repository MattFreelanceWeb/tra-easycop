export const calc = (numericValue: number, position: string) => {
  let numericValueString: string = numericValue.toString();
  let numberString: string[] = numericValueString.split("");
  let numberTurn: number = 0;
  let numberTwist: number = 0;
  let bonus: number = 0;
  let difficulty: number = 0;

  console.log("length:", numberString.length);

  switch (numberString.length) {
    //pas de tour complet
    case 1:
      numberTwist = Number(numberString[0]);
      difficulty = numberTwist / 10;
      break;
    // un tour complet
    case 2:
      numberTurn = Number(numberString[0]);
      numberTwist = Number(numberString[1]);
      if (position === "tuck") {
        bonus = 1;
      } else {
        bonus = 2;
      }
      if (numberTwist > 0) {
        bonus = 1;
      }
      if (numberTurn < 4) {
        bonus = 0;
      }
      difficulty = (numberTurn + numberTwist + bonus) / 10;
      break;
    //deux tours complets
    case 3:
      numberTurn = Number(numberString[0]);
      numberTwist = Number(numberString[1]) + Number(numberString[2]);
      if (position === "tuck") {
        bonus = 2;
      } else {
        bonus = 4;
      }
      if (numberTurn < 8) {
        if (position === "tuck") {
          bonus = 1;
        } else {
          bonus = 2;
        }
      }
      difficulty = (numberTurn + numberTwist + bonus) / 10;
      break;
    // case 4:
    // n'existe pas
    //   break;
    //trois tours complets
    case 5:
      numberTurn = Number(numberString[0] + numberString[1]);
      numberTwist =
        Number(numberString[2]) +
        Number(numberString[3]) +
        Number(numberString[4]);
      if (position === "tuck") {
        bonus = 4;
      } else {
        bonus = 7;
      }
      if (numberTurn < 12) {
        if (position === "tuck") {
          bonus = 2;
        } else {
          bonus = 4;
        }
      }
      difficulty = (numberTurn + numberTwist + bonus) / 10;
      break;
    case 6:
      numberTurn = Number(numberString[0] + numberString[1]);
      numberTwist =
        Number(numberString[2]) +
        Number(numberString[3]) +
        Number(numberString[4]) +
        Number(numberString[5]);
      if (position === "tuck") {
        bonus = 6;
      } else {
        bonus = 10;
      }
      if (numberTurn < 16) {
        if (position === "tuck") {
          bonus = 4;
        } else {
          bonus = 7;
        }
      }
      difficulty = (numberTurn + numberTwist + bonus) / 10;
      break;
  }

  return difficulty;
};
