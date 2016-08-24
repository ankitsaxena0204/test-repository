function awesomeClick(){
  alert('awesome click triggered');
  $.ajax({url: "demo_test.txt", 
    success:function(){
        alert("Succeed");
            },

    error:function(){
        alert("Error");
            }});
}