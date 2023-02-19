let text = document.getElementById("text")
let copy = document.getElementById("copy")
let rd1 = document.getElementById("rd1")
let rd2 = document.getElementById("rd2")
let rd3 = document.getElementById("rd3")
let rd4 = document.getElementById("rd4")
let btn = document.getElementById("btn")
class Password {
    constructor() {

    }
    funny() {
        let a = ["Invalid", "Password", "12345678", "Incorrect", "FunkyPass"]
        let math = Math.floor(Math.random() * 5)
        text.value = a[math]
    }
    medium() {
        let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

        for (let i = 0; i <= 7; i++) {
            let math = Math.floor(Math.random() * 27)
            text.value += a[math]
        }

    }
    strong() {
        let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        let c = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        for (let i = 0; i <= 7; i++) {
            let math = Math.floor(Math.random() * 27)
            let num = Math.floor(Math.random() * 10)
            if (i < 5) {
                text.value += a[math]
            }
            else {
                text.value += c[num]
            }
        }
    }
    very_strong() {
        let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        let b = ["!", "@", "#", "$", "&", "*"]
        let c = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        for (let i = 0; i <= 7; i++) {
            let math = Math.floor(Math.random() * 27)
            let num = Math.floor(Math.random() * 10)
            let sym = Math.floor(Math.random() * 6)
            if (i < 4) {
                text.value += a[math]
            }
            else if(i == 4){
                text.value += b[sym]
            }
            else {
                text.value += c[num]
            }
        }
    }
}

btn.addEventListener('click', function () {
    text.value = ""
    if (rd1.checked == true) {
        let pass = new Password()
        pass.funny()
    }
    else if (rd2.checked == true) {
        let pass = new Password()
        pass.medium()
    }
    else if (rd3.checked == true) {
        let pass = new Password()
        pass.strong()
    }
    else if (rd4.checked == true) {
        let pass = new Password()
        pass.very_strong()
    }
})

copy.addEventListener('click',function(){
    text.select()
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
})