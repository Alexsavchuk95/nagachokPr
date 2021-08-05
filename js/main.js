const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');
const mobileBtn = document.querySelectorAll('.link-mobile');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('list-mobile--active');
}

mobileBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        menuToggle.classList.remove('menu-icon-active');
        mobileNavContainer.classList.remove('list-mobile--active');
    })
});

// Get the modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btns = document.querySelectorAll(".main__itemBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const btnMore = document.querySelector('.modal__decriptiontn');
const descrText = document.querySelector('.modal__decription');
const body = document.querySelector('.body');

btnMore.onclick = function() {
        descrText.classList.toggle('modal__decription--active');
    }
    // When the user clicks the button, open the modal 
btns.forEach(button => {
    button.addEventListener("click", function() {
        modal.style.display = "block";
    });
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    descrText.classList.remove('modal__decription--active');
    body.style.position = 'unset';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        descrText.classList.remove('modal__decription--active');
    }
}



/* КАРТОЧКИ */

fetch("./js/list.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (var i = 0; i <= data.length - 1; i++) {
            moreInfo(data);
        }
    });

const btn = document.querySelectorAll('.main__itemBtn');
const titleImg = document.querySelector('.modal__img');
const modalTitle = document.querySelector('.modal__title');
const modalDecription = document.querySelector('.modal__decription');
const colorPicker = document.querySelectorAll('.item__img');
const usedIn = document.querySelectorAll('.color__item');
const modalPrice = document.querySelector('.modal__price');
const colorItemImg = document.querySelectorAll('.color__itemImg');
const sourceVideo = document.querySelector('.sourceVideo');
const video = document.getElementById('video');


function moreInfo(data) {
    btn.forEach(function(button, index) {
        button.addEventListener('click', function() {
            if (index === 0) {
                modalTitle.innerHTML = data[0].title;
                modalDecription.innerHTML = data[0].info;
                modalPrice.innerHTML = data[0].price;
                titleImg.src = data[0].modalImg;
                video.style.display = 'block';
                sourceVideo.src = data[0].video;
                video.load()
                btnColor(data[0]);
                modalImages(data[0]);
            }
            if (index === 1) {
                modalTitle.innerHTML = data[1].title;
                modalDecription.innerHTML = data[1].info;
                modalPrice.innerHTML = data[1].price;
                titleImg.src = data[1].modalImg;
                video.style.display = 'block';
                sourceVideo.src = data[1].video;
                video.load()
                btnColor(data[1]);
                modalImages(data[1]);
            }
            if (index === 2) {
                modalTitle.innerHTML = data[2].title;
                modalDecription.innerHTML = data[2].info;
                modalPrice.innerHTML = data[2].price;
                titleImg.src = data[2].modalImg;
                video.style.display = 'none';
                sourceVideo.src = data[2].video;
                video.load()
                btnColor(data[2]);
                modalImages(data[2]);
            }
            if (index === 3) {
                modalTitle.innerHTML = data[3].title;
                modalDecription.innerHTML = data[3].info;
                modalPrice.innerHTML = data[3].price;
                titleImg.src = data[3].modalImg;
                video.style.display = 'none';
                sourceVideo.src = data[3].video;
                video.load()
                btnColor(data[3]);
                modalImages(data[3]);
            }
            if (index === 4) {
                modalTitle.innerHTML = data[4].title;
                modalDecription.innerHTML = data[4].info;
                modalPrice.innerHTML = data[4].price;
                titleImg.src = data[4].modalImg;
                video.style.display = 'block';
                sourceVideo.src = data[4].video;
                video.load()
                btnColor(data[4]);
                modalImages(data[4]);
            }
            if (index === 5) {
                modalTitle.innerHTML = data[5].title;
                modalDecription.innerHTML = data[5].info;
                modalPrice.innerHTML = data[5].price;
                titleImg.src = data[5].modalImg;
                video.style.display = 'block';
                sourceVideo.src = data[5].video;
                video.load()
                btnColor(data[5]);
                modalImages(data[5]);
            }
            if (index === 6) {
                modalTitle.innerHTML = data[6].title;
                modalDecription.innerHTML = data[6].info;
                modalPrice.innerHTML = data[6].price;
                titleImg.src = data[6].modalImg;
                video.style.display = 'none';
                sourceVideo.src = data[6].video;
                video.load()
                btnColor(data[6]);
                modalImages(data[6]);
            }
            if (index === 7) {
                modalTitle.innerHTML = data[7].title;
                modalDecription.innerHTML = data[7].info;
                modalPrice.innerHTML = data[7].price;
                titleImg.src = data[7].modalImg;
                video.style.display = 'none';
                sourceVideo.src = data[7].video;
                video.load()
                btnColor(data[7]);
                modalImages(data[7]);
            }
            if (index === 8) {
                modalTitle.innerHTML = data[8].title;
                modalDecription.innerHTML = data[8].info;
                modalPrice.innerHTML = data[8].price;
                titleImg.src = data[8].modalImg;
                video.style.display = 'none';
                sourceVideo.src = data[8].video;
                video.load()
                btnColor(data[8]);
                modalImages(data[8]);
            }
        });
    });
}


function btnColor(data) {
    colorItemImg.forEach(function(image, index) {
        image.addEventListener('click', function() {
            if (index === 0) {
                titleImg.src = data.modalImg1;
            }
            if (index === 1) {
                titleImg.src = data.modalImg2;
            }
            if (index === 2) {
                titleImg.src = data.modalImg3;
            }
        });
    });
}

function modalImages(data) {
    colorItemImg.forEach(function(image, index) {
        if (index === 0) {
            image.src = data.modalImg1;
        }
        if (index === 1) {
            image.src = data.modalImg2;
        }
        if (index === 2) {
            image.src = data.modalImg3;
        }
        modalImagesVal(image);
    });
}

function modalImagesVal(image) {
    let imgsrc = image.getAttribute("src");
    if (imgsrc === "") {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
}

function modalImagesVal(image) {
    let imgsrc = image.getAttribute("src");
    if (imgsrc === "") {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
}