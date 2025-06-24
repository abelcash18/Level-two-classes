//canvas
 let canvas = document.getElementById('canvas')
 let penBrush = canvas.getContext('2d') 


//  console.log(penBrush)

//  penBrush.moveTo(50,30)
//  penBrush.lineTo(250,30)


//  penBrush.moveTo(50,30)
//  penBrush.lineTo(50,100)

//  penBrush.moveTo(50,100)
//  penBrush.lineTo(250,100)

//   penBrush.moveTo(250,30)
//  penBrush.lineTo(250,100)


//  penBrush.strokeStyle = '#ff9900'
//  penBrush.stroke()


document.getElementById('canvas').addEventListener('mousedown', (event)=>{
    console.log("mouse is down")
    console.log(event.x)
     console.log(event.y)

     sx = event.x
     sy = event.y

    penBrush.moveTo(sx, sy)

})


document.getElementById('canvas').addEventListener('mouseup', (event)=>{
    console.log("mouse is up")
     console.log(event.x)
     console.log(event.y)


     ex = event.x
     ey = event.y

     width = ex - sx
     height = ey -sy
     penBrush.strokeStyle = 'yellow'

    penBrush.strokeRect(sx,sy, width, height)

    penBrush.stroke()
})
