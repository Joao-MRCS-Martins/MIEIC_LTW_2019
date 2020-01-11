let item_images = document.querySelectorAll('#photos ul li img')
item_images.forEach(image => {
  image.addEventListener('click',() => {
    let img_src = image.src.replace(/^.*\//,'')
    let img_large = document.querySelector('#photos .large')
    img_large.src = 'large/' + img_src
  })
})