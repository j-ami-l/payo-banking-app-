document.getElementById('btn-add')
    .addEventListener('click', function(event){
        event.preventDefault();
        const amount = document.getElementById('input-amount').value 
        const convertedAmount = parseFloat(amount);

        const total = document.getElementById('total-amount').innerText
        const convertTotal = parseFloat(total);

        const newamount = convertedAmount + convertTotal;
        
        document.getElementById('total-amount').innerText = newamount;
        
    })