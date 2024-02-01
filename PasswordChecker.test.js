import { checkPassword, checkPasswordWithoutRegEx } from './PasswordChecker.js';
import {describe, test} from 'node:test';
import * as assert from 'node:assert';

describe('checkPassword', () => {
    const sut = checkPassword;

    test('throws an error if the password is less than 8 characters long', () => {
        assert.throws(() => sut(123), Error);
    });
});