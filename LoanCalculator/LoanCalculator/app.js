document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    document.getElementById('results').style.display='none';
    //show loader
    document.getElementById('loading').style.display='block';
    setTimeout(calculateResults, 1000);
    e.preventDefault();
});

function calculateResults(){
    console.log("Calculating...");
    let amount = document.getElementById('amount');
    let interest = document.getElementById('interest');
    let years = document.getElementById('years');
    let monthlhyPayment = document.getElementById('monthly-payment');
    let totalPayment = document.getElementById('total-payment');
    let totalInterest = document.getElementById('total-interest');
    let principal = parseFloat(amount.value);
    let calculatedInterest = parseFloat(interest.value) /100 /12;
    let calculatePayments = parseFloat(years.value) * 12;
    //compute monthly payments
    const x = Math.pow(1+calculatedInterest, calculatePayments);
    const monthly = (principal * x *calculatedInterest)/(x-1);
    if(isFinite(monthly)){
        monthlhyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
        
        //show results
        document.getElementById('results').style.display='block';
        //hide loader
        document.getElementById('loading').style.display='none';
    } else{    
        showError("Check your nums");
    }
    
   
}

function showError(error){
    //hide results
    document.getElementById('results').style.display='none';
    //hide loader
    document.getElementById('loading').style.display='none';
    
    //created error mesage
    const errorDiv =document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    //grab the card
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //put the error form to the correct position
    card.insertBefore(errorDiv,heading);
    //Clear error after 3 seconds
    setTimeout(clearError, 1000);
}

function clearError(){
    document.querySelector('.alert').remove();
}