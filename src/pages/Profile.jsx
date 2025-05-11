import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <section className="container">
        <section
          //   style={{ backgroundColor: "#d3d3d3" }}
          className="bg-light m-5 p-5 rounded"
        >
          <div className="row">
            <div className="col-md-5">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                alt="profile-img"
                className="img-fluid w-50 m-3 rounded-circle"
              />
              <br />
              <Link to="/orderhistory" className="btn btn-outline-primary">
                Order History
              </Link>
              &nbsp; &nbsp;
              <Link to="/address" className="btn btn-outline-primary">
                add New Address
              </Link>
            </div>

            <div className="col-md-6 mt-5">
              <p>Name: Sujeet jain</p>
              <p>Email: example@jain.com</p>
              <p>Mobile: 90909090</p>
              <p>Address: 563A sakte Puri colony</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Profile;
