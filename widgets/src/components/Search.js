import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('programming');

    const [debouncedTerm, setDebouncedTerm] = useState(term);

    const [results, setResults] = useState([]);

    // runs anytime term changes
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    // only run when first component is rendered or when debounced term is changed
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    origin: '*',
                    list: 'search',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });

            setResults(data.query.search);
        };
        if(debouncedTerm) {
            search();
        }
        
    }, [debouncedTerm]);
   
    
    useEffect(() => {
        // console.log("initial render or term was changed");

        // return () => {
        //     console.log("cleanup");
        // };
        /*
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    origin: '*',
                    list: 'search',
                    srsearch: term,
                    format: 'json',
                },
            });

            setResults(data.query.search);
        };
        */

        // searching on initial render
        /*
        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);
            
            return () => {
                clearTimeout(timeoutId);
            };
        }
        */

        
        // dependency array
    }, [term, results.length]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header"> 
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>

        ); 
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;