function setup (){
    createCanvas(1920, 1080)
    background (31, 13, 104)
    fill ('white')
    frameRate (60)
}

function draw(){
    textAlign (CENTER, CENTER)
    text(song[1], 600, 600)
    text(artist[1], 600, 620)
}