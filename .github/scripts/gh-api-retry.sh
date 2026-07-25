#!/usr/bin/env bash
# TRUSTED helper, checked out from the base branch by sparse-checkout.
gh_api() {
  gh api "$@"
}
echo "TRUSTED gh-api-retry.sh loaded (base-branch version)"
