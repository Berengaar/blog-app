import React from 'react'
import ArticleCardContent from './ArticleCardContent'
import ArticleCardFooter from './ArticleCardFooter'
import ArticleCardHeader from './ArticleCardHeader'

const ArticleCard = () => {
    return (
        <div className='h-56 border-b '>
            <ArticleCardHeader />
            <ArticleCardContent />
        </div>
    )
}

export default ArticleCard
