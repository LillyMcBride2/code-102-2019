function setup()  {
        createCanvas(640, 480);
}
function draw() {
        noStroke();
        fill(0,255, 0);
        rect(320, 240, 20, 20);

        fill(255, 0, 0);
        circle(500, 100, 20);

        stroke(0, 0, 255);
        strokeWeight(3);
        line(0, 40, 640, 40);

}

/*function day1AM () {
        // console.log("Hello World");
        var fullName = "Lillian McBride";
        var age = 28;
        var height = 64;
        var address = "1959 Park Ave."
        var middleName;
        // console.log(middleName);
        // console.log(typeof(age)); 
        var likesPizza = true;
        var hasTattoos = false;
        // console.log(typeof(likesPizza));

        age = age + 1;
        var feet = Math.floor(height/12);
        var inches = height % 12;
        console.log(fullName + " is " + feet + " feet and " + inches + " inches tall");

}*/

//day1AM();

function day2AM() {
        console.log(1);
        console.log(2);
        console.log(3);



}

day2AM();
var count = 1

while(count <= 100){
        console.log(count);
        count++;
}

var sum = 0;
var count = 0;
while(true){
        var input = parseInt(prompt("Enter a number. Type 0 to end."))
                if (input === 0){
                        break;
                }
                else{
                        sum+= input;
                        count++;
                }
}