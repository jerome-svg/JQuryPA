$(document).ready(()=>{
    $('#Regirster').submit((event)=>{
        
        event.preventDefault()

        const UserData = {
            firstname: $('.firstname').val(),
            lastname: $('.lastname').val(),
            email:  $('.email').val(),
            age:   $('.age').val(),
            gender: $('.gender').val()
        };

        if(UserData.firstname == "" || UserData.lastname == "" || UserData.email == "" || UserData.age == ""){
            $( ".alert" ).addClass( "design");
            $( ".alert" ).html("You have an error in input");
        }   
        else{
            $.post('../php/js/index.php', {
                firstname: "sample"
            }, (data, status)=>{
               alert(data);
            });
        };
    });
});


