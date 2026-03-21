self.onmessage = function(e) {
  const { text, pattern } = e.data;

  if (!pattern) {
    self.postMessage({ matches: [] });
    return;
  }

  const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped, "g");

  let match;
  let matches = [];

  while ((match = regex.exec(text)) !== null) {
    matches.push(match.index);
  }

  self.postMessage({ matches });
};
