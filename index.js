function sum(fromN, toN) {
  // 3,7 // 4,7 // 5,7 //6,7 /// 7,7
  if (fromN === toN) {
    return fromN; //7
  } else {
    return fromN + sum(fromN + 1, toN);
    // 3 + sum (4, 7) // 4 + sum(5,7) // 5 + sum (6,7) //6 + sum (7,7) // return 7
    // 3 + sum (4, 7) // 4 + sum(5,7) // 5 + (sum (6,7) = (6+7))
    // 3 + sum (4, 7) // 4 + (sum(5,7) = (5 + 6 + 7))
    // 3 + (sum (4, 7) = (4 + 5 + 6 + 7))
  }
}

console.log(sum(3, 7));

module.exports = sum;
