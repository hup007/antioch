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
  $ajaxUtils.sendGetRequest(
    frontBody,
    function(responseText) {
      insertHtml('#main-content', responseText)
    },
    false);
});

// Load Front on click
mi.loadFront = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    frontBody,
    function(responseText) {
      insertHtml('#main-content', responseText)
    },
    false);
};

// Load Page2 on click
mi.loadPage2 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    page2Body,
    function(responseText) {
      insertHtml('#main-content', responseText)
    },
    false);
};

// Load Page3 on click
mi.loadPage3 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    page3Body,
    function(responseText) {
      insertHtml('#main-content', responseText)
    },
    false);
};

// Load Page4 on click
mi.loadPage4 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    page4Body,
    function(responseText) {
      insertHtml('#main-content', responseText)
    },
    false);
};

// Load Page5 on click
mi.loadPage5 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    page5Body,
    function(responseText) {
      insertHtml('#main-content', responseText)
    },
    false);
};

//Scroll to ID on click
 mi.scroll = function(element) {
   var ele = document.getElementById(element);
   console.log(ele);
   window.scrollTo(ele.offsetLeft, ele.offsetTop);
 };

//Sticky Elements
// document.addEventListener('scroll', (event) => {
//     var sel = document.getElementById("stick-tab-p4-1");
//     var sticky = sel.offsetTop;
//     if (window.pageYOffset >= 1000) {
//       sel.classList.add("sticky")
//     } 
//     else {
//       sel.classList.remove("sticky");
//     }
//   });

//Sidebar/Dropdown Menu

$(document).ready(function(){
  $(".dropdown-toggle").dropdown();
});

mi.feat = function() {
  $(document).ready(feat = function(){
    $mi.loadFront();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('feature');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.focus = function() {
  $(document).ready(feat = function(){
    $mi.loadPage2();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('focus');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.composer = function() {
  $(document).ready(feat = function(){
    $mi.loadPage2();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('composer');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.tech = function() {
  $(document).ready(feat = function(){
    $mi.loadPage5();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('tech');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.basic = function() {
  $(document).ready(feat = function(){
    $mi.loadPage5();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('basic');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.perspective = function() {
  $(document).ready(feat = function(){
    $mi.loadPage4();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('perspective');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.interview = function() {
  $(document).ready(feat = function(){
    $mi.loadPage3();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('interview');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.history = function() {
  $(document).ready(feat = function(){
    $mi.loadPage3();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('history');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.editor = function() {
  $(document).ready(feat = function(){
    $mi.loadPage4();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('editor');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

mi.upcoming = function() {
  $(document).ready(feat = function(){
    $mi.loadFront();
      setTimeout(function() {
        $(document).ready(function(){
          var ele = document.getElementById('upcoming');
          window.scrollTo(ele.offsetLeft, ele.offsetTop);
        });
      },500);
  });
}

global.$mi = mi;

})(window);

