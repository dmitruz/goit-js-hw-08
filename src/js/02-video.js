
// Change code bimport Player from '@vimeo/player';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const videoPlayer = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time"
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);


videoPlayer.setCurrentTime(currentTime);

videoPlayer.on('timeupdate', throttle(data => localStorage.setItem(LOCALSTORAGE_KEY, data.seconds), 1000));

