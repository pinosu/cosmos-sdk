(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{790:function(e,t,a){"use strict";a.r(t);var s=a(1),c=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-012-state-accessors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-012-state-accessors"}},[e._v("#")]),e._v(" ADR 012: State Accessors")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2019 Sep 04: Initial draft")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Cosmos SDK modules currently use the "),a("code",[e._v("KVStore")]),e._v(" interface and "),a("code",[e._v("Codec")]),e._v(" to access their respective state. While\nthis provides a large degree of freedom to module developers, it is hard to modularize and the UX is\nmediocre.")]),e._v(" "),a("p",[e._v("First, each time a module tries to access the state, it has to marshal the value and set or get the\nvalue and finally unmarshal. Usually this is done by declaring "),a("code",[e._v("Keeper.GetXXX")]),e._v(" and "),a("code",[e._v("Keeper.SetXXX")]),e._v(" functions,\nwhich are repetitive and hard to maintain.")]),e._v(" "),a("p",[e._v("Second, this makes it harder to align with the object capability theorem: the right to access the\nstate is defined as a "),a("code",[e._v("StoreKey")]),e._v(", which gives full access on the entire Merkle tree, so a module cannot\nsend the access right to a specific key-value pair (or a set of key-value pairs) to another module safely.")]),e._v(" "),a("p",[e._v("Finally, because the getter/setter functions are defined as methods of a module's "),a("code",[e._v("Keeper")]),e._v(", the reviewers\nhave to consider the whole Merkle tree space when they reviewing a function accessing any part of the state.\nThere is no static way to know which part of the state that the function is accessing (and which is not).")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We will define a type named "),a("code",[e._v("Value")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWYWx1ZSBzdHJ1Y3QgewogIG0gICBNYXBwaW5nCiAga2V5IFtdYnl0ZQp9Cg=="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Value")]),e._v(" works as a reference for a key-value pair in the state, where "),a("code",[e._v("Value.m")]),e._v(" defines the key-value\nspace it will access and "),a("code",[e._v("Value.key")]),e._v(" defines the exact key for the reference.")]),e._v(" "),a("p",[e._v("We will define a type named "),a("code",[e._v("Mapping")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNYXBwaW5nIHN0cnVjdCB7CiAgc3RvcmVLZXkgc2RrLlN0b3JlS2V5CiAgY2RjICAgICAgKmNvZGVjLkxlZ2FjeUFtaW5vCiAgcHJlZml4ICAgW11ieXRlCn0K"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Mapping")]),e._v(" works as a reference for a key-value space in the state, where "),a("code",[e._v("Mapping.storeKey")]),e._v(" defines\nthe IAVL (sub-)tree and "),a("code",[e._v("Mapping.prefix")]),e._v(" defines the optional subspace prefix.")]),e._v(" "),a("p",[e._v("We will define the following core methods for the "),a("code",[e._v("Value")]),e._v(" type:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0IGFuZCB1bm1hcnNoYWwgc3RvcmVkIGRhdGEsIG5vb3AgaWYgbm90IGV4aXN0cywgcGFuaWMgaWYgY2Fubm90IHVubWFyc2hhbApmdW5jIChWYWx1ZSkgR2V0KGN0eCBDb250ZXh0LCBwdHIgaW50ZXJmYWNle30pIHt9CgovLyBHZXQgYW5kIHVubWFyc2hhbCBzdG9yZWQgZGF0YSwgcmV0dXJuIGVycm9yIGlmIG5vdCBleGlzdHMgb3IgY2Fubm90IHVubWFyc2hhbApmdW5jIChWYWx1ZSkgR2V0U2FmZShjdHggQ29udGV4dCwgcHRyIGludGVyZmFjZXt9KSB7fQoKLy8gR2V0IHN0b3JlZCBkYXRhIGFzIHJhdyBieXRlIHNsaWNlCmZ1bmMgKFZhbHVlKSBHZXRSYXcoY3R4IENvbnRleHQpIFtdYnl0ZSB7fQoKLy8gTWFyc2hhbCBhbmQgc2V0IGEgcmF3IHZhbHVlCmZ1bmMgKFZhbHVlKSBTZXQoY3R4IENvbnRleHQsIG8gaW50ZXJmYWNle30pIHt9CgovLyBDaGVjayBpZiBhIHJhdyB2YWx1ZSBleGlzdHMKZnVuYyAoVmFsdWUpIEV4aXN0cyhjdHggQ29udGV4dCkgYm9vbCB7fQoKLy8gRGVsZXRlIGEgcmF3IHZhbHVlIHZhbHVlCmZ1bmMgKFZhbHVlKSBEZWxldGUoY3R4IENvbnRleHQpIHt9Cg=="}}),e._v(" "),a("p",[e._v("We will define the following core methods for the "),a("code",[e._v("Mapping")]),e._v(" type:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29uc3RydWN0cyBrZXktdmFsdWUgcGFpciByZWZlcmVuY2UgY29ycmVzcG9uZGluZyB0byB0aGUga2V5IGFyZ3VtZW50IGluIHRoZSBNYXBwaW5nIHNwYWNlCmZ1bmMgKE1hcHBpbmcpIFZhbHVlKGtleSBbXWJ5dGUpIFZhbHVlIHt9CgovLyBHZXQgYW5kIHVubWFyc2hhbCBzdG9yZWQgZGF0YSwgbm9vcCBpZiBub3QgZXhpc3RzLCBwYW5pYyBpZiBjYW5ub3QgdW5tYXJzaGFsCmZ1bmMgKE1hcHBpbmcpIEdldChjdHggQ29udGV4dCwga2V5IFtdYnl0ZSwgcHRyIGludGVyZmFjZXt9KSB7fQoKLy8gR2V0IGFuZCB1bm1hcnNoYWwgc3RvcmVkIGRhdGEsIHJldHVybiBlcnJvciBpZiBub3QgZXhpc3RzIG9yIGNhbm5vdCB1bm1hcnNoYWwKZnVuYyAoTWFwcGluZykgR2V0U2FmZShjdHggQ29udGV4dCwga2V5IFtdYnl0ZSwgcHRyIGludGVyZmFjZXt9KQoKLy8gR2V0IHN0b3JlZCBkYXRhIGFzIHJhdyBieXRlIHNsaWNlCmZ1bmMgKE1hcHBpbmcpIEdldFJhdyhjdHggQ29udGV4dCwga2V5IFtdYnl0ZSkgW11ieXRlIHt9CgovLyBNYXJzaGFsIGFuZCBzZXQgYSByYXcgdmFsdWUKZnVuYyAoTWFwcGluZykgU2V0KGN0eCBDb250ZXh0LCBrZXkgW11ieXRlLCBvIGludGVyZmFjZXt9KSB7fQoKLy8gQ2hlY2sgaWYgYSByYXcgdmFsdWUgZXhpc3RzCmZ1bmMgKE1hcHBpbmcpIEhhcyhjdHggQ29udGV4dCwga2V5IFtdYnl0ZSkgYm9vbCB7fQoKLy8gRGVsZXRlIGEgcmF3IHZhbHVlIHZhbHVlCmZ1bmMgKE1hcHBpbmcpIERlbGV0ZShjdHggQ29udGV4dCwga2V5IFtdYnl0ZSkge30K"}}),e._v(" "),a("p",[e._v("Each method of the "),a("code",[e._v("Mapping")]),e._v(" type that is passed the arguments "),a("code",[e._v("ctx")]),e._v(", "),a("code",[e._v("key")]),e._v(", and "),a("code",[e._v("args...")]),e._v(" will proxy\nthe call to "),a("code",[e._v("Mapping.Value(key)")]),e._v(" with arguments "),a("code",[e._v("ctx")]),e._v(" and "),a("code",[e._v("args...")]),e._v(".")]),e._v(" "),a("p",[e._v("In addition, we will define and provide a common set of types derived from the "),a("code",[e._v("Value")]),e._v(" type:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCb29sZWFuIHN0cnVjdCB7IFZhbHVlIH0KdHlwZSBFbnVtIHN0cnVjdCB7IFZhbHVlIH0KdHlwZSBJbnRlZ2VyIHN0cnVjdCB7IFZhbHVlOyBlbmMgSW50RW5jb2RpbmcgfQp0eXBlIFN0cmluZyBzdHJ1Y3QgeyBWYWx1ZSB9Ci8vIC4uLgo="}}),e._v(" "),a("p",[e._v("Where the encoding schemes can be different, "),a("code",[e._v("o")]),e._v(" arguments in core methods are typed, and "),a("code",[e._v("ptr")]),e._v(" arguments\nin core methods are replaced by explicit return types.")]),e._v(" "),a("p",[e._v("Finally, we will define a family of types derived from the "),a("code",[e._v("Mapping")]),e._v(" type:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJbmRleGVyIHN0cnVjdCB7CiAgbSAgIE1hcHBpbmcKICBlbmMgSW50RW5jb2RpbmcKfQo="}}),e._v(" "),a("p",[e._v("Where the "),a("code",[e._v("key")]),e._v(" argument in core method is typed.")]),e._v(" "),a("p",[e._v("Some of the properties of the accessor types are:")]),e._v(" "),a("ul",[a("li",[e._v("State access happens only when a function which takes a "),a("code",[e._v("Context")]),e._v(" as an argument is invoked")]),e._v(" "),a("li",[e._v("Accessor type structs give rights to access the state only that the struct is referring, no other")]),e._v(" "),a("li",[e._v("Marshalling/Unmarshalling happens implicitly within the core methods")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Serialization will be done automatically")]),e._v(" "),a("li",[e._v("Shorter code size, less boilerplate, better UX")]),e._v(" "),a("li",[e._v("References to the state can be transferred safely")]),e._v(" "),a("li",[e._v("Explicit scope of accessing")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Serialization format will be hidden")]),e._v(" "),a("li",[e._v("Different architecture from the current, but the use of accessor types can be opt-in")]),e._v(" "),a("li",[e._v("Type-specific types (e.g. "),a("code",[e._v("Boolean")]),e._v(" and "),a("code",[e._v("Integer")]),e._v(") have to be defined manually")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/4554",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4554"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);