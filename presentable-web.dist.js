(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.present = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function styleElems(e,t){for(var n=t||0,r=slideCounter+n,s=document.getElementsByClassName("slide-"+r),u=0;u<s.length;u++)e(s.item(u).classList);return!!s.length}function advance(){if(slideCounter++,!styleElems(function(e){return e.add("slide-current")}))return void slideCounter--;styleElems(function(e){e.remove("slide-current"),e.add("slide-previous")},-1)}function retreat(){document.getElementsByClassName("slide-"+slideCounter);styleElems(function(e){return e.remove("slide-current")})&&(slideCounter--,styleElems(function(e){e.remove("slide-previous"),e.add("slide-current")}))}function slideNumber(){return slideCounter}function registerForKeys(){document.addEventListener("keydown",function(e){return(39==e.keyCode||34==e.keyCode)&&advance()}),document.addEventListener("keydown",function(e){return(37==e.keyCode||33==e.keyCode)&&retreat()})}function registerForClicks(){document.addEventListener("contextmenu",function(e){return e.preventDefault()}),document.addEventListener("click",function(e){return e.button?retreat():advance()})}function configure(e){e.keyboard&&registerForKeys(),e.mouse&&registerForClicks()}var slideCounter=0;module.exports={advance:advance,retreat:retreat,slideNumber:slideNumber,configure:configure};

},{}]},{},[1])(1)
});