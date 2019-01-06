(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{312:function(e,s,i){"use strict";i.r(s);var t=function(){var e=this.$createElement;this._self._c;return this._m(0)};t._withStripped=!0;var l=i(29),n=Object(l.a)({},t,[function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[i("h1",[e._v("Pipeline API")]),e._v(" "),i("p",[e._v("The pipeline class runs tasks and manages their states.")]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[i("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" Pipeline = "),i("span",{staticClass:"hljs-built_in"},[e._v("require")]),e._v("("),i("span",{staticClass:"hljs-string"},[e._v("'@phylum/pipeline'")]),e._v(")")])]),e._v(" "),i("h3",[i("code",[e._v("new Pipeline(entry[, options])")])]),e._v(" "),i("p",[e._v("Create a new pipeline instance.")]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[i("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" pipeline = "),i("span",{staticClass:"hljs-keyword"},[e._v("new")]),e._v(" Pipeline(entry)")])]),e._v(" "),i("ul",[i("li",[e._v("entry "),i("code",[e._v("<function>")]),e._v(" - The entry task.")]),e._v(" "),i("li",[e._v("options "),i("code",[e._v("<object>")]),e._v(" - Optional. An object with the following options:"),i("ul",[i("li",[e._v("autoDisposeUnused "),i("code",[e._v("<boolean>")]),e._v(" - Optional. Automatically dispose unused tasks when the pipeline resolves or rejects. If disabled, unused tasks will stay alive until "),i("code",[e._v("pipeline.destroyUnused()")]),e._v(" is called. Default is "),i("code",[e._v("true")])])])])]),e._v(" "),i("h3",[i("code",[e._v("pipeline.data")])]),e._v(" "),i("p",[e._v("An object to store custom data.")]),e._v(" "),i("h3",[i("code",[e._v("pipeline.isEnabled")])]),e._v(" "),i("p",[e._v("Check wether this pipeline is enabled or not."),i("br"),e._v(" "),i("em",[e._v("Calls to .enable(..) or .disable(..) will set this value immediately without waiting for pending promises.")])]),e._v(" "),i("h3",[i("code",[e._v("pipeline.enable()")])]),e._v(" "),i("p",[e._v("Enable the pipeline if not enabled.")]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[i("span",{staticClass:"hljs-keyword"},[e._v("await")]),e._v(" pipeline.enable()")])]),e._v(" "),i("ul",[i("li",[e._v("returns "),i("code",[e._v("<Promise>")]),e._v(" - The current state of the entry task.")])]),e._v(" "),i("h3",[i("code",[e._v("pipeline.disable()")])]),e._v(" "),i("p",[e._v("Disable the pipeline if enabled and dispose all tasks.")]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[i("span",{staticClass:"hljs-keyword"},[e._v("await")]),e._v(" pipeline.disable()")])]),e._v(" "),i("ul",[i("li",[e._v("returns "),i("code",[e._v("<Promise>")]),e._v(" - A promise that resolves when all tasks have been disposed.")])]),e._v(" "),i("h3",[i("code",[e._v("pipeline.disposeUnused()")])]),e._v(" "),i("p",[e._v("Manually dispose unused tasks."),i("br"),e._v(" "),i("em",[e._v("This can be used to dispose unused tasks while the pipeline is still enabled.")])]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[i("span",{staticClass:"hljs-keyword"},[e._v("await")]),e._v(" pipeline.disposeUnused()")])]),e._v(" "),i("ul",[i("li",[e._v("returns "),i("code",[e._v("<Promise>")]),e._v(" - A promise that resolves when all tasks have been disposed.")])]),e._v(" "),i("h3",[i("code",[e._v("pipeline.cli([options])")])]),e._v(" "),i("p",[e._v("Utility for implementing a simple cli that runs this pipeline.")]),e._v(" "),i("ul",[i("li",[e._v("The pipeline will be disabled when the process receives a 'SIGINT'.")]),e._v(" "),i("li",[e._v("The process will exit with code.."),i("ul",[i("li",[e._v(".."),i("strong",[e._v("0")]),e._v(" - if the pipeline resolved and the event loop is empty.")]),e._v(" "),i("li",[e._v(".."),i("strong",[e._v("1")]),e._v(" - if the pipeline rejected and the event loop is empty.")]),e._v(" "),i("li",[e._v(".."),i("strong",[e._v("1")]),e._v(" - if an unhandled rejection occurs.")]),e._v(" "),i("li",[e._v(".."),i("strong",[e._v("1")]),e._v(" - if the process receives a 'SIGINT' while the pipeline is disabled.")])])])]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[e._v("pipeline.cli({"),i("span",{staticClass:"hljs-built_in"},[e._v("module")]),e._v("})")])]),e._v(" "),i("ul",[i("li",[e._v("options "),i("code",[e._v("<object>")]),e._v(" - An object with the following options:"),i("ul",[i("li",[e._v("module "),i("code",[e._v("<Module>")]),e._v(" - Optional. If specified and the module is not the main module, the pipeline will be exported by that module instead of running it.")])])])]),e._v(" "),i("h3",[i("code",[e._v("Pipeline.cli([options, ]entry)")])]),e._v(" "),i("p",[e._v("Shorthand for creating a new pipeline and calling "),i("code",[e._v(".cli(..)")]),e._v(" on it.")]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[i("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" {cli} = "),i("span",{staticClass:"hljs-built_in"},[e._v("require")]),e._v("("),i("span",{staticClass:"hljs-string"},[e._v("'@phylum/pipeline'")]),e._v(")\n\ncli({"),i("span",{staticClass:"hljs-built_in"},[e._v("module")]),e._v("}, "),i("span",{staticClass:"hljs-keyword"},[e._v("async")]),e._v(" ctx => {\n    "),i("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".log("),i("span",{staticClass:"hljs-string"},[e._v("'Hello World!'")]),e._v(")\n})")])]),e._v(" "),i("ul",[i("li",[e._v("options "),i("code",[e._v("<object>")]),e._v(" - Optional. An object with options passed to the pipeline and the cli function.")]),e._v(" "),i("li",[e._v("entry "),i("code",[e._v("<function>")]),e._v(" - The pipeline entry.")])]),e._v(" "),i("h3",[i("code",[e._v("Event: 'resolve'")])]),e._v(" "),i("p",[e._v("The "),i("em",[e._v("resolve")]),e._v(" event is emitted when the entry task resolves.")]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[e._v("pipeline.on("),i("span",{staticClass:"hljs-string"},[e._v("'resolve'")]),e._v(", value => {\n    "),i("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".log(value)\n})")])]),e._v(" "),i("h3",[i("code",[e._v("Event: 'reject'")])]),e._v(" "),i("p",[e._v("The "),i("em",[e._v("reject")]),e._v(" event is emitted when the entry task rejects.")]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[e._v("pipeline.on("),i("span",{staticClass:"hljs-string"},[e._v("'reject'")]),e._v(", err => {\n    "),i("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".error(err)\n})")])]),e._v(" "),i("h3",[i("code",[e._v("Event: 'dispose-error'")])]),e._v(" "),i("p",[e._v("The "),i("em",[e._v("dispose-error")]),e._v(" event is emitted when an error occurs while disposing a task.")]),e._v(" "),i("pre",[i("code",{staticClass:"language-js"},[e._v("pipeline.on("),i("span",{staticClass:"hljs-string"},[e._v("'dispose-error'")]),e._v(", err => {\n    "),i("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".error(err)\n})")])])])}],!1,null,null,null);n.options.__file="src/content/pipeline/pipeline-api.md";s.default=n.exports}}]);