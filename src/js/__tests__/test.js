import healthLevel from '../app';

test('healthLeveltest', () => {
  const hero = { name: 'Маг', health: 50 };
  const result = healthLevel(hero);
  expect(result).toBe('health');
});
