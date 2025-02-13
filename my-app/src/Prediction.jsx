import React, { useState } from 'react';
import axios from 'axios';
import "./Prediction.css";

let pred=null;


  
  
  const Prediction = () => {
    const [selectedVenue, setSelectedVenue] = useState('');
    const [selectedTossWinner, setSelectedTossWinner] = useState('');
    const [selectedToss, setSelectedToss] = useState('');
    const [selectedBattingTeam, setSelectedBattingTeam] = useState('');
    const [selectedBowlingTeam, setSelectedBowlingTeam] = useState('');
    const [selectedBatter, setSelectedBatter] = useState('');
    const [selectedNonStriker, setSelectedNonStriker] = useState('');
    const [overs, setOvers] = useState('');
    const [balls, setBalls] = useState('');
    const [selectedBowler, setSelectedBowler] = useState('');
    const [crr, setCrr] = useState('');
    const [score, setScore] = useState('');
    const [wicketsLeft, setWicketsLeft] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [showdiv, setShowdiv] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        venue: selectedVenue,
        tossWinner: selectedTossWinner,
        tossDecision: selectedToss,
        battingTeam: selectedBattingTeam,
        bowlingTeam: selectedBowlingTeam,
        striker: selectedBatter,
        nonStriker: selectedNonStriker, 
        innings: e.target.innings.value,
        overs: overs,
        balls: balls,
        bowler: selectedBowler,
        crr: crr,
        score: score,
        wicketsLeft: wicketsLeft,
      };
  
      try {
        const response = await axios.post('http://localhost:4000/', formData);
        setPrediction(response.data);
        pred=response.data.prediction;
        setShowdiv(true); // Show the prediction result
      } catch (error) {
        console.error('Error while getting prediction:', error.message);
      }
    };
  
    return (
      <>
        <div id="abc">
          <main className="item">
            <form onSubmit={handleSubmit}>
              <div id="first">
                <div className="f">
                  <h4>Venue</h4>
                  <select
                    className="f1"
                    value={selectedVenue}
                    onChange={(e) => setSelectedVenue(e.target.value)}
                  >
                    <option value="" disabled>Select venue</option>
                    {venues.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="f">
                  <h4>Toss Winner</h4>
                  <select
                    className="f1"
                    value={selectedTossWinner}
                    onChange={(e) => setSelectedTossWinner(e.target.value)}
                  >
                    <option value="" disabled>Select toss winner</option>
                    {team.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="f">
                  <h4>Toss Decision</h4>
                  <select
                    className="f1"
                    value={selectedToss}
                    onChange={(e) => setSelectedToss(e.target.value)}
                  >
                    <option value="" disabled>Choose toss decision</option>
                    {toss.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="f">
                  <h4>Batting Team</h4>
                  <select
                    className="f1"
                    value={selectedBattingTeam}
                    onChange={(e) => setSelectedBattingTeam(e.target.value)}
                  >
                    <option value="" disabled>Select batting team</option>
                    {team.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="f">
                  <h4>Bowling Team</h4>
                  <select
                    className="f1"
                    value={selectedBowlingTeam}
                    onChange={(e) => setSelectedBowlingTeam(e.target.value)}
                  >
                    <option value="" disabled>Select bowling team</option>
                    {team.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="f">
                  <h4>Innings</h4>
                  <input
                    className="f1"
                    type="number"
                    name="innings"
                    min="1"
                    max="2"
                    placeholder='Enter innings'
                    required
                  />
                </div>
  
                <div className="f">
                  <h4>Striker</h4>
                  <select
                    className="f1"
                    value={selectedBatter}
                    onChange={(e) => setSelectedBatter(e.target.value)}
                  >
                    <option value="" disabled>Select Striker</option>
                    {batter.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="f">
                  <h4>Non-Striker</h4>
                  <select
                    className="f1"
                    value={selectedNonStriker}
                    onChange={(e) => setSelectedNonStriker(e.target.value)}
                  >
                    <option value="" disabled>Select Non-Striker</option>
                    {batter.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="f">
                  <h4>Number of Overs</h4>
                  <input
                    className="f1"
                    type="number"
                    value={overs}
                    onChange={(e) => setOvers(e.target.value)}
                    min="1"
                    max="20"
                    placeholder='Enter overs'
                    required
                  />
                </div>
  
                <div className="f">
                  <h4>Number of Balls</h4>
                  <input
                    className="f1"
                    type="number"
                    value={balls}
                    onChange={(e) => setBalls(e.target.value)}
                    min="1"
                    max="6"
                    placeholder='Enter number of balls'
                    required
                  />
                </div>
  
                <div className="f">
                  <h4>Bowler</h4>
                  <select
                    className="f1"
                    value={selectedBowler}
                    onChange={(e) => setSelectedBowler(e.target.value)}
                  >
                    <option value="" disabled>Select bowler</option>
                    {bowlers.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="f">
                  <h4>CRR</h4>
                  <input
                    className="f1"
                    type="number"
                    value={crr}
                    onChange={(e) => setCrr(e.target.value)}
                    step="0.01"
                    required
                    placeholder='Enter crr'
                  />
                </div>
  
                <div className="f">
                  <h4>Current Score</h4>
                  <input
                    className="f1"
                    type="number"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    min="0"
                    placeholder='Enter score'
                    required
                  />
                </div>
  
                <div className="f">
                  <h4>Number of Wickets Left</h4>
                  <input
                    className="f1"
                    type="number"
                    value={wicketsLeft}
                    onChange={(e) => setWicketsLeft(e.target.value)}
                    min="0"
                    max="10"
                    placeholder='Enter number of wickets'
                    required
                  />
                </div>
              </div>
  
              <div id="btn" className="f">
                <button className="but" type="submit">
                  PREDICT
                </button>
              </div>
            </form>
  
            {showdiv && prediction && (
              <div id='divi'>
                <h3 id='head'>Prediction Result</h3>
                <p id='par'>Winner: {pred}</p>
              </div>
            )}
          </main>
        </div>
      </>
    );
  };
  
export default Prediction;
  