(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{719:function(e,a,t){"use strict";t.r(a);var n=t(1),l=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),t("h2",{attrs:{id:"feeallowance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feeallowance"}},[e._v("#")]),e._v(" FeeAllowance")]),e._v(" "),t("p",[e._v("Fee Allowances are identified by combining "),t("code",[e._v("Grantee")]),e._v(" (the account address of fee allowance grantee) with the "),t("code",[e._v("Granter")]),e._v(" (the account address of fee allowance granter).")]),e._v(" "),t("p",[e._v("Fee allowance grants are stored in the state as follows:")]),e._v(" "),t("ul",[t("li",[e._v("Grant: "),t("code",[e._v("0x00 | grantee_addr_len (1 byte) | grantee_addr_bytes | granter_addr_len (1 byte) | granter_addr_bytes -> ProtocolBuffer(Grant)")])])]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR3JhbnQgaXMgc3RvcmVkIGluIHRoZSBLVlN0b3JlIHRvIHJlY29yZCBhIGdyYW50IHdpdGggZnVsbCBjb250ZXh0CnR5cGUgR3JhbnQgc3RydWN0IHsKCS8vIGdyYW50ZXIgaXMgdGhlIGFkZHJlc3Mgb2YgdGhlIHVzZXIgZ3JhbnRpbmcgYW4gYWxsb3dhbmNlIG9mIHRoZWlyIGZ1bmRzLgoJR3JhbnRlciBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9Z3JhbnRlcixwcm90bzMmcXVvdDsganNvbjomcXVvdDtncmFudGVyLG9taXRlbXB0eSZxdW90O2AKCS8vIGdyYW50ZWUgaXMgdGhlIGFkZHJlc3Mgb2YgdGhlIHVzZXIgYmVpbmcgZ3JhbnRlZCBhbiBhbGxvd2FuY2Ugb2YgYW5vdGhlciB1c2VyJ3MgZnVuZHMuCglHcmFudGVlIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMixvcHQsbmFtZT1ncmFudGVlLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2dyYW50ZWUsb21pdGVtcHR5JnF1b3Q7YAoJLy8gYWxsb3dhbmNlIGNhbiBiZSBhbnkgb2YgYmFzaWMgYW5kIGZpbHRlcmVkIGZlZSBhbGxvd2FuY2UuCglBbGxvd2FuY2UgKnR5cGVzMS5BbnkgYHByb3RvYnVmOiZxdW90O2J5dGVzLDMsb3B0LG5hbWU9YWxsb3dhbmNlLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2FsbG93YW5jZSxvbWl0ZW1wdHkmcXVvdDtgCn0="}})],1),e._v(" "),t("h2",{attrs:{id:"feeallowancequeue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feeallowancequeue"}},[e._v("#")]),e._v(" FeeAllowanceQueue")]),e._v(" "),t("p",[e._v("Fee Allowances queue items are identified by combining the "),t("code",[e._v("FeeAllowancePrefixQueue")]),e._v(" (i.e., 0x01), "),t("code",[e._v("expiration")]),e._v(", "),t("code",[e._v("grantee")]),e._v(" (the account address of fee allowance grantee), "),t("code",[e._v("granter")]),e._v(" (the account address of fee allowance granter). Endblocker checks "),t("code",[e._v("FeeAllowanceQueue")]),e._v(" state for the expired grants and prunes them from  "),t("code",[e._v("FeeAllowance")]),e._v(" if there are any found.")]),e._v(" "),t("p",[e._v("Fee allowance queue keys are stored in the state as follows:")]),e._v(" "),t("ul",[t("li",[e._v("Grant: "),t("code",[e._v("0x01 | expiration_bytes | grantee_addr_len (1 byte) | grantee_addr_bytes | granter_addr_len (1 byte) | granter_addr_bytes -> EmptyBytes")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);