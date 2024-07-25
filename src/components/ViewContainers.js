import React, {useEffect} from 'react'
import VideoCard from './VideoCard'
import {useVideos} from '../utils/useVideos'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchVideos} from '../utils/Slice/appSlice'

function ViewContainers() {

  const dispatch =  useDispatch()
  const videoArray = useSelector((store)=>store.app.videos)

  useEffect(()=>{
    dispatch(fetchVideos())
  },[])


    return <div className="flex flex-wrap m-5">
     {videoArray?.map(videoo => 
      <div key = {videoo.id} className="m-5 w-72 shadow-lg" >
        <Link to = {"/watch?v="+videoo.id}>  <VideoCard info = {videoo}/> </Link>
      </div>
     )
     }
    </div>
}

export default ViewContainers