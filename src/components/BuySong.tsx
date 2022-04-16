import { requestProvider } from '../utils/webln/client';
import {obj} from "../assets/hashes/JSONArray"

async function pay(song) {
  const webln = await requestProvider();
  if(!webln) {
    return;
  }
  requestProvider()
      .then(function(webln) {
        // returns weblnProvider object which contains all the methods defined example send payment, execute, verifySignMessage etc etc
        // we will define specification used by lnurl metadata here as well.
        console.log(webln)

        console.log(song);

      
       

    
       const jsonObject= JSON.stringify(obj);

        console.log(jsonObject);

        //// Metadata json array which must be presented as raw string here, this is required to pass signature verification at a later step
        /// we need way to convert json array into raw string, decode it on wallet side and then render it.
        //https://github.com/fiatjaf/lnurl-rfc/blob/luds/06.md type of metadata that is also to be decided

        return webln.sendPayment('lnbcrt10u1p39jjrfpp5dce0tymtecuh9waff5hcyh0gtvwunm33p0fntmc7phh49v4sauwsdq2wpshvctwdgcqzpgxqyz5vqsp5nt8ljsfzjm02g2hfr9qynx3wv4hpc5mx9tzzq3hzu2x29e5mcxwq9qyyssqt5lw8h5l8mhlx8hje73yldhm6farzc3jkdz55y2x3ymttftaczm5jh6jes07a2ccd23pu2pp6n86wy4zne6hfw4w6x4yppc82v6krugq9fyqrg', jsonObject)
          .then(function(r) {
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