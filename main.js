const navListItems = document.querySelectorAll('.navList')

navListItems.forEach(navItem => {
    navItem.onmousedown = function() {
        this.style.backgroundColor = '#e1dfd3';
        this.style.color = '#324532'
    }
    navItem.onmouseup = function() {
        this.style.backgroundColor = '#94947c';
        this.style.color = '#e1dfd3'
    }
})