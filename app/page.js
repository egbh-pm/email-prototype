"use client";

import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h1>Join the Thing</h1>

      {submitted ? (
        <p>Thanks! We received: {email}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "8px", fontSize: "16px", width: "250px" }}
            required
          />
          <button
            type="submit"
            style={{
              marginLeft: "10px",
              padding: "8px 16px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
