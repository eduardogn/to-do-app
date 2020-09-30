// A $( document ).ready() block.
$(document).ready(function() {
   console.log( "ready!" );

   // Mark Task as Completed
   $("ul").on("click", ".check", function(event) {
      $(this).parents().eq(1).toggleClass("completed");
   });

   // Delete Task
   $("ul").on("click", ".delete", function(event) {
      if (confirm("Are you sure you want to delete this item?")) {
         $(this).parents().eq(1).slideUp(500,function(){
            $(this).remove();
         });
         event.stopPropagation();
      }
   });

   //Insert new task
   $("input[type='text'").keypress(function(event){
      if(event.which === 13) {
         var newItem = $(this).val();
         $(this).val("");
         $("#todolist").append("<li><span><i class=\"far fa-trash-alt delete\"></i><i class=\"far fa-check check\"></i> </span> "+ newItem + "</li>");
      }

   });

});



