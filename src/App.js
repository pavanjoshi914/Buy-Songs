import { useEffect, useState } from "react";
import BuySong from "./components/BuySong";
import Player from "./components/Player";



function App() {
  // constants of songs, music files stored in public folder
  // data of each song is stored in songs constant which can be used as array
  const [songs,setSongs] = useState([

    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ])

  // currentSongIndex, and nextSongIndex refering to the index of currentsong and nextsong
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex+1);

  // set next song using use effect

  useEffect(()=>{
    //to set next song index
    setNextSongIndex(()=>{
      // if user want to play next song and we dont have anyother song , return to starting song
      if(currentSongIndex+1 > songs.length-1){
        return 0;
      }else{
        // if use want to play next song and next song is available then play next song
        return currentSongIndex+1;
      }
    })
  })


  return (
    <div className="App">
      {/* <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]}></Player> */}
      {/* pass currentSong index, setcurrentsongindex, nextsongindex and songs array to the Player  */}
    <Player currentSongIndex={currentSongIndex} 
    setCurrentSongIndex={setCurrentSongIndex}
    nextSongIndex={nextSongIndex}
    songs={songs}
    ></Player>
    <div><BuySong></BuySong></div>
    </div>
  );
}

export default App;
