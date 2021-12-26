function take_snapshot() {
    save('myFilterImage.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(100, 100);
    video.hide();
}

function draw() {
    image(video, 70, 70);
    strokeWeight(10);
    stroke(0, 153, 51);
    noFill();
    rect(30, 30, 170, 170);


    fill(255, 0, 0);
    noStroke();
    circle(30, 30, 20);
    circle(200, 200, 20);
    circle(200, 30, 20);
    circle(30, 200, 20);
}