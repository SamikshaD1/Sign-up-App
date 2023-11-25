const logoutbtn = document.querySelector(".logout-btn");
logoutbtn.addEventListener("click",()=>{
    window.location.replace("index.html");
})
 // Check if user is logged in (for demonstration purposes)
//  const isLoggedIn = true; // Replace with your actual logic to check if the user is logged in

//  if (isLoggedIn) {
//      // Retrieve user information from localStorage or your storage mechanism
//      const fullName = localStorage.getItem('fullName');
//      const email = localStorage.getItem('email');
//      const token = localStorage.getItem('token');

//      // Update the HTML with user information
//      const fullNameElement = document.getElementById('fullName');
//      const emailElement = document.getElementById('email');
//      const tokenElement = document.getElementById('token');

//      fullNameElement.textContent = fullName || 'Your Name';
//      emailElement.textContent = email || 'Your Email';
//      tokenElement.textContent = token || 'Your Token';

//      // Logout button event listener
//      const logoutButton = document.querySelector('.logout-btn');
//      logoutButton.addEventListener('click', () => {
//          // Clear user information from storage on logout
//          localStorage.removeItem('fullName');
//          localStorage.removeItem('email');
//          localStorage.removeItem('token');

//          // Redirect to the login page or any other desired location
//          window.location.href = "index.html";
//      });
//  } else {
//      // If not logged in, redirect to the login page
//      window.location.href = "index.html";
//  }