function getPics() {
    const imgGallery = document.querySelectorAll('.gallery-image-collection img')
    const imgSightseeing = document.querySelectorAll('.sightseeing-contents section img')
    const fullPage = document.querySelector('#fullPage')

    imgGallery.forEach(img => {
        img.addEventListener('click', function() {
            let url = img.src.split("/")
            const arrCount = url.length -1
            const image = url[arrCount]
            fullPage.style.backgroundImage = 'url("../assets/1280x680/' + image + '")'
            fullPage.style.display = 'block'
        })
    })

    imgSightseeing.forEach(img => {
        img.addEventListener('click', function() {
            let url = img.src.split("/")
            const arrCount = url.length -1
            const image = url[arrCount]
            fullPage.style.backgroundImage = 'url("../assets/1280x680/' + image + '")'
            fullPage.style.display = 'block'
        })
    })
}