webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/images/sun.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sun.1fd9ab39111058ac7b7a.png";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--\r\nAuthor: W3layouts\r\nAuthor URL: http://w3layouts.com\r\nLicense: Creative Commons Attribution 3.0 Unported\r\nLicense URL: http://creativecommons.org/licenses/by/3.0/\r\n--*/\r\n\r\n/* start editing from here */\r\n\r\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, nav ul, nav li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\n\r\nol, ul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after, q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n/* start editing from here */\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.txt-rt {\r\n    text-align: right;\r\n}\r\n\r\n/* text align right */\r\n\r\n.txt-lt {\r\n    text-align: left;\r\n}\r\n\r\n/* text align left */\r\n\r\n.txt-center {\r\n    text-align: center;\r\n}\r\n\r\n/* text align center */\r\n\r\n.float-rt {\r\n    float: right;\r\n}\r\n\r\n/* float right */\r\n\r\n.float-lt {\r\n    float: left;\r\n}\r\n\r\n/* float left */\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n/* clear float */\r\n\r\n.pos-relative {\r\n    position: relative;\r\n}\r\n\r\n/* Position Relative */\r\n\r\n.pos-absolute {\r\n    position: absolute;\r\n}\r\n\r\n/* Position Absolute */\r\n\r\n.vertical-base {\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* vertical align baseline */\r\n\r\n.vertical-top {\r\n    vertical-align: top;\r\n}\r\n\r\n/* vertical align top */\r\n\r\n.underline {\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px solid #eee;\r\n    margin: 0 0 20px 0;\r\n}\r\n\r\n/* Add 5px bottom padding and a underline */\r\n\r\nnav.vertical ul li {\r\n    display: block;\r\n}\r\n\r\n/* vertical menu */\r\n\r\nnav.horizontal ul li {\r\n    display: inline-block;\r\n}\r\n\r\n/* horizontal menu */\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n\r\n/*end reset*/\r\n\r\n/*--login start here--*/\r\n\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 100%;\r\n    background: #313144;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    transition: 0.5s all;\r\n    -webkit-transition: 0.5s all;\r\n    -moz-transition: 0.5s all;\r\n    -o-transition: 0.5s all;\r\n}\r\n\r\n/*--header start here--*/\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 2em;\r\n    color: #fff;\r\n    margin: 3em 0em 2em 0em;\r\n    font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\n.element {\r\n    width: 40%;\r\n    margin: 0 auto 7em;\r\n}\r\n\r\n.ele-strip {\r\n    background: #fda660;\r\n    padding: 1em 1em;\r\n    margin: -3px 0px 0px 0px;\r\n}\r\n\r\n.ele-strip a\r\n{\r\n    cursor: pointer;\r\n}\r\n\r\n.temperatur {\r\n    background: #5fb3f9;\r\n    text-align: center;\r\n    padding: 1em 1em;\r\n    border-radius: 5px;\r\n    margin-bottom: 2.5em;\r\n}\r\n\r\n.ele-strip ul {\r\n    text-align: center;\r\n}\r\n\r\n.ele-strip ul li {\r\n    display: inline-block;\r\n    padding: 0em 0.5em;\r\n    border-right: 1px solid #fff;\r\n}\r\n\r\n.ele-strip ul li a {\r\n    font-size: 1em;\r\n    color: #fff;\r\n}\r\n\r\n/*--teddy-bear--*/\r\n\r\n.teddy-bear {\r\n    text-align: center;\r\n}\r\n\r\n.teddy-text {\r\n    background: #fd7b87;\r\n    padding: 1.2em 1em;\r\n    border-radius: 5px 5px 0px 0px;\r\n}\r\n\r\nspan.line {\r\n    background: url(data:image/png;base64,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)no-repeat;\r\n    width: 103px;\r\n    height: 2px;\r\n    display: block;\r\n    margin: 0.6em auto 0em;\r\n}\r\n\r\nspan.w-line {\r\n    background: url(data:image/png;base64,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)no-repeat;\r\n    width: 103px;\r\n    height: 2px;\r\n    display: block;\r\n    margin: 0.73em auto 0.72em;\r\n}\r\n\r\n.teddy-text h4 {\r\n    color: #fff;\r\n}\r\n\r\n.teddy-text img {\r\n    width: 100px;\r\n    border-radius: 70px;\r\n    border: 3px solid #fff;\r\n}\r\n\r\n.teddy-follow {\r\n    background: #f2f1ef;\r\n    padding: 0.7em 0em 0.7em 0em;\r\n    border-radius: 0px 0px 4px 4px;\r\n}\r\n\r\n.teddy-follow li {\r\n    display: inline-block;\r\n    padding: 0em 0.9em;\r\n}\r\n\r\n.teddy-follow li h3 {\r\n    font-size: 0.95em;\r\n    color: #000;\r\n    font-weight: bold;\r\n}\r\n\r\n.teddy-follow li p {\r\n    font-size: 0.8em;\r\n    color: #8A8A8A;\r\n}\r\n\r\n.teddy-follow li.folw-h {\r\n    border-right: 1px solid #000;\r\n}\r\n\r\n.element-bg-img img {\r\n    border-radius: 6px 6px 0px 0px;\r\n}\r\n\r\nspan.cloud {\r\n    background: url(data:image/png;base64,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)no-repeat;\r\n    width: 50px;\r\n    height: 50px;\r\n    display: inline-block;\r\n}\r\n\r\nspan.sun {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/images/sun.png")) + ")no-repeat;\r\n    width: 50px;\r\n    height: 50px;\r\n    display: inline-block;\r\n}\r\n\r\nspan.rain {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEkUlEQVRo3u2ZTYiVZRTH/+flIiIiIkOIDDKEgQzSwsyFiIlEiLgwlZA2bdoUrSSsRQxIuHDlQiRChkkGaVERrkQMVFoMJJGQH/kxfSDjBxWRSpPa/H8tekdeHt577zv3Y+4VOvBy4d77nuf5n4//ec55Ql0WQJI2ALsiYoOkVZKWSXok6Q5wUdLpiPg8Im6p3wQQsNX2t7ap8DwERm0P9hOIRcCYbapK4b9/2H6tH0AsBSYa7Pk+cB24CTyuA3YG2NdLEAuAMyWb+x34EBi2nUmS7VnPbQW+tD1T4qU35zMPBmyvtb3e9qES634BDFTQtdn2zeTdaWBNNwEMAgeAq3kYlMa77Y+BrKpe2yttTybqzuXM11EANdsjuaWayTnbtRbWeL6oPzfK5o6BsL0YOF2RhB7bHm7DYAcTfcc66YlTZfwPTAKfAePA1zl9HmvTaIO2Zwrr/DpLEu16Y6Sw8VnlE8BG2+l/M9sL2iUR2+cTo/1k+0Pby1tVutL2dKJ0HFjQZUYcrXMC+NP226kBq3gjjdeJVpK4BSAfNMnDUaBWpbBtAfYCUwm1bpinGvWs7b3AUdtX6oA5XErNOYB9wN06L17tOKdXL7xbgCslNWtHGkIriglWSOric7yX5zjbS/L6VNzT5JMQA5bZvpLQahnVjvTBoXQAuJ3sbWctd9uRiFidhM3FiBgHbkTEAPCcpLO9BhIRv9k+IOlw4etXBaxLPQAcmA9maiPEBpKCeV3AkQTIeC8Seo5AZHuqAGRawKWEBVapzyVPh+Ip+bFmq3YOYmrOFbNHDVxy2ridSSrmwqOIeBqAbIqIhYW9Xs4k3SowwqCkgX4Pq4h4rzBqUkScku1Pkx57pM+BvFNsumxPAysEbC+yFvDQ9vY+BFAD3k9ba9uHJCmADJiIiPUF1/0DfBIRY5JuSOoVA2SSngE2SXorItJBxDVJL0bEvcg3PyxpAliSx1xZXNaL18rfV4j9eiNXpfsC7kTESxFxTZKiUGQ2SjqRz2X7XS5ExK6I+LFexRyyfaIkDimbCCa5NR9y1/a7Za101KmaayJiB/BCRCwrdmIR8SQM0s80TAr02ChEGum0pHuSfpB0Bvgqy7K/9b/07jy1sasj0y4DyGxvy2dkALu7sgjwSs7r3fDAy+nFEFDprqTS9M52DdgNnAdOSRruMIhFksaA05LWtqKjVsFK2yUdzIvmnAwwByDjknbWs2NbQGwvknQ0Il7vck6sbgBC+u/StDUgOeePStrTjpUqyuomv99qJ0cGJTVKsk4WpZ8b/PYAuNwOkKGcoVT2VLVSHqIZsK3eHQdwAThbZ62DWZb91U7crgBm6kzDp4GlFal6j+3vZq8Fmox3ThYo937ee2SdSMKxOhc7+ysw3Wbb3yfv/tLsPdtDwDpgcSfZZKHtj/KOcfaKeW8jK+Ug9ifDM5p5ZL6GYUuAoSoXO8DuBrPjyW7us+lYNMuye/lRuoq8UTyiJx3fg273xJ2UpS3SbN8B+abYZxfoWpJOPjVHcNvLgamSFvhMty9PuwFmJXAcuGn7EjACLOz2uv8C6GdJt4C7vEIAAAAASUVORK5CYII=)no-repeat;\r\n    width: 50px;\r\n    height: 50px;\r\n    display: inline-block;\r\n}\r\n\r\n.element-left {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.element-right {\r\n    float: right;\r\n    width: 35%;\r\n}\r\n\r\n.temperatur h5 {\r\n    color: #fff;\r\n    font-size: 1em;\r\n}\r\n\r\n.temperatur h2 {\r\n    color: #fff;\r\n    font-size: 3.2em;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.temperatur h6 {\r\n    font-size: 1em;\r\n    color: #fff;\r\n    margin: 1em 0em 0em 0em;\r\n}\r\n\r\nul li.anc-bor {\r\n    border-right: none;\r\n}\r\n\r\n/*--scroll --*/\r\n\r\n.span_7 {\r\n    padding-left: 0;\r\n}\r\n\r\n.span_8 {\r\n    text-align: center;\r\n    padding-left: 0;\r\n}\r\n\r\n.col_2 {\r\n    background-color: #fff;\r\n    padding: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.grid-1, .grid-2, .grid-3, .grid-4 {\r\n    display: inline-block;\r\n}\r\n\r\n.grid-1 {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.grid-1, .grid-3 {\r\n    margin-right: 10%;\r\n    width: 27%;\r\n}\r\n\r\n.activity-row, .activity-row1 {\r\n    text-align: left;\r\n}\r\n\r\ni.text-info {\r\n    float: left;\r\n    line-height: 60px;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.activity-img {\r\n    text-align: center;\r\n}\r\n\r\n.activity-img img {\r\n    display: inline-block;\r\n}\r\n\r\n.activity-desc h5 {\r\n    color: #000;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.activity-desc h5 a {\r\n    color: #000;\r\n}\r\n\r\n.activity-desc p {\r\n    color: #999;\r\n    font-size: 0.85em;\r\n    line-height: 1.7em;\r\n}\r\n\r\n.activity-desc h6 {\r\n    color: #fd7b87;\r\n    font-size: 13px;\r\n    margin: 13px 0 0 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.activity-row {\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.scrollbar {\r\n    height: 115px;\r\n    background: #fff;\r\n    overflow-y: scroll;\r\n    padding: 1em 1em 0em 1em;\r\n}\r\n\r\n.activity_box {\r\n    background: #fff;\r\n    min-height: 120px;\r\n}\r\n\r\n#style-2::-webkit-scrollbar-track {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n#style-2::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n#style-2::-webkit-scrollbar-thumb {\r\n    background-color: #fda660;\r\n}\r\n\r\n.activity-desc {\r\n    float: left;\r\n    width: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n.activity-img {\r\n    float: right;\r\n    width: 50%;\r\n}\r\n\r\n.activity-img ul li {\r\n    display: inline-block;\r\n}\r\n\r\n.activity-img ul li img {\r\n    border-radius: 50px;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n/*--village start here--*/\r\n\r\n.village {\r\n    background: #fff;\r\n    padding: 1.5em 1em;\r\n    border-radius: 0px 0px 5px 5px;\r\n}\r\n\r\n.village h3 {\r\n    text-align: center;\r\n    font-size: 0.95em;\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.copy-right {\r\n    text-align: center;\r\n    padding: 0em 0em 2em 0em;\r\n}\r\n\r\n.copy-right p {\r\n    font-size: 1em;\r\n    color: #fff;\r\n    line-height: 1.6em;\r\n}\r\n\r\n.copy-right p a {\r\n    color: #fd7b87;\r\n}\r\n\r\n.copy-right p a:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n/*--meadia quries start here--*/\r\n\r\n@media(max-width:1600px) {\r\n    .temperatur {\r\n        margin-bottom: 1.95em;\r\n    }\r\n}\r\n\r\n@media(max-width:1440px) {\r\n    .jspVerticalBar {\r\n        width: 15px!important;\r\n    }\r\n    .ele-strip ul li {\r\n        padding: 0em 0.8em;\r\n    }\r\n    .element-right {\r\n        width: 40%;\r\n    }\r\n    .element {\r\n        width: 43%;\r\n    }\r\n    .ele-strip ul li {\r\n        padding: 0em 0.4em;\r\n    }\r\n    .teddy-text {\r\n        padding: 1.2em 1em;\r\n    }\r\n    .temperatur {\r\n        margin-bottom: 1.5em;\r\n    }\r\n}\r\n\r\n@media(max-width:1366px) {\r\n    .element-left {\r\n        width: 55%;\r\n    }\r\n    .element {\r\n        width: 44%;\r\n    }\r\n    .temperatur {\r\n        margin-bottom: 2.5em;\r\n    }\r\n}\r\n\r\n@media(max-width:1280px) {\r\n    .teddy-text h4 {\r\n        font-size: 0.95em;\r\n    }\r\n    .element {\r\n        width: 47.5%;\r\n    }\r\n}\r\n\r\n@media(max-width:1024px) {\r\n    .element {\r\n        width: 58.5%;\r\n    }\r\n    .temperatur {\r\n        margin-bottom: 2.3em;\r\n    }\r\n}\r\n\r\n@media(max-width:768px) {\r\n    .element {\r\n        width: 76.5%;\r\n    }\r\n    .temperatur {\r\n        margin-bottom: 2.1em;\r\n    }\r\n}\r\n\r\n@media(max-width:736px) {\r\n    .temperatur {\r\n        margin-bottom: 2em;\r\n    }\r\n}\r\n\r\n@media(max-width:667px) {\r\n    .element {\r\n        width: 85.5%;\r\n    }\r\n    .temperatur {\r\n        margin-bottom: 2em;\r\n    }\r\n}\r\n\r\n@media(max-width:640px) {\r\n    .element {\r\n        width: 90.5%;\r\n    }\r\n    .temperatur {\r\n        margin-bottom: 2.3em;\r\n    }\r\n    .teddy-text {\r\n        padding: 1em 1em;\r\n    }\r\n}\r\n\r\n@media(max-width:600px) {\r\n    .element {\r\n        width: 94.5%;\r\n    }\r\n}\r\n\r\n@media(max-width:568px) {\r\n    .element {\r\n        width: 98%;\r\n    }\r\n}\r\n\r\n@media(max-width:480px) {\r\n    .element-left {\r\n        width: 100%;\r\n        float: none;\r\n    }\r\n    .element-right {\r\n        width: 100%;\r\n        float: none;\r\n        margin: 1.5em 0em 0em 0em;\r\n    }\r\n    .element {\r\n        width: 80%;\r\n    }\r\n    h1 {\r\n        font-size: 1.8em;\r\n        margin: 1.5em 0em 1em 0em;\r\n    }\r\n    .jspContainer {\r\n        width: 335px !important;\r\n    }\r\n    .temperatur {\r\n        margin-bottom: 1.5em;\r\n    }\r\n}\r\n\r\n@media(max-width:414px) {}\r\n\r\n@media(max-width:384px) {}\r\n\r\n@media(max-width:375px) {}\r\n\r\n@media(max-width:320px) {\r\n    h1 {\r\n        font-size: 1.5em;\r\n        margin: 1em 0em 1em 0em;\r\n    }\r\n    .element {\r\n        width: 95%;\r\n        margin: 0 auto 2em;\r\n    }\r\n    .jspContainer {\r\n        width: 259px !important;\r\n    }\r\n    .row.row1.scroll-pane.jspScrollable {\r\n        width: 260px!important;\r\n    }\r\n    .ele-strip ul li a {\r\n        font-size: 0.9em;\r\n    }\r\n    .top-on1 h4 {\r\n        font-size: 0.84em;\r\n    }\r\n    .top-on1 h5 {\r\n        font-size: 0.75em;\r\n    }\r\n    .copy-right p {\r\n        font-size: 0.85em;\r\n    }\r\n    .activity-desc h5 {\r\n        color: #000;\r\n        font-size: 0.95em;\r\n    }\r\n    .activity-desc p {\r\n        font-size: 0.8em;\r\n    }\r\n    .activity-desc h6 {\r\n        font-size: 12px;\r\n    }\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map