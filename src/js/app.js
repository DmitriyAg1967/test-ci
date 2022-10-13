export default function healthLevel(gameHero) {
  let result = '';
  if (gameHero.health >= 50) {
    result = 'health';
  } else if (gameHero.health < 50 && gameHero.health > 15) {
    result = 'wounded';
  } else if (gameHero.health <= 15) {
    result = 'critical';
  }
  return result;
}
