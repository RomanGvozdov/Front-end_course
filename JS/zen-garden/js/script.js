$(document).ready(function(){
$b = $(".selector");
	var i = 0;
	console.log(count);
	function removeNext(){
		$(".Myclass").eq(i-1).css({"outline": "none"});
	}
	function removePrev(){
		$(".Myclass").eq(i+1).css({"outline": "none"});
	}
$(".selector-find").click(function(event){
	var $a = $b.val();
	$('body').find($a).addClass("Myclass");
	count = $('.Myclass').length;
	$(".Myclass").eq(i).css({"outline": "3px solid red"});
	if( $(".Myclass"))
		$(".selector-next").attr("disabled", false);
	return i;
});
 var count = $('.Myclass').length;
$(".selector-next").click(function(event){
	i++;
	$(".Myclass").eq(i).css({"outline": "3px solid red"});
	removeNext();
	if (i > 0)
		$(".selector-prev").attr("disabled", false);
	console.log(i);
	
	if ( (count - 1) === i)
		$(".selector-next").attr("disabled", "disabled");
	return i;
});	
$(".selector-prev").click(function(event){
	i--;
	$(".Myclass").eq(i).css({"outline": "3px solid red"});
	removePrev();
	if( i === 0)
		$(".selector-prev").attr("disabled", "disabled");
	return i;
});

});






































