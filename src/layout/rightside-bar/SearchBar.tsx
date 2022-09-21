import React from 'react'

const SearchBar = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='flex border p-2 rounded-full gap-2'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="rgba(8, 8, 8, 1)"><path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path></svg>
                <input className='w-full outline-none' type="text" placeholder='Search' />
            </div>

        </div>
    )
}

export default SearchBar
