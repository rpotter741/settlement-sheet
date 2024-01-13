import overviewRender from "./overviewRender";
import { settlement } from "./settlementStats";
import { clearList, shopInterface } from "./shopInterface";
import { survival } from "./survivalStats";

function shopWindow() {
    let wrapper = document.querySelector('#buyBox');
    wrapper.id = 'buyBox'
    wrapper.style = "width: 50%;";

    let header = document.createElement('div');
    header.textContent = "Management Shop";
    header.style = "display: flex; justify-content: center; align-items: center; height: 10%; background: gray; font-size: 22px;"
    wrapper.appendChild(header);

////////BUY/SELL SWITCHER////////
let buySell = document.createElement('div');
buySell.id = 'buySell';

let buy = document.createElement('button');
buy.textContent = "Buy";
buy.id = 'buyMode';
buy.classList.add('buybuy')


let sell = document.createElement('button');
sell.textContent = "Sell";
sell.id = 'sellMode';
sell.classList.add('sellbuy')


buy.addEventListener('click', () => {
    buy.classList.add('buybuy');
    buy.classList.remove('buysell');
    sell.classList.remove('sellsell');
    sell.classList.add("sellbuy");
    shopWrapper.classList.remove('sell');
    shopWrapper.classList.add('buy');
    clearList();
    shopStatus = 0;
    shopInterface();
    

})

sell.addEventListener('click', () => {    
    sell.classList.add('sellsell');
    sell.classList.remove('sellbuy');
    buy.classList.remove('buybuy');
    buy.classList.add('buysell');
    shopWrapper.classList.add('sell');
    shopWrapper.classList.remove('buy');
    clearList();
    shopStatus = 1;
    shopInterface();
    
})

buySell.appendChild(buy);
buySell.appendChild(sell);

wrapper.appendChild(buySell);

let shopWrapper = document.createElement('div');
shopWrapper.id = 'shopWrapper'
shopWrapper.classList.add('buy');
wrapper.appendChild(shopWrapper);

shopInterface();

}

let shopStatus = 0;

export { shopStatus, shopWindow}

