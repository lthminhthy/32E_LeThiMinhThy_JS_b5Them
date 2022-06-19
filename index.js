function tinhTienLuong() {
    var name = document.getElementById("Name3").value,
        salary = document.getElementById("salary").value - 4e6 - 1.6e6 * document.getElementById("humanOfMe").value,
        totalMoney = 0;
    if (salary > 0 && salary <= 6e7) {
        totalMoney = (5 / 100) * salary
    } else if (salary > 6e7 && salary <= 12e7) {
        totalMoney = (10 / 100) * salary
    } else if (salary > 12e7 && salary <= 21e7) {
        totalMoney = (15 / 100) * salary
    } else if (salary > 21e7 && salary <= 384e6) {
        totalMoney = (20 / 100) * salary
    } else if (salary > 384e6 && salary <= 624e6) {
        totalMoney = (25 / 100) * salary
    } else if (salary > 624e6 && salary <= 96e7) {
        totalMoney = (30 / 100) * salary
    } else if (salary > 96e7) {
        totalMoney = (35 / 100) * salary
    }
    totalMoney = new Intl.NumberFormat("vn-VN").format(totalMoney);
    document.getElementById("ketquaB3").innerHTML = " Tiền thuế thu nhập cá nhân của " + name + " là: " + totalMoney + " VND"
}
document.getElementById("hamB3").onclick = tinhTienLuong


function tinhTienCap() {
    var customer = document.getElementById("loaiKH").value
    var code = document.getElementById("code").value
    var chanel = document.getElementById("chanel").value
    var connect = document.getElementById("connect").value
    var totalMoney = 0;
    if (customer == "1") {
        totalMoney = tinhTong(15, 75, 50, chanel, connect, 5)
    } else if (customer == "2") {
        totalMoney = tinhTong(4.5, 20.5, 7.5, chanel, 0, 0)
    }
    totalMoney = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalMoney);
    document.getElementById("ketquaB4").innerHTML ="Tiền cáp của khách hàng "+code+" là : " + totalMoney
}
function tinhTong(e, n, t, u, c, l) { var m = e + n + t * u; return c > 10 && (m += (c - 10) * l), m }
document.getElementById("hamB4").onclick = tinhTienCap;