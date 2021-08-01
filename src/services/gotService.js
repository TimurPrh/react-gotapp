export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResourse = async (url) => {
        // const res = await fetch(url);
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResourse('/characters?page=70&pageSize=10');
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const res = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(res)
    }
    getAllHouses = async () => {
        const res = await this.getResourse(`/houses?page=20&pageSize=10`);
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const res = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(res)
    }
    getAllBooks = async () => {
        const res = await this.getResourse(`/books?page=1&pageSize=10`);
        return res.map(this._transformBook)
    }
    getBook = async (id) => {
        const res = await this.getResourse(`/books/${id}`);
        return this._transformBook(res)
    }
    _transformCharacter(char) {
        const id = char.url.split('/', 10)[5];
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
            url: char.url,
            id: id
        }
    }
    _transformHouse(house) {
        const id = house.url.split('/', 10)[5];
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
            id: id
        }
    }
    _transformBook(book) {
        const id = book.url.split('/', 10)[5];
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
            id: id
        }
    }
}
