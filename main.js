Webcam.set({
    width:310,
    height:300,
    image_format:'jpg',
    jpg_quality:90,

    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    });
}
console.log("ml5 verson", ml5.version);

classifier = ml5.imageClassifier('MobileNet',modalLoaded);

function modalLoaded(){
    console.log("Model Loaded!");
}

function check(){
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}