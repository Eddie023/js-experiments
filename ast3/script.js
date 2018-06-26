var button = document.getElementById('button');
var button2 = document.getElementById('button2');
var imgContainer = document.getElementsByClassName('image-container')[0];
var img = document.getElementsByTagName('img');

//  
//    if (marginValue > -3600){
//      imgContainer.style.marginLeft =  marginValue + 'px';
//      marginValue = marginValue - 100;
//    }
//    else {
//       marginValue = -0;
//
//    }



console.log(img);
var marginValue= -50;
var imageWidth = 800;

  button.addEventListener('click',function(){
      
    var counterRef =   setInterval(function(){
        
        
        if(marginValue % -800 === 0){
            clearInterval(counterRef);
        }
         imgContainer.style.marginLeft = marginValue + 'px';
          marginValue = marginValue - 50;
              
          
          
//          if(marginValue == -800){
//              break;
//          }
//          
      },100)
      
                   
  })

button2.addEventListener('click',function(){
      
    var counterRef =  setInterval(function(){
        console.log(marginValue);
        if(marginValue % -800 === 0){
            clearInterval(counterRef);
            console.log('this called');
        }
         imgContainer.style.marginLeft = marginValue + 'px';
          marginValue = marginValue + 50;
              
          
          
//          if(marginValue == -800){
//              break;
//          }
//          
      },100)
      
                   
  })
