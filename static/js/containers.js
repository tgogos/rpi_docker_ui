$(document).ready(function(){

  $("body").on("getContainersEvent", function(){
    getContainers(function(data){

      console.log(data);
      // add markup after reading the incoming json with handlebars.js
      var source   = $("#containers-template").html();
      var template = Handlebars.compile(source);
      var html    = template(data);
      $(".containers-content").html(html);

    });
  });

  $("body").trigger("getContainersEvent");
});





function getContainers(callback) {
    $.ajax({
        type: 'GET',
        url:  '/rpi/containers/json?all=1',
        //url:  '/api/images',
        // crossDomain: true,
        dataType: 'json',
        success: function(data)
        {
          if( callback ) callback(data);
        },
        error: function(err)
        {
          // ...
        },
        timeout: 3000
    });
}
