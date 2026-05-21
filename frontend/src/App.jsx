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
  const [filterTags, setFilterTags] = useState([]);
  const [formTags, setFormTags] = useState([]);

  const [initiator, setInitiator] = useState("");
  const [email, setEmail] = useState("");
  const [requested, setRequested] = useState("");
  const [description, setDescription] = useState("");
  const departments = [
    "Arts",
    "Art History",
    "Creative Writing",
    "Film and Media Studies",
    "Music",
    "Theator",
    "Other",
  ];

  useEffect(() => {
    const url =
      filterTags.length > 0
        ? `http://localhost:3001/requests?tags=${filterTags.join(",")}`
        : `http://localhost:3001/requests`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);

        setRequests(Array.isArray(data) ? data : []);
      });
  }, [filterTags]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      initiator,
      email,
      requested,
      description,
      tags: formTags,
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
    setFormTags([]);
  }

  function toggleTag(tag) {
    setFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
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
        tags={formTags}
        setTags={setFormTags}
      />

      {/* FILTER BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "16px",
        }}
      >
        {departments.map((tag) => {
          const isActive = filterTags.includes(tag);

          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                border: "1px solid gray",
                cursor: "pointer",
                backgroundColor: isActive ? "black" : "white",
                color: isActive ? "white" : "black",
              }}
            >
              {tag}
            </button>
          );
        })}

        <button
          onClick={() => setFilterTags([])}
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            border: "1px solid red",
            color: "red",
            backgroundColor: "white",
          }}
        >
          Clear
        </button>
      </div>

      {/* REQUEST GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {requests.map((request) => (
          <Request
            key={request.id}
            id={request.id}
            email={request.email}
            initiator={request.initiator}
            requested={request.requested}
            description={request.description}
            tags={request.tags}
            setRequests={setRequests}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
