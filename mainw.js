
$("#entry button").on("click", saveOnePost);

function saveOnePost() {
    var title = $("#ftitle").val();
    var fn = $("#firstname").val();
    var sn = $("#secondname").val();
    var search = $("#search").val();
    var search2 = $("#search2").val();
    var search3 = $("#search3").val();
    var search4 = $("#search4").val();
    var search5 = $("#search5").val();
    var search6 = $("#search6").val();
    var search7 = $("#search7").val();
    var search8 = $("#search8").val();
    var search9 = $("#search9").val();
    var search10 = $("#search10").val();
    var search11 = $("#search11").val();
    var search12 = $("#search12").val();
    var search13 = $("#search13").val();
    var search14 = $("#search14").val();
    var search15 = $("#search15").val();
    var search16 = $("#search16").val();
    var search17 = $("#search17").val();
    var search18 = $("#search18").val();
    var search19 = $("#search19").val();
    var search20 = $("#search20").val();
    var search21 = $("#search21").val();
    var search22 = $("#search22").val();
    var search23 = $("#search23").val();
    var search24 = $("#search24").val();
    var search25 = $("#search25").val();
    var search26 = $("#search26").val();
    var search27 = $("#search27").val();
    
    let conteudo = '<h1>'+ title +'</h1><p> Once upon a time there was a '+ search + ' named '+ fn +', from '+ search25 +'. They had really '+ search2 +' and '+ search3 +'. They were known for '+ search4 +' and everyday they would '+ search5 +'. </p> <p> But on a '+ search6 +' '+ fn +' was in '+ search7 +' and a '+ search27 +' named '+ sn +' showed up. '+ sn +' was know for '+ search8 +'. Suddenly, something unexpected happened. '+ sn +' '+ search9 +' and disappeared. They '+ search10 +'. '+ fn +' was devastated. </p>  <p>'+ fn +' didn’t know what to do so they went to '+ search11 +' looking for '+ search12 +' who gave them advice: <br> -'+ search13 +' <br> -'+ search14 +' - '+ fn +' replied.</p> <p>'+ fn +' was '+ search15 +' and decided to go looking for '+ sn +'. After '+ search16 +' for '+ search17 +' hours they finally found them. '+ sn +' was '+ search18 +', and said: <br>- '+ search19 +' </p> <p>Unexpectedly '+ fn +' '+ search20 +' and said: <br> - '+ search21 +'</p> <p>'+ fn +' was so '+ search22 +' and decided to '+ search23 +' with '+ search24 +'. They lived '+ search26 +' ever after.</p>'
    console.log(conteudo);
    localStorage.setItem(title, conteudo);

//apagar inputs
    var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].type == "text") {
        elements[ii].value = "";
      }
    }
  
  }

