import React, { useState } from "react";
import styled from "styled-components";
import FormPopup from "./FormPopup";

const Wrapper = styled.section`
  .Header {
    margin-top: 10px;
    background: #ffffff;
    height: 100px;
    width: 70vw;
    box-shadow: 1px 4px 23px 0px rgba(0, 0, 0, 0.37);
    -webkit-box-shadow: 1px 4px 23px 0px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 1px 4px 23px 0px rgba(0, 0, 0, 0.37);
    border-radius: 8px;
  }
  * {
    color: #121212;
  }
  .User {
    position: relative;
    bottom: 100px;
    left: 220px;
  }
  .btn1 {
    width: 15%;
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
  }
  .table {
    margin-top: 30px;
  }
  .User {
    margin-top: 28px;
    margin-left: 350px;
    color: #121517;
    font-weight: 500;
    font-size: 30px;
    line-height: 110%;
    letter-spacing: -0.004em;
  }

  button:not(:disabled) {
    cursor: pointer;
    color: white;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  color: white;
`;

const DropdownButton = styled.button`
  background-color: #be23b1;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 8px;
  margin-top: 5px;
  color: white;
`;

const DropdownItem = styled.div`
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Managecommunities = () => {
  const data = [
    {
      id: 1,
      name: "John",
      email: "example@gmail.com",
      status: "Enabled",
      permissions: "View Dashboard",
    },
    {
      id: 2,
      name: "Jane",
      email: "example@gmail.com",
      status: "Enabled",
      permissions: "Withdraw Confirmation",
    },
    {
      id: 3,
      name: "Bob",
      email: "example@gmail.com",
      status: "Disabled",
      permissions: "Edit WL Raffle",
    },
    {
      id: 4,
      name: "Cole",
      email: "example@gmail.com",
      status: "Disabled",
      permissions: "Edit NFT Raffle",
    },
  ];

  const [selectedPermission, setSelectedPermission] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const permissionsOptions = [
    "View Dashboard",
    "Withdraw Confirmation",
    "Edit WL Raffle",
    "Edit NFT Raffle",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectPermission = (permission) => {
    setSelectedPermission(permission);
    setDropdownOpen(false);
  };

  return (
    <Wrapper>
      <div className="Header">
        <FormPopup className="Adduser-btn" />
        <section className="User">
          <h2>Users Administration</h2>
        </section>
      </div>
      <div className="table">
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Permissions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Dropdown>
                    <DropdownButton onClick={toggleDropdown}>
                      {selectedPermission || item.permissions} &#9662;
                    </DropdownButton>
                    {dropdownOpen && (
                      <DropdownContent style={{ color: "white" }}>
                        {permissionsOptions.map((option) => (
                          <DropdownItem
                            key={option}
                            onClick={() => selectPermission(option)}
                          >
                            {option}
                          </DropdownItem>
                        ))}
                      </DropdownContent>
                    )}
                  </Dropdown>
                </td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    </Wrapper>
  );
};

export default Managecommunities;
