export class BoardGame{
    constructor(name,image_url, price, year_published, min_players, max_players, description){
        this.name=name;
        this.image_url=image_url;
        this.price=price;
        this.year_published=year_published;
        this.min_players=min_players;
        this.max_players=max_players;
        this.description=description;
    }
}