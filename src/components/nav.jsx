
import { useLocation, A } from "@solidjs/router";
import RouteData from "~/json-data/routes.json";
import {For, Show} from "solid-js";

export default function Nav() {
    const location = useLocation();
    const active = (path) => (path === location.pathname ? "nav-active" : "");
    return (
        <nav>
            <div class={"container"}>
                <A href={"/"} class={"navbar-brand"}>
                    <img src={"/images/vectors/Frostlight-Fox-Logo.svg"} class={"logo-img"} alt={"Frostlight Studios"} />
                    <span>Frostlight Studios</span>
                </A>
                <div class={"navbar-nav"}>
                    <ul class={"navbar-list"}>
                        <For each={RouteData}>
                            {route => (
                              <Show when={route.show} fallback={<></>}>
                                <li class={`navbar-item ${active(route.path)}`}><A href={`/${route.path}`}>{route.page}</A></li>
                              </Show>
                            )}
                        </For>
                    </ul>
                </div>
            </div>
        </nav>
    )
}