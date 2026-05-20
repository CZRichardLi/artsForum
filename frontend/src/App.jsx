import Request from "./components/Request";
import CreateRequest from "./components/CreateRequest";
import { useState, useEffect } from "react";

function App() {
  // fake posts for demonstration
  /* const [requests, setRequests] = useState([
    {
      id: 1,
      initiator: "Edmond",
      email: "edmond@placeholder.edu",
      requested: "Actors",
      description: "I need actors for my short film.",
      tags: ["Theater"],
    },
    {
      id: 2,
      initiator: "Richard",
      email: "ric@placeholder.edu",
      requested: "Camera operator",
      description:
        "Hi! The Jazz Ensemble needs someone who can record our concert. Contact me if you can help with it. Thank you!",
      tags: ["Film and Media Studies"],
    },
  ]); */
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  const [initiator, setInitiator] = useState("");
  const [email, setEmail] = useState("");
  const [requested, setRequested] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      initiator,
      email,
      requested,
      description,
      tags,
    };

    fetch("http://localhost:3001/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        setRequests((prev) => [data, ...prev]);
      });

    setInitiator("");
    setEmail("");
    setRequested("");
    setDescription("");
    setTags([]);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial" }}>
      <h1>Arts Forum</h1>
      <h2>Requests</h2>

      <CreateRequest
        handleSubmit={handleSubmit}
        initiator={initiator}
        setInitiator={setInitiator}
        email={email}
        setEmail={setEmail}
        requested={requested}
        setRequested={setRequested}
        description={description}
        setDescription={setDescription}
        tags={tags}
        setTags={setTags}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {requests.map((request) => (
          <Request
            style={{ display: "flex" }}
            key={request.id}
            email={request.email}
            initiator={request.initiator}
            requested={request.requested}
            description={request.description}
            tags={request.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
