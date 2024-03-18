const accountId = 451314;
let accountEmail = 'vivek@mail.com';
var accountName = 'Vivek';
accountCity = 'Chennai';

// accountId = 564134; // Not Allowed

accountEmail = 'vivek@github.com';
accountName = 'vivek';
accountCity = 'Rajasthan';

/*
Prefer Not to Use var
Because of Issue With Block Scope and Functional Scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountName, accountCity]);