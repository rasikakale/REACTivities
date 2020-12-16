import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    // this is run when text prop changes
    useEffect(() => {
        const timerId = setTimeout(() => {
            //update debouncedText to current piece of text state
            setDebouncedText(text);
        }, 500);

        //if text changes, cancel timer
        return () => {
            clearTimeout(timerId);
        };

    }, [text]);

    //only ran when debouncedText changes
    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                },
            } 
        );
        // first data is info from axios
        // second data is actual response data
        setTranslated(data.data.translations[0].translatedText);
    };
        doTranslation();
       
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;