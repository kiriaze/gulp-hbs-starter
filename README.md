# basic-starter

Run it.

```
$ npm install
```

You're now a baller.

![Bump it.](https://media.giphy.com/media/DjVCpTvzAKLaE/giphy.gif)

---

### ToDos
- [x] HBS w/ JSON for templating styleguide foundation
- [x] Clean up assets/scss
- [ ] Figure out front matter alt for hbs, cuz the page info might get messy if they each have their own json, unless theres one global json file...unless each dir is a page, like about/index.html and that would also house the json....and how does that tie into SG...
- [ ] Clean up buttons
- [ ] Cherry pick mixins
- [ ] Missing BEM style syntax, e.g. .is-active
- [ ] Add full height section class flex
- [x] Clean up gulpfile
- [x] Clean up / merge config.js
- [x] Clean up / merge package.json
- [x] Look thru all gulp tasks
- [ ] Uncss?
- [ ] Styleguide w/ pages integration ( make a hbs version or integrate it within this starterkit? requires: global landing, page specific kits with each mod having a downloadable psd for client - should the SG be submodule like gulp version [would be easier, cleaner], or within proj repo - in which case there needs to be a sg dir ) - so basics down with the SG, but not sure how to combine both within proj, even if submod, have to have the projects gulp files exclude from targeting the SG and vice versa, orrrr scrap the current build and port the SG...orrrrr keep both versions as kits
- [ ] Test out separate pages within pages dir
- [ ] Figure out why vendor dir shows up in dist
- [ ] Integrate watchify/webpack/browserify - despite not utilizing it now..since this will be the starter kit
- [ ] Test clean `npm install` and run some tests for js/css/hbs
