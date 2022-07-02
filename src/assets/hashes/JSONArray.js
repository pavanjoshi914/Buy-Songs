
var obj = {}
export function JsonArrayConstructor(image, title,artist){

     obj = {
          "@context": "https://schema.org",
          "@type": "AudioObject",
          "name": title,
          "creator": artist,
          "image": image         
        }


}

export var obj;