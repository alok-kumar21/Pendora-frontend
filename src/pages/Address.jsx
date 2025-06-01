import useCartContext from "../context/CartContext";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Address = () => {
  const {
    address,
    addressLoading,
    addressError,
    handleAddressSelection,
    selectedAddress,
  } = useCartContext();
  const [addresses, setAddresses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    mobilenumber: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
  });

  useEffect(() => {
    if (address) {
      setAddresses(address);
    }
  }, [address]);

  function handleAddressChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    setEditingId(false);

    try {
      const addingData = await fetch(
        editingId
          ? `https://pendora-backend.vercel.app/v3/address/${editingId}`
          : `https://pendora-backend.vercel.app/v1/address`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!addingData.ok) {
        throw new Error("Failed to add Address");
      } else {
        setFormData({
          name: "",
          mobilenumber: "",
          pincode: "",
          locality: "",
          address: "",
          city: "",
          state: "",
          landmark: "",
        });
      }

      setAddresses(updatedAddresses);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  // delete address

  async function handleDeleteAddress(addressId) {
    try {
      const deletedAddress = await fetch(
        `https://pendora-backend.vercel.app/v3/address/${addressId}`,
        {
          method: "DELETE",
        }
      );
      if (!deletedAddress.ok) {
        throw new Error("Failed to Delete Address.");
      }
      //refresh address data
      setAddresses(addresses?.filter((item) => item._id !== addressId));
    } catch (error) {
      console.log("Error", error);
    }
  }

  //  Update Address
  async function handleEditAddress(updateAd) {
    setEditingId(true);
    setFormData({
      name: updateAd.name,
      mobilenumber: updateAd.mobilenumber,
      pincode: updateAd.pincode,
      locality: updateAd.locality,
      address: updateAd.address,
      city: updateAd.city,
      state: updateAd.state,
      landmark: updateAd.landmark,
    });
    setEditingId(updateAd._id);
  }

  if (addressLoading) {
    return (
      <div className="alert alert-success text-center">
        Loading addresses...
      </div>
    );
  }

  if (addressError) {
    return (
      <div className="alert alert-danger text-center">
        Failed to load addresses
      </div>
    );
  }

  return (
    <section className="container  mb-5">
      <div className="my-5">
        <h3 className="text-center">Manage Addresses</h3>
      </div>
      {/* Add/Edit Address Form */}

      <div className="accordion " id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + add New Address
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="card">
                <div className="card-header bg-primary text-white"></div>
                <div className="card-body">
                  <form onSubmit={handleFormSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Mobile Number</label>
                        <input
                          className="form-control"
                          type="tel"
                          name="mobilenumber"
                          placeholder="Enter 10-digit mobile number"
                          value={formData.mobilenumber}
                          onChange={handleAddressChange}
                          required
                          minLength="10"
                          maxLength="10"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Pincode</label>
                        <input
                          className="form-control"
                          type="text"
                          name="pincode"
                          placeholder="Enter pincode"
                          value={formData.pincode}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">Locality</label>
                        <input
                          className="form-control"
                          type="text"
                          name="locality"
                          placeholder="Enter locality"
                          value={formData.locality}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Full Address</label>
                        <textarea
                          className="form-control"
                          name="address"
                          placeholder="Enter full address"
                          value={formData.address}
                          onChange={handleAddressChange}
                          required
                          rows="2"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input
                          className="form-control"
                          type="text"
                          name="city"
                          placeholder="Enter city"
                          value={formData.city}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">State</label>
                        <input
                          className="form-control"
                          type="text"
                          name="state"
                          placeholder="Enter state"
                          value={formData.state}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          Landmark (Optional)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="landmark"
                          placeholder="Enter nearby landmark"
                          value={formData.landmark}
                          onChange={handleAddressChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        {editingId ? "Update Address" : "Save and Delivered"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address Selection */}
      {addresses?.length > 0 ? (
        <div className="card mb-4 mt-3">
          <div className="card-header bg-primary text-white"></div>
          <div className="card-body">
            <div className="list-group">
              {addresses?.map((item) => (
                <div key={item._id} className="list-group-item">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="deliveryAddress"
                      onChange={() => handleAddressSelection(item._id)}
                    />
                    <label className="form-check-label" htmlFor={``}>
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <strong>{item.name}</strong>
                          <p className="mb-1">
                            {item.address}, {item.locality}
                          </p>
                          <p className="mb-1">
                            {item.city}, {item.state} - {item.pincode}
                          </p>
                          <p className="mb-0">Landmark: {item.landmark}</p>
                          <p className="mb-0">Mobile: {item.mobilenumber}</p>
                        </div>
                        <div>
                          <button
                            onClick={() => handleEditAddress(item)}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteAddress(item._id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              ))}
              {selectedAddress && (
                <NavLink
                  to="/ordersummary"
                  type="submit"
                  className="btn btn-primary mt-3"
                >
                  Continue
                </NavLink>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center">Address is Empty</p>
        </div>
      )}
    </section>
  );
};

export default Address;
