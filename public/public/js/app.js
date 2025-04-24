const OWNER = 'Jinshin2534';
const REPO  = 'team-status';

// labels=done のオープン Issue を取得
export async function fetchDoneIssues() {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/issues?labels=done&state=open`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('GitHub API Error');
  return await res.json();
}
