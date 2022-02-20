import React from 'react'
import { StyleCard } from './styles/Card.styled'
export default function Card({item:{id,title,body,image}}) {
  return (
    <StyleCard layout ={id%2===0 && 'row-reverse'}>
        <div>
            <h1>
                {title}
            </h1>
            <p>{body}</p>
        </div>
        <div>
            <img  src ={`./img/${image}`} alt='' />
        </div>
      
    </StyleCard>
  )
}
