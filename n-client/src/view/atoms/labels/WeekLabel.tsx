import React, { FC } from 'react';

export const WeekLabel: FC<{ date: number }> = ({ date }) => {
  return (
    <div style={{ fontSize: '15px', color: '#0b66f7' }}>
      {getDateFormat(new Date(date), 'YYYY년 MM월 WEEK_NUM주')}
    </div>
  );
};
