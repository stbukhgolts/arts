import React from 'react'
import Button from '../../Button/Button'
import './article.scss'

const Article = ({data}) => {
  return (
    <div className='article'>
      <img className='atricle__image' src={data.img} alt={data.alt}/>
      <h3 className='article__header'>{data.header}</h3>
      <p>{data.text}</p>
      <Button text={data.button}/>
    </div>
  )
}

export default Article
