/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


    // Set the target date and time
    const targetDate = new Date("Dec 31, 2025 23:59:59").getTime();

    // Update countdown every second
    const timer = setInterval(function() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result
      document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If countdown is over
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);