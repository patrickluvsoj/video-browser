import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultTerm);
    }, [defaultTerm]);


    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            },
            header: {
                referer: 'https://modest-mcnulty-2bbe42.netlify.app/'
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search ];
};

export default useVideos;