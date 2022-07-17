
var metadata = {}
export function JsonArrayConstructor(image, title,artist){

     metadata = {
          "type": "AudioObject",
          "name": title,
          "creator": artist,
          "image": image         
        }


}

export var metadata;
