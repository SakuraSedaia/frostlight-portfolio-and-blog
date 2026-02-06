import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { FileRoutes } from "@solidjs/start/router"
import "./app.scss";

export default function App() {
	
	return (
		<Router
			base={import.meta.env.SERVER_BASE_URL}
			root={(props) => (
				<>
					<Suspense>{props.children}</Suspense>
				</>
			)}
			url={"/"}
		>
			<FileRoutes />
		</Router>
	);
}
