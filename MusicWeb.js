const div = document.getElementById('player');
const title = document.getElementById('titulo');
const audio = document.getElementById('audio');
const btnPrevious = document.getElementById('anterior');
const btnRandom = document.getElementById('aleatorio');
const btnPlay = document.getElementById('play');
const btnNext = document.getElementById('siguiente');
const btnRepeat = document.getElementById('repetir');
const songsList = document.getElementById('lista-canciones');
const progress = document.getElementById('progreso');
const volume = document.getElementById('volumen');


let index = 0;

let repeatSong = false;

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
    },
    {
        name: 'Deportivo',
        archive: '/music/Deportivo.mp3'
    },
    {
        name: 'Verte ir',
        archive: '/music/Verte-ir.mp3'
    },
    {
        name: 'Danza Kuduro',
        archive: '/music/Danzakuduro.mp3'
    }
];



let archive = playList[index].archive

let nameSong = playList[index].name

audio.src = archive
title.textContent = `Cancion actual: ${nameSong}`;

function pauseIcon() {
    btnPlay.textContent = '❚❚';
}

function updatePlayer() {
    audio.src = playList[index].archive;
    title.textContent = `Cancion actual: ${playList[index].name}`;
    updateSongList();
}

function reproducer() {
    
    if (audio.paused) {
        
        audio.play();
        pauseIcon();
 
        
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
        pauseIcon();
        
    } else {
        
        return;
        
    }
};

function previousSong() {
    
    if (index > 0) {
        
        index--;
        
        updatePlayer();
        
        audio.play();
        pauseIcon();
        
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
            
            li.addEventListener('click', function() {
                audio.src = n.archive;
                index = n.id;
                updatePlayer();
                audio.play();
                pauseIcon();
                
            });

            songsList.appendChild(li);
            
        }
    });
    
};

let counter = 0;

playList.forEach(n => {

    n['id'] = counter;
    counter++

        if (index === n.id) {

        return;

    } else {

        updatePlayer();

    }
});

function random() {

    index = Math.floor(Math.random() * playList.length);

    updatePlayer();
    audio.play();
    pauseIcon();

};


btnRepeat.addEventListener('click', function() {
    if(repeatSong){
        repeatSong = false
        btnRepeat.textContent = '↻'
    }else{
        repeatSong = true
        btnRepeat.textContent = '🔁'
    }
});

audio.addEventListener("ended", function(){

    if (repeatSong) {
        
        audio.play();

    } else {

        nextSong();

    };
});

btnPlay.addEventListener('click', reproducer);

btnNext.addEventListener('click', nextSong);

btnPrevious.addEventListener('click', previousSong);

btnRandom.addEventListener('click', random)