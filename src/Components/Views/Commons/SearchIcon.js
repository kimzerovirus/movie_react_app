import React from 'react'

function SearchIcon() {
    return (
        <div className="search-icon">
            <a href="/search">
                <img src={`${process.env.PUBLIC_URL}/search_icon.svg`} alt="" />
            </a>
        </div>
    )
}

export default SearchIcon
