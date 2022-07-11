//https://teachablemachine.withgoogle.com/models/QFh9SSMJU/https://teachablemachine.withgoogle.com/models/QFh9SSMJU/https://teachablemachine.withgoogle.com/models/QFh9SSMJU/https://teachablemachine.withgoogle.com/models/QFh9SSMJU/
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
  camera = document.getElementById("camera");

Webcam.attach( '#camera' );
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
onsole.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QFh9SSMJU/https://teachablemachine.withgoogle.com/models/QFh9SSMJU/https://teachablemachine.withgoogle.com/models/QFh9SSMJU/https://teachablemachine.withgoogle.com/models/QFh9SSMJU/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }