var proID = ["1345678954812", "00367546"];
var proName = ["iPhone 6S Plus 32Gb", "Macbook Air 13 128Gb MQD32SA/A"];
var proPrice= [13999000, 23999000];
var x;
var price, name;
var err = document.getElementsByName("error");
var check = [false, false]; 

function isIn(a) {
    for (var i = 0; i< 2; i++) {
        if (proID[i] == a) {
            price = proPrice[i];
            name = proName[i];
            return true;
        }
        else {
            price = 0;
            name = "";
        }
    }
    return false;
}

function checkProductID() {
    x = document.getElementById("msp").value.trim();
    if(isIn(x) == false) {
        err[0].innerHTML = "&times; Mã sản phẩm không đúng";
        check[0] = false;
    }
    else {
        check[0] = true;
        err[0].innerHTML = "Tên sản phẩm: " + name + "<br/>" + "Giá bán: " + price + " đ";
    }
}

function inputQuality() {
    x = document.getElementById("sl").value.trim();
    if (isNaN(x) || x == "") {
        err[1].innerHTML = "&times; Số lượng phải là số";
        err[2].innerHTML = "0 đ";
        check[1] = false;
    }
    else {
        var temp = parseInt(x) * price;
        err[1].innerHTML = "";
        err[2].innerHTML = temp + " đ";
        check[1] = true;
    }
}

function myFunction() {
    x = document.getElementById("name").value.trim();
    if (x == ""){
        err[3].innerHTML = "&times; Tên không được để trống"
        return;
    }
    err[3].innerHTML = "";
    x = document.getElementById("sdt").value.trim();
    if (x=="" || isNaN(x)) {
        err[4].innerHTML = "&times; Hãy điền đúng số điện thoại";
        return;
    }
    err[4].innerHTML = "";

    x = document.getElementById("email").value.trim();
    if (x == "" || !x.includes("@")) {
        err[5].innerHTML = "&times; Hãy nhập E-mail hợp lệ";
        return; 
    }
    err[5].innerHTML = "";

    x = document.getElementById("add").value.trim();
    if ( x == ""){
        err[6].innerHTML = "&times; Địa chỉ không được để trống";
        return; 
    }
    err[6].innerHTML = "";

    x = document.getElementsByName("checkbox")[0];

    if (check[0] == false || check[1] == false || !x.checked) {
        alert("Hãy xem lại thông tin đã điền");
        return;
    }

    alert("Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ sớm liên hệ với bạn!");
}


// Feedback JS

function feedback() {
    x = document.getElementById("hvt").value.trim();
    if (x == "") {
        err[0].innerHTML = "&times; Tên không được để trống";
        return;
    }
    err[0].innerHTML = "";

    x = document.getElementById("sdt2").value.trim();
    if (x=="" || isNaN(x)) {
        err[1].innerHTML = "&times; Hãy điền đúng số điện thoại";
        return;
    }
    err[1].innerHTML = "";

    x = document.getElementById("email2").value.trim();
    if (x == "" || !x.includes("@")) {
        err[2].innerHTML = "&times; Hãy nhập E-mail hợp lệ";
        return; 
    }
    err[2].innerHTML = "";

    x = document.getElementById("add2").value.trim();
    if ( x == ""){
        err[3].innerHTML = "&times; Địa chỉ không được để trống";
        return; 
    }
    err[3].innerHTML = "";

    x = document.getElementById("feedback").value.trim();
    if ( x == ""){
        err[4].innerHTML = "&times; Bạn hãy cho chúng tôi biết ý kiến của bạn";
        return; 
    }
    err[4].innerHTML = "";

    alert("Cảm ơn bạn đã phản hồi ý kiến. Chúng tôi xin tiếp nhận ý kiến của bạn.");
}