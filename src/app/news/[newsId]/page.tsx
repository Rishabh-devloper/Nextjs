import React from 'react'

const News = async ({ params, searchParams }: {
    params: Promise<{ newsId: string }>,
    searchParams: Promise< { cat: string }>
}) => {

    const { newsId } = (await params)
    const cat  = (await searchParams)
    console.log(cat)
    return (
        <div>News {newsId}</div>
    )
}

export default News