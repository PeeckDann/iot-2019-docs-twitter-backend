export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomNumberOrNull = (min: number, max: number): number => {
  return getRandomNumber(0, 2) ? null : getRandomNumber(min, max);
};

export const getAPairOfDifferentRandomNumbers = (min: number, max: number): number[] => {
  let numbers = [getRandomNumber(min, max), getRandomNumber(min, max)];
  if (numbers[0] === numbers[1]) {
    numbers = getAPairOfDifferentRandomNumbers(min, max);
  }
  return numbers;
};

export const createObject = (currentHeaders: string[], values: string[]) => {
  const object = {};
  for (let i = 0; i < currentHeaders.length; i++) {
    object[currentHeaders[i]] = values[i];
  }
  return object;
};
