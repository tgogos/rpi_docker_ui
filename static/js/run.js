$(document).ready(function(){

  $("body").on("getImagesEvent", function(){
    getImages(function(data){

      console.log(data);
      // add markup after reading the incoming json with handlebars.js
      var source   = $("#run-template").html();
      var template = Handlebars.compile(source);
      var html    = template(data);
      $(".run-content").html(html);




      $(".btn-run").on("click",function(event){

        container_name = $('.fc-name').val();

        jsonObj      = {
                          "Cmd": ["/bin/bash"],
                          "Image": "",
                          "Labels": {},
                          "HostConfig": {
                            "Privileged": false
                          }
                        };

        jsonObj.Image  = $('.select-image').val();
        //jsonObj.Cmd[0] = $('.fc-cmd').val();
        console.log(jsonObj);

        $.ajax({
            type: 'POST',
            url:  ('/rpi/containers/create?name=' + container_name),
            dataType: 'json',
            data: JSON.stringify(jsonObj),
            contentType: "application/json",
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
