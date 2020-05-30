export function numberLetterCounts(limit: number): number {
  let count = 0;
  for (let i = 1; i <= limit; i++) {
    count += lettersInNumber(i);
  }
  return count;
}

function getDigits(n: number): number[] {
  const digits = [];
  while (n >= 1) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  return digits;
}

interface NumDict {
  [n: number]: string;
}

// n should be max 1000
function lettersInNumber(n: number): number {
  const dict: NumDict = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  let word: string[] = [];

  const [ones = 0, tens = 0, hundreds = 0, thousands = 0] = getDigits(n);

  if (thousands > 0) {
    word.push(dict[thousands], "thousand");
  }

  if (hundreds > 0) {
    word.push(dict[hundreds], "hundred");

    if (tens > 0 || ones > 0) {
      word.push("and");
    }
  }

  if (tens === 1) {
    word.push(dict[tens * 10 + ones]);
  } else if (tens > 1) {
    word.push(dict[tens * 10]);

    if (ones > 0) {
      word.push(dict[ones]);
    }
  } else {
    if (ones > 0) {
      word.push(dict[ones]);
    }
  }

  return word.reduce((acc, num) => acc + num.length, 0);
}
