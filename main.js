const navListItems = document.querySelectorAll('.navList')

navListItems.forEach(navItem => {
    navItem.onclick = function() {
        this.style.backgroundColor = 'blue';
    }
})