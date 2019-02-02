(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{313:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("b-container",{staticClass:"document"},[t("h1",[s._v("Pipeline Usage")]),s._v(" "),t("p",[s._v("The pipeline class manages task contexts and states.")]),s._v(" "),t("pre",[t("code",{staticClass:"language-bash"},[s._v("npm i @phylum/pipeline")])]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {Pipeline} = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'@phylum/pipeline'")]),s._v(")")])]),s._v(" "),t("h2",[s._v("Entry")]),s._v(" "),t("p",[s._v("The pipeline takes a single entry "),t("router-link",{attrs:{to:"/manual/tasks"}},[s._v("task")]),s._v("."),t("br"),s._v("\nThis task is executed when the pipeline is enabled.")],1),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" pipeline = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Pipeline("),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" ctx => {\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'Hello World!'")]),s._v(")\n})")])]),s._v(" "),t("h2",[s._v("State")]),s._v(" "),t("p",[s._v("The pipeline can be enabled or disabled."),t("br"),s._v("\nIf the pipeline is enabled and the entry task is disposed, it will re-execute the entry task.")]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" state = pipeline.enable()\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 'state' is the current state of the entry task.")])])]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" disposal = pipeline.disable()\n"),t("span",{staticClass:"hljs-comment"},[s._v("// The 'disposal' promise will resolve when all tasks have been disposed.")])])]),s._v(" "),t("h2",[s._v("Output")]),s._v(" "),t("p",[s._v("Every time the entry task resolves (or pushes an update that resolves) an "),t("code",[s._v("resolve")]),s._v(" event will be emitted:")]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" pipeline = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Pipeline("),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" ctx => {\n    setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n        ctx.push("),t("span",{staticClass:"hljs-string"},[s._v("'bar'")]),s._v(")\n    }, "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(")\n\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'foo'")]),s._v("\n})\n\npipeline.on("),t("span",{staticClass:"hljs-string"},[s._v("'resolve'")]),s._v(", result => {\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(result)\n})\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("/*\n    Outputs:\n    - foo\n    - bar\n*/")])])]),s._v(" "),t("h2",[s._v("Error Handling")]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[s._v("pipeline.on("),t("span",{staticClass:"hljs-string"},[s._v("'reject'")]),s._v(", err => {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// Emitted when the entry task rejects.")]),s._v("\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".error(err)\n})\n\npipeline.on("),t("span",{staticClass:"hljs-string"},[s._v("'dispose-error'")]),s._v(", err => {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// Emitted when an error occurs while disposing a task.")]),s._v("\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".error(err)\n})")])])])};a._withStripped=!0;var n=t(52),l=Object(n.a)({},a,[],!1,null,null,null);l.options.__file="src/pages/manual-pipeline.md";e.default=l.exports}}]);