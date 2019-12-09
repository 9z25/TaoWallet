window.onload= function() {
    
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var modal = document.getElementById("modal");
    var bodyTag = document.getElementsByTagName("Body");
    
    
    p2.style.display = "none";
    p3.style.display = "none";
    
    var loading = setInterval("doSomething()", 1000);
    
    
    loadCredits = () => {
    
        var display = modal.style.display.toString();
        if(display !== "block") {
            modal.style.display = "block";
            for(var i = 0; i < bodyTag.length; i++) bodyTag[i].classList.toggle("dialogIsOpen");
            return;
        }
        return;
    }
    
    closeModal = () => {
        
        var display = modal.style.display.toString();
        if(display === "block") {
          modal.style.display = "none";
          for(var i = 0; i < bodyTag.length; i++) bodyTag[i].classList.toggle("dialogIsOpen");
          return;
        }
        return;
    }
    
    doSomething = () => {
      if (ninja.seeder.seedCount > ninja.seeder.seedLimit) {
      clearInterval(l);
      }
      if (p3.style.display == "block"){
        p2.style.display = "none";
        p3.style.display = "none";
        p1.style.display = "block";
        return;
      }
      if (p2.style.display == "none"){
        p2.style.display = "block";
        return;
      }
      if (p3.style.display == "none"){
        p3.style.display = "block";
        return;
      }
      
    }
    
    
    
    
    viewSingleWallet = () => {
        document.getElementById("main").style.display = "none";
        document.getElementById("addresses").style.display = "block";
    }
    
    viewNewSeed = () => {
        ninja.seeder.seedCount = 0;
        switchCursor();
        document.getElementById("main").style.display = "block";
        document.getElementById("addresses").style.display = "none";
        
        
    }
    
    processSeed = (event) => {
        ninja.seeder.seed(event);
        var percentageComplete =  ninja.seeder.seedCount / ninja.seeder.seedLimit;
        /*
        var elem = document.getElementById("myBar");
        elem.style.width = percentageComplete.toString().substring(2, 4) + "%";
    */  
        document.getElementById("count").textContent = percentageComplete.toString().substring(2, 4) + "%";
        var elem = document.getElementById("prog");
        elem.value = ninja.seeder.seedCount;
        elem.max = ninja.seeder.seedLimit;
        if (ninja.seeder.seedCount > ninja.seeder.seedLimit) {
            viewSingleWallet();
        }
    }
    
    
    generateNewSeed = () => {
        if (ninja.seeder.seedCount <= ninja.seeder.seedLimit) {
            viewNewSeed()
            return;
        }
    }
    
    generateNewAddress = () => {
        if (ninja.seeder.seedCount <= ninja.seeder.seedLimit) {
            viewNewSeed()
            return;
        }
        ninja.wallets.singlewallet.generateNewAddressAndKey();
    }
    var main = document.getElementById("main");
    main.style.display = "none";
    var addresses = document.getElementById("addresses");
    addresses.style.display = "block";
    if (ninja.seeder.seedCount <= ninja.seeder.seedLimit) {
        viewNewSeed()
        return;
    }
    }
    
        
    
                // <![CDATA[
                var colour="#000000";
                var sparkles=20;
                
                /****************************
                *  Tinkerbell Magic Sparkle *
                * (c) 2005 mf2fm web-design *
                *  http://www.mf2fm.com/rv  *
                * DON'T EDIT BELOW THIS BOX *
                ****************************/
                var x=ox=40;
                var y=oy=30;
                var swide=80;
                var shigh=60;
                var sleft=sdown=0;
                var tiny=new Array();
                var star=new Array();
                var starv=new Array();
                var starx=new Array();
                var stary=new Array();
                var tinyx=new Array();
                var tinyy=new Array();
                var tinyv=new Array();
                
                switchCursor =function() { if (document.getElementById) {
                  var i, rats, rlef, rdow;
                  for (var i=0; i<sparkles; i++) {
                    var rats=createDiv(3, 3);
                    rats.style.visibility="hidden";
                    main.appendChild(tiny[i]=rats);
                    starv[i]=0;
                    tinyv[i]=0;
                    var rats=createDiv(5, 5);
                    rats.style.backgroundColor="transparent";
                    rats.style.visibility="hidden";
                    var rlef=createDiv(1, 5);
                    var rdow=createDiv(5, 1);
                    rats.appendChild(rlef);
                    rats.appendChild(rdow);
                    rlef.style.top="2px";
                    rlef.style.left="0px";
                    rdow.style.top="0px";
                    rdow.style.left="2px";
                    document.body.appendChild(star[i]=rats);
                  }
                  set_width();
                  sparkle();
                }}
                
                function sparkle() {
                  var c;
                  if (x!=ox || y!=oy) {
                    ox=x;
                    oy=y;
                    for (c=0; c<sparkles; c++) if (!starv[c]) {
                      star[c].style.left=(starx[c]=x)+"px";
                      star[c].style.top=(stary[c]=y)+"px";
                      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
                      star[c].style.visibility="visible";
                      starv[c]=50;
                      break;
                    }
                  }
                  for (c=0; c<sparkles; c++) {
                    if (starv[c]) update_star(c);
                    if (tinyv[c]) update_tiny(c);
                  }
                  setTimeout("sparkle()", 100);
                }
                
                function update_star(i) {
                  if (--starv[i]==15) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
                  if (starv[i]) {
                    stary[i]+=1+Math.random()*1;
                    if (stary[i]<shigh+sdown) {
                      star[i].style.top=stary[i]+"px";
                      starx[i]+=(i%5-2)/5;
                      star[i].style.left=starx[i]+"px";
                    }
                    else {
                      star[i].style.visibility="hidden";
                      starv[i]=0;
                      return;
                    }
                  }
                  else {
                    tinyv[i]=25;
                    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
                    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
                    tiny[i].style.width="2px";
                    tiny[i].style.height="2px";
                    star[i].style.visibility="hidden";
                    tiny[i].style.visibility="visible"
                  }
                }
                
                function update_tiny(i) {
                  if (--tinyv[i]==15) {
                    tiny[i].style.width="1px";
                    tiny[i].style.height="1px";
                  }
                  if (tinyv[i]) {
                    tinyy[i]+=1+Math.random()*1;
                    if (tinyy[i]<shigh+sdown) {
                      tiny[i].style.top=tinyy[i]+"px";
                      tinyx[i]+=(i%5-2)/5;
                      tiny[i].style.left=tinyx[i]+"px";
                    }
                    else {
                      tiny[i].style.visibility="hidden";
                      tinyv[i]=0;
                      return;
                    }
                  }
                  else tiny[i].style.visibility="hidden";
                }
                
                main.onmousemove=mouse;
                function mouse(e) {
                  set_scroll();
                  y=(e)?e.pageY:event.y+sdown;
                  x=(e)?e.pageX:event.x+sleft;
                }
                
                function set_scroll() {
                  if (typeof(self.pageYOffset)=="number") {
                    sdown=self.pageYOffset;
                    sleft=self.pageXOffset;
                  }
                  else if (document.body.scrollTop || document.body.scrollLeft) {
                    sdown=document.body.scrollTop;
                    sleft=document.body.scrollLeft;
                  }
                  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
                    sleft=document.documentElement.scrollLeft;
                    sdown=document.documentElement.scrollTop;
                  }
                  else {
                    sdown=0;
                    sleft=0;
                  }
                }
                
                window.onresize=set_width;
                function set_width() {
                  if (typeof(self.innerWidth)=="number") {
                    swide=self.innerWidth;
                    shigh=self.innerHeight;
                  }
                  else if (document.documentElement && document.documentElement.clientWidth) {
                    swide=document.documentElement.clientWidth;
                    shigh=document.documentElement.clientHeight;
                  }
                  else if (document.body.clientWidth) {
                    swide=document.body.clientWidth;
                    shigh=document.body.clientHeight;
                  }
                }
                
                function createDiv(height, width) {
                  var div=document.createElement("div");
                  div.style.position="absolute";
                  div.style.height=height+"px";
                  div.style.width=width+"px";
                  div.style.overflow="hidden";
                  div.style.backgroundColor=colour;
                  return (div);
                }
                // ]]>