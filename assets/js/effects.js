const canvas = document.getElementById('canvas')
const ctx    = canvas.getContext('2d')

const img = new Image()
const imgPath = 'assets/img/'

// Drawing to the canvas with a default image
img.src = `${imgPath}bridge.jpg`
img.onload = () => {
  canvas.width = img.width
  canvas.height = img.height
  ctx.drawImage(img, 0, 0)
}
