//AIzaSyCfcNixMSMFag5sslJqEyuhGapVw-0JbP4
import axios from "axios";

const KEY = 'AIzaSyCfcNixMSMFag5sslJqEyuhGapVw-0JbP4';
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistitems'

export const getVideo = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY,
    }
});

export default getVideo;

/*
async function getToken() {
    const respToken = await fetch('https://fe08-films.herokuapp.com/auth', {
        headers: {
            'Content-type': 'application/json'
        },
        method: "POST",
    });
    return await respToken.text();
}

export async function getFilmsList() {
    let token = JSON.parse(await getToken());
    const respfilmsList = await fetch('https://fe08-films.herokuapp.com/films', {
        headers: {
            'Autorization': `Beare ${token.token}`
        },
        method: "GET",
    });
    const newfilms = await respfilmsList.json();      
    let films = Array.from(newfilms.films);    
    if (localStorage.getItem('allFilms') === null) {
        localStorage.setItem('allFilms', JSON.stringify(films));
    }     
    return films;
}
*/
