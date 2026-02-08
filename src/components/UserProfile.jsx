function UserProfile({ name, bio, profileImage }) {
  return (
    <div style={{ width: "320px", margin: "40px auto", padding: "20px", textAlign: "center", border: "1px solid #ccc", borderRadius: "12px", fontFamily: "Arial, sans-serif" }}>
      <img src={profileImage} alt="Profile" style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "15px" }} />
      <h1 style={{ fontSize: "22px", marginBottom: "10px" }}>{name}</h1>
      <p style={{ fontSize: "14px", color: "#555" }}>{bio}</p>
    </div>
  );
}

export default UserProfile;