const MENU_ITEM_ID = 'pixiv-pid';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    type: 'normal',
    title: 'Pixiv PID',
    contexts: ['selection'],
  });
});

const pidReg = /\d+/;

chrome.contextMenus.onClicked.addListener(({ menuItemId, selectionText }) => {
  if (menuItemId !== MENU_ITEM_ID) return;
  const pid = selectionText.trim().match(pidReg)?.[0];
  if (pid) {
    const url = `https://pixiv.net/i/${pid}`;
    chrome.tabs.create({ url });
    console.log('Open', url);
  } else {
    console.warn(JSON.stringify(selectionText), 'does not contain a valid PID');
  }
});
