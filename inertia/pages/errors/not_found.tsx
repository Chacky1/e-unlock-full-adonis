import { Head } from "@inertiajs/react"

export default function NotFound() {
  return (
    <>
      <div className="container">
        <Head title="Not Found" />
        <div className="title">Page not found</div>

        <span>This page does not exist.</span>
      </div>
    </>
  )
}
