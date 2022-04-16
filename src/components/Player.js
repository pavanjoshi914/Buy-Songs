import React,{useState,useRef,useEffect} from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

function Player(props) {

  const audioEl= useRef(null);

  // if song is playing isPlaying will hold that value, to set the state of the variable or to play the song we use setIsPlaying
  // by default no song playing

  const [isPlaying, setIsPlaying] = useState(false);

  // sess for any changes and if change occur renders the code inside it
  useEffect(()=>{

    // so if value of isPlaying is true, then play the song
    if(isPlaying){

      audioEl.current.play();

    }else{
      // else pause the song
      audioEl.current.pause();
    }

  })

  // function handling skipping of song takes one parameter forwards which is bydefault true
  const SkipSong = (forwards=true) =>{
    if(forwards){
      props.setCurrentSongIndex(() =>{
        let temp= props.currentSongIndex;
        temp++;
        if(temp> props.songs.length-1){
          temp=0;
        }

        return temp;
      })

    }else{

      props.setCurrentSongIndex(() =>{
        let temp= props.currentSongIndex;
        temp--;
        if(temp< 0){
          temp=props.songs.length-1;
        }

        return temp;
      })

    }

  }
  return (
    <div className="c-player">
    <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
    <h4>Playing now</h4>
    {/*Details component to be rendered here */}
    <PlayerDetails song={props.songs[props.currentSongIndex]}></PlayerDetails>
    {/*Controls component to be rendered here */}
    <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}></PlayerControls>
    <p><strong>Next:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
    </div>
  )
}

export default Player