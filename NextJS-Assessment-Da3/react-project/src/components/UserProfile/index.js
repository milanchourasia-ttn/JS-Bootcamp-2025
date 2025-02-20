import { useUser } from "../../Context";

const UserProfile = () => {
  const { user } = useUser();

  if (!user) {
    return <p>Please log in to see user details.</p>;
  }

  return (
    <div className="container">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default UserProfile;
