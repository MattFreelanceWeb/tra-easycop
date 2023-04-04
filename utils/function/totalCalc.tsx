export const calcTotalDifficulty = (skillsArray: any[]) => {
  let total: number = 0;
  for (let i = 0; i < skillsArray.length; i++) {
    if (skillsArray[i].difficulty) {
      total = total + skillsArray[i].difficulty;
    }
  }
  

  return total;
};