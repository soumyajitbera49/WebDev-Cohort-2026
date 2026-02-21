Array.prototype.myFlat = function(depth) {
  let newArr = []
  this.forEach((element) => {
    if(Array.isArray(element) && depth>0){
      const flattened = element.myFlat(depth - 1);
      newArr.push(...flattened);
    }
    else newArr.push(element);
  })
  return newArr;
}

arr = [1,2,3,[5,[3,4]]];

console.log(arr.myFlat(2));