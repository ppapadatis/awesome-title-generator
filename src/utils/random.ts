import type jargonTitles from '@/data/jargonTitles';
import type jobTitles from '@/data/jobTitles';
import type seniorityRoles from '@/data/seniorityRoles';
import type techFields from '@/data/techFields';

type RandomElements =
  | typeof jargonTitles
  | typeof jobTitles
  | typeof seniorityRoles
  | typeof techFields;

const getRandomElement = (array: RandomElements): string => {
  return array[Math.floor(Math.random() * array.length)];
};

export default getRandomElement;
