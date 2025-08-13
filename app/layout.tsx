
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'FitFlow Store',
  description: 'Fitness & Health gear curated for performance — automated store with AI support.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* Crisp chat widget (replace CRISP_WEBSITE_ID) */}
      <Script id="crisp" strategy="afterInteractive">
        {`window.$crisp=[];window.CRISP_WEBSITE_ID="REPLACE_WITH_CRISP_ID";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
      </Script>
    </html>
  )
}
