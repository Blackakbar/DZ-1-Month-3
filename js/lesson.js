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




