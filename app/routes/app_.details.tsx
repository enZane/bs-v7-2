import { NavLink } from "react-router";
import type { Route } from "./+types/app_.details";

export function loader({ context }: Route.LoaderArgs) {
  return context;
}

export default function DashboardDetails({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Dashboard Details</h1>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
			<NavLink to="/app">Back</NavLink>
    </div>
  );
}