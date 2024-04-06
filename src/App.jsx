import { useState, useEffect } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx'
import './App.css';


function App() {

  const initialFeedbackState = JSON.parse(localStorage.getItem('feedback')) || {
      good: 0,
      neutral: 0,
      bad: 0
    }
  const [feedback, setFeedback] = useState(initialFeedbackState);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const updateFeedback = feedbackType => {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1
      }));
    };  

    const handleReset = () => {
      localStorage.removeItem('feedback');
      setFeedback({ 
        good: 0, 
        neutral: 0,
        bad: 0 
      });
    };

  return (
    <>
      <Description/>
      <Options onClick={updateFeedback} onReset={handleReset} value={totalFeedback}/>
      { totalFeedback > 0 ? 
        <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={totalFeedback} percent={Math.round((feedback.good/totalFeedback)*100)}/> : <Notification/>
      }
    </>
  );
}

export default App;
