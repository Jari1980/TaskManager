import { Link } from "react-router-dom";
import { mockTeams } from "../mock/data";
import { routes } from "../router/routes";

export default function Teams() {
  return (
    <div>
      <h1>Teams</h1>

      {mockTeams.length === 0 ? (
        <p>No teams yet</p>
      ) : (
        mockTeams.map((team) => (
          <div key={team.id}>
            <Link to={routes.team(team.id)}>{team.name}</Link>
          </div>
        ))
      )}
    </div>
  );
}
