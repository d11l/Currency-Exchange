function main (){

fetch("https://api.currencyfreaks.com/latest?apikey=de4bbde1799c431cb5f46962292c6345")
.then(res => res.json())
.then(data => {
    console.log(data);

    let amount = document.querySelector(".amount").value;
    let sarPrice = document.querySelector(".sar");
    let coin = document.querySelector("select").value ;
    sarPrice.innerHTML = `Price In ${coin} <span> ${Math.round(amount * data.rates[coin])} </span>`;
    //console.log(data.rates);
    //console.log(data.rates[coin]);
    //console.log(data.rates["SAR"]);
})
}


document.querySelector("button").addEventListener("click",main);

window.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            main()
        }
}) 