const buttonMaps = document.getElementById('openMaps')

const buttonSBB = document.getElementById('openSBB')

const clickingLogo = document.getElementById('logo')

buttonMaps.addEventListener('click', () => {
    window.open('https://goo.gl/maps/dvSd84NqHxP1Z7vC6')
})

buttonSBB.addEventListener('click', () => {
    window.open('https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml')
})

clickingLogo.addEventListener('click', () => {
    open('../index.html')
})