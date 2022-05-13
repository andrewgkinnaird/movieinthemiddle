import React, { useEffect, useState } from "react";
import axios from 'axios';
import MovieCard from "./MovieCard";

const MovieDB = () => {
    
    const [question, setQuestion] = useState({
        movie1Title:'Robin Hood',
        movie2Title:'Pulp Fiction',
        answerTitle: 'Die Hard',
        movie1ImagePath: '/hbRnWUNJkKKVN5mkcuC5ooqjE4e.jpg',
        movie2ImagePath: '/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg',
        answerImagePath: '/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg'
    });

    const [showAnswer, setShowAnswer] = useState(false);


    useEffect(()=>{
        const search = async () => {
        
            const response = await axios.get('https://api.themoviedb.org/3/movie/562?api_key=a0097d4675a0e934b13e4034442ca639&language=en-US');
           // const config = await axios.get('https://api.themoviedb.org/3/configuration?api_key=a0097d4675a0e934b13e4034442ca639');
            //setMovieTitle1(response.data);
        }
        
        search(); 
    },[])

    
    
    
    return (
        <div className="ui segment">
            <div className="ui three column grid">
                <div className="five wide column">
                    <div className={'ui raised segment'}>
                        <MovieCard imagePath={question.movie1ImagePath} title={question.movie1Title}/>
                    </div>
                </div>
                
                
                {!showAnswer 
                    ? 
                    <div className="five wide column">
                        <div className={'ui raised segment'}>
                            <div className="header">Guess the Movie!!</div>
                            <img className={'ui image rounded'} src={``} width={'154px'} height='251px' />
                        </div>
                    </div>
                    : <div className="five wide column">
                            <div className={'ui raised segment'}>
                            <MovieCard imagePath={question.answerImagePath} title={question.answerTitle}/>
                        </div>
                    </div>
                }

               
                
                <div className="five wide column">
                    <div className={'ui raised segment'}>
                        <MovieCard imagePath={question.movie2ImagePath} title={question.movie2Title}/>
                    </div>
                </div>
                

                <br/>
                
            </div>
            <button className={'ui button'} onClick={()=>{if(showAnswer) setShowAnswer(false); else setShowAnswer(true)}}>Click Me</button>
        </div>
    )
}

export default MovieDB;