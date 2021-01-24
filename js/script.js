/*********************************
 The Music Interlude Newsletter
 Author: Nerissa Goh

 Log:
 15 Jan 2021 
 -new today
 -Use IIFE to keep data private
 -Try ajax loading on mainbody for pg1-5

 19 Jan 2021:
 -resolved getElementById binding issue


 *********************************/


(function (global) {

//Define Namespace
let mi = {};

//Define Links
let frontBody = "../snippets/front_snippet.html";
let page2Body = "../snippets/page2_snippet.html";
let page3Body = "../snippets/page3_snippet.html";
let page4Body = "../snippets/page4_snippet.html";
let page5Body = "../snippets/page5_snippet.html";
let sidebarBody = "../snippets/sidebar_snippet.html";

let sel1Url = "https://hup007.github.io/json//sel1.json"

//Functions
//Function for inserting innerHTML for 'select'
let insertHtml = function (selector, html) {
  let targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Function for showing loading icon inside element identified by 'selector'.
let showLoading = function (selector) {
  let html = "<div class='text-center'>";
  html += "<img src='../images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Function to return substitute of '{{propName}}'
// with propValue in given 'string'
let insertProperty = function (string, propName, propValue) {
  let propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", (event) => {
  // On first load, show home view
  showLoading("#main-content");
});



global.$mi = mi;

})(window);

