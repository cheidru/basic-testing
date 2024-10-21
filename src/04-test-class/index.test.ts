// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {    
    // Write your test here
    const account = getBankAccount(200);
    expect(account.getBalance()).toBe(200);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const account = getBankAccount(500);
    expect(account.withdraw(1000)).toThrow(InsufficientFundsError)
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const sender = getBankAccount(500);
    const receiver = getBankAccount(0);
    expect(sender.withdraw(1000)).toThrow(InsufficientFundsError)
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
  });

  test('should deposit money', () => {
    // Write your test here
  });

  test('should withdraw money', () => {
    // Write your test here
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
