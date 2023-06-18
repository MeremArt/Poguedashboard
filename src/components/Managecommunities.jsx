import React, { useState } from "react";
import styled from "styled-components";

const Managecommunities = () => {
  const data = [
    {
      id: 1,
      name: "John",
      email: "example@gmail.com",
      status: "Enabled",
      permissions: "View Dashboard",
      block: "Active",
    },
    {
      id: 2,
      name: "Jane",
      email: "example@gmail.com",
      status: "Enabled",
      permissions: "Withdraw Confirmation",
      block: "Banned",
    },
    {
      id: 3,
      name: "Bob",
      email: "example@gmail.com",
      status: "Disabled",
      permissions: "Edit WL Raffle",
      block: "Banned",
    },
    {
      id: 4,
      name: "Cole",
      email: "example@gmail.com",
      status: "Disabled",
      permissions: "Edit NFT Raffle",
      block: "Active",
    },
  ];

  const [selectedPermission, setSelectedPermission] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const permissionsOptions = ["Unban", "Ban"];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectPermission = (permission) => {
    setSelectedPermission(permission);
    setDropdownOpen(false);
  };

  return (
    <div>
      <section className="table">
        <StyledTable>
          <table className="tb">
            <thead>
              <tr>
                <th>Wl Created</th>
                <th>Nft Created</th>
                <th>Wl Pending</th>
                <th>NFT pending</th>
                <th>Block</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.permissions}</td>
                  <td>{item.status}</td>
                  <td>
                    <Dropdown>
                      <DropdownButton onClick={toggleDropdown}>
                        {item.block} &#9662;
                      </DropdownButton>
                      {dropdownOpen && (
                        <DropdownContent>
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
                </tr>
              ))}
            </tbody>
          </table>
        </StyledTable>
      </section>
    </div>
  );
};

export default Managecommunities;

const StyledTable = styled.table`
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
  .tb {
    width: 70vw;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
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
`;

const DropdownItem = styled.div`
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
