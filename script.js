const inputFile = document.getElementById('inputFile');
const containerPrev = document.getElementById('imgPreview');
const imgPrev = containerPrev.querySelector(".img-preview");
const imgText = containerPrev.querySelector(".img-text");

function imgClick(){
   document.getElementById("inputFile").click();
}

inputFile.addEventListener("change", function(){

  const imgFile = this.files[0];

  if (imgFile) {

    const reader = new FileReader();

    imgText.style.display="none";
    imgPrev.style.display="block";

    reader.addEventListener("load", function(){
      imgPrev.setAttribute("src", this.result);
    });

    reader.readAsDataURL(imgFile);

  } else {

    imgText.style.display = null;
    imgPrev.style.display = null;
    imgPrev.setAttribute("src","");

  }
});

var img = document.getElementById('imgId');

var range1 = document.getElementById("Filter1");
var range2 = document.getElementById("Filter2");
var range3 = document.getElementById("Filter3");
var range4 = document.getElementById("Filter4");
var range5 = document.getElementById("Filter5");
var range6 = document.getElementById("Filter6");

function ChangeFilter1() {

    img.style.filter = "blur(" + range1.value + "px)";
    console.log(range1.value);

};

function ChangeFilter2() {

    img.style.filter = "saturate(" + range2.value + "%)";
    console.log(range2.value);

};

function ChangeFilter3() {

    img.style.filter = "sepia(" + range3.value + "%)";
    console.log(range3.value);

};

function ChangeFilter4() {

    img.style.filter = "opacity(" + range4.value + "%)";
    console.log(range4.value);

};

function ChangeFilter5() {

    img.style.filter = "invert(" + range5.value + "%)";
    console.log(range5.value);

};

function ChangeFilter6() {
  
    img.style.filter = "brightness(" + range6.value + "%)";
    console.log(range6.value);

};