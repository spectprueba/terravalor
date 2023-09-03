window.onload = function(){
    var container = document.getElementById('loader-container');
    var wholeDoc = document.querySelector('html');

    wholeDoc.classList.add('loading'); //While the page still loading

    //Once loaded do:
     setTimeout(function() {

        wholeDoc.style.backgroundColor = "#6ab150";//A little trick
        wholeDoc.classList.add('loaded');

    }, 1700);

    setTimeout(function() {

        container.style.opacity = '0';

    }, 1500);

    setTimeout(function() {

        container.style.visibility = 'hidden';
        container.style.display = 'none';

    }, 2000);

}