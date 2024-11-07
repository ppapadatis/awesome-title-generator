import { afterEach, describe, expect, it, vi } from 'vitest';
import jargonTitles from '@/data/jargonTitles';
import jobTitles from '@/data/jobTitles';
import seniorityRoles from '@/data/seniorityRoles';
import techFields from '@/data/techFields';
import getRandomElement from '@/utils/random';

describe('getRandomElement', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('returns a random element from jargonTitles array', () => {
    const randomElement = getRandomElement(jargonTitles);
    expect(jargonTitles).toContain(randomElement);
  });

  it('returns a random element from jobTitles array', () => {
    const randomElement = getRandomElement(jobTitles);
    expect(jobTitles).toContain(randomElement);
  });

  it('returns a random element from seniorityRoles array', () => {
    const randomElement = getRandomElement(seniorityRoles);
    expect(seniorityRoles).toContain(randomElement);
  });

  it('returns a random element from techFields array', () => {
    const randomElement = getRandomElement(techFields);
    expect(techFields).toContain(randomElement);
  });

  it('returns a different element on subsequent calls', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.1).mockReturnValueOnce(0.9);
    const element1 = getRandomElement(jargonTitles);
    const element2 = getRandomElement(jargonTitles);

    expect(element1).not.toEqual(element2);
  });
});
