const songs=[
    {
        song:"When we were young",
        singer:"Adel",
    },
    {
        song:"Photograph",
        singer: "Adsheren"   
    }
]
const song=document.querySelector("#song span:first-child");
const singer=document.querySelector("#song span:last-child");
const todaysSong=songs[Math.floor(Math.random()*songs.length)];
song.innerText=todaysSong.song;
singer.innerText=todaysSong.singer;
