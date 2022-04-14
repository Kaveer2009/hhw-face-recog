Webcam.set({
    height:  250,
    width: 325,
    Image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function modalLoaded(){
    console.log("modal is loaded!")
}

console.log("ml5 version:",ml5.version);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fsovBCTXd/model.json/",modalLoaded);

