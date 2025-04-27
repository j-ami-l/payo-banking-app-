document.getElementById('btn-add')
    .addEventListener('click', function(event){
        event.preventDefault();
        const amount = document.getElementById('input-amount').value 
        const convertedAmount = parseFloat(amount);

        const total = document.getElementById('total-amount').innerText
        const convertTotal = parseFloat(total);

        const pin = document.getElementById('input-pin').value
        
        if(parseInt(pin) === 1234){
        const newamount = convertedAmount + convertTotal;
        
        document.getElementById('total-amount').innerText = newamount;}
        else alert("Invalid Pin")
        
    })