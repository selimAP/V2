function myFunction() {
  var textBegin = document.getElementById("readMoreTextBegin");
  var moreText = document.getElementById("readMoreText");
  var readMoreButton = document.getElementById("readMoreButton");

  if (textBegin.style.display === "none") {
    textBegin.style.display = "inline";
    readMoreButton.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    textBegin.style.display = "none";
    readMoreButton.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

let aboutTitle = document.getElementById('animation-drop');



setTimeout(function() {
  aboutTitle.style.display = 'block';

}, 1350);


(function () {
  function init() {
    let date = new Date();
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    document.getElementById('time').innerHTML = date.toLocaleString('en-US', options);
  }

  document.addEventListener("DOMContentLoaded", function () {
    init();
  });
})();


