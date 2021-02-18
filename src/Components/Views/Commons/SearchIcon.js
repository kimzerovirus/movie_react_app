import React from 'react'
import { Link } from 'react-router-dom'

function SearchIcon() {
    return (
        <div className="search-icon">
            {/* <a href={`${process.env.PUBLIC_URL}`}> */}
            <Link to="/search">
                <img src={`${process.env.PUBLIC_URL}/search_icon.svg`} alt="" />
            </Link>
            {/* </a> */}
        </div>
    )
}

export default SearchIcon
