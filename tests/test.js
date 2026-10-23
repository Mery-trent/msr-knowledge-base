// as requested in the instruction page, I declare that I got help from AI to write test.js page
const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Read the files as plain text
const html = fs.readFileSync(path.join(__dirname, '../src/index.html'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, '../src/script.js'), 'utf8');

let failed = 0;

function test(name, check) {
  try {
    check();
    console.log('PASS: ' + name);
  } catch (error) {
    console.log('FAIL: ' + name + ' -> ' + error.message);
    failed++;
  }
}

test('page has the four navigation tabs', () => {
  for (const label of ['Data Sources', 'Collection Methods', 'Analysis Methods', 'Publication Venues']) {
    assert.ok(html.includes('>' + label + '</button>'), 'missing tab: ' + label);
  }
});

test('every tab button points to an existing section', () => {
  const targets = [...html.matchAll(/data-target="([^"]*)"/g)].map(m => m[1]);
  assert.strictEqual(targets.length, 4);
  for (const t of targets) {
    assert.ok(html.includes('id="' + t + '"'), 'no section with id "' + t + '"');
  }
});

test('Data Sources section is shown by default', () => {
  assert.ok(html.includes('id="data-sources" class="panel active"'));
});

test('Data Sources lists all 7 required sources', () => {
  for (const name of ['GitHub', 'Stack Overflow', 'JIRA', 'App Stores',
                      'Travis CI / Jenkins', 'Mailing Lists', 'npm Registry']) {
    assert.ok(html.includes('<td>' + name + '</td>'), 'missing source: ' + name);
  }
});

test('script.js has tab switching and click handling', () => {
  assert.ok(js.includes('function showTab'));
  assert.ok(js.includes("addEventListener('click'"))});

// Make the CI job fail if any test failed
process.exit(failed > 0 ? 1 : 0);