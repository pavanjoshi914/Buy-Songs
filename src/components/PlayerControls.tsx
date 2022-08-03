import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,faPause,faForward,faBackward} from '@fortawesome/free-solid-svg-icons'


// control logic for play music , backward music and forward music.
function PlayerControls(props) {
  return (
    <div className="c-player--controls">
      {/* onlclick change the value of isplaying */}
        <button className="skip-btn" onClick={() =>props.SkipSong(false)}><FontAwesomeIcon icon={faBackward}></FontAwesomeIcon></button>
        <button className="play-btn" onClick={()=>props.setIsPlaying(!props.isPlaying)} ><FontAwesomeIcon icon={props.isPlaying? faPause: faPlay}></FontAwesomeIcon></button>
        <button className="skip-btn" onClick={() =>props.SkipSong()}><FontAwesomeIcon icon={faForward}></FontAwesomeIcon></button>
        </div>
  )
}

export default PlayerControls