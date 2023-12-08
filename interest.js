function updaterate(){
    var rate=document.getElementById("range").value;
    document.getElementById("rate_val").innerText = "Rate : "+rate+"%";
  }

  function compute(){
    var principal=document.getElementById("amount").value;
    var rate=document.getElementById("range").value;
    var years=document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);
    var interest=principal *years * rate/100;
    var amount = parseInt(principal) + parseFloat(interest);
    
    var result = document.getElementById("interest");
    if(amount<=0){
        alert("Enter a positive or greater then zero")
        document.getElementById("years").focus();
    }else {
        result.innerText = `If you deposit amount: ` + principal  +  ` at an interest rate of `  + rate + `%`  + ` You will receive an amount :` + amount +  `in the year ` + year ;
    }

   
  }