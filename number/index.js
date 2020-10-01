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
