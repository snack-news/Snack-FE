const shuffle = <ItemType>(items: ItemType[]) => [...items].sort(() => 0.5 - Math.random());

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
