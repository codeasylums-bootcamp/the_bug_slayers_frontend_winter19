let x1;
function fetchData(){
  var apikey = {
    key: 'c20876b1-0c62-4561-911a-ca802f0fd9b9'
  }

  request('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then((r1) => {
       x1 = JSON.parse(r1.target.responseText);

    })
    .catch(err => {
      console.log(err);
    });

  function request(method, url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = resolve;
      xhr.onerror = reject;
      xhr.send();
    });
   }
  }
  function createData(){

    for (let i = 0; i < 3; i++) {

      if(x1.data[i].name==='Bitcoin'){
        const v=document.getElementById('div1');
        const  btn=document.createElement("p");
        const pri=document.createElement("p");
        const mar=document.createElement("p");
        v.innerHTML="Name: "+(x1.data[i].name);
        btn.innerHTML="Rank: "+x1.data[i].cmc_rank;
        pri.innerHTML="Price in USD: "+x1.data[i].quote.USD.price;
        mar.innerHTML="Market value in USD: "+x1.data[i].quote.USD.market_cap;
        v.appendChild(btn);
        v.appendChild(pri);
        v.appendChild(mar);
        console.log(x1.data[i].name);

      }
      else if(x1.data[i].name==='Ethereum'){
        const v=document.getElementById('div2');
        const  btn=document.createElement("p");
        const pri=document.createElement("p");
        const mar=document.createElement("p");
        v.innerHTML="Name: "+(x1.data[i].name);
        btn.innerHTML="Rank: "+x1.data[i].cmc_rank;
        pri.innerHTML="Price in USD: "+x1.data[i].quote.USD.price;
        mar.innerHTML="Market value in USD: "+x1.data[i].quote.USD.market_cap;
        v.appendChild(btn);
        v.appendChild(pri);
        v.appendChild(mar);
      }
      else if(x1.data[i].name==='XRP'){
        const v=document.getElementById('div3');
        const  btn=document.createElement("p");
        const pri=document.createElement("p");
        const mar=document.createElement("p");
        v.innerHTML="Name: "+(x1.data[i].name);
        btn.innerHTML="Rank: "+x1.data[i].cmc_rank;
        pri.innerHTML="Price in USD: "+x1.data[i].quote.USD.price;
        mar.innerHTML="Market value in USD: "+x1.data[i].quote.USD.market_cap;
        v.appendChild(btn);
        v.appendChild(pri);
        v.appendChild(mar);
      }
      
    }
      
   }