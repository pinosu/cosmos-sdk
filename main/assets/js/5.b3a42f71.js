(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{528:function(e,t,a){e.exports=a.p+"assets/img/delegation_sequence.3a3fd6b8.svg"},529:function(e,t,a){e.exports=a.p+"assets/img/unbond_sequence.7b873f66.svg"},530:function(e,t,a){e.exports=a.p+"assets/img/begin_redelegation_sequence.bd8a89dc.svg"},613:function(e,t,a){"use strict";a.r(t);var d=a(1),s=Object(d.a)({},(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"messages"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),d("p",[e._v("In this section we describe the processing of the staking messages and the corresponding updates to the state. All created/modified state objects specified by each message are defined within the "),d("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html"}},[e._v("state")]),e._v(" section.")],1),e._v(" "),d("h2",{attrs:{id:"msgcreatevalidator"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msgcreatevalidator"}},[e._v("#")]),e._v(" MsgCreateValidator")]),e._v(" "),d("p",[e._v("A validator is created using the "),d("code",[e._v("MsgCreateValidator")]),e._v(" message.\nThe validator must be created with an initial delegation from the operator.")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBDcmVhdGVWYWxpZGF0b3IgZGVmaW5lcyBhIG1ldGhvZCBmb3IgY3JlYXRpbmcgYSBuZXcgdmFsaWRhdG9yLgogIHJwYyBDcmVhdGVWYWxpZGF0b3IoTXNnQ3JlYXRlVmFsaWRhdG9yKSByZXR1cm5zIChNc2dDcmVhdGVWYWxpZGF0b3JSZXNwb25zZSk7"}})],1),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ3JlYXRlVmFsaWRhdG9yIGRlZmluZXMgYSBTREsgbWVzc2FnZSBmb3IgY3JlYXRpbmcgYSBuZXcgdmFsaWRhdG9yLgptZXNzYWdlIE1zZ0NyZWF0ZVZhbGlkYXRvciB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgRGVzY3JpcHRpb24gICAgIGRlc2NyaXB0aW9uICAgICAgICAgPSAxIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKICBDb21taXNzaW9uUmF0ZXMgY29tbWlzc2lvbiAgICAgICAgICA9IDIgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIHN0cmluZyAgICAgICAgICBtaW5fc2VsZl9kZWxlZ2F0aW9uID0gMyBbCiAgICAoZ29nb3Byb3RvLmN1c3RvbXR5cGUpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnQmcXVvdDssCiAgICAoZ29nb3Byb3RvLm1vcmV0YWdzKSAgID0gJnF1b3Q7eWFtbDpcJnF1b3Q7bWluX3NlbGZfZGVsZWdhdGlvblwmcXVvdDsmcXVvdDssCiAgICAoZ29nb3Byb3RvLm51bGxhYmxlKSAgID0gZmFsc2UKICBdOwogIHN0cmluZyAgICAgICAgICAgICAgICAgICBkZWxlZ2F0b3JfYWRkcmVzcyA9IDQgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7ZGVsZWdhdG9yX2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yX2FkZHJlc3MgPSA1IFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O3ZhbGlkYXRvcl9hZGRyZXNzXCZxdW90OyZxdW90O107CiAgZ29vZ2xlLnByb3RvYnVmLkFueSAgICAgIHB1YmtleSAgICAgICAgICAgID0gNiBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtjb3Ntb3MuY3J5cHRvLlB1YktleSZxdW90O107CiAgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIHZhbHVlICAgICAgICAgICAgID0gNyBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),e._v(" "),d("p",[e._v("This message is expected to fail if:")]),e._v(" "),d("ul",[d("li",[e._v("another validator with this operator address is already registered")]),e._v(" "),d("li",[e._v("another validator with this pubkey is already registered")]),e._v(" "),d("li",[e._v("the initial self-delegation tokens are of a denom not specified as the bonding denom")]),e._v(" "),d("li",[e._v("the commission parameters are faulty, namely:\n"),d("ul",[d("li",[d("code",[e._v("MaxRate")]),e._v(" is either > 1 or < 0")]),e._v(" "),d("li",[e._v("the initial "),d("code",[e._v("Rate")]),e._v(" is either negative or > "),d("code",[e._v("MaxRate")])]),e._v(" "),d("li",[e._v("the initial "),d("code",[e._v("MaxChangeRate")]),e._v(" is either negative or > "),d("code",[e._v("MaxRate")])])])]),e._v(" "),d("li",[e._v("the description fields are too large")])]),e._v(" "),d("p",[e._v("This message creates and stores the "),d("code",[e._v("Validator")]),e._v(" object at appropriate indexes.\nAdditionally a self-delegation is made with the initial tokens delegation\ntokens "),d("code",[e._v("Delegation")]),e._v(". The validator always starts as unbonded but may be bonded\nin the first end-block.")]),e._v(" "),d("h2",{attrs:{id:"msgeditvalidator"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msgeditvalidator"}},[e._v("#")]),e._v(" MsgEditValidator")]),e._v(" "),d("p",[e._v("The "),d("code",[e._v("Description")]),e._v(", "),d("code",[e._v("CommissionRate")]),e._v(" of a validator can be updated using the\n"),d("code",[e._v("MsgEditValidator")]),e._v(" message.")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBFZGl0VmFsaWRhdG9yIGRlZmluZXMgYSBtZXRob2QgZm9yIGVkaXRpbmcgYW4gZXhpc3RpbmcgdmFsaWRhdG9yLgogIHJwYyBFZGl0VmFsaWRhdG9yKE1zZ0VkaXRWYWxpZGF0b3IpIHJldHVybnMgKE1zZ0VkaXRWYWxpZGF0b3JSZXNwb25zZSk7"}})],1),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnRWRpdFZhbGlkYXRvciBkZWZpbmVzIGEgU0RLIG1lc3NhZ2UgZm9yIGVkaXRpbmcgYW4gZXhpc3RpbmcgdmFsaWRhdG9yLgptZXNzYWdlIE1zZ0VkaXRWYWxpZGF0b3IgewogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CgogIERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uICAgICAgID0gMSBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07CiAgc3RyaW5nICAgICAgdmFsaWRhdG9yX2FkZHJlc3MgPSAyIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKCiAgLy8gV2UgcGFzcyBhIHJlZmVyZW5jZSB0byB0aGUgbmV3IGNvbW1pc3Npb24gcmF0ZSBhbmQgbWluIHNlbGYgZGVsZWdhdGlvbiBhcwogIC8vIGl0J3Mgbm90IG1hbmRhdG9yeSB0byB1cGRhdGUuIElmIG5vdCB1cGRhdGVkLCB0aGUgZGVzZXJpYWxpemVkIHJhdGUgd2lsbCBiZQogIC8vIHplcm8gd2l0aCBubyB3YXkgdG8gZGlzdGluZ3Vpc2ggaWYgYW4gdXBkYXRlIHdhcyBpbnRlbmRlZC4KICAvLyBSRUY6ICMyMzczCiAgc3RyaW5nIGNvbW1pc3Npb25fcmF0ZSA9IDMgWwogICAgKGdvZ29wcm90by5jdXN0b210eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5tb3JldGFncykgICA9ICZxdW90O3lhbWw6XCZxdW90O2NvbW1pc3Npb25fcmF0ZVwmcXVvdDsmcXVvdDsKICBdOwogIHN0cmluZyBtaW5fc2VsZl9kZWxlZ2F0aW9uID0gNCBbCiAgICAoZ29nb3Byb3RvLmN1c3RvbXR5cGUpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnQmcXVvdDssCiAgICAoZ29nb3Byb3RvLm1vcmV0YWdzKSAgID0gJnF1b3Q7eWFtbDpcJnF1b3Q7bWluX3NlbGZfZGVsZWdhdGlvblwmcXVvdDsmcXVvdDsKICBdOwp9"}})],1),e._v(" "),d("p",[e._v("This message is expected to fail if:")]),e._v(" "),d("ul",[d("li",[e._v("the initial "),d("code",[e._v("CommissionRate")]),e._v(" is either negative or > "),d("code",[e._v("MaxRate")])]),e._v(" "),d("li",[e._v("the "),d("code",[e._v("CommissionRate")]),e._v(" has already been updated within the previous 24 hours")]),e._v(" "),d("li",[e._v("the "),d("code",[e._v("CommissionRate")]),e._v(" is > "),d("code",[e._v("MaxChangeRate")])]),e._v(" "),d("li",[e._v("the description fields are too large")])]),e._v(" "),d("p",[e._v("This message stores the updated "),d("code",[e._v("Validator")]),e._v(" object.")]),e._v(" "),d("h2",{attrs:{id:"msgdelegate"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msgdelegate"}},[e._v("#")]),e._v(" MsgDelegate")]),e._v(" "),d("p",[e._v("Within this message the delegator provides coins, and in return receives\nsome amount of their validator's (newly created) delegator-shares that are\nassigned to "),d("code",[e._v("Delegation.Shares")]),e._v(".")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBEZWxlZ2F0ZSBkZWZpbmVzIGEgbWV0aG9kIGZvciBwZXJmb3JtaW5nIGEgZGVsZWdhdGlvbiBvZiBjb2lucwogIC8vIGZyb20gYSBkZWxlZ2F0b3IgdG8gYSB2YWxpZGF0b3IuCiAgcnBjIERlbGVnYXRlKE1zZ0RlbGVnYXRlKSByZXR1cm5zIChNc2dEZWxlZ2F0ZVJlc3BvbnNlKTs="}})],1),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnRGVsZWdhdGUgZGVmaW5lcyBhIFNESyBtZXNzYWdlIGZvciBwZXJmb3JtaW5nIGEgZGVsZWdhdGlvbiBvZiBjb2lucwovLyBmcm9tIGEgZGVsZWdhdG9yIHRvIGEgdmFsaWRhdG9yLgptZXNzYWdlIE1zZ0RlbGVnYXRlIHsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgZGVsZWdhdG9yX2FkZHJlc3MgPSAxIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2RlbGVnYXRvcl9hZGRyZXNzXCZxdW90OyZxdW90O107CiAgc3RyaW5nICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcl9hZGRyZXNzID0gMiBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDt2YWxpZGF0b3JfYWRkcmVzc1wmcXVvdDsmcXVvdDtdOwogIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBhbW91bnQgICAgICAgICAgICA9IDMgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwp9"}})],1),e._v(" "),d("p",[e._v("This message is expected to fail if:")]),e._v(" "),d("ul",[d("li",[e._v("the validator does not exist")]),e._v(" "),d("li",[e._v("the "),d("code",[e._v("Amount")]),e._v(" "),d("code",[e._v("Coin")]),e._v(" has a denomination different than one defined by "),d("code",[e._v("params.BondDenom")])]),e._v(" "),d("li",[e._v("the exchange rate is invalid, meaning the validator has no tokens (due to slashing) but there are outstanding shares")]),e._v(" "),d("li",[e._v("the amount delegated is less than the minimum allowed delegation")])]),e._v(" "),d("p",[e._v("If an existing "),d("code",[e._v("Delegation")]),e._v(" object for provided addresses does not already\nexist then it is created as part of this message otherwise the existing\n"),d("code",[e._v("Delegation")]),e._v(" is updated to include the newly received shares.")]),e._v(" "),d("p",[e._v("The delegator receives newly minted shares at the current exchange rate.\nThe exchange rate is the number of existing shares in the validator divided by\nthe number of currently delegated tokens.")]),e._v(" "),d("p",[e._v("The validator is updated in the "),d("code",[e._v("ValidatorByPower")]),e._v(" index, and the delegation is\ntracked in validator object in the "),d("code",[e._v("Validators")]),e._v(" index.")]),e._v(" "),d("p",[e._v("It is possible to delegate to a jailed validator, the only difference being it\nwill not be added to the power index until it is unjailed.")]),e._v(" "),d("p",[d("img",{attrs:{src:a(528),alt:"Delegation sequence"}})]),e._v(" "),d("h2",{attrs:{id:"msgundelegate"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msgundelegate"}},[e._v("#")]),e._v(" MsgUndelegate")]),e._v(" "),d("p",[e._v("The "),d("code",[e._v("MsgUndelegate")]),e._v(" message allows delegators to undelegate their tokens from\nvalidator.")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBVbmRlbGVnYXRlIGRlZmluZXMgYSBtZXRob2QgZm9yIHBlcmZvcm1pbmcgYW4gdW5kZWxlZ2F0aW9uIGZyb20gYQogIC8vIGRlbGVnYXRlIGFuZCBhIHZhbGlkYXRvci4KICBycGMgVW5kZWxlZ2F0ZShNc2dVbmRlbGVnYXRlKSByZXR1cm5zIChNc2dVbmRlbGVnYXRlUmVzcG9uc2UpOw=="}})],1),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVW5kZWxlZ2F0ZSBkZWZpbmVzIGEgU0RLIG1lc3NhZ2UgZm9yIHBlcmZvcm1pbmcgYW4gdW5kZWxlZ2F0aW9uIGZyb20gYQovLyBkZWxlZ2F0ZSBhbmQgYSB2YWxpZGF0b3IuCm1lc3NhZ2UgTXNnVW5kZWxlZ2F0ZSB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgc3RyaW5nICAgICAgICAgICAgICAgICAgIGRlbGVnYXRvcl9hZGRyZXNzID0gMSBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtkZWxlZ2F0b3JfYWRkcmVzc1wmcXVvdDsmcXVvdDtdOwogIHN0cmluZyAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JfYWRkcmVzcyA9IDIgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7dmFsaWRhdG9yX2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gYW1vdW50ICAgICAgICAgICAgPSAzIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKfQ=="}})],1),e._v(" "),d("p",[e._v("This message returns a response containing the completion time of the undelegation:")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVW5kZWxlZ2F0ZVJlc3BvbnNlIGRlZmluZXMgdGhlIE1zZy9VbmRlbGVnYXRlIHJlc3BvbnNlIHR5cGUuCm1lc3NhZ2UgTXNnVW5kZWxlZ2F0ZVJlc3BvbnNlIHsKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIGNvbXBsZXRpb25fdGltZSA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlXTsKfQ=="}})],1),e._v(" "),d("p",[e._v("This message is expected to fail if:")]),e._v(" "),d("ul",[d("li",[e._v("the delegation doesn't exist")]),e._v(" "),d("li",[e._v("the validator doesn't exist")]),e._v(" "),d("li",[e._v("the delegation has less shares than the ones worth of "),d("code",[e._v("Amount")])]),e._v(" "),d("li",[e._v("existing "),d("code",[e._v("UnbondingDelegation")]),e._v(" has maximum entries as defined by "),d("code",[e._v("params.MaxEntries")])]),e._v(" "),d("li",[e._v("the "),d("code",[e._v("Amount")]),e._v(" has a denomination different than one defined by "),d("code",[e._v("params.BondDenom")])])]),e._v(" "),d("p",[e._v("When this message is processed the following actions occur:")]),e._v(" "),d("ul",[d("li",[e._v("validator's "),d("code",[e._v("DelegatorShares")]),e._v(" and the delegation's "),d("code",[e._v("Shares")]),e._v(" are both reduced by the message "),d("code",[e._v("SharesAmount")])]),e._v(" "),d("li",[e._v("calculate the token worth of the shares remove that amount tokens held within the validator")]),e._v(" "),d("li",[e._v("with those removed tokens, if the validator is:\n"),d("ul",[d("li",[d("code",[e._v("Bonded")]),e._v(" - add them to an entry in "),d("code",[e._v("UnbondingDelegation")]),e._v(" (create "),d("code",[e._v("UnbondingDelegation")]),e._v(" if it doesn't exist) with a completion time a full unbonding period from the current time. Update pool shares to reduce BondedTokens and increase NotBondedTokens by token worth of the shares.")]),e._v(" "),d("li",[d("code",[e._v("Unbonding")]),e._v(" - add them to an entry in "),d("code",[e._v("UnbondingDelegation")]),e._v(" (create "),d("code",[e._v("UnbondingDelegation")]),e._v(" if it doesn't exist) with the same completion time as the validator ("),d("code",[e._v("UnbondingMinTime")]),e._v(").")]),e._v(" "),d("li",[d("code",[e._v("Unbonded")]),e._v(" - then send the coins the message "),d("code",[e._v("DelegatorAddr")])])])]),e._v(" "),d("li",[e._v("if there are no more "),d("code",[e._v("Shares")]),e._v(" in the delegation, then the delegation object is removed from the store\n"),d("ul",[d("li",[e._v("under this situation if the delegation is the validator's self-delegation then also jail the validator.")])])])]),e._v(" "),d("p",[d("img",{attrs:{src:a(529),alt:"Unbond sequence"}})]),e._v(" "),d("h2",{attrs:{id:"msgcancelunbondingdelegation"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msgcancelunbondingdelegation"}},[e._v("#")]),e._v(" MsgCancelUnbondingDelegation")]),e._v(" "),d("p",[e._v("The "),d("code",[e._v("MsgCancelUnbondingDelegation")]),e._v(" message allows delegators to cancel the "),d("code",[e._v("unbondingDelegation")]),e._v(" entry and deleagate back to a previous validator.")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uIGRlZmluZXMgYSBtZXRob2QgZm9yIHBlcmZvcm1pbmcgY2FuY2VsaW5nIHRoZSB1bmJvbmRpbmcgZGVsZWdhdGlvbgogIC8vIGFuZCBkZWxlZ2F0ZSBiYWNrIHRvIHByZXZpb3VzIHZhbGlkYXRvci4KICBycGMgQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbihNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uKSByZXR1cm5zIChNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uUmVzcG9uc2UpOw=="}})],1),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiBkZWZpbmVzIHRoZSBTREsgbWVzc2FnZSBmb3IgcGVyZm9ybWluZyBhIGNhbmNlbCB1bmJvbmRpbmcgZGVsZWdhdGlvbiBmb3IgZGVsZWdhdG9yCm1lc3NhZ2UgTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbnsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgZGVsZWdhdG9yX2FkZHJlc3MgPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CiAgc3RyaW5nICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcl9hZGRyZXNzID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBhbW91bnQgICAgICAgICAgICA9IDMgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIC8vIGNyZWF0aW9uX2hlaWdodCBpcyB0aGUgaGVpZ2h0IHdoaWNoIHRoZSB1bmJvbmRpbmcgdG9vayBwbGFjZS4KICB1aW50NjQgY3JlYXRpb25faGVpZ2h0ID0gNDsKfQ=="}})],1),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvblJlc3BvbnNlCm1lc3NhZ2UgTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvblJlc3BvbnNle30="}})],1),e._v(" "),d("p",[e._v("This message is expected to fail if:")]),e._v(" "),d("ul",[d("li",[e._v("the "),d("code",[e._v("unbondingDelegation")]),e._v(" entry is already processed.")]),e._v(" "),d("li",[e._v("the "),d("code",[e._v("cancel unbonding delegation")]),e._v(" amount is greater than the "),d("code",[e._v("unbondingDelegation")]),e._v(" entry balance.")]),e._v(" "),d("li",[e._v("the "),d("code",[e._v("cancel unbonding delegation")]),e._v(" height doesn't exists in the "),d("code",[e._v("unbondingDelegationQueue")]),e._v(" of the delegator.")])]),e._v(" "),d("p",[e._v("When this message is processed the following actions occur:")]),e._v(" "),d("ul",[d("li",[e._v("if the "),d("code",[e._v("unbondingDelegation")]),e._v(" Entry balance is zero\n"),d("ul",[d("li",[e._v("in this condition "),d("code",[e._v("unbondingDelegation")]),e._v(" entry will be removed from "),d("code",[e._v("unbondingDelegationQueue")]),e._v(".")]),e._v(" "),d("li",[e._v("otherwise "),d("code",[e._v("unbondingDelegationQueue")]),e._v(" will be updated with new "),d("code",[e._v("unbondingDelegation")]),e._v(" entry balance and initial balance")])])]),e._v(" "),d("li",[e._v("the validator's "),d("code",[e._v("DelegatorShares")]),e._v(" and the delegation's "),d("code",[e._v("Shares")]),e._v(" are both increased by the message "),d("code",[e._v("Amount")]),e._v(".")])]),e._v(" "),d("h2",{attrs:{id:"msgbeginredelegate"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msgbeginredelegate"}},[e._v("#")]),e._v(" MsgBeginRedelegate")]),e._v(" "),d("p",[e._v("The redelegation command allows delegators to instantly switch validators. Once\nthe unbonding period has passed, the redelegation is automatically completed in\nthe EndBlocker.")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBCZWdpblJlZGVsZWdhdGUgZGVmaW5lcyBhIG1ldGhvZCBmb3IgcGVyZm9ybWluZyBhIHJlZGVsZWdhdGlvbgogIC8vIG9mIGNvaW5zIGZyb20gYSBkZWxlZ2F0b3IgYW5kIHNvdXJjZSB2YWxpZGF0b3IgdG8gYSBkZXN0aW5hdGlvbiB2YWxpZGF0b3IuCiAgcnBjIEJlZ2luUmVkZWxlZ2F0ZShNc2dCZWdpblJlZGVsZWdhdGUpIHJldHVybnMgKE1zZ0JlZ2luUmVkZWxlZ2F0ZVJlc3BvbnNlKTs="}})],1),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQmVnaW5SZWRlbGVnYXRlIGRlZmluZXMgYSBTREsgbWVzc2FnZSBmb3IgcGVyZm9ybWluZyBhIHJlZGVsZWdhdGlvbgovLyBvZiBjb2lucyBmcm9tIGEgZGVsZWdhdG9yIGFuZCBzb3VyY2UgdmFsaWRhdG9yIHRvIGEgZGVzdGluYXRpb24gdmFsaWRhdG9yLgptZXNzYWdlIE1zZ0JlZ2luUmVkZWxlZ2F0ZSB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgc3RyaW5nICAgICAgICAgICAgICAgICAgIGRlbGVnYXRvcl9hZGRyZXNzICAgICA9IDEgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7ZGVsZWdhdG9yX2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yX3NyY19hZGRyZXNzID0gMiBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDt2YWxpZGF0b3Jfc3JjX2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yX2RzdF9hZGRyZXNzID0gMyBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDt2YWxpZGF0b3JfZHN0X2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gYW1vdW50ICAgICAgICAgICAgICAgID0gNCBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),e._v(" "),d("p",[e._v("This message returns a response containing the completion time of the redelegation:")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQmVnaW5SZWRlbGVnYXRlUmVzcG9uc2UgZGVmaW5lcyB0aGUgTXNnL0JlZ2luUmVkZWxlZ2F0ZSByZXNwb25zZSB0eXBlLgptZXNzYWdlIE1zZ0JlZ2luUmVkZWxlZ2F0ZVJlc3BvbnNlIHsKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIGNvbXBsZXRpb25fdGltZSA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlXTsKfQ=="}})],1),e._v(" "),d("p",[e._v("This message is expected to fail if:")]),e._v(" "),d("ul",[d("li",[e._v("the delegation doesn't exist")]),e._v(" "),d("li",[e._v("the source or destination validators don't exist")]),e._v(" "),d("li",[e._v("the delegation has less shares than the ones worth of "),d("code",[e._v("Amount")])]),e._v(" "),d("li",[e._v("the source validator has a receiving redelegation which is not matured (aka. the redelegation may be transitive)")]),e._v(" "),d("li",[e._v("existing "),d("code",[e._v("Redelegation")]),e._v(" has maximum entries as defined by "),d("code",[e._v("params.MaxEntries")])]),e._v(" "),d("li",[e._v("the "),d("code",[e._v("Amount")]),e._v(" "),d("code",[e._v("Coin")]),e._v(" has a denomination different than one defined by "),d("code",[e._v("params.BondDenom")])])]),e._v(" "),d("p",[e._v("When this message is processed the following actions occur:")]),e._v(" "),d("ul",[d("li",[e._v("the source validator's "),d("code",[e._v("DelegatorShares")]),e._v(" and the delegations "),d("code",[e._v("Shares")]),e._v(" are both reduced by the message "),d("code",[e._v("SharesAmount")])]),e._v(" "),d("li",[e._v("calculate the token worth of the shares remove that amount tokens held within the source validator.")]),e._v(" "),d("li",[e._v("if the source validator is:\n"),d("ul",[d("li",[d("code",[e._v("Bonded")]),e._v(" - add an entry to the "),d("code",[e._v("Redelegation")]),e._v(" (create "),d("code",[e._v("Redelegation")]),e._v(" if it doesn't exist) with a completion time a full unbonding period from the current time. Update pool shares to reduce BondedTokens and increase NotBondedTokens by token worth of the shares (this may be effectively reversed in the next step however).")]),e._v(" "),d("li",[d("code",[e._v("Unbonding")]),e._v(" - add an entry to the "),d("code",[e._v("Redelegation")]),e._v(" (create "),d("code",[e._v("Redelegation")]),e._v(" if it doesn't exist) with the same completion time as the validator ("),d("code",[e._v("UnbondingMinTime")]),e._v(").")]),e._v(" "),d("li",[d("code",[e._v("Unbonded")]),e._v(" - no action required in this step")])])]),e._v(" "),d("li",[e._v("Delegate the token worth to the destination validator, possibly moving tokens back to the bonded state.")]),e._v(" "),d("li",[e._v("if there are no more "),d("code",[e._v("Shares")]),e._v(" in the source delegation, then the source delegation object is removed from the store\n"),d("ul",[d("li",[e._v("under this situation if the delegation is the validator's self-delegation then also jail the validator.")])])])]),e._v(" "),d("p",[d("img",{attrs:{src:a(530),alt:"Begin redelegation sequence"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);