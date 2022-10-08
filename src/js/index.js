import { quotes } from './quotes';

const main = document.querySelector('#quotemaster > h1');
const playBtn = document.querySelector('#playBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const showQuote = document.querySelector("#quote");
let counter = 0;


playBtn.addEventListener("click", function (evt){
    const inter = setInterval(()=>{
        console.log(counter)
        counter++
        counter>=3 ? counter=0:""
        showQuote.innerText = quotes[counter]
    },3000)
    pauseBtn.addEventListener("click", function (evt){
        clearInterval(inter)
    })
})



