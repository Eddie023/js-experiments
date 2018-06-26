var printGraph = function(data){
    data.forEach(function(datum){
      plotDatum(datum);
    })
      }

var plotDatum = function(datum_obj){
    var point = document.createElement('div');
    point.className = "aPoint";
    point.style.height = '20px';
    point.style.width = '20px';
    point.style.height = '20px';
    point.style.position = "absolute";
    point.style.background = 'purple';
    point.style.top = datum_obj.top +"px";
    point.style.left = datum_obj.left +"px";
    myId.appendChild(point);
}

// printGraph(dataobj);

var randNoGenerator= function(){
    return (Math.floor( Math.random()*500)+1);

}

console.log(randNoGenerator());

var n = 50;
var dataObj = new Array();
var top_value = 0 ;
var left_value = 0;
for(var i=0; i<n; i++){
    top_value = randNoGenerator();
    left_value = randNoGenerator();
    var obj = {top: top_value,
               left: left_value
             };
     dataObj.push(obj);
}

console.log(dataObj);
printGraph(dataObj);








function clickedClassHandler(dataobj,callback) {


    var pointClass = document.getElementsByClassName("aPoint");

    for(var i = 0; i < pointClass.length; i++) {
            pointClass[i].onclick = handleClick;
    }

    function handleClick() {
        var elmParent = this.parentNode;
        var parentChilds = elmParent.childNodes;
        var index = 0;

        for(var i = 0; i < parentChilds.length; i++) {
            if(parentChilds[i] == this) {
                break;
            }
                index++;
        }

        callback.call(this,index);
    }
}

clickedClassHandler(dataObj,function(index){
    // do something with the index
        var myId = document.getElementById('myId');
        console.log(this);
        console.log(dataObj[index].top);
        console.log(dataObj[index].left);

         createList(dataObj[index].top,dataObj[index].left);


        myId.removeChild(this);
    // 'this' refers to the element
    // so you could do something with the element itself
    // this.style.backgroundColor = 'orange';

});


  var createList = function(top,left){
           var ul = document.createElement('ul');
           var listdiv = document.getElementById('deleted-list-value');
           listdiv.appendChild(ul);
           var li = document.createElement('li');
           ul.appendChild(li);


       li.innerHTML= " top: " + top + " left: " + left;
           }
