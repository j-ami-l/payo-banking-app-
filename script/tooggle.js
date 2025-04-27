display("cash-out-section","none");
display("add-money-section","none");

getElement("add-money").addEventListener("click", function(){
    display("transaction-section", "none")
    display("cash-out-section","none");
    display("add-money-section","block");
})



getElement("cash-out").addEventListener("click", function(){
    display("transaction-section", "none")
    display("cash-out-section","block");
    display("add-money-section","none");
})

getElement("transaction").addEventListener("click" , function(){
    display("transaction-section", "block")
    display("cash-out-section","none");
    display("add-money-section","none");
})