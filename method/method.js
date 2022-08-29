/*
-hàm nhận vào 1 input là 1 mảng number ví dụ : [1,5,,3,2,4] trả ra vị trí  của số lớn nhất
@param {*} arrNumber: arrNumber là 1 mảng số trả
@return trả ra vị trí index của giá trị lớn nhất



*/

function finIndexMax(arrNumber) {
  //input:arrNumber: [1,2,3,4,6,7,9]
  var indexMax = 0;

  var max = arrNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > max) {
      max = arrNumber[index];
      indexMax = index;
    }
  }

  return indexMax;
}

function finIndexMin(arrNumber) {
  var indexMin = 0;
  var min = arrNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] < min) {
      min = arrNumber[index];
      indexMin = index;
    }
  }
  return indexMin;
}

//tìm sinh viên giỏi

/**
 *
 * @param {*} arrNumber  arrNumber là danh sách điểm ví dụ : [4,2,5,6,2]
 * @param {*} diemGioi diemGioi là điểm qui định bao nhiêu là giỏi ví dụ: 8 là giỏi
 * @returns kết quả trả ra là số lượng sinh viên có điểm >= điểm giỏi
 */

function demSinhViengioi(arrNumber, diemGioi) {
  // arrNumber:[2,4,2,4], điemGioi:8
  //output: soLuongSinhVienGioi : number
  var output = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] >= diemGioi) {
      output++; // tăng số lượng học sinh giỏi
    }
  }

  return output;
}

/**
 * hàm này sẽ nhận vào 1 mảng điểm [] [2,3,4,5,6,7], và 1 mảng tên ['a','b','c','d','e']
 * @param {*} arrDiem  arrDiem là mảng điểm người dùng truyền vào [2,4,5,2,9,10]
 * @param {*} arrName   arrName là mảng tên các người dùng ứng với điểm  ['a','b','c','d','e']
 */

function diemTBHon5(arrDiem, arrName) {
  var output = "";
  for (var index = 0; index < arrDiem.length; index++) {
    if (arrDiem[index] > 5) {
      output += "<br/>" + arrName[index];
    }
  }
  return output;
}
// sắp xếp tăng dần
/**
 * hàm nhận vào 1 arrNumber trả ra mảng đó sắp xếp tăng dần
 * @param {*} arrNumber là 1 mảng số nguyên chưa sắp xếp
 * @returns kết quả trả về là 1 mảng số ngguyen6 được sắp xếp
 */
function sapXepTangDanSo(arrNumber) {
  // input: arr
  //output: arr đã sắp xếp

  var arrResult = [];

  arrResult = arrNumber.sort(function (pt1, pt2) {
    return pt1 - pt2;
  });

  return arrResult;
}
