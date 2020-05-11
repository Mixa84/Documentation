(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{469:function(t,e,s){"use strict";s.r(e);var a=s(0),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"start-using-or-testing-atomicdex-quickly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-using-or-testing-atomicdex-quickly"}},[t._v("#")]),t._v(" Start using or testing AtomicDEX quickly")]),t._v(" "),s("p",[t._v("Download the latest release of AtomicDEX-API for your OS from "),s("a",{attrs:{href:"https://github.com/KomodoPlatform/atomicDEX-API/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/KomodoPlatform/atomicDEX-API/releases"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("If the latest release tag is "),s("code",[t._v("beta-2.0.1683")]),t._v(", the download links should be available at "),s("a",{attrs:{href:"https://github.com/KomodoPlatform/atomicDEX-API/releases/tag/beta-2.0.1683",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/KomodoPlatform/atomicDEX-API/releases/tag/beta-2.0.1683"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v('Scroll down to the bottom of the page and expand the "Assets" section by clicking on it')]),t._v(" "),s("li",[t._v('To download, click on the link that has the words "mm2", "Release" and the name of your OS in it')]),t._v(" "),s("li",[t._v("Extract the downloaded file into a new folder named "),s("code",[t._v("AtomicDEX")]),t._v(" "),s("ul",[s("li",[t._v("The directory structure should be something like  "),s("code",[t._v("AtomicDEX/mm2")]),t._v(" i.e., the "),s("code",[t._v("mm2")]),t._v(" binary should be present in a directory named "),s("code",[t._v("AtomicDEX")])])])]),t._v(" "),s("li",[t._v("Open a Terminal and "),s("code",[t._v("cd")]),t._v(" into the AtomicDEX directory")]),t._v(" "),s("li",[t._v("Download the "),s("code",[t._v("coins")]),t._v(" file; it contains the configuration information for all the supported coins")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/jl777/coins/master/coins\n")])])]),s("ul",[s("li",[t._v("Download the sample mm2 config file")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/gcharang/mm2scripts/master/MM2_sample.json\n")])])]),s("ul",[s("li",[t._v("Rename it to "),s("code",[t._v("MM2.json")]),t._v(" and change the values of the keys "),s("code",[t._v('"rpc_password"')]),t._v(" and "),s("code",[t._v('"passphrase"')]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"rpc_password"')]),t._v("'s value is used to authenticate yourself when sending curl commands")]),t._v(" "),s("li",[s("code",[t._v('"passphrase"')]),t._v("'s value is your seed words")])])]),t._v(" "),s("li",[t._v("Start AtomicDEX by issuing the following command in a terminal window")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("stdbuf -oL "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./mm2\n")])])]),s("ul",[s("li",[s("p",[t._v("AtomicDEX (mm2) is up and running")])]),t._v(" "),s("li",[s("p",[t._v("You can find all the possible methods accepted by it here: "),s("a",{attrs:{href:"https://developers.atomicdex.io/basic-docs/atomicdex/atomicdex-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.atomicdex.io/basic-docs/atomicdex/atomicdex-api.html"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("To easily test/use various methods, open another terminal window and export the "),s("code",[t._v("rpc_password")]),t._v("'s value to the environment variable named "),s("code",[t._v("userpass")])])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("userpass")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<value of rpc_password from MM2.json here>"')]),t._v("\n")])])]),s("ul",[s("li",[t._v("Now, find the version of the program using the "),s("code",[t._v("version")]),t._v(" RPC:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("version"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);