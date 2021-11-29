
document.querySelector('#write').style.opacity = 0;
document.querySelector('#read').style.opacity = 0;

$("#keepgoing").on("click", change);

function change() {
    document.querySelector('#write').style.opacity = 1;
    document.querySelector('#read').style.opacity = 1;
    document.querySelector('#keepgoing').style.opacity = 0;
document.querySelector('#intro').style.opacity = 0;
    console.log('hi');
  }