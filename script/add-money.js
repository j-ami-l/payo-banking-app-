document.getElementById('btn-add')
    .addEventListener('click', function(event){
        event.preventDefault();
        const amount = getInputValueById("input-amount")
        const acount = getInputValueById("input-number")
        const total = getInnerTextById("total-amount")
        const pin = getInputValueById("input-pin");
        if(pin === 1234){
        const newamount = amount + total;
        
        UpdateInnerText("total-amount", newamount);
        const s = new Date().toLocaleString();

        const container = getElement("transactiion-container")

        const p = document.createElement("p");
        p.innerText = 
        `
        Added ${amount} TK from ${acount} account at ${s}
        `
        

        container.appendChild(p);

        
        
    
    
    
    }
        else alert("Invalid Pin")
        
    })

   