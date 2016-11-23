$(document).ready(function(){

  $("body").on("getContainerDetailsEvent", function(){
    getContainerDetails(function(data){

      console.log(data);
      // add markup after reading the incoming json with handlebars.js
      var source   = $("#container-template").html();
      var template = Handlebars.compile(source);
      var html    = template(data);
      $(".container-content").html(html);

      $('#dataTables-example').DataTable({
          responsive: true,
          paging: false
      });



      $(".btn-start").on("click",function(event){

        containerID = $(this).attr('data-container-id');

        $.ajax({
            type: 'POST',
            url:  '/rpi/containers/'+ containerID +'/start',
            dataType: 'json',
            success: function(data,textStatus,jqXHR)
            {
              if (jqXHR.status == "204") {
                console.log('started...');
                location.reload();
              }
            },
            error: function(err)
            {
              console.log(err);
            },
            timeout: 30000
        });
      });



      $(".btn-restart").on("click",function(event){

        containerID = $(this).attr('data-container-id');

        $.ajax({
            type: 'POST',
            url:  '/rpi/containers/'+ containerID +'/restart',
            dataType: 'json',
            success: function(data,textStatus,jqXHR)
            {
              if (jqXHR.status == "204") {
                console.log('restarted...');
                location.reload();
              }
            },
            error: function(err)
            {
              console.log(err);
            },
            timeout: 30000
        });
      });




      $(".btn-stop").on("click",function(event){

        containerID = $(this).attr('data-container-id');

        $.ajax({
            type: 'POST',
            url:  '/rpi/containers/'+ containerID +'/stop',
            dataType: 'json',
            success: function(data,textStatus,jqXHR)
            {
              if (jqXHR.status == "204") {
                console.log('stoped...');
                location.reload();
              }
            },
            error: function(err)
            {
              console.log(err);
            },
            timeout: 30000
        });
      });

    });
  });

  $("body").trigger("getContainerDetailsEvent");

});





function getContainerDetails(callback) {
    containerID = document.URL.split("container_details/?")[1];

    $.ajax({
        type: 'GET',
        url:  '/rpi/containers/'+ containerID +'/json',
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
