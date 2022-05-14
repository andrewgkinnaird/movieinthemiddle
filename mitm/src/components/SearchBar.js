import React, { useState } from "react";

const RenderList = (props) => {
    const renderedList = props.list.map((result)=>{
        return <li key={result}>{result}</li>
    });

    return (
        <div><ul>
            {renderedList}
            </ul>
        </div>
        
    )
}

const SearchBar = (props) => {
    const moviesList = props.list;
    const [results,setResults] = useState([]);
    
    const searchList = (str) => {
        const list = [];
        moviesList.forEach(element => {
            
            if(element.toLowerCase().includes(str.toLowerCase())){
                list.push(element);
            }       
        });

        setResults(list)
    }

    
    return (
        <div className="ui search">
            <input onChange={(e) => {searchList(e.target.value)} } className="prompt" type="text" placeholder="Movie name ..."/>
            <div style={ {display:'inline'} } className="results"><RenderList list={results}/></div>
        </div>
    )
    
}

export default SearchBar;