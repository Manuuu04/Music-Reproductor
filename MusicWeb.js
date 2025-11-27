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
    },
    {
        name: 'Callaita',
        archive: '/music/Callaita.mp3'

    },
    {
        name: 'Columbia',
        archive: '/music/Columbia.mp3'
    }
];
let counter = 0;

playList.forEach(n => {

    n['id'] = counter;
    counter++

        if (index === n.id) {

        return;

    } else {

        const li = document.createElement('li');
        li.textContent = n.name;
        songsList.appendChild(li);

    }
});

let archive = playList[index].archive

let nameSong = playList[index].name

audio.src = archive
title.textContent = `Cancion actual: ${nameSong}`;

function updatePlayer() {
    audio.src = playList[index].archive;
    title.textContent = `Cancion actual: ${playList[index].name}`;
    updateSongList();
}

function reproducer() {

    if (audio.paused) {
    
        audio.play();
        btnPlay.textContent = '⏸️' 
    
    }else{

        audio.pause();
        btnPlay.textContent = '▶'

    }

};

function nextSong() {

    if (index < playList.length - 1) {

        index++;

        updatePlayer();

        audio.play();
        btnPlay.textContent = '⏸️';
        
    } else {
        
        return;

    }
};

function previousSong() {
    
    if (index > 0) {
        
        index--;
        
        updatePlayer();

        audio.play();
        btnPlay.textContent = '⏸️';

    } else {
       
        return;
    
    }
}

function updateSongList() {
    songsList.innerHTML = ''
    playList.forEach(n => {
        if (index === n.id) {
        
            return;
        
        } else {
        
            const li = document.createElement('li');
            li.textContent = n.name;
        
            songsList.appendChild(li);
        
        }
    });
    
};

audio.addEventListener("ended", nextSong);

btnPlay.addEventListener('click', reproducer);

btnNext.addEventListener('click', nextSong);

btnPrevious.addEventListener('click', previousSong);