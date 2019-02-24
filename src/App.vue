<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style lang="scss">
/******************** CSS GRID ********************/
@charset "utf-8";
/* 	RESET CSS
	http://meyerweb.com/eric/tools/css/reset/ 
	v2.0 | 20110126
	License: none (public domain)
*/
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
	color: inherit;
}
.row:before, .row:after {
	content: "";
	display: table;
}
.row:after {
	clear: both;
}
.row > .column {
	float: left;
	display: block;
	width: 100%;
}
.list-inline {
	font-size: 0;
}
.list-inline > .column {
	float: none;
	display: inline-block;
	vertical-align: top;
	width: 100%;
	font-size: 1rem !important;
}
/********** VARIABLES **********/
$breakpoints: ('xs': 320,'sm': 480,'md': 640,'lg': 768,'xl': 1024,'xxl': 1200);
$colors: ('fff': #fff,'1': #ff9966);
$texts: ('1': ('font-size': 1.5rem, 'line-height': 2), '2': ('font-size': 2rem, 'line-height': 1.5));
/********** GRID INLINE **********/
@for $i from 1 through 12 {
	.list-#{$i} > .column {
		width: 100%/$i;
		font-size: 0
	}	
}
@mixin gridInline($device,$width) {
	@if ($device != '') {
		$device: "-#{$device}";
		@media screen and (min-width: #{$width}px) {
			@for $i from 1 through 12 {
				.list-#{$i}#{$device} > .column {
					width: 100%/$i;
				}	
			}
		}
	}
}
@each $device,$width in $breakpoints {
	@include gridInline($device,$width);
}
/********** GRID FLOAT **********/
@for $i from 1 through 12 {
	.row > .column-#{$i} {
		width: 100%*$i/12;
	}	
}
@mixin gridFloat($device,$width) {
	@if ($device != '') {
		$device: "-#{$device}";
		@media screen and (min-width: #{$width}px) {
			@for $i from 1 through 12 {
				.row > .column-#{$i}#{$device} {
					width: 100%*$i/12;
				}	
			}
		}
	}
}
@each $device,$width in $breakpoints {
	@include gridFloat($device,$width);
}
/********** WRAPPER **********/
@mixin gridWrap($device,$width) {
	@if ($device != '') {
		$device: "-#{$device}";
		.wrap#{$device} {
			padding: 0 15px;
		}
		@media screen and (min-width: #{$width}px) {
			.wrap#{$device} {
				max-width: #{$width}px;
				padding: 0;
				margin: 0 auto;
			}
		}
	}
}
@each $device,$width in $breakpoints {
	@include gridWrap($device,$width);
}
/********** SPACE **********/
@for $i from 0 through 10 {
	.p#{$i*5} {
		padding: $i*5px !important;	
	}
	.pt#{$i*5} {
		padding-top: $i*5px !important;	
	}
	.pr#{$i*5} {
		padding-right: $i*5px !important;	
	}
	.pb#{$i*5} {
		padding-bottom: $i*5px !important;	
	}
	.pl#{$i*5} {
		padding-left: $i*5px !important;	
	}
	.m#{$i*5} {
		margin: $i*5px !important;	
	}
	.mt#{$i*5} {
		margin-top: $i*5px !important;	
	}
	.mr#{$i*5} {
		margin-right: $i*5px !important;	
	}
	.mb#{$i*5} {
		margin-bottom: $i*5px !important;	
	}
	.ml#{$i*5} {
		margin-left: $i*5px !important;	
	}
} 
/********** BACKGROUND & COLOR **********/
@each $name,$color in $colors {
	.bg-#{$name} {
		background: $color;
	}
	.color-#{$name} {
		color: $color;
	}
}
/********** TEXT **********/
@each $alias,$fs in $texts {
	.text-#{$alias} {
		@each $key,$value in $fs {
          #{$key}: #{$value};
		}
	}
}
.lh1 {
	line-height: 1;
}
.text-bold {
	font-weight: bold !important;
}
.text-italic {
	font-style: italic !important;
}
.text-underline {
	text-decoration: underline;
}
.text-remove {
	text-decoration: line-through;
}
.text-uppercase {
	text-transform: uppercase !important;
}
.text-lowercase {
	text-transform: lowercase !important;
}
.text-camelcase {
	text-transform: capitalize !important;
}
.text-left {
	text-align: left !important;
}
.text-right {
	text-align: right !important;
}
.text-center {
	text-align: center !important;
}
.align-middle {
	vertical-align: middle;
}
.align-top {
	vertical-align: top;
}
.align-bottom {
	vertical-align: bottom;
}
/********** OVERFLOW **********/
.ovf-h {
	overflow: hidden;
}
.ovf-x {
	overflow-x: auto;
}
.ovf-x::-webkit-scrollbar, .ovf-y::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}
.ovf-x::-webkit-scrollbar-track, .ovf-y::-webkit-scrollbar-track {
	background: #f1f1f1; 
}
.ovf-y {
	overflow-y: auto;
}
.ovf-x::-webkit-scrollbar-thumb, .ovf-y::-webkit-scrollbar-thumb {
	background: #555; 
}
.ovf-x::-webkit-scrollbar-thumb:hover, .ovf-y::-webkit-scrollbar-thumb:hover {
	background: #557daa; 
}
/********** POSITION **********/
.pos-rel {
	position: relative;
}
.pos-abs {
	position: absolute;
}
.pos-center {
	top: 50%;
	left: 50%;
	-moz-transform: translate(-50%,-50%);	
	-webkit-transform: translate(-50%,-50%);
	transform: translate(-50%,-50%);
}
.pos-center-x {
	left: 50%;
	-moz-transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.pos-center-y {
	top: 50%;
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.m0auto {
	margin: 0 auto;
}
.fl {
	float: left;
}
.fr {
	float: right;
}
/********** OTHER **********/
.block {
	display: block;
}
.inline {
	display: inline;
}
.inline-block {
	display: inline-block;
}
.table {
	display: table;
}
.cell {
	display: table-cell;
	
}
.w100p {
	width: 100%;
}
.h100p {
	height: 100%;
}
.maxw100p {
	max-width: 100%;
}
.maxh100p {
	max-height: 100%;
}
@for $i from 1 through 10 {
	.cell-#{$i*50} {
		min-width: $i*50px;
		max-width: $i*50px;
	}	
}
.appear-none, .appear-none::-webkit-inner-spin-button, .appear-none::-webkit-outer-spin-button {
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
}
.appear-none:-ms-expand {
	display: none;
}
.disable {
	pointer-events: none;
}
.list-decimal>li {
	list-style: decimal inside;
}
/********** DISPLAY **********/
@mixin hide($device,$width){
	$device1: $device;
	$device2: $device;
	@media screen and (min-width: #{$width}px) {
		@if ($device != '') {
			$device1: "-from-#{$device}";
		}
		@for $i from 1 through 12 {
			.hide#{$device1} {
				display: none;
			}
		}
	}
	@media screen and (max-width: #{$width - 1}px) {
		$device2: "-#{$device}";
		@for $i from 1 through 12 {
			.hide#{$device2} {
				display: none;
			}
		}
	}
}
@each $device,$width in $breakpoints {
	@include hide($device,$width);
}
/********** BOX **********/
.box-area {
	border: 1px solid #ccc;
}
.box-area .box-header {
	border-bottom: 1px solid #ccc;
}
.box-area .box-footer {
	border-top: 1px solid #ccc;
}


// CHECKBOX
.checkbox {
	position: relative;
	padding-left: 20px;
	
	input {
		width: 0;
		height: 0;
	}
	
	label {
		&:before, &:after {
			content: '';
			display: block;
			width: 2em;
			height: 2em;
			border-radius: 50%;
			background: #fff;
			position: absolute;
			top: 0;
			left: 0;
			border: 1px solid #ccc;
		}
		
		&:after {
			width: 1em;
			height: 1em;
			background: yellow;
			top: 0.5em;
			left: 0.5em;
			border: none;
			box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
		}
	}
}
/******************** CSS GRID ********************/


$color-primary: #2c3e50;
$color-secondary: #42b983;

body {
	color: $color-primary;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
#nav {
	padding: 30px;
	background: #fff;

	a {
		font-weight: bold;
		color: $color-primary;

		&.router-link-exact-active {
			color: $color-secondary;
		}
	}
}

// ITEM LIST
.item-list-area {
	padding: 50px 0;
	position: relative;
	overflow: hidden;

	.bg-skew {
		width: 100%;
		transform: skewY(-10deg);
		background: #2c3e50;
		position: absolute;
		top: 150px;
		bottom: 150px;
	}

	.item-list-inner {
		position: relative;
		z-index: 100;
	}
}

.card-list {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-wrap: wrap;

	.card-item {
		width: 20%;
		padding: 0 10px;
		margin: 20px 0;

		.card-item-inner {
			border: 1px solid #2c3e50;
			border-radius: 2px;
			padding: 10px;
			background: #fff;
		}

		img {
			max-width: 100%;
		}

		.card-title {
			font-weight: bold;
			margin-bottom: 10px;
		}

		.card-price {
			font-size: 1.2em;
			color: #fff;
			border-radius: 2px;
			background: #2c3e50;
			padding: 5px;
			margin: 10px;
		}
	}
}

// PAGINATION
.pagination {
	text-align: center;
	margin: 40px 0;

	li {
		display: inline-block;
		width: 25px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		border-radius: 2px;
		border: 1px solid #2c3e50;
		background: #fff;
		margin: 0 5px;
	}
}

// SEARCH
.search-box {
	input {
		box-sizing: border-box;
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
		border: 1px solid $color-primary;
		vertical-align: top;
	}

	button {
		height: 30px;
		line-height: 30px;
		border: 1px solid $color-primary;
		background: $color-primary;
		color: #fff;
	}
}
</style>
