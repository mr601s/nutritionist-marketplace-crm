"use client";
import { useState } from "react";

export default function IntakePage() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-3">New Client Intake</h1>
      {!submitted ? (
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <input className="w-full border rounded p-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
          <textarea className="w-full border rounded p-2" placeholder="Primary goal (e.g., weight loss, performance)" value={goal} onChange={e=>setGoal(e.target.value)} />
          <button className="rounded bg-black text-white px-4 py-2">Submit</button>
        </form>
      ) : (
        <div className="rounded border p-4">
          <p className="font-medium mb-2">Thanks, {name || "client"}!</p>
          <p className="text-slate-600">We saved your intake info (demo). We’ll reach out shortly.</p>
        </div>
      )}
    </section>
  );
}
