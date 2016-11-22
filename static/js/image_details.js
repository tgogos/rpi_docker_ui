$(document).ready(function(){

  $("body").on("getImageDetailsEvent", function(){
    getImageDetails(function(data){

      console.log(data);
      // add markup after reading the incoming json with handlebars.js
      var source   = $("#image-template").html();
      var template = Handlebars.compile(source);
      var html    = template(data);
      $(".image-content").html(html);

      $('#dataTables-example').DataTable({
          responsive: true
      });

    });
  });

  $("body").trigger("getImageDetailsEvent");
});





function getImageDetails(callback) {
    imageID = document.URL.split("image_details/?")[1];

    $.ajax({
        type: 'GET',
        url:  '/rpi/images/'+ imageID +'/json',
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
