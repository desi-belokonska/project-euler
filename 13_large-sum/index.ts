export function largeSum(arr: Array<string>): number {
  const arrArr = arr.map((num) => Array.from(num));
  const sum = arrArr.reduce((acc, num) => bigIntSum(acc, num));
  return Number(sum.slice(0, 10).join(""));
}

function bigIntSum(x: Array<string>, y: Array<string>): Array<string> {
  const [longer, shorter] = x.length > y.length ? [x, y] : [y, x];
  let sum = [];
  let carry = 0;

  let [i, j] = [longer.length - 1, shorter.length - 1];

  while (i >= 0) {
    const [l, s] = [longer[i], j >= 0 ? shorter[j] : 0];

    const tempSum: number = Number(l) + Number(s) + carry;

    const digit: number = tempSum >= 10 ? tempSum % 10 : tempSum;

    sum.unshift(digit.toString());
    carry = tempSum >= 10 ? 1 : 0;
    [i, j] = [i - 1, j - 1];
  }

  if (carry === 1) sum.unshift("1");

  return sum;
}
