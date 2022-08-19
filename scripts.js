const handleNavList = document.querySelectorAll(
  '#container > aside > ul > .navList > a'
);
const contentList = document.querySelectorAll(
  '#container  > section > .content'
);

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

const sectionParent = document.querySelector('section');
const loader = document.querySelector('.loader');
const progress = document.querySelector('.progress'); //get element

handleNavList.forEach((navList, navIndex) => {
  navList.addEventListener('click', (e) => {
    e.preventDefault();

    handleNavList.forEach(function (navList) {
      navList.classList.remove('active');
    });

    navList.classList.add('active');
    loader.classList.add('active');

    if ((loader.style.display = 'block')) {
      let width = 0;
      let counterInit = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(counterInit);
          i = 0;
        } else {
          width++;
          progress.style.width = width + '%';
          progress.innerHTML = width + '%';
        }
      }

      setTimeout(() => {
        loader.style.display = 'none';
      }, 1400);
    }

    contentList.forEach((content, contentIndex) => {
      if (navIndex === contentIndex) {
        content.style.display = 'block';
        navMenu.classList.remove('active');
        sectionParent.classList.add('active');
        hamburger.classList.toggle('active');
      } else {
        content.style.display = 'none';
      }
    });
  });
});

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
