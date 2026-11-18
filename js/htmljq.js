$(document).ready(function()
{
	var link=window.location.href;
	
	var getlink=link.split("/");
	

	var len=getlink.length-1;
	
	var jhtml=getlink[len];
	

	$(".custom-navbar-default .navbar-nav li a").each(function()
	{
		var jhref=$(this).attr("href");

		if(jhtml==jhref)
		{
			$(this).addClass("activemenu");
		}
	});

	$(".custom-order-btn,.custom-footer-btn").click(function()
	{
		$(this).toggleClass("activebtn");
	});

	
	$(".ratecontainer").hover(function()
	{
		$(this).find(".pricetop").toggleClass("topactive");
		$(this).find(".pricetop h3,.pricetop h2").toggleClass("topactive");
		$(this).toggleClass("priceconshadow");
	});
});