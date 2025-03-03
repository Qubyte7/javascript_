import React from 'react'

const Search = ({searchTerm,setsearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="/search.png" alt="search icon"/>
                <input type="text" placeholder="Search for Movies ..." value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}/>
            </div>
        </div>
    )
}
export default Search
