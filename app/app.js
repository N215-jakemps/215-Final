

import * as MODEL from "../model/model.js";

function route(){
    let hashTag = window.location.hash;
    console.log(hashTag);
    let pageName = hashTag.replace("#", "");
    console.log(pageName);
    let pageContent = pageName + "Content";
    console.log(pageContent);
  
    if (pageName == "") {
      pageContent = "homeContent";
    }

    MODEL.loadPageContent(pageContent);
}


function initApp(){
    $(window).on("hashchange", route);
  
    //checks for changes in the hash
    route();
    //this is a test
}


$(document).ready(function(){

    //comment out the load page content to prevent preload of the home page to fix edits
    //loadPageContent('gallery');
    initApp();
    
});