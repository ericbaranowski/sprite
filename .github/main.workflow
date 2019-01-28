workflow "New workflow" {
  on = "push"
  resolves = ["deploy-canary", "deploy-stable"]
}

action "deploy" {
  uses = "actions/zeit-now@master"
  secrets = ["ZEIT_TOKEN"]
  args = "--public --no-clipboard deploy . > $HOME/deploy.txt"
}

action "master-only" {
  uses = "actions/bin/filter@master"
  needs = ["deploy"]
  args = "branch master"
}

action "develop-only" {
  uses = "actions/bin/filter@master"
  needs = ["deploy"]
  args = "branch develop"
}

action "deploy-canary" {
  uses = "actions/zeit-now@master"
  needs = ["develop-only"]
  args = "alias `$HOME/deploy.txt` canary.sprite.link"
  secrets = ["ZEIT_TOKEN"]
}

action "deploy-stable" {
  uses = "actions/zeit-now@master"
  needs = ["master-only"]
  secrets = ["ZEIT_TOKEN"]
  args = "alias"
}
