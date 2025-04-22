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
    ctx.lineWidth = 5
    ctx.rect(50, 50, 50, 50)
    ctx.fill()
    ctx.stroke()
    
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.arc(160, 80, 40, 0, Math.PI * 2, false)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.fillStyle = 'green'
    ctx.moveTo(240, 40)
    ctx.lineTo(340, 140)
    ctx.lineTo(240, 140)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
}, [])

return <canvas ref={canvasRef} className="canvas" />
}

export default App
