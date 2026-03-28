import React, { useMemo } from 'react';

interface ComparisonItemProps {
  label: string;
  francePrice: number;
  usaPrice: number;
  currency: string;
  unit: string;
  icon: string;
  insight?: string;
}

export const ComparisonItem: React.FC<ComparisonItemProps> = ({
  label,
  francePrice,
  usaPrice,
  currency,
  unit,
  icon,
  insight,
}) => {
  const ratio = usaPrice / francePrice;
  const isMoreExpensive = usaPrice > francePrice;
  const savings = ((usaPrice - francePrice) / usaPrice * 100).toFixed(0);

  // Scale icon based on price difference (smaller = cheaper)
  const scaleFactor = Math.min(1.5, Math.max(0.5, francePrice / usaPrice));

  return (
    <div className="space-y-4">
      {/* Title */}
      <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">
        {label}
      </h3>

      {/* Comparison Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* France */}
        <div className="card">
          <div className="flex flex-col items-center text-center">
            <span style={{ fontSize: `${2 * scaleFactor}rem` }} className="mb-3">
              {icon}
            </span>
            <div className="price-display">${francePrice.toFixed(2)}</div>
            <div className="label-text">France</div>
            <div className="text-xs text-neutral-500 mt-2">{unit}</div>
          </div>
        </div>

        {/* USA */}
        <div className="card">
          <div className="flex flex-col items-center text-center">
            <span style={{ fontSize: '2rem' }} className="mb-3">
              {icon}
            </span>
            <div className="price-display">${usaPrice.toFixed(2)}</div>
            <div className="label-text">USA</div>
            <div className="text-xs text-neutral-500 mt-2">{unit}</div>
          </div>
        </div>
      </div>

      {/* Comparison Badge */}
      <div className="flex justify-center">
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            isMoreExpensive
              ? 'bg-red-500/20 text-red-400'
              : 'bg-green-500/20 text-green-400'
          }`}
        >
          {ratio.toFixed(1)}x {isMoreExpensive ? 'more expensive 🔺' : 'cheaper 🟢'}
        </span>
      </div>

      {/* Insight */}
      {insight && (
        <div className="insight-box">
          <p className="text-sm text-neutral-200">💡 {insight}</p>
        </div>
      )}
    </div>
  );
};
