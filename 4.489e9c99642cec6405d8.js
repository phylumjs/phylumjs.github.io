(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{317:function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("b-container",{staticClass:"document"},[t("h1",[e._v("Pipeline API")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" {Pipeline} = "),t("span",{staticClass:"hljs-built_in"},[e._v("require")]),e._v("("),t("span",{staticClass:"hljs-string"},[e._v("'@phylum/pipeline'")]),e._v(")")])]),e._v(" "),t("h3",[t("code",[e._v("new Pipeline(entry[, options])")])]),e._v(" "),t("p",[e._v("Create a new pipeline instance.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" pipeline = "),t("span",{staticClass:"hljs-keyword"},[e._v("new")]),e._v(" Pipeline(entry)")])]),e._v(" "),t("ul",[t("li",[e._v("entry "),t("code",[e._v("<function>")]),e._v(" - The entry task.")]),e._v(" "),t("li",[e._v("options "),t("code",[e._v("<object>")]),e._v(" - Optional. An object with the following options:"),t("ul",[t("li",[e._v("autoDisposeUnused "),t("code",[e._v("<boolean>")]),e._v(" - Optional. Automatically dispose unused tasks when the pipeline resolves or rejects. If disabled, unused tasks will stay alive until "),t("code",[e._v("pipeline.destroyUnused()")]),e._v(" is called. Default is "),t("code",[e._v("true")])])])])]),e._v(" "),t("h3",[t("code",[e._v("pipeline.data")])]),e._v(" "),t("p",[e._v("An object to store custom data."),t("br"),e._v("\nThis object can be accessed by tasks via "),t("code",[e._v("ctx.pipeline.data")])]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[e._v("pipeline.data.foo = "),t("span",{staticClass:"hljs-string"},[e._v("'bar'")])])]),e._v(" "),t("h3",[t("code",[e._v("pipeline.isEnabled")])]),e._v(" "),t("p",[e._v("Check wether this pipeline is enabled or not."),t("br"),e._v("\nCalls to "),t("code",[e._v(".enable(..)")]),e._v(" or "),t("code",[e._v(".disable(..)")]),e._v(" will change this value immediately.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[e._v("pipeline.enable()\n"),t("span",{staticClass:"hljs-comment"},[e._v("// Results in:")]),e._v("\npipeline.isEnabled === "),t("span",{staticClass:"hljs-literal"},[e._v("true")])])]),e._v(" "),t("h3",[t("code",[e._v("pipeline.enable()")])]),e._v(" "),t("p",[e._v("Enable the pipeline if not enabled.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[e._v("await")]),e._v(" pipeline.enable()")])]),e._v(" "),t("ul",[t("li",[e._v("returns "),t("code",[e._v("<Promise>")]),e._v(" - The current state of the entry task.")])]),e._v(" "),t("h3",[t("code",[e._v("pipeline.disable()")])]),e._v(" "),t("p",[e._v("Disable the pipeline if enabled and dispose all tasks.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[e._v("await")]),e._v(" pipeline.disable()")])]),e._v(" "),t("ul",[t("li",[e._v("returns "),t("code",[e._v("<Promise>")]),e._v(" - A promise that resolves when all tasks have been disposed.")])]),e._v(" "),t("h3",[t("code",[e._v("pipeline.getContext(fn)")])]),e._v(" "),t("p",[e._v("Get an existing task context.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" ctx = pipeline.getContext(foo)")])]),e._v(" "),t("ul",[t("li",[e._v("fn "),t("code",[e._v("<null> | <function> | <Context>")]),e._v(" - The task executor or the context itself.")]),e._v(" "),t("li",[e._v("returns "),t("code",[e._v("<null> | <Context>")]),e._v(" - The context or null if not found.")])]),e._v(" "),t("h3",[t("code",[e._v("pipeline.disposeUnused()")])]),e._v(" "),t("p",[e._v("Manually dispose unused tasks."),t("br"),e._v(" "),t("em",[e._v("This can be used to dispose unused tasks while the pipeline is still enabled.")])]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[e._v("await")]),e._v(" pipeline.disposeUnused()")])]),e._v(" "),t("ul",[t("li",[e._v("returns "),t("code",[e._v("<Promise>")]),e._v(" - A promise that resolves when all tasks have been disposed.")])]),e._v(" "),t("h3",[t("code",[e._v("pipeline.cli([options])")])]),e._v(" "),t("p",[e._v("Utility for implementing a simple cli that runs this pipeline.")]),e._v(" "),t("ul",[t("li",[e._v("The pipeline will be disabled when the process receives a 'SIGINT'.")]),e._v(" "),t("li",[e._v("The process will exit with code.."),t("ul",[t("li",[e._v(".."),t("strong",[e._v("0")]),e._v(" - if the pipeline resolved and the event loop is empty.")]),e._v(" "),t("li",[e._v(".."),t("strong",[e._v("1")]),e._v(" - if the pipeline rejected or never resolved and the event loop is empty.")]),e._v(" "),t("li",[e._v(".."),t("strong",[e._v("1")]),e._v(" - if an unhandled rejection occurs.")]),e._v(" "),t("li",[e._v(".."),t("strong",[e._v("1")]),e._v(" - if the process receives a 'SIGINT' while the pipeline is disabled.")])])])]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[e._v("pipeline.cli({"),t("span",{staticClass:"hljs-built_in"},[e._v("module")]),e._v("})")])]),e._v(" "),t("ul",[t("li",[e._v("options "),t("code",[e._v("<object>")]),e._v(" - Optional. An object with the following options:"),t("ul",[t("li",[e._v("module "),t("code",[e._v("<Module>")]),e._v(" - Optional. If specified and the module is not the main module, the pipeline will be exported by that module instead of running it.")])])])]),e._v(" "),t("h3",[t("code",[e._v("cli([options, ]entry)")])]),e._v(" "),t("p",[e._v("Shorthand for creating a new pipeline and calling "),t("code",[e._v(".cli(..)")]),e._v(" on it.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" {cli} = "),t("span",{staticClass:"hljs-built_in"},[e._v("require")]),e._v("("),t("span",{staticClass:"hljs-string"},[e._v("'@phylum/pipeline'")]),e._v(")\n\ncli({"),t("span",{staticClass:"hljs-built_in"},[e._v("module")]),e._v("}, "),t("span",{staticClass:"hljs-keyword"},[e._v("async")]),e._v(" ctx => {\n    "),t("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".log("),t("span",{staticClass:"hljs-string"},[e._v("'Hello World!'")]),e._v(")\n})")])]),e._v(" "),t("ul",[t("li",[e._v("options "),t("code",[e._v("<object>")]),e._v(" - Optional. An object with options passed to the pipeline and the cli function.")]),e._v(" "),t("li",[e._v("entry "),t("code",[e._v("<function>")]),e._v(" - The pipeline entry.")])]),e._v(" "),t("h3",[t("code",[e._v("Event: 'resolve'")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("resolve")]),e._v(" event is emitted when the entry task resolves.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[e._v("pipeline.on("),t("span",{staticClass:"hljs-string"},[e._v("'resolve'")]),e._v(", (value, ctx) => {\n    "),t("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".log(value)\n})")])]),e._v(" "),t("ul",[t("li",[e._v("ctx "),t("code",[e._v("<Context>")]),e._v(" - The current entry context.")])]),e._v(" "),t("h3",[t("code",[e._v("Event: 'reject'")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("reject")]),e._v(" event is emitted when the entry task rejects.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[e._v("pipeline.on("),t("span",{staticClass:"hljs-string"},[e._v("'reject'")]),e._v(", (err, ctx) => {\n    "),t("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".error(err)\n})")])]),e._v(" "),t("ul",[t("li",[e._v("ctx "),t("code",[e._v("<Context>")]),e._v(" - The current entry context.")])]),e._v(" "),t("h3",[t("code",[e._v("Event: 'dispose-error'")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("dispose-error")]),e._v(" event is emitted when an error occurs while disposing a task.")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[e._v("pipeline.on("),t("span",{staticClass:"hljs-string"},[e._v("'dispose-error'")]),e._v(", (err, ctx) => {\n    "),t("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".error(err)\n})")])]),e._v(" "),t("ul",[t("li",[e._v("ctx "),t("code",[e._v("<Context>")]),e._v(" - The context that caused the error.")])])])};i._withStripped=!0;var l=t(52),n=Object(l.a)({},i,[],!1,null,null,null);n.options.__file="src/pages/api-pipeline.md";s.default=n.exports}}]);