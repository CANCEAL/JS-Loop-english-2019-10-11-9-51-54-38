//using for loop
document.write("<b>Odd and Even Numbers from 0 to 20 using For Loop</b><br>");

for (var i=0; i<=20; i++) {
    if (i==0) {
        continue;
    }
    else if (i%2==0){
        document.write(i + " is an even number.");
        document.write("<br>");
    } else {
        document.write(i + " is an odd number.");
        document.write("<br>");
    }
}

document.write("<br>");

//using while loop
document.write("<b>Odd and Even Numbers from 0 to 20 using While Loop</b><br>");

var i = 0;
while(i<=20) {
    if (i==0) {
        i+=1;
        continue;
    }
    else if (i%2==0){
        document.write(i + " is an even number.");
        document.write("<br>");
        i+=1;
    } else {
        document.write(i + " is an odd number.");
        document.write("<br>");
        i+=1;
    }
}

document.write("<br>");

//using do while loop
document.write("<b>Odd and Even Numbers from 0 to 20 using Do While Loop</b><br>");

var i = 0;
do {
    if (i==0) {
        i+=1;
        continue;
    }
    else if (i%2==0){
        document.write(i + " is an even number.");
        document.write("<br>");
        i+=1;
    } else {
        document.write(i + " is an odd number.");
        document.write("<br>");
        i+=1;
    }
} while(i<=20)