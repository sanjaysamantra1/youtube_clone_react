import React from 'react'
import CategoryButton from './CategoryButton'
import ViewContainer from './ViewContainers'

const MainContainer = () => {
    return (
        <div className='ml-10 mt-5'>
           <CategoryButton/>
           <ViewContainer/>
        </div>
    )
}

export default MainContainer