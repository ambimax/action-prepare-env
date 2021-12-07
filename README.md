# action-prepare-env

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/organization/repository) [![CI](https://github.com/ambimax/action-prepare-env/actions/workflows/ci.yml/badge.svg)](https://github.com/ambimax/action-prepare-env/actions/workflows/ci.yml) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Introduction

This github action will let you prepare some commonly used variables as outputs that can be referenced in later steps.

## Example

<!-- region:example-code start -->

```yaml
- id: env
  uses: ambimax/action-prepare-env@v1.0.6

- run: echo ${{ steps.env.outputs.escaped_branch_name }}
```

<!-- region:example-code end -->

## Available outputs

### branch_name

The name of the current (or deleted) branch. Works for both `on: push`, `on: pull_request` and `on: delete` triggers.

### escaped_branch_name

An escaped version of `branch_name` that can be safely used to construct deployment names.

This name is guaranteed to not be longer than 16 characters and will not contain any characters except `a-z`, `0-9`, or `-`. All leading and trailing `-` will be removed to prevent deployment names with `--`. The name will also contain a 4 character hash code (included in the 16 character limit) to prevent collisions with branches that generate the same name.

#### Examples

| branch_name              | escaped_branch_name |
| ------------------------ | ------------------- |
| PROJECT-5-add-some-stuff | project-5-a-8f07    |
| fix/remove-some-bug      | fix-remove-553b     |
| -----branch-----         | branch-8944         |

## Maintainer

- [Tobias Faust](https://github.com/FaustTobias), [ambimax® GmbH](https://www.ambimax.de/)
