# j-dumbell/me
Portfolio website for James Dumbell.

## UI
A [React](https://react.dev/) app built with [Vite](https://vitejs.dev), using [TypeScript](https://www.typescriptlang.org), [Vitest](https://vitest.dev) & [Testing Library](https://testing-library.com) for testing and [Tailwindcss](https://tailwindcss.com) for styling.

### Running locally
```bash
yarn dev
```

### Running tests
```bash
yarn test
```

### Lint
```bash
yarn lint
```

### Typecheck
```bash
yarn typecheck
```

### Build
```bash
yarn build
```

## Infrastructure
Deployed to AWS via S3, Cloudfront & Route53. Provisioned via AWS CDK.

### Diff
To compare local and prod resource states,
```bash
yarn infra-diff
```

### Deploy infrastructure
To deploy provision AWS resources,
```bash
yarn infra-diff
```

### Deploy website
To deploy the website bundle,
```bash
yarn ui-build
yarn ui-deploy
```

## CI/CD
CI and CD are via [Github Actions](https://docs.github.com/en/actions). 
PRs trigger a workflow that runs tests and builds the website bundle.
Commits to main trigger a workflow that deploys to production.

## License
This project is licensed under the MIT License.
