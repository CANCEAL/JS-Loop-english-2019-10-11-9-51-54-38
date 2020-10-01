//using nested for loop
document.write("<b>9*9 Times Table using Nested For Loop</b><br>");

for (var i=1; i<10; i++) {
    for (var j=1; j<10; j++) {
        if (j<=i) {
            var product = i * j;
            document.write(i + "*" + j + "=" + product + " ");
            
        }
    }
    document.write("<br>");
}