function Request({ id, initiator, email, requested, description, tag }) {
  // initiator: User who started the request;
  // email: Email address of the user;
  // description: Description of the project;
  // requested: Job requested by the user;
  // tag: To which fields the request is related.
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
        backgroundColor: "#fafafa",
      }}
    >
      <div style={{ display: "flex", gap: "2px" }}>
        <p>
          <strong>By:</strong> {initiator}
        </p>
        <p
          style={{
            color: "gray",
            border: "1px solid gray",
            borderRadius: "999px",
            padding: "0px 6px",
          }}
        >
          {email}
        </p>
      </div>
      <p>{description}</p>
      <h3>
        <strong>Requested role(s):</strong> {requested}
      </h3>
      <p>
        <strong>Department(s):</strong> {tag}
      </p>
    </div>
  );
}

export default Request;
