// PHONE VALIDATOR

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")


const regExp = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const parentTabs = document.querySelector('.tab_content_items');

const hideTabContent = () => {
    tabContentBlocks.forEach((tabContentBlock) => {
        tabContentBlock.style.display = 'none';
    });
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (indexElement = 0) => {
    tabContentBlocks[indexElement].style.display = 'block';
    tabItems[indexElement].classList.add('tab_content_item_active');
};


parentTabs.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, index) => {
            if (event.target === tabItem) {
                hideTabContent();
                showTabContent(index);
            }
        });
    }
};

const autoTabSwitcher = (i = 0) => {
    setInterval(() => {
        i++;
        if (i >= tabItems.length) {
            i = 0;
        }
        hideTabContent();
        showTabContent(i);
    }, 3000);
};

hideTabContent()
showTabContent(0);
autoTabSwitcher();

// CONVERTER

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const cny = document.querySelector('#cny')
const jpy = document.querySelector('#jpy')
const czk = document.querySelector('#czk')
// console.log(som);

// som.addEventListener('input', (event) => {
//     console.log(event.target.value);
// })

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()

//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })
// usd.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()

//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         som.value = (usd.value * response.usd).toFixed(2)
//     })
// })

const converter = (element, target1, target2, target3, target4, target5, currency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (currency === 'som') {
                target1.value = (element.value / response.usd).toFixed(2)
                target2.value = (element.value / response.eur).toFixed(2)
                target3.value = (element.value / response.cny).toFixed(2)
                target4.value = (element.value * response.jpy).toFixed(2)
                target5.value = (element.value / response.czk).toFixed(2)
            }else if(currency === 'usd'){
                target1.value = (element.value * response.usd).toFixed(2)
                target2.value = (element.value * (response.usd / response.eur)).toFixed(2)
                target3.value = (element.value * (response.usd / response.cny)).toFixed(2)
                target4.value = (element.value / response.usd * response.jpy).toFixed(3)
                target5.value = (element.value *(response.usd / response.czk)).toFixed(2)
            }else if(currency === 'eur'){
                target1.value = (element.value * (response.eur / response.usd)).toFixed(2)
                target2.value = (element.value * response.eur).toFixed(2)
                target3.value = (element.value * (response.eur / response.cny)).toFixed(2)
                target4.value = (element.value / response.eur * response.jpy).toFixed(3)
                target5.value = (element.value * (response.eur / response.czk)).toFixed(2)
            }else if(currency === 'cny'){
                target1.value = (element.value * (response.cny / response.usd)).toFixed(2)
                target2.value = (element.value * response.cny).toFixed(2)
                target3.value = (element.value * (response.cny / response.eur)).toFixed(2)
                target4.value = (element.value * (response.cny / response.jpy)).toFixed(2)
                target5.value = (element.value * (response.cny / response.czk)).toFixed(2)
            }else if (currency === 'jpy'){
                target1.value = (element.value / response.usd * response.jpy).toFixed(3)
                target2.value = (element.value * response.jpy).toFixed(2)
                target3.value = (element.value / response.eur * response.jpy).toFixed(3)
                target4.value = (element.value * (response.jpy / response.cny)).toFixed(2)
                target5.value = (element.value * (response.jpy / response.czk)).toFixed(2)
            }else if(currency === 'czk'){
                target1.value = (element.value / response.usd * response.czk).toFixed(3)
                target2.value = (element.value * response.czk).toFixed(2)
                target3.value = (element.value / response.eur * response.czk).toFixed(3)
                target4.value = (element.value / response.cny * response.czk).toFixed(2)
                target5.value = (element.value * (response.czk / response.jpy)).toFixed(2)

            }
            // element.value === '' ? target.value = '' : false 
            element.value === '' && (target1.value = target2.value = target3.value = target4.value = target5.value = '')
        }
    }
}

converter(som, usd, eur, cny, jpy, czk, 'som')
converter(usd, som, eur, cny, jpy, czk, 'usd')
converter(eur, usd, som, cny, jpy, czk, 'eur')
converter(cny, usd, som, eur, jpy, czk, 'cny')
converter(jpy, usd, som, eur, cny, czk, 'jpy')
converter(czk, usd, som, eur, cny, jpy, 'czk')
