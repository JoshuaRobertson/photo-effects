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

function change () {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  // Loop over pixel data and increment by 4 (RGBA)
  for (let i = 0; i < data.length; i += 4) {
    data[i]
    data[i + 1]
    data[i + 2]
  }

  ctx.putImageData(imageData, 0, 0)
}

document.querySelectorAll('button')[0].addEventListener('click', change)

imageLoader.addEventListener('change', uploadImage)
