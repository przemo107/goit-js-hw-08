import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// Inicjalizacja odtwarzacza Vimeo
const player = new Vimeo('vimeo-player');

// Funkcja do zapisywania czasu odtwarzania w localStorage
const saveCurrentTime = throttle(currentTime => {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

// Obsługa zdarzenia timeupdate
player.on('timeupdate', ({ seconds }) => {
  saveCurrentTime(seconds);
});
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player');

const saveCurrentTime = throttle(currentTime => {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', ({ seconds }) => {
  saveCurrentTime(seconds);
});

// Przywracanie czasu odtwarzania po przeładowaniu strony
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
