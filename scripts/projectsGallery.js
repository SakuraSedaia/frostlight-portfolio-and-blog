// HTML DOM Reference
const body = document.getElementsByTagName('body')[0]
const collage = document.getElementById('collage')
// Teaser Photo Gallery
const imgDir = "assets/images/beginnings_tesers/"


// Settings
var maxImgWidth = 30 // Measured using CSS "em" unit
var maxImgHeight = 15 // Measured using CSS "em" unit

// Setup Variables
var imgPath
var tempImage
var imgWidth
var imgTempWidth
var imgTempWidth2
var imgHeight
var imgTempHeight
var imgAspect
var collageItem
var collageLabelContain
var collageHeader
var collagePara

// Create Gallery Objects
var i = 0
while (i < imgList.length) {
    // Find and Set Image
    imgPath = imgDir + imgList[i][0]

    // Import Images
    tempImage = new Image()
    tempImage.src = imgPath

    // Create Elements
    collageItem = document.createElement('div')
    collageItem.classList.add('gallery-item')
    collage.appendChild(collageItem)
    collageItem.setAttribute('onclick', 'window.open("' + imgPath + '")')

    if (imgList[i][1] == 1) {
        collageLabelContain = document.createElement('div')
        collageLabelContain.classList.add('label')
        collageItem.appendChild(collageLabelContain)

        collageHeader = document.createElement('h2')
        collageLabelContain.appendChild(collageHeader)
        collageHeader.innerText = imgList[i][2]

        collagePara = document.createElement('p')
        collageLabelContain.appendChild(collagePara)
        collagePara.innerText = imgList[i][3]
    }

    // Determine Image Dimensions and set Element Dimensions
    imgTempWidth = tempImage.width
    imgTempHeight = tempImage.height
    imgAspect = imgTempWidth / imgTempHeight
    imgTempWidth2 = (200 * imgAspect)
    // Set Image Properties
    imgHeight = "200px"
    imgWidth = imgTempWidth2.toString() + "px"

    // Apply Image Properties to Document
    collageItem.style.width = imgWidth
    collageItem.style.flexBasis = imgWidth
    collageItem.style.minWidth = imgWidth
    collageItem.style.height = imgHeight
    collageItem.style.backgroundImage = "url('" + imgPath + "')"

    tempImage.remove()


    i++ // DO NOT DELETE, WILL BREAK SITE
}

