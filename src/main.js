import './style.css';

document.documentElement.className += ' js';
/* ============================================================
   CONTENT MODEL
   In production these become CMS collections:
   Article · Essay · Reflection · Sermon · Video · Speech ·
   Interview · Programme · Case Study · Publication · Quote · Photo Story
   ============================================================ */

const TOPICS = {
  'faith-purpose':{label:'Faith & Purpose', desc:'Christianity, purpose, spiritual growth, stewardship, ministry and Christian leadership.'},
  'leadership':{label:'Leadership', desc:'Leadership, management, organisational behaviour, people, responsibility and performance.'},
  'business':{label:'Business & Entrepreneurship', desc:'Enterprise, SMEs, growth, entrepreneurship, markets and business development.'},
  'education':{label:'Education', desc:'Learning, schools, teachers, students, education reform, skills and the future of education.'},
  'youth':{label:'Youth & the Next Generation', desc:'Young people, mentorship, careers, entrepreneurship, employability and youth leadership.'},
  'psychology':{label:'Psychology & Human Behaviour', desc:'Behaviour, emotions, identity, relationships, counselling and personal growth.'},
  'relationships':{label:'Life & Relationships', desc:'Marriage, relationships, family, life decisions and personal development.'},
  'society':{label:'Society & Community', desc:'Community, culture, institutions, social development, Africa, Nigeria and civic responsibility.'}
};

const FORMATS = ['Essay','Article','Reflection','Teaching','Letter','Note','Commentary','Speech','Interview'];

const DRAFT = `<p class="note">This is prototype text. The full piece will be supplied from Segun's existing body of writing and loaded through the CMS.</p>
<p>The argument continues here across several thousand words, with subheadings, pull quotations, supporting photographs and, where relevant, numbered points. The typography above is the real reading experience: measure, leading, and hierarchy are set for long-form comfort on both desktop and phone.</p>
<h2>A second movement</h2>
<p>Long-form work on this site is designed to be finished, not skimmed. That is why the reading column is narrow, the type is a true reading serif, and the page carries a quiet progress indicator rather than a cluster of floating widgets.</p>
<p class="pull">Every article should end somewhere, and then send the reader somewhere else.</p>
<p>At the close of each piece the reader is offered related writing, a series, a programme, a video, or the newsletter &mdash; so that no article is a dead end.</p>`;

const ARTICLES = [
{slug:'leadership-before-title', title:'Leadership Begins Long Before the Title', dek:'The habits that make a leader are formed in seasons when nobody is watching and nothing is at stake.', topic:'leadership', format:'Essay', year:2026, date:'12 August 2026', read:'9 min', series:'notes-on-leadership', img:'Segun writing at his desk', cap:'Preparing notes before a leadership retreat, Lagos.', featured:true, body:`
<p>Most people are waiting to be appointed. They are waiting for the office, the allowance, the announcement in the meeting. And while they wait, they are quietly practising something &mdash; because nobody arrives at leadership neutral. You arrive carrying whatever you rehearsed in the years before anyone was watching.</p>
<p>I have sat with enough newly promoted managers to know that promotion does not change character. It reveals it. The man who was careless with small promises does not become reliable because he now has a title on a door. He becomes a careless man with a larger surface area.</p>
<h2>What is actually being formed</h2>
<p>Three things are being built in the waiting years, and none of them look like leadership at the time.</p>
<ol>
<li><strong>How you treat people who cannot help you.</strong> This is the single most reliable predictor I have found. Watch a person with a security guard, a junior colleague, a market seller.</li>
<li><strong>What you do with work you did not want.</strong> Nobody grows in the assignment they asked for.</li>
<li><strong>Whether you keep small promises.</strong> Trust is not built in crises. It is built in the twelve minutes you said you would be somewhere and were.</li>
</ol>
<p class="pull">Authority is given. Influence is earned in advance.</p>
<h2>The quiet years are not wasted years</h2>
<p>Young people ask me how to prepare for a role they do not yet have. My answer disappoints them: do the current thing properly. Not because life is a moral fable where diligence is always rewarded &mdash; it is not &mdash; but because the alternative is arriving at responsibility with no muscle for it.</p>
<p>Organisations feel this later. A company can recruit for skill in an afternoon. It cannot recruit for the ten years a person spent, or did not spend, learning to be trusted.</p>
<h2>For the person still waiting</h2>
<p>If nobody has given you a title, you are not out of the game. You are in the part of it that decides whether the title, when it comes, will be survivable.</p>`},

{slug:'school-that-taught-me', title:'The School That Taught Me More Than I Taught It', dek:'What eleven years inside under-resourced schools revealed about learning, dignity, and the quiet heroism of teachers.', topic:'education', format:'Essay', year:2026, date:'4 August 2026', read:'14 min', series:'building-people', img:'School corridor, morning light', cap:'Morning assembly at a partner school in Ogun State.', featured:true, body:`
<p>I went in to help. That was the first mistake, and it took me the better part of two years to notice it.</p>
<p>We arrived with a programme. It was a good programme &mdash; sequenced, tested elsewhere, backed by people who knew what they were doing. What it did not have was any account of the woman who had been teaching in that classroom for nineteen years on a salary that arrived when it arrived, with sixty-one children and no working fan.</p>
<h2>The problem was never motivation</h2>
<p>The story we tell about struggling schools is a story about effort. Lazy teachers, unserious students, absent parents. It is a comfortable story because it locates the failure inside people rather than inside systems, and people are cheaper to lecture than systems are to fix.</p>
<p>What I found was different. I found teachers improvising with an ingenuity that would be celebrated if it happened in a start-up. I found students who could hold a complex argument in Yoruba and were being examined on it in a second language. I found parents who had made calculations about school fees that I would not have had the nerve to make.</p>
<p class="pull">Nobody in that building lacked motivation. What they lacked was slack.</p>
<h2>What actually moved</h2>
<p>The intervention that changed things was not the one we planned. It was a monthly circle where teachers from eleven schools sat together for two hours and talked about their work as professionals rather than as suspects.</p>
<p>Attendance was voluntary. Nineteen came to the first. By the second year it had a waiting list. Nothing about the funding, the buildings or the class sizes had changed. What changed was that people who had been treated as a problem to be managed were treated as practitioners with something to teach each other.</p>
<h2>What I would tell a younger version of myself</h2>
<p>Go in with a question, not a programme. Spend the first term saying almost nothing. And when you finally do design something, design it around the person who will still be there long after your funding cycle ends.</p>`},

{slug:'quiet-discipline-of-prayer', title:'The Quiet Discipline Nobody Applauds', dek:'On the parts of faith that produce no evidence, and why they hold everything else up.', topic:'faith-purpose', format:'Reflection', year:2026, date:'28 July 2026', read:'6 min', series:'faith-in-life', img:'Open Bible, early morning light', cap:'', body:`
<p>There is a kind of work that produces no evidence. You do it, and at the end of it there is nothing to show anyone &mdash; no document, no photograph, no line in a report.</p>
<p>Most of the Christian life is like that. The visible parts &mdash; the platform, the project, the giving that gets announced &mdash; rest on a much larger unseen portion, the way a building rests on foundations that nobody photographs.</p>
<p class="pull">We have built a faith culture that rewards the visible portion almost exclusively. Then we are surprised when it collapses.</p>
<p>I have watched gifted people fall, and in almost every case the fall was not sudden. The private discipline had been gone for years. Only the public performance remained, running on momentum, until the momentum ran out.</p>
<h2>What it looks like on a Tuesday</h2>
<p>Nothing dramatic. Getting up when nobody would know if you did not. Reading a passage you have read forty times. Praying for a person who irritates you. Keeping an appointment with God the way you would keep one with a client &mdash; that is, actually keeping it.</p>
<p>It is unglamorous, and that is the point. Anything that could be applauded would be doing something other than what this does.</p>`},

{slug:'small-business-survives', title:'Why the Small Business That Survives Is Rarely the Cleverest', dek:'After sixteen years of enterprise clinics, the pattern is not what founders expect.', topic:'business', format:'Article', year:2026, date:'21 July 2026', read:'8 min', series:'business-notes', img:'Market trader at her stall', cap:'A clinic participant at her business in Mushin.', body:`
<p>Ask a room of small business owners why firms fail and you will hear the same answers: capital, government, the economy. All real. None of them is what I see most often.</p>
<p>What I see most often is a business that never established the boring habits &mdash; separate accounts, written records, a price that reflects actual cost, and the willingness to say no to work that loses money.</p>
<h2>The survivors</h2>
<p>The businesses in our clinic that were still trading after five years were not the most innovative. Several were, frankly, dull. What they shared was a set of routines a clever founder would find beneath them.</p>
<ol>
<li>They knew their margin per product. Not roughly. Exactly.</li>
<li>They paid themselves a salary, so the business could be evaluated honestly.</li>
<li>They wrote things down, so the business could exist without the founder in the room.</li>
<li>They fired their worst customer at some point, and were better for it.</li>
</ol>
<p class="pull">Staying alive long enough for luck to find you is itself a strategy.</p>
<p>Innovation matters. But in an environment this volatile, durability compounds faster than brilliance does.</p>`},

{slug:'graduates-not-ready', title:'We Are Graduating Students Who Have Never Been Asked a Real Question', dek:'On examinations that reward recall, and the employability crisis they quietly produce.', topic:'education', format:'Commentary', year:2026, date:'9 July 2026', read:'11 min', series:'the-next-generation', img:'Graduation day, wide shot', cap:'', body:DRAFT},

{slug:'marriage-two-histories', title:'Two Histories Sitting at One Table', dek:'Marriage as the meeting of two entire pasts &mdash; and what counselling taught me about the arguments that are never about the argument.', topic:'relationships', format:'Essay', year:2026, date:'30 June 2026', read:'9 min', series:'segun-letters', img:'Couple in conversation, warm interior', cap:'', body:`
<p>Two people do not marry each other. Two histories marry each other, and they bring everything with them.</p>
<p>In counselling I have learned to listen past the stated complaint. The argument is about money, and it is not about money. It is about a childhood in which money meant safety for one of them and meant conflict for the other, and neither has ever said so out loud, possibly because neither knows.</p>
<p class="pull">Most couples are not having a bad conversation. They are having two different conversations very well.</p>
<h2>Three questions</h2>
<p>I ask couples three questions early, and the answers usually do more work than anything I say afterwards.</p>
<ol>
<li>What did disagreement look like in the house you grew up in?</li>
<li>What did you learn there about what happens to people who ask for things?</li>
<li>When you are hurt, what did you learn to do with it?</li>
</ol>
<p>Nobody arrives at marriage as a blank instrument. We arrive tuned by a household we did not choose, and the tuning is invisible to us precisely because it is ours.</p>`},

{slug:'letter-to-a-young-man', title:'A Letter to a Young Man in a Hurry', dek:'You are not late. You are early, and it feels the same from inside.', topic:'youth', format:'Letter', year:2026, date:'18 June 2026', read:'5 min', series:'segun-letters', img:'Young man on a Lagos street at dusk', cap:'', body:`
<p>You wrote that everyone around you is moving and you are standing still. I want to take that seriously, because it is a real feeling, and then I want to argue with it.</p>
<p>What you are comparing is your inside to other people's outside. You know your doubts in full detail. You know their announcements only.</p>
<p class="pull">Speed is not the same as direction, and at your age almost nobody has direction yet. They just have speed.</p>
<p>Here is what I would spend the next three years on: a skill someone will pay for, a body of reading nobody assigned you, two or three older people who will tell you the truth, and the habit of finishing things. That is it. Everything else is decoration.</p>
<p>And be careful about hurry. Hurry makes you accept the first offer, marry the first affection, and take the shortcut that costs a decade. The people you envy for arriving early are frequently the people who arrive early and then spend twenty years explaining.</p>`},

{slug:'stewardship-sermon', title:'Stewardship Is Not About Money', dek:'A teaching on what we are actually accountable for.', topic:'faith-purpose', format:'Teaching', year:2026, date:'2 June 2026', read:'12 min', series:'faith-in-life', img:'Congregation during a teaching session', cap:'', body:DRAFT},

{slug:'organisation-cannot-outgrow', title:'You Cannot Outgrow Your People', dek:'Why capability, not strategy, is almost always the real ceiling in an organisation.', topic:'leadership', format:'Article', year:2025, date:'14 November 2025', read:'10 min', series:'notes-on-leadership', img:'Management team in session', cap:'', body:DRAFT},

{slug:'mentorship-myth', title:'The Mentorship Myth', dek:'Young people are looking for a mentor. They usually need something less romantic and more useful.', topic:'youth', format:'Article', year:2025, date:'3 October 2025', read:'7 min', series:'the-next-generation', img:'Mentor and mentee in conversation', cap:'', body:DRAFT},

{slug:'shame-and-performance', title:'Shame Is a Poor Engine', dek:'On the psychology of people who achieve a great deal and enjoy none of it.', topic:'psychology', format:'Essay', year:2025, date:'22 August 2025', read:'11 min', series:'building-people', img:'Reflective portrait, low light', cap:'', body:DRAFT},

{slug:'community-that-raises', title:'The Community That Raises You Has a Claim on You', dek:'On civic responsibility, obligation and the Nigerian middle class.', topic:'society', format:'Commentary', year:2025, date:'7 July 2025', read:'13 min', series:null, img:'Community gathering, documentary style', cap:'', body:DRAFT},

{slug:'hiring-for-character', title:'Hiring for Character in a Market That Rewards Noise', dek:'A practical note for owner-managers building their first real team.', topic:'business', format:'Note', year:2025, date:'19 May 2025', read:'4 min', series:'business-notes', img:'Interview across a small desk', cap:'', body:DRAFT},

{slug:'teachers-nobody-invests-in', title:'The People We Ask the Most From and Invest in the Least', dek:'A speech delivered to a state education board on the case for teacher development.', topic:'education', format:'Speech', year:2024, date:'11 October 2024', read:'16 min', series:null, img:'Segun addressing an education board', cap:'', body:DRAFT},

{slug:'purpose-is-not-a-feeling', title:'Purpose Is Not a Feeling', dek:'On calling, work and the difference between excitement and assignment.', topic:'faith-purpose', format:'Reflection', year:2024, date:'2 April 2024', read:'6 min', series:'faith-in-life', img:'Early morning, empty church', cap:'', body:DRAFT},

{slug:'interview-next-generation', title:'In Conversation: Nigeria and the Next Generation', dek:'An interview on youth employment, migration and the case for staying.', topic:'youth', format:'Interview', year:2024, date:'15 February 2024', read:'18 min', series:null, img:'Studio interview setup', cap:'', body:DRAFT},

{slug:'when-leaders-apologise', title:'What Happens When a Leader Apologises Properly', dek:'A short note on repair, and why most organisational apologies fail.', topic:'leadership', format:'Note', year:2023, date:'8 September 2023', read:'4 min', series:'notes-on-leadership', img:'Two colleagues talking by a window', cap:'', body:DRAFT},

{slug:'identity-before-achievement', title:'Identity Before Achievement', dek:'What we get wrong when we tell young people to find themselves through success.', topic:'psychology', format:'Essay', year:2023, date:'20 March 2023', read:'9 min', series:'building-people', img:'Young woman at a window, contemplative', cap:'', body:DRAFT}
];

const SERIES = {
  'segun-letters':{title:"Segun's Letters", desc:'Personal reflections and lessons, written as letters to individual people and shared with permission.', img:'Handwritten letter on a desk'},
  'notes-on-leadership':{title:'Notes on Leadership', desc:'Short observations on leading people, gathered over three decades of practice and consulting.', img:'Notebook and pen, boardroom table'},
  'building-people':{title:'Building People', desc:'Ideas around human development &mdash; formation, growth, psychology and what actually changes a person.', img:'Workshop circle in conversation'},
  'the-next-generation':{title:'The Next Generation', desc:'Youth, education, employability and the country the young are inheriting.', img:'Students in a school courtyard'},
  'faith-in-life':{title:'Faith in Life', desc:'Faith applied to everyday living &mdash; work, money, family, disappointment and hope.', img:'Open Bible and morning coffee'},
  'business-notes':{title:'Business Notes', desc:'Entrepreneurship and enterprise, written for owner-managers rather than for investors.', img:'Small business owner reviewing records'}
};

const COLLECTIONS = {
  'leadership':{title:'Leadership', desc:'A curated gathering of Segun&rsquo;s strongest leadership thinking &mdash; essays, a keynote, a case study and the notes that preceded them.', img:'Leader addressing a management team', topic:'leadership', count:'14 items'},
  'youth':{title:'Youth', desc:'Articles, speeches, programmes and video focused on young people, employability and the transition into adult responsibility.', img:'Young people in a leadership session', topic:'youth', count:'19 items'},
  'education':{title:'Education', desc:'Writing and work around schools, teachers, learning and reform &mdash; including the whole-school intervention material.', img:'Teacher and pupils in a classroom', topic:'education', count:'12 items'},
  'entrepreneurship':{title:'Entrepreneurship', desc:'Business development, enterprise and the practical discipline of keeping a small firm alive.', img:'Owner-manager in her workshop', topic:'business', count:'16 items'},
  'relationships':{title:'Relationships', desc:'Psychology, marriage, family and human relationships &mdash; counselling experience turned into writing.', img:'Family together at home', topic:'relationships', count:'11 items'},
  'faith':{title:'Faith', desc:'Sermons, reflections and Christian thought &mdash; stewardship, calling, formation and Christian leadership.', img:'Sanctuary before a service', topic:'faith-purpose', count:'23 items'}
};

const PROGRAMMES = {
  'rising-generation':{title:'The Rising Generation Initiative', cat:'Youth Development', img:'Youth cohort in an outdoor session',
    desc:'A three-month leadership intensive for 16&ndash;24 year-olds, run twice a year in Lagos and Ibadan. Participants work through personal formation, communication, employability and a community project they design themselves.',
    story:'Ayo joined the 2019 cohort because his aunt made him. He would not speak in the first three sessions. In week nine he presented his group&rsquo;s project to a room of ninety people. He now runs the alumni network and has recruited forty-one participants himself.',
    num:'4,200+', numLabel:'Participants since 2004',
    facts:[['Duration','12 weeks'],['Cohorts per year','2'],['Locations','Lagos, Ibadan'],['Cost to participant','Free'],['Started','2004']]},
  'enterprise-clinic':{title:'The Small Enterprise Clinic', cat:'Enterprise', img:'Small business owner in her workshop',
    desc:'Practical business development for owner-managed firms. Not lectures on strategy &mdash; margins, record-keeping, pricing, hiring and the discipline of staying alive in a volatile market.',
    story:'Mrs Nwosu came in convinced her tailoring business needed a loan. Six weeks of costing work showed she was losing money on her most popular item. She raised the price, lost four customers, and doubled her income within a year.',
    num:'860', numLabel:'Businesses supported',
    facts:[['Format','6 weekly clinics + follow-up'],['Cohort size','20&ndash;25 firms'],['Survival at 5 years','68% of participants'],['Started','2010']]},
  'teachers-table':{title:"The Teachers' Table", cat:'Education', img:'Teachers in a training workshop',
    desc:'A continuing development circle for classroom teachers who rarely get invested in. Voluntary, monthly, and run as a professional conversation rather than a training course.',
    story:'Mrs Adeyemi came to the first session alone and sceptical. She has since brought nineteen colleagues, and now co-facilitates the Ogun State circle.',
    num:'130+', numLabel:'Schools reached',
    facts:[['Frequency','Monthly, 2 hours'],['Attendance','Voluntary'],['Circles running','7'],['Started','2015']]},
  'women-in-enterprise':{title:'Women in Enterprise', cat:'Enterprise', img:'Women traders at a market cooperative',
    desc:'A dedicated track of the enterprise clinic for women running market and home-based businesses, with childcare provided and sessions timed around trading hours.',
    story:'A cooperative of eleven traders in Mushin now buys stock jointly, cutting their input costs by roughly a fifth.',
    num:'310', numLabel:'Women supported',
    facts:[['Format','8 sessions'],['Childcare','Provided'],['Started','2018']]},
  'pulpit-and-people':{title:'Pulpit &amp; People', cat:'Faith', img:'Church leaders in a training retreat',
    desc:'Leadership development for pastors, church workers and ministry teams &mdash; governance, pastoral care, conflict and the health of the people who carry the work.',
    story:'A church leadership team that had not held an honest conversation in four years spent two days doing exactly that. Two resignations followed, and the church is healthier for both.',
    num:'240', measure:true, numLabel:'Church leaders trained',
    facts:[['Format','2-day retreat'],['Denominations','Interdenominational'],['Started','2012']]}
};

const PUBLICATIONS = [
  {title:'The Cost of Being Trusted', type:'Book', year:2023, desc:'Integrity as an economic asset &mdash; the argument behind the keynote, worked out at length.', action:'Buy'},
  {title:'Building People: A Facilitator&rsquo;s Guide', type:'Training Manual', year:2021, desc:'The full curriculum behind the Rising Generation Initiative, licensed for institutional use.', action:'Licence'},
  {title:'Notes on Leadership, Volume One', type:'Booklet', year:2019, desc:'Fifty short observations on leading people, collected from two decades of practice.', action:'Download'},
  {title:'Staying Alive: A Small Business Workbook', type:'Workbook', year:2018, desc:'Costing, pricing, records and cash discipline, in exercises rather than chapters.', action:'Download'},
  {title:'Stewardship Beyond Money', type:'Teaching Series', year:2016, desc:'A six-part written teaching series on Christian stewardship.', action:'Read'},
  {title:'Teacher Development in Low-Resource Schools', type:'Paper', year:2022, desc:'Findings from the eleven-school intervention, prepared for a state education board.', action:'Download'}
];

const VIDEOS = [
  {title:'The Cost of Being Trusted', type:'Keynote', len:'41 min', year:2025, img:'Keynote stage, wide shot'},
  {title:'Stewardship Is Not About Money', type:'Teaching', len:'38 min', year:2025, img:'Teaching from a pulpit'},
  {title:'Nobody Is Coming to Discover You', type:'Youth Address', len:'27 min', year:2024, img:'Addressing a hall of students'},
  {title:'In Conversation: Nigeria and the Next Generation', type:'Interview', len:'52 min', year:2024, img:'Studio interview'},
  {title:'You Cannot Outgrow Your People', type:'Corporate Session', len:'34 min', year:2023, img:'Corporate training room'},
  {title:'Inside the Teachers&rsquo; Table', type:'Documentary', len:'19 min', year:2023, img:'Documentary still, teachers in circle'}
];

const QUOTES = [
  {q:'You cannot build an institution taller than the people who carry it.', src:'Notes on Leadership, 2019'},
  {q:'Authority is given. Influence is earned in advance.', src:'Leadership Begins Long Before the Title, 2026'},
  {q:'Nobody in that building lacked motivation. What they lacked was slack.', src:'The School That Taught Me More Than I Taught It, 2026'},
  {q:'Staying alive long enough for luck to find you is itself a strategy.', src:'Business Notes, 2026'},
  {q:'Most couples are not having a bad conversation. They are having two different conversations very well.', src:'Two Histories Sitting at One Table, 2026'},
  {q:'If you develop the person, you will not have to manage the problem for very long.', src:'Keynote, Lagos, 2022'}
];

const ARCHIVE = [
  {year:'2004', title:'The first youth leadership camp', text:'Forty-two young people, one borrowed hall in Ibadan, three days. The template for everything that followed.', img:'Archive — 2004 youth camp group photograph'},
  {year:'2007', title:'First corporate leadership engagement', text:'A manufacturing group in Ikeja invites Segun to work with its supervisory layer.', img:'Archive — 2007 factory floor session'},
  {year:'2010', title:'The Small Enterprise Clinic begins', text:'Twenty-two owner-managed firms in the first cohort. Sixteen were still trading five years later.', img:'Archive — 2010 first enterprise clinic'},
  {year:'2012', title:'Pulpit &amp; People launches', text:'Leadership development for pastors and ministry teams, run interdenominationally.', img:'Archive — 2012 church leaders retreat'},
  {year:'2015', title:'Into the schools', text:'A whole-school intervention across eleven public schools, focused on teachers rather than test scores.', img:'Archive — 2015 school intervention'},
  {year:'2018', title:'Women in Enterprise', text:'A dedicated enterprise track for women running market and home-based businesses.', img:'Archive — 2018 women traders cooperative'},
  {year:'2020', title:'Leadership in a shut year', text:'Thirty-one online sessions delivered to screens across four countries.', img:'Archive — 2020 online session screenshot'},
  {year:'2023', title:'The Cost of Being Trusted published', text:'The first full-length book, drawn from fifteen years of keynote material.', img:'Archive — 2023 book launch'},
  {year:'2026', title:'The Library opens', text:'Three decades of writing, teaching and photography brought into one public archive.', img:'Archive — the library, present day'}
];



/* ============================================================
   HELPERS
   ============================================================ */
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const art = s => ARTICLES.find(a=>a.slug===s);
const topicLabel = t => (TOPICS[t]||{label:'Insights'}).label;

function ph(label, ratio='r-land'){ return '<div class="ph-mask"><figure class="ph '+ratio+'" data-label="'+label+'"></figure></div>'; }

function cardHTML(a, ratio='r-land'){
  return '<a class="card" href="#/article/'+a.slug+'">'+ph(a.img,ratio)+
    '<div class="cat-tag">'+topicLabel(a.topic)+'</div>'+
    '<h3 class="d5" style="margin:8px 0">'+a.title+'</h3>'+
    '<p class="meta">'+a.format+' <span class="dot">&bull;</span> '+a.read+' <span class="dot">&bull;</span> '+a.year+'</p></a>';
}

function subscribed(f){ f.innerHTML = '<div class="badge">Subscribed</div><h3 class="d4 mt-s" style="color:inherit">Thank you.</h3><p class="body" style="margin-top:8px">Prototype only &mdash; no data was sent. In production this connects to the newsletter platform.</p>'; return false; }
function sent(f){ f.innerHTML = '<div class="badge">Received</div><h3 class="d4 mt-s" style="color:inherit">Message noted.</h3><p class="body" style="margin-top:8px">Prototype only &mdash; nothing was actually sent. In production this routes to the enquiries inbox.</p>'; return false; }

/* ============================================================
   RENDERERS
   ============================================================ */
let F = {topic:'all', format:'all', year:'all'};

function buildFilters(){
  const t = $('#f-topic'), f = $('#f-format'), y = $('#f-year');
  if(!t) return;
  t.innerHTML = '<button class="chip on" data-k="topic" data-v="all">All Topics</button>' +
    Object.entries(TOPICS).map(([k,v])=>'<button class="chip" data-k="topic" data-v="'+k+'">'+v.label+'</button>').join('');
  f.innerHTML = '<button class="chip on" data-k="format" data-v="all">All Formats</button>' +
    FORMATS.map(x=>'<button class="chip" data-k="format" data-v="'+x+'">'+x+'</button>').join('');
  const years = [...new Set(ARTICLES.map(a=>a.year))].sort((a,b)=>b-a);
  y.innerHTML = '<button class="chip on" data-k="year" data-v="all">All Years</button>' +
    years.map(x=>'<button class="chip" data-k="year" data-v="'+x+'">'+x+'</button>').join('');
  $$('#f-topic .chip, #f-format .chip, #f-year .chip').forEach(c=>{
    c.onclick = ()=>{
      F[c.dataset.k] = c.dataset.v;
      $$('[data-k="'+c.dataset.k+'"]').forEach(x=>x.classList.remove('on'));
      c.classList.add('on');
      renderInsights();
    };
  });
}
function clearFilters(){
  F = {topic:'all', format:'all', year:'all'};
  const s = $('#ins-search'); if(s) s.value='';
  $$('.chip[data-k]').forEach(c=>c.classList.toggle('on', c.dataset.v==='all'));
  renderInsights();
}
function renderInsights(){
  const grid = $('#insights-grid'); if(!grid) return;
  const q = ($('#ins-search')?.value||'').toLowerCase().trim();
  const list = ARTICLES.filter(a=>
    (F.topic==='all'||a.topic===F.topic) &&
    (F.format==='all'||a.format===F.format) &&
    (F.year==='all'||String(a.year)===String(F.year)) &&
    (!q || (a.title+' '+a.dek+' '+topicLabel(a.topic)+' '+a.format).toLowerCase().includes(q))
  );
  $('#ins-count').textContent = list.length + (list.length===1?' piece':' pieces');
  $('#ins-empty').style.display = list.length? 'none':'block';
  if(!list.length){ grid.innerHTML=''; return; }
  const [first,...rest] = list;
  grid.innerHTML =
    '<a class="card" href="#/article/'+first.slug+'" style="grid-column:1/-1">'+
      '<div class="split tight" style="align-items:center">'+ph(first.img,'r-wide')+
      '<div><span class="badge">Featured</span><div class="cat-tag">'+topicLabel(first.topic)+'</div>'+
      '<h3 class="d3" style="margin:10px 0 14px">'+first.title+'</h3>'+
      '<p class="body mw-45">'+first.dek+'</p>'+
      '<p class="meta">'+first.format+' <span class="dot">&bull;</span> '+first.read+' <span class="dot">&bull;</span> '+first.date+'</p></div></div></a>'+
    rest.map(a=>cardHTML(a)).join('');
}

function renderSeriesStrip(){
  const el = $('#series-strip'); if(!el) return;
  el.innerHTML = Object.entries(SERIES).slice(0,3).map(([k,s])=>
    '<a class="card" href="#/series/'+k+'">'+ph(s.img)+'<div class="cat-tag">Series</div><h3 class="d4" style="margin:8px 0">'+s.title+'</h3><p class="body" style="font-size:16px">'+s.desc+'</p></a>').join('');
  const g = $('#series-grid');
  if(g) g.innerHTML = Object.entries(SERIES).map(([k,s])=>{
    const n = ARTICLES.filter(a=>a.series===k).length;
    return '<a class="card" href="#/series/'+k+'">'+ph(s.img,'r-wide')+'<div class="cat-tag">'+n+' piece'+(n===1?'':'s')+'</div><h3 class="d3" style="margin:10px 0">'+s.title+'</h3><p class="body mw-45">'+s.desc+'</p></a>';
  }).join('');
}

function renderCollections(){
  const g = $('#collections-grid'); if(!g) return;
  g.innerHTML = Object.entries(COLLECTIONS).map(([k,c])=>
    '<a class="card" href="#/collection/'+k+'">'+ph(c.img,'r-wide')+
    '<div class="cat-tag">Collection <span class="dot">&bull;</span> '+c.count+'</div>'+
    '<h3 class="d2" style="font-size:clamp(26px,3vw,40px);margin:10px 0">'+c.title+'</h3>'+
    '<p class="body mw-45">'+c.desc+'</p></a>').join('');
}

function renderProgrammes(){
  const el = $('#prog-list'); if(!el) return;
  el.innerHTML = Object.entries(PROGRAMMES).map(([k,p],i)=>
    '<a class="card" href="#/programme/'+k+'" style="display:block;padding-block:clamp(28px,4vw,52px);border-top:1px solid var(--rule)">'+
      '<div class="split tight'+(i%2?' rev':'')+'" style="align-items:center">'+
        ph(p.img,'r-wide')+
        '<div><div class="cat-tag">'+p.cat+'</div><h3 class="d2" style="font-size:clamp(26px,3.4vw,44px);margin:10px 0 14px">'+p.title+'</h3>'+
        '<p class="body mw-45">'+p.desc+'</p>'+
        '<div class="flex-between mt-m"><span class="stat"><span class="n" style="font-size:40px;color:var(--green)">'+p.num+'</span><span class="l" style="margin-top:4px">'+p.numLabel+'</span></span>'+
        '<span class="link-arrow">Explore the Programme <span class="arw">&rarr;</span></span></div></div>'+
      '</div></a>').join('');
}

function renderPubs(){
  const g = $('#pubs-grid'); if(!g) return;
  g.innerHTML = PUBLICATIONS.map(p=>
    '<a class="card" href="#/contact">'+ph('Cover — '+p.title,'r-tall')+
    '<div class="cat-tag">'+p.type+' <span class="dot">&bull;</span> '+p.year+'</div>'+
    '<h3 class="d4" style="margin:8px 0">'+p.title+'</h3>'+
    '<p class="body" style="font-size:16px">'+p.desc+'</p>'+
    '<span class="link-arrow mt-s" style="display:inline-flex">'+p.action+' <span class="arw">&rarr;</span></span></a>').join('');
}

function renderVideos(){
  const g = $('#video-grid'); if(!g) return;
  g.innerHTML = VIDEOS.map(v=>
    '<a class="card" href="#/video"><div style="position:relative">'+ph(v.img,'r-wide')+
    '<span style="position:absolute;inset:0;display:grid;place-items:center;pointer-events:none"><span style="width:54px;height:54px;border-radius:50%;background:rgba(255,255,255,.92);display:grid;place-items:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#052A1C"><path d="M8 5v14l11-7z"/></svg></span></span></div>'+
    '<div class="cat-tag">'+v.type+'</div><h3 class="d5" style="margin:8px 0">'+v.title+'</h3><p class="meta">'+v.len+' <span class="dot">&bull;</span> '+v.year+'</p></a>').join('');
}

function renderQuotes(){
  const g = $('#quote-grid'); if(!g) return;
  g.innerHTML = QUOTES.slice(0,3).map(q=>
    '<div style="border-top:2px solid var(--green);padding-top:22px"><p class="d4" style="font-family:var(--display);font-weight:400">&ldquo;'+q.q+'&rdquo;</p><p class="meta mt-m">'+q.src+'</p></div>').join('');
}

function renderArchive(){
  const g = $('#archive-list'); if(!g) return;
  g.innerHTML = ARCHIVE.map(a=>
    '<div class="tl-item"><div class="split tight" style="align-items:center">'+
    '<div><div class="tl-year" style="color:var(--green)">'+a.year+'</div><h3 class="d4 mt-s">'+a.title+'</h3><p class="body mw-45">'+a.text+'</p></div>'+
    ph(a.img,'r-land')+'</div></div>').join('');
}

function renderLetters(){
  const g = $('#letters-grid'); if(!g) return;
  g.innerHTML = ARTICLES.filter(a=>a.format==='Letter'||a.format==='Reflection').slice(0,3).map(a=>cardHTML(a)).join('');
}

/* Library */
let LF = 'all';
function libQuick(t){ $('#lib-search').value = t; renderLibrary(); }
function libraryItems(){
  const items = [];
  ARTICLES.forEach(a=>items.push({t:a.title, k:a.format, y:a.year, m:a.read, href:'#/article/'+a.slug, tags:topicLabel(a.topic)+' '+a.dek}));
  VIDEOS.forEach(v=>items.push({t:v.title, k:'Video', y:v.year, m:v.len, href:'#/video', tags:v.type}));
  PUBLICATIONS.forEach(p=>items.push({t:p.title, k:'Publication', y:p.year, m:p.type, href:'#/publications', tags:p.desc}));
  Object.entries(PROGRAMMES).forEach(([k,p])=>items.push({t:p.title, k:'Programme', y:'—', m:p.cat, href:'#/programme/'+k, tags:p.desc}));
  QUOTES.forEach(q=>items.push({t:'&ldquo;'+q.q+'&rdquo;', k:'Quote', y:'—', m:q.src, href:'#/library', tags:q.src}));
  return items;
}
function renderLibrary(){
  const box = $('#lib-results'); if(!box) return;
  const q = ($('#lib-search')?.value||'').toLowerCase().trim();
  const all = libraryItems();
  const kinds = ['all', ...new Set(all.map(i=>i.k))];
  const fb = $('#lib-format');
  if(fb && !fb.dataset.built){
    fb.dataset.built = '1';
    fb.innerHTML = kinds.map(k=>'<button class="chip'+(k==='all'?' on':'')+'" data-lf="'+k+'">'+(k==='all'?'Everything':k)+'</button>').join('');
    $$('[data-lf]').forEach(b=>b.onclick=()=>{LF=b.dataset.lf;$$('[data-lf]').forEach(x=>x.classList.remove('on'));b.classList.add('on');renderLibrary();});
  }
  const list = all.filter(i=>(LF==='all'||i.k===LF) && (!q || (i.t+' '+i.k+' '+i.tags).toLowerCase().includes(q)));
  $('#lib-count').textContent = list.length+' result'+(list.length===1?'':'s')+(q?' for “'+q+'”':'');
  box.innerHTML = list.map(i=>
    '<a href="'+i.href+'" class="lib-row">'+
    '<span class="kicker">'+i.k+'</span>'+
    '<span><span class="d5" style="display:block">'+i.t+'</span><span class="meta">'+i.m+'</span></span>'+
    '<span class="meta">'+i.y+'</span></a>').join('') || '<p class="body">Nothing matched that search.</p>';
}

/* Article page */
function renderArticle(slug){
  const a = art(slug); if(!a) return false;
  $('#a-cat').textContent = topicLabel(a.topic);
  $('#a-cat').setAttribute('href','#/topic/'+a.topic);
  $('#a-title').textContent = a.title;
  $('#a-dek').textContent = a.dek;
  $('#a-meta').innerHTML = a.date+' <span class="dot">&bull;</span> '+a.read+' <span class="dot">&bull;</span> '+a.format;
  $('#a-hero').setAttribute('data-label', a.img);
  $('#a-cap').textContent = a.cap || '';
  $('#a-body').innerHTML = a.body;
  const sBox = $('#a-series').parentElement;
  if(a.series && SERIES[a.series]){
    sBox.style.display='block';
    $('#a-series').textContent = SERIES[a.series].title;
    sBox.querySelector('.body').innerHTML = SERIES[a.series].desc;
    $('#a-series-link').setAttribute('href','#/series/'+a.series);
  } else { sBox.style.display='none'; }
  const rel = ARTICLES.filter(x=>x.slug!==slug && (x.topic===a.topic||x.series===a.series)).slice(0,3);
  const fill = ARTICLES.filter(x=>x.slug!==slug && !rel.includes(x)).slice(0,3-rel.length);
  $('#a-related').innerHTML = [...rel,...fill].map(x=>cardHTML(x)).join('');
  return true;
}

function renderTopic(key){
  const t = TOPICS[key]; if(!t) return false;
  $('#t-title').textContent = t.label;
  $('#t-desc').textContent = t.desc;
  const list = ARTICLES.filter(a=>a.topic===key);
  $('#topic-grid').innerHTML = list.length? list.map(a=>cardHTML(a)).join('') : '<p class="body">Writing on this topic is being catalogued.</p>';
  return true;
}

function renderCollection(key){
  const c = COLLECTIONS[key]; if(!c) return false;
  $('#c-title').textContent = c.title;
  $('#c-desc').innerHTML = c.desc;
  $('#c-hero').setAttribute('data-label', c.img);
  const arts = ARTICLES.filter(a=>a.topic===c.topic);
  const vids = VIDEOS.slice(0,2).map(v=>'<a class="card" href="#/video">'+ph(v.img)+'<div class="cat-tag">Video &bull; '+v.type+'</div><h3 class="d5" style="margin:8px 0">'+v.title+'</h3><p class="meta">'+v.len+'</p></a>');
  const progs = Object.entries(PROGRAMMES).filter(([k,p])=>p.cat.toLowerCase().includes(c.title.toLowerCase().slice(0,5))).map(([k,p])=>'<a class="card" href="#/programme/'+k+'">'+ph(p.img)+'<div class="cat-tag">Programme</div><h3 class="d5" style="margin:8px 0">'+p.title+'</h3></a>');
  $('#c-items').innerHTML = [...arts.map(a=>cardHTML(a)), ...vids, ...progs].join('');
  return true;
}

function renderSeriesDetail(key){
  const s = SERIES[key]; if(!s) return false;
  $('#s-title').textContent = s.title;
  $('#s-desc').innerHTML = s.desc;
  $('#s-hero').setAttribute('data-label', s.img);
  const list = ARTICLES.filter(a=>a.series===key);
  $('#s-count').textContent = list.length+' piece'+(list.length===1?'':'s')+' in this series';
  $('#s-items').innerHTML = list.map((a,i)=>
    '<a href="#/article/'+a.slug+'" class="card" style="display:block;border-top:1px solid var(--rule);padding-block:clamp(22px,3vw,36px)">'+
    '<div class="split tight" style="align-items:center;gap:clamp(20px,3vw,48px)">'+
    '<div style="display:flex;gap:22px;align-items:baseline"><span class="tl-year" style="color:var(--green);font-size:34px">'+String(i+1).padStart(2,'0')+'</span>'+
    '<div><h3 class="d4">'+a.title+'</h3><p class="body mt-s" style="font-size:16px">'+a.dek+'</p><p class="meta">'+a.format+' <span class="dot">&bull;</span> '+a.read+' <span class="dot">&bull;</span> '+a.date+'</p></div></div>'+
    ph(a.img,'r-land')+'</div></a>').join('') || '<p class="body">Pieces in this series are being catalogued.</p>';
  return true;
}

function renderProgramme(key){
  const p = PROGRAMMES[key]; if(!p) return false;
  $('#p-title').innerHTML = p.title;
  $('#p-desc').innerHTML = p.desc;
  $('#p-story').innerHTML = p.story;
  $('#p-hero').setAttribute('data-label', p.img);
  $('#p-num').textContent = p.num;
  $('#p-numlabel').textContent = p.numLabel;
  $('#p-facts').innerHTML = p.facts.map(f=>'<div class="flex-between" style="padding:9px 0;border-bottom:1px solid rgba(11,11,11,.08)"><span class="meta">'+f[0]+'</span><span style="font-family:var(--ui);font-size:14px;font-weight:600">'+f[1]+'</span></div>').join('');
  $('#p-related').innerHTML = Object.entries(PROGRAMMES).filter(([k])=>k!==key).slice(0,3).map(([k,x])=>
    '<a class="card" href="#/programme/'+k+'">'+ph(x.img)+'<div class="cat-tag">'+x.cat+'</div><h3 class="d5" style="margin:8px 0">'+x.title+'</h3></a>').join('');
  return true;
}

/* ============================================================
   ROUTER
   ============================================================ */
function route(){
  // In-page anchors (#speaking-form) aren't routes: show the page that holds them
  const anchor = /^#[^/]/.test(location.hash) ? document.getElementById(location.hash.slice(1)) : null;
  const anchorPage = anchor && anchor.closest('.page[data-route]');
  const hash = anchorPage ? anchorPage.dataset.route : (location.hash||'#/').replace(/^#\/?/,'');
  const parts = hash.split('/').filter(Boolean);
  let name = parts[0] || 'home';
  const arg = parts[1];
  let ok = true;

  if(name==='article'){ ok = renderArticle(arg); }
  else if(name==='topic'){ ok = renderTopic(arg); }
  else if(name==='collection'){ ok = renderCollection(arg); }
  else if(name==='programme'){ ok = renderProgramme(arg); }
  else if(name==='series' && arg){ ok = renderSeriesDetail(arg); if(ok) name='seriesdetail'; }

  let el = document.querySelector('.page[data-route="'+name+'"]');
  if(!el || !ok){ name='404'; el = document.querySelector('.page[data-route="404"]'); }

  $$('.page').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');

  // nav state
  $$('#nav a').forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#/'+name));

  applyImages(el);
  revealInit(el);
  closeMenu();
  if(anchorPage) anchor.scrollIntoView({behavior:'smooth', block:'start'});
  else window.scrollTo({top:0, behavior:'instant'});
  document.title = (name==='home'?'Segun Oduyebo — Developing People. Strengthening Leaders.':
    (name==='article'&&art(arg)? art(arg).title+' — Segun Oduyebo' : name.charAt(0).toUpperCase()+name.slice(1)+' — Segun Oduyebo'));
}

/* Real photographs: set data-src on any .ph to swap the placeholder for an image */
function applyImages(scope){
  $$('.ph[data-src]', scope||document).forEach(f=>{
    f.style.backgroundImage = 'url("'+f.dataset.src+'")';
    f.classList.add('has-img');
  });
}

/* ============================================================
   INTERACTIONS
   ============================================================ */
function openMenu(){ $('#menu').classList.add('open'); document.body.classList.add('nav-open'); }
function closeMenu(){ $('#menu').classList.remove('open'); document.body.classList.remove('nav-open'); }
$('#burger').onclick = openMenu;
$('#menu-close').onclick = closeMenu;
$$('#menu a').forEach(a=>a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeMenu(); });

/* Reveal on scroll */
const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }), {threshold:.12, rootMargin:'0px 0px -8% 0px'});
function revealInit(scope){
  $$('.sec, .quote-band, .split, .grid > *', scope).forEach(el=>{
    if(el.closest('.header')||el.classList.contains('rv')) return;
  });
  $$('.rv', scope).forEach(el=>io.observe(el));
}

/* Scroll behaviours: reading progress + mobile CTA */
let lastY = 0;
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const active = document.querySelector('.page.active');
  const isArticle = active && active.dataset.route==='article';
  $('#progress').style.width = isArticle ? (Math.min(y/Math.max(h,1),1)*100)+'%' : '0%';
  const mc = $('#mcta');
  if(y > window.innerHeight*0.6 && y > lastY - 40) mc.classList.add('show');
  if(y < window.innerHeight*0.3) mc.classList.remove('show');
  lastY = y;
}, {passive:true});

/* ============================================================
   BOOT
   ============================================================ */
buildFilters();
renderInsights();
renderSeriesStrip();
renderCollections();
renderProgrammes();
renderPubs();
renderVideos();
renderQuotes();
renderArchive();
renderLetters();
renderLibrary();
applyImages(document);
window.addEventListener('hashchange', route);
route();

Object.assign(window, {
  clearFilters,
  libQuick,
  renderInsights,
  renderLibrary,
  sent,
  subscribed
});
