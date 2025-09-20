import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [showWish, setShowWish] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [timer, setTimer] = useState("");

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      const startDate = new Date("2024-12-13T00:00:00");
      const now = new Date();
      let diff = Math.max(0, now - startDate);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const mins = Math.floor(diff / (1000 * 60));
      diff -= mins * (1000 * 60);
      const secs = Math.floor(diff / 1000);
      setTimer(`${days} Days ${hours} Hours ${mins} Min ${secs} Sec`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="stars"></div>
      <h1>Happy Birthday, Chaand!</h1>
      <div className="note">
        You’re so special to me!<br />
        I always feel like you are my sweet kiddo 🌙💕
      </div>

      <div className="timer-label">Time Since We Met (Dec 13, 2024):</div>
      <div className="timer">{timer}</div>

      {/* Moon */}
      <div
        className="moon-container"
        tabIndex={0}
        onClick={() => setShowWish(true)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setShowWish(true)}
      >
        <svg className="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="58" cy="47" r="38" fill="#ffecb3" />
          <path d="M68,15a38,38 0 1,1-37,35 33,33 0 1,0 37-35z" fill="#e1bee7" />
          <circle cx="70" cy="30" r="2.5" fill="#e1bee7" opacity="0.7" />
          <circle cx="80" cy="54" r="2" fill="#e1bee7" opacity="0.5" />
          <circle cx="55" cy="40" r="1.7" fill="#fff" opacity="0.9" />
        </svg>
        <div className="hint">Click the Moon to See Your Wish</div>
      </div>

      {/* Wish Box */}
      {showWish && (
        <div className="wish-message show">
          Happy birthday chaand, this is your first birthday with me so I want to make it special.<br /><br />
          Actually, I wanted to send some stuff especially offline, but you and your secret box nah, you won't reveal your address! So there's no other way to wish you specially than with my skills.<br /><br />
          Please adjust with these kinds of childish wishes, and just know I'm so happy to have you in my life. Whenever I speak with you, my stress vanishes in a minute.<br /><br />
          Hope we get to spend much more time together, and I madly want to meet you soon.<br /><br />
          Wishing you a very happy birthday, my Chaand!<br />
          <span style={{ fontSize: "1.3em", color: "#FEAEFF" }}>💫🌙💖</span>
        </div>
      )}

      {/* Gift Box */}
      {!showGift && (
        <div id="giftShowcase">
          <svg
            className="gift-box"
            tabIndex={0}
            onClick={() => setShowGift(true)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setShowGift(true)}
            viewBox="0 0 95 75"
          >
            <rect x="7" y="30" width="81" height="32" rx="7" fill="#ff66aa" stroke="#aa0055" strokeWidth="2" />
            <rect x="14" y="15" width="63" height="20" rx="7" fill="#ff4081" stroke="#c7156b" strokeWidth="2" />
            <rect x="40" y="7" width="14" height="40" rx="6" fill="#bb397c" />
            <rect x="45" y="0" width="3" height="16" rx="1" fill="#ea8bbe" />
            <ellipse cx="48" cy="48" rx="41" ry="6" fill="#e6dea9" opacity=".22" />
          </svg>
          <div className="giftbox-hint">Click the Gift Box to Open Your Surprise</div>
        </div>
      )}

      {/* Surprise Image + Text */}
      {showGift && (
        <div id="surpriseContainer">
          <img src="/aadh.jpg" alt="Surprise" />
          <p>
            Mujhko kya hua hai? Kyun main kho gaya hoon? <br />
            Paagal tha main pehle, ya ab ho gaya hoon? <br />
            Behki hain nigahein aur bikhre hain baal <br />
            Tumne banaya hai kya apna ye haal? <br />
            Koi mil gaya <br />
            Mera dil gaya
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
