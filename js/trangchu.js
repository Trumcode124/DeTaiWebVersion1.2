const btnForgetPassword = document.querySelector("[btn-forget-password]");
const loginForm = document.querySelector("[login-form]");
const registerForm = document.querySelector("[register-form]");
const formResetPassword = document.querySelector("[form-reset-password]");
const loginHeader = document.querySelector("[login-header]");
const confirmBtn = document.querySelector("[confirm-btn]");
const btnClose = document.querySelectorAll(".btn-close");

// biến lưu trữ dữ liệu
var user_storage = ""
var password_storage = ""
var email_storage = ""
 
// thao tác chuyển qua tab quên mật khẩu 
function forgetPassword() {
    // Bắt sự kiện bấm vào nút quên mật khẩu
    loginForm.classList.toggle("active");
    loginHeader.classList.toggle("d-none"); // ẩn thanh đăng nhập / đăng ký

    confirmBtn.onclick = function(e) {
        e.preventDefault(); // ngăn chặn sự kiện mặc định của phần tử
        if (checkPasswordForm()) 
            returnLoginForm()
    };
}

// thao tác quay về form đăng nhập từ form quên mật khẩu
function returnLoginForm() { 
    loginForm.classList.add("active");
    formResetPassword.classList.toggle("active");
    loginHeader.classList.remove("d-none")
    btnForgetPassword.classList.remove("active");
    return true;
}

// thao tác quay về form đăng nhập từ form đăng ký
document.getElementById("registerButton").addEventListener("click", function(event) {
    event.preventDefault();

    if (checkRegisterForm()) {
        
        registerForm.classList.toggle("active");
       
        // thay đổi modal header
        const navItemLink = document.querySelector(".nav-item-link.active");
        const navItemLinkActive = document.querySelector(".nav-item-link-active");

        navItemLink.classList.remove("active");
        navItemLinkActive.classList.add("active");
        // registerForm.classList.remove("active");
        loginForm.classList.toggle("active")

    }

});

// thao tác trở về form đăng nhập sau khi bấm nút x
btnClose.forEach(function(btn) {
    btn.onclick = function() {
        // Lấy các form đăng nhập / đăng ký / quên mk 
        const loginForm_2 = document.querySelector(".loginForm");
        const registerForm_2 = document.querySelector(".registerForm");
        const formResetPassword_2 = document.querySelector(".formResetPassword");
    
        loginForm_2.reset();
        registerForm_2.reset();
        formResetPassword_2.reset();
    
        // kiểm tra nếu có class ở trong phần tử đó
        if (registerForm.classList.contains("active")) {
            const navItemLink = document.querySelector(".nav-item-link.active");
            const navItemLinkActive = document.querySelector(".nav-item-link-active");
    
            navItemLink.classList.remove("active");
            navItemLinkActive.classList.add("active");
            registerForm.classList.remove("active");
            loginForm.classList.add("active");
        }

        if (formResetPassword.classList.contains("active")) {
            loginHeader.classList.toggle("d-none");
            formResetPassword.classList.remove("active");
            loginForm.classList.add("active");

        }
    };
})

// lấy tên user sau khi đăng nhập 
document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của button (chạy submit form)
        
    if (checkLoginForm()) {
        var loginText = document.getElementById("loginText");
        var userInput = document.getElementById("userInput").value;
        loginText.innerText = userInput; // Cập nhật nội dung của "loginText" bằng giá trị nhập vào
        $('#modalContent').modal('hide'); // Ẩn modal sau khi đăng nhập thành công
    }

});

// thao tác không cho bật form đăng nhập sau khi đăng nhập thành công
$('#modalContent').on('show.bs.modal', function (e) {
    if (user_storage !== "") {
        e.preventDefault(); 
    }
});


//------------- REGEX -------------

// kiểm tra regex
function checkInputInfo(value, regex, errInput, message) {
    if (value == "" || value == null) {
        errInput.innerHTML = "Vui lòng nhập thông tin"
        return false;
    }

    if (!regex.test(value)) {
        errInput.innerHTML = message;
        return false;
    } else {
        errInput.innerHTML = "";
    }

    return true;
}

// check loginForm
function checkLoginForm() {
    var userInput  = document.getElementById("userInput").value;
    var errUserInput = document.getElementById("errUserInput");

    if (userInput.length == 0) {
        errUserInput.innerHTML = "Vui lòng  nhập thông tin"
        return false;
    }

    if (userInput.length != 0) {
        if (/\d/.test(userInput)) {
            errUserInput.innerHTML = "Tên đăng nhập không được chứa ký tự số"
            return false;
        }
        else if (/[!@#\$%\^&\*\(\),;\.\?":\{\}\|<>\.+-]/.test(userInput)) {
            errUserInput.innerHTML = "Tên đăng nhập không được chứa ký tự dặc biệt"  
            return false;
        }
        else if (!/[A-Z][a-z]*$/.test(userInput)) {
            errUserInput.innerHTML = "Ký tự đầu của tên phải viết hoa"
            return false;
        }
        else    
            errUserInput.innerHTML = ""
    }

    var passwordInput = document.getElementById("passwordInput").value;
    var errPasswordInput = document.getElementById("errPasswordInput");

    if (passwordInput.length == 0) {
        errPasswordInput.innerHTML = "Vui lòng nhập thông tin"
        return false;
    }
    else if (passwordInput.length < 8) {
        errPasswordInput.innerHTML = "Mật khẩu phải từ 8 ký tự"
        return false;
    }
    else if (!/\d/.test(passwordInput)) {
        errPasswordInput.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự số"
        return false;
    }
    else if (!/\W/.test(passwordInput)) {
        errPasswordInput.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự đặc biệt"
        return false;
    }
    else if (!/[A-Z]/.test(passwordInput)) {
        errPasswordInput.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự là chữ in hoa"
        return false;
    }
    else 
        errPasswordInput.innerHTML = ""

    if (user_storage != "" && user_storage !== userInput) {
        errUserInput.innerHTML = "Người dùng không tồn tại";
        return false;
    } else {
        errUserInput.innerHTML = ""
    }

    if (passwordInput !== password_storage) {
        errPasswordInput.innerHTML = "Mật khẩu không đúng";
        return false;
    } else {
        errPasswordInput.innerHTML = ""
    }

    return true;
}

// check RegisterForm
function checkRegisterForm() {
    // tên đăng nhập
    var user = document.getElementById("user").value;
    var errUser = document.getElementById("errUser");

    if (user.length == 0) {
        errUser.innerHTML = "Vui lòng  nhập thông tin"
        return false;
    }

    if (user.length != 0) {
        if (/\d/.test(user)) {
            errUser.innerHTML = "Tên đăng nhập không được chứa ký tự số"
            return false;
        }
        else if (/[!@#\$%\^&\*\(\),;\.\?":\{\}\|<>\.+-]/.test(user)) {
            errUser.innerHTML = "Tên đăng nhập không được chứa ký tự dặc biệt"  
            return false;
        }
        else if (!/[A-Z][a-z]*$/.test(user)) {
            errUser.innerHTML = "Ký tự đầu của tên phải viết hoa"
            return false;
        }
        else    
            errUser.innerHTML = ""
    }

    
    // số điện thoại
    var tel = document.getElementById("tel").value;
    var telRegex = /^(096|097|098|086|090|093|089)\d{7}$/;
    var errTel = document.getElementById("errTel");

    if (tel.length == 0) {
        errTel.innerHTML = "Vui lòng nhập thông tin"
        return false;
    }
    else if (tel.length < 10 || tel.length > 10) {
        errTel.innerHTML = "Số điện thoại phải 10 ký tự số"
        return false;
    }
    else if (!telRegex.test(tel)) {
        errTel.innerHTML = "Số điện thoại phải 10 số bao gồm các số đầu: 096, 097, 098, 086, 090, 093, 089";
        return false;
    }
    else
        errTel.innerHTML = ""

    // email
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-z][a-zA-Z0-9]*@gmail.com$/;
    var errEmail = document.getElementById("errEmail");

    if (!checkInputInfo(email, emailRegex, errEmail, "Email phai bắt đầu bằng chữ cái, không bao gồm kí tự đặc biệt và kết thức gằng @gmail.com")) {
        return false;
    } else {
        email_storage = email
    }

    // mật khẩu
    var password = document.getElementById("password").value;
    var errPassword = document.getElementById("errPassword");

    if (password.length == 0) {
        errPassword.innerHTML = "Vui lòng nhập thông tin"
        return false;
    }
    else if (password.length < 8) {
        errPassword.innerHTML = "Mật khẩu phải từ 8 ký tự"
        return false;
    }
    else if (!/\d/.test(password)) {
        errPassword.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự số"
        return false;
    }
    else if (!/\W/.test(password)) {
        errPassword.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự đặc biệt"
        return false;
    }
    else if (!/[A-Z]/.test(password)) {
        errPassword.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự là chữ in hoa"
        return false;
    }
    else 
        errPassword.innerHTML = ""

    // nhập lại mật khẩu
    var confirm_password = document.getElementById("confirm-password").value;
    var errConfirmPassword = document.getElementById("errConfirmPassword");

    if (confirm_password == "" || confirm_password == null) {
        errConfirmPassword.innerHTML= "Vui lòng nhập thông tin"
        return false;
    }

    if (confirm_password !== password) {
        errConfirmPassword.innerHTML="Mật khẩu không trùng";
        return false;
    } else {
        errConfirmPassword.innerHTML="";
    }

    return true;
}

// check checkPasswordForm 
function checkPasswordForm() {

    // email
    var re_email = document.getElementById("re-email").value;
    var re_emailRegex = /^[a-zA-z][a-zA-Z0-9]*@gmail.com$/;
    var errRe_Email = document.getElementById("errRe-Email");
    
    if (!checkInputInfo(re_email, re_emailRegex, errRe_Email, "Email phai bắt đầu bằng chữ cái, không bao gồm kí tự đặc biệt và kết thức gằng @gmail.com")) 
        return false;

    // mật khẩu
    var reset_password = document.getElementById("reset-password").value;
    var errResetPassword = document.getElementById("errResetPassword");

    if (reset_password.length == 0) {
        errResetPassword.innerHTML = "Vui lòng nhập thông tin"
        return false;
    }
    else if (reset_password.length < 8) {
        errResetPassword.innerHTML = "Mật khẩu phải từ 8 ký tự"
        return false;
    }
    else if (!/\d/.test(reset_password)) {
        errResetPassword.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự số"
        return false;
    }
    else if (!/\W/.test(reset_password)) {
        errResetPassword.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự đặc biệt"
        return false;
    }
    else if (!/[A-Z]/.test(reset_password)) {
        errResetPassword.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự là chữ in hoa"
        return false;
    }
    else 
        errResetPassword.innerHTML = ""

    // nhập lại mật khẩu
    var errResetConfirmPassword = document.getElementById("errResetConfirmPassword");
    var reset_confirm_password = document.getElementById("reset-confirm-password").value;
    
    if (errResetConfirmPassword == "" || errResetConfirmPassword == null) {
        reset_confirm_password.innerHTML= "Vui lòng nhập thông tin"
        return false;
    }

    if (reset_confirm_password !== (reset_password)) {
       errResetConfirmPassword.innerHTML="Mật khẩu không trùng";
       return false;
    } else {
        errResetConfirmPassword.innerHTML="";
    }

    if (email_storage != "" && email_storage !== re_email) {
        errRe_Email.innerHTML = "Email không tồn tại"
        return false
    }
 
     return true;
}

