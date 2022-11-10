import React, { useEffect, useState } from "react";
import "./Miniprofile.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import profileimg from "../picture/miniprofileimg.png";
import { BsInstagram } from "react-icons/bs";
function Miniprofile(props) {
  const { display, user_id } = props;
  const [userdata, setUserdata] = useState();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [userfirstandlastname, setUserfirstandlastname] = useState("Anonymous");

  const user_info = async () => {
    try {
      if (user_id !== "") {
        setLoading(true);
        // console.log("user_id", user_id);
        const userdata = await fetch(`/api/user/${user_id}/profile`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const jsonuserdata = await userdata.json();
        // console.log(jsonuserdata);
        await setUserdata(jsonuserdata);
        setLoading(false);
        if (userdata.user_firstname || userdata.user_lastname) {
          setUserfirstandlastname(
            `${userdata.user_firstname} ${userdata.user_lastname}`
          );
        }
      }
    } catch (err) {}
  };
  useEffect(() => {
    user_info();
  }, [user_id]);

  return (
    <article className="home_post_profile">
      {!loading && (
        <div className="post_miniprofile">
          <section className="miniprofile_pic">
            <div className="miniprofile_fakeimg">
              {" "}
              {userdata.profile_pic_url ? (
                <img
                  src={userdata.profile_pic_url}
                  alt="profile_img"
                  className="miniprofile_img"
                />
              ) : (
                <img
                  src={profileimg}
                  alt="profile_img"
                  className="miniprofile_img"
                />
              )}
            </div>
          </section>
          <section className="miniprofile_info">
            <header>
              {userdata.user_name ? (
                <h3>{userdata.user_name}</h3>
              ) : (
                <h3>Anonymous</h3>
              )}

              <p className="miniprofile_info_">({userfirstandlastname})</p>
            </header>
            <p className="inputbox">{userdata.user_bio}</p>
            <p className="miniprofile_info_miniheader">Education:</p>
            <p className="miniprofile_info_university">
              {/* รอมีข้อมูลจริง */}
              <strong></strong>
              <br />
              {/* {userdata.education} */}
            </p>
            {userdata.contact && (
              <footer>
                <p>
                  Contact: <FaFacebookSquare className="instagram_icon" />
                  {userdata.contact && userdata.contact.facebook
                    ? userdata.contact.facebook
                    : "-"}
                </p>
                <p className="miniprofile_info_contact">
                  <BsInstagram className="instagram_icon" />
                  {userdata.contact && userdata.contact.facebook
                    ? userdata.contact.ig
                    : "-"}
                </p>
              </footer>
            )}
            <button
              onClick={() => display("close")}
              className="miniprofile_info_exit"
            >
              <AiOutlineClose className="miniprofile_info_exit_icon" />
            </button>
          </section>
        </div>
      )}
    </article>
  );
}

export default Miniprofile;
