import React, { useState } from "react";
import styled from "styled-components";

const Managecommunities = () => {
  const [active, setActive] = useState(false);

  const toggleColor = () => {
    setActive(!active);
  };
  const data = [
    {
      id: 1,
      name: "John",
      email: "example@gmail.com",
      status: "Pending",
      permissions: "withdraw",
      block: "Unlocked",
    },
    {
      id: 2,
      name: "Jane",
      email: "example@gmail.com",
      status: "Slow Network",
      permissions: "Withdraw",
      block: "Blocked",
    },
    {
      id: 3,
      name: "Bob",
      email: "example@gmail.com",
      status: "Sent",
      permissions: "Withdraw",
      block: "Blocked",
    },
    {
      id: 4,
      name: "Cole",
      email: "example@gmail.com",
      status: "Pending",
      permissions: "Withdraw",
      block: "Unlocked",
    },
  ];

  return (
    <div>
      <section className="table">
        <StyledTable>
          <table className="tb">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>

                <th>Status</th>
                <th>Withdrawal</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.status}</td>

                  <td>
                    <button
                      onClick={toggleColor}
                      className={active ? "btn active" : "btn"}
                    >
                      {item.permissions}
                    </button>
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
  .btn {
    background-color: red;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn.active {
    background-color: green;
  }
`;
