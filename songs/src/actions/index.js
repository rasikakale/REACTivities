// Action Creator
export const selectSong = (song) => {
    // return action object
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

