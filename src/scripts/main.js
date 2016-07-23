$('document').ready(function() {
  console.log('why so ready?');

  $.ajax({
    url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
    method: 'GET',
    dataType: 'json'
  }).done(function(roleResponse) { //grab role values from API and assign to variables
    var role1 = roleResponse[0];
    var role2 = roleResponse[1];
    var role3 = roleResponse[2];
    var role4 = roleResponse[3];

    $('.roles').append( //DOM manipulation to add role options/value/class
      '<option class="role1" value="' + role1.img + '">' + role1.title + '</option>',
      '<option class="role2" value="' + role2.img + '">' + role2.title + '</option>',
      '<option class="role3" value="' + role3.img + '">' + role3.title + '</option>',
      '<option class="role4" value="' + role4.img + '">' + role4.title + '</option>'
    );

    $('.roles').on('click', childSelector, function(e) {
      e.preventDefault();

    })

  })


  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log('working');
  })

});
