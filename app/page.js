"use client";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState([]);

  const words = [
    "APPLE", "BANANA", "ORANGE", "GRAPE",
    "DOG", "CAT", "FISH", "BIRD",
    "RED", "BLUE", "GREEN", "YELLOW",
    "CAR", "TRAIN", "PLANE", "BOAT"
  ];

  function toggleWord(word) {
    if (selected.includes(word)) {
      setSelected(selected.filter(w => w !== word));
    } else if (selected.length < 4) {
      setSelected([...selected, word]);
    }
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Connections Game</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 100px)",
        gap: "10px",
        marginTop: "20px"
      }}>
        {words.map(word => (
          <button
            key={word}
            onClick={() => toggleWord(word)}
            style={{
              padding: "10px",
              background: selected.includes(word) ? "lightblue" : "white",
              border: "1px solid black",
              cursor: "pointer"
            }}
          >
            {word}
          </button>
        ))}
      </div>
    </main>
  );
}
