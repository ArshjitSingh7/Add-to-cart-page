class UI {
    constructor()
    {
        this.input1=document.querySelector('.input1');
        this.input2=document.querySelector('.input2');
        this.shoePrice=document.querySelector('.shoe-price');
        this.watchPrice=document.querySelector('.watch-price');
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
        var total=parseInt(input1.value)*parseInt(this.shoePrice.innerText) + parseInt(input2.value)*parseInt(this.watchPrice.innerText);
        this.amount.innerText=total;
        this.totalAmount.innerText=total+10;
    }
    couponCode()
    {
        if(this.coupon.value === 'Arsh1234')
        {
            if(this.totalAmount.innerText !=='0')
            {
                this.totalAmount.innerText=parseInt(this.totalAmount.innerText)-20;
                this.feedback.className='alert alert-success mt-2'
                this.feedback.innerText='Coupon code applied'
                
            }
            else
            {
                this.feedback.className='alert alert-danger mt-2';
                this.feedback.innerText='Wrong coupon code';
                
            }
        }
        else
            {
                this.feedback.className='alert alert-danger mt-2';
                this.feedback.innerText='Wrong coupon code';
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
    clearAlert()
    {
        document.querySelector('.alert').remove();
    }
    
}