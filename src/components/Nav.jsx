
import { useLocation } from "@solidjs/router";

export default function Nav() {
    const location = useLocation();
    const active = (path) => (path == location.pathname ? "active" : "")
    return (
        <nav>
            <div class={"container"}>
                <a href="/" class={"navbar-brand"}>
                    <img src={"/images/vectors/Frostlight-Fox-Logo.svg"} class={"logo-img"} alt={"Frostlight Studios"} />
                    <span>Frostlight Studios</span>
                </a>
                <div class={"navbar-nav"}>
                    <ul class={"navbar-list"}>
                        <li><a href="/" class={`navbar-item ${active("/")}`}>Home</a></li>
                        <li><a href="/volunteer" class={`navbar-item ${active("/volunteer")}`}>Volunteer</a></li>
                        <li><a href="/contact" class={`navbar-item ${active("/contact")}`}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}