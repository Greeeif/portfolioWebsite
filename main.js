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

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    
    // Get computed width to account for CSS styles
    const sidebarWidth = window.getComputedStyle(sidebar).width;
    
    if (sidebarWidth === "0px" || sidebarWidth === "") {
      openNav();
      document.querySelector(".openbtn").innerHTML = "&#9776; Close Sidebar";
    } else {
      closeNav();
      document.querySelector(".openbtn").innerHTML = "&#9776; Open Sidebar";
    }
  }