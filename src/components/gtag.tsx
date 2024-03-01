import { useRouter } from "next/router";
import { useEffect } from "react";
import { pageview } from "../utils/gtag";

// This component is used in the _app.tsx wrapper. this is connecting and calling to google analitics to track the website annd its stats, it defines here by sctipts what it should track, and in utils, we use function to actially send the data. 
// this is then in every page. A clever way to track every page and its stats.


//WIP: Add the google analitics tracking code acount.
const gaTrackingId = "Id of the google analitics tracking code acount.";

export const Gtag = () => {
  const router = useRouter();

  useEffect(() => {
    pageview(location.pathname, gaTrackingId);
  }, [router?.asPath]);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaTrackingId}', {
        page_path: window.location.pathname
      });
    `,
        }}
      />
    </>
  );
};