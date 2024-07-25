import React from 'react'

function CategoryButton() {
    const buttonList = ["All", "Dance", "Comedy", "Music", "Javascript", "Computer Science", "Javascript", "Computer Science", "Computer Science", "Javascript", "Mutual Funds", "News", "Live"]
    return (
      <div className='overflow-x-auto whitespace-nowrap'>
       {buttonList.map(item=>
        <button key={item.index} className="inline-block bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded mr-5">
          {item}
        </button>
       ) }
      </div>
    );
}

export default CategoryButton
