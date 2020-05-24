export function largestPalindromeProduct(n: number): number {
  const [min, max] = [10 ** (n - 1), 10 ** n - 1];
  for (let x = max ** 2; x >= min ** 2; x--) {
    if (isPalindrome(x) && hasFactorsInRange(x, min, max)) {
      return x;
    }
  }

  // will never get here
  return 0;
}

function isPalindrome(num: number): boolean {
  const numStr = num.toString();
  const numStrReversed = numStr.split("").reverse().join("");

  return numStr === numStrReversed;
}

function hasFactorsInRange(num: number, min: number, max: number): boolean {
  for (let x = min; x <= max && x <= num / x; x++) {
    if (num % x === 0 && num / x >= min && num / x <= max) {
      return true;
    }
  }
  return false;
}
