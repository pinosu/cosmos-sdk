(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{758:function(e,t,a){"use strict";a.r(t);var r=a(1),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),a("p",[e._v("Available hooks that can be called by and from this module.")]),e._v(" "),a("h2",{attrs:{id:"create-or-modify-delegation-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-or-modify-delegation-distribution"}},[e._v("#")]),e._v(" Create or modify delegation distribution")]),e._v(" "),a("ul",[a("li",[e._v("triggered-by: "),a("code",[e._v("staking.MsgDelegate")]),e._v(", "),a("code",[e._v("staking.MsgBeginRedelegate")]),e._v(", "),a("code",[e._v("staking.MsgUndelegate")])])]),e._v(" "),a("h3",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before"}},[e._v("#")]),e._v(" Before")]),e._v(" "),a("ul",[a("li",[e._v("The delegation rewards are withdrawn to the withdraw address of the delegator.\nThe rewards include the current period and exclude the starting period.")]),e._v(" "),a("li",[e._v("The validator period is incremented.\nThe validator period is incremented because the validator's power and share distribution might have changed.")]),e._v(" "),a("li",[e._v("The reference count for the delegator's starting period is decremented.")])]),e._v(" "),a("h3",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[e._v("#")]),e._v(" After")]),e._v(" "),a("p",[e._v("The starting height of the delegation is set to the previous period.\nBecause of the "),a("code",[e._v("Before")]),e._v("-hook, this period is the last period for which the delegator was rewarded.")]),e._v(" "),a("h2",{attrs:{id:"validator-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-created"}},[e._v("#")]),e._v(" Validator created")]),e._v(" "),a("ul",[a("li",[e._v("triggered-by: "),a("code",[e._v("staking.MsgCreateValidator")])])]),e._v(" "),a("p",[e._v("When a validator is created, the following validator variables are initialized:")]),e._v(" "),a("ul",[a("li",[e._v("Historical rewards")]),e._v(" "),a("li",[e._v("Current accumulated rewards")]),e._v(" "),a("li",[e._v("Accumulated commission")]),e._v(" "),a("li",[e._v("Total outstanding rewards")]),e._v(" "),a("li",[e._v("Period")])]),e._v(" "),a("p",[e._v("By default, all values are set to a "),a("code",[e._v("0")]),e._v(", except period, which is set to "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"validator-removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-removed"}},[e._v("#")]),e._v(" Validator removed")]),e._v(" "),a("ul",[a("li",[e._v("triggered-by: "),a("code",[e._v("staking.RemoveValidator")])])]),e._v(" "),a("p",[e._v("Outstanding commission is sent to the validator's self-delegation withdrawal address.\nRemaining delegator rewards get sent to the community fee pool.")]),e._v(" "),a("p",[e._v("Note: The validator gets removed only when it has no remaining delegations.\nAt that time, all outstanding delegator rewards will have been withdrawn.\nAny remaining rewards are dust amounts.")]),e._v(" "),a("h2",{attrs:{id:"validator-is-slashed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-is-slashed"}},[e._v("#")]),e._v(" Validator is slashed")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("triggered-by: "),a("code",[e._v("staking.Slash")])])]),e._v(" "),a("li",[a("p",[e._v("The current validator period reference count is incremented.\nThe reference count is incremented because the slash event has created a reference to it.")])]),e._v(" "),a("li",[a("p",[e._v("The validator period is incremented.")])]),e._v(" "),a("li",[a("p",[e._v("The slash event is stored for later use.\nThe slash event will be referenced when calculating delegator rewards.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);