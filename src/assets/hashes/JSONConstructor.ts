
// you cant assign type JSON here
let metadata: {};

export function JsonConstructor(image: string, title: string,artist: string,url: string, contentUrl: string, embedUrl){

     metadata = {
          "type": "AudioObject",
          "name": title,
          "creator": artist,
          "thumbnail": image,
          "url": url,
          "contentUrl": contentUrl,
          "embedUrl": embedUrl,
          "height": 240,
          "width": 240,
          "image": image
        }
}



export function ExportMetadata(){
     return metadata;
}