module.exports = async function ({ github, context, core, prNumber, body, marker }) {
  core.info('TRUSTED post-pr-comment.js running (base-branch version).');
  await github.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: prNumber,
    body: `${marker}\n${body}`,
  });
};
