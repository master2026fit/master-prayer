/* 말씀 암송 — 개역한글(공공 영역) 구절 중 개역개정과 본문 전체가 일치함을
   대한성서공회 두 역본에서 직접 확인한 구절만 표시합니다.
   500개 후보 전수 대조 결과 동일 문구 91절과 기존 별도 검증 11절, 총 102절을 제공합니다. */
(() => {
  'use strict';

  // 서로 겹치지 않는 10개 주제, 각 50절. 문맥을 따라 읽을 수 있도록 연속 본문을 골랐습니다.
  const groups = [
    {name:'믿음과 신뢰', parts:[
      [58,11,1,40,'믿음의 의미와 믿음으로 살아간 사람들의 선택'],
      [20,3,5,6,'내 판단을 절대화하지 않고 하나님을 신뢰하기'],
      [19,37,3,7,'의지하고 선을 행하며 오래 참고 기다리기'],
      [23,26,3,5,'하나님을 신뢰하는 마음과 평안']
    ]},
    {name:'기도와 응답', parts:[
      [40,6,5,15,'예수님이 가르치신 기도의 태도와 주기도문'],
      [42,11,1,13,'기도를 가르쳐 달라는 요청과 구하고 찾고 두드리라는 가르침'],
      [59,5,13,18,'어려움과 기쁨 가운데 드리는 공동체의 기도'],
      [19,5,1,12,'아침에 하나님께 마음을 아뢰며 도움을 기다리는 기도'],
      [50,4,4,9,'염려 속에서도 감사하며 간구하는 삶'],
      [52,5,16,17,'기쁨과 끊이지 않는 기도']
    ]},
    {name:'사랑과 용서', parts:[
      [46,13,1,13,'사랑의 성품과 사랑이 가장 큰 이유'],
      [62,4,7,21,'하나님께 받은 사랑을 이웃에게 나타내기'],
      [40,18,21,35,'용서받은 사람이 다른 사람을 용서해야 하는 이유'],
      [51,3,11,17,'서로 용납하고 사랑하며 감사하는 공동체']
    ]},
    {name:'감사와 찬양', parts:[
      [19,100,1,5,'감사로 하나님 앞에 나아가는 찬양'],
      [19,103,1,22,'하나님의 은혜와 자비를 잊지 않는 찬양'],
      [19,150,1,6,'모든 호흡으로 하나님을 찬양하라는 초청'],
      [19,136,1,14,'하나님의 인자하심을 기억하며 감사하기'],
      [52,5,18,20,'감사하고 성령의 인도에 귀 기울이는 삶']
    ]},
    {name:'걱정과 두려움', parts:[
      [40,6,25,34,'필요를 아시는 하나님을 신뢰하며 염려 내려놓기'],
      [19,23,1,6,'목자이신 하나님이 인도하고 보호하신다는 고백'],
      [19,91,1,16,'피난처이신 하나님께 의지하는 시편'],
      [23,41,10,13,'두려워하지 말라는 위로와 하나님의 붙드심'],
      [43,14,1,14,'근심하지 말고 예수님을 믿으라는 가르침']
    ]},
    {name:'지혜와 올바른 선택', parts:[
      [20,3,1,4,'말씀과 성실함을 마음에 새기는 지혜'],
      [20,3,7,35,'겸손·나눔·이웃 사랑으로 드러나는 지혜'],
      [59,1,2,8,'시험 가운데 인내하며 하나님께 지혜 구하기'],
      [20,16,1,10,'계획과 말, 결정에서 하나님을 경외하기']
    ]},
    {name:'고난과 위로', parts:[
      [59,1,9,18,'시험과 유혹 가운데 인내와 소망을 배우기'],
      [45,5,1,11,'환난 중에도 소망을 품는 이유'],
      [47,1,3,11,'하나님께 받은 위로로 다른 이를 위로하기'],
      [19,46,1,11,'환난 속 피난처이신 하나님을 기억하기'],
      [66,21,1,9,'눈물과 죽음이 없는 새 창조의 소망']
    ]},
    {name:'가족과 이웃', parts:[
      [49,5,21,33,'서로 존중하고 사랑하는 부부 관계'],
      [49,6,1,9,'부모와 자녀, 일터에서의 책임과 존중'],
      [51,3,18,25,'가정과 일상에서 진실하게 섬기는 삶'],
      [45,12,9,18,'서로 사랑하고 화목을 추구하는 삶'],
      [20,22,1,10,'좋은 이름과 자녀 교육, 지혜로운 관계']
    ]},
    {name:'구원과 예수님의 가르침', parts:[
      [43,3,1,21,'거듭남과 하나님의 사랑, 예수님을 믿는 믿음'],
      [45,3,21,31,'하나님의 의와 믿음으로 받는 은혜'],
      [49,2,1,10,'은혜로 받은 구원과 선한 일을 위한 새 삶'],
      [41,10,45,52,'섬김의 본을 보이시는 예수님과 믿음']
    ]},
    {name:'소망과 영생', parts:[
      [43,14,15,31,'성령의 약속과 예수님이 주시는 평안'],
      [45,8,18,39,'고난 중 소망과 끊어지지 않는 하나님의 사랑'],
      [45,15,4,13,'성경이 주는 위로와 소망, 한마음의 찬양'],
      [60,1,3,3,'예수 그리스도의 부활로 주신 산 소망']
    ]}
  ];

  // 첫 100절은 암송을 처음 시작할 때 우선 추천하는 핵심 말씀입니다.
  const core = [
    '58:11:1','58:11:6','58:11:8','20:3:5','20:3:6','19:37:3','19:37:4','19:37:5','19:37:7','23:26:3',
    '40:6:6','40:6:9','40:6:10','40:6:11','40:6:12','40:6:13','42:11:9','42:11:10','50:4:6','52:5:17',
    '46:13:4','46:13:5','46:13:6','46:13:7','46:13:8','46:13:13','62:4:7','62:4:8','62:4:12','51:3:13',
    '19:100:1','19:100:2','19:100:4','19:100:5','19:103:1','19:103:2','19:103:8','19:103:12','52:5:18','19:150:6',
    '40:6:25','40:6:33','40:6:34','19:23:1','19:23:4','19:23:6','19:91:1','19:91:2','23:41:10','43:14:1',
    '20:3:1','20:3:3','20:3:7','20:3:9','20:3:11','20:3:12','20:3:27','20:3:35','59:1:5','20:16:9',
    '59:1:12','59:1:17','45:5:3','45:5:4','45:5:5','45:5:8','47:1:3','47:1:4','19:46:1','19:46:10',
    '49:5:25','49:5:28','49:5:33','49:6:1','49:6:2','49:6:4','51:3:20','45:12:10','45:12:18','20:22:6',
    '43:3:3','43:3:5','43:3:16','43:3:17','43:3:18','43:3:21','45:3:23','45:3:24','49:2:8','49:2:9',
    '43:14:16','43:14:18','43:14:27','45:8:18','45:8:28','45:8:31','45:8:35','45:8:38','45:8:39','60:1:3'
  ];

  const coreSet = new Set(core);
  const all = groups.flatMap((g, topic) => g.parts.flatMap(([book, chapter, start, end, note]) =>
    Array.from({length:end-start+1}, (_, i) => ({book, chapter, verse:start+i, topic, note, key:`${book}:${chapter}:${start+i}`}))));
  const keys = new Set(all.map(x=>x.key));
  if (all.length !== 500 || keys.size !== 500 || coreSet.size !== 100 || core.some(key=>!keys.has(key)) || groups.some(g=>g.parts.reduce((n,p)=>n+p[3]-p[2]+1,0)!==50)) {
    throw new Error('말씀 암송 목록의 수량 또는 중복 검증에 실패했어.');
  }
  // 500개 후보 중 두 역본 완전 일치 91절, 기존 별도 검증 11절 추가.
  // 본문은 저작권이 만료된 개역한글판에서 전사하고, 개역개정판과
  // 한 절 단위로 대조했습니다. 어휘/표기/띄어쓰기 차이가 있는 절은 제외.
  // 장절은 key(성경책 번호:장:절), 다음 값은 검증된 동일 본문입니다.
  const matched = [
    ["58:11:2", "선진들이 이로써 증거를 얻었느니라"],
    ["58:11:21", "믿음으로 야곱은 죽을 때에 요셉의 각 아들에게 축복하고 그 지팡이 머리에 의지하여 경배하였으며"],
    ["58:11:25", "도리어 하나님의 백성과 함께 고난 받기를 잠시 죄악의 낙을 누리는 것보다 더 좋아하고"],
    ["20:3:6", "너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라"],
    ["40:6:6", "너는 기도할 때에 네 골방에 들어가 문을 닫고 은밀한 중에 계신 네 아버지께 기도하라 은밀한 중에 보시는 네 아버지께서 갚으시리라"],
    ["40:6:9", "그러므로 너희는 이렇게 기도하라 하늘에 계신 우리 아버지여 이름이 거룩히 여김을 받으시오며"],
    ["42:11:1", "예수께서 한 곳에서 기도하시고 마치시매 제자 중 하나가 여짜오되 주여 요한이 자기 제자들에게 기도를 가르친 것과 같이 우리에게도 가르쳐 주옵소서"],
    ["50:4:4", "주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라"],
    ["50:4:5", "너희 관용을 모든 사람에게 알게 하라 주께서 가까우시니라"],
    ["50:4:7", "그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라"],
    ["52:5:16", "항상 기뻐하라"],
    ["52:5:17", "쉬지 말고 기도하라"],
    ["46:13:6", "불의를 기뻐하지 아니하며 진리와 함께 기뻐하고"],
    ["46:13:7", "모든 것을 참으며 모든 것을 믿으며 모든 것을 바라며 모든 것을 견디느니라"],
    ["46:13:10", "온전한 것이 올 때에는 부분적으로 하던 것이 폐하리라"],
    ["46:13:11", "내가 어렸을 때에는 말하는 것이 어린 아이와 같고 깨닫는 것이 어린 아이와 같고 생각하는 것이 어린 아이와 같다가 장성한 사람이 되어서는 어린 아이의 일을 버렸노라"],
    ["62:4:8", "사랑하지 아니하는 자는 하나님을 알지 못하나니 이는 하나님은 사랑이심이라"],
    ["62:4:11", "사랑하는 자들아 하나님이 이같이 우리를 사랑하셨은즉 우리도 서로 사랑하는 것이 마땅하도다"],
    ["62:4:13", "그의 성령을 우리에게 주시므로 우리가 그 안에 거하고 그가 우리 안에 거하시는 줄을 아느니라"],
    ["62:4:19", "우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라"],
    ["40:18:27", "그 종의 주인이 불쌍히 여겨 놓아 보내며 그 빚을 탕감하여 주었더니"],
    ["51:3:14", "이 모든 것 위에 사랑을 더하라 이는 온전하게 매는 띠니라"],
    ["19:103:15", "인생은 그 날이 풀과 같으며 그 영화가 들의 꽃과 같도다"],
    ["19:136:1", "여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다"],
    ["40:6:25", "그러므로 내가 너희에게 이르노니 목숨을 위하여 무엇을 먹을까 무엇을 마실까 몸을 위하여 무엇을 입을까 염려하지 말라 목숨이 음식보다 중하지 아니하며 몸이 의복보다 중하지 아니하냐"],
    ["40:6:28", "또 너희가 어찌 의복을 위하여 염려하느냐 들의 백합화가 어떻게 자라는가 생각하여 보라 수고도 아니하고 길쌈도 아니하느니라"],
    ["40:6:29", "그러나 내가 너희에게 말하노니 솔로몬의 모든 영광으로도 입은 것이 이 꽃 하나만 같지 못하였느니라"],
    ["40:6:31", "그러므로 염려하여 이르기를 무엇을 먹을까 무엇을 마실까 무엇을 입을까 하지 말라"],
    ["19:23:3", "내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다"],
    ["19:91:10", "화가 네게 미치지 못하며 재앙이 네 장막에 가까이 오지 못하리니"],
    ["19:91:13", "네가 사자와 독사를 밟으며 젊은 사자와 뱀을 발로 누르리로다"],
    ["20:3:1", "내 아들아 나의 법을 잊어버리지 말고 네 마음으로 나의 명령을 지키라"],
    ["20:3:4", "그리하면 네가 하나님과 사람 앞에서 은총과 귀중히 여김을 받으리라"],
    ["20:3:9", "네 재물과 네 소산물의 처음 익은 열매로 여호와를 공경하라"],
    ["20:3:11", "내 아들아 여호와의 징계를 경히 여기지 말라 그 꾸지람을 싫어하지 말라"],
    ["20:3:12", "대저 여호와께서 그 사랑하시는 자를 징계하시기를 마치 아비가 그 기뻐하는 아들을 징계함 같이 하시느니라"],
    ["20:3:13", "지혜를 얻은 자와 명철을 얻은 자는 복이 있나니"],
    ["20:3:14", "이는 지혜를 얻는 것이 은을 얻는 것보다 낫고 그 이익이 정금보다 나음이니라"],
    ["20:3:18", "지혜는 그 얻은 자에게 생명 나무라 지혜를 가진 자는 복되도다"],
    ["20:3:22", "그리하면 그것이 네 영혼의 생명이 되며 네 목에 장식이 되리니"],
    ["20:3:24", "네가 누울 때에 두려워하지 아니하겠고 네가 누운즉 네 잠이 달리로다"],
    ["20:3:27", "네 손이 선을 베풀 힘이 있거든 마땅히 받을 자에게 베풀기를 아끼지 말며"],
    ["20:3:28", "네게 있거든 이웃에게 이르기를 갔다가 다시 오라 내일 주겠노라 하지 말며"],
    ["20:3:30", "사람이 네게 악을 행하지 아니하였거든 까닭 없이 더불어 다투지 말며"],
    ["20:3:33", "악인의 집에는 여호와의 저주가 있거니와 의인의 집에는 복이 있느니라"],
    ["20:3:34", "진실로 그는 거만한 자를 비웃으시며 겸손한 자에게 은혜를 베푸시나니"],
    ["59:1:4", "인내를 온전히 이루라 이는 너희로 온전하고 구비하여 조금도 부족함이 없게 하려 함이라"],
    ["59:1:5", "너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하라 그리하면 주시리라"],
    ["59:1:6", "오직 믿음으로 구하고 조금도 의심하지 말라 의심하는 자는 마치 바람에 밀려 요동하는 바다 물결 같으니"],
    ["59:1:7", "이런 사람은 무엇이든지 주께 얻기를 생각하지 말라"],
    ["20:16:2", "사람의 행위가 자기 보기에는 모두 깨끗하여도 여호와는 심령을 감찰하시느니라"],
    ["59:1:9", "낮은 형제는 자기의 높음을 자랑하고"],
    ["59:1:14", "오직 각 사람이 시험을 받는 것은 자기 욕심에 끌려 미혹됨이니"],
    ["59:1:15", "욕심이 잉태한즉 죄를 낳고 죄가 장성한즉 사망을 낳느니라"],
    ["59:1:16", "내 사랑하는 형제들아 속지 말라"],
    ["45:5:3", "다만 이뿐 아니라 우리가 환난 중에도 즐거워하나니 이는 환난은 인내를,"],
    ["45:5:4", "인내는 연단을, 연단은 소망을 이루는 줄 앎이로다"],
    ["45:5:7", "의인을 위하여 죽는 자가 쉽지 않고 선인을 위하여 용감히 죽는 자가 혹 있거니와"],
    ["47:1:3", "찬송하리로다 그는 우리 주 예수 그리스도의 하나님이시요 자비의 아버지시요 모든 위로의 하나님이시며"],
    ["47:1:4", "우리의 모든 환난 중에서 우리를 위로하사 우리로 하여금 하나님께 받는 위로로써 모든 환난 중에 있는 자들을 능히 위로하게 하시는 이시로다"],
    ["19:46:1", "하나님은 우리의 피난처시요 힘이시니 환난 중에 만날 큰 도움이시라"],
    ["66:21:1", "또 내가 새 하늘과 새 땅을 보니 처음 하늘과 처음 땅이 없어졌고 바다도 다시 있지 않더라"],
    ["49:5:26", "이는 곧 물로 씻어 말씀으로 깨끗하게 하사 거룩하게 하시고"],
    ["51:3:18", "아내들아 남편에게 복종하라 이는 주 안에서 마땅하니라"],
    ["51:3:19", "남편들아 아내를 사랑하며 괴롭게 하지 말라"],
    ["51:3:20", "자녀들아 모든 일에 부모에게 순종하라 이는 주 안에서 기쁘게 하는 것이니라"],
    ["51:3:22", "종들아 모든 일에 육신의 상전들에게 순종하되 사람을 기쁘게 하는 자와 같이 눈가림만 하지 말고 오직 주를 두려워하여 성실한 마음으로 하라"],
    ["45:12:10", "형제를 사랑하여 서로 우애하고 존경하기를 서로 먼저 하며"],
    ["45:12:11", "부지런하여 게으르지 말고 열심을 품고 주를 섬기라"],
    ["45:12:12", "소망 중에 즐거워하며 환난 중에 참으며 기도에 항상 힘쓰며"],
    ["20:22:1", "많은 재물보다 명예를 택할 것이요 은이나 금보다 은총을 더욱 택할 것이니라"],
    ["20:22:5", "패역한 자의 길에는 가시와 올무가 있거니와 영혼을 지키는 자는 이를 멀리 하느니라"],
    ["20:22:6", "마땅히 행할 길을 아이에게 가르치라 그리하면 늙어도 그것을 떠나지 아니하리라"],
    ["20:22:7", "부자는 가난한 자를 주관하고 빚진 자는 채주의 종이 되느니라"],
    ["20:22:8", "악을 뿌리는 자는 재앙을 거두리니 그 분노의 기세가 쇠하리라"],
    ["20:22:9", "선한 눈을 가진 자는 복을 받으리니 이는 양식을 가난한 자에게 줌이니라"],
    ["20:22:10", "거만한 자를 쫓아내면 다툼이 쉬고 싸움과 수욕이 그치느니라"],
    ["43:3:13", "하늘에서 내려온 자 곧 인자 외에는 하늘에 올라간 자가 없느니라"],
    ["43:3:20", "악을 행하는 자마다 빛을 미워하여 빛으로 오지 아니하나니 이는 그 행위가 드러날까 함이요"],
    ["45:3:21", "이제는 율법 외에 하나님의 한 의가 나타났으니 율법과 선지자들에게 증거를 받은 것이라"],
    ["45:3:22", "곧 예수 그리스도를 믿음으로 말미암아 모든 믿는 자에게 미치는 하나님의 의니 차별이 없느니라"],
    ["45:3:23", "모든 사람이 죄를 범하였으매 하나님의 영광에 이르지 못하더니"],
    ["49:2:6", "또 함께 일으키사 그리스도 예수 안에서 함께 하늘에 앉히시니"],
    ["43:14:15", "너희가 나를 사랑하면 나의 계명을 지키리라"],
    ["43:14:18", "내가 너희를 고아와 같이 버려두지 아니하고 너희에게로 오리라"],
    ["43:14:20", "그 날에는 내가 아버지 안에, 너희가 내 안에, 내가 너희 안에 있는 것을 너희가 알리라"],
    ["43:14:25", "내가 아직 너희와 함께 있어서 이 말을 너희에게 하였거니와"],
    ["45:8:24", "우리가 소망으로 구원을 얻었으매 보이는 소망이 소망이 아니니 보는 것을 누가 바라리요"],
    ["45:8:31", "그런즉 이 일에 대하여 우리가 무슨 말 하리요 만일 하나님이 우리를 위하시면 누가 우리를 대적하리요"],
    ["45:8:37", "그러나 이 모든 일에 우리를 사랑하시는 이로 말미암아 우리가 넉넉히 이기느니라"],
    ["45:8:38", "내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나"],
    ["52:5:21", "범사에 헤아려 좋은 것을 취하고"],
    ["52:5:24", "너희를 부르시는 이는 미쁘시니 그가 또한 이루시리라"],
    ["52:5:25", "형제들아 우리를 위하여 기도하라"],
    ["52:5:26", "거룩하게 입맞춤으로 모든 형제에게 문안하라"],
    ["50:4:2", "내가 유오디아를 권하고 순두게를 권하노니 주 안에서 같은 마음을 품으라"],
    ["50:4:10", "내가 주 안에서 크게 기뻐함은 너희가 나를 생각하던 것이 이제 다시 싹이 남이니 너희가 또한 이를 위하여 생각은 하였으나 기회가 없었느니라"],
    ["50:4:13", "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라"],
    ["50:4:21", "그리스도 예수 안에 있는 성도에게 각각 문안하라 나와 함께 있는 형제들이 너희에게 문안하고"],
    ["45:12:2", "너희는 이 세대를 본받지 말고 오직 마음을 새롭게 함으로 변화를 받아 하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 분별하도록 하라"],
    ["45:12:5", "이와 같이 우리 많은 사람이 그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라"],
    ["45:12:21", "악에게 지지 말고 선으로 악을 이기라"]
  ];
  const matchedKeys = new Set(matched.map(x=>x[0]));
  if (matchedKeys.size !== matched.length) throw new Error('중복 암송 구절');
  const verses = matched.map(([key, text]) => {
    const [book, chapter, verse] = key.split(':').map(Number);
    const existing = all.find(x=>x.key===key);
    const topic = existing?.topic ?? ({19:6,45:7,50:1,52:1,59:5}[book] || 0);
    return {book,chapter,verse,key,text,topic,note:groups[topic].name};
  });
  const byKey = new Map(verses.map(x=>[x.key,x]));
  const bookCodes = {19:'PSA',20:'PRO',23:'ISA',40:'MAT',41:'MRK',42:'LUK',43:'JHN',45:'ROM',46:'1CO',47:'2CO',49:'EPH',50:'PHP',51:'COL',52:'1TH',58:'HEB',59:'JAS',60:'1PE',62:'1JN',66:'REV'};
  const stateKey = 'prayerMemory500ProgressV1';
  let selected = verses[0];
  let hidden = false;
  let renderRequest = 0;
  let topic = 'all';

  function readState(){try{const d=JSON.parse(localStorage.getItem(stateKey)||'{}');return d&&typeof d==='object'?d:{}}catch(e){return {}}}
  function writeState(data){localStorage.setItem(stateKey,JSON.stringify(data))}
  function today(){return localDateKey()}
  function plusDays(date, days){const [y,m,d]=date.split('-').map(Number);return localDateKey(new Date(y,m-1,d+days))}
  function ref(x){return `${bibleBook(x.book).name} ${x.chapter}:${x.verse}`}
  function candidates(){const q=(document.getElementById('memorySearch')?.value||'').trim().toLowerCase();return verses.filter(x=>(topic==='all'||String(x.topic)===topic)&&(!q||`${ref(x)} ${groups[x.topic].name} ${x.chapter}:${x.verse}`.toLowerCase().includes(q)))}
  function stageName(n){return n>=5?'충분히 복습했어':n>0?`${n}단계 복습 중`:'아직 암송 전'}
  function dueItems(data){return verses.filter(x=>data[x.key]&&data[x.key].stage>0&&data[x.key].due<=today()).sort((a,b)=>data[a.key].due.localeCompare(data[b.key].due))}
  function setCurrent(x){selected=x;hidden=false;render()}
  function currentIndex(){return verses.findIndex(x=>x.key===selected.key)}
  function dailyVerse(){const d=new Date(),offset=Math.floor((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(2026,10,4))/86400000);return verses[((offset%verses.length)+verses.length)%verses.length]}

  function render(){
    if(!selected)return;
    const data=readState(),r=data[selected.key]||{stage:0};
    const seen=verses.filter(x=>data[x.key]?.stage>0).length;
    const mastered=verses.filter(x=>data[x.key]?.stage>=3).length;
    const due=dueItems(data).length;
    document.getElementById('memoryProgress').textContent=`암송 ${seen}/${verses.length} · 익숙한 말씀 ${mastered}개`;
    document.getElementById('memoryToday').textContent=`말씀 ${currentIndex()+1}/${verses.length} · ✓ 두 역본 일치 · ${groups[selected.topic].name}`;
    document.getElementById('memoryRef').textContent=ref(selected);
    document.getElementById('memoryNote').textContent=`이해 포인트 · ${selected.note}`;
    document.getElementById('memoryStudyState').textContent=`${stageName(r.stage)}${r.due?' · 다음 복습 '+r.due:''}`;
    document.getElementById('memoryTopicSelect').value=topic;
    const a=document.getElementById('memoryOfficialLink');
    const code=bookCodes[selected.book];
    a.href=code?`https://bible.bskorea.or.kr/bible/NKRV/${code}.${selected.chapter}.${selected.verse}`:'https://bible.bskorea.or.kr/bible_reader';
    const btn=document.getElementById('memoryCompleteBtn');
    btn.disabled=r.last===today();btn.textContent=r.last===today()?'오늘 암송 완료 ✓':'오늘 암송 완료 ✓';
    document.getElementById('memoryReviewBtn').textContent=`복습할 말씀 ${due}개`;
    const list=candidates();document.getElementById('memoryListCount').textContent=`선택한 목록 ${list.length}개`;
    const box=document.getElementById('memoryText');box.textContent=hidden?'말씀을 가렸어. 기억나는 대로 소리 내어 암송해 봐.':selected.text;
    document.getElementById('memoryHideBtn').textContent=hidden?'말씀 다시 보기':'말씀 가리기';
  }

  function navigate(delta){const a=candidates();if(!a.length){document.getElementById('memoryListCount').textContent='검색 결과가 없어.';return}let i=a.findIndex(x=>x.key===selected.key);i=(i+delta+a.length)%a.length;setCurrent(a[i])}
  window.memoryNext=()=>navigate(1);
  window.memoryPrev=()=>navigate(-1);
  window.memoryChooseTopic=()=>{topic=document.getElementById('memoryTopicSelect').value;const a=candidates();setCurrent(a[0]||selected)};
  window.memorySearchChanged=()=>{const a=candidates();setCurrent(a[0]||selected)};
  window.memoryGoToday=()=>{topic='all';document.getElementById('memorySearch').value='';setCurrent(dailyVerse())};
  window.memoryHideToggle=()=>{hidden=!hidden;render();};
  window.memoryComplete=()=>{
    const data=readState(),old=data[selected.key]||{stage:0};if(old.last===today())return;
    const stage=Math.min(5,(old.stage||0)+1),interval=[0,1,3,7,14,30][stage];
    data[selected.key]={stage,last:today(),due:plusDays(today(),interval)};writeState(data);render();
  };
  window.memoryReview=()=>{const item=dueItems(readState())[0];if(!item){document.getElementById('memoryStudyState').textContent='오늘 복습할 말씀은 없어. 새로운 말씀을 암송해 보자!';return}topic='all';document.getElementById('memorySearch').value='';setCurrent(item)};

  const select=document.getElementById('memoryTopicSelect');
  if(!select)return;
  select.innerHTML=`<option value="all">검증 완료 · ${verses.length}절</option>`+groups.map((g,i)=>`<option value="${i}">${g.name} · ${verses.filter(x=>x.topic===i).length}절</option>`).filter((_,i)=>verses.some(x=>x.topic===i)).join('');
  const card=document.getElementById('memoryCard');
  card.querySelector('.memory-top .label').textContent=`🧠 두 역본 일치 암송 ${verses.length}절`;
  const info=card.querySelectorAll(':scope > p.hint, :scope > p.memory-small');
  if(info[0])info[0].textContent=`500개 암송 후보를 전부 대조해 같은 말씀 91절을 확인했어. 기존 검증 11절까지 합해 ${verses.length}절을 제공해.`;
  if(info[1])info[1].textContent='암송 본문은 저작권이 만료된 개역한글판에서 확인했고, 개역개정판과 동일한 절만 선별했어. 원문은 대한성서공회 링크에서도 확인할 수 있어. 기존 암송 기록은 유지돼.';
  const official=document.getElementById('memoryOfficialLink');
  official.textContent='📖 개역개정 원문 재확인 · 대한성서공회 ↗';
  selected=dailyVerse();render();
})();
