const innerCardsBlock = document.querySelector('.inner_cards_block')
let cardAmount = 0

const fetchCardData = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
    
        data.forEach(item => {
            if (cardAmount < 100) {
                const card = document.createElement('div')
                card.setAttribute('class', 'inner-cardblock-item')
                card.innerHTML = `
                <div class="id-block">ID: ${item.id}</div>
                <p>${item.title}</p>
                <span>${item.body}</span>
                `
                innerCardsBlock.appendChild(card)
                cardAmount++
            }
        })  
    } catch (error) {
        console.log(error, 'ERROR!');
    }
}
fetchCardData()