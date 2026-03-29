# SAPUI5 Test Skill

这个 skill 用来为 SAPUI5 或 OpenUI5 项目生成、扩展和校验自动化测试代码。

它覆盖三层常见测试能力：

- QUnit 单元测试
- OPA5 集成测试
- wdi5 端到端测试

除了测试文件本身，这个 skill 也处理让测试真正可运行所需的配套工作，例如：

- 检查或补齐 `manifest.json` 中的模型和数据源配置
- 检查或补齐 `ui5.yaml` 中的 mock OData 中间件配置
- 生成 OPA5 的 startup、page object、journey、bootstrap 文件
- 生成 wdi5 的常见页面流测试骨架
- 校验 mock metadata 和 mockdata 是否与实际绑定路径一致

## 适用场景

在下面这些情况下使用这个 skill：

- 你有一个现成 SAPUI5 项目，想补自动化测试
- 你已经有部分测试，想继续补齐 OPA5 或 wdi5
- 你要把一个 demo 页升级成可执行回归套件
- 你怀疑 mock OData 配置有问题，需要边修边补测试
- 你想先快速生成测试骨架，再逐步替换成业务断言

不适合的场景：

- 通用前端测试但不是 SAPUI5 项目
- 只想写非常简单的单个函数测试，且不涉及 UI5 工程结构

## 这个 Skill 会产出什么

根据项目情况，这个 skill 会产出或更新以下内容：

- `webapp/test/unit/**` 下的 QUnit 测试
- `webapp/test/integration/**` 下的 OPA5 测试文件
- `test/e2e/**` 下的 wdi5 测试文件
- `webapp/localService/**` 下的 mock 元数据或 mock 数据
- `ui5.yaml` 或 `manifest.json` 里的测试相关配置

## 使用方式

你可以让代理直接调用这个 skill，或者在自然语言请求里明确表达这些意图：

- 为当前 SAPUI5 项目生成 QUnit、OPA5、wdi5 测试
- 为某个页面补列表流、表单提交流或导航流测试
- 修复 mockserver 配置并补齐可执行回归测试
- 先生成测试骨架，再根据控制器和视图细化断言

推荐在请求里尽量提供这些信息：

- 页面或功能名称
- 目标视图或控制器文件
- 关键控件 ID
- 是否使用 OData
- 是否需要 mock OData
- 是否需要实际执行并验证测试

## 支持的模板类型

这个 skill 当前内置三类 UI 流模板。

### 1. Collection Flow

适用于：

- 列表页
- 表格页
- 搜索结果页
- 刷新、过滤、加载集合数据的场景

典型断言：

- 集合控件可见
- 至少渲染 N 条记录
- item 标题、描述、状态文本符合预期
- 错误分支能反映到 UI

### 2. Form Flow

适用于：

- 新建页
- 编辑页
- 提交表单后展示确认信息的场景

典型断言：

- 输入控件值被正确设置
- 提交动作被执行
- 成功文本、状态文本或确认信息正确显示

### 3. Navigation Flow

适用于：

- 点击按钮后跳转页面
- 点击列表项进入详情页
- 路由切换后验证目标页内容

典型断言：

- 导航触发成功
- 目标页 ready 控件可见
- 目标页标题或关键文本正确

## 工作流程

推荐按下面顺序使用这个 skill：

1. 读取项目结构与现有测试
2. 判断当前页面属于 collection、form、navigation 还是 hybrid
3. 从 `manifest.json`、XML view、controller 中提取占位符映射
4. 选择模板并生成测试文件
5. 按需补齐 mock OData 和配置
6. 运行 unit、OPA、e2e 验证
7. 汇总已生成文件、已执行命令和剩余风险

详细流程见：

- [references/workflow.md](./references/workflow.md)
- [references/template-selection.md](./references/template-selection.md)
- [references/placeholder-mapping.md](./references/placeholder-mapping.md)
- [references/generation-sequence.md](./references/generation-sequence.md)

## 模板入口

模板目录见：

- [assets/README.md](./assets/README.md)

主要模板包括：

- QUnit formatter 模板
- OPA5 collection、form、navigation 模板
- wdi5 collection、form、navigation 模板
- mock metadata 和 mockdata 模板
- `ui5.yaml` 与 `manifest.json` 配置片段模板

## 示例提示词

你可以直接这样使用：

1. 为当前 SAPUI5 项目的 Worklist 页面生成 QUnit、OPA5、wdi5 三层测试，并实际执行验证
2. 基于当前 XML view 和 controller，为创建表单页面生成 OPA5 和 wdi5 提交测试
3. 检查当前项目的 OData mock 配置，修复后补一套列表页回归测试
4. 为当前项目的导航流生成测试，从列表页点击进入详情页，并验证目标页标题
5. 先为当前项目生成通用测试骨架，不执行测试，只输出需要替换的占位符映射表

## 完成标准

这个 skill 的结果不应停留在“生成了模板”。较好的完成结果应满足：

- 测试文件的 namespace、viewName、控件 ID 与项目真实代码一致
- mock 配置与实际绑定路径一致
- 断言验证的是业务可见结果，而不是只检查按钮存在
- 有需要时覆盖至少一个异常或错误分支
- 如果用户要求验证，应明确说明哪些测试已实际执行、哪些未执行

## 相关文件

- [SKILL.md](./SKILL.md)
- [assets/README.md](./assets/README.md)
- [references/workflow.md](./references/workflow.md)
- [references/template-selection.md](./references/template-selection.md)
- [references/placeholder-mapping.md](./references/placeholder-mapping.md)
- [references/generation-sequence.md](./references/generation-sequence.md)
- [references/checklist.md](./references/checklist.md)