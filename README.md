# github-action-template

An opinionated GitHub Actions Template using [tsup](https://github.com/egoist/tsup) for bundling.

> [!IMPORTANT]
> tsup is not actively maintained anymore. Consider using [tsdown](https://github.com/rolldown/tsdown) as a more modern alternative for bundling your GitHub Actions.
> A template can be found here: [github-action-tsdown-template](https://github.com/luxass/github-action-template-tsdown)


## Try it now!

### GitHub Template

[Create a new repository from this template](https://github.com/new?template_name=github-action-template&template_owner=luxass&name=action-[name])

### Manual

If you prefer to do it manually without the template, you can do the following:

```bash
npx degit luxass/github-action-template action-[your-action-name]
cd action-[your-action-name]
pnpm install
```

## Usage

Before you start, you need to do the following to setup the project:

- [ ] Find and replace all `github-action-template` with your project name
- [ ] Update the License
- [ ] Update the README.md
- [ ] Update `action.yaml` file

> [!NOTE]
> You should probably remove the `test-action.yaml` workflow, and move it to a different repository.
> This will make it easier to test the action in a real repository, without having all the noise of the action repository.
