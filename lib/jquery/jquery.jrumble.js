(function(c){c.fn.jrumble=function(q){var b=c.extend({rangeX:2,rangeY:2,rangeRot:1,rumbleSpeed:10,rumbleEvent:"hover",posX:"left",posY:"top"},q);return this.each(function(){function l(a){var c=Math.random(),b=Math.floor(Math.random()*(m+1))-m/2,d=Math.floor(Math.random()*(n+1))-n/2,e=Math.floor(Math.random()*(r+1))-r/2;a.css("display")==="inline"&&(j=!0,a.css("display","inline-block"));b===0&&m!==0&&(b=c<0.5?1:-1);d===0&&n!==0&&(d=c<0.5?1:-1);k==="absolute"&&(a.css({position:"absolute","-webkit-transform":"rotate("+
e+"deg)","-moz-transform":"rotate("+e+"deg)","-o-transform":"rotate("+e+"deg)",transform:"rotate("+e+"deg)"}),a.css(f,h+b+"px"),a.css(g,i+d+"px"));k==="fixed"&&(a.css({position:"fixed","-webkit-transform":"rotate("+e+"deg)","-moz-transform":"rotate("+e+"deg)","-o-transform":"rotate("+e+"deg)",transform:"rotate("+e+"deg)"}),a.css(f,h+b+"px"),a.css(g,i+d+"px"));if(k==="static"||k==="relative")a.css({position:"relative","-webkit-transform":"rotate("+e+"deg)","-moz-transform":"rotate("+e+"deg)","-o-transform":"rotate("+
e+"deg)",transform:"rotate("+e+"deg)"}),a.css(f,b+"px"),a.css(g,d+"px")}$obj=c(this);var d,m=b.rangeX,n=b.rangeY,r=b.rangeRot;m*=2;n*=2;r*=2;var o=b.rumbleSpeed,k=$obj.css("position"),f=b.posX,g=b.posY,h,i,j;f==="left"&&(h=parseInt($obj.css("left"),10));f==="right"&&(h=parseInt($obj.css("right"),10));g==="top"&&(i=parseInt($obj.css("top"),10));g==="bottom"&&(i=parseInt($obj.css("bottom"),10));var p={position:k,"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-o-transform":"rotate(0deg)",
transform:"rotate(0deg)"};b.rumbleEvent==="hover"&&$obj.hover(function(){var a=c(this);d=setInterval(function(){l(a)},o)},function(){var a=c(this);clearInterval(d);a.css(p);a.css(f,h+"px");a.css(g,i+"px");j===!0&&a.css("display","inline")});b.rumbleEvent==="click"&&$obj.toggle(function(){var a=c(this);d=setInterval(function(){l(a)},o)},function(){var a=c(this);clearInterval(d);a.css(p);a.css(f,h+"px");a.css(g,i+"px");j===!0&&a.css("display","inline")});b.rumbleEvent==="mousedown"&&$obj.bind({mousedown:function(){var a=
c(this);d=setInterval(function(){l(a)},o)},mouseup:function(){var a=c(this);clearInterval(d);a.css(p);a.css(f,h+"px");a.css(g,i+"px");j===!0&&a.css("display","inline")},mouseout:function(){var a=c(this);clearInterval(d);a.css(p);a.css(f,h+"px");a.css(g,i+"px");j===!0&&a.css("display","inline")}});if(b.rumbleEvent==="constant"){var q=c(this);d=setInterval(function(){l(q)},o)}})}})(jQuery);