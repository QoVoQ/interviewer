好的，那我来给你设计一道**大厂前端校招编程题**，重点考核应届生对**设计模式**的理解，同时确保题目有一定编程实现性，而不是只考理论。

---

## **题目：实现一个事件总线（Event Bus）**

**要求**：
实现一个 `EventBus` 类，支持以下功能：

1. **订阅事件**

   ```js
   on(eventName: string, handler: Function): void
   ```

   注册事件处理函数，可以有多个处理函数订阅同一个事件。

2. **取消订阅**

   ```js
   off(eventName: string, handler: Function): void
   ```

   移除某个事件的指定处理函数。

3. **触发事件**

   ```js
   emit(eventName: string, ...args: any[]): void
   ```

   按订阅顺序执行所有处理函数，参数透传。

4. **一次性订阅**

   ```js
   once(eventName: string, handler: Function): void
   ```

   处理函数只会被执行一次，执行完后自动移除。

---

### **示例：**

```js
const bus = new EventBus();

function hello(name) {
  console.log('Hello', name);
}

bus.on('greet', hello);
bus.once('greet', (name) => console.log('Nice to meet you,', name));

bus.emit('greet', 'Alice');
// 输出：
// Hello Alice
// Nice to meet you, Alice

bus.emit('greet', 'Bob');
// 输出：
// Hello Bob

bus.off('greet', hello);
bus.emit('greet', 'Charlie');
// 无输出
```

---

### **考察点：**

1. **观察者模式（Observer Pattern）**

   * `on` / `emit` 模拟发布订阅机制，考察学生是否理解“解耦事件发送方与接收方”。
2. **闭包与内存管理**

   * `once` 需要在执行后移除监听器，避免内存泄漏。
3. **数据结构**

   * 如何存储事件名到回调函数的映射关系（`Map` / `Object` / `WeakMap`）。
4. **健壮性**

   * 参数校验、异常处理、对不存在事件的安全处理。
5. **代码可扩展性**

   * 是否能扩展优先级、异步触发等功能。

---

如果是**大厂前端面试**，我会让学生**先口述思路（模式名 + 数据结构选型）**，再写代码，并在最后问：

> “你觉得这个实现中还有哪些地方可以用设计模式优化？”

这样就可以继续引申到：

* **单例模式**（`EventBus` 作为全局消息中心）
* **装饰器模式**（给订阅回调加日志、节流等功能）

好的，我给你准备一份**参考满分代码**（符合大厂面试预期的实现方式），并且附带**面试官延伸追问清单**，让这道题不仅能看代码能力，还能深挖设计模式理解。

---

## **参考满分代码**

```js
// 设计模式核心：观察者模式 (Observer Pattern)
class EventBus {
  constructor() {
    // 用 Map 存储事件和对应的回调列表
    this.events = new Map();
  }

  // 订阅
  on(eventName, handler) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(handler);
  }

  // 取消订阅
  off(eventName, handler) {
    if (!this.events.has(eventName)) return;
    const handlers = this.events.get(eventName).filter(fn => fn !== handler);
    if (handlers.length > 0) {
      this.events.set(eventName, handlers);
    } else {
      this.events.delete(eventName);
    }
  }

  // 触发
  emit(eventName, ...args) {
    if (!this.events.has(eventName)) return;
    // 拷贝一份，防止回调中对事件数组进行修改
    [...this.events.get(eventName)].forEach(fn => fn(...args));
  }

  // 一次性订阅
  once(eventName, handler) {
    const wrapper = (...args) => {
      handler(...args);
      this.off(eventName, wrapper); // 执行一次后移除
    };
    this.on(eventName, wrapper);
  }
}

// ===== 测试用例 =====
const bus = new EventBus();

function hello(name) {
  console.log('Hello', name);
}

bus.on('greet', hello);
bus.once('greet', (name) => console.log('Nice to meet you,', name));

bus.emit('greet', 'Alice');
// Hello Alice
// Nice to meet you, Alice

bus.emit('greet', 'Bob');
// Hello Bob

bus.off('greet', hello);
bus.emit('greet', 'Charlie');
// 无输出
```

---

## **面试官延伸追问清单**

### **基础追问**

1. **设计模式**

   * 这个实现用到了什么设计模式？
     → 观察者模式（Observer Pattern）。
   * 为什么这里选择用观察者模式而不是直接调用函数？
     → 解耦事件发送方与接收方。

2. **数据结构**

   * 为什么用 `Map` 而不是普通对象 `{}`？
     → `Map` 键可以是任意类型，遍历性能更好，语义清晰，避免原型污染。

3. **健壮性**

   * 如果一个 `emit` 中的回调抛异常，会不会影响后续回调执行？如何优化？
     → 可以用 `try...catch` 包装，避免中断。

---

### **进阶追问**

1. **单例模式**

   * 如果全局只需要一个 `EventBus`，怎么用单例模式改写？
     → 可以在类上加静态 `instance` 并控制构造。

2. **异步执行**

   * 如果希望事件处理器异步执行（不阻塞 emit），该怎么改？
     → `setTimeout(fn, 0)` 或 `queueMicrotask`。

3. **性能优化**

   * 如果有上千个监听器，怎么优化存储结构或触发机制？
     → 可用链表存储，或按优先级分组。

4. **扩展功能**

   * 如果要支持事件优先级（高优先级先执行），你会怎么设计 `on` 的参数结构？
     → `this.events.get(eventName)` 存对象 `{ handler, priority }` 并排序。

---

### **源码类追问（拉高难度）**

1. **对比 Node.js 的 `EventEmitter`**

   * Node.js 的 `EventEmitter` 有哪些额外特性？
     → 支持 `maxListeners` 限制、防止内存泄漏警告等。
2. **Vue 2 的事件机制**

   * Vue 2 内部的 `$on / $emit` 是如何实现的？
     → 类似 Map 存储，但事件是放在组件实例的 `_events` 对象上。
3. **浏览器原生事件**

   * 浏览器的 `addEventListener` 跟我们自己实现的事件总线有什么本质区别？
     → 原生事件绑定在 DOM 上，事件总线是纯内存的消息传递机制。


## **评分标准表（总分 100 分）**

| 维度         | 权重      | 评分细则                                                                                                                                                                                  |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **功能实现**   | 40%     | - **基础功能（20 分）**：`on`、`off`、`emit` 正常工作（每个功能 5 分）<br> - **once 功能（5 分）**：一次性订阅正确执行后移除<br> - **优先级调度（5 分）**：高优先级事件先执行                                                                  |
| **代码质量**   | 25%     | - **可读性（5 分）**：命名清晰、结构合理<br> - **健壮性（5 分）**：对无事件名、安全边界处理<br> - **数据结构选型（5 分）**：合理使用 `Map`/`Object` 并给出理由<br> - **异常处理（5 分）**：`emit` 中防止单个回调异常中断<br> - **防御性编程（5 分）**：防止回调中修改订阅数组导致的问题 |
| **设计模式理解** | 20%     | - **模式识别（10 分）**：能明确指出是观察者模式，说明优缺点和适用场景<br> - **模式迁移能力（10 分）**：能说出如何用单例模式/装饰器模式扩展                                                                                                     |
| **进阶能力**   | 15%     | - **异步模式（5 分）**：`emit` 支持异步调度（`queueMicrotask` / `setTimeout`）<br> - **性能意识（5 分）**：能优化事件排序逻辑或提出方案<br> - **可扩展性（5 分）**：能扩展成中间件模式、事件通配符等                                                |
| **加分项**    | +5\~10% | - 使用 TypeScript 提供类型安全<br> - 写了简单的单元测试<br> - 在回答中能类比 Node.js EventEmitter 或 Vue/React 事件系统                                                                                            |

---

## **评分档次（校招适用）**

| 档次      | 分数      | 特征                                      |
| ------- | ------- | --------------------------------------- |
| **S 档** | 90\~100 | 功能全 + 代码规范 + 模式理解深刻 + 能提出改进方案，能对标 P6 潜力 |
| **A 档** | 80\~89  | 功能齐全，代码基本规范，能指出设计模式，但进阶扩展不够深入           |
| **B 档** | 70\~79  | 基础功能可用，但缺少一次性订阅或优先级等要求，模式理解浅            |
| **C 档** | 60\~69  | 只能实现简单 on/emit，代码零散，缺少健壮性和模式分析          |
| **D 档** | <60     | 功能不完整或逻辑错误，无法识别设计模式                     |

---

## **面试官提问流程建议**

1. **先让候选人写基础版**

   * 观察 `on` / `off` / `emit` 的实现是否流畅
   * 基础逻辑清楚的基本能进 B 档
2. **加条件升级**

   * 问：“能否支持一次性订阅？”
   * 问：“能否支持优先级，让 VIP 事件先执行？”
3. **进阶问题**

   * “emit 如果改成异步，会有什么坑？”
   * “如何改成单例模式，让全局共享？”
4. **开放题**

   * “能否参考 Node.js EventEmitter 增加事件上限和内存泄漏警告？”
   * “如果用在 React/Vue，需要注意什么？”

---

好的，我给你在 **升级版 EventBus** 上加一个 **装饰器模式（Decorator Pattern）**，让每个订阅回调都能自动带日志功能。

---

## **思路**

* **装饰器模式**的核心：不改变原有业务逻辑结构的前提下，动态给对象（或函数）添加额外功能。
* 我们可以在 `on` / `once` 注册回调时，用一个 **包装函数（wrapper）** 装饰原回调：

  * 记录调用时间、事件名、参数等日志
  * 然后调用原函数

这样，不需要改回调本身，就能给它加日志功能。

---

## **代码示例**

```js
class EventBus {
  constructor() {
    this.events = new Map();
  }

  // 装饰器：给回调加日志
  static withLog(eventName, handler) {
    return (...args) => {
      console.log(`[LOG] Event: ${eventName}, Args:`, args, 'Time:', new Date().toISOString());
      handler(...args);
    };
  }

  on(eventName, handler, priority = 0) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const wrapped = EventBus.withLog(eventName, handler);
    this.events.get(eventName).push({ handler: wrapped, priority, once: false, raw: handler });
    this.events.get(eventName).sort((a, b) => b.priority - a.priority);
  }

  once(eventName, handler, priority = 0) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const wrapped = EventBus.withLog(eventName, handler);
    this.events.get(eventName).push({ handler: wrapped, priority, once: true, raw: handler });
    this.events.get(eventName).sort((a, b) => b.priority - a.priority);
  }

  off(eventName, handler) {
    if (!this.events.has(eventName)) return;
    const filtered = this.events
      .get(eventName)
      .filter(sub => sub.raw !== handler && sub.handler !== handler);
    if (filtered.length > 0) {
      this.events.set(eventName, filtered);
    } else {
      this.events.delete(eventName);
    }
  }

  emit(eventName, mode = 'sync', ...args) {
    if (!this.events.has(eventName)) return;
    const subs = [...this.events.get(eventName)];
    const runner = (sub) => {
      try {
        sub.handler(...args);
      } catch (err) {
        console.error(`[EventBus][${eventName}] handler error:`, err);
      }
      if (sub.once) {
        this.off(eventName, sub.raw);
      }
    };

    if (mode === 'sync') {
      subs.forEach(runner);
    } else if (mode === 'async') {
      subs.forEach(sub => queueMicrotask(() => runner(sub)));
    }
  }
}

// ===== 测试 =====
const bus = new EventBus();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

bus.on('greet', greet);
bus.emit('greet', 'sync', 'Alice');
// 输出：
// [LOG] Event: greet, Args: [ 'Alice' ], Time: ...
// Hello, Alice!
```

---

## **亮点**

* `EventBus.withLog` 就是典型的 **函数装饰器**：

  * 接收原函数 → 返回新函数 → 新函数中先加功能（日志）再调用原函数。
* **不侵入业务代码**：回调本身不用改，日志逻辑独立封装。
* **可拓展性强**：可以换成性能统计、调用计数、权限校验等功能。

---

## **面试官可追问**

1. 如果要给多个回调动态选择是否加日志，怎么设计参数？
2. 如果需要链式多个装饰器（日志 + 性能监控），怎么组合？
3. 装饰器模式与代理模式（Proxy）在这种场景的区别？



