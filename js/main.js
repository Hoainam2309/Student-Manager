let btnDiem = document.querySelector('#btnSVCaoDiemNhat');

btnDiem.onclick = function () {
  let arrTagDiem = document.querySelectorAll('#tblBody td:nth-child(4)');

  let arrDiem = [];
  for (let index = 0; index < arrTagDiem.length; index++) {
    let diem = arrTagDiem[index].innerHTML;
    console.log(diem)
    arrDiem.push(diem);
  }
  let arrTagName = document.querySelectorAll('#tblBody td:nth-child(3)');

  let arrName = [];
  for (let iName = 0; iName < arrTagName.length; iName++) {
    let name = arrTagName[iName].innerHTML;

    arrName.push(name);
  }

  let output = '';
  let indexMax = findIndexMax(arrDiem);
  output = 'sinh viên có điểm cao nhất ' + arrName[indexMax] + ' -  số điểm ' + arrDiem[indexMax];
  document.getElementById('svGioiNhat').innerHTML = output;
}

let btnDiemMin = document.querySelector('#btnSVThapDiemNhat');
btnDiemMin.onclick = function () {
  let arrDiem = document.querySelectorAll('#tblBody td:nth-child(4)');
  let arrTagDiem = [];

  for (let index = 0; index < arrDiem.length; index++) {
    let diem = arrDiem[index].innerHTML;
    arrTagDiem.push(diem);
  }

  let arrTen = document.querySelectorAll('#tblBody td:nth-child(3)');
  let arrTagName = [];

  for (let index = 0; index < arrTen.length; index++) {
    let name = arrTen[index].innerHTML;
    arrTagName.push(name)
  }

  let output = '';
  let tagMin = findIndexMin(arrTagDiem);
  output = 'sinh viên thấp điểm nhất  ' + arrTagName[tagMin] + ' số điểm là ' + arrTagDiem[tagMin];
  document.getElementById('svYeuNhat').innerHTML = output;

}
//
let btnSVGioi = document.querySelector('#btnSoSVGioi');
btnSVGioi.onclick = function () {
  let arrTagDiem = document.querySelectorAll('#tblBody td:nth-child(4)');

  let arrDiem = [];
  for (let index = 0; index < arrTagDiem.length; index++) {
    let diem = arrTagDiem[index].innerHTML;
    console.log(diem)
    arrDiem.push(diem);
  }

  let output = 0;
  output = diemSVGioi(arrDiem, 8);
  document.getElementById('soSVGioi').innerHTML = output;

}
//
let btnSVHon5 = document.querySelector('#btnSVDiemHon5');
btnSVHon5.onclick = function () {
  let arrTagDiem = document.querySelectorAll('#tblBody td:nth-child(4)');

  let arrDiem = [];
  for (let index = 0; index < arrTagDiem.length; index++) {
    let diem = arrTagDiem[index].innerHTML;
    arrDiem.push(diem);
  }

  let arrTagName = document.querySelectorAll('#tblBody td:nth-child(3)');
  let arrName = [];
  for (let iName = 0; iName < arrTagName.length; iName++) {
    let name = arrTagName[iName].innerHTML;
    arrName.push(name);
  }

  let output = '';
  output = nameSVLonHon5(arrName,arrDiem);

  document.getElementById('dsDiemHon5').innerHTML = output;

}
//
let btnSort = document.querySelector('#btnSapXepTang');
btnSort.onclick = function () {
  let arrTagDiem = document.querySelectorAll('#tblBody td:nth-child(4)');

  let arrDiem = [];
  for (let index = 0; index < arrTagDiem.length; index++) {
    let diem = arrTagDiem[index].innerHTML;
    arrDiem.push(diem);
  }

  let output = 0 ;
  output = sortMax(arrDiem);

  document.getElementById('dtbTang').innerHTML = output;
}






