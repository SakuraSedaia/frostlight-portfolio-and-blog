
import { useLocation, A } from "@solidjs/router";

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
                        <li class={`navbar-item ${active("/")}`}><A href={"/"}>Home</A></li>
                        <li class={`navbar-item ${active("/volunteer")}`}><A href={"/volunteer"}>Volunteer</A></li>
                        <li class={`navbar-item ${active("/contact")}`}><A href={"/contact"}>Contact</A></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}