workflow "Push" {
  on = "push"
  resolves = ["ESLint"]
}

workflow "Pull Request" {
  on = "pull_request"
  resolves = ["ESLint"]
}

action "ESLint" {
  uses = "stefanoeb/eslint-action@master"
  args = "--ext .js --ext .jsx --ext .ts --ext .tsx src"
}