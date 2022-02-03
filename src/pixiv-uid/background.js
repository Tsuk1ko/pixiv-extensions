const MENU_ITEM_ID = 'pixiv-uid';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    type: 'normal',
    title: 'Pixiv UID',
    contexts: ['selection'],
  });
});

const uidReg = /\d+/;

chrome.contextMenus.onClicked.addListener(({ menuItemId, selectionText }) => {
  if (menuItemId !== MENU_ITEM_ID) return;
  const uid = selectionText.trim().match(uidReg)?.[0];
  if (uid) {
    const url = `https://pixiv.net/u/${uid}`;
    chrome.tabs.create({ url });
    console.log('Open', url);
  } else {
    console.warn(JSON.stringify(selectionText), 'does not contain a valid UID');
  }
});
