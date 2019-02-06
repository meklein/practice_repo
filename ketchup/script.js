$.ketchup.validation('word', 'Test - Comment is Required', function(form, el, value) {
  if(value.length > 0) {
    return true;
  } else {
    return false;
  }
});

$('#own-validation').ketchup();