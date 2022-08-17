const handleNavList = document.querySelectorAll(
  '#container > aside > ul > .navList > a'
);
const contentList = document.querySelectorAll(
  '#container  > section > .content'
);

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

const sectionParent = document.querySelector('section');

handleNavList.forEach((navList, navIndex) => {
  navList.addEventListener('click', (e) => {
    e.preventDefault();
    handleNavList.forEach(function (navList) {
      navList.classList.remove('active');
    });
    navList.classList.add('active');

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
