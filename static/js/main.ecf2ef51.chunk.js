(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/rules.3ebd6071.gif"},101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),s=a.n(o),c=(a(67),a(5)),i=a(6),l=a(8),p=a(7),u=a(34),h=a(35),m=a(23),v=a(22),d=(a(68),a(69),a(70),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).getStyle=function(){var t=e.props.player;return 1===e.props.canMove&&(t+=" canMove"),t},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:this.getStyle()},n.a.createElement("div",{className:"amount"},this.props.count))}}]),a}(r.Component)),y=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).calculateScore=function(){var t=0,a=0;return e.props.points.map((function(e,r){return e.player&&(1===e.player?t+=(24-r)*e.checkers:a+=(r+1)*e.checkers),!1})),e.props.jail.player1&&(t+=25*e.props.jail.player1),e.props.jail.player2&&(a+=25*e.props.jail.player2),{P1:t,P2:a}},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"statusBar"},n.a.createElement("div",{className:"mainHeader"},n.a.createElement("div",{className:"barPlayerStatus"},n.a.createElement("div",{className:"barPlayerTitle"},"Player 1"),n.a.createElement("div",{className:"barChecker"},n.a.createElement(d,{player:"player1"})),n.a.createElement("div",{className:"barPoints"},this.calculateScore().P1)),n.a.createElement("div",{className:"barTitle"},n.a.createElement("span",null,"Game Bar")),n.a.createElement("div",{className:"barPlayerStatus"},n.a.createElement("div",{className:"barPlayerTitle"},"Player 2"),n.a.createElement("div",{className:"barChecker"},n.a.createElement(d,{player:"player2"})),n.a.createElement("div",{className:"barPoints"},this.calculateScore().P2))))}}]),a}(r.Component),f=(a(71),a(72),function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).attributes=function(){var t,a="checkersPlace "+e.props.down,r=null;return e.props.canMove&&(a+=" moveable",r=e.props.canMove),e.props.canReceive&&(a+=" reciveable",r=e.props.canReceive,t="up"===e.props.dir?"UpRecieve":"BottomRecieve"),{stl:a,action:r,panelCanRecieve:t}},e.playAudio=function(){var t=new Audio;t.src=a(73),t.volume=e.props.volume,t.play()},e.actions=function(){e.playAudio(),e.attributes().action&&e.attributes().action()},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:this.props.color+"Left"+this.props.dir+" left"+this.attributes().panelCanRecieve,onClick:function(){e.actions()}}),n.a.createElement("div",{className:this.props.color+"Right"+this.props.dir+" right"+this.attributes().panelCanRecieve,onClick:function(){e.actions()}}),n.a.createElement("div",{className:this.attributes().stl,onClick:function(){e.actions()}},this.props.children))}}]),r}(r.Component)),b=(a(74),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).getStyle=function(){var t=e.props.player;return 1===e.props.canMove&&(t+=" canMove"),t},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:this.getStyle()})}}]),a}(r.Component)),g=function(e,t,a,r){if(0!==t){var o=[];if(2===a)for(var s=0;s<t;s++)o.push(n.a.createElement(b,{player:e,key:s}));else for(var c=t>5?5:t,i=0;i<c;i++)o.push(n.a.createElement(d,{player:e,key:i}));return t>5&&2!==a&&(o[o.length-1]=n.a.createElement(d,{player:e,count:t,key:5})),r&&(o[0]=n.a.createElement(d,{player:e,canMove:1})),o}return null},k=(a(75),a(76),function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(c.a)(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={dots:Array(9).fill(null)},e.fillDots=function(){var t=e.state.dots;switch(e.props.number){case 1:t[4]=!0;break;case 2:t[0]=!0,t[8]=!0;break;case 3:t[0]=!0,t[4]=!0,t[8]=!0;break;case 4:t[0]=!0,t[2]=!0,t[6]=!0,t[8]=!0;break;case 5:t[0]=!0,t[2]=!0,t[4]=!0,t[6]=!0,t[8]=!0;break;case 6:t[0]=!0,t[2]=!0,t[3]=!0,t[5]=!0,t[6]=!0,t[8]=!0}},e.displayDots=function(){return e.fillDots(),e.state.dots.map((function(e){return!0===e?n.a.createElement("div",{className:"dot",key:1e7*Math.random()}):n.a.createElement("div",{key:1e7*Math.random()})}))},e.playAudio=function(){var t=new Audio;t.src=a(77),t.volume=e.props.volume,t.play()},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.playAudio()}},{key:"render",value:function(){return n.a.createElement("div",{className:"dice"},this.displayDots())}}]),r}(r.Component)),E=(a(78),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"done",onClick:this.props.changePlayer},n.a.createElement("h6",{className:"doneText"},"Done"))}}]),a}(r.Component)),N=a(52),j=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return!0===this.props.playerdone?n.a.createElement("div",{className:"rollarea"},n.a.createElement("button",{className:"button",onClick:this.props.rolldices},"Roll Dices")):0!==this.props.dices[0]?n.a.createElement("div",{className:"rollarea"},n.a.createElement(k,{number:this.props.dices[0],volume:this.props.volume}),n.a.createElement(k,{number:this.props.dices[1],volume:this.props.volume})):0===this.props.dices[0]?n.a.createElement(N.Bounce,{botton:!0,duration:1500,distance:"20px"},n.a.createElement(E,{changePlayer:this.props.changePlayer})):void 0}}]),a}(r.Component),M=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"board"},n.a.createElement("div",{className:"boardUp"},n.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[12].canMove,canReceive:this.props.points[12].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[12].player,this.props.points[12].checkers,1,this.props.points[12].canMove)),n.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[13].canMove,canReceive:this.props.points[13].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[13].player,this.props.points[13].checkers,1,this.props.points[13].canMove)),n.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[14].canMove,canReceive:this.props.points[14].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[14].player,this.props.points[14].checkers,1,this.props.points[14].canMove)),n.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[15].canMove,canReceive:this.props.points[15].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[15].player,this.props.points[15].checkers,1,this.props.points[15].canMove)),n.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[16].canMove,canReceive:this.props.points[16].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[16].player,this.props.points[16].checkers,1,this.props.points[16].canMove)),n.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[17].canMove,canReceive:this.props.points[17].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[17].player,this.props.points[17].checkers,1,this.props.points[17].canMove)),n.a.createElement("div",{className:"jailUp"}," ",g("player1",this.props.jail.player1,1)),n.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[18].canMove,canReceive:this.props.points[18].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[18].player,this.props.points[18].checkers,1,this.props.points[18].canMove)),n.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[19].canMove,canReceive:this.props.points[19].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[19].player,this.props.points[19].checkers,1,this.props.points[19].canMove)),n.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[20].canMove,canReceive:this.props.points[20].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[20].player,this.props.points[20].checkers,1,this.props.points[20].canMove)),n.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[21].canMove,canReceive:this.props.points[21].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[21].player,this.props.points[21].checkers,1,this.props.points[21].canMove)),n.a.createElement(f,{color:"black",dir:"up",className:"panel",canMove:this.props.points[22].canMove,canReceive:this.props.points[22].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[22].player,this.props.points[22].checkers,1,this.props.points[22].canMove)),n.a.createElement(f,{color:"white",dir:"up",className:"panel",canMove:this.props.points[23].canMove,canReceive:this.props.points[23].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[23].player,this.props.points[23].checkers,1,this.props.points[23].canMove))),n.a.createElement("span",{className:"rollingInTheDeep"},n.a.createElement(j,{gameStatus:this.props.gameStatus,dices:this.props.dices,rolldices:this.props.rolldices,p1IsNext:this.props.p1IsNext,volume:this.props.volume,playerdone:this.props.playerdone,changePlayer:this.props.changePlayer})),n.a.createElement("div",{className:"boardbottom"},n.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[11].canMove,canReceive:this.props.points[11].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[11].player,this.props.points[11].checkers,1,this.props.points[11].canMove)),n.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[10].canMove,canReceive:this.props.points[10].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[10].player,this.props.points[10].checkers,1,this.props.points[10].canMove)),n.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[9].canMove,canReceive:this.props.points[9].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[9].player,this.props.points[9].checkers,1,this.props.points[9].canMove)),n.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[8].canMove,canReceive:this.props.points[8].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[8].player,this.props.points[8].checkers,1,this.props.points[8].canMove)),n.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[7].canMove,canReceive:this.props.points[7].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[7].player,this.props.points[7].checkers,1,this.props.points[7].canMove)),n.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[6].canMove,canReceive:this.props.points[6].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[6].player,this.props.points[6].checkers,1,this.props.points[6].canMove)),n.a.createElement("div",{className:"jailDown"}," ",g("player2",this.props.jail.player2,1)),n.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[5].canMove,canReceive:this.props.points[5].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[5].player,this.props.points[5].checkers,1,this.props.points[5].canMove)),n.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[4].canMove,canReceive:this.props.points[4].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[4].player,this.props.points[4].checkers,1,this.props.points[4].canMove)),n.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[3].canMove,canReceive:this.props.points[3].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[3].player,this.props.points[3].checkers,1,this.props.points[3].canMove)),n.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[2].canMove,canReceive:this.props.points[2].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[2].player,this.props.points[2].checkers,1,this.props.points[2].canMove)),n.a.createElement(f,{color:"black",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[1].canMove,canReceive:this.props.points[1].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[1].player,this.props.points[1].checkers,1,this.props.points[1].canMove)),n.a.createElement(f,{color:"white",dir:"bottom",className:"panel",down:"down",canMove:this.props.points[0].canMove,canReceive:this.props.points[0].canReceive,volume:this.props.volume}," ",g("player"+this.props.points[0].player,this.props.points[0].checkers,1,this.props.points[0].canMove))))}}]),a}(r.Component),O=(a(90),function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).attributes=function(){var t="outup ",a="outbottom ",r=null,n=null;return e.props.out.p1CanReceive&&(t+=" recieveableOut",r=e.props.out.p1CanReceive),e.props.out.p2CanReceive&&(a+=" recieveableOut",n=e.props.out.p2CanReceive),{classnamep1:t,actionP1:r,classnamep2:a,actionP2:n}},e.playAudio=function(){var t=new Audio;t.src=a(91),t.volume=e.props.volume,t.play()},e.actions=function(){e.attributes().actionP1&&(e.attributes().actionP1(),e.playAudio()),e.attributes().actionP2&&(e.attributes().actionP2(),e.playAudio())},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"outcheckers"},n.a.createElement("div",{className:this.attributes().classnamep1,onClick:function(){e.actions()}},n.a.createElement("h1",null,"Player 1"),g("player1out",this.props.out.player1,2)),n.a.createElement("div",{className:"undo",onClick:this.props.undo}," Undo "),n.a.createElement("div",{className:this.attributes().classnamep2,onClick:function(){e.actions()}},n.a.createElement("h1",null,"Player 2"),g("player2out",this.props.out.player2,2)))}}]),r}(r.Component)),w=(a(92),a(53)),C=a.n(w),P=a(54),R=a.n(P),S=function(){var e=R()(),t=e.width,a=e.height;return n.a.createElement(C.a,{width:t,height:a+150,numberOfPieces:500})},x=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(c.a)(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).message=function(){return 80===e.props.gameStatus?"Welcome buddy  !":60===e.props.gameStatus?n.a.createElement("div",null," Player 1 ",n.a.createElement("br",null),"Is The ",n.a.createElement("br",null)," Winner "):n.a.createElement("div",null," Player 2 ",n.a.createElement("br",null),"Is The ",n.a.createElement("br",null)," Winner ")},e.playAudio=function(){var t=new Audio;t.src=a(98),t.volume=e.props.volume,t.play()},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){80!==this.props.gameStatus&&this.playAudio()}},{key:"render",value:function(){return 80===this.props.gameStatus?n.a.createElement("div",{className:"newGame"},n.a.createElement("div",{className:"content"},this.message()),n.a.createElement("div",{className:"startNewGame",onClick:this.props.setupNewGameHandler},"Click here to start new game")):n.a.createElement(n.a.Fragment,null,n.a.createElement(S,null),n.a.createElement("div",{className:"winner"},n.a.createElement("div",{className:"content"},this.message()),n.a.createElement("div",{className:"startNewGame",onClick:this.props.setupNewGameHandler},"Click here to start new game")))}}]),r}(r.Component),A=a(107),I=a(137),H=a(133),W=a(58),D=a(139),B=a(136),G=a(135),T=a(141),U=n.a.forwardRef((function(e,t){return n.a.createElement(T.a,Object.assign({direction:"up",ref:t},e))})),V=Object(H.a)((function(e){return{rules:{textAlign:"center",color:"red"},link:{textDecoration:"none",textAlign:"center",fontWeight:"bold",padding:"5px",color:"black","&:hover":{color:"red"},"&:visited":{color:"black"},"&:active":{color:"black"}},img:{width:"70%",height:"70%",borderRadius:"50%",margin:"auto"},agree:{fontWeight:"bold",color:"white",border:"#f4f4f4 2px solid",padding:"5px",backgroundColor:"#ccc"}}}));function z(){var e=n.a.useState(!1),t=Object(W.a)(e,2),r=t[0],o=t[1],s=function(){o(!1)},c=V();return n.a.createElement("div",null,n.a.createElement("div",{onClick:function(){o(!0)},alt:"Rules"},"Rules"),n.a.createElement(D.a,{open:r,TransitionComponent:U,keepMounted:!0,onClose:s,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},n.a.createElement("h2",{className:c.rules},"Rules !"),n.a.createElement(G.a,null,n.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Backgammon",target:"blank",className:c.link}," Click here to go to backgamon rules on Wikipedia, I'm lazy :)")),n.a.createElement("img",{src:a(100),alt:"Rules",className:c.img}),n.a.createElement(B.a,null,n.a.createElement(A.a,{onClick:s},n.a.createElement("div",{className:c.agree},"Agree")))))}var J=Object(H.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}},buttons:{color:"brown",fontWeight:"bold",textDecoration:"none"},link:{textDecoration:"none",color:"brown",fontWeight:"bold"}}}));function L(){var e=J();return n.a.createElement("div",{className:e.root},n.a.createElement(I.a,{variant:"text","aria-label":"text primary button group",size:"large"},n.a.createElement(A.a,{className:e.buttons},"   ",n.a.createElement("a",{className:e.link,href:"https://yossishemi.github.io/backgammonWeb/#/"}," HomePage")," "),n.a.createElement(A.a,{className:e.buttons}," ",n.a.createElement(z,null)," ")))}a(101);var F=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).getGameStatus=function(){var t=e.props.p1IsNext?"Player 1 turn":"Player 2 turn";if(80===e.props.gameStatus&&(t="Welcome!"),60!==e.props.gameStatus&&70!==e.props.gameStatus||(t=60===e.props.gameStatus?"Player 1 Win !!!":"Player 2 Win !!!"),50===e.props.gameStatus){var a=e.props.p1IsNext?"Player 2 roll the dices ":"Player 1 roll the dices";t="\xa0 No moves avaliable now! \xa0\xa0 Dices: (".concat(e.props.diceNoMove[0],",").concat(e.props.diceNoMove[1],") \xa0\xa0 ").concat(a)}return t},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"StatusPanel"},n.a.createElement("i",{class:"fas fa-dice"}),this.getGameStatus(),n.a.createElement("i",{class:"fas fa-dice"}))}}]),a}(r.Component),q=a(138),K=a(140),Q=a(57),X=a.n(Q),Y=a(56),Z=a.n(Y),$=(a(102),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={value:100},e.handleChange=function(t,a){e.setState({value:a}),e.props.changeVolume(parseInt(e.state.value/10)/10),console.log("volume: "+parseInt(e.state.value/10)/10)},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"SoundController"},n.a.createElement("div",{className:"effectsTitle"},"  Effects"),n.a.createElement(q.a,{container:!0,spacing:2,style:{marginLeft:"10px"}},n.a.createElement(q.a,{item:!0},n.a.createElement(Z.a,null)),n.a.createElement(q.a,{item:!0,xs:!0},n.a.createElement(K.a,{value:this.state.value,onChange:this.handleChange,"aria-labelledby":"continuous-slider",orientation:"vertical",style:{height:"150px"}})),n.a.createElement(q.a,{item:!0},n.a.createElement(X.a,null))))}}]),a}(r.Component)),_=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={gameStatus:80,history:[],currentPosition:0,p1IsNext:!0,dice:[0],diceSave:[0],diceNoMove:[0],points:Array(24).fill({player:!1,checkers:0}),jail:{player1:0,player2:0},outcheckers:{player1:15,player2:15},movingChecker:!1,players:{p1:"Player 1",p2:"Player 2"},gameOver:!0,volume:1,playerdone:!0},e.getGameStatus=function(){switch(e.state.gameStatus){case 11:return"New game";case 20:return"Roll dice";case 30:return"Playing";case 31:return"Playing from jail";case 32:return"Bearing off";case 40:return"No die to play";case 50:return"No moves available";case 60:return"Player 1 wins";case 70:return"Player 2 wins";case 80:return"Not started";default:return e.state.gameStatus}},e.getPlayer=function(e){return e?1:2},e.getPointsWithoutActions=function(e){return e.map((function(e){return{player:e.player,checkers:e.checkers}}))},e.getoutcheckersWithoutActions=function(e){return{player1:e.player1,player2:e.player2}},e.getMovingChecker=function(t){return!1!==e.state.movingChecker?e.state.movingChecker:t?-1:24},e.setHistory=function(e,t,a,r,n,o){return{p1IsNext:e,dice:Object(m.a)(t),points:Object(m.a)(a),jail:Object(h.a)({},r),outcheckers:Object(h.a)({},n),gameStatus:o}},e.checkHomeBoard=function(e,t){var a=!0;return e.map((function(e,r){return(t&&r<=17&&1===e.player||!t&&r>=6&&2===e.player)&&(a=!1),null})),a},e.checkCanBearOff=function(t,a,r,n){var o=!1;if(a>=0&&a<24&&t[a].player===e.getPlayer(r)){var s,c=Object(u.a)(n);try{for(c.s();!(s=c.n()).done;){var i=s.value;(r&&a+i===24||!r&&a-i===-1)&&(o=i)}}catch(d){c.e(d)}finally{c.f()}if(!o){var l=Object(m.a)(n).sort().reverse()[0],p=!1;if(r&&a+l>24||!r&&a-l<-1){if(r)for(var h=18;h<a;h++)t[h].player&&t[h].player===e.getPlayer(r)&&(p=!0);else for(var v=5;v>a;v--)t[v].player&&t[v].player===e.getPlayer(r)&&(p=!0);p||(o=l)}}}return o},e.undoHandler=function(){if(e.state.currentPosition>0){var t=Object(m.a)(e.state.history),a=e.state.currentPosition-1,r=t[a].p1IsNext,n=Object(m.a)(t[a].dice),o=Object(h.a)({},t[a].jail),s=Object(h.a)({},t[a].outcheckers),c=e.state.currentPosition;if(t[c].jail.player1<t[a].jail.player1||t[c].jail.player2<t[a].jail.player2)return void alert("Cannot move the checker back to the jail- obligated move !");var i=e.calculateCanMove(t[a].points,n,r,o),l=i.points,p=i.gameStatus;t.pop(),console.log("new history after Undo: "),console.log(t[t.length-1].points),e.setState({gameStatus:p,history:t,currentPosition:a,p1IsNext:r,dice:n,diceSave:e.state.diceNoMove,points:l,jail:o,outcheckers:s,movingChecker:!1,playerdone:!1})}},e.gameOver=function(){if(e.state.gameOver)return n.a.createElement(x,{gameStatus:e.state.gameStatus,setupNewGameHandler:e.setupNewGameHandler,volume:e.state.volume})},e.setupNewGameHandler=function(){var t=[],a=[0],r=Array(24).fill({player:!1,checkers:0}),n={player1:0,player2:0},o={player1:0,player2:0};t.push(e.setHistory(!0,a,e.getPointsWithoutActions(r),n,o)),r[0]={player:1,checkers:2},r[11]={player:1,checkers:5},r[16]={player:1,checkers:3},r[18]={player:1,checkers:5},r[23]={player:2,checkers:2},r[12]={player:2,checkers:5},r[7]={player:2,checkers:3},r[5]={player:2,checkers:5},e.setState({gameStatus:11,history:t,currentPosition:0,p1IsNext:!0,dice:a,diceSave:[0],points:r,jail:n,outcheckers:o,movingChecker:!1,players:{p1:"player1",p2:"player2"},gameOver:!1,playerdone:!0})},e.rollDiceHandler=function(){var t=e.state.p1IsNext,a=[],r=[];a.push(Math.floor(6*Math.random())+1),a.push(Math.floor(6*Math.random())+1),a[0]===a[1]&&(a[2]=a[3]=a[0]),r=[].concat(a);var n=[].concat(a);e.setState({diceNoMove:n}),console.log("Rolled dice: "+a);var o=e.calculateCanMove(e.getPointsWithoutActions(e.state.points),a,t,e.state.jail),s=o.points,c=o.gameStatus,i=[];i.push(e.setHistory(t,a,e.getPointsWithoutActions(s),e.state.jail,e.state.outcheckers,c)),50===c?(t=!t,a[0]=0,r[0]=0,e.setState({gameStatus:c,points:s,dice:a,diceSave:r,p1IsNext:t})):e.setState({gameStatus:c,history:i,currentPosition:0,points:s,dice:a,diceSave:r,p1IsNext:t,playerdone:!1})},e.calculateCanMove=function(t,a,r,n){console.log("calculateCanMove");var o=Object(m.a)(t),s=50;if(a[0])if(r&&n.player1||!r&&n.player2){var c,i=Object(u.a)(a);try{for(i.s();!(c=i.n()).done;){var l=c.value,p=r?l-1:24-l;(t[p].player===e.getPlayer(r)||t[p].checkers<2)&&(o[p].canReceive=e.receiveCheckerHandler.bind(Object(v.a)(e),l),s=31),e.setState({movingChecker:!1})}}catch(E){i.e(E)}finally{i.f()}}else for(var h=e.checkHomeBoard(o,r),d=0;d<t.length;d++){var y=!1;if(t[d].player===e.getPlayer(r)){var f,b=Object(u.a)(a);try{for(b.s();!(f=b.n()).done;){var g=f.value,k=r?d+g:d-g;!y&&k<24&&k>=0&&(t[k].player===e.getPlayer(r)||t[k].checkers<2)&&(y=!0,s=30)}}catch(E){b.e(E)}finally{b.f()}}h&&(r&&d>=18||!r&&d<=5)&&e.checkCanBearOff(t,d,r,a)&&(y=!0,s=32),y&&(o[d].canMove=e.moveCheckerHandler.bind(Object(v.a)(e),d))}else s=40;return console.log("Moving checker end of calc: "+e.state.movingChecker),{points:o,gameStatus:s}},e.moveCheckerHandler=function(t){var a=30,r=e.state.p1IsNext,n=e.getoutcheckersWithoutActions(e.state.outcheckers),o=e.getPointsWithoutActions(e.state.points),s=t!==e.state.movingChecker&&t;if(!1!==s){o[s].canMove=e.moveCheckerHandler.bind(Object(v.a)(e),s);var c,i=Object(u.a)(e.state.dice);try{for(i.s();!(c=i.n()).done;){var l=c.value,p=r?s+l:s-l;p<24&&p>=0&&(o[p].player===e.getPlayer(r)||o[p].checkers<2)&&(o[p].canReceive=e.receiveCheckerHandler.bind(Object(v.a)(e),l))}}catch(d){i.e(d)}finally{i.f()}if(e.checkHomeBoard(o,r)&&(r&&s>=18||!r&&s<=5)){console.log("Home board clean");var h=e.checkCanBearOff(o,s,r,e.state.dice);h&&(console.log("Can bear off"),r?n.p1CanReceive=e.receiveCheckerHandler.bind(Object(v.a)(e),h):n.p2CanReceive=e.receiveCheckerHandler.bind(Object(v.a)(e),h),a=32)}console.log("moving checker from point "+(r?s+1:24-s))}else{var m=e.calculateCanMove(o,e.state.dice,e.state.p1IsNext,e.state.jail);o=m.points,a=m.gameStatus}e.setState({gameStatus:a,points:o,movingChecker:s,outcheckers:n})},e.receiveCheckerHandler=function(t){console.log("receiveCheckerHandler ");var a=Object(h.a)({},e.state.jail),r=e.getoutcheckersWithoutActions(e.state.outcheckers),n=Object(m.a)(e.state.dice),o=e.state.p1IsNext,s=e.state.points,c=e.getMovingChecker(o),i=30,l=o?c+t:c-t;console.log("destination: "+l+" movingCgckers: "+c),l>23||l<0?console.log("Bearing off Checker"):console.log("Moving checker to point "+(o?l:24-l)),c>=0&&c<=23&&s[c]?(s[c].checkers--,0===s[c].checkers&&(s[c].player=!1)):-1===c?a.player1--:24===c&&a.player2--,l<=23&&l>=0?(s[l].player===e.getPlayer(o)||!1===s[l].player?(s[l].player=e.getPlayer(o),s[l].checkers++):o?a.player2++:a.player1++,s[l].player=e.getPlayer(o)):o?r.player1++:r.player2++,c=!1;var p=n.findIndex((function(e){return e===t}));n.splice(p,1),console.log("Played die "+t);var v,d=Object(u.a)(s);try{for(d.s();!(v=d.n()).done;){var y=v.value;y.canReceive=!1,y.canMove=!1}}catch(k){d.e(k)}finally{d.f()}var f=e.calculateCanMove(s,n,o,a);s=f.points,50===(i=f.gameStatus)&&(n[0]=0,o=!o,e.setState({diceSave:[0],playerdone:!0})),0===n.length&&(n[0]=0,e.setState({diceSave:[0]}));var b=e.state.currentPosition+1,g=Object(m.a)(e.state.history);g.push(e.setHistory(o,n,e.getPointsWithoutActions(s),a,r)),15===r.player1?(i=60,e.setState({gameOver:!0})):15===r.player2&&(i=70,e.setState({gameOver:!0})),e.setState({gameStatus:i,history:g,currentPosition:b,p1IsNext:o,dice:n,points:s,jail:a,outcheckers:r,movingChecker:!1})},e.changeVolume=function(t){e.setState({volume:t})},e.changePlayer=function(){console.log("Done"),e.setState({dice:[0],diceSave:[0],p1IsNext:!e.state.p1IsNext,playerdone:!0,currentPosition:0})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement(y,{points:this.state.points,jail:this.state.jail,gameStatus:this.state.gameStatus,p1IsNext:this.state.p1IsNext}),n.a.createElement(L,null),n.a.createElement("div",null,n.a.createElement(F,{gameStatus:this.state.gameStatus,p1IsNext:this.state.p1IsNext,diceNoMove:this.state.diceNoMove}),n.a.createElement("div",{className:"gamezone"},n.a.createElement($,{changeVolume:this.changeVolume}),n.a.createElement(M,{points:this.state.points,jail:this.state.jail,gameStatus:this.state.gameStatus,dices:this.state.diceSave,rolldices:this.rollDiceHandler,p1IsNext:this.state.p1IsNext,volume:this.state.volume,playerdone:this.state.playerdone,changePlayer:this.changePlayer}),n.a.createElement(O,{out:this.state.outcheckers,undo:this.undoHandler,volume:this.state.volume}))),this.gameOver())}}]),a}(r.Component),ee=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(_,null))}}]),a}(r.Component);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ee,null)),document.getElementById("root"))},62:function(e,t,a){e.exports=a(104)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){e.exports=a.p+"static/media/panel.dec50ff3.mp3"},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/dice.afd53a36.mp3"},78:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/outcheckers.e3b896ba.mp3"},92:function(e,t,a){},98:function(e,t,a){e.exports=a.p+"static/media/winner.1768de81.mp3"}},[[62,1,2]]]);
//# sourceMappingURL=main.ecf2ef51.chunk.js.map