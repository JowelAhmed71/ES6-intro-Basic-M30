    const deposit = 900 ;
// 2. Condition 
    if (deposit > 500 ) {
        console.log( ' a ');
    }
    else if( deposit < 200 ){
        console.log( 'b');
    }
    else if( deposit == 300 ){
        console.log( 'c');
    }
    else if( deposit != 100 ){
        console.log( 'd');
    }
    else if( deposit <= 700 ){
        console.log( 'e');
    }
    else if( deposit >= 900 ){
        console.log( 'f');
    }
// 3. Array :
    const num = [ 21,45,223,56,88];
    const checkLength = num.length;
    num.push(500);
    num.pop();
    num[1]= 100 ;

    if ( num.indexOf(100) != -1 ) {
        console.log(true);
    }
    if ( num.includes(56)) {
        console.log( true);
    }
    console.log( num );

// 4.  looping ( for , while , of):
    for (const object of num) {
        console.log(object);
    }
// 5.function
    function getFullName(x,y) {
        const name = x + ' ' + y ;
        return name ;

    }
    const check = getFullName('arif' ,'aslam');
    console.log( check);

// 6. object :
    const team = { id : 121 , name : 'fc' , country : 'ban'};
