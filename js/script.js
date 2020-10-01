var buttons = document.querySelectorAll('.button');

var yellowButton = document.querySelector('.button_yellow-button');

var blackButton = document.querySelector('.button_black-button');

var coverPage = document.querySelector('.cover-page');

var popUpSubscribe = document.querySelector('.pop-up_subscribe');

var popUpRefuse = document.querySelector('.pop-up_refuse');

var returnButton = document.querySelector('.cover-page__return-back-wrapper');

var subscribeButton = document.querySelector('.pop-up__subscribe-button');

var answerSubscribe = document.querySelector('.pop-up_sub-answer');

var refuseOptions = document.querySelectorAll('.refuse-option');

var answerRefuse = document.querySelector('.pop-up_ref-answer');

for (button of buttons) {
  button.addEventListener('click', function() {
    console.log(event.target);

    if (this.classList.contains('button_yellow-button')) {
      this.style.background = '#E6B901';
      popUpRefuse.style.display = 'none';
    }

    if (this.classList.contains('button_black-button')) {
      this.style.opacity = '0.8';
      popUpSubscribe.style.display = 'none';
    }
    this.setAttribute('disabled', 'disabled');
    coverPage.style.display = 'block';
    
  });
}

returnButton.addEventListener('click', function() {
  popUpRefuse.style.display = 'flex';
  popUpSubscribe.style.display = 'flex';
  coverPage.style.display = 'none';
  yellowButton.style.background = '#FBCB03';
  blackButton.style.opacity = '0.8';
  yellowButton.removeAttribute('disabled');
  blackButton.removeAttribute('disabled');
});

subscribeButton.addEventListener('click', function() {
  popUpSubscribe.style.display = 'none';
  answerSubscribe.style.display = 'flex';
});

for (option of refuseOptions) {
  option.addEventListener('click', function() {
    this.style.background = '#fff';
    this.style.color = '#000';
    console.log(this);
    popUpRefuse.style.display = 'none';
    answerRefuse.style.display = 'flex';
  });
}

/*yellowButton.addEventListener('click', function() {
  this.style.background = '#E6B901';
  this.setAttribute('disabled', 'disabled');
  popUpRefuse.style.display = 'none';
  coverPage.style.display = 'block';
});
var buttons = document.querySelectorAll('.button');

var yellowButton = document.querySelector('.button_yellow-button');

var blackButton = document.querySelector('.button_black-button');

var coverPage = document.querySelector('.cover-page');

var popUpSubscribe = document.querySelector('.pop-up_subscribe');

var popUpRefuse = document.querySelector('.pop-up_refuse');

var returnButton = document.querySelector('.cover-page__return-back-wrapper');

var subscribeButton = document.querySelector('.pop-up__subscribe-button');

var answerSubscribe = document.querySelector('.pop-up_sub-answer');

var refuseOptions = document.querySelectorAll('.refuse-option');

var answerRefuse = document.querySelector('.pop-up_ref-answer');

/*yellowButton.addEventListener('click', function() {
  this.style.background = '#E6B901';
  this.setAttribute('disabled', 'disabled');
  popUpRefuse.style.display = 'none';
  coverPage.style.display = 'block';
});

blackButton.addEventListener('click', function() {
  this.style.opacity = '0.8';
  this.setAttribute('disabled', 'disabled');
  coverPage.style.display = 'block';
  popUpSubscribe.style.display = 'none';
});*/

/*for (button of buttons) {
  button.addEventListener('click', function() {
    console.log(event.target);

    if (this.classList.contains('button_yellow-button')) {
      this.style.background = '#E6B901';
      popUpRefuse.style.display = 'none';
    }

    if (this.classList.contains('button_black-button')) {
      this.style.opacity = '0.8';
      popUpSubscribe.style.display = 'none';
    }
    this.setAttribute('disabled', 'disabled');
    coverPage.style.display = 'block';
    
  });
}

returnButton.addEventListener('click', function() {
  popUpRefuse.style.display = 'flex';
  popUpSubscribe.style.display = 'flex';
  coverPage.style.display = 'none';
  yellowButton.style.background = '#FBCB03';
  blackButton.style.opacity = '0.8';
  yellowButton.removeAttribute('disabled');
  blackButton.removeAttribute('disabled');
});

subscribeButton.addEventListener('click', function() {
  popUpSubscribe.style.display = 'none';
  answerSubscribe.style.display = 'flex';
});

for (option of refuseOptions) {
  option.addEventListener('click', function() {
    popUpRefuse.style.display = 'none';
    answerRefuse.style.display = 'flex';
  });
}
*/
//returnButton.addEventListener('mouseover', function() {
//});

/*var yellowButton = document.querySelector('.button_yellow-button');

var blackButton = document.querySelector('.button_black-button');

yellowButton.addEventListener('click', function() {
  this.style.background = 'E6B9O1';
  this.style.outline = 'none';
  this.style.border = 'none';
});*/
      //
      //var newWin = window.open('../html/cover-page/pop-up-page.html', 'cover-page', 'width=1400, height=800');

     // var popUpRefuse = newWin.querySelector('.pop-up_refuse');
      //popUpRefuse.style.visibility = 'hidden';
//

/*blackButton.addEventListener('click', function() {
  this.style.opacity = '0.8';
  this.setAttribute('disabled', 'disabled');
  coverPage.style.display = 'block';
  popUpSubscribe.style.display = 'none';
});*/
//returnButton.addEventListener('mouseover', function() {
//});

/*var yellowButton = document.querySelector('.button_yellow-button');

var blackButton = document.querySelector('.button_black-button');

yellowButton.addEventListener('click', function() {
  this.style.background = 'E6B9O1';
  this.style.outline = 'none';
  this.style.border = 'none';
});*/
      //
      //var newWin = window.open('../html/cover-page/pop-up-page.html', 'cover-page', 'width=1400, height=800');

     // var popUpRefuse = newWin.querySelector('.pop-up_refuse');
      //popUpRefuse.style.visibility = 'hidden';
//
