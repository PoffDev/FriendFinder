   
    //Click Handler for button
$(document).on('click', '#buttonSbt', function(){

console.log('here now')
//if name or image is empty
if($('#name').val().trim() == ''){
    alert("Please Enter Your Name!");
    return;
} if($('#image').val().trim() == ''){
    alert("Your matches are just as shallow as you... We need a picture");
    return;
} 

//create an array of the answers
var answerArray = [];

for (var i = 1; i <= 10; i++) {

    if( $("input:radio[name=q"+i+"]:checked").val() == null){
        alert("Please answer all the questions.");
        return;
    } else{
        answerArray.push( $("input:radio[name=q"+i+"]:checked").val() );
    }

};

//console.log(answerArray)

//create object of form
var answerObject = {
    name: $('#name').val().trim(),
    image: $('#image').val().trim(),
    scores: answerArray
};

//console.log(answerObject);

var currentURL = window.location.origin;

//Post user object to friends API
console.log('here')

$.post("/api/friends", answerObject, function(data){

	console.log(data.name);
	console.log(data.photo);
	$("#friendInfo").html("<h3>" + data.name + "</h3<br><img src=" + data.photo + " style='width:500px;'</img>");

	$('#myModal').modal('show')
})

//clear data.

$('#name').val('');
$('#image').val('');
$('input:radio').attr("checked", false);

return false;


});
