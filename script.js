const i4 = document.querySelector('#i4')
const cross = document.querySelector('#cross')

i4.addEventListener('mouseover', () => {
    cross.setAttribute('src', 'img/crossWhite.png')
})

i4.addEventListener('mouseout', () => {
    cross.setAttribute('src', 'img/cross.png')
})