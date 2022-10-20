// // You can write JS Script here
// console.log('This Webpage is built using HTML BoilerPlate by SemiKolan')

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml6 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: (el, i) => 50 * i
//   })

@font-face { 
  font-family: News Cycle; 
    src: url('../fonts/NewsCycle-Regular.eot'); 
    src: local("News Cycle"), url('../fonts/NewsCycle-Regular.ttf'); 
} 

html
{ height: 100%;}

*
{ margin: 0;
  padding: 0;}

body
{ font: normal 90% Arial, Helvetica, sans-serif;
  color: #FFF;
  background: #323232 url(../images/pattern.png) repeat;
}

/* tell the browser to render HTML 5 elements as block */
article, aside, figure, footer, header, hgroup, nav, section { 
  display:block;
}

p
{ padding: 0 0 10px 0;
  line-height: 1.7em;
  font-size: 100% }

img
{ border: 0;}

h1, h2, h3, h4, h5, h6 
{ font: bold 150% 'News Cycle', Arial, sans-serif;
  text-shadow: 1px 1px #000;
  color: #898989;
  margin: 0 0 10px 0;}

h2
{ font: bold 150% 'News Cycle', Arial, sans-serif;}

h3
{ font: bold 120% 'News Cycle', Arial, sans-serif;}

h4, h5, h6
{ margin: 0;
  padding: 0 0 0px 0;
  font: normal 120% 'News Cycle', Arial, sans-serif;
  color: #FFF;
  line-height: 1.5em;}

h5, h6
{ font: normal 95% 'News Cycle', Arial, sans-serif;
  color: #888;
  padding-bottom: 15px;}
  
span
{ color: #FFF;}

a, a:hover
{ color: #FFF;
  background: transparent;
  outline: none;
  text-decoration: underline;}

a:hover
{ text-decoration: none;}

ul
{ margin: 2px 0 22px 30px;
  line-height: 1.7em;
  font-style: normal;
  font-size: 100%;}

ol
{ margin: 8px 0 22px 20px;}

ol li
{ margin: 0 0 11px 0;}

#main, header, #banner, #menubar, #site_content, footer, #content_grey, nav
{ margin-left: auto; 
  margin-right: auto;}
  
header
{ width: 940px;
  position: relative;
  padding: 15px 0 0 0;
  background: transparent;
  height: 140px;}
 
nav
{ width: 940px;
  height: 50px;}  
  
#menubar
{ width: 940px;
  height: 35px;
  padding-top: 15px;
  margin-bottom: 20px;
  float: left;
  text-align: center;} 
  


getIdfromurl = function(url) {
  if(url.includes("youtube.com")){

    var id = url.split('youtube.com/').pop();
    id = id.split('?v=')[1];
  return id;
  }
  else{
    var id = url.split('/').pop();
    return id;
  }
  return url;
}

Array.prototype.findLargest = function () {
    let maxValue = this[0]
    for (let i = 1; i < this.length; i++) {
        if (maxValue < this[i]) {
            maxValue = this[i]
        }
    }

    return maxValue

}

console.log("Decending order = ", numberArray.findLargest())
getImgFromId = function(id) {
  return `https://img.youtube.com/vi/${id}/hq720.jpg`;
}
  $('.search').on('click', function() {
    var url = $('input[name="url"]').val(); 
    var id = getIdfromurl(url); 
    console.log(id);
    $('.thumbnailimg').attr('src', getImgFromId(id));
    $('.downloadbutton').attr('href', getImgFromId(id)).css('display', 'inline-block');


  })

//https://i.ytimg.com/vi/FSBNe_PR47U/hq720.jpg
 
