chrome.alarms.create('weatherUpdate', { periodInMinutes: 60 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'weatherUpdate') {
    chrome.action.setBadgeText({ text: '...' });
  }
});
