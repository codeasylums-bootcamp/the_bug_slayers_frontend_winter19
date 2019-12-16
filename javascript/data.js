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
    

    var table = document.getElementById("myTable");
       for (let i = 0; i < 40; i++) {
        var tr = document.createElement('tr');
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );

        tr.cells[0].appendChild( document.createTextNode(x1.data[i].cmc_rank) );
        tr.cells[1].appendChild( document.createTextNode(x1.data[i].name) );
        tr.cells[2].appendChild( document.createTextNode(x1.data[i].symbol) );
        tr.cells[3].appendChild( document.createTextNode(x1.data[i].quote.USD.price) );
        tr.cells[4].appendChild( document.createTextNode(x1.data[i].quote.USD.market_cap) );
        tr.cells[5].appendChild( document.createTextNode(x1.data[i].total_supply) );
        tr.cells[6].appendChild( document.createTextNode(x1.data[i].quote.USD.market_cap) );
        tr.cells[7].appendChild( document.createTextNode(x1.data[i].quote.USD.market_cap) );
        tr.cells[8].appendChild( document.createTextNode(x1.data[i].quote.USD.market_cap) );

  //  tr.cells[3].appendChild( document.createTextNode(x1.data[i].cmc_rank) );
  //  tr.cells[4].appendChild( document.createTextNode(x1.data[i].cmc_rank) );
   // tr.cells[5].appendChild( document.createTextNode(x1.data[i].cmc_rank) );
    table.appendChild(tr);
      
   }
  }