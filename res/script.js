$('input').focus(function(){
    $(this).parents('.input_cont').addClass('filled');
});
   
$('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).parents('.input_cont').removeClass('filled');  
    } else {
      $(this).addClass('filled');
    }
  })  

  document.getElementById("your-name").addEventListener("keypress",function(event){
    const keys = /[0-9]/;
    const label = event.target.parentNode.children[2];
    console.log(label)
    if(event.key.match(keys)){
      label.classList.remove("hide")
      label.innerText = "no digits allowed"
      event.preventDefault()
    }else{
      label.classList.add("hide")
    }
  })

  document.getElementById("phonenumber").addEventListener("keypress",function(event){
    const regex = /[a-zA-Z]/;
    const regex2 = /^[0-9]{10}$/;
    const label = event.target.parentNode.children[2];
    if(event.key.match(regex) || event.target.value.match(regex2)){
      if(event.key.match(regex)){
        label.classList.remove("hide")
        label.innerText = "no alphabets allowed"
      }
      event.preventDefault()
    }else if(!event.key.match(regex)){
      label.classList.add("hide")
    }
  })