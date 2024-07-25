import React from 'react'

function VideoCard({info}) {
   
    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet
    // const { viewCount, publishedAt } = statistics
    
    return <div>
     <img src={ thumbnails.medium.url }/>
    <div>{title}</div>
    <div>{channelTitle}</div>
    {/* <div>
        <span>{viewCount}</span>
        <span>{publishedAt}</span>
    </div> */}
    </div>
}

export default VideoCard