//Form validation 

function validate(){
  var name=document.getElementById("name");
  var email=document.getElementById("email");
  var regex=/^([a-zA-Z0-9\.]+)@([a-zA-z0-9]+).([a-z]+)(.[a-z]+)?$/;
  var result=regex.test(email)
  // var message=document.getElementById("message");

  if(name.value==''){
    alert("Must fill name");
    document.form1.name.focus();
    return false;
  }
  if(result==false){
    alert("Invaild Email");
    return false;
  }
  return true;

}




// const regex=/^[a-z] [a-z0-9_]*$/i;
// const result=regex.test(value)
// if(result){
//   return '';
// }else{
//   return 'Invalid String';
// }