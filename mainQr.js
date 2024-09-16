let main_box = document.getElementById("main_box");
let input = document.getElementById("input1");
let image_box = document.getElementById("image_box");
let image_QR = document.getElementById("image_QR"); 
let input_Value = input.value;
function generateQR(){
    if(input.value == ""){
        input.classList.add('error');
        setTimeout(() => {
             input.classList.remove('error');
        }, 1000);
    }else{
        image_QR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    }
   

}