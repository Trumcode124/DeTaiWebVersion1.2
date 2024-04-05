
// let sp1 = {masp :1, tensp:"sp1", gia:1000, hinhanh:"../image/5d7fa5e2fd2561a979990e6e03c85c3b.jpg"};
// let sp2 = {masp:2, tensp:"sp2", gia:2000, hinhanh:"../image/an-giang-6902779_1280.jpg"};
// let sp3 = {masp:3, tensp:"sp3", gia:3000, hinhanh:"../image/ethnic-girls-4522623_1280.jpg"};
// let sp4 = {masp:4, tensp:"sp4", gia:4000, hinhanh:"../image/hue-city-5151869_1280.jpg"};
// let sp5 = {masp:5, tensp:"sp5", gia:5000, hinhanh:"../image/nha-trang-beach-tour-1-wallpaper-preview.jpg"};
// let sp6 = {masp:6, tensp:"sp6", gia:6000, hinhanh:"../image/river-4705974_1280.jpg"};

// let dssp = [sp1, sp2, sp3, sp4, sp5, sp6];
let dsTourKhuyenMai = [
    {maTour:1, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", giaTruocKhiGiam: "900.000đ" ,hinhAnh:"../image/5d7fa5e2fd2561a979990e6e03c85c3b.jpg"},
    {maTour:2, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", giaTruocKhiGiam: "900.000đ" ,hinhAnh:"../image/an-giang-6902779_1280.jpg"},
    {maTour:3, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", giaTruocKhiGiam: "900.000đ" ,hinhAnh:"../image/ethnic-girls-4522623_1280.jpg"},
    {maTour:4, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", giaTruocKhiGiam: "900.000đ" ,hinhAnh:"../image/hue-city-5151869_1280.jpg"},
    {maTour:5, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", giaTruocKhiGiam: "900.000đ" ,hinhAnh:"../image/nha-trang-beach-tour-1-wallpaper-preview.jpg"},
    {maTour:6, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", giaTruocKhiGiam: "900.000đ" ,hinhAnh:"../image/river-4705974_1280.jpg"},

];

function hienthiChiTiet(maTour){
    let tour = dsTourKhuyenMai.find(spTemp => spTemp.maTour == maTour);
    localStorage.setItem("maTour", tour.maTour);
    localStorage.setItem("tenTout", tour.tenTour);
    localStorage.setItem("thoiGian", tour.thoiGian)
    localStorage.setItem("phuongTien", tour.phuongTien);
    localStorage.setItem("gia", tour.gia);
    localStorage.setItem("ngayKhoiHanh", tour.ngayKhoiHanh);
    localStorage.setItem("giaTruocKhiGiam", tour.giaTruocKhiGiam);
    localStorage.setItem("hinhAnh", tour.hinhAnh);

}

$(document).ready(function(){
    function napSanpham(tour){
        let col = `
            <div class=" tour-item p-0 mx-2">
                <div class="card mb-4 w-100" >
                    <img src="${tour.hinhAnh}" class="card-img-top img-fluid" >
                    <div class="card-body">
                        <h6 class="card-title h5">${tour.tenTour}</h6>
                        <p class="card-text mb-2">
                            <i class="fa-regular fa-clock me-1" style="width: 20px"></i>
                            Thời gian: 
                            ${tour.thoiGian}
                        </p>

                        <p class="card-text mb-2">
                            <i class="fa-solid fa-truck-plane me-1" style="width: 20px"></i>
                            Phương tiện:
                            ${tour.phuongTien}
                        </p>

                        <p class="card-text mb-2">
                        <i class="fa-regular fa-calendar" style="width: 25px"></i>
                            Ngày khởi hành:
                            ${tour.ngayKhoiHanh}
                        </p>

                        <div class="tour-price" >
                            <p class="card-text h3 mb-2 discount-price">${tour.gia}</p>
                            <p class="card-text h5 mb-2 price ">${tour.giaTruocKhiGiam}</p>
                        </div>  
                    </div>
                </div>
            </div> `
                    
        $("#tourKhuyenMai").append(col);       
    }
    
    dsTourKhuyenMai.forEach(tour => napSanpham(tour));
});


let dsMienBac = [
    {maTour:1, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", hinhAnh:"../image/5d7fa5e2fd2561a979990e6e03c85c3b.jpg"},
    {maTour:2, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", hinhAnh:"../image/an-giang-6902779_1280.jpg"},
    {maTour:3, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", hinhAnh:"../image/ethnic-girls-4522623_1280.jpg"},
    {maTour:4, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", hinhAnh:"../image/hue-city-5151869_1280.jpg"},
    {maTour:5, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", hinhAnh:"../image/nha-trang-beach-tour-1-wallpaper-preview.jpg"},
    {maTour:6, tenTour:"Tour Nha Trang | Địa điểm nổi bật", thoiGian: "4 ngày 2 đêm", phuongTien: "Xe khách", ngayKhoiHanh: "28/3/2024", gia: "1.000.000đ", hinhAnh:"../image/river-4705974_1280.jpg"},

];

$(document).ready(function(){
    function napSanpham(tour){
        let col = `
            <div class=" tour-item p-0 mx-2">
                <div class="card mb-4 w-100" >
                    <img src="${tour.hinhAnh}" class="card-img-top img-fluid" >
                    <div class="card-body">
                        <h6 class="card-title h5">${tour.tenTour}</h6>
                        <p class="card-text mb-2">
                            <i class="fa-regular fa-clock me-1" style="width: 20px"></i>
                            Thời gian: 
                            ${tour.thoiGian}
                        </p>

                        <p class="card-text mb-2">
                            <i class="fa-solid fa-truck-plane me-1" style="width: 20px"></i>
                            Phương tiện:
                            ${tour.phuongTien}
                        </p>

                        <p class="card-text mb-2">
                        <i class="fa-regular fa-calendar" style="width: 25px"></i>
                            Ngày khởi hành:
                            ${tour.ngayKhoiHanh}
                        </p>

                        <div class="tour-price" >
                            <p class="card-text h3 mb-2 discount-price">${tour.gia}</p>
                        </div>  
                    </div>
                </div>
            </div> `
                    
        $("#tourMienBac").append(col);       
    }
    
    dsMienBac.forEach(tour => napSanpham(tour));
});