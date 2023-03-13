function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
 canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;}
    function Limpartela() {
        background("white");

    }
   

function draw() {
    strokeWeight(8);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas() {
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results) {
    if(error){
        console.error(error)
    }
    console.log(results);
    var result=results[0].label;
    document.getElementById("label").innerHTML="Nome: "+result;
    document.getElementById("precisao").innerHTML="Precisao: "+Math.round(results[0].confidence*100)+"%";
    uterXthisis=new SpeechSynthesisUtterance(result.replace("_"," "));
    synth.speak(uterXthisis);
}