export function largestGridProduct(arr: number[][]): number {
  return [
    largestRowProduct(arr),
    largestColumnProduct(arr),
    largestLeftDiagonalProduct(arr),
    largestRightDiagonalProduct(arr),
  ].reduce((acc, x) => (x > acc ? x : acc), 0);
}

function largestRowProduct(arr: number[][]): number {
  let largestProduct = 0;

  for (const row of arr) {
    for (let i = 0; i <= row.length - 4; i++) {
      const prod = row.slice(i, i + 4).reduce((acc, x) => acc * x, 1);

      largestProduct = prod > largestProduct ? prod : largestProduct;
    }
  }

  return largestProduct;
}

function largestColumnProduct(arr: number[][]): number {
  let largestProduct = 0;

  for (let x = 0; x < arr[0].length; x++) {
    const col = [];
    for (let y = 0; y < arr.length; y++) {
      col.push(arr[y][x]);
    }

    for (let i = 0; i < col.length - 4; i++) {
      const prod = col.slice(i, i + 4).reduce((acc, x) => acc * x, 1);

      largestProduct = prod > largestProduct ? prod : largestProduct;
    }
  }

  return largestProduct;
}

function largestRightDiagonalProduct(arr: number[][]): number {
  let largestProduct = 0;

  // diagonals above the main diagonal
  for (let x = 0; x < arr[0].length; x++) {
    const diag = [];
    for (let y = 0; y < arr.length - x; y++) {
      diag.push(arr[y][y + x]);
    }

    for (let i = 0; i <= diag.length - 4; i++) {
      const prod = diag.slice(i, i + 4).reduce((acc, x) => acc * x, 1);

      largestProduct = prod > largestProduct ? prod : largestProduct;
    }
  }

  // diagonals below the main diagonal
  for (let y = 0; y < arr.length; y++) {
    const diag = [];
    for (let x = 0; x < arr.length - y; x++) {
      diag.push(arr[y + x][x]);
    }

    for (let i = 0; i <= diag.length - 4; i++) {
      const prod = diag.slice(i, i + 4).reduce((acc, x) => acc * x, 1);

      largestProduct = prod > largestProduct ? prod : largestProduct;
    }
  }

  return largestProduct;
}

function largestLeftDiagonalProduct(arr: number[][]): number {
  let largestProduct = 0;

  const rowLength = arr[0].length;
  const colLength = arr.length;

  // diagonals above the main diagonal
  for (let x = rowLength - 1; x >= 0; x--) {
    const diag = [];
    for (let y = 0; y <= x; y++) {
      diag.push(arr[y][x - y]);
    }

    for (let i = 0; i <= diag.length - 4; i++) {
      const prod = diag.slice(i, i + 4).reduce((acc, x) => acc * x, 1);

      largestProduct = prod > largestProduct ? prod : largestProduct;
    }
  }

  // diagonals below the main diagonal
  for (let y = 0; y < colLength; y++) {
    const diag = [];
    for (let x = rowLength - 1; x >= y; x--) {
      diag.push(arr[y + colLength - x - 1][x]);
    }

    for (let i = 0; i <= diag.length - 4; i++) {
      const prod = diag.slice(i, i + 4).reduce((acc, x) => acc * x, 1);

      largestProduct = prod > largestProduct ? prod : largestProduct;
    }
  }

  return largestProduct;
}
