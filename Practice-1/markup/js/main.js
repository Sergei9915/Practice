const ranges = (a, b, c) => {
  rangeArr = [];
  for (a; a <= b; a++) {
    rangeArr.push(a);
  }
  return rangeArr;
};

ranges(1, 10);
console.log(rangeArr);

const sumRanges = rangeArr.reduce((a, b) => {
  return a + b;
}, 0)

console.log(sumRanges);

const ranges2 = (a, b, c = 1) => {
  range2Arr = [];
  if (c > 1) {
    for (a; a <= b; a += c) {
      range2Arr.push(a);
    }
    return range2Arr;
  } else {
    for (a; a <= b; a++) {
      range2Arr.push(a);
    }
  }
}

ranges2(1, 10, 2)
console.log(range2Arr);
