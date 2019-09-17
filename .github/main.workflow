workflow "Push" {
  on = "push"
  resolves = ["ESLint"]
}

workflow "Pull Request" {
  on = "pull_request"
  resolves = ["ESLint"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "ESLint" {
  needs = ["Install"]
  uses = "stefanoeb/eslint-action@master"
  args = "--ext .js --ext .jsx --ext .ts --ext .tsx src"
}