export interface ISearchResultJson {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string
}
export class SearchResult {
    public id: string;
    public title: string;
    public description: string;
    public imageUrl: string;
    public videoUrl: string;

    constructor( json: ISearchResultJson ) {
        this.id = json.id;
        this.title = json.title;
        this.description = json.description;
        this.imageUrl = json.thumbnailUrl;
        this.videoUrl = json.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}
