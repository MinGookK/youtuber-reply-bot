# 1. 왜 만들까?

유튜버, 스트리머 별로 시청자들의 특별한 말투가 있는게 느껴졌음.

랄로 시청자들의 " " 화법이라던가, 우정잉 시청자들의 역겨워함(?) 이라던가 우왁굳 시청자들의 형 사랑해와 같은? 각자의 밈들 같은 걸 말하는 것임.

인공지능들이 알아서 어떤 키워드를 넣어주면 자동으로 그 시청자들 처럼 문장을 완성시켜주는 프로그램이 있으면 재미있을 것 같았음.

# 2. 어떻게 만들까?

YouTube Data API v3 를 사용하면 유튜브 채널에서 댓글들을 크롤링할 수 있다. 이걸 활용해서 원하는 유튜버의 댓글을 다 모은 txt파일을 만들거임.

그러고 그 txt파일을 KoGPT2 에 학습시켜서 [해당 유튜버]만의 모델을 만들어냄.

그러고 재밌게 가지고 논다~ ㅋㅋㅋ

## 1. 사용할 것들

### 1. activity

[activity](https://developers.google.com/youtube/v3/docs/?apix=true#Activities)

activity 리소스에는 특정 채널이나 사용자가 YouTube에서 실행한 작업의 정보가 포함되어 있습니다. 활동 피드로 보고되는 작업에는 동영상 평가, 동영상 공유, 동영상을 즐겨찾기에 추가, 동영상에 댓글 달기, 동영상 업로드 등이 있습니다. 각 activity 리소스를 통해 작업의 유형, 작업에 연결된 채널, 평가되거나 업로드된 동영상 등의 작업을 확인할 수 있습니다.

아마 이걸로 댓글을 가져올 수 있지 않을까?

- 아니고 comment에서 가져오는거임

### 2. guideCategories | playlistItems

[guideCategories](https://developers.google.com/youtube/v3/docs/?apix=true#GuideCategories)

[playlistItems](https://developers.google.com/youtube/v3/docs/?apix=true#PlaylistItems)

광고영상과 같은 특별한 영상에서는 댓글창이 평소와 같지 않을 수 있음. 동영상에 필터링이 필요하다면 이걸로 동영상을 걸러보도록 하자.
