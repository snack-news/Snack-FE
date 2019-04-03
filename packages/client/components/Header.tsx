import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <section>Snack</section>
    <section>
      <Link to="/menu/">메뉴</Link>
    </section>
  </header>
);

export default Header;
