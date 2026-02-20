const menubtn = document.getElementById('menu-btn')
const mobilemenu = document.getElementById('mobile-menu')

menubtn.addEventListener('click', () => {
    menubtn.classList.toggle('active')

    if(mobilemenu.classList.contains('closed')){
        mobilemenu.classList.remove('closed')
        mobilemenu.classList.add('open')
    } else {
        mobilemenu.classList.remove('open')
        mobilemenu.classList.add('closed')
    }

})

mobilemenu.addEventListener('click', () => {
    menubtn.classList.remove('active')
    mobilemenu.classList.remove('open')
    mobilemenu.classList.add('closed')

})