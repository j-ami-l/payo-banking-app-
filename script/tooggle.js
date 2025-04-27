document.getElementById("cash-out-section").style.display = "none" ;

document.getElementById("add-money").addEventListener("click", function(){
    document.getElementById("cash-out-section").style.display = "none" ;
    document.getElementById("add-money-section").style.display = "block" ;
})



document.getElementById("cash-out").addEventListener("click", function(){
    document.getElementById("cash-out-section").style.display = "block" ;
    document.getElementById("add-money-section").style.display = "none" ;
})