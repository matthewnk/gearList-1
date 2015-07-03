//allows entire entry to be clicked to check

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


// add button function

$(document).ready( function(){
        displayList();
        $("#addButton").click(addItem);

        $("#clearButton").click(function(){
          localStorage.removeItem('theList');
          $('#itemList').html(" ");
        });
      });

      function addItem(e) {
        var entry = {};
        entry.word = $("#item").val();

        var list = getList();
        list.push(entry);
        saveList(list);
        displayList(getList());
        e.preventDefault();
      }

      function displayList(){
        var d = getList();
        $itemList = $('#itemList');
        $itemList.html(" ");
        $.each(d, function(index, entry){
          $itemList.prepend("<dt>" + entry.item + "</dt><dd>" + "</dd>");
        });
      }

      function getList(){
        if (localStorage.getItem('theList') === null){
          return([]);
        } else {
          return(JSON.parse(localStorage.getItem('theList')));
        }
      }

      function saveDictionary(d) {
        localStorage.setItem('theList', JSON.stringify(d));
      }





