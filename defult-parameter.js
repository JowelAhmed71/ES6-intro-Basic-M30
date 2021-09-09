function added( x , y = 10  /* option - 3 */ ) {
    // y = y || 0 ;  option - 1
    // if ( y == undefined ) { option - 2
    //     y = 0 ; 
    // }
    const total = x + y ;
    return total ;
}

const result  = added( 12);
console.log( result);