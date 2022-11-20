import {heroes} from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
    const valPublishers = ['DC Comics','Marvel Comics'];
    if(!valPublishers.includes(publisher)){
        throw new Error(`${publisher} in not vali publisher`)
    }
    return heroes.filter(heroe=>heroe.publisher === publisher);
}
