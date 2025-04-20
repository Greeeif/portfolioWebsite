const navListItems = document.querySelectorAll('.navListHome')

navListItems.forEach(navItem => {
    navItem.onmousedown = function() {
        this.style.backgroundColor = '#e1dfd3';
        this.style.color = '#263A26';
    }
    navItem.onmouseup = function() {
        this.style.backgroundColor = '#94947c';
        this.style.color = '#e1dfd3';
    }
    navItem.onmouseout = function() {
        this.style.backgroundColor = '#94947c';
        this.style.color = '#e1dfd3';
    }
})

const aboutMePage = document.getElementById('aboutMePage')

aboutMePage.onclick = function() {
    window.location.href = 'aboutMe.html';
}