function debouncedPopulateDiv(){
    clearTimeout(timeOut);
    const timeOut= setTimeout(function(){
        populateDiv();
    },100);

    
}

function populateDiv(){
    const a = document.getElementById("first").value;
    const b = document.getElementById("second").value;
    // const element = document.getElementById("finalSum");
    // console.log(element);
    fetch("https://sum-server.100xdevs.com/sum?a=" + a + " &b="+ b)
    .then(function(response){
        response.text()
        .then(function(ans){
            document.getElementById("finalSum").innerHTML = ans;
        })
    })
    // element.innerHTML = parseInt(a) + parseInt(b);
}