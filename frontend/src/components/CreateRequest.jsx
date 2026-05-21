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
  tags,
  setTags,
}) {
  const departments = [
    "Arts",
    "Art History",
    "Creative Writing",
    "Film and Media Studies",
    "Music",
    "Theater",
    "Other",
  ];

  function handleTagChange(department) {
    if (tags.includes(department)) {
      setTags(tags.filter((tag) => tag !== department));
    } else {
      setTags([...tags, department]);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "20px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
      </div>

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div>
        <p>Departments:</p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {departments.map((department) => (
            <label
              key={department}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <input
                type="checkbox"
                checked={tags.includes(department)}
                onChange={() => handleTagChange(department)}
              />

              {department}
            </label>
          ))}
        </div>
      </div>

      <button type="submit">Create Request</button>
    </form>
  );
}

export default CreateRequest;
