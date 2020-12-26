const shareBox = document.querySelector('.shareBox');

function changeDisplay() {
    shareBox.classList.toggle('show');
}

const iconBox = document.querySelector('.iconBox');
iconBox.addEventListener('click', changeDisplay); 

const shareIconMobile = document.createElement('div');


const shareIcon = new Image();
shareIcon.src = './images/shareIconBright.svg';
shareIconMobile.classList = 'shareIconMobile';
shareIcon.style.width = '50%';
shareIcon.style.objectFit = 'cover';
shareIcon.style.margin = 'auto';


shareBox.appendChild(shareIconMobile);
shareIconMobile.appendChild(shareIcon);

shareIconMobile.addEventListener('click', changeDisplay);

