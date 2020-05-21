import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
 
export default () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={1500}
      height={height}
      style={{overflow:'none'}}
      numberOfPieces={500}    />
  )
}
 