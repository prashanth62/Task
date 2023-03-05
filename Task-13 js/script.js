for(var i=2;i<=545;i++){
    for(var j=2;j<i;j++ ){
        if(i%j==0){
            break;
        }
    }
    if(i==j){
        document.write(i +",");
    }
   
}