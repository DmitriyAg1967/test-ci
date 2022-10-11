import healthLevel from '../app';

test('healthLeveltest', () => {
  const hero = { name: 'Маг', health: 10 };
  const result = healthLevel(hero);
  expect(result).toBe('critical');
});
