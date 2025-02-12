// MusicData.js

class Song {
    constructor(title, artist, album) {
      this.title = title;
      this.artist = artist;
      this.album = album;
    }
  }
  
  class Musician {
    constructor(name, instrument, genre) {
      this.name = name;
      this.instrument = instrument;
      this.genre = genre;
    }
  }
  
  class Playlist {
    constructor(name, song1, song2, song3) {
      this.name = name;
      this.songs = [song1, song2, song3];
    }
  
    getInfo() {
      console.log(`Playlist: ${this.name}`);
      this.songs.forEach((song, index) => {
        console.log(`${index + 1}. ${song.title} by ${song.artist} from the album ${song.album}`);
      });
    }
  }
  
  // Export all three classes
  export { Song, Musician, Playlist };
  
  



//5. export all three classes to make them available to the other JS files.


