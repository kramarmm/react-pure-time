/* eslint-disable */

const prevImp = j => j % 4 === 0 &   j % 100 !== 0 |  j % 400 === 0;
const newImp = j => j % 4 === 0 && j % 100 !== 0 || j % 400 === 0 ? 1 : 0;

test('Both implementations return equal results', () => {
  for (let j = 0; j < 1e5; j++) {
    expect( prevImp(j) ).toEqual( newImp(j) );
  }
});

//  PASS  src/checkingChangedStatement.test.js
//   ✓ Both implementations return equal results (2867ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        3.968s
// Ran all test suites.