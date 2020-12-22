import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

// custom hook
const useVideos = (defaultSearchTerm) => {
    const[videos, setVideos] = useState([]);

     //useEffect function similar to componentDidMount() lifecycle method
    useEffect(() => {
       search(defaultSearchTerm); 
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);        
    };

    return [videos, search];

};

export default useVideos;