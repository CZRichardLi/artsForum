function Request({ id, initiator, email, requested, description, tag }) {
    // initiator: User who started the request;
    // email: Email address of the user;
    // description: Description of the project;
    // requested: Job requested by the user;
    // tag: To which fields the request is related.
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <p>By {initiator}, {email}</p>
      <h3>{requested}</h3>
      <p>{description}</p>
      <p>Fields: {tag}</p>
    </div>
  );
}

export default Request;