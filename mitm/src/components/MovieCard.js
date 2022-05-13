import React from "react";

const MovieCard = (props) => {
    return (
        <div>
            <div className="header">{props.title}</div>
            <img className={'ui image rounded'} src={`https://image.tmdb.org/t/p/w154/${props.imagePath}`} />
        </div>
    )
}

export default MovieCard;