// import React, { useEffect } from 'react';
// import { Container, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// import AppNavbar from '../components/Navbar';

// const WelcomePage = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     document.body.style.backgroundColor = '#FFA500'; 
//     return () => {
//       document.body.style.backgroundColor = ''; 
//     };
//   }, []);

//   return (
//     <>
//       <AppNavbar />
//       <Container className="d-flex justify-content-center align-items-center min-vh-100">
       
//           <h2>Welcome to the Event Management System!</h2>
          
        
//       </Container>
//     </>
//   );
// };

// export default WelcomePage;
import React, { useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import AppNavbar from '../components/Navbar';

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = '#FFA500';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/events'); // Replace '/events' with your desired route
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page in history
  };

  return (
    <>
      <AppNavbar />
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="text-center p-4">
          <h2>Welcome to the Event Management System!</h2>
          <Button variant="primary" onClick={handleButtonClick}>
            View Events
          </Button>
          <Button variant="secondary" onClick={handleGoBack} className="mt-2">
            Go Back
          </Button>
        </Card>
      </Container>
    </>
  );
};

export default WelcomePage;
