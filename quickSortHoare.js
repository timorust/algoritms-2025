function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left - 1;
  let j = right + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) {
      return j;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function quickSortHoare(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const pivotIndex = partition(arr, left, right);
  quickSortHoare(arr, left, pivotIndex);
  quickSortHoare(arr, pivotIndex + 1, right);
  return arr;
}

const arr = [2, 6, 1, -5, 11, 5, -2, 111];
console.log(quickSortHoare(arr));
