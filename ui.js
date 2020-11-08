class UI {
    constructor()
    {
        this.input1=document.querySelector('.input1');
        this.input2=document.querySelector('.input2');
        this.input3=document.querySelector('.input3');
        this.input4=document.querySelector('.input4');
        this.input5=document.querySelector('.input5');
        this.input6=document.querySelector('.input6');
        this.shoePrice=document.querySelector('.shoe-price');
        this.watchPrice=document.querySelector('.watch-price');
        this.scooterPrice=document.querySelector('.scooter-price');
        this.braceletPrice=document.querySelector('.bracelet-price');
        this.sunglassPrice=document.querySelector('.sunglass-price');
        this.airpodsPrice=document.querySelector('.airpods-price');
        this.amount=document.querySelector('.amount');
        this.totalAmount=document.querySelector('.total-amount');
        this.coupon=document.querySelector('.coupon');
        this.feedback=document.querySelector('.feedback');
    }

    add(input)
    {
        if(input.value<=4)
        {
            input.value=parseInt(input.value) + 1;
            this.changeAmount();
        }
        else{
            this.showAlert('Maximum value can be 5 only','alert alert-danger');
        }
    }
    subtract(input)
    {
        if(input.value>0)
        {
            input.value=parseInt(input.value) - 1;
            this.changeAmount();
        }
        else{
            this.showAlert('value cannot be less than 0','alert alert-danger w-100');
        }
    }
    changeAmount()
    {
        var total=parseInt(input1.value)*parseInt(this.shoePrice.innerText) + parseInt(input2.value)*parseInt(this.watchPrice.innerText) + parseInt(input3.value)*parseInt(this.scooterPrice.innerText) + parseInt(input4.value)*parseInt(this.braceletPrice.innerText) + parseInt(input5.value)*parseInt(this.sunglassPrice.innerText) + parseInt(input6.value)*parseInt(this.airpodsPrice.innerText);
        if(total === 0)
        {
            this.amount.innerText=total;
            this.totalAmount.innerText=total;
        }
        else{
            this.amount.innerText=total;
            this.totalAmount.innerText=total+10;
        }

    }
    couponCode()
    {
        if(this.totalAmount.innerText ==='0')
        {
            this.couponAlert('Please select an item','alert alert-danger');
        }
        else if(this.coupon.value === 'Arsh1234' )
        {
            this.totalAmount.innerText=parseInt(this.totalAmount.innerText)-20;
            this.couponAlert('Coupon Applied','alert alert-success');
        }
        else
        {
            this.couponAlert('Wrong coupon code','alert alert-danger');
        }
    }
    showAlert(msg,classname)
    {
        if(document.querySelector('.alert'))
        {
            this.clearAlert();
        }
        const parent=document.querySelector('.pop-parent');
        const child=document.querySelector('.pop-child');
        const div=document.createElement('div');
        div.className=classname;
        div.appendChild(document.createTextNode(msg));
        parent.insertBefore(div,child);
        setTimeout(function()
        {
            document.querySelector('.alert').remove();
        },2000);
    }
    couponAlert(msg,classname)
    {
        const parent=document.querySelector('.coupon-parent');
        const child=document.querySelector('.coupon-child');
        const div=document.createElement('div');
        div.className=classname;
        div.appendChild(document.createTextNode(msg));
        parent.insertBefore(div,child);
        setTimeout(function()
        {
            document.querySelector('.alert').remove();
        },2000);
    }
    clearAlert()
    {
        document.querySelector('.alert').remove();
    }
    
}
