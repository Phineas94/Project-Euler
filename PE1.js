
        

     let number1 = 0;
     let number2 = 3;
     let number3 = 5;

     for (let index = 0; index < 1000; index++) {
       if (index%number2 === 0 || index%number3 === 0 ) {
         number1 = number1 + index;
       };
       
     };
     console.log(number1);

  