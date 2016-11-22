$(document).ready(function(){

  $("body").on("getImagesEvent", function(){
    getImages(function(data){

      console.log(data);
      // add markup after reading the incoming json with handlebars.js
      var source   = $("#images-template").html();
      var template = Handlebars.compile(source);
      var html    = template(data);
      $(".images-content").html(html);

      $('#dataTables-example').DataTable({
          responsive: true
      });

    });
  });

  $("body").trigger("getImagesEvent");
});





function getImages(callback) {
    $.ajax({
        type: 'GET',
        url:  '/rpi/images/json',
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
