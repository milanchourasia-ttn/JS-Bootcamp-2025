import { useUser } from "../../Context";

const UserProfile = () => {
  const { user } = useUser();

  

  return (
    <div className="container">
      <div className="mt-50">
      <h3>Q3. Create a UserContext that holds information about the logged-in user (e.g., name and email). Create a UserProfile component that displays the user’s information, and a Login component that updates the user’s data via context when the user logs in.</h3>  
      
      {!user ? <p>Please log in to see user details.</p>
      :  
      <>
      <p><strong>User Profile</strong></p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      </>
      }
    </div>
    </div>
  );
};

export default UserProfile;
