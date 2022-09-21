import React from 'react'
import SearchBar from './SearchBar'

const RightSideBar = () => {
    return (
        <div className='flex flex-col w-3/12 h-screen bg-white border-l shadow-md '>
            <SearchBar />
        </div>
    )
}

export default RightSideBar
