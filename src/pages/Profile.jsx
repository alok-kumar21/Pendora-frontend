

import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container my-4 my-lg-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="bg-light p-4 p-md-5 rounded-3 shadow-sm">
            <div className="row align-items-center">
              {/* Profile Image Column */}
              <div className="col-12 col-md-5 text-center text-md-start mb-4 mb-md-0">
                <div className="d-flex justify-content-center justify-content-md-start">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    alt="profile"
                    className="img-fluid rounded-circle"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      border: "4px solid white",
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              </div>

              {/* Profile Details Column */}
              <div className="col-12 col-md-7">
                <div className="profile-details">
                  <h2 className="h4 mb-4">Profile Information</h2>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-person-fill me-3 text-primary"></i>
                      <div>
                        <p className="mb-0 text-muted small">Name</p>
                        <p className="mb-0 fw-bold">Sujeet Jain</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-envelope-fill me-3 text-primary"></i>
                      <div>
                        <p className="mb-0 text-muted small">Email</p>
                        <p className="mb-0 fw-bold">example@jain.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-telephone-fill me-3 text-primary"></i>
                      <div>
                        <p className="mb-0 text-muted small">Mobile</p>
                        <p className="mb-0 fw-bold">90909090</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-geo-alt-fill me-3 text-primary"></i>
                      <div>
                        <p className="mb-0 text-muted small">Address</p>
                        <p className="mb-0 fw-bold">563A Sakte Puri colony</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-3">
                    <Link
                      to="/orderhistory"
                      className="btn btn-primary px-4 py-2"
                    >
                      <i className="bi bi-receipt me-2"></i>
                      Order History
                    </Link>
                    <Link
                      to="/address"
                      className="btn btn-outline-primary px-4 py-2"
                    >
                      <i className="bi bi-plus-circle me-2"></i>
                      Add New Address
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
