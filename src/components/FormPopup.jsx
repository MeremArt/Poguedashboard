import React, { useState } from "react";
import styled from "styled-components";

const FormPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBox, setIsOpenBox] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, label: "Edit WL Raffel" },
    { id: 2, label: "Edit NFT Raffel" },
    { id: 3, label: "View Dashboard" },
    { id: 4, label: "Withdraw Confirmation" },
  ];

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpenBox(!isOpenBox);
  };

  const handleCheckboxChange = (event) => {
    const optionId = parseInt(event.target.value);
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, optionId]);
    } else {
      const updatedOptions = selectedOptions.filter(
        (option) => option !== optionId
      );
      setSelectedOptions(updatedOptions);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access form data using event.target.elements
  };

  return (
    <>
      <Popup>
        <div className="form-popup">
          <button className="btn" onClick={togglePopup}>
            Add User
          </button>

          {isOpen && (
            <PopupBackground>
              <div className="popup-content">
                <form className="popupform" onSubmit={handleSubmit}>
                  <button
                    style={{ color: "#be23b1" }}
                    className="closebtn"
                    onClick={togglePopup}
                  >
                    X
                  </button>
                  <h2 style={{ fontSize: "20px" }}>Add User</h2>
                  <hr style={{ marginTop: "10px" }} />
                  <section className="form-section">
                    <label htmlFor="name" className="">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-input"
                      required
                    />
                    <label htmlFor="email" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-input"
                      required
                    />
                    <label htmlFor="email" className="form-label">
                      Permissions
                    </label>
                    <DropdownContainer>
                      <DropdownButton onClick={toggleDropdown}>
                        {selectedOptions.length === 0
                          ? "Grant Permissions"
                          : `${selectedOptions.length} option(s) selected`}
                      </DropdownButton>
                      {isOpenBox && (
                        <DropdownList>
                          {options.map((option) => (
                            <DropdownItem key={option.id}>
                              <Checkbox
                                type="checkbox"
                                id={`option-${option.id}`}
                                value={option.id}
                                checked={selectedOptions.includes(option.id)}
                                onChange={handleCheckboxChange}
                              />
                              <CheckboxLabel htmlFor={`option-${option.id}`}>
                                {option.label}
                              </CheckboxLabel>
                            </DropdownItem>
                          ))}
                        </DropdownList>
                      )}
                    </DropdownContainer>
                  </section>
                  <button className="btn2" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </PopupBackground>
          )}
        </div>
      </Popup>
    </>
  );
};

export default FormPopup;

const Popup = styled.div`
  .btn {
    width: 150px;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: #be23b1;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
  .btn2 {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: #be23b1;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;

    cursor: pointer;
  }
  .form-input {
    width: 25.5vw;
    padding: 0.275rem 0.65rem;
    border-radius: 0.25rem;

    border: 1.5px solid #d0d0d1;
  }
  .popupform {
    width: 450px;
    height: 500px;
    background: #ffffff;
    position: relative;
    top: 100px;
    margin: auto;
    padding: 30px 60px;
    border-radius: 10px;
  }
  .form-section {
    margin-top: 20px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  .closebtn {
    position: relative;
    left: 90%;
  }
  .form-label {
    margin-top: 10px;
  }
`;
const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
`;
const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  top: 10px;
`;

const DropdownButton = styled.button`
  padding: 8px 16px;
  color: White;
  font-size: 14px;
  background-color: #be23b1;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const DropdownItem = styled.li`
  padding: 8px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label``;
