function countOddNumbers() {
    let count = 0;
  
    for (let i = 1; i <= 100; i++) {
      if (i % 2 !== 0) {
        count++;
      }
    }
  
    return count;
  }
  
  const oddCount = countOddNumbers();
  console.log("The number of odd numbers from 1 to 100 is:", oddCount);