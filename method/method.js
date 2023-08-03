
//tìm sv điểm cao nhất
function findIndexMax(arrNumber) {
  let indexMax = 0;
  let max = arrNumber[0]
  for (let index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > max) {
      max = arrNumber[index];
      indexMax = index;
    }
  }
  return indexMax
}

// tìm sv điểm thấp nhất
function findIndexMin(arrNumber) {
  let indexMin = 0;
  let min = arrNumber[0]
  for (let index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] < min) {
      min = arrNumber[index];
      indexMin = index;
    }
  }
  return indexMin;
}
//tìm slsv giỏi
function diemSVGioi(arrNumber, soDiem) {
  let output = 0;
  for (let index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] >= soDiem) {
      output++;
    }
  }
  return output
}
//tìm ssv điểm lớn hơn 5
function nameSVLonHon5(arrName, arrDiem) {
  let output = '';
  for (let index = 0; index < arrDiem.length; index++) {
    if (arrDiem[index] >= 5) {
      output += '<br/>' + arrName[index]
    }
  }
  return output;

}

function sortMax(arrNumber) {
  let output = [];
  output = arrNumber.sort(function(p1,p2){
    return p1 - p2;
  })

  return output;

}