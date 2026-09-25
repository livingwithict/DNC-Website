/**
 * DNC 2026 — Participant feedback form backend.
 *
 * Deploy: Extensions > Apps Script > Deploy > New deployment > Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * Then paste the /exec URL into FEEDBACK_SCRIPT_URL in src/pages/FeedbackPage.tsx.
 */

var SHEET_NAME = 'Feedback';

// Column key -> header label. Order here is the column order in the sheet.
// Keys must match the question keys in src/pages/FeedbackPage.tsx.
var COLUMNS = [
  ['timestamp', 'Timestamp'],
  ['affiliation', 'Affiliation'],
  ['first_time', 'First Time Attending'],
  ['registration_rating', 'Registration Experience (1-5)'],
  ['pass_access_rating', 'Pass Access Ease (1-5)'],
  ['pre_event_info_rating', 'Pre-Event Information (1-5)'],
  ['checkin_rating', 'Venue Check-in (1-5)'],
  ['venue_rating', 'Venue Arrangements (1-5)'],
  ['seating_rating', 'Seating & Comfort (1-5)'],
  ['session_quality_rating', 'Session Quality (1-5)'],
  ['relevance_rating', 'Discussion Relevance (1-5)'],
  ['diversity_rating', 'Diversity of Perspectives (1-5)'],
  ['most_valuable_sessions', 'Most Valuable Sessions'],
  ['sessions_to_improve', 'Sessions to Improve'],
  ['missing_topics', 'Topics Wanted'],
  ['interaction_opportunities', 'Interaction Opportunities'],
  ['connections_made', 'Professional Connections Made'],
  ['exhibitor_rating', 'Exhibitor Engagement (1-5)'],
  ['overall_rating', 'Overall Satisfaction (1-5)'],
  ['expectations', 'Met Expectations'],
  ['attend_again', 'Likely to Attend Again'],
  ['liked_most', 'Liked Most'],
  ['one_improvement', 'One Improvement'],
  ['dnc_2027_suggestions', 'DNC 2027 Suggestions'],
  ['other_feedback', 'Other Feedback']
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var form = (e && e.parameter) || {};
    if (form.form_type !== 'feedback') {
      return json({ success: false, message: 'Unknown form_type: ' + form.form_type });
    }

    var row = { timestamp: new Date() };
    for (var i = 1; i < COLUMNS.length; i++) {
      row[COLUMNS[i][0]] = form[COLUMNS[i][0]] || '';
    }

    appendRow(row);
    return json({ success: true });
  } catch (err) {
    return json({ success: false, message: String(err && err.message ? err.message : err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json({ success: true, message: 'DNC feedback endpoint is live.' });
}

/** Run once from the editor to create the sheet and header row ahead of the first response. */
function setupHeaders() {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    var headers = COLUMNS.map(function (column) { return column[1]; });
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#2e3192')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, headers.length, 180);
  }
  return sheet;
}

/** Appends a row, creating the sheet and header row on first use. */
function appendRow(row) {
  setupHeaders().appendRow(COLUMNS.map(function (column) { return row[column[0]] || ''; }));
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
