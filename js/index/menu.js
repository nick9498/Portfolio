/* viewBar */
function viewBar(div_id, opt, evt, loc_left, loc_top) {
		if(document.all || document.getElementById) {
			if(document.all) {
				obj = document.all[div_id];
				if(opt == "") {
					obj.style.left = evt.clientX + document.body.scrollLeft + loc_left;
					obj.style.top = evt.clientY +  document.body.scrollTop + loc_top;
				}
			}
			else {
				obj = document.getElementById(div_id);
				if(opt == "") {
					obj.style.left = evt.clientX + window.scrollX + loc_left;
					obj.style.top = evt.clientY +  window.scrollY + loc_top;
				}
			}
			obj.style.visibility = "visible";
		}
		else{
			obj = document.layers[div_id];
			obj.visibility = "visible";
			if(opt == "") {
				obj.left = evt.pageX + loc_left;
				obj.top = evt.pageY + loc_top;
			}
		}
	}

/* hideBar */
function hideBar(div_id) {
	if(document.all || document.getElementById) {
		if(document.all) {
			obj = document.all[div_id];
		}
		else {
			obj = document.getElementById(div_id);
		}

		obj.style.visibility = "hidden";
	}
	else{
		obj = document.layers[div_id];
		obj.visibility = "hidden";
	}
}