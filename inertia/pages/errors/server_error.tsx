import { Head } from "@inertiajs/react";

export default function ServerError(props: { error: any }) {
  return (
    <>
      <div className="container">
        <Head title="Server Error" />
        <div className="title">Server Error</div>

        <span>{props.error.message}</span>
      </div>
    </>
  )
}
