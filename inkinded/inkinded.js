<script>
$(document).ready(function(){
	$("#p2").hide();
	$("#p3").hide();
	$("#p4").hide();
	$('#myCarousel').carousel({
		interval: 3000
	})
	timer();});
	
	function timer(){
	
	$("#p1").hide(6000);
	$("#p2").show(5000);
	$("#p2").hide(5000);
	$("#p3").show(10000);
	$("#p3").hide(2000);
	$("#p4").show(15000);
	$("#p4").hide(1000);
	$("#p1").show(15000,timer);	
}

</script>