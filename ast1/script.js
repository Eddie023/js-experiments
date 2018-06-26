//  function printPattern(n){
//    var ast = "";
//    for(i=0;i<n;i++)
//    {
//       ast += "*";
//       console.log(ast);
//    }
//       // console.log(ast.length);
//       counter = 1;
//       num = 10;
//       i = 1;
//       while(  num!= i){
//          ast = ast.slice(0,-1);
//          console.log(ast);
//         i+= 1;
//
//
//       }
//
//
//  }
//
// // printPattern(10);
// var counter = 0;
//
//  var counterRef = setInterval(function(){
//
//    if(counter > 5) {
//  clearInterval(counterRef)
//  }
//     printPattern(10);               //            if(increment == false){
//                 
//                ast= ast.slice(0,-1);
//                if(ast.length === 1){
//                    increment= true;
//                    
//                }
                 
////                              }
                 
//  counter++;
//
// },2000);
//
// alert("it's working");
//  var item = 1;

var animate = function(n) {
    var counter = 1;
     var ast = "*";
    var increment = true;
    var counterref = setInterval(function() {
        
        if (counter > 10) {
          clearInterval(counterref); // console.log('countergreaterthan5');
        }
        
        if(increment == true){
            ast += "*";
          console.log(ast);
          counter++;
            
           if(ast.length === 10){
            increment = false;
        }
        }
        
         if(increment == false){
            ast = ast.slice(0,-1);
            console.log(ast);
             
             if(ast.length==1 ){
                 increment = true;
             }
            }
            
            
       
          

        }, 100)
    }

    animate(10);
