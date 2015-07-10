Array.prototype.slice.call(document.getElementsByTagName('li'))
    .forEach(function(li){
        var cb = li.childNodes[0]
        cb.addEventListener('click', function(e){
            e.stopPropagation()
        })
        li.addEventListener('click', function(){
            cb.checked = !cb.checked
        }, false)
    })


$(document).ready( function(){
        displayDictionary();
        $("#addButton").click(addList);

        $("#clearButton").click(function(){
          localStorage.removeItem('theDictionary');
          $('#listList').html(" ");
        });
      });

      function addList(e) {
        var entry = {};
        entry.list = $("#list").val();
        // entry.definition = $("#definition").val();

        var dictionary = getDictionary();
        dictionary.push(entry);
        saveDictionary(dictionary);
        displayDictionary(getDictionary());
        e.preventDefault();
      }

      function displayDictionary(){
        var d = getDictionary();
        $listList = $('#listList');
        $listList.html(" ");
        $.each(d, function(index, entry){
          $listList.append("<label>" + "<li>" + entry.word + "</label></li><dd>" + "</dd>");
          	$("li").addClass("listList")
        });
      }

      function getDictionary(){
        if (localStorage.getItem('theDictionary') === null){
          return([]);
        } else {
          return(JSON.parse(localStorage.getItem('theDictionary')));
        }
      }

      function saveDictionary(d) {
        localStorage.setItem('theDictionary', JSON.stringify(d));
      }