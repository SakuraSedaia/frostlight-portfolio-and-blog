
import { useLocation, A } from "@solidjs/router";

export default function Nav() {
    const location = useLocation();
    const active = (path) => (path == location.pathname ? "active" : "")
    return (
        <nav>
            <div class={"container"}>
                <A href="/" class={"navbar-brand"}>
                    <img src={"/images/vectors/Frostlight-Fox-Logo.svg"} class={"logo-img"} alt={"Frostlight Studios"} />
                    <span>Frostlight Studios</span>
                </A>
                <div class={"navbar-nav"}>
                    <ul class={"navbar-list"}>
                        <li><A href="/" class={`navbar-item ${active("/")}`}>Home</A></li>
                        <li><A href="/volunteer" class={`navbar-item ${active("/volunteer")}`}>Volunteer</A></li>
                        <li><A href="/contact" class={`navbar-item ${active("/contact")}`}>Contact</A></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}