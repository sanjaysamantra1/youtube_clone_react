import {useEffect, useState} from 'react'
import {VIDEO_API} from './constant'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setVideos} from './Slice/appSlice'

export const useVideos = () => {
    const [videoInfo, setVideoInfo] = useState()
    const dispatch =  useDispatch()

     const getApiData = async() => {
         try{
            const res = await axios.get(VIDEO_API)
            const items = res?.data?.items
            setVideoInfo(items)
            dispatch(setVideos(items))
         }
         catch(err){
            console.error(err)
         }
     
    }
    useEffect(() => {
       getApiData()
       
    }, [])

    // const updateVideoInfo = (newVideoInfo) => {
    //     setVideoInfo(newVideoInfo);
    // };

    return { videoInfo, setVideoInfo };
}

