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
    <section>
      <Link to="/">홈</Link>
      <a href="/">토픽 모아보기</a>
      <a href="/">서비스 안내</a>
      <a href="/">공지사항</a>
      <a href="/">제안하기</a>
      <a href="/">문의하기</a>
    </section>

    <section>
      <a href="/">페이스북</a>
      <a href="/">트위터</a>
      <a href="/">카카오톡</a>
      <a href="/">이메일</a>
    </section>
  </div>
);

export default Menu;
