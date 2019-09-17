workflow "New workflow" {
  on = "pull_request"
  resolves = ["Bundle Size"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  needs = ["Install"]
  uses = "actions/npm@master"
  args = "run build"
}

action "Bundle Size" {
  needs = ["Build"]
  uses = "./actions/bundle-size"
  secrets = ["GITHUB_TOKEN"]
}