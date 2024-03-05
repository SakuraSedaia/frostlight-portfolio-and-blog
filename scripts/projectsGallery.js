/*
#
# This entire Document is a piece of shit, needs heavy optimization. 
#
# ONLY EDIT IF YOU KNOW WHTA THE HELL YOU'RE DOING!!!
#
*/
// HTML DOM Reference
const body = document.getElementsByTagName('body')[0]
const collage = document.getElementById('collage')
// Teaser Photo Gallery
const imgDir = "assets/images/beginnings_tesers/"

// Settings
var maxImgWidth = 30 // Measured using CSS "em" unit
var maxImgHeight = 15 // Measured using CSS "em" unit
let roundAspectTo = 3 // Rounds to this place away from the Decimal, 1 = Tenth, 2 = Hundredth, 3 = Thousandth, and so on

// Setup Variables
var imgPath
var tempImage
var imgWidth
var imgTempWidth
var imgTempWidth2
var imgHeight
var imgTempHeight
var imgAspect
var imgFinalHeight
var collageItem
var collageLabelContain
var collageHeader
var collagePara
var multiplier = 10 ** roundAspectTo
let varColor = "color:yellow;" // For Console Debugging only
var imgStore = []

// Create Gallery Objects
var i = 0
function projectGal() {
    if (i < imgList.length) {
        console.info(i)
        // Import Images
        imgPath = imgDir + imgList[i][0] // Retrieves Image Directory
        tempImage = new Image() // Creates new Temporary Image to grab Values from
        tempImage.src = imgPath // Assigns path determined by imgPath

        // Create Elements
        collageItem = document.createElement('div') // Create Container Element
        collageItem.classList.add('gallery-item') // Assign Container Class
        collage.appendChild(collageItem) // Append new Container to Collage
        collageItem.setAttribute('onclick', 'window.open("' + imgPath + '")') // Sets the responsive click attribute to open file

        imgStore.push(collageItem)
        if (imgList[i][1] == 1) { // Create Label Elements (if noted on Image entry in imgList)
            collageLabelContain = document.createElement('div') // Create Label Container Element
            collageLabelContain.classList.add('label') // Assign class 'label'
            collageItem.appendChild(collageLabelContain) // Append Label container to collageItem container
            collageHeader = document.createElement('h2') // Create Label Header
            collageLabelContain.appendChild(collageHeader) // Append Header to Label Container
            collageHeader.innerText = imgList[i][2] // Assign Text to string determined by imgList
            collagePara = document.createElement('p') // Create Label Description
            collageLabelContain.appendChild(collagePara) // Append Descriptor to Label Container
            collagePara.innerText = imgList[i][3] // Assign Text to string determined by imgList
        }
        // Determine Image Dimensions and set Element Dimensions
        setTimeout(() => { // Timeout to allow time for the Image to load


            imgHeight = 200 // Sets final element height in decimal form, final result in Pixels


            imgAspect = Math.round(((tempImage.width / tempImage.height) * multiplier)) / multiplier // Determine Image Aspect Ratio
            imgWidth = Math.round(((imgHeight * imgAspect) * multiplier)) / multiplier // Sets the actual Width in decimal format

            console.log("Source Image Width = %c" + tempImage.width + "px", varColor) // Debug purposes only
            console.log("Source Image Height = %c" + tempImage.height + "px", varColor) // Debug purposes only
            console.log("Source Aspect Ratio = %c" + imgAspect + " : 1", varColor) // Debug purposes only

            // Set Image Properties
            // Set Final Image Width
            console.log("Div Width = %c" + imgWidth + "px", varColor) // Debug purposes only

            console.log("Div Height = %c" + imgHeight + "px", varColor) // Debug purposes only

            // Apply Image Properties to Document
            collageItem.style.width = imgWidth + "px" // Sets Element Width
            collageItem.style.flexBasis = imgWidth + "px" // Sets Element Flex Basis
            collageItem.style.minWidth = imgWidth + "px" // Sets Element Minimum Width
            collageItem.style.height = imgHeight + "px" // Sets Element Height
            collageItem.style.backgroundImage = "url('" + imgPath + "')"

            if (collageItem.style.width != (imgWidth + "px")) { // Debug purposes only, checks to ensure Img Width was set accordingly
                console.error("Final Div Width does not match with width of %c" + imgList[i][0], varColor);
            }


            console.groupEnd(imgList[i][0]) // Debug Only

            i = i + 1 // DO NOT DELETE, WILL BREAK SITE

            var x = 0
            if (i == imgList.length) {
                while (x < imgList.length) {
                    imgStore[x].style.opacity = "100%"
                    x++
                }
            }
            projectGal()
        }, 100)

    }

}
projectGal()