const arr = [15,1,3];

const nearestFibonacci = (array) => {
  let additionResult = 0;
  for(let i = 0; i  <=  array.length-1; i++) {
    additionResult += array[i];
  }

  let first = 0;
  let second = 1;
  let third = first + second;

  while(third <= additionResult) {
    first = second;
    second = third;
    third = first + second;
  }

  let nearestFibonacci = (Math.abs(third - additionResult) >= Math.abs(second - additionResult) ? second : third)

  return nearestFibonacci - additionResult
}

console.log(nearestFibonacci(arr))