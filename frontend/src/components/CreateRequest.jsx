function CreateRequest({
  handleSubmit,
  initiator,
  setInitiator,
  email,
  setEmail,
  requested,
  setRequested,
  description,
  setDescription,
  tag,
  setTag,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={initiator}
        onChange={(e) => setInitiator(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Requested role(s)"
        value={requested}
        onChange={(e) => setRequested(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department(s)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <button type="submit">Create Request</button>
    </form>
  );
}

export default CreateRequest;
