console.log("welcome to spotify");

// initialize the variables 

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif'); 
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songname:"marvin gaye", filePath :"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songname:"lovers", filePath :"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songname:"love me harder", filePath :"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songname:"criminal", filePath :"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songname:"not a love song", filePath :"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songname:"not a love song", filePath :"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songname:"one call away", filePath :"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songname:"we dont talk anymore", filePath :"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songname:"attention", filePath :"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songname:"im the one", filePath :"songs/10.mp3", coverPath: "covers/10.jpg"},

]

  songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;

  })
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
    
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    
    }

    else
    {

        audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    
}


})


// listen to events
audioElement.addEventListener('timeupdate',()=>{

    //console.log('timeupdate');

    //update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    //console.log(progress);
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', ()=>{


    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 

const makeAllPlays = ()=>{

    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/' + (songIndex + 1) + '.mp3';
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


  document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex>=9){
        songIndex = 0;
    }
    else{
    songIndex += 1;
    }
        audioElement.src = 'songs/' + (songIndex + 1) + '.mp3';
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

    
  document.getElementById('previous').addEventListener('click', ()=>{

    if(songIndex<=0){
        songIndex = 0;
    }
    else{
    songIndex -= 1;
    }
        audioElement.src = 'songs/' + (songIndex + 1) + '.mp3';
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
  