var mangSinhVien = []; // [sv1,sv2,sv3] => [{maSinhVien:'01',tenSinhVien:'nguyenvana'}, {maSinhVien:'02',tenSinhVien:'nguyenvanb'},...]
//                                                  0                                       1               
 function newStudent() {
    // input: thông tin sinh viên: SinhVien
    var sv = new SinhVien();
    //Lấy thông tin từ giao diện đưa vào input sv
    sv['maSinhVien'] = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.khoaHoc = document.querySelector('#khoaHoc').value;
    //11-01-1999
    var ngaySinh = (document.querySelector('#ngaySinh').value);
    
    // console.log( document.querySelector('#ngaySinh').value);
    sv.ngaySinh = ngaySinh;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    console.log(sv);
    
    mangSinhVien.push(sv);

    console.log('mangSinhVien',mangSinhVien);
    //Sau khi thêm 1 sinh viên => mảng có sinh viên [{},{}]
    renderTableSinhVien(mangSinhVien);

 let sMangSinhVien = JSON.stringify(mangSinhVien);
 saveLocalStorage('mangSinhVien', sMangSinhVien);

 

};


function renderTableSinhVien(arrSinhVien) { //input: arrSinhVien: [{},{},{}]
    //output: html = '<tr><td></td> ....</tr>'
    var htmlContent = '';
    //Duyệt qua các object của mảng sinh viên
    for(var index = 0 ; index < arrSinhVien.length; index ++) {
        var sv = arrSinhVien[index]; //Mỗi lần duyệt lấy ra 1 object thứ index của arrSinhVien [{0},{1},{2}]
        //Nếu bấm từ nút thêm (new từ SinhVien => nên sẽ có tinhDiemTrungBinh)
        //Nếu lấy từ localStorage thì bị mất phương thức tinhDiemTrungBinh
        //hasOwnProperty('tinhDiemTrugnBinh'): nếu có tên thuộc tính đó trong object thì trả về giá trị true, không có trẻ về false
        //  if(!sv.hasOwnProperty('tinhDiemTrungBinh')){
        //     //.__proto__. : mở rộng thuộc tính của object
        //      sv.__proto__.tinhDiemTrungBinh =  function () {
        //         var diemTB = (Number(sv.diemToan) + Number(sv.diemLy) + Number(sv.diemHoa) ) / 3;
        //         return diemTB;
        //     }
            
        //  }

        //Từ object tạo ra thẻ tr
       
        var tr = `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.khoaHoc}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${index}')">Xoá</button>
                    <button class="btn btn-danger ml-2" onclick="xoaSinhVienTheoMa('${sv.maSinhVien}')">Xoá Mã SV</button>
                    <button class="btn btn-primary ml-2">Sửa</button>
                </td>
            </tr>
        `;
        //Mỗi lần tạo xong thẻ tr sẽ + vào output
        htmlContent += tr;
    }
   
    document.querySelector('#tblSinhVien').innerHTML = htmlContent;

}

function xoaSinhVien(index) {
    
    mangSinhVien.splice(index,1); 
    
    renderTableSinhVien(mangSinhVien);
}

//mảng sinh viên = [0,1,2,3,4,5,6,7,8,9,10,11,12]
function xoaSinhVienTheoMa(maSV) {
    
    let viTriXoa = -1;
    for(var i = 0; i < mangSinhVien.length; i++){
        let sinhVien = mangSinhVien[i];
        if(sinhVien.maSinhVien == maSV) {
            viTriXoa = i;
        }
    }
    
   mangSinhVien.splice(viTriXoa,1);
   renderTableSinhVien(mangSinhVien);
}

//Xóa

// function XoaSinhVienGiongMa(maSv) {
//     let viTriXoa = -1;
//     for(var i = mangSinhVien.length -1;i >= 0; i--) {
//         let sinhVien = mangSinhVien[i];
//         if(sinhVien.mangSinhVien == maSv) {
//             mangSinhVien.splice(viTriXoa,1);
//         }
//     }
//     renderTableSinhVien(mangSinhVien);
// }


// var svLocalStorage = {
//     maSinhVien: 1,
//     tinhDiemTrungBinh: function () {
//         console.log(321);
//     }
// }

// svLocalStorage.__proto__.tinhDiemTrungBinh = function () {
//     console.log(134);
// }

// svLocalStorage.tinhDiemTrungBinh();
// console.log(svLocalStorage);



function saveLocalStorage (key,value) {
    localStorage.setItem(key,value);
}

function getLocalStorage (key) {
if(localStorage.getItem(key)) {
    return localStorage.getItem(key)
}
return undefined;

}


// window.onload = function () {
//     var value = getLocalStorage('mangSinhVien');
//     if(value !== undefined) {
//         mangSinhVien = JSON.parse(value);
//         renderTableSinhVien(mangSinhVien);
//     }
// }