import React, { useState } from "react";
import AddPayment from "./AddPayment";

const AddPlayer = (props) => {
  const [player, setPlayer] = useState({
    PlayerName: "",
    TeamId: "",
    Role: "",
    Age: "",
    MatchesPlayed: "",
  });

  const createPlayer = async () => {
    await AddPayment(player);
  };

  const validate = (e) => {
    e.preventDefault();
    if (
      e.target.PlayerName.value === "" ||
      e.target.TeamId.value === "" ||
      e.target.Role.value === "" ||
      e.target.Age.value === "" ||
      e.target.MatchesPlayed.value === ""
    ) {
      alert("please fill all valid data");
      return false;
    } else {
      createPlayer();
    }
  };

  const onChange = (e) => {
    setPlayer({ ...player, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form
        className="form-group container"
        onSubmit={validate}
        style={{
          padding: "20px",
          margin: "20px auto",
          width: "50%",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="player_name" style={{ marginBottom: "5px" }}>
            Player Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="PlayerName"
            value={player.PlayerName}
            onChange={onChange}
            style={{
              borderRadius: "10px",
              padding: "10px",
              width: "100%",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="team_id" style={{ marginBottom: "5px" }}>
            Team ID:
          </label>
          <input
            type="number"
            className="form-control"
            id="TeamId"
            value={player.TeamId}
            onChange={onChange}
            style={{
              borderRadius: "10px",
              padding: "10px",
              width: "100%",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="role" style={{ marginBottom: "5px" }}>
            Role:
          </label>
          <input
            type="text"
            className="form-control"
            id="Role"
            value={player.Role}
            onChange={onChange}
            style={{
              borderRadius: "10px",
              padding: "10px",
              width: "100%",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="age" style={{ marginBottom: "5px" }}>
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="Age"
            value={player.Age}
            onChange={onChange}
            style={{
              borderRadius: "10px",
              padding: "10px",
              width: "100%",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="matches_played" style={{ marginBottom: "5px" }}>
            Matches Played:
          </label>
          <input
            type="number"
            className="form-control"
            id="MatchesPlayed"
            value={player.MatchesPlayed}
            onChange={onChange}
            style={{
              borderRadius: "10px",
              padding: "10px",
              width: "100%",
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            borderRadius: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Player
        </button>
      </form>
    </>
  );
};

export default AddPlayer;
