import { requestProvider } from '../utils/webln/client';
import {obj} from "../assets/hashes/JSONArray"

async function pay(song) {
  const webln = await requestProvider();
  console.log(webln);
  if(!webln) {
    return;
  }
  requestProvider()
      .then(function(webln) {
        // returns weblnProvider object which contains all the methods defined example send payment, execute, verifySignMessage etc etc
        // we will define specification used by lnurl metadata here as well.
        console.log(webln)

        console.log(song);
      
        //// Metadata json array which must be presented as raw string here, this is required to pass signature verification at a later step
        /// we need way to convert json array into raw string, decode it on wallet side and then render it.
        //https://github.com/fiatjaf/lnurl-rfc/blob/luds/06.md type of metadata that is also to be decided

        return webln.sendPayment('lnbcrt1u1p3vq5ldpp596pv8kgtg4xvhfcswzkulhyls8r2vlkzm3utlyegs3w53u8jx76qdqdwdhkueeqvf6hjcqzpgxqyz5vqsp5hk0sqjfzg8u06rqqwlm0d66w0awvwc9rvv9g05u9yzsa3xfk9a3q9qyyssqtj7ks8vuf795q4rfsths5qjy9n2ryf7qk5n8x90tvgta6z0xtuyywlel6xktxajakawld8a5phyqk2p98se6qyumrft99q00mcq4wecq00w72g', obj)
          .then(function(r) {
            
            if(r != undefined){
            document.getElementById('content').innerHTML = "YAY, thanks!";
            const timeout = document.getElementById('content')
            setTimeout(hideElement, 5000) //milliseconds until timeout//
            function hideElement() {
              timeout.style.display = 'none'
            }
          console.log('done', r);

            const a = document.createElement('a')
  a.href = song.src
  a.download = song.src.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

          }
          })
          .catch(function(e) {
            alert("Failed: " + e.message);
            console.log('err pay:', e);
          });
    })
    .catch(function(e) {
      alert("Webln error, check console");
      console.log('err, provider', e);
    });
}

// function download(song){
//   const a = document.createElement('a')
//   a.href = song.src
//   a.download = song.src.split('/').pop()
//   document.body.appendChild(a)
//   a.click()
//   document.body.removeChild(a)

// }

function BuySong(props) {

  //console.log(props.songs[props.currentSongIndex]);
  
  return (
    <div><button className="glow-on-hover position-button" onClick={() =>pay(props.songs[props.currentSongIndex])}>Buy This Song</button>
    {/* <button onClick={()=> download(props.songs[props.currentSongIndex])}>download</button> */}
    <div id="content" className="position-text"></div>
    </div>
  )
}

export default BuySong