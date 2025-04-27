document.getElementById("btn-cash-out")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const cashoutAmount = getInputValueById("cash-out-amount");
        const acount = getInputValueById("input-number")
        const total = getInnerTextById("total-amount")

        const pin = getInputValueById("input-pin")

        if (pin === 1234)
            if (cashoutAmount <= total) {
                const newamount = total - cashoutAmount;

                UpdateInnerText("total-amount", newamount);

                const s = new Date().toLocaleString();

                const container = getElement("transactiion-container")

                const p = document.createElement("p");
                p.innerText =
                    `
                    Credited ${cashoutAmount} TK from ${acount} account at ${s}
                    `


                container.appendChild(p);
            }
            else alert("Insufficient Balance")
        else alert("Invalid Pin")
    })