var state = 0;
function ChangeImage() {
	if(state == 0){
		document.img2.src ="img/home/home_close.png"
		state = 1;
	}else{
		document.img2.src = "img/home/home_play.png"
		state = 0;
	}
}