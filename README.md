# time-heist

## Todo

- [x] Upvote function with firebase
- [ ] Delete trip with firebase
- [ ] Delete trip UI
- [ ] User account page
- [ ] Link trip with user firebase
- [ ] Edit trip
- [ ] Upload images firebase
- [x] Upload images UI
- [x] Fix loading styles
- [ ] Make loading state more specific

### Todo details

After further review, it causes more bugs to not have a loading state for upvoting, so it has been added back in. A more specific loading state for an individual button is a better solution until realtime updates are implemented.

An alternative solution would be to change the app into a realtime app so that I could remove loading states altogether. This will be an optimization for after the initial project is completely functional.

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn run serve
```

### Compiles and minifies for production

```bash
yarn run build
```

### Run your tests

```bash
yarn run test
```

### Lints and fixes files

```bash
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
