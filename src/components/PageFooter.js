import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; {config.authorName}</li>
        <li>
          Design: <a href="https://html5up.net/identity">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}
