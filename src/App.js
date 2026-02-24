import React, { useState, useEffect } from "react";
import { generatePlan } from "./plan";
import "./App.css";

export default function App() {
  const [plan, setPlan] = useState(() => {
    const saved = localStorage.getItem("gatePlan");
    return saved ? JSON.parse(saved) : generatePlan();
  });

  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    localStorage.setItem("gatePlan", JSON.stringify(plan));
  }, [plan]);

  const today = plan[currentDay - 1];

  const updateField = (field, value) => {
    const updated = [...plan];
    updated[currentDay - 1][field] = value;
    setPlan(updated);
  };

  const completedDays = plan.filter(
    d => d.concept && d.pyqs && d.errorLog
  ).length;

  return (
    <div className="container">
      <div className="card">
        <h2>Day {today.day} / 200</h2>
        <span className="phase">{today.phase}</span>

        <h3>{today.subject}</h3>
        <p className="topic">{today.topic}</p>

        <div className="tasks">
          <label>
            <input
              type="checkbox"
              checked={today.concept}
              onChange={(e) => updateField("concept", e.target.checked)}
            />
            Concept Study
          </label>

          <label>
            <input
              type="checkbox"
              checked={today.pyqs}
              onChange={(e) => updateField("pyqs", e.target.checked)}
            />
            PYQ Practice
          </label>

          <label>
            <input
              type="checkbox"
              checked={today.errorLog}
              onChange={(e) => updateField("errorLog", e.target.checked)}
            />
            Error Log + Revision
          </label>
        </div>

        <textarea
          placeholder="Write Weak Areas / Insights..."
          value={today.notes}
          onChange={(e) => updateField("notes", e.target.value)}
        />

        <div className="nav">
          <button disabled={currentDay === 1} onClick={() => setCurrentDay(currentDay - 1)}>◀</button>
          <button disabled={currentDay === 200} onClick={() => setCurrentDay(currentDay + 1)}>▶</button>
        </div>

        <div className="progress">
          Completion: {completedDays} / 200
        </div>
      </div>
    </div>
  );
}