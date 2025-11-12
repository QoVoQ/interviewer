## js基础知识
    - 闭包
    - 事件循环
    - this，箭头函数
    - 原型链
## 介绍一下常用的设计模式
    - 有没有用过继承
## promise解决什么问题
    - Promise 主要是为了解决 JavaScript 中回调函数（callback）嵌套地狱 和 异步流程控制 的问题。
## 怎么debug，介绍一下啊chrome dev tool
## 怎么理解http2多路复用，还需要将小文件打包吗
## 组件设计考虑的点，复用技巧
## 浏览器渲染机制
    - 构建 DOM 树 (Document Object Model)
    - 构建 CSSOM 树 (CSS Object Model)
        - CSS 加载和解析会阻塞渲染
        - JavaScript 的加载和执行也会阻塞 HTML 的解析
    - 当 DOM 树和 CSSOM 树都构建完毕后，浏览器会将它们合并成一个渲染树 (Render Tree)。
    - 布局 (Layout / Reflow)
        - 渲染树构建完成后，浏览器开始计算每个渲染对象在屏幕上的确切位置和大小
    - 绘制 (Painting)
        - 将渲染树转换成像素
        - (Layering)为了提高性能和方便后续的复合操作，浏览器会将页面内容分为不同的图层（Layer）。例如，使用了 position: fixed 或 transform 的元素通常会被提升到单独的图层中。
        - (Compositing) 浏览器会将所有独立的图层，按照正确的顺序，合并成一个最终的图像。

## 节当用户在浏览器输入地址按回车后，到用户看到页面，背后发生了什么技术细
    - URL 解析与 DNS 解析 (Parsing URL & DNS Resolution)
    - TCP 连接建立 (Establishing TCP Connection)
    - HTTPS 加密通信 (HTTPS Encryption)
    - 发送 HTTP 请求与接收响应 (Sending Request & Receiving Response)
    - 浏览器渲染 (Browser Rendering)
    - 关闭连接 (Closing Connection)
## DNS 递归查询
## 遇到困难怎么解决
## 什么是优雅的代码，怎是实现优雅的代码，举个具体的例子
    - 优雅的代码不仅仅是能跑起来的代码，它更是一种艺术，是开发者匠心独运的体现。我认为，优雅的代码主要具备以下几个特征：

        可读性强（Readable）：代码逻辑清晰，命名规范，他人可以轻松理解其意图，就像阅读一篇流畅的文章。

        可维护性高（Maintainable）：当需要修复 Bug 或添加新功能时，可以快速定位到相关代码，并能以最小的改动完成任务。

        简洁性（Concise）：没有冗余和重复的代码，用最少的代码实现最多的功能，但又不牺牲可读性。

        健壮性（Robust）：代码能够处理各种异常情况，不容易崩溃或产生意外行为。

        高内聚低耦合（Cohesive & Decoupled）：模块内部功能紧密相关，而模块之间则相互独立，一个模块的改动不会影响到其他模块。

    - 实现优雅的代码是一个系统性的工程，它贯穿于从设计到编写的整个过程。以下是一些关键实践：

        规范的命名：使用具有描述性的变量、函数和类名，让代码自文档化。例如，使用 calculateTotalPrice 而不是 calc，使用 userList 而不是 arr。

        单一职责原则（Single Responsibility Principle）：一个函数或类只做一件事，并把它做好。这使得代码更容易测试和复用。

        提取通用函数：如果发现多处有重复的代码块，应该将其提取为一个独立的函数或模块。这不仅减少了代码量，也方便了后续的维护。

        避免过深的嵌套：使用卫语句（Guard Clause）提前返回，或者将复杂的逻辑拆分成多个小函数，可以有效减少 if-else 的嵌套层级，提高代码的可读性。

        编写清晰的注释：注释应该解释为什么这样做，而不是怎么做。如果代码的意图不明显，通过注释可以帮助其他开发者快速理解。

        善用设计模式：在合适的地方使用设计模式（如工厂模式、策略模式、观察者模式等），可以解决一些常见的软件设计问题，使代码结构更具扩展性。

    - example

## 什么是webpack，它解决什么问题， 实现原理

- Webpack 是一个静态模块打包工具（module bundler），主要用于前端工程化中，将项目中的各种资源（JavaScript、CSS、图片、字体等）视为 “模块”，并通过递归分析模块间的依赖关系，最终将它们打包成浏览器可直接运行的静态资源（如 .js、.css 文件）。
- 解决问题
  - 统一模块系统
    - 前端有多种模块规范（ES6 Module 的 import/export、CommonJS 的 require、AMD 等），但浏览器原生只支持 ES6 Module（且存在兼容性问题）。Webpack 可以将不同规范的模块统一解析、整合，让开发者无需关心浏览器是否支持某种模块语法。
  - 处理非 JS 资源
    - 前端项目不仅有 JS，还有 CSS、Less/Sass、图片、字体等资源。Webpack 可通过 “Loader” 将这些非 JS 资源转换为模块（例如将 CSS 转译为 JS 可处理的字符串，再通过插件提取为独立 CSS 文件），实现 “万物皆模块” 的开发体验。
  - 工程化能力
    - 提供代码压缩（减小体积）、Tree-shaking（删除未使用代码）、热模块替换（HMR，开发时实时更新）、环境区分（开发 / 生产环境配置分离）等功能，大幅提升开发效率和上线质量。
  - 解决依赖混乱
    - 大型项目中模块依赖关系复杂（如 A 依赖 B，B 依赖 C），Webpack 通过构建 “依赖图” 自动管理依赖顺序，避免手动引入导致的顺序错误。
- 实现原理
  - 核心原理可概括为：“解析依赖 → 处理模块 → 合并输出”，具体流程分为三个阶段：
    1. 初始化阶段：构建依赖图（Dependency Graph）
入口分析：从配置的 entry（入口）开始，递归解析模块的依赖关系。例如，入口文件 index.js 中通过 import './a.js' 引入了 a.js，Webpack 会先解析 index.js，再解析 a.js，以此类推。
模块解析：对每个模块，Webpack 会根据文件后缀（如 .js、.css）匹配对应的 “Loader” 进行预处理（如 .js 用 babel-loader 转译 ES6+ 语法，.css 用 css-loader 解析 @import 和 url()）。
构建依赖图：将所有模块及其依赖关系记录在一个 “依赖图” 中，明确模块间的引用关系。
    2. 编译阶段：处理模块并生成 Chunk
模块转译：经过 Loader 处理后，所有模块（无论原始类型）都会被转译为 JS 代码（因为 Webpack 本质上是基于 JS 解析的）。
生成 Chunk：Webpack 会将依赖图中的模块按规则（如代码分割配置 splitChunks）合并成若干个 “Chunk”（代码块）。Chunk 是 Webpack 内部处理的中间产物，还不是最终输出的文件。
    3. 输出阶段：生成 Bundle
Chunk 优化：对 Chunk 进行优化，如通过 TerserPlugin 压缩 JS、CssMinimizerPlugin 压缩 CSS、Tree-shaking 移除死代码等。
生成 Bundle：将优化后的 Chunk 输出到配置的 output 目录，生成最终的静态文件（即 Bundle，如 main.js、vendor.js）。这些文件包含了所有模块的代码，且依赖关系已被正确处理，可直接在浏览器运行。
  - 关键机制：插件系统（Plugin）
Webpack 的灵活性很大程度上来自其插件系统。插件可以监听 Webpack 打包过程中的 “生命周期钩子”（如 entryOption、compile、emit 等），在特定阶段介入并修改打包流程（例如 HtmlWebpackPlugin 在 emit 阶段生成 HTML 文件，并自动引入打包后的 Bundle）。

## 对比一下react 和 vue 渲染机制，分别是怎么触发组件重新渲染的

React 和 Vue 作为主流前端框架，核心渲染机制都基于**虚拟 DOM（Virtual DOM）** 实现（通过对比虚拟 DOM 差异来最小化真实 DOM 操作），但两者的底层设计（尤其是响应式机制）和重渲染触发逻辑有显著区别。


### 一、核心渲染机制对比


#### 1. React 渲染机制
React 的渲染核心是**“状态驱动 + 虚拟 DOM Diff”**，整体流程是：
- 组件通过 `render()` 函数（或函数组件的返回值）生成**虚拟 DOM（VNode）**，描述当前 UI 结构。
- 当组件状态变化时，会重新执行 `render()` 生成**新的虚拟 DOM**。
- React 通过**Diff 算法**对比新旧虚拟 DOM 的差异（按“树层级”优化对比，列表需通过 `key` 标识稳定性）。
- 最终只将差异部分转换为真实 DOM 操作，更新页面。

**核心特点**：
- 依赖**显式状态更新**触发重新渲染（状态变化是“因”，重渲染是“果”）。
- 虚拟 DOM Diff 是“全量对比”（每次重渲染都会生成完整新 VNode，再对比差异），但通过层级对比和 `key` 优化性能。


#### 2. Vue 渲染机制
Vue（Vue2 和 Vue3）的渲染核心是**“响应式数据驱动 + 虚拟 DOM Patch”**，流程是：
- 组件初始化时，Vue 会对 `data`（Vue2）或 `ref/reactive`（Vue3）中的数据进行**响应式劫持**（Vue2 用 `Object.defineProperty`，Vue3 用 `Proxy`）。
- 模板（或 `render` 函数）编译时，会收集模板中依赖的响应式数据（即“依赖收集”），建立数据与组件的关联。
- 当响应式数据变化时，Vue 会通知所有依赖该数据的组件，触发**重新生成虚拟 DOM**。
- 通过**Patch 算法**对比新旧虚拟 DOM 差异（Vue3 引入了“静态标记”优化，跳过无变化的节点），最终更新真实 DOM。

**核心特点**：
- 依赖**响应式数据自动追踪**触发重渲染（数据变化直接驱动更新，无需显式通知）。
- 虚拟 DOM 对比更“智能”：Vue3 会标记模板中静态部分（如纯文本），更新时直接跳过，减少对比成本。


### 二、组件重新渲染的触发条件


#### 1. React 触发组件重渲染的场景
React 组件重渲染的核心是**“状态（state）或 props 变化”**，具体场景：

- **自身状态（state）变化**：
  - 类组件中调用 `this.setState()`（无论状态是否真的改变，都会触发重渲染，除非在 `shouldComponentUpdate` 中返回 `false`）。
  - 函数组件中调用 `useState` 的更新函数（如 `setCount(count + 1)`）或 `useReducer` 的 `dispatch` 方法。
  - 注意：`setState` 是异步批量更新的，多次调用会合并，最终触发一次重渲染。

- **父组件传递的 props 变化**：
  - 当父组件重渲染时，子组件会默认跟着重渲染（即使 props 没变化），这是 React 的“默认行为”（因为父组件可能传递了新的 props）。
  - 若要避免无关重渲染，需用 `React.memo` 包装子组件（浅层比较 props 是否变化），或配合 `useMemo` 缓存 props 引用。

- **上下文（Context）变化**：
  - 若组件通过 `useContext` 或 `Context.Consumer` 消费了某个 Context，当 Context 的 `value` 变化时，组件会重渲染（即使父组件用了 `React.memo` 也无效）。

- **强制重渲染**：
  - 类组件可调用 `this.forceUpdate()`，跳过 `shouldComponentUpdate` 直接重渲染。
  - 函数组件可通过 `useState` 定义一个“空状态”（如 `const [, forceUpdate] = useState(0); forceUpdate(n => n + 1)`）强制触发。

#### 2. Vue 触发组件重渲染的场景

Vue 组件重渲染完全由**“响应式数据变化”**驱动，具体场景：

- **组件自身的响应式数据变化**：
  - Vue2 中，`data` 中定义的属性（如 `this.count = 1`）被修改时，若模板中用到了 `count`，组件会重渲染。
  - Vue3 中，`ref` 包装的基本类型（`count.value = 1`）或 `reactive` 包装的对象（`obj.count = 1`）被修改时，依赖该数据的组件会重渲染。
  - 注意：Vue 能精准追踪“被模板使用”的数据，未被使用的响应式数据变化不会触发重渲染（例如 `data` 中有 `a`，但模板没用到 `a`，修改 `a` 不会导致重渲染）。

- **父组件传递的 props 变化**：
  - 子组件接收的 `props` 本质是“父组件响应式数据的映射”，当父组件中对应的数据源变化时，子组件的 `props` 会更新，若子组件模板用到了该 `props`，则触发重渲染。
  - 与 React 不同：父组件重渲染（因自身数据变化）时，若传给子组件的 `props` 未变化，子组件**不会**重渲染（Vue 会自动跳过）。

- **依赖的注入数据（Provide/Inject）变化**：
  - 若组件通过 `inject` 接收了 `provide` 提供的数据，当该数据（响应式）变化时，组件会重渲染。

- **强制重渲染**：
  - Vue2 中可调用 `this.$forceUpdate()`，强制组件重渲染（跳过响应式依赖检查）。
  - Vue3 中可通过 `setup` 中的 `getCurrentInstance().forceUpdate()` 实现。


### 三、核心差异总结

| 维度                | React                                  | Vue                                      |
|---------------------|----------------------------------------|------------------------------------------|
| 重渲染触发本质      | 显式状态更新（`setState` 等）驱动      | 响应式数据变化自动驱动（依赖追踪）        |
| 父组件重渲染影响    | 子组件默认跟随重渲染（需手动优化, const Child = React.memo(({ name }) => {
）      | 子组件仅在 `props` 变化时重渲染（自动优化）|
| 重渲染精准度        | 较粗（可能渲染无关组件）                | 更精准（只渲染依赖变化数据的组件）        |
| 虚拟 DOM 优化点     | 依赖 `key` 和 `React.memo` 减少对比     | Vue3 通过“静态标记”直接跳过无变化节点      |


简单说：
- React 是“我告诉你要更新（setState），我就重新渲染并对比差异”；
- Vue 是“我监听了数据，数据变了，我就只更新用到这个数据的组件”。

### English Que

- How do you share state and pass data between parent and child components, and between sibling components?
- Describe the most challenging technical problem you've encountered in a project and how you resolved it.
- What are your most frequently used debugging tools or techniques in JavaScript
- Describe what happens when you type a URL into the browser and press Enter. Be as detailed as possible
- What is the fundamental problem that a bundler solves? Why can't we just use native ES modules in all browsers for a large project




