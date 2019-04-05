import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <header>
      <section>
        <button type="button">닫기</button>
      </section>
      <section>
        <span>Menu</span>
      </section>
    </header>
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <a href="/">토픽 모아보기</a>
      </li>
      <li>
        <a href="/">서비스 안내</a>
      </li>
      <li>
        <a href="/">공지사항</a>
      </li>
      <li>
        <a href="/">제안하기</a>
      </li>
      <li>
        <a href="/">문의하기</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/">페이스북</a>
      </li>
      <li>
        <a href="/">트위터</a>
      </li>
      <li>
        <a href="/">카카오톡</a>
      </li>
      <li>
        <a href="/">이메일</a>
      </li>
    </ul>
  </div>
);

export default Menu;
