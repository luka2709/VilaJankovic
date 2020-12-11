$(document).ready(function(){
  var datum = new Date();
  $("#calendar").val((datum.getMonth()+1) + "/"  + datum.getDate() + "/" + datum.getFullYear());
  
    $("#calendar").datepicker({
    });
    
});

