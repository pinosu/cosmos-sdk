(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{631:function(g,e,C){"use strict";C.r(e);var I=C(1),A=Object(I.a)({},(function(){var g=this,e=g.$createElement,C=g._self._c||e;return C("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[C("h1",{attrs:{id:"introduction-to-cosmos-sdk-modules"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-cosmos-sdk-modules"}},[g._v("#")]),g._v(" Introduction to Cosmos SDK Modules")]),g._v(" "),C("p",{attrs:{synopsis:""}},[g._v("Modules define most of the logic of Cosmos SDK applications. Developers compose modules together using the Cosmos SDK to build their custom application-specific blockchains. This document outlines the basic concepts behind SDK modules and how to approach module management.")]),g._v(" "),C("h2",{attrs:{id:"pre-requisite-readings"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[g._v("#")]),g._v(" Pre-requisite Readings")]),g._v(" "),C("ul",[C("li",{attrs:{prereq:""}},[C("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[g._v("Anatomy of a Cosmos SDK application")])],1),g._v(" "),C("li",{attrs:{prereq:""}},[C("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[g._v("Lifecycle of a Cosmos SDK transaction")])],1)]),g._v(" "),C("h2",{attrs:{id:"role-of-modules-in-a-cosmos-sdk-application"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#role-of-modules-in-a-cosmos-sdk-application"}},[g._v("#")]),g._v(" Role of Modules in a Cosmos SDK Application")]),g._v(" "),C("p",[g._v("The Cosmos SDK can be thought of as the Ruby-on-Rails of blockchain development. It comes with a core that provides the basic functionalities every blockchain application needs, like a "),C("RouterLink",{attrs:{to:"/core/baseapp.html"}},[g._v("boilerplate implementation of the ABCI")]),g._v(" to communicate with the underlying consensus engine, a "),C("RouterLink",{attrs:{to:"/core/store.html#multistore"}},[C("code",[g._v("multistore")])]),g._v(" to persist state, a "),C("RouterLink",{attrs:{to:"/core/node.html"}},[g._v("server")]),g._v(" to form a full-node and "),C("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html"}},[g._v("interfaces")]),g._v(" to handle queries.")],1),g._v(" "),C("p",[g._v("On top of this core, the Cosmos SDK enables developers to build modules that implement the business logic of their application. In other words, SDK modules implement the bulk of the logic of applications, while the core does the wiring and enables modules to be composed together. The end goal is to build a robust ecosystem of open-source Cosmos SDK modules, making it increasingly easier to build complex blockchain applications.")]),g._v(" "),C("p",[g._v("Cosmos SDK modules can be seen as little state-machines within the state-machine. They generally define a subset of the state using one or more "),C("code",[g._v("KVStore")]),g._v("s in the "),C("RouterLink",{attrs:{to:"/core/store.html"}},[g._v("main multistore")]),g._v(", as well as a subset of "),C("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[g._v("message types")]),g._v(". These messages are routed by one of the main components of Cosmos SDK core, "),C("RouterLink",{attrs:{to:"/core/baseapp.html"}},[C("code",[g._v("BaseApp")])]),g._v(", to a module Protobuf "),C("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[C("code",[g._v("Msg")]),g._v(" service")]),g._v(" that defines them.")],1),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFRyYW5zYWN0aW9uIHJlbGF5ZWQgZnJvbSB0aGUgZnVsbC1ub2RlJ3MgY29uc2Vuc3VzIGVuZ2luZQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRvIHRoZSBub2RlJ3MgYXBwbGljYXRpb24gdmlhIERlbGl2ZXJUeAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLXYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgIEFQUExJQ0FUSU9OICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgfCAgICAgVXNpbmcgYmFzZWFwcCdzIG1ldGhvZHM6IERlY29kZSB0aGUgVHgsICAgIHwKICAgICAgICAgICAgICAgIHwgICAgIGV4dHJhY3QgYW5kIHJvdXRlIHRoZSBtZXNzYWdlKHMpICAgICAgICAgICB8CiAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNZXNzYWdlIHJvdXRlZCB0byB0aGUgY29ycmVjdAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBtb2R1bGUgdG8gYmUgcHJvY2Vzc2VkCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAorLS0tLS0tLS0tLS0tLS0tLSsgICstLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tLS0tLS0tLS0tLSsgICstLS0tLS12LS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICB8CnwgIEFVVEggTU9EVUxFICAgfCAgfCAgQkFOSyBNT0RVTEUgIHwgIHwgU1RBS0lORyBNT0RVTEUgfCAgfCAgIEdPViBNT0RVTEUgICAgfAp8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgIHwKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8IEhhbmRsZXMgbWVzc2FnZSx8CnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCBVcGRhdGVzIHN0YXRlICAgfAp8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tKy0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmV0dXJuIHJlc3VsdCB0byB0aGUgdW5kZXJseWluZyBjb25zZW5zdXMgZW5naW5lIChlLmcuIFRlbmRlcm1pbnQpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKDA9T2ssIDE9RXJyKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Cg=="}}),g._v(" "),C("p",[g._v("As a result of this architecture, building a Cosmos SDK application usually revolves around writing modules to implement the specialized logic of the application and composing them with existing modules to complete the application. Developers will generally work on modules that implement logic needed for their specific use case that do not exist yet, and will use existing modules for more generic functionalities like staking, accounts, or token management.")]),g._v(" "),C("h2",{attrs:{id:"how-to-approach-building-modules-as-a-developer"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#how-to-approach-building-modules-as-a-developer"}},[g._v("#")]),g._v(" How to Approach Building Modules as a Developer")]),g._v(" "),C("p",[g._v("While there are no definitive guidelines for writing modules, here are some important design principles developers should keep in mind when building them:")]),g._v(" "),C("ul",[C("li",[C("strong",[g._v("Composability")]),g._v(": Cosmos SDK applications are almost always composed of multiple modules. This means developers need to carefully consider the integration of their module not only with the core of the Cosmos SDK, but also with other modules. The former is achieved by following standard design patterns outlined "),C("a",{attrs:{href:"#main-components-of-sdk-modules"}},[g._v("here")]),g._v(", while the latter is achieved by properly exposing the store(s) of the module via the "),C("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[C("code",[g._v("keeper")])]),g._v(".")],1),g._v(" "),C("li",[C("strong",[g._v("Specialization")]),g._v(": A direct consequence of the "),C("strong",[g._v("composability")]),g._v(" feature is that modules should be "),C("strong",[g._v("specialized")]),g._v(". Developers should carefully establish the scope of their module and not batch multiple functionalities into the same module. This separation of concerns enables modules to be re-used in other projects and improves the upgradability of the application. "),C("strong",[g._v("Specialization")]),g._v(" also plays an important role in the "),C("RouterLink",{attrs:{to:"/core/ocap.html"}},[g._v("object-capabilities model")]),g._v(" of the Cosmos SDK.")],1),g._v(" "),C("li",[C("strong",[g._v("Capabilities")]),g._v(": Most modules need to read and/or write to the store(s) of other modules. However, in an open-source environment, it is possible for some modules to be malicious. That is why module developers need to carefully think not only about how their module interacts with other modules, but also about how to give access to the module's store(s). The Cosmos SDK takes a capabilities-oriented approach to inter-module security. This means that each store defined by a module is accessed by a "),C("code",[g._v("key")]),g._v(", which is held by the module's "),C("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[C("code",[g._v("keeper")])]),g._v(". This "),C("code",[g._v("keeper")]),g._v(" defines how to access the store(s) and under what conditions. Access to the module's store(s) is done by passing a reference to the module's "),C("code",[g._v("keeper")]),g._v(".")],1)]),g._v(" "),C("h2",{attrs:{id:"main-components-of-cosmos-sdk-modules"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#main-components-of-cosmos-sdk-modules"}},[g._v("#")]),g._v(" Main Components of Cosmos SDK Modules")]),g._v(" "),C("p",[g._v("Modules are by convention defined in the "),C("code",[g._v("./x/")]),g._v(" subfolder (e.g. the "),C("code",[g._v("bank")]),g._v(" module will be defined in the "),C("code",[g._v("./x/bank")]),g._v(" folder). They generally share the same core components:")]),g._v(" "),C("ul",[C("li",[g._v("A  "),C("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[C("code",[g._v("keeper")])]),g._v(", used to access the module's store(s) and update the state.")],1),g._v(" "),C("li",[g._v("A "),C("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[C("code",[g._v("Msg")]),g._v(" service")]),g._v(", used to process messages when they are routed to the module by "),C("RouterLink",{attrs:{to:"/core/baseapp.html#message-routing"}},[C("code",[g._v("BaseApp")])]),g._v(" and trigger state-transitions.")],1),g._v(" "),C("li",[g._v("A "),C("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[g._v("query service")]),g._v(", used to process user queries when they are routed to the module by "),C("RouterLink",{attrs:{to:"/core/baseapp.html#query-routing"}},[C("code",[g._v("BaseApp")])]),g._v(".")],1),g._v(" "),C("li",[g._v("Interfaces, for end users to query the subset of the state defined by the module and create "),C("code",[g._v("message")]),g._v("s of the custom types defined in the module.")])]),g._v(" "),C("p",[g._v("In addition to these components, modules implement the "),C("code",[g._v("AppModule")]),g._v(" interface in order to be managed by the "),C("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[C("code",[g._v("module manager")])]),g._v(".")],1),g._v(" "),C("p",[g._v("Please refer to the "),C("RouterLink",{attrs:{to:"/building-modules/structure.html"}},[g._v("structure document")]),g._v(" to learn about the recommended structure of a module's directory.")],1),g._v(" "),C("h2",{attrs:{hide:"",id:"next"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[g._v("#")]),g._v(" Next")]),g._v(" "),C("p",{attrs:{hide:""}},[g._v("Read more on the "),C("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[C("code",[g._v("AppModule")]),g._v(" interface and the "),C("code",[g._v("module manager")])])],1)],1)}),[],!1,null,null,null);e.default=A.exports}}]);