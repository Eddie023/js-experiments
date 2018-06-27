var button = document.getElementsByClassName('button')[0];
var button2 = document.getElementsByClassName('button')[1];
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
var marginValue= 0;
var imageWidth = 800;
var marginLeftMaxWidth = 4000;
//var counter = 1;

  button.addEventListener('click',function(){
      
    var counterRef =   setInterval(function(){
        
        marginValue = marginValue -50; 
        imgContainer.style.marginLeft = marginValue + 'px';    
        
        if(marginValue % -800 === 0){
           clearInterval(counterRef);
            
        }
       
          
      },100)
      
                   
  })

button2.addEventListener('click',function(){
      
    var counterReference =  setInterval(function(){
        
         marginValue = marginValue + 50;
         imgContainer.style.marginLeft = marginValue + 'px';
        
          if(marginValue % -800 ===0)
              {
                  clearInterval(counterReference);
              }
          },100)
      
                   
  });
