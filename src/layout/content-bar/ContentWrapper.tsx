import React from 'react'
import { Outlet } from 'react-router-dom'
import ContentTop from './ContentTop'

const ContentWrapper = () => {
    return (
        <div className='flex flex-col w-8/12 h-screen bg-white border-l shadow-md'>
            <div className='mx-auto w-10/12 bg-white h-screen'>
                <ContentTop />
                <Outlet />
            </div>
        </div>
    )
}

export default ContentWrapper
