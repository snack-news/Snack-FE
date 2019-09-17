workflow "Pull Request" {
  on = "pull_request"
  resolves = ["ESLint"]
}

action "ESLint" {
  uses = "gimenete/eslint-action@master"
  secrets = ["GITHUB_TOKEN"]
}