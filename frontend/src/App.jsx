import Request from "./components/Request";
import { useState } from "react";
import CreateRequest from "./components/CreateRequest";

function App() {
  // fake posts for demonstration
  const [requests, setRequests] = useState([
    {
      id: 1,
      initiator: "Edmond",
      email: "edmond@placeholder.edu",
      requested: "Actors",
      description: "I need actors for my short film.",
      tag: "Theator",
    },
    {
      id: 2,
      initiator: "Richard",
      email: "ric@placeholder.edu",
      requested: "Camera operator",
      description:
        "Hi! The Jazz Ensemble needs someone who can record our concert. Contact me if you can help with it. Thank you!",
      tag: "Film and Media",
    },
  ]);

  const [initiator, setInitiator] = useState("");
  const [email, setEmail] = useState("");
  const [requested, setRequested] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

function handleSubmit(e){
  e.preventDefault();
  console.log("submitted");
  const newRequest = {
    id: Date.now(),
    initiator,
    email,
    requested,
    description,
    tag,
  };

  setRequests([newRequest, ...requests]);

  setInitiator("");
  setEmail("");
  setRequested("");
  setDescription("");
  setTag("");
}

  return (
    <div>
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
        tag={tag}
        setTag={setTag}
      />

      {requests.map((request) => (
        <Request
          key={request.id}
          email={request.email}
          initiator={request.initiator}
          requested={request.requested}
          description={request.description}
          tag={request.tag}
        />
      ))}
    </div>
  );
}

export default App;
