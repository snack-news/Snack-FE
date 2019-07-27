import generatorGetShuffleItem from './generatorGetShuffleItem';

describe('generatorGetShuffleItem를 실행한 결과를 실행시', () => {
  test('배열 길이만큼 주기적으로 값을 반환한다', () => {
    // Given
    const items = ['a', 'b', 'c'];
    const getShuffleItem = generatorGetShuffleItem(items);

    // When
    const resultItems = items.map(() => getShuffleItem.next().value);

    // Then
    resultItems.forEach(resultItem => {
      expect(resultItem).toBe(getShuffleItem.next().value);
    });
  });

  test('입력된 배열을 섞어서 1개씩 반환한다.', () => {
    const RETRY_TIMES = 10;

    // Given
    const items = ['a', 'b', 'c'];
    const getShuffleItems = Array.from({ length: RETRY_TIMES }).map(() =>
      generatorGetShuffleItem(items)
    );

    // When
    const firstShuffleItems = getShuffleItems.map(getShuffleItem => getShuffleItem.next().value);
    const firstItem = items[0];

    // Then
    expect(firstShuffleItems.some(firstShuffleItem => firstShuffleItem !== firstItem)).toBe(true);
  });
});
