/* Saituri — saituri.ge */
(function(){
  var PHONE='995595033848';
  var root=document.documentElement;
  var lang='ka';
  try{var s=localStorage.getItem('saituri-lang');if(s==='en'||s==='ka')lang=s;}catch(e){}
  function setLang(l){
    lang=l;root.setAttribute('lang',l);
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.lang===l));});
    try{localStorage.setItem('saituri-lang',l);}catch(e){}
    if(!chat.hidden){restart();}
  }
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang);});});

  /* copy phone */
  document.getElementById('copy-phone').addEventListener('click',function(){
    var btn=this;
    function done(){btn.innerHTML=lang==='ka'?'დაკოპირდა':'Copied';setTimeout(function(){btn.innerHTML='<span class="ka">კოპირება</span><span class="en">Copy</span>';},1800);}
    try{navigator.clipboard.writeText('+995 595 03 38 48').then(done,function(){sel();});}catch(e){sel();}
    function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById('phone-text'));var w=getSelection();w.removeAllRanges();w.addRange(r);}
  });

  /* ---------- chatbot ---------- */
  var T={
    ka:{
      hi:'გამარჯობა! 👋 მე საიტურის ასისტენტი ვარ. 4 მოკლე კითხვას დაგისვამთ და თქვენს ბიზნესს შესაფერის გეგმას შევურჩევ.',
      q1:'როგორი ბიზნესი გაქვთ?',
      q2:'რა არის მთავარი, რაც კლიენტმა საიტზე უნდა გააკეთოს?',
      q3:'ვინ არიან თქვენი კლიენტები?',
      q4:'რამდენი ინფორმაცია უნდა იყოს საიტზე?',
      sectors:{restaurant:'რესტორანი / კაფე',hotel:'სასტუმრო / საოჯახო სასტუმრო',tour:'ტურისტული სააგენტო',dealer:'ავტოსალონი',repair:'ავტოსერვისი',salon:'სალონი / სერვისი',shop:'მაღაზია',other:'სხვა'},
      goals:{call:'დარეკოს ან მოვიდეს',book:'დაჯავშნოს',browse:'ნახოს მენიუ, ფასები ან კატალოგი',sell:'იყიდოს ონლაინ'},
      aud:{local:'ძირითადად ადგილობრივები',mix:'ადგილობრივები და უცხოელები',intl:'უცხოელები სხვადასხვა ქვეყნიდან'},
      size:{one:'ერთი გვერდი საკმარისია',few:'რამდენიმე გვერდი (მენიუ, გალერეა, კონტაქტი)',many:'ბევრი გვერდი (გუნდი, სიახლეები, ბევრი სერვისი)'},
      thinking:'ვარჩევ საუკეთესო გეგმას...',
      rec:'თქვენთვის გირჩევთ:',
      from:'-დან',
      care:'+ ჰოსტინგი და მოვლა 50 ₾/თვე',
      free:'✓ პირველი ნაბიჯი: უფასო ნიმუში 1 საათზე ნაკლებ დროში',
      delivery:'მზადდება',
      pages:'გვერდები',
      next:'გნებავთ, რომ თქვენი საიტის ნიმუში უფასოდ ავაწყოთ?',
      yes:'დიახ, მინდა უფასო ნიმუში',
      other:'სხვა პაკეტი მაჩვენეთ',
      restart:'თავიდან დაწყება',
      askInfo:'მშვენიერია! დაგვიტოვეთ რამდენიმე დეტალი და WhatsApp-ზე გამოგვიგზავნეთ.',
      fName:'თქვენი სახელი',fBiz:'ბიზნესის სახელი',fMaps:'Google Maps ბმული (არასავალდებულო)',fSubmit:'მზადაა',
      ready:'შეტყობინება მზადაა. დააჭირეთ ღილაკს და WhatsApp-ში გაიხსნება. ან დაგვირეკეთ: +995 595 03 38 48',
      wa:'WhatsApp-ზე გაგზავნა',
      msg:function(d){return 'გამარჯობა, საიტური! მე ვარ '+d.name+', '+d.biz+' ('+d.sector+'). ჩატბოტმა შემომთავაზა: '+d.plan+', '+d.price+' ₾-დან. მინდა უფასო ნიმუში.'+(d.maps?' Google Maps: '+d.maps:'');},
      allPlans:'ყველა პაკეტი:',
      need:'შეავსეთ სახელი და ბიზნესის სახელი.'
    },
    en:{
      hi:'Hi! 👋 I\'m the Saituri assistant. I\'ll ask 4 short questions and pick the plan that fits your business.',
      q1:'What kind of business do you have?',
      q2:'What is the main thing a customer should do on your site?',
      q3:'Who are your customers?',
      q4:'How much should the site hold?',
      sectors:{restaurant:'Restaurant / café',hotel:'Hotel / guesthouse',tour:'Tour agency',dealer:'Car dealership',repair:'Car repair shop',salon:'Salon / service',shop:'Shop',other:'Something else'},
      goals:{call:'Call us or visit',book:'Make a booking',browse:'See the menu, prices or catalogue',sell:'Buy online'},
      aud:{local:'Mostly locals',mix:'Locals and foreigners',intl:'Foreigners from many countries'},
      size:{one:'One page is enough',few:'A few pages (menu, gallery, contact)',many:'Many pages (team, news, lots of services)'},
      thinking:'Picking the best plan...',
      rec:'Our suggestion for you:',
      from:'from',
      care:'+ hosting and care 50 ₾/month',
      free:'✓ First step: a free sample in under 1 hour',
      delivery:'Ready in',
      pages:'Pages',
      next:'Shall we build a free sample of your site?',
      yes:'Yes, I want a free sample',
      other:'Show me other packages',
      restart:'Start over',
      askInfo:'Great! Leave a few details and send them to us on WhatsApp.',
      fName:'Your name',fBiz:'Business name',fMaps:'Google Maps link (optional)',fSubmit:'Done',
      ready:'Your message is ready. Tap the button to open it in WhatsApp, or call us: +995 595 03 38 48',
      wa:'Send on WhatsApp',
      msg:function(d){return 'Hello Saituri! I\'m '+d.name+' from '+d.biz+' ('+d.sector+'). The chatbot suggested: '+d.plan+', from '+d.price+' ₾. I\'d like a free sample.'+(d.maps?' Google Maps: '+d.maps:'');},
      allPlans:'All packages:',
      need:'Please fill in your name and business name.'
    }
  };
  var PLANS={
    landing:{price:'500',old:'1 000',ka:{n:'მთავარი გვერდი',p:'1',d:'5 დღეში',inc:['მთავარი ბლოკი, სერვისები, ფოტოები','Google-ის შეფასებები და რუკა','WhatsApp-ის და ზარის ღილაკები','3 ენა: ქართული, ინგლისური, რუსული']},en:{n:'Landing page',p:'1',d:'5 days',inc:['Hero, services, photos','Google reviews and map','WhatsApp and call buttons','3 languages: Georgian, English, Russian']}},
    business:{price:'1 500',ka:{n:'ბიზნეს საიტი',p:'5-მდე',d:'10 დღეში',inc:['5-მდე გვერდი: მენიუ ან ფასები, გალერეა, კონტაქტი','ჯავშნის ან შეკვეთის ფორმა WhatsApp-ზე','Google Maps პროფილის განახლება და საიტის მიბმა','QR კოდი მენიუსთვის ან საიტისთვის','საბაზისო SEO: Google-ში თქვენი სახელით გამოჩენა']},en:{n:'Business site',p:'up to 5',d:'10 days',inc:['Up to 5 pages: menu or prices, gallery, contact','Booking or order form to WhatsApp','Google Maps profile refresh, linked to your site','QR code for your menu or site','Basic SEO: show up on Google for your name']}},
    corporate:{price:'2 000',ka:{n:'კორპორატიული საიტი',p:'10-მდე',d:'3 კვირაში',inc:['10-მდე გვერდი: გუნდი, სერვისები, ბლოგი ან სიახლეები','ონლაინ ჯავშნის სისტემა კალენდრით','სრული SEO: საკვანძო სიტყვები და სწრაფი ჩატვირთვა','ვიზიტორების სტატისტიკა Google Analytics-ით','Facebook-ის და Instagram-ის მიბმა საიტზე','კორპორატიული ელფოსტა თქვენს დომეინზე']},en:{n:'Corporate site',p:'up to 10',d:'3 weeks',inc:['Up to 10 pages: team, services, blog or news','Online booking system with a calendar','Full SEO: keywords and fast loading','Visitor statistics with Google Analytics','Facebook and Instagram linked to your site','Business email on your own domain']}},
    store:{price:'2 500',ka:{n:'ონლაინ მაღაზია',p:'კატალოგი',d:'4–6 კვირაში',inc:['პროდუქტების კატალოგი ფილტრებით და ძიებით','კალათა და ონლაინ გადახდა ქართული ბანკით','მარაგის და შეკვეთების მართვის პანელი','შეკვეთის შეტყობინება WhatsApp-ზე და ელფოსტაზე','ფასდაკლების კოდები და აქციები','მიწოდების ზონები და ფასები','მყიდველის ანგარიში და შეკვეთების ისტორია']},en:{n:'Online store',p:'catalogue',d:'4–6 weeks',inc:['Product catalogue with filters and search','Cart and online payment through a Georgian bank','Stock and order management panel','Order alerts on WhatsApp and email','Discount codes and promotions','Delivery zones and prices','Customer accounts and order history']}}
  };
  var FEAT={
    ka:{restaurant:'მენიუ ფასებით, მაგიდის დაჯავშნა ერთი ღილაკით, რუკა და საათები',hotel:'ოთახები ფოტოებით და ფასებით, ჯავშანი WhatsApp-ით',tour:'ტურების გვერდები თარიღებით და ფასებით, ჯავშნის ფორმა',dealer:'მანქანების კატალოგი ფოტოებით და ფასებით, ზარის ღილაკი თითო მანქანაზე',repair:'სერვისების ფასები, ზარის ღილაკი, რუკა და Google-ის შეფასებები',salon:'სერვისები და ფასები, ჩაწერა WhatsApp-ით, ნამუშევრების გალერეა',shop:'პროდუქტები ფოტოებით და ფასებით, მისამართი და საათები',other:'თქვენი სერვისები, ფოტოები, შეფასებები, რუკა და კონტაქტი'},
    en:{restaurant:'Menu with prices, one-tap table booking, map and hours',hotel:'Rooms with photos and prices, booking over WhatsApp',tour:'Tour pages with dates and prices, a booking form',dealer:'Car catalogue with photos and prices, a call button on every car',repair:'Service prices, call button, map and your Google reviews',salon:'Services and prices, booking over WhatsApp, a gallery of your work',shop:'Products with photos and prices, address and hours',other:'Your services, photos, reviews, map and contact'}
  };
  var tourism={hotel:1,tour:1};
  var state={};
  var chat=document.getElementById('chat'),body=document.getElementById('chat-body'),opts=document.getElementById('chat-opts');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function scroll(){body.scrollTop=body.scrollHeight;}
  function bot(html,cb){
    var t=document.createElement('div');t.className='typing';t.innerHTML='<i></i><i></i><i></i>';body.appendChild(t);scroll();
    setTimeout(function(){t.remove();var b=document.createElement('div');b.className='bub bot';b.innerHTML=html;body.appendChild(b);scroll();cb&&cb();},reduce?0:520);
  }
  function me(text){var b=document.createElement('div');b.className='bub me';b.textContent=text;body.appendChild(b);scroll();}
  function choices(map,onPick,extraClass){
    opts.innerHTML='';
    Object.keys(map).forEach(function(k,i){
      var b=document.createElement('button');b.type='button';b.textContent=map[k];
      if(extraClass&&i===0)b.className=extraClass;
      b.addEventListener('click',function(){opts.innerHTML='';me(map[k]);onPick(k);});
      opts.appendChild(b);
    });
  }
  function ask(qKey,mapKey,next){bot(T[lang][qKey],function(){choices(T[lang][mapKey],next);});}

  function recommend(){
    var s=state;
    if(s.goal==='sell')return 'store';
    if(s.size==='many'||s.aud==='intl')return 'corporate';
    if(s.size==='few'||s.aud==='mix'||s.goal==='book'||s.goal==='browse'||tourism[s.sector])return 'business';
    return 'landing';
  }
  function planCard(key){
    var p=PLANS[key],L=p[lang],t=T[lang];
    var feats=[FEAT[lang][state.sector]||FEAT[lang].other].concat(L.inc);
    var d=document.createElement('div');d.className='plancard';
    d.innerHTML='<div style="color:var(--muted);font-size:13px">'+t.rec+'</div>'+
      '<div class="pn">'+esc(L.n)+(p.old?' <span class="salechip">SALE</span>':'')+'</div>'+
      '<div class="pp">'+(p.old?'<s class="was">'+(lang==='ka'?p.old:p.old.replace(' ',','))+' ₾</s>':'')+(lang==='ka'?p.price+' ₾<small>'+t.from+'</small>':'<small>'+t.from+' </small>'+p.price.replace(' ',',')+' ₾')+'</div>'+
      '<div style="font:12.5px var(--mono);color:var(--spark)">'+t.pages+': '+esc(L.p)+' · '+t.delivery+' '+esc(L.d)+'</div>'+
      '<ul>'+feats.map(function(f){return '<li>'+esc(f)+'</li>';}).join('')+'</ul>'+
      '<div style="font-size:13px;color:var(--muted)">'+t.care+'</div>'+
      '<div class="free">'+t.free+'</div>';
    body.appendChild(d);scroll();
  }
  function showResult(key){
    state.plan=key;
    bot(T[lang].thinking,function(){
      setTimeout(function(){
        planCard(key);
        bot(T[lang].next,function(){
          var m={yes:T[lang].yes,other:T[lang].other,restart:T[lang].restart};
          choices(m,function(k){
            if(k==='yes')collect();
            else if(k==='other')others();
            else restart();
          },'main');
        });
      },reduce?0:400);
    });
  }
  function others(){
    var t=T[lang],m={};
    Object.keys(PLANS).forEach(function(k){m[k]=PLANS[k][lang].n+' · '+(lang==='ka'?PLANS[k].price+' ₾-დან':'from '+PLANS[k].price.replace(' ',',')+' ₾');});
    bot(t.allPlans,function(){choices(m,function(k){showResult(k);});});
  }
  function collect(){
    var t=T[lang];
    bot(t.askInfo,function(){
      opts.innerHTML='<form id="lead-form" novalidate>'+
        '<label for="lead-name">'+t.fName+'</label><input id="lead-name" autocomplete="name" required>'+
        '<label for="lead-biz">'+t.fBiz+'</label><input id="lead-biz" autocomplete="organization" required>'+
        '<label for="lead-maps">'+t.fMaps+'</label><input id="lead-maps" inputmode="url" placeholder="https://maps.app.goo.gl/...">'+
        '<button type="submit" class="main">'+t.fSubmit+'</button></form>';
      var f=document.getElementById('lead-form');
      setTimeout(function(){document.getElementById('lead-name').focus();},50);
      f.addEventListener('submit',function(e){
        e.preventDefault();
        var name=document.getElementById('lead-name').value.trim(),biz=document.getElementById('lead-biz').value.trim(),maps=document.getElementById('lead-maps').value.trim();
        if(!name||!biz){var w=f.querySelector('.warn');if(!w){w=document.createElement('div');w.className='warn';w.style.cssText='color:var(--warn);font-size:13px';f.appendChild(w);}w.textContent=t.need;return;}
        opts.innerHTML='';
        me(name+' · '+biz);
        var text=t.msg({name:name,biz:biz,maps:maps,sector:T[lang].sectors[state.sector],plan:PLANS[state.plan][lang].n,price:PLANS[state.plan].price});
        bot(t.ready,function(){
          var a=document.createElement('a');a.className='walink';a.target='_blank';a.rel='noopener';
          a.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent(text);
          a.innerHTML='<svg width="20" height="20"><use href="#i-wa"/></svg>'+t.wa;
          body.appendChild(a);scroll();
          choices({restart:t.restart},function(){restart();});
        });
      });
    });
  }
  function start(){
    state={};body.innerHTML='';opts.innerHTML='';
    bot(T[lang].hi,function(){
      ask('q1','sectors',function(k){state.sector=k;
        ask('q2','goals',function(k){state.goal=k;
          ask('q3','aud',function(k){state.aud=k;
            ask('q4','size',function(k){state.size=k;showResult(recommend());});
          });
        });
      });
    });
  }
  function restart(){start();}
  var started=false;
  function openChat(){chat.hidden=false;document.getElementById('fab').setAttribute('aria-expanded','true');if(!started){started=true;start();}}
  function closeChat(){chat.hidden=true;document.getElementById('fab').setAttribute('aria-expanded','false');}
  document.querySelectorAll('[data-open-chat]').forEach(function(b){b.addEventListener('click',function(){if(b.id==='fab'&&!chat.hidden){closeChat();}else openChat();});});
  document.getElementById('chat-close').addEventListener('click',closeChat);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!chat.hidden)closeChat();});

  setLang(lang);
})();
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* headline word-by-word entrance */
  document.querySelectorAll('[data-words]').forEach(function(h){
    var i=0;
    (function walk(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(n){
        if(n.nodeType===3){
          var frag=document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function(p){
            if(!p)return;
            if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(p));return;}
            var s=document.createElement('span');s.className='w';s.style.setProperty('--i',i++);s.textContent=p;frag.appendChild(s);
          });
          node.replaceChild(frag,n);
        }else if(n.nodeType===1)walk(n);
      });
    })(h);
  });

  /* orbit: cards and photos circling the Mountime window */
  var stage=document.getElementById('stage'),orbit=document.getElementById('orbit');
  var tiles=Array.prototype.slice.call(orbit.children),N=tiles.length;
  var base=0.4,vel=0,dragging=false,lastX=0,R=280,last=performance.now();
  function size(){var w=stage.clientWidth;R=w<500?w*.36:Math.max(140,Math.min(300,w*.52));}
  size();addEventListener('resize',size);
  function place(){
    for(var i=0;i<N;i++){
      var th=base+i*2*Math.PI/N,s=Math.sin(th),c=Math.cos(th);
      var x=R*s,y=R*.26*c-R*.14*s,depth=(c+1)/2,sc=.6+.44*depth;
      var el=tiles[i];
      el.style.transform='translate(-50%,-50%) translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0) rotateY('+(s*38).toFixed(1)+'deg) scale('+sc.toFixed(3)+')';
      el.style.opacity=(.3+.7*depth).toFixed(2);
      el.style.filter=depth<.45?'blur('+((.45-depth)*5).toFixed(1)+'px)':'none';
      el.style.zIndex=c>-.05?10:2;
    }
  }
  function tick(now){
    var dt=Math.min(64,now-last);last=now;
    if(!dragging){base+=dt*0.00018+vel;vel*=0.94;}
    place();if(running)requestAnimationFrame(tick);
  }
  var running=false,onScreen=true;
  function setRun(){
    var want=!reduce&&onScreen&&!document.hidden&&getComputedStyle(orbit).display!=='none';
    if(want&&!running){running=true;last=performance.now();requestAnimationFrame(tick);}
    else if(!want)running=false;
  }
  place();
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){onScreen=e[0].isIntersecting;setRun();}).observe(stage);
  document.addEventListener('visibilitychange',setRun);
  addEventListener('resize',setRun);
  setRun();
  stage.addEventListener('pointerdown',function(e){if(e.target.closest('button,.slides'))return;dragging=true;lastX=e.clientX;});
  addEventListener('pointermove',function(e){if(!dragging)return;var dx=e.clientX-lastX;lastX=e.clientX;base+=dx*0.006;vel=dx*0.0015;if(reduce)place();});
  addEventListener('pointerup',function(){dragging=false;});
  addEventListener('pointercancel',function(){dragging=false;});

  /* sliding pill in the nav */
  var nav=document.getElementById('navlinks'),pill=nav.querySelector('.pill');
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('mouseenter',function(){pill.style.opacity=1;pill.style.width=a.offsetWidth+'px';pill.style.transform='translateX('+a.offsetLeft+'px)';});
  });
  nav.addEventListener('mouseleave',function(){pill.style.opacity=0;});

  if(!reduce&&matchMedia('(hover:hover)').matches){
    /* tilt on portfolio cards */
    document.querySelectorAll('.work').forEach(function(c){
      c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.setProperty('--ry',(x*10)+'deg');c.style.setProperty('--rx',(-y*8)+'deg');});
      c.addEventListener('pointerleave',function(){c.style.setProperty('--ry','0deg');c.style.setProperty('--rx','0deg');});
    });
    /* glow that follows the cursor on sector cards */
    document.querySelectorAll('.sector').forEach(function(c){
      c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');});
    });
  }
})();
(function(){
  var S=[
    {u:'mountime',n:'Mountime Restaurant',r:'4.8',c:'377',ck:'რესტორანი',ce:'Restaurant',kk:'საათები',ke:'Hours',vk:'ღიაა 23:00-მდე',ve:'Open until 23:00'},
    {u:'mere',n:'Restaurant Mere',r:'4.5',c:'211',ck:'რესტორანი',ce:'Restaurant',kk:'საათები',ke:'Hours',vk:'ღიაა 20:00-მდე',ve:'Open until 20:00'},
    {u:'egrisi',n:'<span class="ka">ეგრისი</span><span class="en">Egrisi</span>',ck:'რესტორანი და ბაღი',ce:'Restaurant & garden',kk:'საათები',ke:'Hours',vk:'ყოველდღე 10:00–23:00',ve:'Daily 10:00–23:00'},
    {u:'archeoni',n:'Archeoni Studio',ck:'სამკაულების სახელოსნო',ce:'Jewellery studio',kk:'შეკვეთა',ke:'Orders',vk:'ონლაინ, 24/7',ve:'Online, 24/7'},
    {u:'blackeagle',n:'Black Eagle BJJ',r:'5.0',c:'46',ck:'ჯიუ-ჯიცუს კლუბი',ce:'Jiu-jitsu club',kk:'ვარჯიში',ke:'Training',vk:'ორშ–შაბ',ve:'Mon–Sat'}
  ];
  var slides=[].slice.call(document.querySelectorAll('#slides .slide')),dots=[].slice.call(document.querySelectorAll('#dots button'));
  var url=document.getElementById('hurl'),maps=document.querySelector('.maps');
  var cur=0,timer=null,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function hyd(im){if(im&&im.dataset.srcset){im.srcset=im.dataset.srcset;im.src=im.dataset.src;im.removeAttribute('data-srcset');im.removeAttribute('data-src');}}
  addEventListener('load',function(){setTimeout(function(){slides.forEach(hyd);},2500);});
  function star(x){return '<b>'+x.r+' ★★★★★</b> ('+x.c+') · ';}
  function show(i,dir){
    i=(i+slides.length)%slides.length; if(i===cur)return;
    hyd(slides[i]);hyd(slides[(i+1)%slides.length]);
    var old=slides[cur]; old.classList.remove('on'); old.classList.toggle('left',dir>0);
    var nw=slides[i]; nw.classList.remove('left'); if(dir<0)nw.classList.add('left'); void nw.offsetWidth; nw.classList.remove('left'); nw.classList.add('on');
    dots[cur].removeAttribute('aria-current'); dots[i].setAttribute('aria-current','true');
    cur=i; var x=S[i];
    url.innerHTML='🔒 <b>'+x.u+'</b>.ge';
    maps.classList.add('swap');
    setTimeout(function(){
      document.getElementById('mname').innerHTML=x.n;
      document.getElementById('mrate').innerHTML=(x.r?star(x):'')+'<span class="ka">'+x.ck+'</span><span class="en">'+x.ce+'</span>';
      document.getElementById('mrow').innerHTML='<span class="k"><span class="ka">'+x.kk+'</span><span class="en">'+x.ke+'</span></span><span class="ka">'+x.vk+'</span><span class="en">'+x.ve+'</span>';
      document.getElementById('mweb').textContent=x.u+'.ge';
      maps.classList.remove('swap');
    },250);
  }
  function auto(){clearInterval(timer);if(!reduce)timer=setInterval(function(){show(cur+1,1);},5000);}
  document.getElementById('hnext').addEventListener('click',function(){show(cur+1,1);auto();});
  document.getElementById('hprev').addEventListener('click',function(){show(cur-1,-1);auto();});
  dots.forEach(function(b,i){b.addEventListener('click',function(){show(i,i>cur?1:-1);auto();});});
  var box=document.getElementById('slides'),sx=null;
  box.addEventListener('pointerdown',function(e){sx=e.clientX;});
  box.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40){show(cur+(dx<0?1:-1),dx<0?1:-1);auto();}});
  var st=document.getElementById('stage');
  st.addEventListener('mouseenter',function(){clearInterval(timer);});
  st.addEventListener('mouseleave',auto);
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){if(e[0].isIntersecting)auto();else clearInterval(timer);}).observe(st);
  document.addEventListener('visibilitychange',function(){if(document.hidden)clearInterval(timer);else auto();});
  auto();
})();
