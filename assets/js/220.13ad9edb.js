(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{454:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"enabling-native-wallet-coins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-native-wallet-coins"}},[t._v("#")]),t._v(" Enabling Native Wallet Coins")]),t._v(" "),s("p",[t._v("There are two ways of enabling coins. One method is to edit the "),s("code",[t._v("./enable")]),t._v(" file, the other is to edit the "),s("code",[t._v("./coins")]),t._v(" file. The "),s("code",[t._v("./enable")]),t._v(" file is simple to edit but it will need to be executed manually every time the "),s("code",[t._v("./client")]),t._v(" is executed. On the other hand, the "),s("code",[t._v("./coins")]),t._v(" file is a little more complicated to edit, but a coin that has been activated in the coins file will automatically be activated after "),s("code",[t._v("./client")]),t._v(" is executed.")]),t._v(" "),s("h2",{attrs:{id:"editing-the-enable-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-enable-file"}},[t._v("#")]),t._v(" Editing the "),s("code",[t._v("./enable")]),t._v(" file")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/SuperNET/iguana/dexscripts\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" ./enable\n")])])]),s("p",[t._v("Will show:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" userpass\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("enable"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("NAME_OF_COIN"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),s("p",[t._v("To list a coin on the enable file you need to change NAME_OF_COIN for the coin you want enabled. Copy and paste the line with a new coin for whatever other coins you want enabled. NOTE: KMD is enabled by default and doesn't need to be listed in the enable file.")]),t._v(" "),s("p",[t._v("After changes in the enable file, run:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./enable\n")])])]),s("h2",{attrs:{id:"editing-the-coins-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-coins-file"}},[t._v("#")]),t._v(" Editing the "),s("code",[t._v("./coins")]),t._v(" file")]),t._v(" "),s("p",[t._v("Assuming you are in "),s("code",[t._v("~/SuperNET/iguana/dexscripts")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" ./coins\n")])])]),s("p",[t._v("Will show:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("coins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("REVS"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("active"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":1, "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("asset"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("REVS"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpcport"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":10196}, {"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("JUMBLR"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("active"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":1, "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("asset"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("JUMBLR"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpcport"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(':15106}, etc, etc, etc}]"')]),t._v("\n")])])]),s("p",[t._v('Add ,``"active":1``, to any coin you want to be active by default at startup like this:')]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"coin'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"NAME_OF_COIN'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('",'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"active'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":1, '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"asset'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"NAME_OF_COIN'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('",'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"rpcport'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":10196'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("If a coin is PoS, add the following parameter:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"isPos'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":1,\n')])])]),s("p",[t._v("You will need to restart the "),s("code",[t._v("./client")]),t._v(" for the coin to get active. This change won't take effect automatically. But once a coin is active, it will activate automatically when you restart "),s("code",[t._v("./client")]),t._v(" without the need to run "),s("code",[t._v("./enable")]),t._v(" first.")]),t._v(" "),s("p",[s("strong",[t._v("To stop the")]),t._v(" "),s("code",[t._v("./client")]),t._v(" "),s("strong",[t._v("process, use")]),t._v(" "),s("code",[t._v("./stop")])])])}),[],!1,null,null,null);e.default=n.exports}}]);