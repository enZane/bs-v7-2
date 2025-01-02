import { NavLink } from "react-router";
import type { Route } from "./+types/dashboard._index";

export function loader({ context }: Route.LoaderArgs) {
  return context;
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
			<NavLink to="/dashboard/details">Go to details</NavLink>
    </div>
  );
}
