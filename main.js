let text = document.querySelector('.text')

let dollar = 9433.34
let yevro = 10354.03

let alisher = prompt("Alisher, Sizda qancha pul bor?")


if(alisher >= dollar*500 + dollar*250 + yevro*120){
    text.innerHTML = "Oq yo'l, Alisher!"
    text.setAttribute('style' , 'color: #198754')
}
else{
    text.innerHTML = "Alisher, ozgina sabr qilish kerak bo'lar ekan."
    text.setAttribute('style' , 'color: #01a098')
}
