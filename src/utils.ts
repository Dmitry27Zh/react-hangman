export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomItem = <T>(array: T[]) => array[getRandomInteger(0, array.length - 1)]
