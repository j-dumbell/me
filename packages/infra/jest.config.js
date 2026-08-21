module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/bin', '<rootDir>/lib'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  // No tests exist yet - the old config pointed at a `test/` dir that was
  // never created. Pass cleanly for now; drop this once real *.test.ts
  // files land alongside the source in bin/ and lib/.
  passWithNoTests: true
}
