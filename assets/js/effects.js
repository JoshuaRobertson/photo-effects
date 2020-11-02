// Select canvas & context
const canvas = document.getElementById('canvas')
const ctx    = canvas.getContext('2d')

// Create new image based on the image uploaded
const img         = new Image()
const reader      = new FileReader()
const imageLoader = document.getElementById('uploader')

// Upload image and draw to the canvas
function uploadImage (e) {
  reader.readAsDataURL(e.target.files[0])
  reader.onload = () => {
    img.src = reader.result
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
    }
  }
}

function greyscale () {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  // Loop over pixel data and increment by 4 (RGBA)
  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07
    data[i] = grey
    data[i + 1] = grey
    data[i + 2] = grey
  }

  ctx.putImageData(imageData, 0, 0)
}

function sepia () {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07
    data[i] = grey + 95
    data[i + 1] = grey + 58
    data[i + 2] = grey
  }

  ctx.putImageData(imageData, 0, 0)
}

function invert () {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]
    data[i + 1] = 255 - data[i + 1]
    data[i + 2] = 255 - data[i + 2]
  }

  ctx.putImageData(imageData, 0, 0)
}

function rbg () {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const green = data[i + 1]

    data[i] = data[i]
    data[i + 1] = data[i + 2]
    data[i + 2] = green
  }

  ctx.putImageData(imageData, 0, 0)
}

function bgr () {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i]

    data[i] = data[i + 2]
    data[i + 1] = data[i + 1]
    data[i + 2] = red
  }

  ctx.putImageData(imageData, 0, 0)
}

function gbr () {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i]

    data[i] = data[i + 1]
    data[i + 1] = data[i + 2]
    data[i + 2] = red
  }

  ctx.putImageData(imageData, 0, 0)
}

function grb () {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i]

    data[i] = data[i + 1]
    data[i + 1] = red
    data[i + 2] = data[i + 2]
  }

  ctx.putImageData(imageData, 0, 0)
}

// Add effects to image on click
document.querySelectorAll('button')[0].addEventListener('click', greyscale)
document.querySelectorAll('button')[1].addEventListener('click', sepia)
document.querySelectorAll('button')[2].addEventListener('click', invert)
document.querySelectorAll('button')[3].addEventListener('click', rbg)
document.querySelectorAll('button')[4].addEventListener('click', bgr)
document.querySelectorAll('button')[5].addEventListener('click', gbr)
document.querySelectorAll('button')[6].addEventListener('click', grb)

imageLoader.addEventListener('change', uploadImage)
