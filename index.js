/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 let W = parseInt(inputs[0]); // width of the building.
 let H = parseInt(inputs[1]); // height of the building.
 const N = parseInt(readline()); // maximum number of turns before game over.
 var inputs = readline().split(' ');
 let X0 = parseInt(inputs[0]);
 let Y0 = parseInt(inputs[1]);
 
 let w0 = 0;
 let h0 = 0;
 
 // game loop
 while (true) {
     const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
 
     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
    
 
 
     if (bombDir.includes('U')) {
         H = Y0;
         Y0 = Math.floor((Y0+h0)/2)
     }
     if (bombDir.includes('D')) {
         h0 = Y0;
         Y0 = Math.floor((Y0+H)/2)
     }
     if (bombDir.includes('R')) {
         w0 = X0;
         X0 = Math.floor((X0+W)/2)
     }
     if (bombDir.includes('L')) {
         W = X0;
         X0 = Math.floor((X0+w0)/2 )
     }
 
     console.log(X0 , Y0)
   
     // the location of the next window Batman should jump to.
   
 } 
 