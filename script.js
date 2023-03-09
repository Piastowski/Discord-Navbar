const cross = document.querySelector('#cross')

cross.addEventListener('mouseover', () => {
    cross.setAttribute('src', 'img/crossWhite.png')
})

cross.addEventListener('mouseout', () => {
    cross.setAttribute('src', 'img/cross.png')
})