import React from 'react';
import { Link } from "gatsby";

const NotFound = () => (
  <div>
    <h1>404 - Page not found</h1>
    <p>
      Go back to <Link to="/">homepage</Link>.
    </p>
  </div>
)

export default NotFound