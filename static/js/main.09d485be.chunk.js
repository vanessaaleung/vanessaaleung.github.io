(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(1),o=a(2),s=a(3),l=a(4),c=a(0),i=a.n(c),u=a(6),m=a.n(u);a(14);function h(e){return i.a.createElement("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.bgColor}},e.value)}var d=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).createBoard=function(){for(var e=[],t=0;t<3;t++){for(var a=[],n=3*t;n<3*t+3;n++)a.push(this.renderSquare(n));e.push(i.a.createElement("div",{key:t},a))}return e},e}return Object(o.a)(a,[{key:"renderSquare",value:function(e){var t=this;return i.a.createElement(h,{key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},bgColor:this.props.bgColor[e]})}},{key:"render",value:function(){return i.a.createElement("div",null,this.createBoard())}}]),a}(i.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null),bgColor:Array(9).fill("transparent"),row:0,column:0}],stepNumber:0,xIsNext:!0,descending:!1},n}return Object(o.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1],n=a.squares.slice(),r=a.bgColor,o=Math.floor(e/3+1),s=Math.floor(e%3+1);v(n,r)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,bgColor:r,row:o,col:s}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,descending:!1}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleSort",value:function(){this.setState((function(e){return{descending:!e.descending}}))}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=v(n.squares,n.bgColor),o=a.map((function(e,n){var o=n?"Go to move #"+n:"Go to game start",s=0!==n?" ("+[a[n].row,a[n].col].toString()+")":null;return i.a.createElement("li",{key:n},n===t.state.stepNumber?i.a.createElement("button",{class:"moveBtn",onClick:function(){r||t.jumpTo(n)}},i.a.createElement("b",null,o,s)):i.a.createElement("button",{class:"moveBtn",onClick:function(){r||t.jumpTo(n)}},o,s))}));return e=r&&"Draw"!==r?"Winner: "+r:"Draw"===r?"Draw":"Next player: "+(this.state.xIsNext?"X":"O"),i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-name"},i.a.createElement("h1",null,"Tic-Tac-Toe")),i.a.createElement("div",{className:"game-content"},i.a.createElement("div",{className:"game-board"},i.a.createElement(d,{squares:n.squares,onClick:function(e){return t.handleClick(e)},bgColor:n.bgColor})),i.a.createElement("div",{className:"game-info"},i.a.createElement("div",null,e),i.a.createElement("button",{className:"sortBtn",onClick:function(){return t.handleSort()}},"SORT MOVES"),i.a.createElement("ol",null,this.state.descending?o.reverse():o))))}}]),a}(i.a.Component);function v(e,t){for(var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0,o=0;o<a.length;o++){var s=Object(n.a)(a[o],3),l=s[0],c=s[1],i=s[2];if(e[l]&&e[l]===e[c]&&e[l]===e[i])return t[l]=t[c]=t[i]="#ffd31d",e[l];e[l]&&e[c]&&e[i]&&(r+=1)}return 8===r?"Draw":null}m.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.09d485be.chunk.js.map