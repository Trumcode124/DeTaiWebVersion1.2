$(document).ready(function () {
    $("#phanHoi").click(function(){
        var fullName = $("#hoTen").val();
        var email = $("#email").val();
        var noidung = $("#noiDung").val();

        Email.send({
            To: 'cheaptravel59@gmail.com',
            From: email,
            Subject: 'Phản hồi từ ' + fullName,
            Body: noidung
        }).then(function(message) {
            alert(message);
        });
    })
});