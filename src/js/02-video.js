import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle((currentTime) => {
    let time = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', time);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

