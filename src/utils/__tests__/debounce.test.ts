import { afterEach, describe, expect, it, vi } from 'vitest';
import debounce from '@/utils/debounce';

describe('debounce', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it('calls the function after the specified delay', async () => {
    vi.useFakeTimers();
    const func = vi.fn();
    const debouncedFunc = debounce(func, 200);

    debouncedFunc('test');
    expect(func).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);
    expect(func).toHaveBeenCalledWith('test');
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('resets the delay if called again before the timeout', () => {
    vi.useFakeTimers();
    const func = vi.fn();
    const debouncedFunc = debounce(func, 200);

    debouncedFunc('first');
    vi.advanceTimersByTime(100);
    debouncedFunc('second');

    vi.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith('second');
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('uses the latest arguments when called multiple times within the delay', () => {
    vi.useFakeTimers();
    const func = vi.fn();
    const debouncedFunc = debounce(func, 200);

    debouncedFunc('initial');
    debouncedFunc('latest');

    vi.advanceTimersByTime(200);
    expect(func).toHaveBeenCalledWith('latest');
    expect(func).toHaveBeenCalledTimes(1);
  });
});
