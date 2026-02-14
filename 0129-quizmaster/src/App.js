import React, { useState, useEffect } from 'react';
import { Timer, Trophy, ArrowRight, RefreshCcw, CheckCircle, XCircle, BrainCircuit } from 'lucide-react';
import confetti from 'canvas-confetti'; // Celebration effect

// --- 1. Quiz Data ---
const QUESTIONS = [
  {
    id: 1,
    question: "What is the primary purpose of React's useState hook?",
    options: ["To fetch data", "To manage local state", "To route pages", "To optimize images"],
    answer: 1 // Index of correct option
  },
  {
    id: 2,
    question: "Which method is used to update the DOM in React?",
    options: ["ReactDOM.render()", "React.update()", "DOM.push()", "HTML.set()"],
    answer: 0
  },
  {
    id: 3,
    question: "What is JSX?",
    options: ["A database", "A CSS framework", "Syntax extension for JS", "A server language"],
    answer: 2
  },
  {
    id: 4,
    question: "How do you pass data from parent to child?",
    options: ["State", "Props", "LocalStorage", "Redux"],
    answer: 1
  },
  {
    id: 5,
    question: "What does useEffect do?",
    options: ["Handles side effects", "Creates UI", "Styling", "Database connection"],
    answer: 0
  }
];

// --- 2. Components ---

// Start Screen
const StartScreen = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 text-white p-6 text-center animate-in fade-in zoom-in">
    <div className="bg-white/10 p-6 rounded-full mb-8 backdrop-blur-sm animate-bounce">
      <BrainCircuit size={64} className="text-yellow-400" />
    </div>
    <h1 className="text-5xl font-black mb-4 tracking-tight">QuizMaster</h1>
    <p className="text-indigo-200 text-lg mb-8 max-w-md">
      Test your React knowledge! You have 15 seconds per question. Are you ready?
    </p>
    <button 
      onClick={onStart}
      className="bg-yellow-400 text-indigo-900 px-10 py-4 rounded-full font-bold text-xl hover:bg-yellow-300 transition shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
    >
      Start Quiz <ArrowRight size={24} />
    </button>
  </div>
);

// Game Screen (Main Logic)
const GameScreen = ({ onFinish }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedOption, setSelectedOption] = useState(null);

  // Timer Logic
  useEffect(() => {
    if (selectedOption !== null) return; // Agar answer de diya, toh timer roko

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext(null); // Time khatam, next question (null means wrong)
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQ, selectedOption]);

  const handleAnswer = (index) => {
    setSelectedOption(index);
    if (index === QUESTIONS[currentQ].answer) {
      setScore(score + 1);
    }
    
    // 1 second wait karo taaki user color dekh sake (Green/Red)
    setTimeout(() => {
      handleNext();
    }, 1000);
  };

  const handleNext = () => {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
      setTimeLeft(15);
      setSelectedOption(null);
    } else {
      onFinish(score + (selectedOption === QUESTIONS[currentQ]?.answer ? 1 : 0));
    }
  };

  const question = QUESTIONS[currentQ];
  const progress = ((currentQ + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 w-full">
          <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Header */}
        <div className="p-8 pb-0 flex justify-between items-center mb-6">
          <span className="text-gray-500 font-bold">Question {currentQ + 1}/{QUESTIONS.length}</span>
          <div className={`flex items-center gap-2 font-bold px-3 py-1 rounded-full ${timeLeft < 5 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-100 text-blue-600'}`}>
            <Timer size={18} /> {timeLeft}s
          </div>
        </div>

        {/* Question */}
        <div className="px-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">{question.question}</h2>
        </div>

        {/* Options */}
        <div className="px-8 pb-8 space-y-3">
          {question.options.map((opt, index) => {
            let btnClass = "border-gray-200 hover:border-indigo-500 hover:bg-indigo-50";
            
            // Logic for showing Right/Wrong colors immediately
            if (selectedOption !== null) {
              if (index === question.answer) btnClass = "bg-green-100 border-green-500 text-green-700";
              else if (index === selectedOption) btnClass = "bg-red-100 border-red-500 text-red-700";
              else btnClass = "border-gray-100 opacity-50";
            }

            return (
              <button
                key={index}
                onClick={() => selectedOption === null && handleAnswer(index)}
                className={`w-full p-4 text-left border-2 rounded-xl font-semibold transition-all flex justify-between items-center ${btnClass}`}
              >
                {opt}
                {selectedOption !== null && index === question.answer && <CheckCircle size={20} className="text-green-600"/>}
                {selectedOption !== null && index === selectedOption && index !== question.answer && <XCircle size={20} className="text-red-600"/>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Result Screen
const ResultScreen = ({ score, onRestart }) => {
  const percentage = (score / QUESTIONS.length) * 100;
  
  // Confetti effect on mount if score is good
  useEffect(() => {
    if (percentage > 50) confetti();
  }, [percentage]);

  let message = "";
  if (percentage === 100) message = "Perfect Score! 🏆";
  else if (percentage >= 60) message = "Great Job! 🎉";
  else message = "Keep Practicing! 📚";

  return (
    <div className="min-h-screen bg-indigo-900 flex items-center justify-center p-6 text-center animate-in zoom-in">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full">
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={48} className="text-yellow-600" />
        </div>
        <h2 className="text-4xl font-black text-gray-800 mb-2">{score} / {QUESTIONS.length}</h2>
        <p className="text-gray-500 font-medium mb-6">You scored {percentage}%</p>
        
        <div className="bg-indigo-50 p-6 rounded-xl mb-8">
          <p className="text-xl font-bold text-indigo-900">{message}</p>
        </div>

        <button 
          onClick={onRestart}
          className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
        >
          <RefreshCcw size={20} /> Play Again
        </button>
      </div>
    </div>
  );
};

// --- 3. Main App ---
export default function App() {
  const [gameState, setGameState] = useState("START"); // START, PLAY, END
  const [finalScore, setFinalScore] = useState(0);

  const startQuiz = () => setGameState("PLAY");
  
  const finishQuiz = (score) => {
    setFinalScore(score);
    setGameState("END");
  };

  const restart = () => {
    setFinalScore(0);
    setGameState("START");
  };

  return (
    <div className="font-['Inter']">
      {gameState === "START" && <StartScreen onStart={startQuiz} />}
      {gameState === "PLAY" && <GameScreen onFinish={finishQuiz} />}
      {gameState === "END" && <ResultScreen score={finalScore} onRestart={restart} />}
    </div>
  );
}