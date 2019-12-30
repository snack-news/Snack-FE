interface ICrop {
  id: number;
  type: string;
  name: string;
  image: string;
}

export const resCorpsData: { data: ICrop[] } = {
  data: [
    { id: 2, type: 'CORP', name: '비바리퍼블리카', image: '/logo/toss.svg' },
    { id: 4, type: 'CORP', name: '야놀자', image: '/logo/yanolja.svg' },
    { id: 1, type: 'CORP', name: '우아한형제들', image: '/logo/woowa.svg' },
    { id: 5, type: 'CORP', name: '위메프', image: '/logo/wemakeprice.svg' },
    { id: 3, type: 'CORP', name: '쿠팡', image: '/logo/coupang.svg' },
  ],
};
