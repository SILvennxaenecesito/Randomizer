var num1, num2, num3;

function generateNumbers() {
  // Generate three random numbers between 0-20
  num1 = Math.ceil(Math.random() * 20);
  num2 = Math.ceil(Math.random() * 20);
  num3 = Math.ceil(Math.random() * 20);

  var greatestNumber = num1; // Assume num1 is the greatest
  if (greatestNumber = num1){
    document.getElementById("result").innerHTML = "The Red Racer will lead the race at position no. " + greatestNumber;
  }
  if (num2 > greatestNumber) {
    greatestNumber = num2;
    document.getElementById("result").innerHTML = "The Blue Bolt will lead the race at position no. " + greatestNumber;}
  if (num3 > greatestNumber) {
    greatestNumber = num3;
    document.getElementById("result").innerHTML = "The Green Glide will lead the race at position no. " + greatestNumber;}


  // Display the numbers and the greatest number
  document.getElementById("position1").innerHTML = num1;
  document.getElementById("position2").innerHTML = num2;
  document.getElementById("position3").innerHTML = num3;
}
generateNumbers();

function generateLetter() {
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var randomIndex = Math.floor(Math.random() * alphabet.length);
      var randomLetter = alphabet.charAt(randomIndex);
      document.getElementById("letter").innerHTML = randomLetter;
    }
generateLetter();

function convertToHoursAndMinutes() {
      // Multiply num2 and num3 together to get total minutes
      var totalMinutes = num2 * num3;
      document.getElementById("min").innerHTML = totalMinutes;

      // Calculate the number of hours and minutes from total minutes
      var hours = Math.floor(totalMinutes / 60);
      var minutes = totalMinutes % 60;

      // Return the result as a string
      document.getElementById("time").innerHTML = hours + " hour(s) and " + minutes + " minute(s)";
    }
convertToHoursAndMinutes();
