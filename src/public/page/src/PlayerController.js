export default {
  ArrowRight: (player) => {
    player._x = player._x + player._size;
  },
  ArrowLeft: (player) => {
    player._x = player._x - player._size;
  },
  ArrowDown: (player) => {
    player._y = player._y + player._size;
  },
  ArrowUp: (player) => {
    player._y = player._y - player._size;
  },
};
