export let averageTemp = (temp) => {
  let average = (temp.morn + temp.day + temp.eve + temp.night) / 4;
  return average.toFixed();
}