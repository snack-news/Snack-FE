import * as React from 'react';

const PickSelector = () => (
  <section>
    <input type="radio" value="develop" name="gender" />
    <span>개발</span>
    <input type="radio" value="degsin" name="gender" />
    <span>디자인</span>
  </section>
);

export default PickSelector;
