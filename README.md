# time-heist

## Todo

- [x] Upvote function with firebase
- [ ] Delete trip with firebase
- [ ] Delete trip UI
- [ ] User account page
- [ ] Link trip with user firebase
- [ ] Edit trip
- [ ] Upload images firebase
- [ ] Upload images UI
- [ ] Fix loading styles
- [ ] Make loading state more specific

### Todo details

Currently the upvote function is working, but it causes the entire page to enter a loading state. It is temporarily fixed by not triggering any loading state and pre-emptively incrementing the vote, but it would be better if only the upvote button would show a loading state and only upvote on a successful API submission.

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
