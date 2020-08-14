import { test, expect } from '@jest/globals';
import reverse from '../src/index.js';

test('tests', () => {
    expect(reverse('hello')).toEqual('oleh');
    expect(reverse('')).toEqual('');
});