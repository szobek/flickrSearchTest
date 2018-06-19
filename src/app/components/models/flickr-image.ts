export class FlickrImage {

    flickrUrl: string;

    constructor(param) {
        if (param) {
            Object.assign(this, param);
            this.flickrUrl = `https://farm${param.farm}.staticflickr.com/${param.server}/${param.id}_${param.secret}.jpg`;
        }
    }
}