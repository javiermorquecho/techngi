/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getStringOfMultiplesOf3and5( str ){
    let a = 0;
    let b = 0;
    for( i=0; i<=100; i++ ){
          if (i==a){
                    a = a+3;
                    document.write( a + " " + str + " multiple of " + 3 + "<br/>" );
            }
          if (i==b){
                    b = b+5;
                    document.write( b + " " + str + " multiple of " + 5 + "<br/>" );
            }
    }
}

function getHeaderElement() {
    // Get header element by its id.    
   header = $("myHeader");
    if ( header === null
       && typeof header === undefined
    ){
        console.log("header element exists!");
    }
    console.log("header element does not exist!");
    
    return header;
}