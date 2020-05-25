# Project Euler

This repository includes my solutions to the [Project Euler](https://projecteuler.net/) problems. The tests are taken from [freecodecamp's version](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/). Although Project Euler discourages people from uploading their solutions online so as not to deprive others from the joy of solving it on their own, *freecodecamp*'s tests already give away the answer. I believe the solution is the more interesting part, not the answer, so that's why I want to keep a record of them here.

All the problems are solved in `TypeScript` using the runtime environment [`deno`](https://deno.land/).

## Installation

Unlike `node`, `deno` doesn't need `150MB+` node_modules in every folder for having basic test functionality and Typescript support. So all you need to do is [**install deno**](https://deno.land/#installation).

## Running the tests

Once inside a problem directory of the type `n_problem-name` (eg. `01_multiples-3-5`) you just need to run the test command:

``` sh
cd 01_multiples-3-5
deno test
```

## Commit naming strategy

All commits are prefixed with the number of the problem they are related to, followed by a short description.
