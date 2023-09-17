import React, { useState, useEffect } from 'react'
import CardsGrid from './CardsGrid/CardsGrid'
import elliot from '../assets/1-elliot.png'
import mrrobot from '../assets/2-mr-robot.png'
import darlene from '../assets/3-darlene.png'
import tyrell from '../assets/4-tyrell.png'
import angela from '../assets/10-angela.png'
import phillip from '../assets/5-phillip.png'
import dominique from '../assets/6-dominique.png'
import whiterose from '../assets/7-whiterose.png'
import joanna from '../assets/8-joanna.png'
import elliotfamily from '../assets/9.elliotfamily.png'

function Main() {
  const ROBOTS = {
    'Elliot Alderson': elliot,
    'Mr Robot': mrrobot,
    'Darlene': darlene,
    'Tyrell Wellick': tyrell,
    'Angela Moss': angela,
    'Phillip Price': phillip,
    'Dominique DiPierro': dominique,
    'Whiterose': whiterose,
    'Joanna Wellick': joanna,
    "Elliot's Family": elliotfamily,
  }
  const [robotsNames, setRobotsNames] = useState(Object.keys(ROBOTS))
  const [clickedRobots, setClickedRobots] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const shuffleCards = () => {
    const shuffleCards = [...robotsNames]

    for (let i = shuffleCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let temp = shuffleCards[randomIndex]
      shuffleCards[randomIndex] = shuffleCards[i]
      shuffleCards[i] = temp
    }

    setRobotsNames(shuffleCards)
  }

  const handleCardClick = robot => {
    if (clickedRobots.includes(robot)) {
      resetScore()
    } else {
      updateScore()
      setClickedRobots([...clickedRobots, robot])
    }
  }

  const updateScore = () => {
    setCurrentScore(currentScore + 1)
    if (currentScore >= bestScore) {
      setBestScore(currentScore + 1)
    }
  }

  const resetScore = () => {
    setCurrentScore(0)
    setClickedRobots([])
  }

  useEffect(shuffleCards, [currentScore])

  return (
    <main className='main'>
      <div className='score'>
        <div className='current'>Current Score: {currentScore}</div>
        <div className='best'>Best Score: {bestScore}</div>
      </div>
      <CardsGrid robots={ROBOTS} robotsNames={robotsNames} onClick={handleCardClick} />
    </main>
  )
}

export default Main
