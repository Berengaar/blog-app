import React from 'react'
import ArticleCardFooter from './ArticleCardFooter'

const ArticleCardContent = () => {
    return (
        <>
            <div className='flex mt-10 h-28 items-center overflow'>
                <div>
                    <h1 className=' text-2xl font-bold'>Node.js is Dead. — Long Live Bun.</h1>
                    <p className=' overflow-ellipsis overflow-hidden h-24 my-3 text-md'>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers?Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers?
                    </p>
                    <ArticleCardFooter />
                </div>
                <img className='w-28 h-28 float-right' src={process.env.PUBLIC_URL + "images/CardContent.jpeg"} />

            </div>
        </>
    )
}

export default ArticleCardContent
