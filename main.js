noseX = 0;
noseY = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/jq4NmW81/clownnose-removebg-preview.png');
    clown_hat = loadImage('https://i.postimg.cc/JzNW5L7j/istockphoto-494238567-612x612-removebg-preview.png');
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 500, 500);
image(clown_nose, noseX-20,noseY-20,60,60);
image(clown_hat, noseX-200,noseY-300,400,200);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
}
}