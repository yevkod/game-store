export const calcTotalPrice = (games) => games.reduce((acc, game) => (acc += game.price), 0);

export const randomOrderNumber = Math.floor(Math.random() * 1000);