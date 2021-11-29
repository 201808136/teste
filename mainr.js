var archive = [];
var titulo = [];
var url = [];


//titulo
for (var i = 0; i < localStorage.length; i++) {
  archive[i] = localStorage.getItem(localStorage.key(i));
  $('#read').append("<div id=" + i + ">" + archive[i] + "</div>");
  console.log(localStorage.key(i));
  titulo[i] = localStorage.key(i);
  $('#myImg').after('<img src="" alt="" id="cover' + i + '">');
  
  $('#' + i).append('<img src="" alt="" id="img' + i + '">');
  //$('#' + i).before('<img src="" alt="" id="img' + i + '">');
  url[i] = "https://loremflickr.com/320/240/" + titulo[i];
  $("#img" + i + "").attr("src", url[i]);
  $("#myImg").attr("src", url[i]);

  var hh = $('#' + i).children("p");
  //$('#' + i).children("p").append('<img src="" alt="" id="p'+ i +'">');

  for (var o = 0; o < hh.length; o++) {
    $('#' + i).children("p").addClass('p' + i);
    $('#' + i).children("p").append('<br><img src="" alt="" id="p' + i + o + '">');

    //var procura = $(".p"+ i).innerHTML();

   // var url1 = "https://loremflickr.com/320/240/" + hh;
  //  $(".p" + i + " #p" + i + "0").attr("src", url1);

  var url1 = "https://loremflickr.com/320/240/" + 'dog';
  var url2 = "https://loremflickr.com/320/240/" + 'cat';
  var url3 = "https://loremflickr.com/320/240/" + 'girl';
  var url4 = "https://loremflickr.com/320/240/" + 'school';
  var url5 = "https://loremflickr.com/320/240/" + 'house';
  var url6 = "https://loremflickr.com/320/240/" + 'rat';

  //primeira imagem
  $("p:nth-child(2) #p" + i + "0").attr("src", url1);

  //segunda imagem
  $("p:nth-child(3) #p" + i + "0").attr("src", url2);

   //terceira imagem
   $("p:nth-child(4) #p" + i + "0").attr("src", url3);

   //quarta imagem
   $("p:nth-child(5) #p" + i + "0").attr("src", url4);

    //primeira imagem
  $("p:nth-child(6) #p" + i + "0").attr("src", url5);

  //segunda imagem
  $("p:nth-child(7) #p" + i + "0").attr("src", url6);


  //se o parágrafo for o primeiro tem este src

 // $("p:nth-child(2)").css("background-color", "red");
  //$("p:nth-child(3)").css("background-color", "yellow");
  //$("p:nth-child(6)").css("background-color", "red");
  //$("p:nth-child(7)").css("background-color", "yellow");
  //$("p:nth-child(8)").css("background-color", "red");
  //$("p:nth-child(9)").css("background-color", "yellow");

    // }
    /*  var url1 = "https://loremflickr.com/320/240/" + 'dog';
    $("#p"+ i +"0").attr("src", url1);
    var url2 = "https://loremflickr.com/320/240/" + 'cow';
    $("#p"+ i +"1").attr("src", url2);
    var url3 = "https://loremflickr.com/320/240/" + 'cat';
    $("#p"+ i +"2").attr("src", url3);
    }*/
    /*
    if ($(".p" + i).is(':nth-child(2)')) {
      console.log('true');
      $("p:nth-child(2)").css("background-color", "red")
      var url1 = "https://loremflickr.com/320/240/" + 'dog';
     // $("p:nth-child(2) #p" + i + "0").attr("src", url1);
  }*/
  }
}



/*
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}*/
