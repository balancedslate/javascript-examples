function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
}

function insertionSort(arr) {
for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
    }
    arr[j + 1] = key;
}
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      // Find the minimum element in the unsorted portion of the array
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap the minimum element with the first element of the unsorted portion
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    // Split the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  
    // Recursively sort the two halves
    left = mergeSort(left);
    right = mergeSort(right);
  
    // Merge the sorted halves
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }

  function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    // Choose the pivot element
    let pivot = arr[0];
  
    // Split the array into two halves based on the pivot
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort the two halves
    left = quickSort(left);
    right = quickSort(right);
  
    // Concatenate the sorted halves and the pivot
    return left.concat(pivot, right);
  }

  function insert(hashTable, key, value) {
    // Calculate the hash of the key
    let hash = hashFunction(key);
  
    // If the bucket at the hash index is empty, create a new linked list
    if (!hashTable[hash]) {
      hashTable[hash] = new LinkedList();
    }
  
    // Insert the key-value pair into the bucket
    hashTable[hash].insert(key, value);
  }

  function lookup(hashTable, key) {
    // Calculate the hash of the key
    let hash = hashFunction(key);
  
    // If the bucket at the hash index is empty, return null
    if (!hashTable[hash]) {
      return null;
    }
  
    // Search for the key in the bucket
    let result = hashTable[hash].search(key);
    if (result) {
      return result.value;
    } else {
      return null;
    }
  }

    function deletT(hashTable, key) {
    // Calculate the hash of the key
    let hash = hashFunction(key);
  
    // If the bucket at the hash index is empty, return false
    if (!hashTable[hash]) {
      return false;
    }
  
    // Remove the key-value
}
   

  