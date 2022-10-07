'use strict';

const navToggle = document.getElementById('nav_toggle');
const navLinks = document.querySelector('.nav_links');
const showLinks = document.querySelector('.showlinks');
const readMoreBtn = document.querySelector('.read_more-btn');
const hiddenText = document.querySelector('.hidden_text');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('showLinks');
});

readMoreBtn.addEventListener('click', function () {
  hiddenText.style.display = 'inline';
});

const btnsContainer = document.querySelector('.porfolio_btns');
const singleBtn = document.querySelectorAll('.single_btn');
const singlePortfolio = document.querySelectorAll('.single_portfolio');

btnsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.single_btn');

  if (!clicked) return;

  singleBtn.forEach(singleBtn =>
    singleBtn.classList.remove('active_portfolio_btn')
  );

  singlePortfolio.forEach(singlePortfolio =>
    singlePortfolio.classList.remove('active_porfolio')
  );

  clicked.classList.add('active_portfolio_btn');

  document
    .querySelector(`.porfolio-${clicked.dataset.btn}`)
    .classList.add('active_porfolio');
});

const singlePort = document.querySelectorAll('.single_portfolio');
singlePort.forEach(port => {
  const portSlides = port.querySelectorAll('.content_wrap');
  const portPrevBtn = port.querySelector('.prev-btn');
  const portNextBtn = port.querySelector('.next-btn');

  portSlides.forEach(function (portSlide, index) {
    portSlide.style.left = `${index * 100}%`;
  });

  let count = 0;
  portNextBtn.addEventListener('click', function () {
    count++;
    carousel();
  });

  portPrevBtn.addEventListener('click', function () {
    count--;
    carousel();
  });

  function carousel() {
    if (count < portSlides.length - 1) {
      portNextBtn.style.display = 'block';
    } else {
      portNextBtn.style.display = 'none';
    }

    if (count > 0) {
      portPrevBtn.style.display = 'block';
    } else {
      portPrevBtn.style.display = 'none';
    }
    portSlides.forEach(function (portSlide) {
      portSlide.style.transform = `translateX(-${count * 100}%)`;
    });
  }
  portPrevBtn.style.display = 'none';
});
