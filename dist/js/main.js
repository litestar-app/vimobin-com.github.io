$(window).on("load",function(e){$(".loader").hide(),$(".wrapper").show(),(new WOW).init({mobile:!0}),$(window).width()<768&&$(".owl-carousel").owlCarousel({center:!0,loop:!0,margin:40,items:2})}),$(function(){var t,a;$(window).width()<768&&(a=0,(t=[".stats_01",".stats_02",".stats_03"]).forEach(function(e){$(e).not(t[a]).hide(),$(e).removeClass("wow fadeInUp")}),setInterval(function(){++a==t.length&&(a=0),t.forEach(function(e){$(e).not(t[a]).hide()}),$(t[a]).show()},2e3)),$("#messageForm").validate({submitHandler:function(e){$.ajax({url:e.action,type:e.method,data:$(e).serialize(),success:function(e){$(".user-email").text($("#messageForm").find("#inputEmail").val()),$(".user-name").text($("#messageForm").find("#inputName").val()),$(".get-touch__form").hide("fast",function(){$(".thanks-message").show("fast")})}})}})});