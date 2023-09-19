// MODAL

const modal = document.querySelector('.modal')
const closeModalButton = document.querySelector('.modal_close')
const modalTrigger = document.querySelector('#btn-get')
let modalActive = false

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if(event.target === modal){
        closeModal()
    }
}
// console.log(window.innerHeight);
// console.log(document.body.offsetHeight);
// console.log(window.scrollY);
const scrollHandler = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scrollHandler)
    }
}
window.addEventListener('scroll', scrollHandler)
// window.removeEventListener('scroll', scrollHandler)
const modalAfterInterval = () => {
    setTimeout(() => {
        if (!modalActive) {
            openModal()
        }
    }, 10000);
}

modalAfterInterval()
