counterForEmpty = 0;
counterForInvalid = 0;
emptyEmail = '<p id="empty">You sent empty email, please enter again your email</p>'
invalidEmail = '<p id="invalid">Your email is invalid</p>'



function ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}




$('document').ready(function() {
   $('#submit').click(function(){


       if ($('#email').val() ==''){
           $('#invalid').html(invalidEmail).css("display", "none")
            if (counterForEmpty == 0) {
                $('.form > p').append(emptyEmail)

                $('#empty').html(emptyEmail).css("color","red").css("font-size","12").css("padding-top","20px")
                counterForEmpty++;
            }
            else{
                $('#empty').html(emptyEmail).css("padding-top","20px").css("display","block")
            }

       }else {
           email = $('#email').val()
           console.log(ValidateEmail(email))
           if (ValidateEmail(email)) {
               $('#empty').html(emptyEmail).css("display", "none")
               $('#email').val('');
           }
           else if(counterForInvalid == 0){
               $('#empty').html(emptyEmail).css("display", "none")
               $('.form > p').append(invalidEmail)
               $('#invalid').html(invalidEmail).css("color","red").css("font-size","12").css("padding-top","20px")
               $('#email').val('');
               counterForInvalid++;
           }
           else{
               $('#email').val('');
               $('#invalid').html(invalidEmail).css("padding-top","20px").css("display","block")
           }
       }

   })
});