import React, { useEffect, useState } from "react";
import { GetData } from "./GetData";

const TeamStatistics = () => {
  const [q2, setq2] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await GetData();
      if (Array.isArray(data)) {
        setq2(data);
      } else {
        console.error("Invalid response from GetDataQ4");
      }
    };
    getData();
  }, []);

  return (
    <>

      <table
        style={{
          border: "1px solid #ddd",
          width: "80%",
          margin: "auto",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <tr
          style={{
            backgroundColor: "#007bff",
            color: "#ffffff",
            padding: "10px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          <th>Match ID</th>
          <th>Team 1</th>
          <th>Team 2</th>
          <th>Venue</th>
          <th>Match Date</th>
          <th>Fan Enagagement</th>

        </tr>

        {q2.map((p) => (
          <tr
            key={p.MatchId}
            style={{
              backgroundColor: "#ffffff",
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <th style={{ color: "#333333" }}>{p.matchId}</th>
            <th style={{ color: "#333333" }}>{p.team1Name}</th>
            <th style={{ color: "#333333" }}>{p.team2Name}</th>
            <th style={{ color: "#333333" }}>{p.venue}</th>
            <th style={{ color: "#333333" }}>{p.matchDate}</th>
            <th style={{ color: "#333333" }}>{p.fanEngagementCount}</th>
          </tr>
        ))}
      </table>
    </>
  );
};

export default TeamStatistics;
