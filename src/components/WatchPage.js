import React from 'react'
import {useSearchParams} from 'react-router-dom'

function WatchPage() {
    const [searchParams] = useSearchParams()
   
    return (
        <div>
            <iframe width="1000" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
        </div>
    )
}

export default WatchPage
