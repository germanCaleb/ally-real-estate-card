import "./ProfilePic.scss";
import profile from "../imgs/Snapchat-1988384345.jpg"

function ProfilePic() {
  return (
    <img
      src={profile}
      className="profile-pic profile-pic-size"
      alt="profile pic"
    />
  );
}

export default ProfilePic;
