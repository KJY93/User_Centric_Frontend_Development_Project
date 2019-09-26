document.addEventListener('DOMContentLoaded', () => { 
    
    var navlinkitem = document.querySelectorAll('nav a');
    
    // Loop through the <a> tag and add the active class to the current/clicked link
    for (var i = 0; i < navlinkitem.length; i++) {
        navlinkitem[i].addEventListener("click", function() {
            var current = document.getElementsByClassName('.activelink');
            current.classList.remove('activelink');
            this.classList.add('activelink');
    
        })}
});


