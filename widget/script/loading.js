var loading='<div class="spinner">';
	loading+='<div class="spinner-container container1">';
    loading+='<div class="circle1"></div>';
    loading+='<div class="circle2"></div>';
    loading+='<div class="circle3"></div>';
    loading+='<div class="circle4"></div>';
  	loading+='</div>';
  	loading+='<div class="spinner-container container2">';
    loading+='<div class="circle1"></div>';
    loading+='<div class="circle2"></div>';
    loading+='<div class="circle3"></div>';
    loading+='<div class="circle4"></div>';
  	loading+='</div>';
  	loading+='<div class="spinner-container container3">';
    loading+='<div class="circle1"></div>';
    loading+='<div class="circle2"></div>';
    loading+='<div class="circle3"></div>';
    loading+='<div class="circle4"></div>';
  	loading+='</div>';
	loading+='</div>';

function showLoading(elm){
	$(""+elm+"").append(loading);
	$(".spinner").show();
}
function hideLoading(){
	$(".spinner").hide();

}

var link1 = document.createElement('link');
	link1.setAttribute('rel', 'stylesheet');
	link1.setAttribute('type', 'text/css');
	link1.setAttribute('href', '../../css/loading.css');
	document.head.appendChild(link1);