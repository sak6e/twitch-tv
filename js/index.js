$(document).ready(function(){
  //console.log("Firing now");
  var url1="https://wind-bow.gomix.me/twitch-api/streams/esl_sc2";
  $.ajax({
    type:"GET",
  url:url1,
    async:true,
    dataType:"jsonp",
    success:function(data){
      if(data.stream===null){
        $('#st1').html("Offline");
      }
      else{
        $('#st1').html(data.stream.status);
        $('#st1').css("color","yellow");
      }
    },
    error(err) {
      console.log("Error!");
      console.log(JSON.stringify(err));
    }
  });
  var url2="https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
  $.ajax({
    type:"GET",
  url:url2,
    async:true,
    dataType:"jsonp",
    success:function(data){
      if(data.stream===null){
        $('#st2').html("Offline");
      }
      else{
        $('#st2').html(data.stream.status);
        $('#st2').css("color","yellow");
      }
    },
    error(err) {
      console.log("Error!");
      console.log(JSON.stringify(err));
    }
  });
  var url3="https://wind-bow.gomix.me/twitch-api/streams/ogamingsc2";
  $.ajax({
    type:"GET",
  url:url3,
    async:true,
    dataType:"jsonp",
    success:function(data){
      if(data.stream===null){
        $('#st3').html("Offline");
      }
      else{
        $('#st3').html(data.stream.game);
        $('#st3').css("color","yellow");
      }
    },
    error(err) {
      console.log("Error!");
      console.log(JSON.stringify(err));
    }
  });
});