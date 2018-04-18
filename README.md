# polonium-function

Badge | Status
----- | ------
Build Status | [![Build Status](https://travis-ci.org/rgrannell1/polonium-function.svg?branch=master)](https://travis-ci.org/rgrannell1/polonium-function)
License | MIT

## Releases

### v1.0.0 (0f9870)
- Deployment time: March 22nd 2018
#### Changes

- Initial release

#### Known issues

- A subdepency spams an ip-address related error
- Error-form behaviour is inconsistent
- Home URL does not work
- Margin missing from the bottom of page
- Manifest color doesn't match primary colors
- List formatting in terms of use page omits bullet-points
- /terms page does not load from URL directly

#### Tests

- See releases/v1.0.0.md (1a2d6be)

## Build System

### Deployment
```
deploy:production           deploy a primary instance to Google Functions
```

### Building
```
build                       compile client-side code using webpack
build:fix_source            use eslint to fix the source-code
build:watch                 run 'build' each time a file is updated
```

### Linting

```
lint:depcheck               run a check for unused dependencies
lint:buddy                  run a check for unused variables
lint:source                 run a standard js lint
lint:lighthouse             run a lighthouse audit
```

### Running

```
run:remote                  invoke the remote function
run:local                   run the polonium server locally
```

### Testing

```
test                        run automated tests
test:no_salt                send a request containing no salt-value
test:no_password            send a request containing no password-value
test:valid_credentials      send a request containing valid credentials
```
### Miscellaneous

```
service:elasticsearch       run local elasticsearch instance for log-analysis
```
