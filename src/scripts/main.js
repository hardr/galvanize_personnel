$('document').ready(function() {
  console.log('why so ready?');

  $.ajax({
    url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
    method: 'GET',
    dataType: 'json'
  }).done(function(roleResponse) { //grab role values from API and assign to variables
    var roles = {};

    for (var i =0; i < roleResponse.length; i++) {
      roles[roleResponse[i].title] = roleResponse[i];
      $('#roles').append( //DOM manipulation to add role options/value/class
        '<option class="select-roles" value="' + roleResponse[i].title + '">' + roleResponse[i].title + '</option>'
      );
    }

    $('#roles').change(function(e) { //manipulates DOM img based on user role selection
      e.preventDefault();
      var userRole = roles[$(this).val()].img;
      $('#sprite').replaceWith('<img id="sprite" src="' + userRole +'">')
    })
  });

  $('form').on('submit', function(e) {
    e.preventDefault();

    var userPOST = {
      firstName: $('#first-name').val(),
      lastName: $('#last-name').val(),
      role: $('#roles').val()
    }

    $.ajax({
      url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/users',
      method: 'POST',
      data: userPOST,
      success: function(succ) {
        $('#message > p').replaceWith('<p>' + succ.message + '</p>');
      },
      error: function(err) {
        console.log(err);
        $('#message> p').replaceWith('<p>' + err.responseJSON.message + '</p>')
      }
    })
  })

});
