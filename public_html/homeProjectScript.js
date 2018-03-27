/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $("#homeProject").submit(function(e){
		if($("#name").val() != "" && $("#email").val() != ""){
			$(".error-message").css("display", "none");
			alert("Submitted");
		}
        else{
			$(".error-message").css("display", "inline-block");
			e.preventDefault();
		}
			
    });
});


