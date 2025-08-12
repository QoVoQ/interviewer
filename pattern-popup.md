作为前端面试官，我设计以下题目来考核校招生对设计模式的理解，题目聚焦**应用场景分析 + 简单实现**，避免纯理论背诵：

---

### 题目：设计一个灵活的弹窗管理器
**场景描述**：
我们需要开发一个弹窗系统，满足以下需求：
1. 弹窗类型多样（提示框、确认框、图片预览等）
2. 弹窗可自定义扩展（未来可能新增通知框、表单框等）
3. 弹窗需统一管理（如限制同时展示数量、遮罩层控制等）

**要求**：
1. 选择合适的设计模式实现弹窗创建逻辑
2. 用代码实现核心结构（伪代码或关键代码即可）
3. 说明设计模式如何解决扩展性问题

---

### 期望答案及考察点
#### 1. 设计模式选择（核心考察）
- **工厂模式**（最优解）
  通过 `createPopup(type, config)` 统一创建接口，隐藏具体弹窗类的实现
- **建造者模式**（次优解）
  分步构造复杂弹窗对象（如 setTitle().setContent().setButtons()）
- **单例模式**（辅助管理）
  确保全局只有一个弹窗管理器实例

#### 2. 伪代码实现示例（工厂模式）
```javascript
// 1. 定义弹窗接口
class Popup {
  show() {}
  hide() {}
}

// 2. 实现具体弹窗类
class AlertPopup extends Popup { /*...*/ }
class ConfirmPopup extends Popup { /*...*/ }
class ImagePopup extends Popup { /*...*/ }

// 3. 弹窗工厂
class PopupFactory {
  createPopup(type, config) {
    switch (type) {
      case 'alert':
        return new AlertPopup(config);
      case 'confirm':
        return new ConfirmPopup(config);
      case 'image':
        return new ImagePopup(config);
      // 扩展点：新增类型只需添加分支
      default:
        throw new Error('Unknown popup type');
    }
  }
}

// 4. 单例管理的弹窗容器（补充考察单例）
class PopupManager {
  static instance;
  constructor() {
    this.activePopups = [];
  }

  static getInstance() {
    if (!PopupManager.instance) {
      PopupManager.instance = new PopupManager();
    }
    return PopupManager.instance;
  }

  open(type, config) {
    const popup = new PopupFactory().createPopup(type, config);
    this.activePopups.push(popup);
    popup.show();
  }
}

// 使用
PopupManager.getInstance().open('alert', { title: '提示' });
```

#### 3. 设计优势说明（考察表达能力）
- **开闭原则**：新增弹窗类型只需扩展工厂类，无需修改已有代码
- **解耦**：调用方无需关心具体弹窗类的实例化逻辑
- **统一管理**：通过单例管理器控制全局弹窗状态

---

### 评估标准（校招重点）
| 考察维度          | 合格标准                          | 优秀标准                              |
|-------------------|----------------------------------|---------------------------------------|
| 模式选择          | 能说出工厂/建造者模式            | 能对比多种模式适用场景                |
| 代码实现          | 正确实现工厂创建逻辑             | 考虑单例管理、异常处理等细节          |
| 设计原则理解      | 提到“扩展性”                     | 明确说出开闭原则、单一职责原则        |
| 实际应用联想      | 无                               | 能举例 Vue/React 组件库中的类似实现   |

---

### 典型错误及追问方向
1. **直接 if-else 硬编码**
   → 追问：“如果新增 10 种弹窗类型会有什么问题？”

2. **混淆工厂模式和抽象工厂**
   → 追问：“工厂模式和抽象工厂的核心区别是什么？”

3. **忽视管理职责**
   → 追问：“如何避免用户连续点击触发多个重叠弹窗？”

---

通过此题可快速判断候选人：
- 是否理解设计模式的核心价值（解耦、扩展性）
- 能否将模式转化为实用代码
- 是否具备组件化设计思维（前端关键能力）
