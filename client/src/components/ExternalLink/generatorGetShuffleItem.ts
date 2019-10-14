import { shuffle } from '~client/utils';

function* generatorGetShuffleItem<ItemType>(items: ItemType[]) {
  const shuffledItems = shuffle<ItemType>(items);
  const { length } = shuffledItems;
  let currentIndex = 0;

  while (true) {
    yield shuffledItems[currentIndex];

    currentIndex += 1;
    currentIndex %= length;
  }
}

export default generatorGetShuffleItem;
