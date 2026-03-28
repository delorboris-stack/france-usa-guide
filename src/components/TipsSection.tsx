import React, { useState } from 'react';

interface TipsSectionProps {
  version?: 'cards' | 'slider';
  whatsappLink?: string;
  paypalLink?: string;
}

interface TipOption {
  amount: number;
  description: string;
  icon: string;
  emoji: string;
}

const tipOptions: TipOption[] = [
  { amount: 5, description: 'Espresso & croissant', icon: '☕', emoji: '💙' },
  { amount: 10, description: 'Craft beer pint', icon: '🍺', emoji: '🎉' },
  { amount: 20, description: 'Restaurant meal', icon: '🍽️', emoji: '😋' },
  { amount: 50, description: 'Concert ticket', icon: '🎵', emoji: '🎸' },
  { amount: 100, description: 'Fancy dinner for 2', icon: '✨', emoji: '💎' },
];

export const TipsSection: React.FC<TipsSectionProps> = ({
  version = 'cards',
  whatsappLink,
  paypalLink,
}) => {
  const [selectedTip, setSelectedTip] = useState(20);

  if (version === 'cards') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">💛 How Far Your Tips Go!</h2>
          <p className="text-neutral-400">See what your money can buy in Paris</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tipOptions.map(tip => (
            <button
              key={tip.amount}
              onClick={() => setSelectedTip(tip.amount)}
              className={`card cursor-pointer transform transition-all ${
                selectedTip === tip.amount ? 'ring-2 ring-amber-500 scale-105' : ''
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <div className="text-2xl font-bold text-amber-400 mb-2">${tip.amount}</div>
                <div className="text-sm text-neutral-300">{tip.description}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/10 border border-amber-700/30 rounded-lg p-6 text-center">
          <p className="text-neutral-300">
            With ${selectedTip}, you support an independent guide and help share the magic of Paris!
          </p>
        </div>

        <div className="flex gap-4">
          {paypalLink && (
            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 button-primary text-center"
            >
              Tip via PayPal
            </a>
          )}
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 button-secondary text-center"
            >
              Questions? WhatsApp
            </a>
          )}
        </div>
      </div>
    );
  }

  // SLIDER VERSION
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">💛 Show Some Love</h2>
        <p className="text-neutral-400">Your guide made your trip unforgettable? Tips aren't mandatory, but they mean the world!</p>
      </div>

      <div className="card space-y-6">
        {/* Slider */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="label-text">Tip amount</label>
            <span className="text-amber-400 text-2xl font-bold">${selectedTip}</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            value={selectedTip}
            onChange={(e) => setSelectedTip(Number(e.target.value))}
            className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-xs text-neutral-500 mt-2">
            <span>€5</span>
            <span>€100</span>
          </div>
        </div>

        {/* Quick Select Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {[5, 10, 20, 50].map(amount => (
            <button
              key={amount}
              onClick={() => setSelectedTip(amount)}
              className={`py-2 rounded-lg font-semibold text-sm transition-all ${
                selectedTip === amount
                  ? 'bg-amber-500 text-black'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              €{amount}
            </button>
          ))}
        </div>

        {/* Equivalent Display */}
        <div className="bg-neutral-800 rounded-lg p-4 text-center border border-neutral-700">
          <p className="text-neutral-400 text-sm mb-2">That's equivalent to just</p>
          <p className="text-3xl font-bold text-amber-400">${(selectedTip * 1.1).toFixed(0)}</p>
          <p className="text-neutral-500 text-sm mt-2">— less than a concert ticket</p>
        </div>

        {/* Guide Message */}
        <p className="text-center text-neutral-400 text-sm">
          — Your guide 💛
        </p>
      </div>

      <div className="flex gap-4">
        {paypalLink && (
          <a
            href={paypalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 button-primary text-center"
          >
            Send Tip
          </a>
        )}
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 button-secondary text-center"
          >
            Ask a Question
          </a>
        )}
      </div>
    </div>
  );
};
