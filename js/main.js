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
        $("#addButton").click(addWord);

        $("#clearButton").click(function(){
          localStorage.removeItem('theDictionary');
          $('#wordList').html(" ");
        });
      });

      function addWord(e) {
        var entry = {};
        entry.word = $("#word").val();
        // entry.definition = $("#definition").val();

        var dictionary = getDictionary();
        dictionary.push(entry);
        saveDictionary(dictionary);
        displayDictionary(getDictionary());
        e.preventDefault();
      }

      function displayDictionary(){
        var d = getDictionary();
        $wordList = $('#wordList');
        $wordList.html(" ");
        $.each(d, function(index, entry){
          $wordList.append("<li>" + "<input type='checkbox'/>" + entry.word + "</label></li><dd>" + "</dd>");
          	$("li").addClass("wordList")
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