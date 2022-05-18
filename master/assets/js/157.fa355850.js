(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{807:function(e,t,a){"use strict";a.r(t);var d=a(1),o=Object(d.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pre-upgrade-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-upgrade-handling"}},[e._v("#")]),e._v(" Pre-Upgrade Handling")]),e._v(" "),a("p",[e._v("Cosmovisor supports custom pre-upgrade handling. Use pre-upgrade handling when you need to implement application config changes that are required in the newer version before you perform the upgrade.")]),e._v(" "),a("p",[e._v("Using Cosmovisor pre-upgrade handling is optional. If pre-upgrade handling is not implemented, the upgrade continues.")]),e._v(" "),a("p",[e._v("For example, make the required new-version changes to "),a("code",[e._v("app.toml")]),e._v(" settings during the pre-upgrade handling. The pre-upgrade handling process means that the file does not have to be manually updated after the upgrade.")]),e._v(" "),a("p",[e._v("Before the application binary is upgraded, Cosmovisor calls a "),a("code",[e._v("pre-upgrade")]),e._v(" command that can  be implemented by the application.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("pre-upgrade")]),e._v(" command does not take in any command-line arguments and is expected to terminate with the following exit codes:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Exit status code")]),e._v(" "),a("th",[e._v("How it is handled in Cosmosvisor")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("0")])]),e._v(" "),a("td",[e._v("Assumes "),a("code",[e._v("pre-upgrade")]),e._v(" command executed successfully and continues the upgrade.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("1")])]),e._v(" "),a("td",[e._v("Default exit code when "),a("code",[e._v("pre-upgrade")]),e._v(" command has not been implemented.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("30")])]),e._v(" "),a("td",[a("code",[e._v("pre-upgrade")]),e._v(" command was executed but failed. This fails the entire upgrade.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("31")])]),e._v(" "),a("td",[a("code",[e._v("pre-upgrade")]),e._v(" command was executed but failed. But the command is retried until exit code "),a("code",[e._v("1")]),e._v(" or "),a("code",[e._v("30")]),e._v(" are returned.")])])])]),e._v(" "),a("h2",{attrs:{id:"sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[e._v("#")]),e._v(" Sample")]),e._v(" "),a("p",[e._v("Here is a sample structure of the "),a("code",[e._v("pre-upgrade")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBwcmVVcGdyYWRlQ29tbWFuZCgpICpjb2JyYS5Db21tYW5kIHsKCWNtZCA6PSAmYW1wO2NvYnJhLkNvbW1hbmR7CgkJVXNlOiAgICZxdW90O3ByZS11cGdyYWRlJnF1b3Q7LAoJCVNob3J0OiAmcXVvdDtQcmUtdXBncmFkZSBjb21tYW5kJnF1b3Q7LAogICAgICAgIExvbmc6ICZxdW90O1ByZS11cGdyYWRlIGNvbW1hbmQgdG8gaW1wbGVtZW50IGN1c3RvbSBwcmUtdXBncmFkZSBoYW5kbGluZyZxdW90OywKCQlSdW46IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBhcmdzIFtdc3RyaW5nKSB7CgoJCQllcnIgOj0gSGFuZGxlUHJlVXBncmFkZSgpCgoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCW9zLkV4aXQoMzApCgkJCX0KCgkJCW9zLkV4aXQoMCkKCgkJfSwKCX0KCglyZXR1cm4gY21kCn0K"}}),e._v(" "),a("p",[e._v("Ensure that the pre-upgrade command has been registered in the application:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cm9vdENtZC5BZGRDb21tYW5kKAoJCS8vIC4uCgkJcHJlVXBncmFkZUNvbW1hbmQoKSwKCQkvLyAuLgoJKQo="}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);