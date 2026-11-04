/* 말씀 암송 500선 — 장절과 자체 해설만 공개 배포합니다.
   개역개정 원문은 대한성서공회 링크 또는 이용자가 직접 불러온 개인 성경에서만 확인합니다. */
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
  const verses = [...all.filter(x=>coreSet.has(x.key)), ...all.filter(x=>!coreSet.has(x.key))];
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
  function dailyVerse(){const d=new Date(),offset=Math.floor((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(2026,10,4))/86400000);return verses[((offset%500)+500)%500]}

  function render(){
    if(!selected)return;
    const data=readState(),r=data[selected.key]||{stage:0};
    const seen=Object.values(data).filter(x=>x&&x.stage>0).length;
    const mastered=Object.values(data).filter(x=>x&&x.stage>=3).length;
    const due=dueItems(data).length;
    document.getElementById('memoryProgress').textContent=`암송 ${seen}/500 · 익숙한 말씀 ${mastered}개`;
    document.getElementById('memoryToday').textContent=`말씀 ${currentIndex()+1}/500 · ${coreSet.has(selected.key)?'⭐ 핵심 100선':'확장 400선'} · ${groups[selected.topic].name}`;
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
    const box=document.getElementById('memoryText');box.textContent=hidden?'말씀을 가렸어. 기억나는 대로 소리 내어 암송해 봐.':'개역개정 원문은 아래 대한성서공회에서 확인할 수 있어. 개인 성경 파일을 불러온 경우에만 이곳에서 본문을 보여줘.';
    document.getElementById('memoryHideBtn').textContent=hidden?'말씀 다시 보기':'말씀 가리기';
    if(hidden)return;
    const request=++renderRequest;
    // 개인이 직접 제공한 성경 본문만 사용. 기본 제공 개역한글과 섞이지 않도록 합니다.
    if(personalBibleReady())personalBibleChapter(selected.book,selected.chapter).then(rows=>{
      if(request!==renderRequest||hidden)return;
      const item=rows?.find(x=>Number(x.verse)===selected.verse);
      if(item&&item.text)box.textContent=item.text;
    }).catch(()=>{});
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
  select.innerHTML='<option value="all">전체 500선</option>'+groups.map((g,i)=>`<option value="${i}">${g.name} · 50절</option>`).join('');
  selected=dailyVerse();render();
})();
