import { ELEMENT_IDS, EVENTS, TIMEOUT } from '@/constants';
import jargonTitles from '@/data/jargonTitles';
import jobTitles from '@/data/jobTitles';
import seniorityRoles from '@/data/seniorityRoles';
import techFields from '@/data/techFields';
import debounce from '@/utils/debounce';
import getRandomElement from '@/utils/random';

const generateRandomTitle = (): string => {
  const randomSeniority = getRandomElement(seniorityRoles);
  const randomField = getRandomElement(techFields);
  const randomJargon = getRandomElement(jargonTitles);
  const randomJob = getRandomElement(jobTitles);
  return `${randomSeniority} ${randomField} ${randomJargon} ${randomJob}`;
};

const inputElement = document.getElementById(ELEMENT_IDS.TITLE_INPUT) as HTMLInputElement;
const buttonElement = document.getElementById(ELEMENT_IDS.GENERATE_BUTTON) as HTMLButtonElement;

const generateTitle = debounce(() => {
  inputElement.value = generateRandomTitle();
}, TIMEOUT.DEBOUNCE_DELAY);

buttonElement.addEventListener(EVENTS.CLICK, generateTitle);
