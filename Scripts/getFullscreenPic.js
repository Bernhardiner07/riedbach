function getPics() {
    const imgs = document.querySelectorAll('.gallery-image-collection img')
    const fullPage = document.querySelector('#fullPage')

    imgs.forEach(img => {
        img.addEventListener('click', function() {
            fullPage.style.backgroundImage = 'url(' + img.src + ')'
            fullPage.style.display = 'block'
        })
    })
}