import {Link} from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
      <p>Page not found. Return to home page <Link to="/">Home Page</Link></p>
    </div>
  );
}
