const ui=new UI();
const increment1=document.querySelector('.increment1');
const decrement1=document.querySelector('.decrement1');
const increment2=document.querySelector('.increment2');
const decrement2=document.querySelector('.decrement2');
const input1=document.querySelector('.input1');
const input2=document.querySelector('.input2');
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
discount.addEventListener('click',(e) => {
    ui.couponCode();
    e.preventDefault();
})