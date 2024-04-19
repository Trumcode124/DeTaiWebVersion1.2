let dsTour = [

    // tour khuyến mãi
    {   maTour:1, 
        tenTour:"Hồ Gươm - Quảng Trường Ba Đình - Hà Nội", 
        thoiGian: "3 ngày 2 đêm", 
        phuongTien: "Tàu Lửa", 
        ngayKhoiHanh: "28/3/2024", 
        gia: "4.499.000đ", 
        giaTruocKhiGiam: "6.499.000đ" ,
        hinhAnh:"../image/TourMienBac/HaNoi/HaNoi1.jpg",
        hinhAnh2:"../image/TourMienBac/HaNoi/HaNoi2.jpg",
        hot:"1" ,
        vungmien:"bac"
    },

    {   maTour:2, 
        tenTour:"Sa Pa - Ruộng Bậc Thang - Lào Cai", 
        thoiGian: "3 ngày 2 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "15/4/2024", 
        gia: "2.999.000đ", 
        giaTruocKhiGiam: "3.999.000đ" ,
        hinhAnh:"../image/TourMienBac/LaoCai/SaPa1.jpg",
        hinhAnh2:"../image/TourMienBac/LaoCai/SaPa2.jpg",
        hot:"1" ,
        vungmien:"bac"
    },

    {   maTour:3, 
        tenTour:"Chợ nổi Cái Răng - Vườn Trái Cây - Cần Thơ", 
        thoiGian: "2 ngày 1 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "28/3/2024", 
        gia: "1.899.000đ", 
        giaTruocKhiGiam: "2.599.000đ" ,
        tongquan:"Du lịch Cần Thơ trong vòng 2 ngày một đêm sẽ đưa du khách khám phá vẻ đẹp và sự đa dạng văn hóa của thành phố sông nước Cần Thơ - trung tâm của vùng Đồng Bằng Sông Cửu Long. Với những con kênh nước rợp bóng cây dừa, những chợ nổi sôi động và những bản nhạc dân ca đặc sắc, Cần Thơ là điểm đến lý tưởng để trải nghiệm và khám phá vùng đất miền Tây sôi động và mộng mơ.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 07:00 - 08:00: Đón khách tại điểm hẹn tại thành phố Hồ Chí Minh và khởi hành đến Cần Thơ.
        - 10:00 - 12:00: Đến Cần Thơ, check-in tại khách sạn và nghỉ ngơi.
        - 12:00 - 13:00: Dùng cơm trưa tại nhà hàng địa phương với các món ăn đặc sản miền Tây.
        - 13:30 - 15:30: Thăm quan Bảo tàng Cần Thơ để hiểu về lịch sử, văn hóa và đời sống của người dân địa phương.
        - 16:00 - 18:00: Thăm chợ nổi Cái Răng, tham quan và mua sắm các loại trái cây, đặc sản miền Tây trên sông nước sầm uất.
        - 18:30 - 20:00: Dùng tối với các món ăn dân dã và thưởng thức những màn biểu diễn nghệ thuật dân gian tại khu vực quán ăn ven sông.
        - 20:30: Tự do khám phá Cần Thơ vào buổi tối hoặc thư giãn tại khách sạn.</p> </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:00 - 07:00: Ăn sáng tại khách sạn và chuẩn bị cho một ngày mới.
        - 07:30 - 09:30: Tham quan quận Bình Thủy và viếng nhà cổ Bình Thủy, một công trình kiến trúc lịch sử đặc sắc của Cần Thơ.
        - 10:00 - 12:00: Tham quan Vườn trái cây Cần Thơ, trải nghiệm hái trái cây tươi ngon và thưởng thức trà sen truyền thống.
        - 12:30 - 13:30: Dùng cơm trưa với các món ăn đặc sản tại một nhà hàng ven sông.
        - 14:00 - 16:00: Tham quan và chụp hình tại cầu Cần Thơ - biểu tượng của thành phố.
        - 16:30: Khởi hành trở về thành phố Hồ Chí Minh.
        - 19:30: Dự kiến đến điểm kết thúc chương trình tại Hồ Chí Minh. </p> </div> `,
        hinhAnh:"../image/TourMienNam/CanTho/CanTho1.jpg",
        hinhAnh2:"../image/TourMienNam/CanTho/CanTho2.jpg",
        hot:"1" ,
        vungmien:"nam"
    },

    {   maTour:4, 
        tenTour:"Tháp Trấn An - Vườn Hoa Kiểng - Đồng Tháp", 
        thoiGian: "4 ngày 3 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "1/6/2024", 
        gia: "2.699.000đ", 
        giaTruocKhiGiam: "3.899.000đ" ,
        tongquan:"Khám phá vùng đất Đồng Tháp - một điểm đến tuyệt vời cho những ai yêu thích văn hóa và thiên nhiên miền Tây. Đồng Tháp không chỉ nổi tiếng với những cánh đồng lúa bát ngát mà còn là điểm đến của những di sản văn hóa lịch sử độc đáo. Tham gia tour này, du khách sẽ được khám phá vẻ đẹp mộc mạc, bình dị của vùng đất miền Tây sông nước." ,
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 07:00 - 08:00: Xuất phát từ thành phố Hồ Chí Minh đến Đồng Tháp.
        - 08:00 - 10:00: Đến Đồng Tháp, check-in khách sạn và nghỉ ngơi.
        - 10:00 - 12:00: Thăm quan Bảo tàng Cao Lãnh để hiểu về lịch sử và văn hóa của Đồng Tháp.
        - 12:00 - 13:00: Dùng cơm trưa tại nhà hàng địa phương với các món ăn đặc sản.
        - 13:00 - 16:00: Khám phá Khu du lịch sinh thái Tràm Chim - một trong những khu vực bảo tồn thiên nhiên quan trọng của miền Tây, thưởng thức cảnh đẹp của đồng lúa và chim đậu trên cây.
        - 16:00 - 18:00: Tham quan Tháp Trấn An - một công trình kiến trúc lịch sử độc đáo và cảnh quan đẹp như tranh vẽ.
        - 18:00 - 20:00: Dùng tối và thưởng thức các món ăn đặc sản miền Tây tại nhà hàng ven sông.
        - 20:00 - 22:00: Tự do khám phá đêm Đồng Tháp hoặc nghỉ ngơi tại khách sạn.</p> </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 07:00 - 08:00: Ăn sáng tại khách sạn.
        - 08:00 - 10:00: Thăm vườn trái cây Lai Vung - một điểm đến nổi tiếng với các loại trái cây ngọt ngào và đặc sản miền Tây.
        - 10:00 - 12:00: Trải nghiệm thuyền thúng trên sông Tiền, cảm nhận cuộc sống ven sông và thăm những ngôi nhà truyền thống.
        - 12:00 - 13:00: Ăn trưa tại nhà hàng ven sông.
        - 13:00 - 15:00: Thăm quan vườn hoa Sa Đéc - nơi được biết đến qua câu chuyện "L'amant" của Marguerite Duras, tận hưởng không gian yên bình và hương hoa ngát ngào.
        - 15:00 - 16:00: Mua sắm quà lưu niệm tại các cửa hàng địa phương.
        - 16:00 - 18:00: Trở về thành phố Hồ Chí Minh. </p> </div> `,
        hinhAnh:"../image/TourMienNam/DongThap/DongThap1.jpg",
        hinhAnh2:"../image/TourMienNam/DongThap/DongThap2.jpg",
        hot:"1" ,
        vungmien:"nam"
    },

    {   maTour:5, 
        tenTour:"cầu Bàn Tay - Cầu Con Rồng - Đà Nãng", 
        thoiGian: "5 ngày 4 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "25/4/2024", 
        gia: "4.999.000đ", 
        giaTruocKhiGiam: "5.599.000đ" ,
        tongquan:"Đà Nẵng, thành phố đáng sống và động lực kinh tế của miền Trung Việt Nam, là một điểm đến tuyệt vời cho du lịch. Với bãi biển trải dài và nước biển trong xanh, Đà Nẵng thu hút du khách bằng vẻ đẹp tự nhiên tuyệt mỹ. Nơi đây có Cầu Rồng độc đáo và Bán đảo Sơn Trà với quần thể linh thiêng và rừng nguyên sinh. Bạn cũng không thể bỏ qua thành phố cổ Hội An, nằm gần Đà Nẵng, với kiến trúc lịch sử độc đáo và không khí tươi mát.\n Đà Nẵng còn có Bà Nà Hills với cáp treo độc đáo, Mỹ Sơn - di sản thế giới của người Chăm, và Cầu Vàng nổi tiếng. Ngoài ra, thành phố còn có nhiều khu vui chơi, như Công viên Châu Á, Sun World Đà Nẵng và Công viên Cá Heo.\n Đà Nẵng cũng gần các điểm du lịch nổi tiếng như Huế và Hội An, tạo điều kiện thuận lợi cho việc khám phá vùng lân cận. Với sự kết hợp hài hòa giữa thiên nhiên tươi đẹp và tiện nghi hiện đại, Đà Nẵng là một điểm đến không thể bỏ qua khi du lịch tại Việt Nam.",

        hinhAnh:"../image/TourMienTrung/DaNang/DaNang1.jpg",
        hinhAnh2:"../image/TourMienTrung/DaNang/DaNang2.jpg",
        hot:"1" ,
        vungmien:"trung"
    },

    {   maTour:6, 
        tenTour:"Cố Đô Huế - Cầu Trường Tiền - Thừa Thiên Huế", 
        thoiGian: "3 ngày 2 đêm", 
        phuongTien: "Xe lửa", 
        ngayKhoiHanh: "4/5/2024", 
        gia: "3.199.000đ", 
        giaTruocKhiGiam: "3.799.000đ" ,
        tongquan: "Huế, thành phố cổ kính của Việt Nam, là một điểm đến thú vị cho du khách khám phá. Với kiến trúc hoàng gia tuyệt đẹp và di sản văn hóa phong phú, Huế hấp dẫn du khách bằng vẻ đẹp lịch sử và không gian thanh bình. Bạn sẽ bị mê hoặc bởi Cung điện Hoàng Gia, Đại Nội và Thiên Mụ Pagoda - những biểu tượng văn hóa độc đáo của Huế.\n Đến Huế, bạn cũng có cơ hội thưởng thức ẩm thực truyền thống độc đáo và tham gia vào các lễ hội truyền thống tuyệt vời. Hãy đắm chìm trong vẻ đẹp tinh tế của Huế và trải nghiệm một chuyến du lịch đáng nhớ.",

        hinhAnh:"../image/TourMienTrung/Hue/Hue1.jpg",
        hinhAnh2:"../image/TourMienTrung/Hue/Hue2.jpg",
        hot:"1" ,
        vungmien:"trung"
    },

    // tour miền trung 
    {   maTour:7, 
        tenTour:"Vinpearl Land - Nha Trang", 
        thoiGian: "4 ngày 2 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "25/4/2024", 
        gia: "4.999.000đ", 
        giaTruocKhiGiam: "5.599.000đ" ,
        tongquan:"Nha Trang, thành phố biển nổi tiếng của Việt Nam, là một điểm đến vô cùng hấp dẫn cho du khách. Với bờ biển trải dài, cát trắng mịn và nước biển trong xanh, Nha Trang mang đến một khung cảnh tuyệt đẹp và không thể cưỡng lại. Du khách có thể tận hưởng thời gian nghỉ ngơi trên bãi biển Trần Phú hay tham gia vào các hoạt động thể thao nước như lặn biển, lướt ván, hay đi thuyền trên vịnh.\n Nha Trang cũng nổi tiếng với các điểm tham quan như Tháp Bà Ponagar, Vinpearl Land và Viện Hải dương học Nha Trang. Không chỉ vậy, thành phố còn hấp dẫn du khách bởi ẩm thực đa dạng và đặc sản hải sản tươi ngon. Hãy đến Nha Trang và trải nghiệm những khoảnh khắc tuyệt vời trên bờ biển rực rỡ này.",

        hinhAnh:"../image/TourMienTrung/NhaTrang/NhaTrang1.jpg",
        hinhAnh2:"../image/TourMienTrung/NhaTrang/NhaTrang2.jpg",
        hot:"0" ,
        vungmien:"trung"
    },

    {   maTour:9, 
        tenTour:"Làng Chài Mũi Né - Tháp Po Sah Inư - Phan Thiết", 
        thoiGian: "4 ngày 2 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "25/4/2024", 
        gia: "4.999.000đ", 
        giaTruocKhiGiam: "5.599.000đ" ,
        tongquan:"Phan Thiết, một thiên đường biển nằm ở miền Nam Việt Nam, là một điểm đến tuyệt vời cho du lịch. Với bãi biển dài, cát vàng óng mịn, Phan Thiết thu hút du khách bằng vẻ đẹp tự nhiên tuyệt đẹp. Những cơn gió biển thổi mát làm cho kỳ nghỉ tại đây trở nên thú vị hơn. Du khách có thể thả mình trên bãi biển Mũi Né, tắm nắng, tham gia các hoạt động thể thao nước như lướt ván, đi buồm, hay tham gia vào các tour lặn biển khám phá đáy biển phong phú.\n Ngoài ra, Phan Thiết còn nổi tiếng với Đồi Cát Bay, nơi có những cồn cát lớn hình thành từ gió biển và tạo nên cảnh quan độc đáo. Không chỉ có vẻ đẹp tự nhiên, Phan Thiết cũng hấp dẫn du khách bởi ẩm thực đa dạng và đặc sản hải sản tươi ngon. Hãy đến Phan Thiết và thưởng thức những trải nghiệm tuyệt vời trên bờ biển tuyệt đẹp này.",


        hinhAnh:"../image/TourMienTrung/PhanThiet/PhanThiet1.jpg",
        hinhAnh2:"../image/TourMienTrung/PhanThiet/PhanThiet2.jpg",
        hot:"0" ,
        vungmien:"trung"
    },

    {   maTour:9, 
        tenTour:"Bãi biển Mũi Điện - Tháp Nghinh Phong - Phú Yên", 
        thoiGian: "4 ngày 3 đêm", 
        phuongTien: "Xe lửa", 
        ngayKhoiHanh: "1/7/2024", 
        gia: "7.599.000đ", 
        giaTruocKhiGiam: "7.999.000đ" ,
        tongquan:"Phú Yên, một tỉnh ven biển tuyệt đẹp ở miền Trung Việt Nam, là một điểm đến độc đáo cho du lịch. Với bờ cát trắng tinh khôi và biển xanh trong, Phú Yên hấp dẫn du khách bằng vẻ đẹp tự nhiên hoang sơ. Bãi Xep, Bãi Tràm và Vũng Rô là những bãi biển nổi tiếng với không gian yên bình và cảnh quan hùng vĩ.\n Ngoài ra, Phú Yên còn có Đảo Nhạn, nơi bạn có thể thăm quan hệ thống hang động độc đáo và tận hưởng phong cảnh thiên nhiên hoang sơ. Đừng quên khám phá vịnh Xuân Đài, nơi có khung cảnh đẹp mê hồn và hoàng hôn tuyệt vời. Phú Yên cũng nổi tiếng với món hải sản tươi ngon và nền văn hóa dân gian độc đáo. Hãy đến Phú Yên và khám phá những khoảnh khắc tuyệt vời trong chuyến du lịch của bạn.",

        hinhAnh:"../image/TourMienTrung/PhuYen/PhuYen1.jpg",
        hinhAnh2:"../image/TourMienTrung/PhuYen/PhuYen2.jpg",
        hot:"0" ,
        vungmien:"trung"
    },

    {   maTour:10, 
        tenTour:"Quảng trường và tượng đài Hồ Chí Minh - Thành Phố Vinh", 
        thoiGian: "2 ngày 1 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "26/4/2024", 
        gia: "2.999.000đ", 
        giaTruocKhiGiam: "3.199.000đ" ,
        tongquan:"Vinh là thành phố nằm ở tỉnh Nghệ An, Việt Nam. Với vị trí địa lý quan trọng, Vinh là trung tâm kinh tế, chính trị và văn hóa của khu vực miền Trung. Thành phố nổi tiếng với những di tích lịch sử quan trọng như Di tích Hồ Chí Minh và Làng cổ Cửa Đông.\n Ngoài ra, Vinh cũng có các điểm đến du lịch hấp dẫn như Chợ Cửa Lò và khu du lịch biển Quỳnh Lưu. Vinh tự hào về văn hóa đậm đà và lòng hiếu khách của người dân nơi đây. Thành phố cũng là nơi có nền giáo dục phát triển, với nhiều trường đại học và cao đẳng.",

        hinhAnh:"../image/TourMienTrung/TpVinh/TpVinh1.jpg",
        hinhAnh2:"../image/TourMienTrung/TpVinh/TpVinh2.jpg",
        hot:"0" ,
        vungmien:"trung"
    },

    // tour miền nam

    {   maTour:11, 
        tenTour:"Hòn Bảy - Mũi Cá Mập - Côn Đảo", 
        thoiGian: "2 ngày 1 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "12/5/2024", 
        gia: "1.999.000đ", 
        giaTruocKhiGiam: "2.399.000đ" ,
        tongquan: "",

        hinhAnh:"../image/TourMienNam/ConDao/ConDao1.jpg",
        hinhAnh2:"../image/TourMienNam/ConDao/ConDao2.jpg",
        hot:"0" ,
        vungmien:"nam"
    },

    {   maTour:12, 
        tenTour:"Thác Đứng - Công viên The Destina - Bình Phước", 
        thoiGian: "3 ngày 2 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "25/4/2024", 
        gia: "3.199.000đ", 
        giaTruocKhiGiam: "3.799.000đ" ,
        hinhAnh:"../image/TourMienNam/BinhPhuoc/BinhPhuoc1.jpg",
        hinhAnh2:"../image/TourMienNam/BinhPhuoc/BinhPhuoc2.jpg",
        hot:"0" ,
        vungmien:"nam"
    },

    {   maTour:13, 
        tenTour:"Núi Bà Den - Tây Ninh", 
        thoiGian: "5 ngày 4 đêm", 
        phuongTien: "Xe lửa", 
        ngayKhoiHanh: "25/6/2024", 
        gia: "4.999.000đ", 
        giaTruocKhiGiam: "5.899.000đ" ,
        tongquan: "Hành trình khám phá Núi Bà Đen, Tây Ninh là một trải nghiệm tâm linh và văn hóa không thể bỏ qua khi bạn đặt chân đến miền Nam Việt Nam. Núi Bà Đen không chỉ là một ngọn núi cao và imposant, mà còn là một điểm linh thiêng quan trọng, thu hút nhiều du khách và phật tử đến thăm viếng và tìm hiểu về lịch sử và văn hóa tâm linh của địa phương.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và di chuyển đến Núi Bà Đen.
        - 09:30 - 11:30: Thăm quan các điểm linh thiêng trên đỉnh núi, bao gồm Chùa Bà Đen và các di tích lịch sử khác.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng gần Núi Bà Đen.
        - 13:30 - 15:30: Khám phá các hang động và khu rừng nhiệt đới xung quanh Núi Bà Đen.
        - 16:00 - 18:00: Thăm quan khuôn viên Chùa Tây Ninh, một trong những ngôi chùa lớn nhất và linh thiêng nhất của Việt Nam.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.</p> </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn.
        - 08:00 - 10:00: Tiếp tục thám hiểm Núi Bà Đen và các điểm tham quan lân cận.
        - 10:30 - 12:00: Trải nghiệm hoạt động văn hóa và tham quan các cửa hàng lưu niệm.
        - 12:30 - 13:30: Dùng cơm trưa và rời khỏi khu vực Núi Bà Đen.
        - 14:00: Trả khách về điểm hẹn hoặc sân bay. </p> </div> `,
        hinhAnh:"../image/TourMienNam/TayNinh/TayNinh1.jpg",
        hinhAnh2:"../image/TourMienNam/TayNinh/TayNinh2.jpg",
        hot:"0" ,
        vungmien:"nam"
    },

    {   maTour:14, 
        tenTour:"Tượng Chúa Kito - Bãi Sau - Vũng Tàu", 
        thoiGian: "3 ngày 2 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "21/5/2024", 
        gia: "4.499.000đ", 
        giaTruocKhiGiam: "4.899.000đ" ,
        tongquan:"- Cách trung tâm thành phố Hồ Chí Minh chỉ khoảng 3 tiếng lái xe, với đường bờ biển trải dài 20km. Vũng Tàu là một trong những điểm đến yêu thích của du khách phía Nam. Nằm nhô hẳn ra khỏi đất liền như một dải đất. Từ nơi đây, người ta có thể nhìn biển Đông cả khi trời mọc lẫn lúc hoàng hôn. Bên cạnh những giá trị cảnh quan thiên nhiên, Vũng Tàu còn là miền đất có truyền thống văn hóa lịch sử lâu đời.\n - Du lịch Vũng Tàu bạn sẽ có cảm giác bình yên, dễ chịu với những con đường rộng rãi, thoáng đãng. Dưới là biển xanh, trên là những ngọn núi to, núi nhỏ, cùng những ngôi chùa thanh tịnh… Tất cả tạo nên một Vũng Tàu đầy ma lực, một thành phố Vũng Tàu không chỉ hiền hòa bình dị mà còn vô vàn những danh lam thắng cảnh nổi tiếng.\n",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 07:00 - 08:00: Xuất phát từ Hồ Chí Minh đến Vũng Tàu.
        - 08:00 - 10:00: Check-in khách sạn và nghỉ ngơi.
        - 10:00 - 12:00: Thăm Bảo tàng Vũng Tàu.
        - 12:00 - 13:00: Ăn trưa tại nhà hàng địa phương.
        - 13:00 - 16:00: Tham quan Bãi Sau và tham gia các hoạt động biển.
        - 16:00 - 18:00: Mua sắm và thư giãn tại trung tâm thương mại.
        - 18:00 - 20:00: Dùng tối với hải sản tươi ngon.
        - 20:00 - 22:00: Tự do khám phá Vũng Tàu hoặc nghỉ ngơi.</p> </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 07:00 - 08:00: Ăn sáng tại khách sạn.
        - 08:00 - 10:00: Thăm tượng Chúa Ki-tô và thưởng cảnh từ núi Nhỏ
        - 10:00 - 12:00: Tham quan Công viên Cây Dừa và thưởng trà sữa hoặc cà phê ven biển.
        - 12:00 - 13:00: Ăn trưa tại nhà hàng địa phương.
        - 13:00 - 15:00: Tham quan và mua sắm quà lưu niệm.
        - 15:00 - 16:00: Trở về Hồ Chí Minh. </p> </div> `,
        hinhAnh:"../image/TourMienNam/VungTau/VungTau1.jpg",
        hinhAnh2:"../image/TourMienNam/VungTau/VungTau2.jpg",
        hot:"0" ,
        vungmien:"nam"
    },

    // tour miền bắc

    {   maTour:15, 
        tenTour:"Đèo Mã Pí Lèng - Thung Lũng Sủng Là - Hà Giang", 
        thoiGian: "6 ngày 5 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "2/7/2024", 
        gia: "7.499.000đ", 
        giaTruocKhiGiam: "7.899.000đ" ,
        hinhAnh:"../image/TourMienBac/HaGiang/HaGiang1.jpg",
        hinhAnh2:"../image/TourMienBac/HaGiang/HaGiang2.jpg",
        hot:"0" ,
        vungmien:"bac"
    },

    {   maTour:16, 
        tenTour:"Đảo Cát Bà - Bãi biển Đồ Sơn - Hải Phòng", 
        thoiGian: "4 ngày 3 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "13/5/2024", 
        gia: "4.299.000đ", 
        giaTruocKhiGiam: "5.199.000đ" ,
        hinhAnh:"../image/TourMienBac/HaiPhong/HaiPhong1.jpg",
        hinhAnh2:"../image/TourMienBac/HaiPhong/HaiPhong2.jpg",
        hot:"0" ,
        vungmien:"bac"
    },

    {   maTour:17, 
        tenTour:"Thung Nắng - Làng gốm Phù Lãng - Ninh Bình", 
        thoiGian: "6 ngày 5 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "19/5/2024", 
        gia: "8.299.000đ", 
        giaTruocKhiGiam: "9.199.000đ" ,
        hinhAnh:"../image/TourMienBac/NinhBinh/NinhBinh1.jpg",
        hinhAnh2:"../image/TourMienBac/NinhBinh/NinhBinh2.jpg",
        hot:"0" ,
        vungmien:"bac"
    },

    {   maTour:18, 
        tenTour:"Vịnh Hạ Long - Hải Phòng", 
        thoiGian: "4 ngày 3 đêm", 
        phuongTien: "Xe lửa", 
        ngayKhoiHanh: "22/5/2024", 
        gia: "6.299.000đ", 
        giaTruocKhiGiam: "6.699.000đ" ,
        hinhAnh:"../image/TourMienBac/QuangNinh/QuangNinh1.jpg",
        hinhAnh2:"../image/TourMienBac/QuangNinh/QuangNinh2.jpg",
        hot:"0" ,
        vungmien:"bac"
    },



  ]
  

function hienthiChiTiet(maTour){
let danhsach = dsTour.find(spTemp => spTemp.maTour == maTour);
localStorage.setItem("maTour", danhsach.maTour);
localStorage.setItem("tenTour", danhsach.tenTour);
localStorage.setItem("thoiGian", danhsach.thoiGian)
localStorage.setItem("phuongTien", danhsach.phuongTien);
localStorage.setItem("gia", danhsach.gia);
localStorage.setItem("diemxuatphat", danhsach.diemxuatphat);
localStorage.setItem("giaTruocKhiGiam", danhsach.giaTruocKhiGiam);
localStorage.setItem("hinhAnh", danhsach.hinhAnh);
localStorage.setItem("hinhAnh2", danhsach.hinhAnh2);
localStorage.setItem("hot", danhsach.hot);
localStorage.setItem("vungmien", danhsach.vungmien);
localStorage.setItem("lichTrinh", danhsach.lichTrinh);
localStorage.setItem("tongquan", danhsach.tongquan);

}
// 
$(document).ready(function(){
    function napSanpham(tour){
    let col = `
    <div class=" tour-item p-0 mx-2">
        <div class="card mb-4 w-100" >
            <img src="${tour.hinhAnh}" class="card-img-top img-fluid " >
            <div class="hinh2">
                 <img src="${tour.hinhAnh2}" class=" card-img-top img-fluid">
             </div>
            <div class="card-body">
                <h6 class=" text-blue card-title h5">${tour.tenTour}</h6>
                <a href="cttour.html" onclick="hienthiChiTiet(${tour.maTour})" class="stretched-link"></a>
                <p class="card-text mb-2">
                    <i class="fa-regular fa-clock me-1" style="width: 20px"></i>
                    Thời gian: 
                    ${tour.thoiGian} <!--Lấy giá trị thuộc tính của đối tượng trong list đối tượng --> 
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
              return col;
}

    function hienthiTatCaTour(){
        dsTour.forEach(tour => {
            let col = napSanpham(tour);
            $("#table0").append(col);
        });
        
    }

    function filterByHot() {
    let hotTours = dsTour.filter(tour => tour.hot === "1");
    hotTours.forEach(tour => {
        let col = napSanpham(tour);
        $("#table1").append(col);
    });
    }

    function filterByVungmien(vungmien, tableId) {
    let filteredTours = dsTour.filter(tour => tour.vungmien === vungmien);
    filteredTours.forEach(tour => {
        let col = napSanpham(tour);
        $(tableId).append(col);
    });
    }


    filterByHot();
    hienthiTatCaTour();
    filterByVungmien("bac", "#table2");
    filterByVungmien("nam", "#table3");
    filterByVungmien("trung", "#table4");
    

    function chongia() {
        let l_gia = $("input[name='gia1']:checked").prop("id");
        let dsGia = []
        if (l_gia === "thapcao") {
            dsGia =  dsTour.sort((a, b) => parseInt(a.gia) - parseInt(b.gia));
        } else if (l_gia === "caothap") {
            dsGia = dsTour.sort((a, b) => parseInt(b.gia) - parseInt(a.gia));
        }
        else {
            dsGia = dsTour;
        }
      
        $("#table0").empty();
      
        dsGia.forEach(tour => {
          let col = napSanpham(tour);
          $("#table0").append(col);
        });
      }
      
      $("input[name='gia1']").change(function(){
        chongia();
      });

    
     

    function chonKhuVuc() {
        let khuVuc = $("input[name='khuvuc']:checked").prop("id");
     
        let dsKV = [];
        if (khuVuc === "mb") {
           dsKV = dsTour.filter(tour => tour.vungmien === "bac");
        } else if (khuVuc === "mt") {
            dsKV = dsTour.filter(tour => tour.vungmien === "trung");
        }
        else if (khuVuc === "mn") {
           dsKV = dsTour.filter(tour => tour.vungmien === "nam");
        }
        else {
           dsKV = dsTour;
        }

        
        $("#table0").empty();
     
        
        dsKV.forEach(tour => {
           let col = napSanpham(tour);
           $("#table0").append(col);
        });
     }
     $("input[name='khuvuc']").change(function() {
        chonKhuVuc();
     });


     function chonThoiGian() {
        let arrthoigian = $("input[name='thgian']:checked").prop("id");
     
        let filteredTours = [];
        if (arrthoigian === "2n1d") {
           filteredTours = dsTour.filter(tour => tour.thoiGian === "2 ngày 1 đêm");
        } else if (arrthoigian === "3n2d") {
           filteredTours = dsTour.filter(tour => tour.thoiGian === "3 ngày 2 đêm");
        } else if (arrthoigian === "4n3d") {
           filteredTours = dsTour.filter(tour => tour.thoiGian === "4 ngày 3 đêm");
        } else if (arrthoigian === "5n4d") {
           filteredTours = dsTour.filter(tour => tour.thoiGian === "5 ngày 4 đêm");
        } else if (arrthoigian === "6n5d") {
           filteredTours = dsTour.filter(tour => tour.thoiGian === "6 ngày 5 đêm");
        } else {
           filteredTours = dsTour;
        }
     
        
        $("#table0").empty();
     
        
        filteredTours.forEach(tour => {
           let col = napSanpham(tour);
           $("#table0").append(col);
        });
     }
     
     $("input[name='thgian']").change(function() {
        chonThoiGian();
     });


     
        // Khởi tạo biến lưu trữ các lựa chọn
        let selectedGia = "tatca"; // Mặc định không chọn gì
        let selectedKhuVuc = "tatca"; // Mặc định không chọn gì
        let selectedThoiGian = "tatca"; // Mặc định không chọn gì
    
      
        $("input[name='gia1']").change(function(){
            selectedGia = $(this).prop("id");
            filterTours(); 
        });
    
       
        $("input[name='khuvuc']").change(function(){
            selectedKhuVuc = $(this).prop("id");
            filterTours(); 
        });
    
      
        $("input[name='thgian']").change(function(){
            selectedThoiGian = $(this).prop("id"); 
            filterTours(); 
        });
    
        function filterTours() {
            let filteredTours = dsTour.filter(tour => {
                let giaPass = (selectedGia === "thapcao" && parseInt(tour.gia) <= 500000) || (selectedGia === "caothap" && parseInt(tour.gia) > 500000) || selectedGia === "tatca";
                let khuVucPass = (selectedKhuVuc === "mb" && tour.vungmien === "bac") || (selectedKhuVuc === "mt" && tour.vungmien === "trung") || (selectedKhuVuc === "mn" && tour.vungmien === "nam") || selectedKhuVuc === "tatca";
                let thoiGianPass = (selectedThoiGian === "2n1d" && tour.thoiGian === "2 ngày 1 đêm") || (selectedThoiGian === "3n2d" && tour.thoiGian === "3 ngày 2 đêm") || (selectedThoiGian === "4n3d" && tour.thoiGian === "4 ngày 3 đêm") || (selectedThoiGian === "5n4d" && tour.thoiGian === "5 ngày 4 đêm") || (selectedThoiGian === "6n5d" && tour.thoiGian === "6 ngày 5 đêm") || selectedThoiGian === "tatca";
                return giaPass && khuVucPass && thoiGianPass;
            });
    
            $("#table0").empty();

            filteredTours.forEach(tour => {
                        let col = napSanpham(tour);
                        $("#table0").append(col);
                    });
        }
    
    

    
    

})

            
          