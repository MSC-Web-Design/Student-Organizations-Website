$(function(){function e(){return i.width()<=768?a.addClass("navbar-fixed-top"):void a.removeClass("navbar-fixed-top")}function t(e){var t=$(document).scrollTop();$("").each(function(){var e=$(this)})}function s(e){$(e.target).prev("h3").find("a").toggleClass("minus")}$(document).on("scroll",t);var i=$(window),a=$(".navbar");$(window).resize(e).trigger("resize"),$(window).scroll(function(){$(window).scrollTop()>355?$(".section-sidebar").addClass("sidebar-fixed"):$(".section-sidebar").removeClass("sidebar-fixed")}),$(window).ready(function(){$("h2").each(function(){$(this).attr({id:$(this).text().toLowerCase().replace(/\s+/g,"-")})}),$("h3").each(function(){var e=$(this).text().toLowerCase().replace(/\s+/g,"-").slice(1,-2);$(this).children("a").attr({href:"#"+e}),$(this).next(".collapse").attr({id:e})}),$("<hr>").insertAfter("h2"),$(".section-sidebar .nav a").each(function(){$(this).attr({href:"#"+$(this).text().toLowerCase().replace(/\s+/g,"-")})})}),$(".collapse").on("hidden.bs.collapse",s),$(".collapse").on("shown.bs.collapse",s)});