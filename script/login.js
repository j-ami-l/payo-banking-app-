document.getElementById('btn-login')
    .addEventListener('click', function(event){
        // to stop reload
        event.preventDefault();

        const AcountNumber = document.getElementById('input-number').value 
        const pin = document.getElementById('input-pin').value 

        if(AcountNumber.length === 11){
            if(AcountNumber == '01818954350'){
                if(pin === '1234'){
                    window.location.href="./main.html";
                }
                else alert('Invalid Pin')
            }
        }
        else {
            alert('Invalid Acount Number')
        }

    })