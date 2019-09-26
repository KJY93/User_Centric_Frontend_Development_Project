// added interactivity to show user which current page they are currently on using javascript  
document.addEventListener('DOMContentLoaded', () => {
    
    // get all the <a> tag elements that resides within the <li> tag which can be found inside the <nav> bar
    var navlinkitem = document.querySelectorAll('nav li a');
    
    // for loop to check the href provided in the <a> tag href with the current url
    // if there is a match, add the activepage class to the active element
    for (var i = 0; i < navlinkitem.length; i++) {
        
        if (navlinkitem[i].href == window.location.href) {
            navlinkitem[i].parentElement.classList.add('activepage');
        }
    }  
});




