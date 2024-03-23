import React from 'react';
import airconnectLogo from './images/ac-logo.svg'; // Changed image source
import ReactGA from 'react-ga'; // Import ReactGA
import './App.css'; // Import CSS file for styling

function App() {
  // Initialize Google Analytics with your tracking ID
  ReactGA.initialize('G-0PBTF2YNYG');

  // Function to track clicks on the signup button
  const trackSignupClick = () => {
    ReactGA.event({
      category: 'Signup',
      action: 'Click',
      label: 'Signup Button Clicked'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <div>
            <img src={airconnectLogo} alt="Airconnect Logo" className="h-20 w-auto" /> {/* Increased height */}
          </div>
          <div className="flex">
            <button className="nav-link" onClick={() => console.log("About Us clicked")}>
              About Us
              <div className="nav-underline"></div> {/* Place inside each button */}
            </button>
            <button className="nav-link" onClick={() => console.log("Investors clicked")}>
              Investors
              <div className="nav-underline"></div>
            </button>
            <button className="nav-link" onClick={() => console.log("Contact clicked")}>
              Contact
              <div className="nav-underline"></div>
            </button>
          </div>
          {/* Removed the misplaced nav-underline */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 bg-gray-200 text-gray-700">
        <div className="max-w-lg py-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Airconnect</h1>
          <p className="text-lg mb-8 text-center">Your Web3 Ticket to the World</p>
          {/* Signup Form */}
          <form className="flex flex-col items-center" netlify> {/* Added netlify attribute */}
            <input type="email" placeholder="Enter your email to get on the waitlist" className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 text-center" /> {/* Changed placeholder and added text-center class */}
            <button type="submit" className="bg-purple-600 text-white rounded-md py-2 px-6 hover:bg-purple-700" onClick={trackSignupClick}>Sign Up</button> {/* Added onClick event */}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Airconnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


