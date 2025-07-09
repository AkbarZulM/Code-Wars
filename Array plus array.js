function arrayPlusArray(arr1, arr2) {
  let total = 0;

  // Loop untuk array pertama
  for (let i = 0; i < arr1.length; i++) {
    total += arr1[i];
  }

  // Loop untuk array kedua
  for (let j = 0; j < arr2.length; j++) {
    total += arr2[j];
  }

  return total;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // Output: 21
