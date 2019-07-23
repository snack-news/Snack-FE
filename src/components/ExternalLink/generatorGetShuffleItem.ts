const shuffle = (items: unknown[]) => [...items].sort(() => 0.5 - Math.random());

function* generatorGetShuffleItem(items: unknown[]) {
  const shuffledItems = shuffle(items);
  const { length } = shuffledItems;
  let currentIndex = 0;

  while (true) {
    yield shuffledItems[currentIndex];

    currentIndex += 1;
    currentIndex %= length;
  }
}

export default generatorGetShuffleItem;
