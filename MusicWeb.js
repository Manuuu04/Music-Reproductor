const div = document.getElementById('player');
const title = document.getElementById('titulo');
const audio = document.getElementById('audio');
const btnPrevious = document.getElementById('anterior');
const btnPlay = document.getElementById('play');
const btnNext = document.getElementById('siguiente');
const songsList = document.getElementById('lista-canciones');

let index = 0;

let playList = [
    {
        name: 'Aurora Instrumental',
        archive: '/music/Aurora.mp3'
    }
];

audio.src = playList[index].archive;
title.textContent = playList[index].name;

function reproducer() {

    if (audio.paused) {
    
        audio.play();
        btnPlay.textContent = '⏸️' 
    
    }else{

        audio.pause();
        btnPlay.textContent = '▶'

    }

};


btnPlay.addEventListener('click', reproducer);