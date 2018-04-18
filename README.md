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
deploy:production
```

### Build
```
build":
build:fix_source
build:watch
```

### Lint

```
lint:depcheck
lint:buddy
lint:source
```

### Run

```
run:remote
run:local
```

### Test

```
test
test:no_salt
test:no_password
test:valid_credentials
test:lighthouse
```
### Miscellaneous

```
service:elasticsearch
```
