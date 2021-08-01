var audio1 = document.getElementById('audio-1');
var playStopBTN1 = document.getElementById('playStopBTN-1');
var audio2 = document.getElementById('audio-2');
var playStopBTN2 = document.getElementById('playStopBTN-2');
var audio3 = document.getElementById('audio-3');
var playStopBTN3 = document.getElementById('playStopBTN-3');
var count = 0;

function playStop1(){
	if(count == 0){
		count = 1;
		audio1.play();
		audio1.currentTime = 0;
		audio2.pause();
		audio3.pause();
		playStopBTN1.innerHTML = "&#9208;";
		playStopBTN2.innerHTML = "&#9658;";
		playStopBTN3.innerHTML = "&#9658;";
	}else{
		count = 0;
		audio1.pause();
		playStopBTN1.innerHTML = "&#9658;";
	}

}


function playStop2(){
	if(count == 0){
		count = 1;
		audio1.pause();
		audio3.pause();
		audio2.play();
		audio2.currentTime = 0;
		playStopBTN2.innerHTML = "&#9208;";
		playStopBTN1.innerHTML = "&#9658;";
		playStopBTN3.innerHTML = "&#9658;";
	}else{
		count = 0;
		audio2.pause();
		playStopBTN2.innerHTML = "&#9658;";
	}

}


function playStop3(){
	if(count == 0){
		count = 1;
		audio1.pause();
		audio2.pause();
		audio3.play();
		audio3.currentTime = 0;
		playStopBTN1.innerHTML = "&#9658;";
		playStopBTN2.innerHTML = "&#9658;";
		playStopBTN3.innerHTML = "&#9208;";
	}else{
		count = 0;
		audio3.pause();
		playStopBTN3.innerHTML = "&#9658;";
	}

}