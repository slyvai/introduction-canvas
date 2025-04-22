import { useEffect, useRef } from 'react'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    console.log("Canvas ref:", canvasRef)
    const canvas = canvasRef.current

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.backgroundColor = '#bebebe'  

    const ctx = canvas.getContext('2d')
    
    ctx.beginPath()
    ctx.fillStyle = 'blue '
    ctx.strokeStyle = '#000000'
    ctx.rect(50, 50, 200, 200)
    ctx.fill()
    ctx.stroke()
    
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.strokeStyle = '#000000'
    ctx.arc(600, 150, 100, 0, Math.PI * 2, false)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.fillStyle = 'green'
    ctx.strokeStyle = '#000000'
    ctx.moveTo(1000, 250)
    ctx.lineTo(1000, 70)
    ctx.lineTo(1200, 250)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
}, [])

return <canvas ref={canvasRef} className="canvas" />
}

export default App
