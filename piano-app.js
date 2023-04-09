"use strict";

document.addEventListener('keydown',function(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const touch = document.querySelector(`.touch[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    touch.classList.add('active');
  });
  document.addEventListener('keyup',function(event){
    const touch = document.querySelector(`.touch[data-key="${event.keyCode}"]`);
    touch.classList.remove('active');
  });





