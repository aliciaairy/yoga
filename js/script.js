window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Tabs

  let headerTab = document.querySelectorAll('.info-header-tab'),
    header = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };


  header.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < headerTab.length; i++) {
        if (target == headerTab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break
        }
      }
    }
  })

  // Timer 

  let deadLine = '2020-04-28';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date);
    let seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60))
    // hours = Math.floor((t / 1000 / 60 / 60) % 24),
    // days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hoursElem = timer.querySelector('.hours'),
      minutesElem = timer.querySelector('.minutes'),
      secondsElem = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000)

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hoursElem.textContent = String(t.hours).length == 2 ? t.hours : '0' + t.hours;
      minutesElem.textContent = String(t.minutes).length == 2 ? t.minutes : '0' + t.hours;
      secondsElem.textContent = String(t.seconds).length == 2 ? t.seconds : '0' + t.seconds;

      if (t.total < 0) {
        clearInterval(timeInterval);
        hoursElem.textContent = '00';
        minutesElem.textContent = '00';
        secondsElem.textContent = '00';
      }
    }
  }

  setClock('timer', deadLine)
})