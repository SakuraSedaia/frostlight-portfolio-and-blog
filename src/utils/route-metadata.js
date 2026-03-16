import routes from "~/json-data/routes.json";

export function getRouteMetadata(path) {
	for (const route of routes) {
		if (route.path === path) {
			return route;
		}
		if (route.subpages && route.subpages.length > 0) {
			const subpage = route.subpages.find(s => s.path === path);
			if (subpage) {
				return subpage;
			}
		}
	}
	return { page: "Not Found", description: "This page does not exist." };
}
