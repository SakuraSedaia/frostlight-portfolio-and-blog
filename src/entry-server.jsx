// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang={"en"}>
        <head>
          <meta charset={"utf-8"} />
          <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
          <link rel="icon" href={"/images/icons/Frostlight-Fox-Logo.ico"} />
          {assets}
          <script>
            {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
          </script>
          <script defer src="/_vercel/insights/script.js"></script>
        </head>
        <body>
          <div id={"app"}>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
