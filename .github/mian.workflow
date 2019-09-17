workflow "New workflow" {
  on = "push"
  resolves = ["ESLint"]
}

action "ESLint" {
  uses = "stefanoeb/eslint-action@master"
  args = "--ext .js --ext .jsx --ext .ts --ext .tsx src"
}