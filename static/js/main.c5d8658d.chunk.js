(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{52:function(e,t,a){e.exports=a(82)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/panel.dec50ff3.mp3"},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/dice.afd53a36.mp3"},68:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/outcheckers.e3b896ba.mp3"},70:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/winner.1768de81.mp3"},80:function(e,t,a){e.exports=a.p+"static/media/rules.3ebd6071.gif"},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),c=(a(57),a(4)),i=a(5),p=a(7),l=a(6),u=a(29),h=a(30),m=a(19),v=a(18),d=(a(58),a(59),a(60),function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){var t=e.props.player;return 1===e.props.canMove&&(t+=" canMove"),t},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.getStyle()},r.a.createElement("div",{className:"amount"},this.props.count))}}]),a}(n.Component)),y=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).calculateScore=function(){var t=0,a=0;return e.props.points.map((function(e,n){return e.player&&(1===e.player?t+=(24-n)*e.checkers:a+=(n+1)*e.checkers),!1})),e.props.jail.player1&&(t+=25*e.props.jail.player1),e.props.jail.player2&&(a+=25*e.props.jail.player2),{P1:t,P2:a}},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"statusBar"},r.a.createElement("div",{className:"mainHeader"},r.a.createElement("div",{className:"barPlayerStatus"},r.a.createElement("div",{className:"barPlayerTitle"},"Player 1"),r.a.createElement("div",{className:"barChecker"},r.a.createElement(d,{player:"player1"})),r.a.createElement("div",{className:"barPoints"},this.calculateScore().P1)),r.a.createElement("div",{className:"barTitle"},r.a.createElement("span",null,"Game Bar")),r.a.createElement("div",{className:"barPlayerStatus"},r.a.createElement("div",{className:"barPlayerTitle"},"Player 2"),r.a.createElement("div",{className:"barChecker"},r.a.createElement(d,{player:"player2"})),r.a.createElement("div",{className:"barPoints"},this.calculateScore().P2))))}}]),a}(n.Component),f=(a(61),a(62),function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).attributes=function(){var t,a="checkersPlace "+e.props.down,n=null;return e.props.canMove&&(a+=" moveable",n=e.props.canMove),e.props.canReceive&&(a+=" reciveable",n=e.props.canReceive,t="up"===e.props.dir?"UpRecieve":"BottomRecieve"),{stl:a,action:n,panelCanRecieve:t}},e.playAudio=function(){document.getElementsByClassName("panelSound")[0].play()},e.actions=function(){e.playAudio(),e.attributes().action&&e.attributes().action()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:this.props.color+"Left"+this.props.dir+" left"+this.attributes().panelCanRecieve,onClick:function(){e.actions()}}),r.a.createElement("div",{className:this.props.color+"Right"+this.props.dir+" right"+this.attributes().panelCanRecieve,onClick:function(){e.actions()}}),r.a.createElement("div",{className:this.attributes().stl,onClick:function(){e.actions()}},this.props.children),r.a.createElement("audio",{className:"panelSound"},r.a.createElement("source",{src:a(63)})))}}]),n}(n.Component)),b=(a(64),function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){var t=e.props.player;return 1===e.props.canMove&&(t+=" canMove"),t},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.getStyle()})}}]),a}(n.Component)),g=function(e,t,a,n){if(0!==t){var s=[];if(2===a)for(var o=0;o<t;o++)s.push(r.a.createElement(b,{player:e,key:o}));else for(var c=t>5?5:t,i=0;i<c;i++)s.push(r.a.createElement(d,{player:e,key:i}));return t>5&&2!==a&&(s[s.length-1]=r.a.createElement(d,{player:e,count:t,key:5})),n&&(s[0]=r.a.createElement(d,{player:e,canMove:1})),s}return null},k=(a(65),a(66),function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={dots:Array(9).fill(null)},e.fillDots=function(){var t=e.state.dots;switch(e.props.number){case 1:t[4]=!0;break;case 2:t[0]=!0,t[8]=!0;break;case 3:t[0]=!0,t[4]=!0,t[8]=!0;break;case 4:t[0]=!0,t[2]=!0,t[6]=!0,t[8]=!0;break;case 5:t[0]=!0,t[2]=!0,t[4]=!0,t[6]=!0,t[8]=!0;break;case 6:t[0]=!0,t[2]=!0,t[3]=!0,t[5]=!0,t[6]=!0,t[8]=!0}},e.displayDots=function(){return e.fillDots(),e.state.dots.map((function(e){return!0===e?r.a.createElement("div",{className:"dot",key:1e7*Math.random()}):r.a.createElement("div",{key:1e7*Math.random()})}))},e.playAudio=function(){document.getElementsByClassName("diceSound")[0].play()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.playAudio()}},{key:"render",value:function(){return r.a.createElement("div",{className:"dice"},this.displayDots(),r.a.createElement("audio",{className:"diceSound"},r.a.createElement("source",{src:a(67)})))}}]),n}(n.Component)),E=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return 0!==this.props.dices[0]?r.a.createElement("div",{className:"rollarea"},r.a.createElement(k,{number:this.props.dices[0]}),r.a.createElement(k,{number:this.props.dices[1]})):r.a.createElement("div",{className:"rollarea"},r.a.createElement("button",{className:"button",onClick:this.props.rolldices},"Roll Dices"))}}]),a}(n.Component),N=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"board"},r.a.createElement("div",{className:"boardUp"},r.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[12].canMove,canReceive:this.props.points[12].canReceive}," ",g("player"+this.props.points[12].player,this.props.points[12].checkers,1,this.props.points[12].canMove)),r.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[13].canMove,canReceive:this.props.points[13].canReceive}," ",g("player"+this.props.points[13].player,this.props.points[13].checkers,1,this.props.points[13].canMove)),r.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[14].canMove,canReceive:this.props.points[14].canReceive}," ",g("player"+this.props.points[14].player,this.props.points[14].checkers,1,this.props.points[14].canMove)),r.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[15].canMove,canReceive:this.props.points[15].canReceive}," ",g("player"+this.props.points[15].player,this.props.points[15].checkers,1,this.props.points[15].canMove)),r.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[16].canMove,canReceive:this.props.points[16].canReceive}," ",g("player"+this.props.points[16].player,this.props.points[16].checkers,1,this.props.points[16].canMove)),r.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[17].canMove,canReceive:this.props.points[17].canReceive}," ",g("player"+this.props.points[17].player,this.props.points[17].checkers,1,this.props.points[17].canMove)),r.a.createElement("div",{className:"jailUp"}," ",g("player1",this.props.jail.player1,1)),r.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[18].canMove,canReceive:this.props.points[18].canReceive}," ",g("player"+this.props.points[18].player,this.props.points[18].checkers,1,this.props.points[18].canMove)),r.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[19].canMove,canReceive:this.props.points[19].canReceive}," ",g("player"+this.props.points[19].player,this.props.points[19].checkers,1,this.props.points[19].canMove)),r.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[20].canMove,canReceive:this.props.points[20].canReceive}," ",g("player"+this.props.points[20].player,this.props.points[20].checkers,1,this.props.points[20].canMove)),r.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[21].canMove,canReceive:this.props.points[21].canReceive}," ",g("player"+this.props.points[21].player,this.props.points[21].checkers,1,this.props.points[21].canMove)),r.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[22].canMove,canReceive:this.props.points[22].canReceive}," ",g("player"+this.props.points[22].player,this.props.points[22].checkers,1,this.props.points[22].canMove)),r.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[23].canMove,canReceive:this.props.points[23].canReceive}," ",g("player"+this.props.points[23].player,this.props.points[23].checkers,1,this.props.points[23].canMove))),r.a.createElement("span",{className:"rollingInTheDeep"},r.a.createElement(E,{gameStatus:this.props.gameStatus,dices:this.props.dices,rolldices:this.props.rolldices,p1IsNext:this.props.p1IsNext})),r.a.createElement("div",{className:"boardbottom"},r.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[11].canMove,canReceive:this.props.points[11].canReceive}," ",g("player"+this.props.points[11].player,this.props.points[11].checkers,1,this.props.points[11].canMove)),r.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[10].canMove,canReceive:this.props.points[10].canReceive}," ",g("player"+this.props.points[10].player,this.props.points[10].checkers,1,this.props.points[10].canMove)),r.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[9].canMove,canReceive:this.props.points[9].canReceive}," ",g("player"+this.props.points[9].player,this.props.points[9].checkers,1,this.props.points[9].canMove)),r.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[8].canMove,canReceive:this.props.points[8].canReceive}," ",g("player"+this.props.points[8].player,this.props.points[8].checkers,1,this.props.points[8].canMove)),r.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[7].canMove,canReceive:this.props.points[7].canReceive}," ",g("player"+this.props.points[7].player,this.props.points[7].checkers,1,this.props.points[7].canMove)),r.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[6].canMove,canReceive:this.props.points[6].canReceive}," ",g("player"+this.props.points[6].player,this.props.points[6].checkers,1,this.props.points[6].canMove)),r.a.createElement("div",{className:"jailDown"}," ",g("player2",this.props.jail.player2,1)),r.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[5].canMove,canReceive:this.props.points[5].canReceive}," ",g("player"+this.props.points[5].player,this.props.points[5].checkers,1,this.props.points[5].canMove)),r.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[4].canMove,canReceive:this.props.points[4].canReceive}," ",g("player"+this.props.points[4].player,this.props.points[4].checkers,1,this.props.points[4].canMove)),r.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[3].canMove,canReceive:this.props.points[3].canReceive}," ",g("player"+this.props.points[3].player,this.props.points[3].checkers,1,this.props.points[3].canMove)),r.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[2].canMove,canReceive:this.props.points[2].canReceive}," ",g("player"+this.props.points[2].player,this.props.points[2].checkers,1,this.props.points[2].canMove)),r.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[1].canMove,canReceive:this.props.points[1].canReceive}," ",g("player"+this.props.points[1].player,this.props.points[1].checkers,1,this.props.points[1].canMove)),r.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[0].canMove,canReceive:this.props.points[0].canReceive}," ",g("player"+this.props.points[0].player,this.props.points[0].checkers,1,this.props.points[0].canMove))))}}]),a}(n.Component),M=(a(68),function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).attributes=function(){var t="outup ",a="outbottom ",n=null,r=null;return e.props.out.p1CanReceive&&(t+=" recieveableOut",n=e.props.out.p1CanReceive),e.props.out.p2CanReceive&&(a+=" recieveableOut",r=e.props.out.p2CanReceive),{classnamep1:t,actionP1:n,classnamep2:a,actionP2:r}},e.playAudio=function(){document.getElementsByClassName("outcheckersSound")[0].play()},e.actions=function(){e.attributes().actionP1&&(e.attributes().actionP1(),e.playAudio()),e.attributes().actionP2&&(e.attributes().actionP2(),e.playAudio())},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"outcheckers"},r.a.createElement("div",{className:this.attributes().classnamep1,onClick:function(){e.actions()}},r.a.createElement("h1",null,"Player 1"),g("player1out",this.props.out.player1,2)),r.a.createElement("div",{className:"undo",onClick:this.props.undo}," Undo "),r.a.createElement("div",{className:this.attributes().classnamep2,onClick:function(){e.actions()}},r.a.createElement("h1",null,"Player 2"),g("player2out",this.props.out.player2,2)),r.a.createElement("audio",{className:"outcheckersSound"},r.a.createElement("source",{src:a(69)})))}}]),n}(n.Component)),j=(a(70),a(46)),O=a.n(j),w=a(45),R=a.n(w),S=function(){var e=O()(),t=(e.width,e.height);return r.a.createElement(R.a,{width:1500,height:t,style:{overflow:"none"},numberOfPieces:500})},C=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).message=function(){return 80===e.props.gameStatus?"Welcome buddy  !":60===e.props.gameStatus?r.a.createElement("div",null," Player 1 ",r.a.createElement("br",null),"Is The ",r.a.createElement("br",null)," Winner "):r.a.createElement("div",null," Player 2 ",r.a.createElement("br",null),"Is The ",r.a.createElement("br",null)," Winner ")},e.playAudio=function(){document.getElementsByClassName("winnerSound")[0].play()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){80!==this.props.gameStatus&&this.playAudio()}},{key:"render",value:function(){return 80===this.props.gameStatus?r.a.createElement("div",{className:"newGame"},r.a.createElement("div",{className:"content"},this.message()),r.a.createElement("div",{className:"startNewGame",onClick:this.props.setupNewGameHandler},"Click here to start new game")):r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("div",{className:"winner"},r.a.createElement("div",{className:"content"},this.message()),r.a.createElement("div",{className:"startNewGame",onClick:this.props.setupNewGameHandler},"Click here to start new game"),r.a.createElement("audio",{className:"winnerSound"},r.a.createElement("source",{src:a(76)}))))}}]),n}(n.Component),P=a(84),x=a(111),A=a(107),I=a(48),H=a(112),W=a(110),B=a(109),D=a(113),G=r.a.forwardRef((function(e,t){return r.a.createElement(D.a,Object.assign({direction:"up",ref:t},e))})),T=Object(A.a)((function(e){return{rules:{textAlign:"center",color:"red"},link:{textDecoration:"none",textAlign:"center",fontWeight:"bold",padding:"5px",color:"black","&:hover":{color:"red"},"&:visited":{color:"black"},"&:active":{color:"black"}},img:{width:"70%",height:"70%",borderRadius:"50%",margin:"auto"},agree:{fontWeight:"bold",color:"white",border:"#f4f4f4 2px solid",padding:"5px",backgroundColor:"#ccc"}}}));function U(){var e=r.a.useState(!1),t=Object(I.a)(e,2),n=t[0],s=t[1],o=function(){s(!1)},c=T();return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){s(!0)},alt:"Rules"},"Rules"),r.a.createElement(H.a,{open:n,TransitionComponent:G,keepMounted:!0,onClose:o,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement("h2",{className:c.rules},"Rules !"),r.a.createElement(B.a,null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Backgammon",target:"blank",className:c.link}," Click here to go to backgamon rules on Wikipedia, I'm lazy :)")),r.a.createElement("img",{src:a(80),alt:"Rules",className:c.img}),r.a.createElement(W.a,null,r.a.createElement(P.a,{onClick:o},r.a.createElement("div",{className:c.agree},"Agree")))))}var z=Object(A.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}},buttons:{color:"brown",fontWeight:"bold",textDecoration:"none"},link:{textDecoration:"none",color:"brown",fontWeight:"bold"}}}));function J(){var e=z();return r.a.createElement("div",{className:e.root},r.a.createElement(x.a,{variant:"text","aria-label":"text primary button group",size:"large"},r.a.createElement(P.a,{className:e.buttons},"   ",r.a.createElement("a",{className:e.link,href:"https://yossishemi.github.io/backgammonWeb/#/"}," HomePage")," "),r.a.createElement(P.a,{className:e.buttons}," ",r.a.createElement(U,null)," ")))}a(81);var F=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getGameStatus=function(){var t=e.props.p1IsNext?"Player 1 turn":"Player 2 turn";if(80===e.props.gameStatus&&(t="Welcome!"),60!==e.props.gameStatus&&70!==e.props.gameStatus||(t=60===e.props.gameStatus?"Player 1 Win !!!":"Player 2 Win !!!"),50===e.props.gameStatus){var a=e.props.p1IsNext?"Player 2 turn":"Player 1 turn";t='No moves avaliable! --- Dices: (" '.concat(e.props.diceNoMove[0],", ").concat(e.props.diceNoMove[1],' ") --- ').concat(a)}return t},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"StatusPanel"},this.getGameStatus())}}]),a}(n.Component),L=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={gameStatus:80,history:[],currentPosition:0,p1IsNext:!0,dice:[0],diceSave:[0],diceNoMove:[0],points:Array(24).fill({player:!1,checkers:0}),jail:{player1:0,player2:0},outcheckers:{player1:15,player2:15},movingChecker:!1,players:{p1:"Player 1",p2:"Player 2"},gameOver:!0},e.getGameStatus=function(){switch(e.state.gameStatus){case 11:return"New game";case 20:return"Roll dice";case 30:return"Playing";case 31:return"Playing from jail";case 32:return"Bearing off";case 40:return"No die to play";case 50:return"No moves available";case 60:return"Player 1 wins";case 70:return"Player 2 wins";case 80:return"Not started";default:return e.state.gameStatus}},e.getPlayer=function(e){return e?1:2},e.getPointsWithoutActions=function(e){return e.map((function(e){return{player:e.player,checkers:e.checkers}}))},e.getoutcheckersWithoutActions=function(e){return{player1:e.player1,player2:e.player2}},e.getMovingChecker=function(t){return!1!==e.state.movingChecker?e.state.movingChecker:t?-1:24},e.setHistory=function(e,t,a,n,r,s){return{p1IsNext:e,dice:Object(m.a)(t),points:Object(m.a)(a),jail:Object(h.a)({},n),outcheckers:Object(h.a)({},r),gameStatus:s}},e.checkHomeBoard=function(e,t){var a=!0;return e.map((function(e,n){return(t&&n<=17&&1===e.player||!t&&n>=6&&2===e.player)&&(a=!1),null})),a},e.checkCanBearOff=function(t,a,n,r){var s=!1;if(a>=0&&a<24&&t[a].player===e.getPlayer(n)){var o,c=Object(u.a)(r);try{for(c.s();!(o=c.n()).done;){var i=o.value;(n&&a+i===24||!n&&a-i===-1)&&(s=i)}}catch(d){c.e(d)}finally{c.f()}if(!s){var p=Object(m.a)(r).sort().reverse()[0],l=!1;if(n&&a+p>24||!n&&a-p<-1){if(n)for(var h=18;h<a;h++)t[h].player&&t[h].player===e.getPlayer(n)&&(l=!0);else for(var v=5;v>a;v--)t[v].player&&t[v].player===e.getPlayer(n)&&(l=!0);l||(s=p)}}}return s},e.undoHandler=function(){if(e.state.currentPosition>0){var t=Object(m.a)(e.state.history),a=e.state.currentPosition-1,n=t[a].p1IsNext,r=Object(m.a)(t[a].dice),s=Object(h.a)({},t[a].jail),o=Object(h.a)({},t[a].outcheckers);console.log("Undo last move");var c=e.calculateCanMove(e.state.history[a].points,r,n,s),i=c.points,p=c.gameStatus;t.pop(),e.setState({gameStatus:p,history:t,currentPosition:a,p1IsNext:n,dice:r,points:i,jail:s,outcheckers:o,movingChecker:!1})}},e.gameOver=function(){if(e.state.gameOver)return r.a.createElement(C,{gameStatus:e.state.gameStatus,setupNewGameHandler:e.setupNewGameHandler})},e.setupNewGameHandler=function(){var t=[],a=[0],n=Array(24).fill({player:!1,checkers:0}),r={player1:0,player2:0},s={player1:14,player2:14};t.push(e.setHistory(!0,a,n,r,s)),n[2]={player:2,checkers:1},n[20]={player:1,checkers:1},e.setState({gameStatus:11,history:t,currentPosition:0,p1IsNext:!0,dice:a,diceSave:[0],points:n,jail:r,outcheckers:s,movingChecker:!1,players:{p1:"player1",p2:"player2"},gameOver:!1})},e.rollDiceHandler=function(){var t=e.state.p1IsNext,a=[],n=[];a.push(Math.floor(6*Math.random())+1),a.push(Math.floor(6*Math.random())+1),a[0]===a[1]&&(a[2]=a[3]=a[0]),n=[].concat(a);var r=[].concat(a);e.setState({diceNoMove:r}),console.log("Rolled dice: "+a);var s=e.calculateCanMove(e.getPointsWithoutActions(e.state.points),a,t,e.state.jail),o=s.points,c=s.gameStatus,i=[];i.push(e.setHistory(t,a,o,e.state.jail,e.state.outcheckers,c)),50===c?(t=!t,a[0]=0,n[0]=0,e.setState({gameStatus:c,points:o,dice:a,diceSave:n,p1IsNext:t})):e.setState({gameStatus:c,history:i,currentPosition:0,points:o,dice:a,diceSave:n,p1IsNext:t})},e.calculateCanMove=function(t,a,n,r){var s=Object(m.a)(t),o=50;if(a[0])if(n&&r.player1||!n&&r.player2){var c,i=Object(u.a)(a);try{for(i.s();!(c=i.n()).done;){var p=c.value,l=n?p-1:24-p;(t[l].player===e.getPlayer(n)||t[l].checkers<2)&&(s[l].canReceive=e.receiveCheckerHandler.bind(Object(v.a)(e),p),o=31),e.setState({movingChecker:!1})}}catch(E){i.e(E)}finally{i.f()}}else for(var h=e.checkHomeBoard(s,n),d=0;d<t.length;d++){var y=!1;if(t[d].player===e.getPlayer(n)){var f,b=Object(u.a)(a);try{for(b.s();!(f=b.n()).done;){var g=f.value,k=n?d+g:d-g;!y&&k<24&&k>=0&&(t[k].player===e.getPlayer(n)||t[k].checkers<2)&&(y=!0,o=30)}}catch(E){b.e(E)}finally{b.f()}}h&&(n&&d>=18||!n&&d<=5)&&e.checkCanBearOff(t,d,n,a)&&(y=!0,o=32),y&&(s[d].canMove=e.moveCheckerHandler.bind(Object(v.a)(e),d))}else o=40;return{points:s,gameStatus:o}},e.moveCheckerHandler=function(t){var a=30,n=e.state.p1IsNext,r=e.getoutcheckersWithoutActions(e.state.outcheckers),s=e.getPointsWithoutActions(e.state.points),o=t!==e.state.movingChecker&&t;if(!1!==o){s[o].canMove=e.moveCheckerHandler.bind(Object(v.a)(e),o);var c,i=Object(u.a)(e.state.dice);try{for(i.s();!(c=i.n()).done;){var p=c.value,l=n?o+p:o-p;l<24&&l>=0&&(s[l].player===e.getPlayer(n)||s[l].checkers<2)&&(s[l].canReceive=e.receiveCheckerHandler.bind(Object(v.a)(e),p))}}catch(d){i.e(d)}finally{i.f()}if(e.checkHomeBoard(s,n)&&(n&&o>=18||!n&&o<=5)){console.log("Home board clean");var h=e.checkCanBearOff(s,o,n,e.state.dice);h&&(console.log("Can bear off"),n?r.p1CanReceive=e.receiveCheckerHandler.bind(Object(v.a)(e),h):r.p2CanReceive=e.receiveCheckerHandler.bind(Object(v.a)(e),h),a=32)}console.log("moving checker from point "+(n?o+1:24-o))}else{var m=e.calculateCanMove(s,e.state.dice,e.state.p1IsNext,e.state.jail);s=m.points,a=m.gameStatus}e.setState({gameStatus:a,points:s,movingChecker:o,outcheckers:r})},e.receiveCheckerHandler=function(t){var a=Object(h.a)({},e.state.jail),n=e.getoutcheckersWithoutActions(e.state.outcheckers),r=Object(m.a)(e.state.dice),s=e.state.p1IsNext,o=e.state.points,c=e.getMovingChecker(s),i=30,p=s?c+t:c-t;p>23||p<0?console.log("Bearing off Checker"):console.log("Moving checker to point "+(s?p+1:24-p)),c>=0&&c<=23&&o[c]?(o[c].checkers--,0===o[c].checkers&&(o[c].player=!1)):-1===c?a.player1--:24===c&&a.player2--,p<=23&&p>=0?(o[p].player===e.getPlayer(s)||!1===o[p].player?(o[p].player=e.getPlayer(s),o[p].checkers++):s?a.player2++:a.player1++,o[p].player=e.getPlayer(s)):s?n.player1++:n.player2++,c=!1;var l=r.findIndex((function(e){return e===t}));r.splice(l,1),console.log("Played die "+t);var v,d=Object(u.a)(o);try{for(d.s();!(v=d.n()).done;){var y=v.value;y.canReceive=!1,y.canMove=!1}}catch(k){d.e(k)}finally{d.f()}console.log("All false");var f=e.calculateCanMove(o,r,s,a);o=f.points,i=f.gameStatus,0!==r.length&&50!==i||(r[0]=0,s=!s,e.setState({diceSave:[0]}));var b=e.state.currentPosition+1,g=Object(m.a)(e.state.history);g.push(e.setHistory(s,r,o,a,n)),15===n.player1?(i=60,e.setState({gameOver:!0})):15===n.player2&&(i=70,e.setState({gameOver:!0})),e.setState({gameStatus:i,history:g,currentPosition:b,p1IsNext:s,dice:r,points:o,jail:a,outcheckers:n,movingChecker:null})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"game"},r.a.createElement(y,{points:this.state.points,jail:this.state.jail,gameStatus:this.state.gameStatus,p1IsNext:this.state.p1IsNext}),r.a.createElement(J,null),r.a.createElement("div",null,r.a.createElement(F,{gameStatus:this.state.gameStatus,p1IsNext:this.state.p1IsNext,diceNoMove:this.state.diceNoMove}),r.a.createElement("div",{className:"gamezone"},r.a.createElement(N,{points:this.state.points,jail:this.state.jail,gameStatus:this.state.gameStatus,dices:this.state.diceSave,rolldices:this.rollDiceHandler,p1IsNext:this.state.p1IsNext}),r.a.createElement(M,{out:this.state.outcheckers,undo:this.undoHandler}))),this.gameOver())}}]),a}(n.Component),q=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.c5d8658d.chunk.js.map