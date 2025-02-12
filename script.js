
import { Song, Musician, Playlist } from './MusicData.js';

const musician1 = new Musician("Freddie Mercury", "Vocals", "Rock");
const musician2 = new Musician("Jimi Hendrix", "Guitar", "Rock");
const musician3 = new Musician("Eric Claptin", "Guitar", "Blues");

const song1 = new Song("Bohemian Rhapsody", musician1.name, "A Night at the Opera");
const song2 = new Song("Purple Haze", musician2.name, "Are You Experienced");
const song3 = new Song("Layla", musician3.name, "Timepieces");


const myPlaylist = new Playlist("My Favorite Songs", song1, song2, song3);

myPlaylist.getInfo();


const bodyHTML = document.querySelector("body");

bodyHTML.innerHTML += `
    <ol>
        <li><em>${myPlaylist.song1.title}</em> by ${myPlaylist.song1.artist.name}</li>
        <li><em>${myPlaylist.song2.title}</em> by ${myPlaylist.song2.artist.name}</li>
        <li><em>${myPlaylist.song3.title}</em> by ${myPlaylist.song3.artist.name}</li>
    </ol>

`;
