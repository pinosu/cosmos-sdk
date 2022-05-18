(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{815:function(e,a,t){"use strict";t.r(a);var o=t(1),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-022-custom-baseapp-panic-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-022-custom-baseapp-panic-handling"}},[e._v("#")]),e._v(" ADR 022: Custom BaseApp panic handling")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("2020 Apr 24: Initial Draft")])]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("The current implementation of BaseApp does not allow developers to write custom error handlers during panic recovery\n"),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/bad4ca75f58b182f600396ca350ad844c18fc80b/baseapp/baseapp.go#L539",target:"_blank",rel:"noopener noreferrer"}},[e._v("runTx()"),t("OutboundLink")],1),e._v("\nmethod. We think that this method can be more flexible and can give SDK users more options for customizations without\nthe need to rewrite whole BaseApp. Also there's one special case for "),t("code",[e._v("sdk.ErrorOutOfGas")]),e._v(' error handling, that case\nmight be handled in a "standard" way (middleware) alongside the others.')]),e._v(" "),t("p",[e._v("We propose middleware-solution, which could help developers implement the following cases:")]),e._v(" "),t("ul",[t("li",[e._v("add external logging (let's say sending reports to external services like "),t("a",{attrs:{href:"https://sentry.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentry"),t("OutboundLink")],1),e._v(");")]),e._v(" "),t("li",[e._v("call panic for specific error cases;")])]),e._v(" "),t("p",[e._v("It will also make "),t("code",[e._v("OutOfGas")]),e._v(" case and "),t("code",[e._v("default")]),e._v(" case one of the middlewares.\n"),t("code",[e._v("Default")]),e._v(" case wraps recovery object to an error and logs it ("),t("a",{attrs:{href:"#Recovery-middleware"}},[e._v("example middleware implementation")]),e._v(").")]),e._v(" "),t("p",[e._v("Our project has a sidecar service running alongside the blockchain node (smart contracts virtual machine). It is\nessential that node <-> sidecar connectivity stays stable for TXs processing. So when the communication breaks we need\nto crash the node and reboot it once the problem is solved. That behaviour makes node's state machine execution\ndeterministic. As all keeper panics are caught by runTx's "),t("code",[e._v("defer()")]),e._v(" handler, we have to adjust the BaseApp code\nin order to customize it.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("h3",{attrs:{id:"design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),t("h4",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Instead of hardcoding custom error handling into BaseApp we suggest using set of middlewares which can be customized\nexternally and will allow developers use as many custom error handlers as they want. Implementation with tests\ncan be found "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/6053",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"implementation-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[e._v("#")]),e._v(" Implementation details")]),e._v(" "),t("h5",{attrs:{id:"recovery-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recovery-handler"}},[e._v("#")]),e._v(" Recovery handler")]),e._v(" "),t("p",[e._v("New "),t("code",[e._v("RecoveryHandler")]),e._v(" type added. "),t("code",[e._v("recoveryObj")]),e._v(" input argument is an object returned by the standard Go function\n"),t("code",[e._v("recover()")]),e._v(" from the "),t("code",[e._v("builtin")]),e._v(" package.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSZWNvdmVyeUhhbmRsZXIgZnVuYyhyZWNvdmVyeU9iaiBpbnRlcmZhY2V7fSkgZXJyb3IK"}}),e._v(" "),t("p",[e._v("Handler should type assert (or other methods) an object to define if object should be handled.\n"),t("code",[e._v("nil")]),e._v(" should be returned if input object can't be handled by that "),t("code",[e._v("RecoveryHandler")]),e._v(" (not a handler's target type).\nNot "),t("code",[e._v("nil")]),e._v(" error should be returned if input object was handled and middleware chain execution should be stopped.")]),e._v(" "),t("p",[e._v("An example:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBleGFtcGxlRXJySGFuZGxlcihyZWNvdmVyeU9iaiBpbnRlcmZhY2V7fSkgZXJyb3IgewogICAgZXJyLCBvayA6PSByZWNvdmVyeU9iai4oZXJyb3IpCiAgICBpZiAhb2sgeyByZXR1cm4gbmlsIH0KCiAgICBpZiBzb21lU3BlY2lmaWNFcnJvci5JcyhlcnIpIHsKICAgICAgICBwYW5pYyhjdXN0b21QYW5pY01zZykKICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIG5pbAogICAgfQp9Cg=="}}),e._v(" "),t("p",[e._v("This example breaks the application execution, but it also might enrich the error's context like the "),t("code",[e._v("OutOfGas")]),e._v(" handler.")]),e._v(" "),t("h5",{attrs:{id:"recovery-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recovery-middleware"}},[e._v("#")]),e._v(" Recovery middleware")]),e._v(" "),t("p",[e._v("We also add a middleware type (decorator). That function type wraps "),t("code",[e._v("RecoveryHandler")]),e._v(" and returns the next middleware in\nexecution chain and handler's "),t("code",[e._v("error")]),e._v(". Type is used to separate actual "),t("code",[e._v("recovery()")]),e._v(" object handling from middleware\nchain processing.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSByZWNvdmVyeU1pZGRsZXdhcmUgZnVuYyhyZWNvdmVyeU9iaiBpbnRlcmZhY2V7fSkgKHJlY292ZXJ5TWlkZGxld2FyZSwgZXJyb3IpCgpmdW5jIG5ld1JlY292ZXJ5TWlkZGxld2FyZShoYW5kbGVyIFJlY292ZXJ5SGFuZGxlciwgbmV4dCByZWNvdmVyeU1pZGRsZXdhcmUpIHJlY292ZXJ5TWlkZGxld2FyZSB7CiAgICByZXR1cm4gZnVuYyhyZWNvdmVyeU9iaiBpbnRlcmZhY2V7fSkgKHJlY292ZXJ5TWlkZGxld2FyZSwgZXJyb3IpIHsKICAgICAgICBpZiBlcnIgOj0gaGFuZGxlcihyZWNvdmVyeU9iaik7IGVyciAhPSBuaWwgewogICAgICAgICAgICByZXR1cm4gbmlsLCBlcnIKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG5leHQsIG5pbAogICAgfQp9Cg=="}}),e._v(" "),t("p",[e._v("Function receives a "),t("code",[e._v("recoveryObj")]),e._v(" object and returns:")]),e._v(" "),t("ul",[t("li",[e._v("(next "),t("code",[e._v("recoveryMiddleware")]),e._v(", "),t("code",[e._v("nil")]),e._v(") if object wasn't handled (not a target type) by "),t("code",[e._v("RecoveryHandler")]),e._v(";")]),e._v(" "),t("li",[e._v("("),t("code",[e._v("nil")]),e._v(", not nil "),t("code",[e._v("error")]),e._v(") if input object was handled and other middlewares in the chain should not be executed;")]),e._v(" "),t("li",[e._v("("),t("code",[e._v("nil")]),e._v(", "),t("code",[e._v("nil")]),e._v(") in case of invalid behavior. Panic recovery might not have been properly handled;\nthis can be avoided by always using a "),t("code",[e._v("default")]),e._v(" as a rightmost middleware in the chain (always returns an "),t("code",[e._v("error")]),e._v("');")])]),e._v(" "),t("p",[t("code",[e._v("OutOfGas")]),e._v(" middleware example:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBuZXdPdXRPZkdhc1JlY292ZXJ5TWlkZGxld2FyZShnYXNXYW50ZWQgdWludDY0LCBjdHggc2RrLkNvbnRleHQsIG5leHQgcmVjb3ZlcnlNaWRkbGV3YXJlKSByZWNvdmVyeU1pZGRsZXdhcmUgewogICAgaGFuZGxlciA6PSBmdW5jKHJlY292ZXJ5T2JqIGludGVyZmFjZXt9KSBlcnJvciB7CiAgICAgICAgZXJyLCBvayA6PSByZWNvdmVyeU9iai4oc2RrLkVycm9yT3V0T2ZHYXMpCiAgICAgICAgaWYgIW9rIHsgcmV0dXJuIG5pbCB9CgogICAgICAgIHJldHVybiBzZGtlcnJvcnMuV3JhcCgKICAgICAgICAgICAgc2RrZXJyb3JzLkVyck91dE9mR2FzLCBmbXQuU3ByaW50ZigKICAgICAgICAgICAgICAgICZxdW90O291dCBvZiBnYXMgaW4gbG9jYXRpb246ICV2OyBnYXNXYW50ZWQ6ICVkLCBnYXNVc2VkOiAlZCZxdW90OywgZXJyLkRlc2NyaXB0b3IsIGdhc1dhbnRlZCwgY3R4Lkdhc01ldGVyKCkuR2FzQ29uc3VtZWQoKSwKICAgICAgICAgICAgKSwKICAgICAgICApCiAgICB9CgogICAgcmV0dXJuIG5ld1JlY292ZXJ5TWlkZGxld2FyZShoYW5kbGVyLCBuZXh0KQp9Cg=="}}),e._v(" "),t("p",[t("code",[e._v("Default")]),e._v(" middleware example:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBuZXdEZWZhdWx0UmVjb3ZlcnlNaWRkbGV3YXJlKCkgcmVjb3ZlcnlNaWRkbGV3YXJlIHsKICAgIGhhbmRsZXIgOj0gZnVuYyhyZWNvdmVyeU9iaiBpbnRlcmZhY2V7fSkgZXJyb3IgewogICAgICAgIHJldHVybiBzZGtlcnJvcnMuV3JhcCgKICAgICAgICAgICAgc2RrZXJyb3JzLkVyclBhbmljLCBmbXQuU3ByaW50ZigmcXVvdDtyZWNvdmVyZWQ6ICV2XG5zdGFjazpcbiV2JnF1b3Q7LCByZWNvdmVyeU9iaiwgc3RyaW5nKGRlYnVnLlN0YWNrKCkpKSwKICAgICAgICApCiAgICB9CgogICAgcmV0dXJuIG5ld1JlY292ZXJ5TWlkZGxld2FyZShoYW5kbGVyLCBuaWwpCn0K"}}),e._v(" "),t("h5",{attrs:{id:"recovery-processing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recovery-processing"}},[e._v("#")]),e._v(" Recovery processing")]),e._v(" "),t("p",[e._v("Basic chain of middlewares processing would look like:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBwcm9jZXNzUmVjb3ZlcnkocmVjb3ZlcnlPYmogaW50ZXJmYWNle30sIG1pZGRsZXdhcmUgcmVjb3ZlcnlNaWRkbGV3YXJlKSBlcnJvciB7CglpZiBtaWRkbGV3YXJlID09IG5pbCB7IHJldHVybiBuaWwgfQoKCW5leHQsIGVyciA6PSBtaWRkbGV3YXJlKHJlY292ZXJ5T2JqKQoJaWYgZXJyICE9IG5pbCB7IHJldHVybiBlcnIgfQoJaWYgbmV4dCA9PSBuaWwgeyByZXR1cm4gbmlsIH0KCglyZXR1cm4gcHJvY2Vzc1JlY292ZXJ5KHJlY292ZXJ5T2JqLCBuZXh0KQp9Cg=="}}),e._v(" "),t("p",[e._v("That way we can create a middleware chain which is executed from left to right, the rightmost middleware is a\n"),t("code",[e._v("default")]),e._v(" handler which must return an "),t("code",[e._v("error")]),e._v(".")]),e._v(" "),t("h5",{attrs:{id:"baseapp-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#baseapp-changes"}},[e._v("#")]),e._v(" BaseApp changes")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("default")]),e._v(" middleware chain must exist in a "),t("code",[e._v("BaseApp")]),e._v(" object. "),t("code",[e._v("Baseapp")]),e._v(" modifications:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCYXNlQXBwIHN0cnVjdCB7CiAgICAvLyAuLi4KICAgIHJ1blR4UmVjb3ZlcnlNaWRkbGV3YXJlIHJlY292ZXJ5TWlkZGxld2FyZQp9CgpmdW5jIE5ld0Jhc2VBcHAoLi4uKSB7CiAgICAvLyAuLi4KICAgIGFwcC5ydW5UeFJlY292ZXJ5TWlkZGxld2FyZSA9IG5ld0RlZmF1bHRSZWNvdmVyeU1pZGRsZXdhcmUoKQp9CgpmdW5jIChhcHAgKkJhc2VBcHApIHJ1blR4KC4uLikgewogICAgLy8gLi4uCiAgICBkZWZlciBmdW5jKCkgewogICAgICAgIGlmIHIgOj0gcmVjb3ZlcigpOyByICE9IG5pbCB7CiAgICAgICAgICAgIHJlY292ZXJ5TVcgOj0gbmV3T3V0T2ZHYXNSZWNvdmVyeU1pZGRsZXdhcmUoZ2FzV2FudGVkLCBjdHgsIGFwcC5ydW5UeFJlY292ZXJ5TWlkZGxld2FyZSkKICAgICAgICAgICAgZXJyLCByZXN1bHQgPSBwcm9jZXNzUmVjb3ZlcnkociwgcmVjb3ZlcnlNVyksIG5pbAogICAgICAgIH0KCiAgICAgICAgZ0luZm8gPSBzZGsuR2FzSW5mb3tHYXNXYW50ZWQ6IGdhc1dhbnRlZCwgR2FzVXNlZDogY3R4Lkdhc01ldGVyKCkuR2FzQ29uc3VtZWQoKX0KICAgIH0oKQogICAgLy8gLi4uCn0K"}}),e._v(" "),t("p",[e._v("Developers can add their custom "),t("code",[e._v("RecoveryHandler")]),e._v("s by providing "),t("code",[e._v("AddRunTxRecoveryHandler")]),e._v(" as a BaseApp option parameter to the "),t("code",[e._v("NewBaseapp")]),e._v(" constructor:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBBZGRSdW5UeFJlY292ZXJ5SGFuZGxlcihoYW5kbGVycyAuLi5SZWNvdmVyeUhhbmRsZXIpIHsKICAgIGZvciBfLCBoIDo9IHJhbmdlIGhhbmRsZXJzIHsKICAgICAgICBhcHAucnVuVHhSZWNvdmVyeU1pZGRsZXdhcmUgPSBuZXdSZWNvdmVyeU1pZGRsZXdhcmUoaCwgYXBwLnJ1blR4UmVjb3ZlcnlNaWRkbGV3YXJlKQogICAgfQp9Cg=="}}),e._v(" "),t("p",[e._v("This method would prepend handlers to an existing chain.")]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("Developers of Cosmos SDK based projects can add custom panic handlers to:\n"),t("ul",[t("li",[e._v("add error context for custom panic sources (panic inside of custom keepers);")]),e._v(" "),t("li",[e._v("emit "),t("code",[e._v("panic()")]),e._v(": passthrough recovery object to the Tendermint core;")]),e._v(" "),t("li",[e._v("other necessary handling;")])])]),e._v(" "),t("li",[e._v("Developers can use standard Cosmos SDK "),t("code",[e._v("BaseApp")]),e._v(" implementation, rather that rewriting it in their projects;")]),e._v(" "),t("li",[e._v('Proposed solution doesn\'t break the current "standard" '),t("code",[e._v("runTx()")]),e._v(" flow;")])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[e._v("Introduces changes to the execution model design.")])]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("OutOfGas")]),e._v(" error handler becomes one of the middlewares;")]),e._v(" "),t("li",[e._v("Default panic handler becomes one of the middlewares;")])]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/6053",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR-6053 with proposed solution"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.38.3/docs/architecture/adr-010-modular-antehandler.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Similar solution. ADR-010 Modular AnteHandler"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);