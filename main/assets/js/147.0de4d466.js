(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{622:function(e,o,t){"use strict";t.r(o);var n=t(1),s=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"in-place-store-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-place-store-migrations"}},[e._v("#")]),e._v(" In-Place Store Migrations")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[e._v("Read and understand all the in-place store migration documentation before you run a migration on a live chain.")])]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Upgrade your app modules smoothly with custom in-place store migration logic.")]),e._v(" "),t("p",[e._v("The Cosmos SDK uses two methods to perform upgrades.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Exporting the entire application state to a JSON file using the "),t("code",[e._v("export")]),e._v(" CLI command, making changes, and then starting a new binary with the changed JSON file as the genesis file. See "),t("a",{attrs:{href:"https://docs.cosmos.network/v0.42/migrations/chain-upgrade-guide-040.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chain Upgrade Guide to v0.42"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Version v0.44 and later can perform upgrades in place to significantly decrease the upgrade time for chains with a larger state. Use the "),t("RouterLink",{attrs:{to:"/building-modules/upgrade.html"}},[e._v("Module Upgrade Guide")]),e._v(" to set up your application modules to take advantage of in-place upgrades.")],1)])]),e._v(" "),t("p",[e._v("This document provides steps to use the In-Place Store Migrations upgrade method.")]),e._v(" "),t("h2",{attrs:{id:"tracking-module-versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tracking-module-versions"}},[e._v("#")]),e._v(" Tracking Module Versions")]),e._v(" "),t("p",[e._v("Each module gets assigned a consensus version by the module developer. The consensus version serves as the breaking change version of the module. The Cosmos SDK keeps track of all module consensus versions in the x/upgrade "),t("code",[e._v("VersionMap")]),e._v(" store. During an upgrade, the difference between the old "),t("code",[e._v("VersionMap")]),e._v(" stored in state and the new "),t("code",[e._v("VersionMap")]),e._v(" is calculated by the Cosmos SDK. For each identified difference, the module-specific migrations are run and the respective consensus version of each upgraded module is incremented.")]),e._v(" "),t("h3",{attrs:{id:"consensus-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consensus-version"}},[e._v("#")]),e._v(" Consensus Version")]),e._v(" "),t("p",[e._v('The consensus version is defined on each app module by the module developer and serves as the breaking change version of the module. The consensus version informs the Cosmos SDK on which modules need to be upgraded. For example, if the bank module was version 2 and an upgrade introduces bank module 3, the Cosmos SDK upgrades the bank module and runs the "version 2 to 3" migration script.')]),e._v(" "),t("h3",{attrs:{id:"version-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-map"}},[e._v("#")]),e._v(" Version Map")]),e._v(" "),t("p",[e._v("The version map is a mapping of module names to consensus versions. The map is persisted to x/upgrade's state for use during in-place migrations. When migrations finish, the updated version map is persisted in the state.")]),e._v(" "),t("h2",{attrs:{id:"upgrade-handlers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-handlers"}},[e._v("#")]),e._v(" Upgrade Handlers")]),e._v(" "),t("p",[e._v("Upgrades use an "),t("code",[e._v("UpgradeHandler")]),e._v(" to facilitate migrations. The "),t("code",[e._v("UpgradeHandler")]),e._v(" functions implemented by the app developer must conform to the following function signature. These functions retrieve the "),t("code",[e._v("VersionMap")]),e._v(" from x/upgrade's state and return the new "),t("code",[e._v("VersionMap")]),e._v(" to be stored in x/upgrade after the upgrade. The diff between the two "),t("code",[e._v("VersionMap")]),e._v("s determines which modules need upgrading.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVcGdyYWRlSGFuZGxlciBmdW5jKGN0eCBzZGsuQ29udGV4dCwgcGxhbiBQbGFuLCBmcm9tVk0gVmVyc2lvbk1hcCkgKFZlcnNpb25NYXAsIGVycm9yKQo="}}),e._v(" "),t("p",[e._v("Inside these functions, you must perform any upgrade logic to include in the provided "),t("code",[e._v("plan")]),e._v(". All upgrade handler functions must end with the following line of code:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICByZXR1cm4gYXBwLm1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCBjZmcsIGZyb21WTSkK"}}),e._v(" "),t("h2",{attrs:{id:"running-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-migrations"}},[e._v("#")]),e._v(" Running Migrations")]),e._v(" "),t("p",[e._v("Migrations are run inside of an "),t("code",[e._v("UpgradeHandler")]),e._v(" using "),t("code",[e._v("app.mm.RunMigrations(ctx, cfg, vm)")]),e._v(". The "),t("code",[e._v("UpgradeHandler")]),e._v(" functions describe the functionality to occur during an upgrade. The "),t("code",[e._v("RunMigration")]),e._v(" function loops through the "),t("code",[e._v("VersionMap")]),e._v(" argument and runs the migration scripts for all versions that are less than the versions of the new binary app module. After the migrations are finished, a new "),t("code",[e._v("VersionMap")]),e._v(" is returned to persist the upgraded module versions to state.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y2ZnIDo9IG1vZHVsZS5OZXdDb25maWd1cmF0b3IoLi4uKQphcHAuVXBncmFkZUtlZXBlci5TZXRVcGdyYWRlSGFuZGxlcigmcXVvdDtteS1wbGFuJnF1b3Q7LCBmdW5jKGN0eCBzZGsuQ29udGV4dCwgcGxhbiB1cGdyYWRldHlwZXMuUGxhbiwgZnJvbVZNIG1vZHVsZS5WZXJzaW9uTWFwKSAobW9kdWxlLlZlcnNpb25NYXAsIGVycm9yKSB7CgogICAgLy8gLi4uCiAgICAvLyBhZGRpdGlvbmFsIHVwZ3JhZGUgbG9naWMKICAgIC8vIC4uLgoKICAgIC8vIHJldHVybnMgYSBWZXJzaW9uTWFwIHdpdGggdGhlIHVwZGF0ZWQgbW9kdWxlIENvbnNlbnN1c1ZlcnNpb25zCiAgICByZXR1cm4gYXBwLm1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCBmcm9tVk0pCn0pCg=="}}),e._v(" "),t("p",[e._v("To learn more about configuring migration scripts for your modules, see the "),t("RouterLink",{attrs:{to:"/building-modules/upgrade.html"}},[e._v("Module Upgrade Guide")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"order-of-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#order-of-migrations"}},[e._v("#")]),e._v(" Order Of Migrations")]),e._v(" "),t("p",[e._v("By default, all migrations are run in module name alphabetical ascending order, except "),t("code",[e._v("x/auth")]),e._v(" which is run last. The reason is state dependencies between x/auth and other modules (you can read more in "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/10606",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #10606"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("If you want to change the order of migration, then you should call "),t("code",[e._v("app.mm.SetOrderMigrations(module1, module2, ...)")]),e._v(" in your app.go file. The function will panic if you forget to include a module in the argument list.")]),e._v(" "),t("h2",{attrs:{id:"adding-new-modules-during-upgrades"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-modules-during-upgrades"}},[e._v("#")]),e._v(" Adding New Modules During Upgrades")]),e._v(" "),t("p",[e._v("You can introduce entirely new modules to the application during an upgrade. New modules are recognized because they have not yet been registered in "),t("code",[e._v("x/upgrade")]),e._v("'s "),t("code",[e._v("VersionMap")]),e._v(" store. In this case, "),t("code",[e._v("RunMigrations")]),e._v(" calls the "),t("code",[e._v("InitGenesis")]),e._v(" function from the corresponding module to set up its initial state.")]),e._v(" "),t("h3",{attrs:{id:"add-storeupgrades-for-new-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-storeupgrades-for-new-modules"}},[e._v("#")]),e._v(" Add StoreUpgrades for New Modules")]),e._v(" "),t("p",[e._v("All chains preparing to run in-place store migrations will need to manually add store upgrades for new modules and then configure the store loader to apply those upgrades. This ensures that the new module's stores are added to the multistore before the migrations begin.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBncmFkZUluZm8sIGVyciA6PSBhcHAuVXBncmFkZUtlZXBlci5SZWFkVXBncmFkZUluZm9Gcm9tRGlzaygpCmlmIGVyciAhPSBuaWwgewoJcGFuaWMoZXJyKQp9CgppZiB1cGdyYWRlSW5mby5OYW1lID09ICZxdW90O215LXBsYW4mcXVvdDsgJmFtcDsmYW1wOyAhYXBwLlVwZ3JhZGVLZWVwZXIuSXNTa2lwSGVpZ2h0KHVwZ3JhZGVJbmZvLkhlaWdodCkgewoJc3RvcmVVcGdyYWRlcyA6PSBzdG9yZXR5cGVzLlN0b3JlVXBncmFkZXN7CgkJLy8gYWRkIHN0b3JlIHVwZ3JhZGVzIGZvciBuZXcgbW9kdWxlcwoJCS8vIEV4YW1wbGU6CgkJLy8gICAgQWRkZWQ6IFtdc3RyaW5neyZxdW90O2ZvbyZxdW90OywgJnF1b3Q7YmFyJnF1b3Q7fSwKCQkvLyAuLi4KCX0KCgkvLyBjb25maWd1cmUgc3RvcmUgbG9hZGVyIHRoYXQgY2hlY2tzIGlmIHZlcnNpb24gPT0gdXBncmFkZUhlaWdodCBhbmQgYXBwbGllcyBzdG9yZSB1cGdyYWRlcwoJYXBwLlNldFN0b3JlTG9hZGVyKHVwZ3JhZGV0eXBlcy5VcGdyYWRlU3RvcmVMb2FkZXIodXBncmFkZUluZm8uSGVpZ2h0LCAmYW1wO3N0b3JlVXBncmFkZXMpKQp9Cg=="}}),e._v(" "),t("h2",{attrs:{id:"genesis-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-state"}},[e._v("#")]),e._v(" Genesis State")]),e._v(" "),t("p",[e._v("When starting a new chain, the consensus version of each module MUST be saved to state during the application's genesis. To save the consensus version, add the following line to the "),t("code",[e._v("InitChainer")]),e._v(" method in "),t("code",[e._v("app.go")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyAoYXBwICpNeUFwcCkgSW5pdENoYWluZXIoY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0SW5pdENoYWluKSBhYmNpLlJlc3BvbnNlSW5pdENoYWluIHsKICAuLi4KKyBhcHAuVXBncmFkZUtlZXBlci5TZXRNb2R1bGVWZXJzaW9uTWFwKGN0eCwgYXBwLm1tLkdldFZlcnNpb25NYXAoKSkKICAuLi4KfQo="}}),e._v(" "),t("p",[e._v("This information is used by the Cosmos SDK to detect when modules with newer versions are introduced to the app.")]),e._v(" "),t("p",[e._v("For a new module "),t("code",[e._v("foo")]),e._v(", "),t("code",[e._v("InitGenesis")]),e._v(" is called by "),t("code",[e._v("RunMigration")]),e._v(" only when "),t("code",[e._v("foo")]),e._v(" is registered in the module manager but it's not set in the "),t("code",[e._v("fromVM")]),e._v(". Therefore, if you want to skip "),t("code",[e._v("InitGenesis")]),e._v(" when a new module is added to the app, then you should set its module version in "),t("code",[e._v("fromVM")]),e._v(" to the module consensus version:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoJnF1b3Q7bXktcGxhbiZxdW90OywgZnVuYyhjdHggc2RrLkNvbnRleHQsIHBsYW4gdXBncmFkZXR5cGVzLlBsYW4sIGZyb21WTSBtb2R1bGUuVmVyc2lvbk1hcCkgKG1vZHVsZS5WZXJzaW9uTWFwLCBlcnJvcikgewogICAgLy8gLi4uCgogICAgLy8gU2V0IGZvbydzIHZlcnNpb24gdG8gdGhlIGxhdGVzdCBDb25zZW5zdXNWZXJzaW9uIGluIHRoZSBWZXJzaW9uTWFwLgogICAgLy8gVGhpcyB3aWxsIHNraXAgcnVubmluZyBJbml0R2VuZXNpcyBvbiBGb28KICAgIGZyb21WTVtmb28uTW9kdWxlTmFtZV0gPSBmb28uQXBwTW9kdWxle30uQ29uc2Vuc3VzVmVyc2lvbigpCgogICAgcmV0dXJuIGFwcC5tbS5SdW5NaWdyYXRpb25zKGN0eCwgZnJvbVZNKQp9KQo="}}),e._v(" "),t("h3",{attrs:{id:"overwriting-genesis-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overwriting-genesis-functions"}},[e._v("#")]),e._v(" Overwriting Genesis Functions")]),e._v(" "),t("p",[e._v("The Cosmos SDK offers modules that the application developer can import in their app. These modules often have an "),t("code",[e._v("InitGenesis")]),e._v(" function already defined.")]),e._v(" "),t("p",[e._v("You can write your own "),t("code",[e._v("InitGenesis")]),e._v(" function for an imported module. To do this, manually trigger your custom genesis function in the upgrade handler.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[e._v("You MUST manually set the consensus version in the version map passed to the "),t("code",[e._v("UpgradeHandler")]),e._v(" function. Without this, the SDK will run the Module's existing "),t("code",[e._v("InitGenesis")]),e._v(" code even if you triggered your custom function in the "),t("code",[e._v("UpgradeHandler")]),e._v(".")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0IGZvbyAmcXVvdDtnaXRodWIuY29tL215L21vZHVsZS9mb28mcXVvdDsKCmFwcC5VcGdyYWRlS2VlcGVyLlNldFVwZ3JhZGVIYW5kbGVyKCZxdW90O215LXBsYW4mcXVvdDssIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBwbGFuIHVwZ3JhZGV0eXBlcy5QbGFuLCBmcm9tVk0gbW9kdWxlLlZlcnNpb25NYXApICAobW9kdWxlLlZlcnNpb25NYXAsIGVycm9yKSB7CgogICAgLy8gUmVnaXN0ZXIgdGhlIGNvbnNlbnN1cyB2ZXJzaW9uIGluIHRoZSB2ZXJzaW9uIG1hcAogICAgLy8gdG8gYXZvaWQgdGhlIFNESyBmcm9tIHRyaWdnZXJpbmcgdGhlIGRlZmF1bHQKICAgIC8vIEluaXRHZW5lc2lzIGZ1bmN0aW9uLgogICAgZnJvbVZNWyZxdW90O2ZvbyZxdW90O10gPSBmb28uQXBwTW9kdWxle30uQ29uc2Vuc3VzVmVyc2lvbigpCgogICAgLy8gUnVuIGN1c3RvbSBJbml0R2VuZXNpcyBmb3IgZm9vCiAgICBhcHAubW1bJnF1b3Q7Zm9vJnF1b3Q7XS5Jbml0R2VuZXNpcyhjdHgsIGFwcC5hcHBDb2RlYywgbXlDdXN0b21HZW5lc2lzU3RhdGUpCgogICAgcmV0dXJuIGFwcC5tbS5SdW5NaWdyYXRpb25zKGN0eCwgY2ZnLCBmcm9tVk0pCn0pCg=="}}),e._v(" "),t("h2",{attrs:{id:"syncing-a-full-node-to-an-upgraded-blockchain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syncing-a-full-node-to-an-upgraded-blockchain"}},[e._v("#")]),e._v(" Syncing a Full Node to an Upgraded Blockchain")]),e._v(" "),t("p",[e._v("You can sync a full node to an existing blockchain which has been upgraded using Cosmovisor")]),e._v(" "),t("p",[e._v("To successfully sync, you must start with the initial binary that the blockchain started with at genesis. If all Software Upgrade Plans contain binary instruction, then you can run Cosmovisor with auto-download option to automatically handle downloading and switching to the binaries associated with each sequential upgrade. Otherwise, you need to manually provide all binaries to Cosmovisor.")]),e._v(" "),t("p",[e._v("To learn more about Cosmovisor, see the "),t("RouterLink",{attrs:{to:"/run-node/cosmovisor.html"}},[e._v("Cosmovisor Quick Start")]),e._v(".")],1)],1)}),[],!1,null,null,null);o.default=s.exports}}]);