
// you cant assign type JSON here
let metadata: {};

export function JsonConstructor(image: string, title: string,artist: string){

     metadata = {
          "type": "AudioObject",
          "name": title,
          "creator": artist,
          "image": image         
        }
}


export function ExportMetadata(){
     return metadata;
}