
var obj = {}
export function JsonArrayConstructor(image, title,artist){

     obj = {
          "type": "AudioObject",
          "name": title,
          "creator": artist,
          "image": image         
        }


}

export var obj;