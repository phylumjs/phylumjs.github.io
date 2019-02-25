(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{199:function(s,t,e){},200:function(s,t,e){s.exports=e.p+"img/e66bb4f1224eae999edcd35e8aa60eda.png"},201:function(s){s.exports={a:"Flexible Async JavaScript Task Runner"}},202:function(s,t,e){"use strict";var a=e(199);e.n(a).a},203:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"a-title"},[e("b-container",{staticClass:"text-center"},[e("b-img",{attrs:{src:s.header,fluid:"",alt:"PhylumJS"}}),s._v(" "),e("div",{staticClass:"lead"},[s._v("\n                "+s._s(s.description)+"\n            ")]),s._v(" "),e("div",[e("a",{attrs:{href:"https://travis-ci.org/phylumjs/pipeline",target:"_blank"}},[e("img",{attrs:{src:"https://travis-ci.org/phylumjs/pipeline.svg?branch=master"}})]),s._v(" "),e("a",{attrs:{href:"https://coveralls.io/github/phylumjs/pipeline?branch=master",target:"_blank"}},[e("img",{attrs:{src:"https://coveralls.io/repos/github/phylumjs/pipeline/badge.svg?branch=master"}})]),s._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/@phylum/pipeline",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/@phylum/pipeline.svg"}}),s._v(" "),e("img",{attrs:{src:"https://img.shields.io/npm/l/@phylum/pipeline.svg"}})])])],1)],1),s._v(" "),e("page-content")],1)};a._withStripped=!0;var n=e(200),i=e.n(n),r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("app-document",[e("h2",[s._v("Status")]),s._v(" "),e("p",[s._v("This is the documentation for the new beta that is current under development."),e("br"),s._v("\nVersion 3 docs are still available "),e("a",{attrs:{href:"https://github.com/phylumjs/docs-v3/tree/master/src/pages",target:"_blank"}},[s._v("here")]),s._v(".")]),s._v(" "),e("h1",[s._v("Installation")]),s._v(" "),e("pre",[e("code",{staticClass:"language-bash"},[s._v("npm i @phylum/pipeline")])]),s._v(" "),e("h2",[s._v("Quick Start")]),s._v(" "),e("h4",[e("router-link",{attrs:{to:"/manual/tasks"}},[s._v("Tasks")])],1),s._v(" "),e("p",[e("em",[s._v("Tasks")]),s._v(" execute async operations."),e("br"),s._v("\nThey can process the output of other tasks or update their own output over time.")]),s._v(" "),e("h4",[e("router-link",{attrs:{to:"/manual/containers"}},[s._v("Containers")])],1),s._v(" "),e("p",[s._v("A "),e("em",[s._v("container")]),s._v(" represents the environment in which tasks are executed."),e("br"),s._v("\nThey can hold different task instances or can be used for dependency injection.")]),s._v(" "),e("h4",[s._v("Example")]),s._v(" "),e("p",[s._v("The following example is written in "),e("a",{attrs:{href:"http://typescriptlang.org/",target:"_blank"}},[s._v("TypeScript")])]),s._v(" "),e("pre",[e("code",{staticClass:"language-ts"},[e("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Container, Task } "),e("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'@phylum/pipeline'")]),s._v(";\n\n"),e("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" Message "),e("span",{staticClass:"hljs-keyword"},[s._v("extends")]),s._v(" Task<"),e("span",{staticClass:"hljs-built_in"},[s._v("string")]),s._v("> {\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" run() {\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'Hello World!'")]),s._v(";\n    }\n}\n\n"),e("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" Logger "),e("span",{staticClass:"hljs-keyword"},[s._v("extends")]),s._v(" Task<"),e("span",{staticClass:"hljs-built_in"},[s._v("void")]),s._v("> {\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" run() {\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" message = "),e("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".use(Message);\n        "),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(message);\n    }\n}\n\n"),e("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Container().get(Logger).activate();")])])])};r._withStripped=!0;var l=e(15),p=Object(l.a)({},r,[],!1,null,null,null);p.options.__file="index.md";var o=p.exports,v=e(201),c={components:{"page-content":o},created:function(){this.header=i.a,this.description=v.a}},_=(e(202),Object(l.a)(c,a,[],!1,null,"2448c6fd",null));_.options.__file="src/components/page-home.vue";t.default=_.exports}}]);