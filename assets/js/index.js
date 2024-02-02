var header = document.getElementById('header');

//Para cambiar la barra superior del menu y ponerla oscura

window.addEventListener('scroll',() => {
    var Width = 0;
    Width = document.documentElement.clientWidth;
    var logo = document.getElementById('menu_logo');
    var menu_bar = document.getElementById('menu_bar');
    var toggle = document.getElementById('toggle');
    var scroll = window.scrollY;

    switch (true) {

        // 1366+ resolutions
        default:
            //When it goes down
            if(scroll > 10){
                logo.src="./assets/images/TerraValorLogoBlanco.svg";
                logo.style.marginLeft = '10%'
                logo.style.width = '70%'
                header.style.backgroundColor = '#121212';
                menu_bar.classList.add('menu_item_alternate');
                toggle.style.backgroundColor = '#ffffff';
            }else{
                //Otherwise
                menu_bar.classList.remove('menu_item_alternate');
                logo.style.marginLeft = '0%'
                logo.style.width = '100%'
                logo.src="./assets/images/TerraValorLogo.svg";
                header.style.backgroundColor = 'transparent';
                menu_bar.style.color='#000000';
                toggle.style.backgroundColor = '#B29FBB';
            }
        break

        // 1366 resolution
        case Width <= 1366:
            //When it goes down
            if(scroll > 10){
                logo.src="./assets/images/TerraValorLogoBlanco.svg";
                logo.style.marginLeft = '10%'
                logo.style.width = '90%'
                header.style.backgroundColor = '#121212';
                menu_bar.classList.add('menu_item_alternate');
                toggle.style.backgroundColor = '#ffffff';
            }else{
                //Otherwise
                menu_bar.classList.remove('menu_item_alternate');
                logo.style.marginLeft = '0%'
                logo.style.width = '100%'
                logo.src="./assets/images/TerraValorLogo.svg";
                header.style.backgroundColor = 'transparent';
                menu_bar.style.color='#000000';
                toggle.style.backgroundColor = '#B29FBB';
            }
        break
    }
})

//Abrir el menu
let menutoggle = document.getElementById('toggle');
let menubackground = document.getElementById('container_toggle_bar');
let menucontainer = document.getElementById('cont_toggle_bar');
function abrir_menu(){
    menutoggle.classList.toggle('active');
    menubackground.classList.toggle('active');
    menucontainer.classList.toggle('active');
}
menutoggle.addEventListener("click" , abrir_menu);

//Cerrar el menu al oprimir una opcion
let nav_bar = document.getElementById('nav_bar');
function cerrar_menu(){
    menutoggle.classList.toggle('active');
    menubackground.classList.toggle('active');
    menucontainer.classList.toggle('active');
}
nav_bar.addEventListener("click" , cerrar_menu);

//El resize
start();
    window.onresize = start;
    function start(){

        var Width = 0;
        Width = document.documentElement.clientWidth;
        var Twitter = document.getElementById('Twitter'), Facebook = document.getElementById('Facebook'), Email = document.getElementById('Email');
        switch (true) {
            //Para los logos de redes sociales
            case Width < 900:
                Twitter.style.background = 'url(./assets/images/Twitter50.png)no-repeat';
                Twitter.style.width = "68px";
                Twitter.style.height = "56px";

                Facebook.style.background = 'url(./assets/images/Facebook50.png)no-repeat';
                Facebook.style.width = "68px";
                Facebook.style.height = "56px";

                Email.style.background = 'url(./assets/images/Email50.png)no-repeat';
                Email.style.width = "68px";
                Email.style.height = "56px";
            break

            default:
                Twitter.style.background = 'url(./assets/images/Twitter.png)no-repeat';
                Twitter.style.width = "136px";
                Twitter.style.height = "112px";

                Facebook.style.background = 'url(./assets/images/Facebook.png)no-repeat';
                Facebook.style.width = "136px";
                Facebook.style.height = "112px";

                Email.style.background = 'url(./assets/images/Email.png)no-repeat';
                Email.style.width = "136px";
                Email.style.height = "112px";
            break
        }
    }