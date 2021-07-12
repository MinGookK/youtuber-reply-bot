/**
 * Sample JavaScript code for youtube.commentThreads.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

//여기에 코멘트들을 다 모을거임
let reviews = [];

function loadClient() {
  gapi.client.setApiKey('AIzaSyBXqQ4eTUvkVcTKOtx2Gz2IiLvvoBrkE3g');
  return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest').then(
    function () {
      console.log('GAPI client loaded for API');
    },
    function (err) {
      console.error('Error loading GAPI client for API', err);
    }
  );
}
// Make sure the client is loaded before calling this method.
async function execute() {
  let cm = await gapi.client.youtube.commentThreads.list({
    part: ['snippet,replies'],
    allThreadsRelatedToChannelId: 'UCW945UjEs6Jm3rVNvPEALdg',
    maxResults: 100,
  });

  let npt = cm.result.nextPageToken;
  let test = 0;
  while (test < 2) {
    npt = cm.result.nextPageToken;
    console.log(npt);
    cm = await gapi.client.youtube.commentThreads.list({
      part: ['snippet,replies'],
      allThreadsRelatedToChannelId: 'UCW945UjEs6Jm3rVNvPEALdg',
      maxResults: 100,
      pageToken: npt,
    });

    const items = cm.result.items;
    items.forEach((e) => {
      reviews.push(`${e.snippet.topLevelComment.snippet.textOriginal}`);
    });
    test++;
  }

  console.log(reviews);
}

gapi.load('client');
