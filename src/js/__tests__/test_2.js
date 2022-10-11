import healthLevel from '../app';

test('healthLeveltest', () => {
  const hero = { name: 'Маг', health: 30 };
  const result = healthLevel(hero);
  expect(result).toBe('wounded');
});
