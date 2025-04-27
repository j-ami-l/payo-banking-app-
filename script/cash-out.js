document.getElementById("btn-cash-out")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const cashoutAmount = getInputValueById("cash-out-amount");
        const acount = getInputValueById("input-number")
        const total = getInnerTextById("total-amount")

        const pin = getInputValueById("input-pin")

        if(cashoutAmount > total) {
            alert("Poor fellow you dont have that much money")
            return;
        }

        if (pin === 1234)
            if (cashoutAmount <= total) {
                const newamount = total - cashoutAmount;

                UpdateInnerText("total-amount", newamount);

                const s = new Date().toLocaleString();

                const container = getElement("transactiion-container")

                // const p = document.createElement("p");
                // p.innerText =
                //     `
                //     Credited ${cashoutAmount} TK from ${acount} account at ${s}
                //     `


                const div = document.createElement("div")
                div.classList.add("bg-red-100","border", "rounded-md", "border-blue-400" , "m-4" , "p-4")
                div.innerHTML = `
                <h1 class= "text-center text-2xl font-bold">Credited MONEY</h1>
                <h3>Amount: ${cashoutAmount}</h3>
                <p>Account Number: ${acount}</p>
                <p>Time: ${s}</p>
                `
                container.appendChild(div);
            }
            else alert("Insufficient Balance")
        else alert("Invalid Pin")
    })