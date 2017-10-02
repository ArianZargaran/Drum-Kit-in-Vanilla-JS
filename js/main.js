function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // return if there is no audio on the key;
  audio.currentTime = 0; //rewind audio to the start
  audio.play();
  key.classList.add('playing');
}
function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound);
