import React from 'react'

const ArticleCardHeader = () => {
    return (
        <div>
            <div className='flex gap-2 items-center mt-3'>
                <img className='w-7 h-7 border rounded-full p-1' src={process.env.PUBLIC_URL + "images/User.png"} />
                <p className='text-sm  font-semibold '>Emirhan Avcı</p>
                <p className='text-xs text-gray-500 font-semibold'>Jul 27</p>
            </div>
        </div>
    )
}

export default ArticleCardHeader
