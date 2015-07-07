
$(document).ready( function(){
		displayGearList();
		$("#addButton").click(addItem);
		$("#clearButton").click(function(){
		  localStorage.removeItem('theList');
		  $('#gearList').html(" ");
		});
	});

function addItem(e) {
  var entry = {};
  entry.item = $("#item").val();

  var dictionary = getDictionary();
  dictionary.push(entry);
  saveDictionary(dictionary);
  displayGearList(getDictionary());
  e.preventDefault();
}

function clearEntry (input, val) {
	if (input.value == val)
		input.value="";
}

function displayGearList(){
  var d = getDictionary();
  $gearList = $('#gearList');
  $gearList.html(" ");
  $.each(d, function(index, entry){
    $gearList.append("<li>" + "<input type='checkbox'/>" + entry.item + "</label></li><dd>" + "</dd>");
    	$("li").addClass("gearList")
  });
}

function getDictionary(){
  if (localStorage.getItem('theList') === null){
    return([]);
  } else {
    return(JSON.parse(localStorage.getItem('theList')));
  }
}

function saveDictionary(d) {
  localStorage.setItem('theList', JSON.stringify(d));
}