
var animate = function(n) {
    var counter = 1;
     var ast = "*";
    var increment = true;
    var counterref = setInterval(function() {
        
//        if (counter > 10) {
//          clearInterval(counterref); // uncomment if you want a finite loop
//        }
        
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
