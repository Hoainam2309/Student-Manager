document.querySelector("#btnSVCaoDiemNhat").onclick = function () {
  var arrTagDiem = document.querySelectorAll("#tblBody td:nth-child(4)");
  console.log(arrTagDiem);

  var arrDiem = [];

  for (var index = 0; index < arrTagDiem.length; index++) {
    var diem = Number(arrTagDiem[index].innerHTML);

    arrDiem.push(diem);
  }

  var arrTagName = document.querySelectorAll("#tblBody td:nth-child(3)");
  var arrName = [];

  for (var index = 0; index < arrTagName.length; index++) {
    var Name = arrTagName[index].innerHTML;

    arrName.push(Name);
  }
  console.log(arrName);
  console.log(arrDiem);
  //output: nguyễn văn a - 9 điểm: output: string

  var output = "";
  

  var indexMax = finIndexMax(arrDiem);

  output =
    "sinh viên có điểm cao nhất: " +
    arrName[indexMax] +
    " - " +
    arrDiem[indexMax];

  document.querySelector("#svGioiNhat").innerHTML = output;
};

document.querySelector("#btnSVThapDiemNhat").onclick = function () {
  var arrTagDiem = document.querySelectorAll("#tblBody td:nth-child(4)");
  console.log(arrTagDiem);

  var arrDiem = [];

  for (var index = 0; index < arrTagDiem.length; index++) {
    var diem = Number(arrTagDiem[index].innerHTML);

    arrDiem.push(diem);
  }

  var arrTagName = document.querySelectorAll("#tblBody td:nth-child(3)");
  var arrName = [];

  for (var index = 0; index < arrTagName.length; index++) {
    var Name = arrTagName[index].innerHTML;

    arrName.push(Name);
  }
  console.log(arrName);
  console.log(arrDiem);

  var ketQua = "";
  var indexMin = finIndexMin(arrDiem);

  ketQua =
    "Sinh viên có điểm thấp nhất: " +
    arrName[indexMin] +
    " - " +
    arrDiem[indexMin];

  document.querySelector("#svYeuNhat").innerHTML = ketQua;
};
// điếm số lượng sv giỏi
document.querySelector("#btnSoSVGioi").onclick = function () {
  //input: arrdiem []
  var arrTagDiem = document.querySelectorAll("#tblBody td:nth-child(4)");
  console.log(arrTagDiem);

  var arrDiem = [];
  for (var index = 0; index < arrTagDiem.length; index++) {
    var diem = Number(arrTagDiem[index].innerHTML);

    arrDiem.push(diem);
  }
  //output: soLuongSVGioi:number
  var soLuongSVGioi = 0;
  soLuongSVGioi = demSinhViengioi(arrDiem, 8);
  //in ouput ra giao diện

  document.querySelector("#soSVGioi").innerHTML = soLuongSVGioi;
};

document.querySelector("#btnSVDiemHon5").onclick = function () {
  var arrTagDiem = document.querySelectorAll("#tblBody td:nth-child(4)");
  console.log(arrTagDiem);

  var arrDiem = [];
  for (var index = 0; index < arrTagDiem.length; index++) {
    var diem = Number(arrTagDiem[index].innerHTML);

    arrDiem.push(diem);
  }
  var arrTagName = document.querySelectorAll("#tblBody td:nth-child(3)");
  var arrName = [];

  for (var index = 0; index < arrTagName.length; index++) {
    var Name = arrTagName[index].innerHTML;

    arrName.push(Name);
  }

  //oupuut: html tên các sv trên 5 : string

  var html = "";

  html = diemTBHon5(arrDiem, arrName);

  document.querySelector("#dsDiemHon5").innerHTML = html;
};

document.querySelector("#btnSapXepTang").onclick = function () {
  var arrTagDiem = document.querySelectorAll("#tblBody td:nth-child(4)");
  console.log(arrTagDiem);

  var arrDiem = [];
  for (var index = 0; index < arrTagDiem.length; index++) {
    var diem = Number(arrTagDiem[index].innerHTML);

    arrDiem.push(diem);
  }
  //output: arrDiemSapxep

  var arrDiemSX = [];
  arrDiemSX = sapXepTangDanSo(arrDiem);

  document.querySelector("#dtbTang").innerHTML = "Điểm: " + arrDiemSX;
};






