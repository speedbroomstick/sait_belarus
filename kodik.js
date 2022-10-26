function addAlert()
{
    $(".alertmessage").prepend('<div class="alert success"><strong>Угадали!</strong> Вы большой молодец!.</div>');
}
function addAlertWARNING()
{
    $(".alertmessage").prepend('<div class="alert"><strong>Мимо!</strong> Попробуйте еще разок!.</div>');
}
function closeAll()
{
  $(".alert").fadeOut(2500);
  var close = document.getElementsByClassName("closebtn");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function(){ div.style.display = "none"; }, 600);
    }
  }
}
let time = setInterval("closeAll()");