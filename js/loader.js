$(window).load(function(){
  setTimeout(function(){ $('#stage').removeClass("loading").addClass("loaded");
    }, 7000);

  setTimeout(function() {$('#stage').addClass("unloaded");
  }, 9000);
});