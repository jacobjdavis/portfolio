import { Frame, Roll } from 'types/bowling.types';

export const generateScore = (rolls: Roll[]) => {
  let rollIndex = 0;
  let prevScore = 0;
  let rollingScore: number[] = [];
  for (let i = 0; i < 10; i++) {
    let score = 0;
    if (isStrike(rolls, rollIndex)) {
      score =
        10 + getValue(rolls[rollIndex + 1]) + getValue(rolls[rollIndex + 2]);
      rollIndex++;
    } else if (isSpare(rolls, rollIndex)) {
      score = 10 + getValue(rolls[rollIndex + 2]);
      rollIndex += 2;
    } else {
      score = getValue(rolls[rollIndex]) + getValue(rolls[rollIndex + 1]);
      rollIndex += 2;
    }
    const frameScore = score + prevScore;
    if (frameScore) {
      rollingScore.push(frameScore);
      prevScore = frameScore;
    }
  }
  return rollingScore;
};

const isStrike = (rolls: Roll[], rollIndex: number) => {
  return rolls[rollIndex] === 'X';
};
const isSpare = (rolls: Roll[], rollIndex: number) => {
  return (
    rolls[rollIndex + 1] === '/' ||
    getValue(rolls[rollIndex]) + getValue(rolls[rollIndex + 1]) === 10
  );
};
const getValue = (roll: number | string) => {
  return roll === 'X' || roll === '/' ? 10 : (roll as number);
};

export const generateFrames = (rolls: Roll[]) => {
  let rollIndex = 0;
  let curRolls = rolls;
  const frames: Frame[] = [];
  while (frames.length < 10) {
    let amount = 2;
    if (isStrike(rolls, 0)) {
      amount = 1;
    }
    if (frames.length === 9) {
      amount = 3;
    }
    const currRolls = rolls.splice(0, amount);
    frames.push({
      roll1: currRolls[0],
      roll2: currRolls[1],
      roll3: currRolls[2],
    });
  }
  return frames;
};
