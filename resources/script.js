function preload() {
    regularFont = loadFont ('resources/assets/pf_tempesta_seven.ttf')
    boldFont = loadFont ('resources/assets/pf_tempesta_seven_extended_bold.ttf')
}

function setup (){
    createCanvas(1920, 1080);
    // background (31, 13, 104); BLUE BACKGROUND
    background (0,0,0,0)
    fill ('white');
    frameRate (60);
}

let segmentPosition = 0;
let transitionTime = 0;
let transitionEvent = false;
let xPos = [960, 1520, 2080, 2640, 3200, 3760, 4320, 4880, 5440, 6000, 6560, 7120, 7680, 8240, 8800, 9360, 9920, 10480, 11040, 11600, 12160, 12720, 13280, 13840, 14400, 14960, 15520, 16080, 16640, 17200, 17760, 18320];
let fontSize = [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
let fromWhite = 255;
let fromGrey = 169;
let stopStart = 1;
let accelerate = 1;
let decelerate = 20;
let segmentIncrease = true;

/* 
POSITIONS

X Spots
    Left: 400
    Center: 960
    Right: 1520

Y Spots
    Segment: 980
    Song: 960
    Artist: 1000
*/

function draw(){


    createCanvas(1920, 1080);
    // background (31, 13, 104); BLUE BACKGROUND
    background (0,0,0,0)

    // Same text options for all
    textAlign (CENTER, CENTER);
    textSize (25);
    fill (255);

    // Static Text
    textFont (boldFont);
    text ('Just Played', 400, 920);
    text ('Now Playing', 960, 920);
    text ('Up Next', 1520, 920);

    // Dynamic Text All Options
    textFont (regularFont);

    // Adjust the font size so no overlap
    // textSize(fontSize[0])
    // if (textWidth(segment[0]) > 328){
    //     fontSize[0] = fontSize[0] - 0.05
    // }
    // textSize = 25
    // if (textWidth(segment[1]) > 328){
    //     fontSize[1] = fontSize[1] - 0.05
    // }
    // textSize = 25
    // if (textWidth(segment[2]) > 328){
    //     fontSize[2] = fontSize[2] - 0.05
    // }
    // textSize = 25
    

    // Starting Soon

    if (segmentPosition == 0){
        fill (255)
    } else if (segmentPosition == 1){
        fill (fromWhite)
    } else {
        fill (169)
    }

    text (segment[0], xPos[0], 980);

    // Segment 1

    if (segmentPosition == 1){
        fill (fromGrey)
    } else if (segmentPosition == 2){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[1])
    text (segment[1], xPos[1], 980);

    // Song 1

    if (segmentPosition == 2){
        fill (fromGrey)
    } else if (segmentPosition == 3){
        fill (fromWhite)
    } else {
        fill (169)
    }


    textSize(fontSize[2])
    text(song[1], xPos[2], 960);

    textSize(fontSize[3])
    text(artist[1], xPos[2], 1000);

    // Song 2

    if (segmentPosition == 3){
        fill (fromGrey)
    } else if (segmentPosition == 4){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[4])
    text(song[2], xPos[3], 960);

    textSize(fontSize[5])
    text(artist[2], xPos[3], 1000);

    // Segment 2

    if (segmentPosition == 4){
        fill (fromGrey)
    } else if (segmentPosition == 5){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[6])
    text (segment[2], xPos[4], 980);

    // Song 3

    if (segmentPosition == 5){
        fill (fromGrey)
    } else if (segmentPosition == 6){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[7])
    text(song[3], xPos[5], 960);

    textSize(fontSize[8])
    text(artist[3], xPos[5], 1000);

    // Song 4

    if (segmentPosition == 6){
        fill (fromGrey)
    } else if (segmentPosition == 7){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[9])
    text(song[4], xPos[6], 960);

    textSize(fontSize[10])
    text(artist[4], xPos[6], 1000);

    // Segment 3

    if (segmentPosition == 7){
        fill (fromGrey)
    } else if (segmentPosition == 8){
        fill (fromWhite)
    } else {
        fill (169)
    }

    text (segment[3], xPos[7], 980);

    // Song 5

    if (segmentPosition == 8){
        fill (fromGrey)
    } else if (segmentPosition == 9){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[11])
    text(song[5], xPos[8], 960);

    textSize(fontSize[12])
    text(artist[5], xPos[8], 1000);

    // Song 6

    if (segmentPosition == 9){
        fill (fromGrey)
    } else if (segmentPosition == 10){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[13])
    text(song[6], xPos[9], 960);

    textSize(fontSize[14])
    text(artist[6], xPos[9], 1000);

    // Segment 4

    if (segmentPosition == 10){
        fill (fromGrey)
    } else if (segmentPosition == 11){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[15])
    text (segment[4], xPos[10], 980);

    // Song 7

    if (segmentPosition == 11){
        fill (fromGrey)
    } else if (segmentPosition == 12){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[16])
    text(song[7], xPos[11], 960);

    textSize(fontSize[17])
    text(artist[7], xPos[11], 1000);

    // Song 8

    if (segmentPosition == 12){
        fill (fromGrey)
    } else if (segmentPosition == 13){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[19])
    text(song[8], xPos[12], 960);

    textSize(fontSize[20])
    text(artist[8], xPos[12], 1000);

    // Segment 5

    if (segmentPosition == 13){
        fill (fromGrey)
    } else if (segmentPosition == 14){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[21])
    text (segment[5], xPos[13], 980);

    // Song 9

    if (segmentPosition == 14){
        fill (fromGrey)
    } else if (segmentPosition == 15){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[22])
    text(song[9], xPos[14], 960);
    text(artist[9], xPos[14], 1000);

    // Song 10

    if (segmentPosition == 15){
        fill (fromGrey)
    } else if (segmentPosition == 16){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[23])
    text(song[10], xPos[15], 960);

    textSize(fontSize[24])
    text(artist[10], xPos[15], 1000);

    // Segment 6

    if (segmentPosition == 16){
        fill (fromGrey)
    } else if (segmentPosition == 17){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[24])
    text (segment[6], xPos[16], 980);

    // Song 11

    if (segmentPosition == 17){
        fill (fromGrey)
    } else if (segmentPosition == 18){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[25])
    text(song[11], xPos[17], 960);
    text(artist[11], xPos[17], 1000);

    // Song 12

    if (segmentPosition == 18){
        fill (fromGrey)
    } else if (segmentPosition == 19){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[25])
    text(song[12], xPos[18], 960);
    text(artist[12], xPos[18], 1000);

    // Segment 7

    
    if (segmentPosition == 19){
        fill (fromGrey)
    } else if (segmentPosition == 20){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[26])
    text (segment[7], xPos[19], 980);

    // Song 13

    if (segmentPosition == 20){
        fill (fromGrey)
    } else if (segmentPosition == 21){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[27])
    text(song[13], xPos[20], 960);

    textSize(fontSize[28])
    text(artist[13], xPos[20], 1000);

    // Song 14

    if (segmentPosition == 21){
        fill (fromGrey)
    } else if (segmentPosition == 22){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[29])
    text(song[14], xPos[21], 960);

    textSize(fontSize[30])
    text(artist[14], xPos[21], 1000);

    // Segment 8

    if (segmentPosition == 22){
        fill (fromGrey)
    } else if (segmentPosition == 23){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[31])
    text (segment[8], xPos[22], 980);

    // Song 15

    if (segmentPosition == 23){
        fill (fromGrey)
    } else if (segmentPosition == 24){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[32])
    text(song[15], xPos[23], 960);

    textSize(fontSize[33])
    text(artist[15], xPos[23], 1000);

    // Song 16

    if (segmentPosition == 24){
        fill (fromGrey)
    } else if (segmentPosition == 25){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[34])
    text(song[16], xPos[24], 960);

    textSize(fontSize[35])
    text(artist[16], xPos[24], 1000);

    // Segment 9

    if (segmentPosition == 25){
        fill (fromGrey)
    } else if (segmentPosition == 26){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[36])
    text (segment[9], xPos[25], 980);

    // Song 17

    if (segmentPosition == 26){
        fill (fromGrey)
    } else if (segmentPosition == 27){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[37])
    text(song[17], xPos[26], 960);

    textSize(fontSize[38])
    text(artist[17], xPos[26], 1000);

    // Song 18

    if (segmentPosition == 27){
        fill (fromGrey)
    } else if (segmentPosition == 28){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[39])
    text(song[18], xPos[27], 960);

    textSize(fontSize[40])
    text(artist[18], xPos[27], 1000);

    // Segment 10

    if (segmentPosition == 28){
        fill (fromGrey)
    } else if (segmentPosition == 29){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[41])
    text (segment[10], xPos[28], 980);

    // Song 19

    if (segmentPosition == 29){
        fill (fromGrey)
    } else if (segmentPosition == 30){
        fill (fromWhite)
    } else {
        fill (169)
    }

    textSize(fontSize[42])
    text(song[19], xPos[29], 960);

    textSize(fontSize[43])
    text(artist[19], xPos[29], 1000);

    // Song 20

    if (segmentPosition == 30){
        fill (fromGrey)
    } else {
        fill (169)
    }

    textSize(fontSize[43])
    text(song[20], xPos[30], 960);

    textSize(fontSize[44])
    text(artist[20], xPos[30], 1000);


        // Provides the frames for the transition
        if (transitionEvent === true){
            transitionTime = transitionTime + 1;
            fromGrey = fromGrey + 0.71;
            fromWhite = fromWhite - 0.71;
            transitionMovement()
            
            if (transitionTime > 120){
                 transitionEvent = false;
                 transitionTime = 0;
                 stopStart = 1;

                 xPos[0] = round (xPos[0], 0)
                 xPos[1] = round (xPos[1], 0)
                 xPos[2] = round (xPos[2], 0)
                 xPos[3] = round (xPos[3], 0)
                 xPos[4] = round (xPos[4], 0)
                 xPos[5] = round (xPos[5], 0)
                 xPos[6] = round (xPos[6], 0)
                 xPos[7] = round (xPos[7], 0)
                 xPos[8] = round (xPos[8], 0)
                 xPos[9] = round (xPos[9], 0)
                 xPos[10] = round (xPos[10], 0)
                 xPos[11] = round (xPos[11], 0)
                 xPos[12] = round (xPos[12], 0)
                 xPos[13] = round (xPos[13], 0)
                 xPos[14] = round (xPos[14], 0)
                 xPos[15] = round (xPos[15], 0)
                 xPos[16] = round (xPos[16], 0)
                 xPos[17] = round (xPos[17], 0)
                 xPos[18] = round (xPos[18], 0)
                 xPos[19] = round (xPos[19], 0)
                 xPos[20] = round (xPos[20], 0)
                 xPos[21] = round (xPos[21], 0)
                 xPos[22] = round (xPos[22], 0)
                 xPos[23] = round (xPos[23], 0)
                 xPos[24] = round (xPos[24], 0)
                 xPos[25] = round (xPos[25], 0)
                 xPos[26] = round (xPos[26], 0)
                 xPos[27] = round (xPos[27], 0)
                 xPos[28] = round (xPos[28], 0)
                 xPos[29] = round (xPos[29], 0)
                 xPos[30] = round (xPos[30], 0)
            }
    
        }

}

function transitionMovement (){

    // Stop Start Increment
    if (transitionTime <= 60){
        stopStart = stopStart * 1.043565

    } else{
        stopStart = stopStart / 1.043565
    }

    // Move On Screen Increment
    if (decelerate > 0){
        decelerate = decelerate / 1.01805
    }

    // The actual movement
    xPos[0] = xPos[0] - stopStart
    xPos[1] = xPos[1] - stopStart
    xPos[2] = xPos[2] - stopStart
    xPos[3] = xPos[3] - stopStart
    xPos[4] = xPos[4] - stopStart
    xPos[5] = xPos[5] - stopStart
    xPos[6] = xPos[6] - stopStart
    xPos[7] = xPos[7] - stopStart
    xPos[8] = xPos[8] - stopStart
    xPos[9] = xPos[9] - stopStart
    xPos[10] = xPos[10] - stopStart
    xPos[11] = xPos[11] - stopStart
    xPos[12] = xPos[12] - stopStart
    xPos[13] = xPos[13] - stopStart
    xPos[14] = xPos[14] - stopStart
    xPos[15] = xPos[15] - stopStart
    xPos[16] = xPos[16] - stopStart
    xPos[17] = xPos[17] - stopStart
    xPos[18] = xPos[18] - stopStart
    xPos[19] = xPos[19] - stopStart
    xPos[20] = xPos[20] - stopStart
    xPos[21] = xPos[21] - stopStart
    xPos[22] = xPos[22] - stopStart
    xPos[23] = xPos[23] - stopStart
    xPos[24] = xPos[24] - stopStart
    xPos[25] = xPos[25] - stopStart
    xPos[26] = xPos[26] - stopStart
    xPos[27] = xPos[27] - stopStart
    xPos[28] = xPos[28] - stopStart
    xPos[29] = xPos[29] - stopStart
    xPos[30] = xPos[30] - stopStart
}

// Detect when the keys are pressed
function keyReleased(){
    // if (segmentPosition > 0){
    //     if (key === ','){
    //         segmentPosition = segmentPosition - 1
    //         transitionEvent = true
    //         segmentIncrease = true
    //         fromWhite = 255
    //         fromGrey = 169
    //     }
    // }

    if (segmentPosition < 30){
        if (key === '.'){
            segmentPosition = segmentPosition + 1
            transitionEvent = true
            segmentIncrease = false
            fromWhite = 255
            fromGrey = 169
        }
    }
}