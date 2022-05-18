(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{809:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-17-historical-header-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-17-historical-header-module"}},[e._v("#")]),e._v(" ADR 17: Historical Header Module")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("26 November 2019: Start of first version")]),e._v(" "),a("li",[e._v("2 December 2019: Final draft of first version")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("In order for the Cosmos SDK to implement the "),a("a",{attrs:{href:"https://github.com/cosmos/ics",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC specification"),a("OutboundLink")],1),e._v(", modules within the SDK must have the ability to introspect recent consensus states (validator sets & commitment roots) as proofs of these values on other chains must be checked during the handshakes.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("The application MUST store the most recent "),a("code",[e._v("n")]),e._v(" headers in a persistent store. At first, this store MAY be the current Merklised store. A non-Merklised store MAY be used later as no proofs are necessary.")]),e._v(" "),a("p",[e._v("The application MUST store this information by storing new headers immediately when handling "),a("code",[e._v("abci.RequestBeginBlock")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyBCZWdpbkJsb2NrKGN0eCBzZGsuQ29udGV4dCwga2VlcGVyIEhpc3RvcmljYWxIZWFkZXJLZWVwZXIsIHJlcSBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrKSBhYmNpLlJlc3BvbnNlQmVnaW5CbG9jayB7CiAgaW5mbyA6PSBIaXN0b3JpY2FsSW5mb3sKICAgIEhlYWRlcjogY3R4LkJsb2NrSGVhZGVyKCksCiAgICBWYWxTZXQ6IGtlZXBlci5TdGFraW5nS2VlcGVyLkdldEFsbFZhbGlkYXRvcnMoY3R4KSwgLy8gbm90ZSB0aGF0IHRoaXMgbXVzdCBiZSBzdG9yZWQgaW4gYSBjYW5vbmljYWwgb3JkZXIKICB9CiAga2VlcGVyLlNldEhpc3RvcmljYWxJbmZvKGN0eCwgY3R4LkJsb2NrSGVpZ2h0KCksIGluZm8pCiAgbiA6PSBrZWVwZXIuR2V0UGFyYW1SZWNlbnRIZWFkZXJzVG9TdG9yZSgpCiAga2VlcGVyLlBydW5lSGlzdG9yaWNhbEluZm8oY3R4LCBjdHguQmxvY2tIZWlnaHQoKSAtIG4pCiAgLy8gY29udGludWUgaGFuZGxpbmcgcmVxdWVzdAp9Cg=="}}),e._v(" "),a("p",[e._v("Alternatively, the application MAY store only the hash of the validator set.")]),e._v(" "),a("p",[e._v("The application MUST make these past "),a("code",[e._v("n")]),e._v(" committed headers available for querying by SDK modules through the "),a("code",[e._v("Keeper")]),e._v("'s "),a("code",[e._v("GetHistoricalInfo")]),e._v(" function. This MAY be implemented in a new module, or it MAY also be integrated into an existing one (likely "),a("code",[e._v("x/staking")]),e._v(" or "),a("code",[e._v("x/ibc")]),e._v(").")]),e._v(" "),a("p",[a("code",[e._v("n")]),e._v(" MAY be configured as a parameter store parameter, in which case it could be changed by "),a("code",[e._v("ParameterChangeProposal")]),e._v("s, although it will take some blocks for the stored information to catch up if "),a("code",[e._v("n")]),e._v(" is increased.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("p",[e._v("Implementation of this ADR will require changes to the Cosmos SDK. It will not require changes to Tendermint.")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Easy retrieval of headers & state roots for recent past heights by modules anywhere in the SDK.")]),e._v(" "),a("li",[e._v("No RPC calls to Tendermint required.")]),e._v(" "),a("li",[e._v("No ABCI alterations required.")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Duplicates "),a("code",[e._v("n")]),e._v(" headers data in Tendermint & the application (additional disk usage) - in the long term, an approach such as "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4210",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(" might be preferable.")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("p",[e._v("(none known)")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-002-client-semantics#consensus-state-introspection",target:"_blank",rel:"noopener noreferrer"}},[e._v('ICS 2: "Consensus state introspection"'),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);