$(document).ready(function(){

$('.movie-detail').hide();
$('.loader').hide();
$('#title_name').keypress(function(e){
  if(e.keyCode == 13){
    $('.movie-detail').fadeOut("fast");
    $('.message').css('margin-top', '60px')
    $('.loader').show("slow").delay(700).fadeOut("slow");
    $('.movie-detail').delay(1800).fadeIn("slow");

  }

})


$('#title_name').keypress(function(e){
  var title = $('#title_name').val();
  if(e.keyCode == 13){
    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json",
      dataType: "JSON",
      success: function(response){
        console.log("success", response)
        $('#poster').children().replaceWith('<img src='+ response.Poster +'>')
        $('#Title').text(response.Title)
        $('#Year').text(response.Year)
        $('#Rated').text(response.Rated)
        $('#Released').text(response.Released)
        $('#Runtime').text(response.Runtime)
        $('#Genre').text(response.Genre)
        $('#Director').text(response.Director)
        $('#Writer').text(response.Writer)
        $('#Actors').text(response.Actors)
        $('#Language').text(response.Language)
        $('#Country').text(response.Country)
        $('#Awards').text(response.Awards)
      }
    })
  }
})

$('#title_name').keyup(function(e){
  if(e.keyCode == 13){
    $('#title_name').val("");
  }
})

$('.message > span').hover(
  function(){
  $('.message > span').replaceWith('<img src='+'images/icon.png'+'>')
  },
  function(){
  $('.message >img').children().replaceWith('<span>Enter</span>')
  } 

)



})