import "./HomeNav.scss";
import profile from "../imgs/Snapchat-1578491423.jpg"

function ProfilePic() {
  return (
    <img
      src={profile}
      className="profile-pic"
      width="400"
      height="400"
      alt="profile pic"
    />
  );
}

export default ProfilePic;
