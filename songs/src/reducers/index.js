import {combineReducers} from 'redux';

// list of songs 
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:30'},
        { title: 'I want it that Way', duration: '1:45'}
    ];
};

// selecting a song in the list
const selectSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});