export function powerDigitSum(exponent: number): number {
  let power: BiggieInt = [2];

  for (let n = 2; n <= exponent; n++) {
    power = timesTwoBiggieInt(power);
  }

  return power.reduce((acc, n) => acc + n, 0);
}

type BiggieInt = Array<number>;

function timesTwoBiggieInt(num: BiggieInt): BiggieInt {
  let prod = [];
  let carry = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    const tempProd = num[i] * 2 + carry;

    const digit = tempProd >= 10 ? tempProd % 10 : tempProd;
    carry = tempProd >= 10 ? 1 : 0;

    prod.unshift(digit);
  }

  if (carry === 1) prod.unshift(1);

  return prod;
}
