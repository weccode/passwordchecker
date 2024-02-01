import { checkPasswordWithoutRegEx } from './PasswordChecker';

// Test case 1: Password is valid
console.log(checkPasswordWithoutRegEx('Abc123!@')); // Expected output: "Password is valid"

// Test case 2: Password is too short
console.log(checkPasswordWithoutRegEx('Abc123')); // Expected output: "Password must be at least 8 characters long"

// Test case 3: Password does not contain an uppercase letter
console.log(checkPasswordWithoutRegEx('abc123!@')); // Expected output: "Password must contain at least one uppercase letter"

// Test case 4: Password does not contain a lowercase letter
console.log(checkPasswordWithoutRegEx('ABC123!@')); // Expected output: "Password must contain at least one lowercase letter"

// Test case 5: Password does not contain a number
console.log(checkPasswordWithoutRegEx('Abcdefg!@')); // Expected output: "Password must contain at least one number"

// Test case 6: Password does not contain a special character
console.log(checkPasswordWithoutRegEx('Abc123456')); // Expected output: "Password must contain at least one special character"