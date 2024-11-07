import { describe, expect, it } from 'vitest';
import { ELEMENT_IDS, EVENTS, TIMEOUT } from '@/constants';

describe('constants', () => {
  it('contains correct ELEMENT_IDS values', () => {
    expect(ELEMENT_IDS).toHaveProperty('TITLE_INPUT', 'title-input');
    expect(ELEMENT_IDS).toHaveProperty('GENERATE_BUTTON', 'generate-button');
  });

  it('contains correct TIMEOUT values', () => {
    expect(TIMEOUT).toHaveProperty('DEBOUNCE_DELAY', 300);
  });

  it('contains correct EVENTS values', () => {
    expect(EVENTS).toHaveProperty('CLICK', 'click');
  });
});
