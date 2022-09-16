var mangSinhVien = []; // [sv1,sv2,sv3] => [{maSinhVien:'01',tenSinhVien:'nguyenvana'}, {maSinhVien:'02',tenSinhVien:'nguyenvanb'},...]
//                                                  0                                       1               
document.querySelector('#btnThemSinhVien').onclick = function () {
    //input: thông tin sinh viên: SinhVien
    var sv = new SinhVien();
    //Lấy thông tin từ giao diện đưa vào input sv
    sv['maSinhVien'] = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.matKhau = document.querySelector('#matKhau').value;
    sv.khoaHoc = document.querySelector('#khoaHoc').value;
    //11-01-1999
    var ngaySinh = new Date(document.querySelector('#ngaySinh').value);
    // console.log(  ngaySinh.toLocaleDateString());
    sv.ngaySinh = ngaySinh.toLocaleDateString();
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    console.log(sv);
    
    mangSinhVien.push(sv);

    console.log('mangSinhVien',mangSinhVien);
    //Sau khi thêm 1 sinh viên => mảng có sinh viên [{},{}]
    renderTableSinhVien(mangSinhVien);

}


function renderTableSinhVien(arrSinhVien) { //input: arrSinhVien: [{},{},{}]
    //output: html = '<tr><td></td> ....</tr>'
    var htmlContent = '';
    //Duyệt qua các object của mảng sinh viên
    for(var index = 0 ; index < arrSinhVien.length; index ++) {
        var sv = arrSinhVien[index]; //Mỗi lần duyệt lấy ra 1 object thứ index của arrSinhVien [{0},{1},{2}]
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