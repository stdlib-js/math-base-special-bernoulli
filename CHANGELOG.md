# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-05-19)

<section class="features">

### Features

-   [`47cfa90`](https://github.com/stdlib-js/stdlib/commit/47cfa907d643a00ac5b3fce9967e655401e110f8) - update the return value for `n=1` in `math/base/special/bernoulli` [(#3108)](https://github.com/stdlib-js/stdlib/pull/3108)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`47cfa90`](https://github.com/stdlib-js/stdlib/commit/47cfa907d643a00ac5b3fce9967e655401e110f8): update return value for `n=1`

    -   In order to migrate and preserve prior behavior, users should special case `n=1` and return `0`. The change in this commit aligns return values with SymPy and R; although, other libraries and envs choose to return `-0.5`.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`0e2afee`](https://github.com/stdlib-js/stdlib/commit/0e2afeeeb0bf31c508ed943c5f0f6fb558a26381) - **bench:** refactor random value generation [(#5374)](https://github.com/stdlib-js/stdlib/pull/5374) _(by Saurabh Singh, Athan Reines)_
-   [`cfc0665`](https://github.com/stdlib-js/stdlib/commit/cfc0665435a1f99158d7fed39b8873dea6aa6209) - **docs:** add missing private tag _(by Philipp Burckhardt)_
-   [`47cfa90`](https://github.com/stdlib-js/stdlib/commit/47cfa907d643a00ac5b3fce9967e655401e110f8) - **feat:** update the return value for `n=1` in `math/base/special/bernoulli` [(#3108)](https://github.com/stdlib-js/stdlib/pull/3108) _(by Gunj Joshi, Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Karan Anand
-   Philipp Burckhardt
-   Saurabh Singh

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-28)

<section class="features">

### Features

-   [`0c78f2f`](https://github.com/stdlib-js/stdlib/commit/0c78f2f502062c3d5bd6c8ac857cb2203fd17f7f) - add C implementation for `math/base/special/bernoulli`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`7c8d0ce`](https://github.com/stdlib-js/stdlib/commit/7c8d0ced2596cd1ed9e4dec0a40915dd91f59537) - missing headers in C examples [(#1958)](https://github.com/stdlib-js/stdlib/pull/1958)

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`7c8d0ce`](https://github.com/stdlib-js/stdlib/commit/7c8d0ced2596cd1ed9e4dec0a40915dd91f59537) - **fix:** missing headers in C examples [(#1958)](https://github.com/stdlib-js/stdlib/pull/1958) _(by Rutam Kathale)_
-   [`d27da5d`](https://github.com/stdlib-js/stdlib/commit/d27da5ddf7d6acb8da8c4f7bdee5a05df139329e) - **chore:** update package meta data [(#1926)](https://github.com/stdlib-js/stdlib/pull/1926) _(by stdlib-bot, Athan Reines)_
-   [`28433d6`](https://github.com/stdlib-js/stdlib/commit/28433d637a39abec34dddc51d88c59fdc7c38f3a) - **docs:** clean-up C function parameter and return annotations _(by Philipp Burckhardt)_
-   [`0c78f2f`](https://github.com/stdlib-js/stdlib/commit/0c78f2f502062c3d5bd6c8ac857cb2203fd17f7f) - **feat:** add C implementation for `math/base/special/bernoulli` _(by Gunj Joshi, Pranav)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Philipp Burckhardt
-   Pranav Goswami
-   Rutam Kathale

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

