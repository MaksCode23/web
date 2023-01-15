$(loadCategories());

function loadCategories() {
  $(".category").hide()
  $(".catalog").hide()
  $.ajax({
    url: "data/categories.json",
    success: function(result) {
      $.each(result, function(index, item) {
        var categories = $(".category:first").clone()
        var id = item.id;
        var shortName = item.short_name;
        var name = item.name;
        var notes = item.notes;
        var url = item.url;
        $(categories).find(".short_name").html(shortName);
        $(categories).find(".name").html(name);
        $(categories).find(".notes").html(notes);
        if (item.id==5){
          var tempid =  Math.floor(Math.random()*(item.id-1)+1);
          $.each(result, function(index, item){
            if(item.id == tempid){
              var url = item.url;
              var shortName = item.short_name;
              $(categories).on("click", function() {
                loadCatalogs(shortName, url);
              });
            }
          });
        }
        $(categories).on("click", function() {
              loadCatalogs(shortName, url);
        });
        $(categories).find(".img").attr("src", "images/categories/" + shortName + ".jpg");
        $(categories).show()
        $(categories).appendTo($(".container"))
      });
    }
  });
}

function loadCatalogs(categoryShortName, link) {
    $(".category").hide()
    $(".catalog").hide()
    $.ajax({
      url: link,
      success: function(result) {
        $.each(result.catalog_items, function(index, item) {
          var catalogs = $(".catalog:first").clone()
          var id = item.id;
          var shortName = item.short_name;
          var name = item.name;
          var description = item.description;
          var price = item.price;
          $(catalogs).find(".short_name").html(shortName.substring(2));
          $(catalogs).find(".name").html(name);
          $(catalogs).find(".description").html(description);
          $(catalogs).find(".price").html(price);
          $(catalogs).find(".img").attr("src", "images/catalog/" + categoryShortName + "/" + shortName + ".jpg");
          $(catalogs).show()
          $(catalogs).appendTo($(".container"))
        });
      }
    })

};