// /******************
// Code by Vamoss
// Original code link:
// https://www.openprocessing.org/sketch/880860

// Author links:
// http://vamoss.com.br
// http://twitter.com/vamoss
// http://github.com/vamoss
// ******************/

const MESSAGE =
    ".-.. --- ...- .     .. ...     .-- .... .- -     .--. .-. . ...- . -. - ...     - --- -. --. ..- . ...     ..-. .-. --- --     ... .--. . .- -.- .. -. --. --..--     .. -     .. ...     -... . - - . .-.     ..-. --- .-.     .-.. --- ...- . .-.     - ---     .- -. -. --- ..- -. -.-. .     .-- .... .- -     .. ...     -... ..- .-. -. .. -. --.     .. -. ... .. -.. .     .... .. ...     -.-. .... . ... -     ..     .-- .. ... ....     - .... .     -... . .-.. --- ...- . -..     .-- .... ---     -....- .-- .. - .... --- ..- -     --. ..- .. .-.. - -....-     .- -... .- -. -.. --- -. . -..     -- . --..--     .- ...     ... .-.. . . .--. .. -. --.     .- -... .- -. -.. --- -. . -..     -- -.--     . -.-- . .-.. .. -.. ... --..--     .-- --- ..- .-.. -..     ...- .. ... .. -     -- .     .- ...     -- -.--     ... .. -.-. -.- -. . ... ...     -.. .. -..     .-- .     .--. .- .-. - . -.. --..--     -.-- --- ..-     -.-. --- ..- .-.. -..     -. --- -     -.. . ... -.-. .-. .. -... .     --- ..- .-.     ..-. .- -.-. . --..--     -.-- --- ..-     .-- --- ..- .-.. -..     -. --- -     -.- -. --- .--     .-- .... .- -     -.-. --- .-.. --- .-. ...     .-- .     .... .- ...- .     -.. ..- .     - ---     .--. .- .. -.     --- ..- .-.     -... .-. . .- - .... ...     .-- . .-. .     ... ---     -... .-.. .- --.. .. -. --.     - .... .- -     ..     .--. .. - .. . -..     - .... .     .-. .. --. .... - . --- ..- ...     -... ..- .-. -. .. -. --.     -... . - .-- . . -.     ..- ...     ..     .-. . -.. . . --     -- -.-- ... . .-.. ..-.     ..-. --- .-.     - .... .. ...     -... . .-.. --- ...- . -..     .-- --- -- .- -.     .-- .... ---     .... .- ...     -... .. -..     ..-. .- .-. . .-- . .-.. .-.. --..--     .-- .... . -. . ...- . .-.     ..     .-.. --- --- -.- . -..     .- -     .... . .-.     --- -. -.-. . --..--     ..     . -..- .... .- .-.. . -..     - .-- .. -.-. .     ..     -.. . -. .. . -..     - .... .     -- .. ... ..-. --- .-. - ..- -. . ...     --- ..-.     - .... .     . - . .-. -. .. - -.--     --- -. -.-. . --..--     - .... . -.     ..     .- -.. -- .. - - . -..     .. - --..--     ..- -. - .. .-..     .. -     -... . -.-. .- -- .     .-     .... .- -... .. -     ..-. --- .-.     -- .     ..     - .-. .- ...- . .-.. . -..     - .... .-. --- ..- --. ....     - .... .     .-- --- .-. .-.. -..     .- -. -..     ..-. .- .-.     .-.. .- -. -.. ...     ..- -. - .. .-..     -- -.--     -.-. .- -- . .-.. ...     .-- . .-. .     - .. .-. . -.. --..--     .- -. -..     -- -.--     -.. .- -.-- ...     .- -. -..     -. .. --. .... - ...     .-- . .-. .     .-. ..- .. -. . -..     ..     ... - --- .--. .--. . -..     - .... .- -     - .-. .- ...- . .-.. .-.. .. -. --.     .-- .... . -.     - .... .     --. . -. . .-. --- ... .. - -.--     --- ..-.     -... .- -.. .-.     .. -... -.     .- -- -- .- .-.     .--. .-. . ...- . -. - . -..     -- .     ..-. .-. --- --     --. --- .. -. --.     --- -. --..--     .- -. -..     - .... . .. .-. --..--     ..     .-. . .- -.-. .... . -..     . ...- . .-. -.-- - .... .. -. --.     ..     .... .- -..     . ...- . .-.     .-- .. ... .... . -..     ..-. --- .-.     -. ---     -... --- .-- .-..     -.-. .- -.     .- -.-. -.-. --- -- -- --- -.. .- - .     - .... .     -- .- .--- . ... - -.--     --- ..-.     .- -... ..     .- .-.. -....- .... ..- ... ... . .. -. .----. ...     --. . -. . .-. --- ... .. - -.-- --..--     . ...- . -.     .. ..-.     - .... .     -... --- .-- .-..     .... .- ...     -... . . -.     .- ...     .-- .. -.. .     .- ...     - .. -- .     .... .     .. --. -. --- .-. . -..     -- . -. - .. --- -. .. -. --.     .... .. ...     -... .-. .- ...- . .-. -.--     -... . -.-. .- ..- ... .     .. -     .-- .- ...     .-- . .-.. .-..     -.- -. --- .-- -. --..--     .- -. -..     - .- .-.. -.- .. -. --.     .- -... --- ..- -     .. -     -- .- -.. .     . ...- . -.     - .... .     -.-. --- .-- .- .-. -..     -... .-. .- ...- .";
let centerX, centerY, radius, prevRadius, angle, dir, letterCount, letterSize;
let hu = 0; // hue
let lapse = 0; // mouse timer
let height = window.innerHeight - 20;
let width = window.innerWidth - 10;
let song;
let letterCountPause = 0;
let img;
let colors;

function preload() {
    //song = loadSound("audio.mp3");
    img = loadImage("bg.png");
}

function setup() {
    imageMode(CENTER);
    createCanvas(width, height);
    colorMode(HSB, 255);
    background(220);
    textAlign(CENTER, CENTER);
    // make frameRate slower
    frameRate(55);

    letterSize = 1;
    letterCount = MESSAGE.length + 1;
    centerX = width / 2;
    centerY = height / 2;
    radius = 10;
    prevRadius = 10;
    angle = 0;
    dir = 1;
    colors = ["#C07275","#658ba2", "#57759f","#52657a", "#2b263a"];
    dispImg();
    // image(img, width / 2, height / 2, imgWidth, imgHeight);
    // center img
}
function dispImg() {
    imageMode(CENTER);
    let imgWidth = width;
    let imgHeight = img.height * (imgWidth / img.width);
    // image height offset
    image(img, width / 2, height / 2, imgWidth, imgHeight);
}

function draw() {
    let letter = MESSAGE[letterCount];
    letterCount = ++letterCount;
    // %MESSAGE.length
    if (letterCount <= MESSAGE.length) {
        // if (frameCount % 2 == 0) letterSize = ceil(frameCount / 40);
        letterSize = ceil(frameCount / 40);

        textSize(letterSize / 1.3);
        let letterWidth = textWidth(letter);

        var angleIncrease = (letterWidth / radius) * dir;
        var radiusIncrease = letterSize / 50;

        angle += angleIncrease / 1.5;
        radius += radiusIncrease / 5;
        
        let x = cos(angle) * radius + centerX;
        let y = sin(angle) * radius + centerY;

        push();
        translate(x, y);
        rotate(angle + HALF_PI * dir);
        // fill(hu % 255, 200, 200);
        fill(colors[letterCount % colors.length]);
        text(letter, 0, 0);
        hu++;
        pop();

        // angle += angleIncrease / 2;
        // radius += radiusIncrease / 2;
    } else {
        dispImg();
    }
    // if audio is not done
}

//fixes negative values
function mod(m, n) {
    return ((m % n) + n) % n;
}

function mousePressed() {
    if (letterCount >= MESSAGE.length) {
        if (!song.isPlaying()) {
            song.play();
        }
        dispImg();
        letterCount = 0;
    }
}

function keyPressed() {
    if (keyCode === "M".charCodeAt(0) && letterCountPause == 0) {
        song.pause();
        letterCountPause = letterCount;
        letterCount = MESSAGE.length + 1;
    } else {
        if (!song.isPlaying()) {
            song.play();
        }
        letterCount = letterCountPause;
        letterCountPause = 0;
    }
}
//1003 2012 Hanbyul Jo
// I just picked this sentence from http://amnonp5.wordpress.com/ for no reason.
///

// Load file and chop it up
// let lines = loadStrings("Q_Baqara.txt"); //loadStrings("QSimple_1.txt"); //
// String str = join(lines," ۞ "); //join(lines," ۩ "); //join(lines," ۝ ");//
// let str =
//     ".-.. --- ...- . / .. ... / .-- .... .- - / .--. .-. . ...- . -. - ... / - --- -. --. ..- . ... / ..-. .-. --- -- / ... .--. . .- -.- .. -. --. --..-- / .. - / .. ... / -... . - - . .-. / ..-. --- .-. / .-.. --- ...- . .-. / - --- / .- -. -. --- ..- -. -.-. . / .-- .... .- - / .. ... / -... ..- .-. -. .. -. --. / .. -. ... .. -.. . / .... .. ... / -.-. .... . ... - / .. / .-- .. ... .... / - .... . / -... . .-.. --- ...- . -.. / .-- .... --- / -....- .-- .. - .... --- ..- - / --. ..- .. .-.. - -....- / .- -... .- -. -.. --- -. . -.. / -- . --..-- / .- ... / ... .-.. . . .--. .. -. --. / .- -... .- -. -.. --- -. . -.. / -- -.-- / . -.-- . .-.. .. -.. ... --..-- / .-- --- ..- .-.. -.. / ...- .. ... .. - / -- . / .- ... / -- -.-- / ... .. -.-. -.- -. . ... ... / -.. .. -.. / .-- . / .--. .- .-. - . -.. --..-- / -.-- --- ..- / -.-. --- ..- .-.. -.. / -. --- - / -.. . ... -.-. .-. .. -... . / --- ..- .-. / ..-. .- -.-. . --..-- / -.-- --- ..- / .-- --- ..- .-.. -.. / -. --- - / -.- -. --- .-- / .-- .... .- - / -.-. --- .-.. --- .-. ... / .-- . / .... .- ...- . / -.. ..- . / - --- / .--. .- .. -. / --- ..- .-. / -... .-. . .- - .... ... / .-- . .-. . / ... --- / -... .-.. .- --.. .. -. --. / - .... .- - / .. / .--. .. - .. . -.. / - .... . / .-. .. --. .... - . --- ..- ... / -... ..- .-. -. .. -. --. / -... . - .-- . . -. / ..- ... / .. / .-. . -.. . . -- / -- -.-- ... . .-.. ..-. / ..-. --- .-. / - .... .. ... / -... . .-.. --- ...- . -.. / .-- --- -- .- -. / .-- .... --- / .... .- ... / -... .. -.. / ..-. .- .-. . .-- . .-.. .-.. --..-- / .-- .... . -. . ...- . .-. / .. / .-.. --- --- -.- . -.. / .- - / .... . .-. / --- -. -.-. . --..-- / .. / . -..- .... .- .-.. . -.. / - .-- .. -.-. . / .. / -.. . -. .. . -.. / - .... . / -- .. ... ..-. --- .-. - ..- -. . ... / --- ..-. / - .... . / . - . .-. -. .. - -.-- / --- -. -.-. . --..-- / - .... . -. / .. / .- -.. -- .. - - . -.. / .. - --..-- / ..- -. - .. .-.. / .. - / -... . -.-. .- -- . / .- / .... .- -... .. - / ..-. --- .-. / -- . / .. / - .-. .- ...- . .-.. . -.. / - .... .-. --- ..- --. .... / - .... . / .-- --- .-. .-.. -.. / .- -. -.. / ..-. .- .-. / .-.. .- -. -.. ... / ..- -. - .. .-.. / -- -.-- / -.-. .- -- . .-.. ... / .-- . .-. . / - .. .-. . -.. --..-- / .- -. -.. / -- -.-- / -.. .- -.-- ... / .- -. -.. / -. .. --. .... - ... / .-- . .-. . / .-. ..- .. -. . -.. / .. / ... - --- .--. .--. . -.. / - .... .- - / - .-. .- ...- . .-.. .-.. .. -. --. / .-- .... . -. / - .... . / --. . -. . .-. --- ... .. - -.-- / --- ..-. / -... .- -.. .-. / .. -... -. / .- -- -- .- .-. / .--. .-. . ...- . -. - . -.. / -- . / ..-. .-. --- -- / --. --- .. -. --. / --- -. --..-- / .- -. -.. / - .... . .. .-. --..-- / .. / .-. . .- -.-. .... . -.. / . ...- . .-. -.-- - .... .. -. --. / .. / .... .- -.. / . ...- . .-. / .-- .. ... .... . -.. / ..-. --- .-. / -. --- / -... --- .-- .-.. / -.-. .- -. / .- -.-. -.-. --- -- -- --- -.. .- - . / - .... . / -- .- .--- . ... - -.-- / --- ..-. / .- -... .. / .- .-.. -....- .... ..- ... ... . .. -. .----. ... / --. . -. . .-. --- ... .. - -.-- --..-- / . ...- . -. / .. ..-. / - .... . / -... --- .-- .-.. / .... .- ... / -... . . -. / .- ... / .-- .. -.. . / .- ... / - .. -- . / .... . / .. --. -. --- .-. . -.. / -- . -. - .. --- -. .. -. --. / .... .. ... / -... .-. .- ...- . .-. -.-- / -... . -.-. .- ..- ... . / .. - / .-- .- ... / .-- . .-.. .-.. / -.- -. --- .-- -. --..-- / .- -. -.. / - .- .-.. -.- .. -. --. / .- -... --- ..- - / .. - / -- .- -.. . / . ...- . -. / - .... . / -.-. --- .-- .- .-. -.. / -... .-. .- ...- .";
// // splitTokens(str, "     ");
// let words = splitTokens(str, " / ");

// let als; // Declare als variable

// let dp = 1.5;

// function setup() {
//   createCanvas(600, 600);
//   frameRate(60);
//   textAlign(CENTER);

//   let str = "hhh / hhh / hhh";
//   let words = splitTokens(str, " / ");

//   let als = new Array(words.length); // Initialize als as an array here
//   let textL = 0;

//   for (let i = words.length - 1; i >= 0; i--) {
//     let tempC = words[i];
//     let tempW = textWidth(tempC);
//     let n = tempW / (dp * (i + 1)); // Be careful with the divisor; it shouldn't be 0.

//     als[i] = new Alphabet(words[i], textL, -dp * i);
//     textL += n;
//   }
// }

// function draw() {
//   background(255);

//   for (let i = 0; i < als.length; i++) {
//     als[i].draw();
//   }
// }

// class Alphabet {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//         this.x;
//         this.y;
//         this.a;
//         this.d;
//         this.dP;
//         this.size = 0.5;
//         this.i;
//         this.textL;
//         this.c;
//     }

//     Alphabet(c, a, d) {
//         this.x = width / 2;
//         this.y = height / 2;
//         this.c = c;
//         this.a = a;
//         this.d = d;
//         this.i = i;
//         this.size = 5; //random(13,20);
//         //
//     }

//     draw() {
//         move();

//         //spiral movement
//         pushMatrix();
//         translate(x + d * cos(a), y + d * sin(a));

//         rotate(a + PI / 2);
//         if (d > 10) {
//             textSize(d / 20);
//             fill(0);
//             text(c, 0, 0);
//         }
//         popMatrix();
//     }

//     move() {
//         if (abs(d - 0) < 0.5) d = 1;
//         d += dp;
//         a += 0.1;
//     }
// }
