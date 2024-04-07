import React, { useState, useRef} from 'react';
import Logo from './vector3.svg';
import Splash from './website_photo.jpg';
import './App.css';
import axios from 'axios';

function App() {
  const fileInputRef = useRef(null);
  const [buttonText, setButtonText] = useState('Select Image');


  // function to handle a user-selected image
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      setButtonText('Image Selected');
      processImage(file);
      //const reader = new FileReader(); // FileReader object to read the file
      // MACHINE LEARNING ACTS ON IMAGE
      };
    }
  
  // function to control user interaction with file upload button
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Function to process the uploaded image and send it to Flask backend
  const processImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      await axios.post('localhost:8080/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // webpage layout
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img className="logo" src={Logo} alt="ReSoul Logo"/>
        </div>
        <div className='Title'>
          <h1>ReSoul Your Shoes</h1>
        </div>
      </header>

      <div className="Splash">
        <img className="mountain-photo" src={Splash} alt={"Climber on mountain"}/>
      </div>

      <div className="Introduction">
        <h2> Motivation </h2>
        <p>
          MOTIVATION, SUSTAINABILITY, WELLNESS.
        </p>
      </div>

      <div className="Resoling">
        <h2> What Is Resoling? </h2>
        <p>
          What resoling is, why it's important.
        </p>
        <div className="Image">
          <img className="before-after-image" src={"https://blog.weighmyrack.com/wp-content/uploads/2019/12/Yosemite-Bum-Resoling-before-after-Photo.jpg"} alt={`Before & after resoling climbing shoes`} />
        </div>
      </div>
      
      <div className="Upload">
        <h3> Upload your climbing shoes: </h3>
        <button onClick={handleButtonClick}>{buttonText}</button>
        <input type="file" 
        onChange={handleImageUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}/>
      </div>

      {/* ONLY WANT BUTTON TO APPEAR ONCE FILE SELECTED */}
      <div className='ConfirmUpload'> 
        <button> Analyze </button>
      </div>

      <div className='Buffer'> </div>

      <footer className="Footer">
        <p> 2024 Re-Soul Your Shoes</p>
      </footer>
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/