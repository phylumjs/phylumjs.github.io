(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{314:function(s,a,t){"use strict";t.r(a);var n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("b-container",{staticClass:"document"},[t("h1",[s._v("Writing Tasks")]),s._v(" "),t("p",[s._v("Tasks are simple functions that take the "),t("router-link",{attrs:{to:"/api/tasks"}},[s._v("context")]),s._v(" as first argument and can return a value.")],1),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("task")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'Hello World!'")]),s._v(")\n}")])]),s._v(" "),t("h2",[s._v("Lifecycle & Resources")]),s._v(" "),t("p",[s._v("Task states are cached by the pipeline. After a task has completed, it can still have resources like file system watchers. Tasks can be disposed to free these resources and reset it's state. This can be done manually, by disabling the pipeline or by dependency tasks pushing updates.")]),s._v(" "),t("p",[s._v("Disposed tasks are re-executed with a new context when required."),t("br"),s._v("\nWhen the entry task is disposed and the pipeline is still enabled, the pipeline will re execute the entry task.")]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("task")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// This resource will be alive after the task has completed:")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" watcher = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" SomeFSWatcher()\n\n    ctx.on("),t("span",{staticClass:"hljs-string"},[s._v("'dispose'")]),s._v(", () => {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// Free resources when the task is disposed:")]),s._v("\n        watcher.close()\n    })\n}")])]),s._v(" "),t("p",[s._v("If needed, 'dispose' event listeners may return a promise."),t("br"),s._v(" "),t("em",[s._v("This will delay the re-execution of this task and the promise returned by pipeline.disable(..)")])]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[s._v("ctx.on("),t("span",{staticClass:"hljs-string"},[s._v("'dispose'")]),s._v(", "),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" () => {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" watcher.close()\n})")])]),s._v(" "),t("h2",[s._v("Dependencies")]),s._v(" "),t("p",[s._v("A task can use other tasks as dependencies."),t("br"),s._v("\nThis will basically ensure that the current task is updated when a dependency updates.")]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("entry")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v(".all([\n        ctx.use(taskA),\n        ctx.use(taskB)\n    ])\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("taskA")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" ctx.use(taskC)\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("taskB")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v(".all([\n        ctx.use(taskC),\n        ctx.use(taskD)\n    ])\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("taskC")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ }\n"),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("taskD")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ }")])]),s._v(" "),t("p",[t("strong",[s._v("Note")]),s._v(", that it is recommended to run distinct tasks in parallel using "),t("code",[s._v("Promise.all")]),s._v(" to improve speed.")]),s._v(" "),t("h5",[s._v("Example")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/tasks_dependencies.svg",alt:""}})]),s._v(" "),t("h2",[s._v("Push Updates")]),s._v(" "),t("p",[s._v("Every task can manually push updates to it's dependents (or the pipeline if the entry task).")]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("task")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// Push a new value:")]),s._v("\n        ctx.push("),t("span",{staticClass:"hljs-string"},[s._v("'next result'")]),s._v(")\n\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// or a promise:")]),s._v("\n        ctx.push(somePromise)\n    }, "),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v(")\n\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'initial result'")]),s._v("\n}")])]),s._v(" "),t("h5",[s._v("Example")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/tasks_push_updates.svg",alt:""}})]),s._v(" "),t("h2",[s._v("Handling Updates")]),s._v(" "),t("p",[s._v("By default, a task is disposed when a dependency pushes an update which will result in re-execution in the most cases. However, a task can implement it's own logic for handling updates without beeing disposed.")]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("bar")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" initialResult = "),t("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" ctx.use(foo)\n\n    ctx.pull(foo, state => {\n        state.then("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("value")]),s._v(" =>")]),s._v(" {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 'value' is the updated result.")]),s._v("\n        }).catch("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("err")]),s._v(" =>")]),s._v(" {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// In most cases it makes sense to push an update in case of an error:")]),s._v("\n            ctx.push("),t("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v(".reject(err))\n        })\n    })\n}")])]),s._v(" "),t("p",[s._v("As an alternative "),t("code",[s._v("ctx.pullImmediate(..)")]),s._v(" can be used which will also start the dependency and call the handler with the initial (or current) state.")]),s._v(" "),t("pre",[t("code",{staticClass:"language-js"},[t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("bar")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    ctx.pullImmediate(foo, state => {\n        state.then("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("value")]),s._v(" =>")]),s._v(" {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 'value' is the initial or updated result.")]),s._v("\n        }).catch("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("err")]),s._v(" =>")]),s._v(" {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// ...")]),s._v("\n        })\n    })\n}")])]),s._v(" "),t("h5",[s._v("Example")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/tasks_handle_updates.svg",alt:""}})])])};n._withStripped=!0;var e=t(52),l=Object(e.a)({},n,[],!1,null,null,null);l.options.__file="src/pages/manual-tasks.md";a.default=l.exports}}]);