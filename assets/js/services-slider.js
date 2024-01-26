let items = document.querySelectorAll('.slider-services-container .slide');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

function showSlider(){
    //Remove the old item
    let itemActiveOld = document.querySelector('.slider-services-container .slide.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //Add the new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// Click on thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})