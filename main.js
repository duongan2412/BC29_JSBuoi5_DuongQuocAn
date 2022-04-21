function getEleID(element) {
    return document.getElementById(element);
}

/**
 * Bài 1 :
 * Đầu vào khai báo điểm chẩn, điểm 3 môn, đối tượng, khu vực
 * Xử lý : kiểm tra môn = 0 thì loại
 * kiểm tra khu vực và đối tượng để cộng vào điểm tb
 * kiểm tra điểm tb và điểm chuẩn 
 * Đầu ra : hiển thị kết quả 
 */

function tinhDiemUuTien() {
    var diemUuTien = 0;
    var doiTuong = getEleID("doiTuong").value;
    doiTuong = parseFloat(doiTuong);
    var diemDoiTuong = 0;
    var khuVuc = getEleID("khuVuc").value;
    khuVuc = parseFloat(khuVuc);
    var diemKhuVuc = 0;
    switch (doiTuong) {
        case 1:
            diemDoiTuong = 2.5;
            break;
        case 2:
            diemDoiTuong = 1.5;
            break;
        case 3:
            diemDoiTuong = 1;
            break;
        default:
            diemDoiTuong = 0;
    }
    switch (khuVuc) {
        case 1:
            diemKhuVuc = 2;
            break;
        case 2:
            diemKhuVuc = 1;
            break;
        case 3:
            diemKhuVuc = 0.5;
            break;
        default:
            diemKhuVuc = 0;
    }
    return diemUuTien = diemDoiTuong + diemKhuVuc;
};

function laDiemLiet(a, b, c) {
    var diemLiet = false;
    if (a <= 0 || b <= 0 || c <= 0) {
        diemLiet = true;
    }
    return diemLiet;
}

function tinhTongDiem(a, b, c) {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    var diemTong = a + b + c;
    return diemTong;
}

function kiemTraDiem() {
    var a = getEleID("txtDiemMon1").value;
    var b = getEleID("txtDiemMon2").value;
    var c = getEleID("txtDiemMon3").value;
    var diemLiet = laDiemLiet(a, b, c);
    var diemChuan = getEleID("txtDiemChuan").value;
    var diemTong = tinhTongDiem(a, b, c);
    var diemUuTien = tinhDiemUuTien();
    var diem = diemTong +  diemUuTien;
    var kq = ""
    if (diemLiet) {
        return kq = "Rớt! do có điểm liệt";
    } else {
        if (diem < diemChuan) {
            return kq = "Rớt! tổng điểm " + diem + " không đủ điểm chuẩn";
        } else {
            return kq = "Đậu! tổng điểm " + diem;
        }
    }
}

getEleID("btnDiemChuan").onclick = function () {
    var kq = kiemTraDiem();
    getEleID("kqDiem").innerHTML = kq;
}

/**
 * Bài 2 :
 * Đầu vào : khai báo sô kw
 * Xử lý :  kiểm tra số kw
 * Nếu 50kw đầu 500d
 * 50kw tiếp theo  650d
 * 100kw tiếp theo  850d
 * 150kw tiếp theo  1100d
 * > 350kw 1300d
 * Đầu ra show kết quả
 */

 function kiemtraHoTen() {
    var hoTen = getEleID("txtHoTen").value;
    if(hoTen === ""){
        getEleID("txtHoTen").placeholder = "Vui lòng nhập họ tên!";
    }
}

function kiemtraKw() {
    var kw = getEleID("numKw").value;
    if(kw === ""){
        getEleID("numKw").placeholder = "Vui lòng nhập số kw!";
    }
}

function tinhTienDien(hoTen, soKw){
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var kq = "";
    var phi50KwDau = 500;
    var tt50KwDau = 500 * 50;
    var phi50KwKe = 650;
    var tt50KwKe = 650 * 50;
    var phi100KwKe = 850;
    var tt100KwKe = 850 * 100;
    var phi150KwKe = 1100;
    var tt150KwKe = 1100 * 150;
    var phiTren350 = 1300;
    var tienDien = 0;
    if (soKw <= 50) {
        tienDien = soKw * phi50KwDau;
    } else if (soKw <= 100) {
        tienDien = tt50KwDau + ((soKw - 50) * phi50KwKe);
    } else if (soKw <= 200) {
        tienDien = tt50KwDau + tt50KwKe + ((soKw - 100) * phi100KwKe);
    } else if (soKw <= 350) {
        tienDien = tt50KwDau + tt50KwKe + tt100KwKe + ((soKw - 200) * phi150KwKe);
    } else {
        tienDien = tt50KwDau + tt50KwKe + tt100KwKe + tt150KwKe + ((soKw - 350) * phiTren350);
    }
    tienDien = currentFormat.format(tienDien);
    return kq = "Họ tên: " + hoTen + " tiền điện: " + tienDien + "đ";
}

getEleID("btnTinhKW").onclick = function() {
    var hoTen = getEleID("txtHoTen").value;
    var soKw = getEleID("numKw").value;
    soKw = parseFloat(soKw);
    kiemtraHoTen();
    kiemtraKw();
    kq = tinhTienDien(hoTen,soKw);
    getEleID("kqTienDien").innerHTML = kq;
}

