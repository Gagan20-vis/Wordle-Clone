import React from 'react';
import Letter from './Letter';
export default function Grid() {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const letters = [];
    for (let j = 0; j < 5; j++) {
      letters.push(<Letter key={`${i}-${j}`} letterPos={j} attemptVal={i} />);
    }
    rows.push(<div key={i} className="row">{letters}</div>);
  }

  return (
    <div className="board">
      {rows}
    </div>
  );
}
