(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{645:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-023-protocol-buffer-naming-and-versioning-conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-023-protocol-buffer-naming-and-versioning-conventions"}},[e._v("#")]),e._v(" ADR 023: Protocol Buffer Naming and Versioning Conventions")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020 April 27: Initial Draft")]),e._v(" "),a("li",[e._v("2020 August 5: Update guidelines")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Protocol Buffers provide a basic "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/style",target:"_blank",rel:"noopener noreferrer"}},[e._v("style guide"),a("OutboundLink")],1),e._v("\nand "),a("a",{attrs:{href:"https://buf.build/docs/style-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),a("OutboundLink")],1),e._v(" builds upon that. To the\nextent possible, we want to follow industry accepted guidelines and wisdom for\nthe effective usage of protobuf, deviating from those only when there is clear\nrationale for our use case.")]),e._v(" "),a("h3",{attrs:{id:"adoption-of-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adoption-of-any"}},[e._v("#")]),e._v(" Adoption of "),a("code",[e._v("Any")])]),e._v(" "),a("p",[e._v("The adoption of "),a("code",[e._v("google.protobuf.Any")]),e._v(" as the recommended approach for encoding\ninterface types (as opposed to "),a("code",[e._v("oneof")]),e._v(") makes package naming a central part\nof the encoding as fully-qualified message names now appear in encoded\nmessages.")]),e._v(" "),a("h3",{attrs:{id:"current-directory-organization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-directory-organization"}},[e._v("#")]),e._v(" Current Directory Organization")]),e._v(" "),a("p",[e._v("Thus far we have mostly followed "),a("a",{attrs:{href:"https://buf.build",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf's"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#default",target:"_blank",rel:"noopener noreferrer"}},[e._v("DEFAULT"),a("OutboundLink")],1),e._v("\nrecommendations, with the minor deviation of disabling "),a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#file_layout",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("PACKAGE_DIRECTORY_MATCH")]),a("OutboundLink")],1),e._v("\nwhich although being convenient for developing code comes with the warning\nfrom Buf that:")]),e._v(" "),a("blockquote",[a("p",[e._v("you will have a very bad time with many Protobuf plugins across various languages if you do not do this")])]),e._v(" "),a("h3",{attrs:{id:"adoption-of-grpc-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adoption-of-grpc-queries"}},[e._v("#")]),e._v(" Adoption of gRPC Queries")]),e._v(" "),a("p",[e._v("In "),a("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")]),e._v(", gRPC was adopted for Protobuf\nnative queries. The full gRPC service path thus becomes a key part of ABCI query\npath. In the future, gRPC queries may be allowed from within persistent scripts\nby technologies such as CosmWasm and these query routes would be stored within\nscript binaries.")],1),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("The goal of this ADR is to provide thoughtful naming conventions that:")]),e._v(" "),a("ul",[a("li",[e._v("encourage a good user experience for when users interact directly with\n.proto files and fully-qualified protobuf names")]),e._v(" "),a("li",[e._v("balance conciseness against the possibility of either over-optimizing (making\nnames too short and cryptic) or under-optimizing (just accepting bloated names\nwith lots of redundant information)")])]),e._v(" "),a("p",[e._v("These guidelines are meant to act as a style guide for both the Cosmos SDK and\nthird-party modules.")]),e._v(" "),a("p",[e._v("As a starting point, we should adopt all of the "),a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#default",target:"_blank",rel:"noopener noreferrer"}},[e._v("DEFAULT"),a("OutboundLink")],1),e._v("\ncheckers in "),a("a",{attrs:{href:"https://buf.build",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf's"),a("OutboundLink")],1),e._v(" including "),a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#file_layout",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("PACKAGE_DIRECTORY_MATCH")]),a("OutboundLink")],1),e._v(",\nexcept:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#package_version_suffix",target:"_blank",rel:"noopener noreferrer"}},[e._v("PACKAGE_VERSION_SUFFIX"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#service_suffix",target:"_blank",rel:"noopener noreferrer"}},[e._v("SERVICE_SUFFIX"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Further guidelines to be described below.")]),e._v(" "),a("h3",{attrs:{id:"principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principles"}},[e._v("#")]),e._v(" Principles")]),e._v(" "),a("h4",{attrs:{id:"concise-and-descriptive-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concise-and-descriptive-names"}},[e._v("#")]),e._v(" Concise and Descriptive Names")]),e._v(" "),a("p",[e._v("Names should be descriptive enough to convey their meaning and distinguish\nthem from other names.")]),e._v(" "),a("p",[e._v("Given that we are using fully-qualifed names within\n"),a("code",[e._v("google.protobuf.Any")]),e._v(" as well as within gRPC query routes, we should aim to\nkeep names concise, without going overboard. The general rule of thumb should\nbe if a shorter name would convey more or else the same thing, pick the shorter\nname.")]),e._v(" "),a("p",[e._v("For instance, "),a("code",[e._v("cosmos.bank.MsgSend")]),e._v(" (19 bytes) conveys roughly the same information\nas "),a("code",[e._v("cosmos_sdk.x.bank.v1.MsgSend")]),e._v(" (28 bytes) but is more concise.")]),e._v(" "),a("p",[e._v("Such conciseness makes names both more pleasant to work with and take up less\nspace within transactions and on the wire.")]),e._v(" "),a("p",[e._v("We should also resist the temptation to over-optimize, by making names\ncryptically short with abbreviations. For instance, we shouldn't try to\nreduce "),a("code",[e._v("cosmos.bank.MsgSend")]),e._v(" to "),a("code",[e._v("csm.bk.MSnd")]),e._v(" just to save a few bytes.")]),e._v(" "),a("p",[e._v("The goal is to make names "),a("strong",[a("em",[e._v("concise but not cryptic")])]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"names-are-for-clients-first"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#names-are-for-clients-first"}},[e._v("#")]),e._v(" Names are for Clients First")]),e._v(" "),a("p",[e._v("Package and type names should be chosen for the benefit of users, not\nnecessarily because of legacy concerns related to the go code-base.")]),e._v(" "),a("h4",{attrs:{id:"plan-for-longevity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plan-for-longevity"}},[e._v("#")]),e._v(" Plan for Longevity")]),e._v(" "),a("p",[e._v("In the interests of long-term support, we should plan on the names we do\nchoose to be in usage for a long time, so now is the opportunity to make\nthe best choices for the future.")]),e._v(" "),a("h3",{attrs:{id:"versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),a("h4",{attrs:{id:"guidelines-on-stable-package-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-on-stable-package-versions"}},[e._v("#")]),e._v(" Guidelines on Stable Package Versions")]),e._v(" "),a("p",[e._v("In general, schema evolution is the way to update protobuf schemas. That means that new fields,\nmessages, and RPC methods are "),a("em",[e._v("added")]),e._v(" to existing schemas and old fields, messages and RPC methods\nare maintained as long as possible.")]),e._v(" "),a("p",[e._v("Breaking things is often unacceptable in a blockchain scenario. For instance, immutable smart contracts\nmay depend on certain data schemas on the host chain. If the host chain breaks those schemas, the smart\ncontract may be irreparably broken. Even when things can be fixed (for instance in client software),\nthis often comes at a high cost.")]),e._v(" "),a("p",[e._v("Instead of breaking things, we should make every effort to evolve schemas rather than just breaking them.\n"),a("a",{attrs:{href:"https://buf.build",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),a("OutboundLink")],1),e._v(" breaking change detection should be used on all stable (non-alpha or beta) packages\nto prevent such breakage.")]),e._v(" "),a("p",[e._v("With that in mind, different stable versions (i.e. "),a("code",[e._v("v1")]),e._v(" or "),a("code",[e._v("v2")]),e._v(") of a package should more or less be considered\ndifferent packages and this should be last resort approach for upgrading protobuf schemas. Scenarios where creating\na "),a("code",[e._v("v2")]),e._v(" may make sense are:")]),e._v(" "),a("ul",[a("li",[e._v("we want to create a new module with similar functionality to an existing module and adding "),a("code",[e._v("v2")]),e._v(" is the most natural\nway to do this. In that case, there are really just two different, but similar modules with different APIs.")]),e._v(" "),a("li",[e._v("we want to add a new revamped API for an existing module and it's just too cumbersome to add it to the existing package,\nso putting it in "),a("code",[e._v("v2")]),e._v(" is cleaner for users. In this case, care should be made to not deprecate support for\n"),a("code",[e._v("v1")]),e._v(" if it is actively used in immutable smart contracts.")])]),e._v(" "),a("h4",{attrs:{id:"guidelines-on-unstable-alpha-and-beta-package-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-on-unstable-alpha-and-beta-package-versions"}},[e._v("#")]),e._v(" Guidelines on unstable (alpha and beta) package versions")]),e._v(" "),a("p",[e._v("The following guidelines are recommended for marking packages as alpha or beta:")]),e._v(" "),a("ul",[a("li",[e._v("marking something as "),a("code",[e._v("alpha")]),e._v(" or "),a("code",[e._v("beta")]),e._v(" should be a last resort and just putting something in the\nstable package (i.e. "),a("code",[e._v("v1")]),e._v(" or "),a("code",[e._v("v2")]),e._v(") should be preferred")]),e._v(" "),a("li",[e._v("a package "),a("em",[e._v("should")]),e._v(" be marked as "),a("code",[e._v("alpha")]),e._v(" "),a("em",[e._v("if and only if")]),e._v(" there are active discussions to remove\nor significantly alter the package in the near future")]),e._v(" "),a("li",[e._v("a package "),a("em",[e._v("should")]),e._v(" be marked as "),a("code",[e._v("beta")]),e._v(" "),a("em",[e._v("if and only if")]),e._v(" there is an active discussion to\nsignificantly refactor/rework the functionality in the near future but not remove it")]),e._v(" "),a("li",[e._v("modules "),a("em",[e._v("can and should")]),e._v(" have types in both stable (i.e. "),a("code",[e._v("v1")]),e._v(" or "),a("code",[e._v("v2")]),e._v(") and unstable ("),a("code",[e._v("alpha")]),e._v(" or "),a("code",[e._v("beta")]),e._v(") packages.")])]),e._v(" "),a("p",[a("em",[a("code",[e._v("alpha")]),e._v(" and "),a("code",[e._v("beta")]),e._v(" should not be used to avoid responsibility for maintaining compatibility.")]),e._v("\nWhenever code is released into the wild, especially on a blockchain, there is a high cost to changing things. In some\ncases, for instance with immutable smart contracts, a breaking change may be impossible to fix.")]),e._v(" "),a("p",[e._v("When marking something as "),a("code",[e._v("alpha")]),e._v(" or "),a("code",[e._v("beta")]),e._v(", maintainers should ask the questions:")]),e._v(" "),a("ul",[a("li",[e._v("what is the cost of asking others to change their code vs the benefit of us maintaining the optionality to change it?")]),e._v(" "),a("li",[e._v("what is the plan for moving this to "),a("code",[e._v("v1")]),e._v(" and how will that affect users?")])]),e._v(" "),a("p",[a("code",[e._v("alpha")]),e._v(" or "),a("code",[e._v("beta")]),e._v(' should really be used to communicate "changes are planned".')]),e._v(" "),a("p",[e._v("As a case study, gRPC reflection is in the package "),a("code",[e._v("grpc.reflection.v1alpha")]),e._v(". It hasn't been changed since\n2017 and it is now used in other widely used software like gRPCurl. Some folks probably use it in production services\nand so if they actually went and changed the package to "),a("code",[e._v("grpc.reflection.v1")]),e._v(", some software would break and\nthey probably don't want to do that... So now the "),a("code",[e._v("v1alpha")]),e._v(" package is more or less the de-facto "),a("code",[e._v("v1")]),e._v(". Let's not do that.")]),e._v(" "),a("p",[e._v("The following are guidelines for working with non-stable packages:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#package_version_suffix",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf's recommended version suffix"),a("OutboundLink")],1),e._v("\n(ex. "),a("code",[e._v("v1alpha1")]),e._v(") "),a("em",[e._v("should")]),e._v(" be used for non-stable packages")]),e._v(" "),a("li",[e._v("non-stable packages should generally be excluded from breaking change detection")]),e._v(" "),a("li",[e._v("immutable smart contract modules (i.e. CosmWasm) "),a("em",[e._v("should")]),e._v(" block smart contracts/persistent\nscripts from interacting with "),a("code",[e._v("alpha")]),e._v("/"),a("code",[e._v("beta")]),e._v(" packages")])]),e._v(" "),a("h4",{attrs:{id:"omit-v1-suffix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#omit-v1-suffix"}},[e._v("#")]),e._v(" Omit v1 suffix")]),e._v(" "),a("p",[e._v("Instead of using "),a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#package_version_suffix",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf's recommended version suffix"),a("OutboundLink")],1),e._v(",\nwe can omit "),a("code",[e._v("v1")]),e._v(" for packages that don't actually have a second version. This\nallows for more concise names for common use cases like "),a("code",[e._v("cosmos.bank.Send")]),e._v(".\nPackages that do have a second or third version can indicate that with "),a("code",[e._v(".v2")]),e._v("\nor "),a("code",[e._v(".v3")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"package-naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-naming"}},[e._v("#")]),e._v(" Package Naming")]),e._v(" "),a("h4",{attrs:{id:"adopt-a-short-unique-top-level-package-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adopt-a-short-unique-top-level-package-name"}},[e._v("#")]),e._v(" Adopt a short, unique top-level package name")]),e._v(" "),a("p",[e._v("Top-level packages should adopt a short name that is known to not collide with\nother names in common usage within the Cosmos ecosystem. In the near future, a\nregistry should be created to reserve and index top-level package names used\nwithin the Cosmos ecosystem. Because the Cosmos SDK is intended to provide\nthe top-level types for the Cosmos project, the top-level package name "),a("code",[e._v("cosmos")]),e._v("\nis recommended for usage within the Cosmos SDK instead of the longer "),a("code",[e._v("cosmos_sdk")]),e._v(".\n"),a("a",{attrs:{href:"https://github.com/cosmos/ics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS"),a("OutboundLink")],1),e._v(" specifications could consider a\nshort top-level package like "),a("code",[e._v("ics23")]),e._v(" based upon the standard number.")]),e._v(" "),a("h4",{attrs:{id:"limit-sub-package-depth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-sub-package-depth"}},[e._v("#")]),e._v(" Limit sub-package depth")]),e._v(" "),a("p",[e._v("Sub-package depth should be increased with caution. Generally a single\nsub-package is needed for a module or a library. Even though "),a("code",[e._v("x")]),e._v(" or "),a("code",[e._v("modules")]),e._v("\nis used in source code to denote modules, this is often unnecessary for .proto\nfiles as modules are the primary thing sub-packages are used for. Only items which\nare known to be used infrequently should have deep sub-package depths.")]),e._v(" "),a("p",[e._v("For the Cosmos SDK, it is recommended that that we simply write "),a("code",[e._v("cosmos.bank")]),e._v(",\n"),a("code",[e._v("cosmos.gov")]),e._v(", etc. rather than "),a("code",[e._v("cosmos.x.bank")]),e._v(". In practice, most non-module\ntypes can go straight in the "),a("code",[e._v("cosmos")]),e._v(" package or we can introduce a\n"),a("code",[e._v("cosmos.base")]),e._v(" package if needed. Note that this naming "),a("em",[e._v("will not")]),e._v(" change\ngo package names, i.e. the "),a("code",[e._v("cosmos.bank")]),e._v(" protobuf package will still live in\n"),a("code",[e._v("x/bank")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"message-naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-naming"}},[e._v("#")]),e._v(" Message Naming")]),e._v(" "),a("p",[e._v("Message type names should be as concise possible without losing clarity. "),a("code",[e._v("sdk.Msg")]),e._v("\ntypes which are used in transactions will retain the "),a("code",[e._v("Msg")]),e._v(" prefix as that provides\nhelpful context.")]),e._v(" "),a("h3",{attrs:{id:"service-and-rpc-naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-and-rpc-naming"}},[e._v("#")]),e._v(" Service and RPC Naming")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")]),e._v(" specifies that modules should\nimplement a gRPC query service. We should consider the principle of conciseness\nfor query service and RPC names as these may be called from persistent script\nmodules such as CosmWasm. Also, users may use these query paths from tools like\n"),a("a",{attrs:{href:"https://github.com/fullstorydev/grpcurl",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPCurl"),a("OutboundLink")],1),e._v(". As an example, we can shorten\n"),a("code",[e._v("/cosmos_sdk.x.bank.v1.QueryService/QueryBalance")]),e._v(" to\n"),a("code",[e._v("/cosmos.bank.Query/Balance")]),e._v(" without losing much useful information.")],1),e._v(" "),a("p",[e._v("RPC request and response types "),a("em",[e._v("should")]),e._v(" follow the "),a("code",[e._v("ServiceNameMethodNameRequest")]),e._v("/\n"),a("code",[e._v("ServiceNameMethodNameResponse")]),e._v(" naming convention. i.e. for an RPC method named "),a("code",[e._v("Balance")]),e._v("\non the "),a("code",[e._v("Query")]),e._v(" service, the request and response types would be "),a("code",[e._v("QueryBalanceRequest")]),e._v("\nand "),a("code",[e._v("QueryBalanceResponse")]),e._v(". This will be more self-explanatory than "),a("code",[e._v("BalanceRequest")]),e._v("\nand "),a("code",[e._v("BalanceResponse")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"use-just-query-for-the-query-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-just-query-for-the-query-service"}},[e._v("#")]),e._v(" Use just "),a("code",[e._v("Query")]),e._v(" for the query service")]),e._v(" "),a("p",[e._v("Instead of "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/6033",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf's default service suffix recommendation"),a("OutboundLink")],1),e._v(",\nwe should simply use the shorter "),a("code",[e._v("Query")]),e._v(" for query services.")]),e._v(" "),a("p",[e._v("For other types of gRPC services, we should consider sticking with Buf's\ndefault recommendation.")]),e._v(" "),a("h4",{attrs:{id:"omit-get-and-query-from-query-service-rpc-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#omit-get-and-query-from-query-service-rpc-names"}},[e._v("#")]),e._v(" Omit "),a("code",[e._v("Get")]),e._v(" and "),a("code",[e._v("Query")]),e._v(" from query service RPC names")]),e._v(" "),a("p",[a("code",[e._v("Get")]),e._v(" and "),a("code",[e._v("Query")]),e._v(" should be omitted from "),a("code",[e._v("Query")]),e._v(" service names because they are\nredundant in the fully-qualified name. For instance, "),a("code",[e._v("/cosmos.bank.Query/QueryBalance")]),e._v("\njust says "),a("code",[e._v("Query")]),e._v(" twice without any new information.")]),e._v(" "),a("h2",{attrs:{id:"future-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements"}},[e._v("#")]),e._v(" Future Improvements")]),e._v(" "),a("p",[e._v("A registry of top-level package names should be created to coordinate naming\nacross the ecosystem, prevent collisions, and also help developers discover\nuseful schemas. A simple starting point would be a git repository with\ncommunity-based governance.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("names will be more concise and easier to read and type")]),e._v(" "),a("li",[e._v("all transactions using "),a("code",[e._v("Any")]),e._v(" will be at shorter ("),a("code",[e._v("_sdk.x")]),e._v(" and "),a("code",[e._v(".v1")]),e._v(" will be removed)")]),e._v(" "),a("li",[a("code",[e._v(".proto")]),e._v(" file imports will be more standard (without "),a("code",[e._v('"third_party/proto"')]),e._v(" in\nthe path)")]),e._v(" "),a("li",[e._v("code generation will be easier for clients because .proto files will be\nin a single "),a("code",[e._v("proto/")]),e._v(" directory which can be copied rather than scattered\nthroughout the Cosmos SDK")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(".proto")]),e._v("  files will need to be reorganized and refactored")]),e._v(" "),a("li",[e._v("some modules may need to be marked as alpha or beta")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])])}),[],!1,null,null,null);t.default=s.exports}}]);