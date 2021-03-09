function changeColor(a) {
    if (a.value =="") {
        a.style.background="#ffd0d0"
    } else {
        a.style.background="#ffffff"
    }
}
function sukses() {
    newWindow = window.open("","Cetak");
            newWindow.document.write("<div id='sukses'></div>");
            var Email = document.getElementById("email").value;
            var Telepon = document.getElementById("phone").value; 
            newWindow.document.getElementById("sukses").innerHTML="Terimakasih Telah Mengisi Data, Untuk Konfirmasi Kami akan menghubungi melalui Email atau Whatsapp" +
            "<br>"  + "Email anda Adalah:"  + Email + "<br>" + "No Telepon Anda adalah:" + Telepon;

        }
function berhasil() {
    alert("Terimakasih atas Saran dan Testimoninya:)")
}