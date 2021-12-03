export default class Card {

    name: String;

    description: String;

    coverImageUrl: String;

    constructor(name: String = new String(),
                description: String = new String(),
                coverImageUrl: String = new String()) {
        this.name = name;
        this.description = description;
        this.coverImageUrl = coverImageUrl;
    }
	
}
