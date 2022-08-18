import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
const Home = () => {
    const [gifs, gifLoader] = useState()
    useEffect(() => {
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f').then((res) => {
            gifLoader(res.data.data)
        })
    }, [])
    const [input, InputController] =useState('')
    const searchGifs = () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f&q=${input}`).then((res) => {
            gifLoader(res.data.data)
        })
    }
    useEffect(() => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f&q=${input}`).then((res) => {
            gifLoader(res.data.data)
        })
    }, [input])
    return (
        <div id="home">
            <input type="text" onChange={(e) => InputController(e.target.value)}/>
            <button type='button' onClick={() => searchGifs()}>search</button> 
            {gifs? (
                gifs.map(gif => {
                    return (
                        <div key={gif.id}> 
                            <img  src={gif.images['original'].url} alt="" />
                        </div>
                    )
                })
            ) : <p>no gifs to display</p>}
        </div>
    );
}

export default Home;

