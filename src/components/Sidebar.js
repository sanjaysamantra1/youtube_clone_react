import React from 'react'


import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCloudBolt, faTv, faRepeat, faVideo, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const menuFlag = useSelector((store)=>store.app.flag)

    return (
      <>
      {menuFlag ?  <div className='m-2'>
      <FontAwesomeIcon
              icon={faHouse}
              size="lg"
              className='mr-2 mb-4'
            /> 
          
          <FontAwesomeIcon
              icon={faCloudBolt}
              size="lg"
              className='mr-2 mb-4'
            /> 
         <FontAwesomeIcon
              icon={faTv}
              size="lg"
              className='mr-2 mb-4'
            />
            <FontAwesomeIcon
              icon={faRepeat}
              size="lg"
              className='mr-2 mb-4'
            />
       <FontAwesomeIcon
              icon={faVideo}
              size="lg"
              className='mr-2 mb-4'
            /> 
         <FontAwesomeIcon
              icon={faClock}
              size="lg"
              className='mr-2 mb-4'
            />
       <FontAwesomeIcon
              icon={faThumbsUp}
              size="lg"
              className='mr-2 mb-4'
            /> 
        </div> :
         <div className='m-2'>
         <span className='flex'><FontAwesomeIcon
              icon={faHouse}
              size="lg"
              className='mr-2 mb-4'
            /> Home </span>
          <span className='flex'><FontAwesomeIcon
              icon={faCloudBolt}
              size="lg"
              className='mr-2 mb-4'
            /> Shorts</span>
          <span className='flex'><FontAwesomeIcon
              icon={faTv}
              size="lg"
              className='mr-2 mb-4'
            /> Subscription</span>
            <hr/>
            <span className='flex mt-4'><FontAwesomeIcon
              icon={faRepeat}
              size="lg"
              className='mr-2'
            /> History</span>
        <span className='flex mt-4'><FontAwesomeIcon
              icon={faVideo}
              size="lg"
              className='mr-2'
            /> Your Videos</span>
         <span className='flex mt-4'><FontAwesomeIcon
              icon={faClock}
              size="lg"
              className='mr-2'
            /> Watch Later</span>
        <span className='flex mt-4'><FontAwesomeIcon
              icon={faThumbsUp}
              size="lg"
              className='mr-2'
            /> Liked Videos</span>
       </div>}
       </>
    )
}

export default Sidebar
