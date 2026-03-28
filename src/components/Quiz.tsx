import React, { useState, useEffect } from 'react';

interface QuizProps {
  onComplete: () => void;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: Array<{ id: string; text: string; correct: boolean }>; 
  category: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'How much does a year of public university cost in France?',
    category: 'Education',
    options: [
      { id: 'a', text: '$3,000', correct: true },
      { id: 'b', text: '$15,000', correct: false },
      { id: 'c', text: '$45,000', correct: false },
    ],
  },
  {
    id: 2,
    question: 'What is the price of a monthly metro pass in Paris?',
    category: 'Transport',
    options: [
      { id: 'a', text: '$25', correct: false },
      { id: 'b', text: '$86', correct: true },
      { id: 'c', text: '$150', correct: false },
    ],
  },
];

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [skipped, setSkipped] = useState(false);

  const handleSelectAnswer = (optionId: string) => {
    setSelectedAnswer(optionId);
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        onComplete();
      }
    }, 2000);
  };

  const handleSkip = () => {
    setSkipped(true);
    setTimeout(onComplete, 500);
  };

  if (skipped) return null;

  const question = quizQuestions[currentQuestion];
  const selectedOption = question.options.find(opt => opt.id === selectedAnswer);
  const isCorrect = selectedOption?.correct;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 rounded-lg p-8 max-w-md w-full border border-neutral-800">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-neutral-500">Question {currentQuestion + 1} of 2</span>
          <button
            onClick={handleSkip}
            className="text-neutral-400 hover:text-white text-sm"
          >
            Skip
          </button>
        </div>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
            {question.category}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-bold mb-8 text-white">{question.question}</h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map(option => (
            <button
              key={option.id}
              onClick={() => handleSelectAnswer(option.id)}
              disabled={showResult}
              className={`w-full p-4 rounded-lg text-left font-semibold transition-all ${
                selectedAnswer === option.id
                  ? isCorrect
                    ? 'bg-green-500/20 border-green-500 text-green-400'
                    : 'bg-red-500/20 border-red-500 text-red-400'
                  : 'bg-neutral-800 border border-neutral-700 hover:border-neutral-600 text-white hover:bg-neutral-700'
              } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span>{option.text}</span>
                {selectedAnswer === option.id && (
                  <span>{isCorrect ? '✓' : '✗'}</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {showResult && (
          <div className="mt-6 text-center">
            <p className={`font-semibold ${isCorrect ? 'text-green-400' : 'text-orange-400'}`}> 
              {isCorrect ? '🎉 Correct!' : '💡 Good to know!'}
            </p>
          </div>
        )}

        {/* Progress */}
        <div className="mt-8 flex gap-2">
          {quizQuestions.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full ${
                index <= currentQuestion ? 'bg-amber-500' : 'bg-neutral-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
