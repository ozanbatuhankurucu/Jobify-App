import { Link, useRouteError } from 'react-router-dom'

export const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      <h1>Error Page !!!</h1>
      <Link to='/dashboard'>back home</Link>
    </div>
  )
}
