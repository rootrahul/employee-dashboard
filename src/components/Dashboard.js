import React from "react";
import "./Dashboard.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import data from "./data.json";

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <h1>Employee Dashboard</h1>
      <div className="dashboard">
        <table className="employee__details">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
          {data.user.map((user) => {
            const { id, name, age, gender, email, phoneNo } = user;
            // console.log(mobile);
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{phoneNo}</td>
              </tr>
            );
          })}
        </table>
        <button
          id="logout__button"
          type="logout"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
