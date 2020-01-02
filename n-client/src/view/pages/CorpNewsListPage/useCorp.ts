import { useCorps } from '~nclient/hooks/useCorps';

export const useCorp = (corpId?: number | null | string) => {
  const corps = useCorps();
  console.log('corps', corps);
  console.log('corpId', corpId);

  if (!corps || !corpId) return undefined;

  const corp = corps.find(({ id }) => `${id}` === `${corpId}`);
  console.log('corp', corp);

  return corp;
};
