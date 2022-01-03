import React from 'react'

const Container = () => {

  const renderChildrenView = (item, index) => {
    return (
      <div className='contentBox' key={index}>
        <div className='cardBox'>
          <div
            style={{backgroundImage:`url(${item.image})`}}
            >
               
            </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      
    </div>
  )
}

export default Container
