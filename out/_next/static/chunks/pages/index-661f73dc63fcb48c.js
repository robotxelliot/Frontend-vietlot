(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(23703)}])},37821:function(e,t,n){"use strict";var a=n(37917),s=n(63021);e.exports={contractAddresses:a,abi:s}},23703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(85893),s=n(9008),i=n.n(s),r=n(35801),o=n.n(r),u=n(41942);function c(){return(0,a.jsxs)("nav",{children:[(0,a.jsx)("h1",{className:"text-center bg-gray-300 text-white font-bold text-2xl py-4 mb-5",children:"Vietlot Decentralized - Admin: Blake Nguyen"}),(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("h2",{className:"py-2 ml-6 border-green-400",children:"So du tai khoan"}),(0,a.jsx)(u.cg,{moralisAuth:!1})]})]})}function p(e,t,n,a,s,i,r){try{var o=e[i](r),u=o.value}catch(c){n(c);return}o.done?t(u):Promise.resolve(u).then(a,s)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(a,s){var i=e.apply(t,n);function r(e){p(i,a,s,r,o,"next",e)}function o(e){p(i,a,s,r,o,"throw",e)}r(void 0)})}}var d=n(70655),y=n(37821),f=n(83078),m=n(67294),b=n(35553);function h(){var e=(0,f.Nr)(),t=e.isWeb3Enabled,n=parseInt(e.chainId),s=n in y.contractAddresses?y.contractAddresses[n][0]:null,i=(0,m.useState)("0"),r=i[0],o=i[1],c=(0,m.useState)("0"),p=c[0],h=c[1],_=(0,m.useState)("0"),x=_[0],g=_[1],v=(0,u.aa)(),N=(0,f.JX)({abi:y.abi,contractAddress:s,functionName:"enterVietlot",msgValue:r,params:{}}),w=N.runContractFunction,j=(N.data,N.isLoading),E=N.isFetching,C=(0,f.JX)({abi:y.abi,contractAddress:s,functionName:"getEntranceFee",params:{}}).runContractFunction,k=(0,f.JX)({abi:y.abi,contractAddress:s,functionName:"getNumberOfPlayers",params:{}}).runContractFunction,F=(0,f.JX)({abi:y.abi,contractAddress:s,functionName:"getRecentWinner",params:{}}).runContractFunction;function V(){return S.apply(this,arguments)}function S(){return(S=l(function(){var e,t,n;return(0,d.__generator)(this,function(a){switch(a.label){case 0:return[4,C()];case 1:return e=a.sent().toString(),[4,k()];case 2:return t=a.sent().toString(),[4,F()];case 3:return n=a.sent(),o(e),h(t),g(n),[2]}})})).apply(this,arguments)}(0,m.useEffect)(function(){t&&V()},[t]);var M,P=function(){v({type:"info",message:"Transaction Complete!",title:"Transaction Notification",position:"topR",icon:"bell"})},T=(M=l(function(e){var t;return(0,d.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e.wait(1)];case 1:return n.sent(),V(),P(e),[3,3];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}})}),function(e){return M.apply(this,arguments)});return(0,a.jsxs)("div",{className:"p-5",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-bold text-3xl",children:"Lottery"}),s?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto",onClick:l(function(){return(0,d.__generator)(this,function(e){switch(e.label){case 0:return[4,w({onSuccess:T,onError:function(e){return console.log(e)}})];case 1:return[2,e.sent()]}})}),disabled:j||E,children:j||E?(0,a.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):"Enter Vietlot"}),(0,a.jsxs)("div",{children:["Entrance Fee: ",b.bM(r,"ether")," ETH"]}),(0,a.jsxs)("div",{children:["The current number of players is: ",p]}),(0,a.jsxs)("div",{children:["The most previous winner was: ",x]})]}):(0,a.jsx)("div",{children:"Please connect to a supported chain "})]})}var _=["31337","5"];function x(){var e=(0,f.Nr)(),t=e.isWeb3Enabled,n=e.chainId;return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"Create Next App"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(c,{}),t?(0,a.jsx)("div",{children:_.includes(parseInt(n).toString())?(0,a.jsx)("div",{className:"flex flex-row",children:(0,a.jsx)(h,{className:"p-8"})}):(0,a.jsx)("div",{children:"Please switch to a supported chainId. The supported Chain Ids are: ".concat(_)})}):(0,a.jsx)("div",{children:"Please connect to a Wallet"})]})}},35801:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint64","name":"subscriptionId"},{"type":"bytes32","name":"gasLane"},{"type":"uint256","name":"interval"},{"type":"uint256","name":"entranceFee"},{"type":"uint32","name":"callbackGasLimit"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Vietlot__SendMoreToEnterVietlot","inputs":[]},{"type":"error","name":"Vietlot__TransferFailed","inputs":[]},{"type":"error","name":"Vietlot__UpkeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"numPlayers"},{"type":"uint256","name":"vietlotState"}]},{"type":"error","name":"Vietlot__VietlotNotOpen","inputs":[]},{"type":"event","anonymous":false,"name":"RequestedVietlotWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"event","anonymous":false,"name":"VietlotEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"WinnerPicked","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterVietlot","constant":false,"stateMutability":"payable","payable":true,"gas":29000000,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLastTimeStamp","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getPlayer","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getVietlotState","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);