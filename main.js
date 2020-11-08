const ui=new UI();
const increment1=document.querySelector('.increment1');
const decrement1=document.querySelector('.decrement1');
const increment2=document.querySelector('.increment2');
const decrement2=document.querySelector('.decrement2');
const increment3=document.querySelector('.increment3');
const decrement3=document.querySelector('.decrement3');
const increment4=document.querySelector('.increment4');
const decrement4=document.querySelector('.decrement4');
const increment5=document.querySelector('.increment5');
const decrement5=document.querySelector('.decrement5');
const increment6=document.querySelector('.increment6');
const decrement6=document.querySelector('.decrement6');
const input1=document.querySelector('.input1');
const input2=document.querySelector('.input2');
const input3=document.querySelector('.input3');
const input4=document.querySelector('.input4');
const input5=document.querySelector('.input5');
const input6=document.querySelector('.input6');
const discount=document.querySelector('.discount');
increment1.addEventListener('click',(e) => {
    ui.add(input1);
    e.preventDefault();
})
decrement1.addEventListener('click',(e) => {
    ui.subtract(input1);
    e.preventDefault();
})
increment2.addEventListener('click',(e) => {
    ui.add(input2);
    e.preventDefault();
})
decrement2.addEventListener('click',(e) => {
    ui.subtract(input2);
    e.preventDefault();
})
increment3.addEventListener('click',(e) => {
    ui.add(input3);
    e.preventDefault();
})
decrement3.addEventListener('click',(e) => {
    ui.subtract(input3);
    e.preventDefault();
})
increment4.addEventListener('click',(e) => {
    ui.add(input4);
    e.preventDefault();
})
decrement4.addEventListener('click',(e) => {
    ui.subtract(input4);
    e.preventDefault();
})
increment5.addEventListener('click',(e) => {
    ui.add(input5);
    e.preventDefault();
})
decrement5.addEventListener('click',(e) => {
    ui.subtract(input5);
    e.preventDefault();
})
increment6.addEventListener('click',(e) => {
    ui.add(input6);
    e.preventDefault();
})
decrement6.addEventListener('click',(e) => {
    ui.subtract(input6);
    e.preventDefault();
})
discount.addEventListener('click',(e) => {
    ui.couponCode();
    e.preventDefault();
})
