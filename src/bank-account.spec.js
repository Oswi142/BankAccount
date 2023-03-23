import { BankAccount, ValueError } from "./bank-account";
describe("Bank Account", () => {
  it("has zero balance when is a newly opened account", () => {
    const account = new BankAccount();
    account.open();
    expect(account.balance).toEqual(0);
  });
  it("can deposit money", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });
  it("can deposit money sequentially", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.deposit(50);
    expect(account.balance).toEqual(150);
  });

  xit("can withdraw money", () => {
  it("can withdraw money", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });
  xit("can withdraw money sequentially", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(20);
    account.withdraw(80);
    expect(account.balance).toEqual(0);
  });
  xit("checking balance of closed account throws error", () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => account.balance).toThrow(ValueError);
  });
