export let averageTemp = (temp: any): string => {
  let average: number = (temp.morn + temp.day + temp.eve + temp.night) / 4;
  return average.toFixed();
}