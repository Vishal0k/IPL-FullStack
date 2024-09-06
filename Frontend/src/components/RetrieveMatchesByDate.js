import React, { useEffect, useState } from "react";
import { GetDataQ4 } from "./GetDatQ4";

const RetrieveMatchesByDate = () => {
  const [q4, setq4] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  useEffect(() => {
    const getDataQ4 = async () => {
      let data = await GetDataQ4(start, end);
      if (Array.isArray(data)) {
        setq4(data);
      } else {
        console.error("Invalid response from GetDataQ4");
      }
    };
    getDataQ4();
  }, [start, end]);

  const onChange1 = (e) => {
    setInput1(e.target.value);
  };

  const onChange2 = (e) => {
    setInput2(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStart(input1);
    setEnd(input2);
  };

  return (
    <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f8f9fa" }}>
      <form
        onSubmit={onSubmit}
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="start" style={{ marginBottom: "5px" }}>
            Start date
          </label>
          <input
            type="date"
            className="form-control"
            id="start"
            value={input1}
            onChange={onChange1}
            style={{ borderRadius: "5px", padding: "8px", width: "100%" }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="end" style={{ marginBottom: "5px" }}>
            End date
          </label>
          <input
            type="date"
            className="form-control"
            id="end"
            value={input2}
            onChange={onChange2}
            style={{ borderRadius: "5px", padding: "8px", width: "100%" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get detail
        </button>
      </form>
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        Matches played within the specified date range: {q4.length}.
      </h3>
      <table
        className="table table-striped table-bordered"
        style={{ marginTop: "20px", width: "100%", border: "1px solid #ccc" }}
      >
        <thead style={{ backgroundColor: "#007bff", color: "#fff" }}>
          <tr>
            <th>Match Id</th>
            <th>Match Date</th>
            <th>Venue</th>
            <th>Team 1</th>
            <th>Team 2</th>
          </tr>
        </thead>
        <tbody>
          {q4.map((p) => (
            <tr key={p.matchId}>
              <td>{p.matchId}</td>
              <td>{p.matchDate}</td>
              <td>{p.venue}</td>
              <td>{p.team1Name}</td>
              <td>{p.team2Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RetrieveMatchesByDate;
