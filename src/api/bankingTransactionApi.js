const TRANSACTION = '/transactions?pageSize=2&sort=DESC';

const ASYNC_TRANSACTION = '/sync'


export const get_banking_transaction = () => TRANSACTION;

export const async_banking_transaction = () => ASYNC_TRANSACTION;