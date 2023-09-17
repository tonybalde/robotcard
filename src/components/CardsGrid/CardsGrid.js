import React from 'react'
import Card from './Card'

function CardsGrid({ robots, robotsNames, onClick }) {
  return (
    <div className='cards'>
      {robotsNames.map((robot, index) => {
        return <Card key={index} title={robot} image={robots[robot]} onClick={onClick} />
      })}
    </div>
  )
}

export default CardsGrid
