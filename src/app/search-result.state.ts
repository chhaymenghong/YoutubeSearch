export class SearchResult {
    public id: string;
    public title: string;
    public description: string;
    public imageUrl: string;
    public videoUrl: string;

    constructor( json: any ) {
        var snippet = json.snippet;
        this.id = json.id.videoId;
        this.title = snippet.title;
        this.description = snippet.description;
        this.imageUrl = snippet.thumbnails.high.url;
        this.videoUrl = snippet.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}
