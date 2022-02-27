import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'
import type { LinksFunction, MetaFunction } from 'remix'
import tailwindStyles from '~/styles/tailwind.css'

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStyles }]
}

export let meta: MetaFunction = () => {
  return { title: 'Remix Form Wizard Demo' }
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export function CatchBoundary() {
  let caught = useCatch()

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      )

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      )
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <h1>There was an unhandled error!</h1>
      <pre>{error.message}</pre>
    </Document>
  )
}
