let screen = document.getElementById("screen");

function click_button(value){
    screen.value += value;
}
function clear_screen() {
    screen.value = "";
}
function  EqualSign_to_Calculate(){
    try{
        screen.value = eval(screen.value);
    }catch{
        screen.value = "Error";
    }
}