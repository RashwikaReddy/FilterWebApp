function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet_model = ml5.poseNet(video, model_loaded);
    posenet_model.on('pose', getResults);
}

function preload() {
    earing = loadImage("correct.png");
    necklace=loadImage("pearls.png");
}
rightEar_x = 0;
leftEar_x = 0;
rightEar_y = 0;
leftEar_y = 0;
rshoulder_x="";
rshoulder_y="";
lshoulder_x="";
lshoulder_y="";
function model_loaded() {
    console.log("Model Loaded Successfully");
}

function take_pic() {
    save("filterpic.png");
}

function draw() {
    /*translate(300, 0);
    scale(-1, 1);*/
    image(video, 0, 0, 300, 300);
    image(earing,leftEar_x-40,leftEar_y,80,80);
    image(earing,rightEar_x-40,rightEar_y,80,80);
    image(necklace,rshoulder_x+30,rshoulder_y-50,100,100);
}

function getResults(result_array) {

    if (result_array.length > 0) {
        console.log(result_array);
        leftEar_x = result_array[0].pose.leftEar.x;
        leftEar_y = result_array[0].pose.leftEar.y;
        rightEar_x = result_array[0].pose.rightEar.x;
        rightEar_y = result_array[0].pose.rightEar.y;
        lshoulder_x= result_array[0].pose.leftShoulder.x;
        lshoulder_y= result_array[0].pose.leftShoulder.y;
        rshoulder_x= result_array[0].pose.rightShoulder.x;
        rshoulder_y= result_array[0].pose.rightShoulder.y;


    }
}