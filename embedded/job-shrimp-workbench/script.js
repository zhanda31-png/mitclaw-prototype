const STORAGE_KEY = "feishu-open-platform-apps-v2";
const isExternalNavMode =
  new URLSearchParams(window.location.search).get("externalNav") === "1";

document.body.classList.toggle("external-nav-mode", isExternalNavMode);

const DEFAULT_APPS = [
  {
    id: "cli_testmewow_2026",
    name: "test鸣鸣哞呢",
    description: "用于企业内部流程验证、消息联调和权限配置的测试应用。",
    employeeNo: "10028461",
    miId: "m10028461",
    department: "数字员工部",
    coreScenario: "内部流程验证与消息联调",
    containerNeeds: "标准 Web 容器与消息回调能力",
    trainerList: "Wei He 何伟、李嘉宁",
    owner: "Wei He 何伟",
    role: "训虾员",
    collaborators: [
      { name: "李嘉宁", role: "训虾员", needsApproval: false },
      { name: "陈晓明", role: "汇报人", needsApproval: true },
    ],
    capabilities: { bot: true, web: true, widget: false },
    status: "待上线",
    version: "0.9.4",
    updatedAt: "2026-04-23T20:34:00+08:00",
    createdAt: "2026-04-23T18:20:00+08:00",
    secret: "scli_72f1ab2d4e8847f29016",
    colorA: "#F25F95",
    colorB: "#E57BA8",
    iconDataUrl: "",
    iconKey: "bag",
    activity: [
      {
        title: "已修改应用信息",
        description: "已更新描述信息和默认能力配置，等待上线。",
        time: "2026-04-23T20:34:00+08:00",
      },
      {
        title: "创建应用",
        description: "已创建岗位虾并进入配置。",
        time: "2026-04-23T18:20:00+08:00",
      },
    ],
  },
  {
    id: "cli_hwshrimp_2026",
    name: "国际IT业务BP虾",
    description: "企业所属岗位虾",
    employeeNo: "E100142",
    miId: "1539920049",
    department: "国际业务 BP",
    coreScenario: "机器人通知与业务页面集成",
    containerNeeds: "网页应用容器与机器人消息能力",
    trainerList: "Wei He 何伟、周雨桐",
    owner: "Wei He 何伟",
    role: "训虾员",
    collaborators: [
      { name: "周雨桐", role: "训虾员", needsApproval: false },
      { name: "郭琳", role: "汇报人", needsApproval: true },
    ],
    capabilities: { bot: true, web: false, widget: true },
    status: "已启用",
    version: "1.2.1",
    updatedAt: "2026-03-16T17:44:00+08:00",
    createdAt: "2026-03-10T10:12:00+08:00",
    secret: "scli_c18d42ea56424d4fa0ac",
    colorA: "#AA7CFF",
    colorB: "#7D53FF",
    iconDataUrl: "",
    iconKey: "bot",
    activity: [
      {
        title: "应用已发布",
        description: "版本 1.2.1 已在企业内启用。",
        time: "2026-03-16T17:44:00+08:00",
      },
      {
        title: "启用工作台小组件",
        description: "工作台入口已配置完成。",
        time: "2026-03-15T11:18:00+08:00",
      },
    ],
  },
];

const CAPABILITY_LABELS = {
  bot: "机器人",
  web: "网页应用",
  widget: "工作台小组件",
};

const STATUS_META = {
  已启用: {
    className: "is-published",
    actionText: "已发布",
  },
  待上线: {
    className: "is-pending",
    actionText: "已修改",
  },
  开发中: {
    className: "is-draft",
    actionText: "开发中",
  },
};

const POND_STATUS_ITEMS = [
  { id: "draft", label: "草稿", tip: "统计当前处于草稿状态的岗位虾数量" },
  { id: "trial", label: "试运行", tip: "统计当前处于试运行状态的岗位虾数量" },
  { id: "active", label: "上岗", tip: "统计当前处于上岗状态的岗位虾数量" },
  { id: "frozen", label: "冻结", tip: "统计当前处于冻结状态的岗位虾数量" },
  { id: "offboarded", label: "下岗", tip: "统计当前处于下岗状态的岗位虾数量" },
];

const CONTAINER_SPEC_OPTIONS = ["2核4G", "2核8G", "4核8G", "4核16G"];
const DEFAULT_SPACE_MODEL = "xiaomi/mimo-v2-pro-mit";
const DEFAULT_SPACE_IMAGE =
  "micr.cloud.mioffice.cn/openclaw-images/miclaw:v0.18.0";

const REMOVED_APP_NAME_PREFIXES = [
  "收拾收拾反反复复b",
  "额度成为额",
  "test鸣鸣哞呢",
  "我呜呜",
];

const CREATE_COLOR_OPTIONS = [
  "#3370FF",
  "#17C2A4",
  "#29A1F7",
  "#FFB400",
  "#FF9500",
  "#E35B91",
  "#A66AE3",
  "#5C63E6",
];

const ICON_LIBRARY = [
  {
    key: "cube",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2.8 16.4 6 10 9.2 3.6 6 10 2.8Z" fill="currentColor"/><path d="M4 7.2 9.2 10v7L4 14.2v-7Z" fill="currentColor" opacity=".82"/><path d="M16 7.2 10.8 10v7l5.2-2.8v-7Z" fill="currentColor" opacity=".92"/></svg>',
  },
  {
    key: "bot",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="6" width="12" height="9" rx="2" fill="currentColor"/><path d="M10 3.5v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7.5" cy="10.5" r="1.1" fill="#BFC4CB"/><circle cx="12.5" cy="10.5" r="1.1" fill="#BFC4CB"/></svg>',
  },
  {
    key: "flash",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11.2 2.5 5.8 10h3l-.8 7.5 6.2-8.4H11l.2-6.6Z" fill="currentColor"/></svg>',
  },
  {
    key: "doc",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 3.5h5l3 3v9A1.5 1.5 0 0 1 12.5 17h-6A1.5 1.5 0 0 1 5 15.5V5A1.5 1.5 0 0 1 6.5 3.5Z" fill="currentColor"/><path d="M11 3.5v3h3" stroke="#BFC4CB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    key: "bag",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 7.2h10v8.2A1.6 1.6 0 0 1 13.4 17H6.6A1.6 1.6 0 0 1 5 15.4V7.2Z" fill="currentColor"/><path d="M7.2 7V6a2.8 2.8 0 0 1 5.6 0v1" stroke="#BFC4CB" stroke-width="1.4" stroke-linecap="round"/></svg>',
  },
  {
    key: "bell",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 4a3.8 3.8 0 0 1 3.8 3.8v2.1l1.5 2.5H4.7l1.5-2.5V7.8A3.8 3.8 0 0 1 10 4Z" fill="currentColor"/><path d="M8.4 14.2a1.8 1.8 0 0 0 3.2 0" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  },
  {
    key: "check",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="3.5" width="12" height="13" rx="2" fill="currentColor"/><path d="m7.1 10.1 1.8 1.9 4-4.2" stroke="#BFC4CB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    key: "moon",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12.8 3.4A6.5 6.5 0 1 0 16.6 15 7 7 0 0 1 12.8 3.4Z" fill="currentColor"/></svg>',
  },
  {
    key: "star",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m10 3.3 1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L4.2 7.6l4-.6L10 3.3Z" fill="currentColor"/></svg>',
  },
  {
    key: "tag",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11.8 4H7L3.8 7.2a1.5 1.5 0 0 0 0 2.1l4.9 4.9a1.5 1.5 0 0 0 2.1 0L14 11V6.2A2.2 2.2 0 0 0 11.8 4Z" fill="currentColor"/><circle cx="10.4" cy="7.6" r="1.1" fill="#BFC4CB"/></svg>',
  },
  {
    key: "wrench",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12.8 4a3.5 3.5 0 0 0-3.4 4.4L4.4 13.5a1.6 1.6 0 0 0 2.2 2.2l5.1-5a3.5 3.5 0 0 0 4.4-3.4 3.3 3.3 0 0 1-2.4-.8A3.3 3.3 0 0 1 12.8 4Z" fill="currentColor"/></svg>',
  },
  {
    key: "note",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="3.8" width="12" height="12.4" rx="2" fill="currentColor"/><path d="M7 8h6M7 11h6" stroke="#BFC4CB" stroke-width="1.4" stroke-linecap="round"/></svg>',
  },
  {
    key: "shield",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.2 15.2 5v4.3c0 3.3-2.2 5.5-5.2 7.3-3-1.8-5.2-4-5.2-7.3V5L10 3.2Z" fill="currentColor"/><path d="m8.2 9.8 1.2 1.3 2.6-2.7" stroke="#BFC4CB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    key: "panel",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3.8" y="4" width="12.4" height="12" rx="1.8" fill="currentColor"/><path d="M10 4v12M3.8 10h12.4" stroke="#BFC4CB" stroke-width="1.4"/></svg>',
  },
  {
    key: "users",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="7" cy="8" r="2.4" fill="currentColor"/><circle cx="13.2" cy="8.6" r="2" fill="currentColor" opacity=".75"/><path d="M3.8 14.8a3.6 3.6 0 0 1 6.4 0v.7H3.8v-.7ZM10.8 15a3 3 0 0 1 5.4 0v.5h-5.4V15Z" fill="currentColor"/></svg>',
  },
  {
    key: "globe",
    svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="6.5" fill="currentColor"/><path d="M6.4 10h7.2M10 3.8c1.4 1.4 2.2 3.8 2.2 6.2s-.8 4.8-2.2 6.2c-1.4-1.4-2.2-3.8-2.2-6.2s.8-4.8 2.2-6.2Z" stroke="#BFC4CB" stroke-width="1.2"/></svg>',
  },
];

const NAV_ICONS = {
  home: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.4 6.4 8 2l5.6 4.4v6.1H9.8V9.3H6.2v3.2H2.4V6.4Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  credential: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.3" y="2.7" width="11.4" height="10.6" rx="1.8" stroke="currentColor" stroke-width="1.4"/><path d="M5 6.1h6M5 9h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  doc: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 2.6h5.2l2.8 2.8v8H4V2.6Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9.2 2.6v2.8H12M5.5 7.2h5M5.5 9.5h5M5.5 11.8h3.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  users: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="5.5" cy="5.4" r="1.8" stroke="currentColor" stroke-width="1.4"/><circle cx="10.8" cy="6" r="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M2.8 12a2.8 2.8 0 0 1 5.4 0M8.7 12a2.3 2.3 0 0 1 4.5 0" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  capability: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.2" y="2.4" width="4.4" height="4.4" rx="1.2" stroke="currentColor" stroke-width="1.4"/><rect x="9.4" y="2.4" width="4.4" height="4.4" rx="1.2" stroke="currentColor" stroke-width="1.4"/><rect x="2.2" y="9.2" width="4.4" height="4.4" rx="1.2" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 11.4h2.2M11.6 10.3v2.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  bot: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.6" y="4.6" width="10.8" height="7" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M8 2.6v2M5.8 8h.01M10.2 8h.01" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  strategy: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 4.2h9.6M3.2 8h9.6M3.2 11.8h6.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="11.7" cy="11.8" r="1.1" fill="currentColor"/></svg>',
  knowledge: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 3.1h4.6c1 0 1.9.8 1.9 1.9v7.9H5.8A1.8 1.8 0 0 0 4 14.7V3.1Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 4v8.9H7.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  grayscale: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="4.9" stroke="currentColor" stroke-width="1.4"/><path d="M8 3.1a4.9 4.9 0 0 1 0 9.8V3.1Z" fill="currentColor"/></svg>',
  lock: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3.1" y="6.8" width="9.8" height="6.4" rx="1.6" stroke="currentColor" stroke-width="1.4"/><path d="M5.6 6.8V5.4A2.4 2.4 0 0 1 8 3a2.4 2.4 0 0 1 2.4 2.4v1.4" stroke="currentColor" stroke-width="1.4"/></svg>',
  callback: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5.3 4.3H12v6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="m6.2 10.7-2.3-2.3 2.3-2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  shield: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2.3 12.2 3.9v3.3c0 2.6-1.6 4.3-4.2 6-2.6-1.7-4.2-3.4-4.2-6V3.9L8 2.3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  tester: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.4" y="2.6" width="11.2" height="10.8" rx="1.8" stroke="currentColor" stroke-width="1.4"/><path d="m5.3 8 1.5 1.5 3.8-3.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  publish: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 11.8V3.4M5 6.4l3-3 3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12.8h10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  log: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="2.8" width="10" height="10.4" rx="1.8" stroke="currentColor" stroke-width="1.4"/><path d="M5.5 6.1h5M5.5 8.5h5M5.5 10.9h3.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  chart: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 12.8h10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M5 11V7.8M8 11V5.6M11 11V8.9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
};

const DETAIL_NAV_GROUPS = [
  {
    title: "基础配置",
    items: [
      { id: "baseinfo", label: "基础信息", icon: "credential" },
      { id: "job-description", label: "岗位说明书", icon: "doc" },
      { id: "developers", label: "协作者管理", icon: "users" },
    ],
  },
  {
    title: "能力配置",
    items: [
      { id: "capability", label: "Skill管理", icon: "capability" },
      { id: "bot", label: "容器管理", icon: "bot" },
      { id: "strategy-management", label: "策略管理", icon: "strategy" },
      { id: "knowledge-base", label: "知识库", icon: "knowledge" },
      { id: "safe", label: "网络白名单", icon: "shield" },
    ],
  },
  {
    title: "版本配置",
    items: [
      { id: "version", label: "版本管理与发布", icon: "publish" },
    ],
  },
  {
    title: "运营监控",
    items: [
      { id: "logs", label: "日志检索", icon: "log" },
      { id: "analysis", label: "运营分析", icon: "chart" },
      { id: "feedback", label: "用户反馈", icon: "callback" },
      { id: "development-quality", label: "开发质量", icon: "shield" },
    ],
  },
];

const DETAIL_SECTIONS = new Set(
  DETAIL_NAV_GROUPS.flatMap((group) =>
    group.items.flatMap((item) =>
      item.children ? item.children.map((child) => child.id) : [item.id],
    ),
  ),
);

const DETAIL_SECTION_SUMMARY = {
  baseinfo: "集中维护应用身份、图标与基础档案，适合作为配置中心的首屏总览。",
  "job-description": "沉淀岗位职责、核心场景与容器需求，便于后续协作与审核流转。",
  developers: "管理训虾员与协作者角色，确保配置、审批和交接路径清晰可追踪。",
  capability: "从能力视角启用机器人、网页应用和工作台小组件，补齐应用的对外交互入口。",
  bot: "配置消息能力、菜单和交互入口，适合承接日常通知和流程触达场景。",
  "strategy-management": "统一管理策略编排与执行逻辑，让应用能力和规则保持一致。",
  "knowledge-base": "沉淀结构化知识与文档资源，提升应用在业务场景中的可复用性。",
  safe: "集中维护网络白名单和安全配置，避免能力开通后出现访问风险。",
  version: "围绕版本、发布状态与上线节奏管理变更，保持对外版本稳定可控。",
  test: "通过灰度测试验证权限和能力配置，降低正式发布前的联调风险。",
  logs: "按服务端、事件和客户端维度检索日志，帮助快速定位线上问题。",
  analysis: "从应用或功能维度查看运营数据，帮助判断当前配置的实际使用效果。",
  feedback: "集中查看用户问题与产品建议，让配置优化更贴近真实使用反馈。",
  "development-quality": "从前端和开放接口质量两个维度观察稳定性，定位潜在质量风险。",
};

const CAPABILITY_CARDS = [
  {
    id: "bot",
    title: "机器人",
    description:
      "与用户在聊天中交互的应用，它可以向用户或群组自动发送消息、响应用户的消息。",
    color: "is-peach",
    icon: "bot",
  },
  {
    id: "web",
    title: "网页应用",
    description:
      "快速接入已有的网页应用，用户可以通过飞书客户端安全快捷进入。",
    color: "is-sky",
    icon: "globe",
  },
  {
    id: "mini",
    title: "小程序",
    description:
      "可以在飞书客户端运行的应用，可调用飞书组件，使体验达到原生水平。",
    color: "is-cyan",
    icon: "panel",
    tag: "不推荐",
    tagClass: "is-warn",
  },
  {
    id: "widget",
    title: "工作台小组件",
    description:
      "将数据图表、图文资讯等信息通过小组件展示在飞书工作台，提高触达效率。",
    color: "is-sand",
    icon: "panel",
  },
  {
    id: "docs",
    title: "云文档小组件",
    description:
      "在云文档中扩展内容或者添加快捷操作，适合结合文档场景进行协作。",
    color: "is-lavender",
    icon: "doc",
    tag: "可添加多个",
  },
  {
    id: "baseplugin",
    title: "多维表格插件",
    description:
      "在多维表格上制作视图、逻辑插件，让你的多维表格变得更强大。",
    color: "is-plum",
    icon: "cube",
    tag: "可添加多个",
  },
];

const AUTH_PERMISSION_ROWS = [
  {
    name: "获取 aily 消息",
    code: "aily:message:read",
    type: "应用身份",
    status: "已开通",
  },
  {
    name: "发送 aily 消息",
    code: "aily:message:write",
    type: "应用身份",
    status: "已开通",
  },
  {
    name: "复制多维表格",
    code: "base:app:copy",
    type: "应用身份",
    status: "已开通",
  },
  {
    name: "创建多维表格",
    code: "base:app:create",
    type: "应用身份",
    status: "已开通",
  },
];

const JOB_DESCRIPTION_FIELDS = [
  { key: "name", label: "岗位名称", action: "edit-job-name", minLength: 2 },
  { key: "description", label: "岗位职责", action: "edit-job-description", minLength: 8 },
  { key: "department", label: "所属部门", action: "edit-job-department", minLength: 2 },
  { key: "coreScenario", label: "核心场景", action: "edit-job-core-scenario", minLength: 4 },
  { key: "containerNeeds", label: "容器需求", action: "edit-job-container-needs", minLength: 2 },
];

const POND_LIST_FIELDS = [
  { key: "name", label: "岗位名称" },
  { key: "spaceName", label: "空间管理" },
  { key: "employeeNo", label: "工号" },
  { key: "miId", label: "MiID" },
  { key: "trainerDisplay", label: "训虾员" },
  { key: "managerDisplay", label: "管理者" },
  { key: "description", label: "岗位职责" },
  { key: "department", label: "所属部门" },
  { key: "coreScenario", label: "核心场景" },
  { key: "containerNeeds", label: "容器需求" },
];

const POND_FILTER_FIELDS = [
  { key: "name", label: "岗位名称" },
  { key: "spaceName", label: "岗位空间" },
  { key: "employeeNo", label: "工号" },
  { key: "miId", label: "MiID" },
  { key: "trainerDisplay", label: "训虾员" },
  { key: "managerDisplay", label: "管理者" },
  { key: "description", label: "岗位职责" },
  { key: "department", label: "所属部门" },
  { key: "coreScenario", label: "核心场景" },
  { key: "containerNeeds", label: "容器需求" },
];

const COLLABORATOR_ROLE_META = {
  汇报人: {
    needsApproval: true,
    permissions: [
      "查看岗位说明书与基础信息",
      "查看 Skill 管理与容器管理",
      "查看策略管理与知识库",
      "查看版本管理与灰度测试",
      "查看日志检索与质量看板",
      "提交协作反馈与问题记录",
    ],
  },
  训虾员: {
    needsApproval: false,
    permissions: [
      "访问和编辑基础信息",
      "访问和编辑协作者管理",
      "访问和编辑 Skill 管理",
      "访问和编辑容器管理",
      "访问和编辑策略管理",
      "访问和编辑知识库",
      "访问和编辑版本管理与灰度测试",
      "访问和编辑日志检索与质量看板",
    ],
  },
  "限制用户/部门": {
    needsApproval: true,
    permissions: [
      "限制指定用户或部门访问岗位虾",
      "配置灰度发布可见范围",
      "限制容器或知识库访问范围",
      "限制日志和反馈数据查看范围",
      "限制版本发布可见对象",
      "按组织维度管理审批范围",
    ],
  },
};

const state = {
  apps: [],
  currentView: "list",
  activeTab: "custom",
  query: "",
  pondFilters: Object.fromEntries(POND_FILTER_FIELDS.map((field) => [field.key, []])),
  pondFilterSearches: {},
  openPondFilterKey: "",
  sortDesc: true,
  selectedId: "",
  detailSection: "baseinfo",
  authQuery: "",
  eventTab: "event-config",
  safeTab: "redirect",
  logsTab: "server",
  analysisTab: "app",
  feedbackTab: "bug",
  devQualityTab: "api",
  qualityExpanded: true,
  uploadDataUrl: "",
  createColor: CREATE_COLOR_OPTIONS[2],
  createIconKey: "cube",
  secretVisible: false,
  jobEditAction: "",
  collaboratorRole: "汇报人",
  spaceManageId: "",
  createStep: 1,
};

const listView = document.getElementById("listView");
const detailView = document.getElementById("detailView");
const appGrid = document.getElementById("appGrid");
const emptyState = document.getElementById("emptyState");
const customPanel = document.getElementById("customPanel");
const pondFilterToolbar = document.getElementById("pondFilterToolbar");
const storePanel = document.getElementById("storePanel");
const pondStatusOverview = document.getElementById("pondStatusOverview");
const searchInput = document.getElementById("searchInput");
const sortButton = document.getElementById("sortButton");

const createModalLayer = document.getElementById("createModalLayer");
const exportPondButton = document.getElementById("exportPondButton");
const openCreateButton = document.getElementById("openCreateButton");
const openCreateFromBanner = document.getElementById("openCreateFromBanner");
const closeCreateModalButton = document.getElementById("closeCreateModalButton");
const cancelCreateButton = document.getElementById("cancelCreateButton");
const createAppForm = document.getElementById("createAppForm");
const appNameInput = document.getElementById("appNameInput");
const appDescriptionInput = document.getElementById("appDescriptionInput");
const departmentInput = document.getElementById("departmentInput");
const coreScenarioInput = document.getElementById("coreScenarioInput");
const appIconInput = document.getElementById("appIconInput");
const formError = document.getElementById("formError");
const nameCounter = document.getElementById("nameCounter");
const descriptionCounter = document.getElementById("descriptionCounter");
const stepIndicator = document.getElementById("stepIndicator");
const prevStepButton = document.getElementById("prevStepButton");
const nextStepButton = document.getElementById("nextStepButton");
const submitCreateButton = document.getElementById("submitCreateButton");
const appEnglishNameInput = document.getElementById("appEnglishNameInput");
const appEmailPrefixInput = document.getElementById("appEmailPrefixInput");
const departmentSelect = document.getElementById("departmentSelect");
const reporterInput = document.getElementById("reporterInput");
const spaceSelect = document.getElementById("spaceSelect");
const jobTitleInput = document.getElementById("jobTitleInput");
const jobLevelSelect = document.getElementById("jobLevelSelect");
const attachmentInput = document.getElementById("attachmentInput");
const colorOptions = document.getElementById("colorOptions");
const iconOptions = document.getElementById("iconOptions");
const jobEditModalLayer = document.getElementById("jobEditModalLayer");
const jobEditForm = document.getElementById("jobEditForm");
const jobEditTextarea = document.getElementById("jobEditTextarea");
const jobEditTitle = document.getElementById("jobEditTitle");
const jobEditError = document.getElementById("jobEditError");
const cancelJobEditButton = document.getElementById("cancelJobEditButton");
const collaboratorModalLayer = document.getElementById("collaboratorModalLayer");
const closeCollaboratorModalButton = document.getElementById(
  "closeCollaboratorModalButton",
);
const cancelCollaboratorButton = document.getElementById("cancelCollaboratorButton");
const collaboratorForm = document.getElementById("collaboratorForm");
const collaboratorMembersInput = document.getElementById("collaboratorMembersInput");
const collaboratorError = document.getElementById("collaboratorError");
const collaboratorPermissionList = document.getElementById(
  "collaboratorPermissionList",
);
const spaceManageModalLayer = document.getElementById("spaceManageModalLayer");
const closeSpaceManageModalButton = document.getElementById(
  "closeSpaceManageModalButton",
);
const cancelSpaceManageButton = document.getElementById("cancelSpaceManageButton");
const spaceManageForm = document.getElementById("spaceManageForm");
const spaceManageTitleName = document.getElementById("spaceManageTitleName");
const spaceManageNameInput = document.getElementById("spaceManageNameInput");
const spaceManageModelInput = document.getElementById("spaceManageModelInput");
const spaceManageImageInput = document.getElementById("spaceManageImageInput");
const spaceManageSpecInput = document.getElementById("spaceManageSpecInput");
const spaceManageOwnerInput = document.getElementById("spaceManageOwnerInput");
const spaceManageAdminsInput = document.getElementById("spaceManageAdminsInput");
const spaceManageError = document.getElementById("spaceManageError");

const backToListButton = document.getElementById("backToListButton");
const detailHeaderName = document.getElementById("detailHeaderName");
const detailHeaderStatus = document.getElementById("detailHeaderStatus");
const detailHeaderMeta = document.getElementById("detailHeaderMeta");
const detailSidebar = document.getElementById("detailSidebar");
const detailMain = document.getElementById("detailMain");
const toastStack = document.getElementById("toastStack");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cloneDefaultApps() {
  return JSON.parse(JSON.stringify(DEFAULT_APPS));
}

function escapeCsvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function shouldRemoveApp(app) {
  const name = String(app?.name || "").trim();
  return REMOVED_APP_NAME_PREFIXES.some((prefix) => name.startsWith(prefix));
}

function pruneApps(apps) {
  return apps.filter((app) => !shouldRemoveApp(app));
}

function loadApps() {
  const defaultApps = cloneDefaultApps().map(normalizeApp);

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return pruneApps(defaultApps);
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.length) {
      return pruneApps(defaultApps);
    }

    const normalizedStoredApps = parsed.map(normalizeApp);
    const existingIds = new Set(normalizedStoredApps.map((app) => app.id));
    const fallbackDefaultApps = defaultApps.filter((app) => !existingIds.has(app.id));

    return pruneApps([...normalizedStoredApps, ...fallbackDefaultApps]);
  } catch {
    return pruneApps(defaultApps);
  }
}

function saveApps() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pruneApps(state.apps)));
  } catch {
    // file:// 导出的单文件 HTML 可能运行在 opaque origin，写入 localStorage 会失败；
    // 这里降级为仅保留内存态，避免阻断后续列表渲染。
  }
}

function normalizeRole(role) {
  return role === "所有者" || !role ? "训虾员" : role;
}

function normalizeAppDescription(description) {
  const value = String(description || "").trim();

  if (
    value === "承载内部机器人通知和业务页面集成的企业自建应用。" ||
    value === "承载内部机器人通知和业务页面集成的企业自建应用"
  ) {
    return "企业所属岗位虾";
  }

  if (value === "企业自建应用") {
    return "企业所属岗位虾";
  }

  return value || "暂无描述";
}

function generateEmployeeNo(seed = "") {
  const base = Array.from(String(seed || "shrimp")).reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0,
  );
  return `10${String(100000 + (base % 900000)).padStart(6, "0")}`;
}

function normalizeApp(app) {
  const [colorA, colorB] =
    app.colorA && app.colorB ? [app.colorA, app.colorB] : getGradientPair(app.name);
  const employeeNo = String(app.employeeNo || generateEmployeeNo(app.id || app.name));
  const collaborators = Array.isArray(app.collaborators)
    ? app.collaborators
        .map((item, index) => ({
          id: item.id || `col_${index}_${Math.random().toString(36).slice(2, 8)}`,
          name: String(item.name || "").trim(),
          role: COLLABORATOR_ROLE_META[item.role] ? item.role : "汇报人",
          needsApproval:
            typeof item.needsApproval === "boolean"
              ? item.needsApproval
              : COLLABORATOR_ROLE_META[item.role]?.needsApproval ?? true,
        }))
        .filter((item) => item.name)
    : [];
  const spaceManage = getSpaceManageValues(app);

  return {
    id: app.id || generateAppId(),
    name: app.name || "未命名应用",
    description: normalizeAppDescription(app.description),
    employeeNo,
    miId: app.miId || `m${employeeNo}`,
    department: app.department || "",
    coreScenario: app.coreScenario || "",
    containerNeeds: app.containerNeeds || "",
    trainerList: app.trainerList || "",
    managerList: app.managerList || "",
    owner: app.owner || "Wei He 何伟",
    role: normalizeRole(app.role),
    spaceName: spaceManage.spaceName,
    spaceModel: spaceManage.spaceModel,
    spaceImage: spaceManage.spaceImage,
    containerSpec: spaceManage.containerSpec,
    spaceOwner: spaceManage.spaceOwner,
    spaceAdmins: spaceManage.spaceAdmins,
    collaborators,
    capabilities: {
      bot: Boolean(app.capabilities?.bot),
      web: Boolean(app.capabilities?.web),
      widget: Boolean(app.capabilities?.widget),
    },
    status: STATUS_META[app.status] ? app.status : "开发中",
    version: app.version || "0.1.0",
    updatedAt: app.updatedAt || new Date().toISOString(),
    createdAt: app.createdAt || new Date().toISOString(),
    secret: app.secret || generateSecret(),
    colorA,
    colorB,
    iconDataUrl: app.iconDataUrl || "",
    iconKey: app.iconKey || "cube",
    activity: Array.isArray(app.activity) ? app.activity : [],
  };
}

function getGradientPair(seedText) {
  const palette = [
    ["#F25F95", "#E38EB2"],
    ["#A97CFF", "#7C57F5"],
    ["#21C4D6", "#3A7BFF"],
    ["#51C88A", "#2BA56D"],
    ["#FF9B68", "#FF6C5C"],
  ];
  const seed = Array.from(seedText || "app").reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0,
  );
  return palette[seed % palette.length];
}

function generateAppId() {
  return `cli_${Math.random().toString(36).slice(2, 10)}${Date.now()
    .toString(36)
    .slice(-4)}`;
}

function generateSecret() {
  return `scli_${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
}

function getInitials(name) {
  const chars = Array.from((name || "").trim());
  return chars.length ? chars.slice(0, 2).join("") : "新";
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "--";
  }

  const parts = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}`;
}

function maskSecret(secret) {
  if (!secret || secret.length < 10) {
    return "********";
  }
  return `${secret.slice(0, 6)}••••••${secret.slice(-4)}`;
}

function getStatusMeta(status) {
  return STATUS_META[status] || STATUS_META["开发中"];
}

function getIconSvg(key) {
  return ICON_LIBRARY.find((icon) => icon.key === key)?.svg || ICON_LIBRARY[0].svg;
}

function getNavIconSvg(key) {
  return NAV_ICONS[key] || NAV_ICONS.home;
}

function getJobFieldConfig(action) {
  return JOB_DESCRIPTION_FIELDS.find((field) => field.action === action) || null;
}

function getJobEditIconSvg() {
  return '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m3 11.8 1 .9 2.4-.5L13 5.6 10.4 3 3.9 9.5l-.9 2.3Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/><path d="m8.9 4.6 2.6 2.6" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/></svg>';
}

function getApprovalLabel(needsApproval) {
  return needsApproval ? "是" : "否";
}

function renderApprovalChoices(needsApproval) {
  return `
    <span class="approval-choice-group" aria-label="是否需要审批">
      <span class="approval-choice${needsApproval ? " is-active" : ""}">是</span>
      <span class="approval-choice${needsApproval ? "" : " is-active"}">否</span>
    </span>
  `;
}

function getCollaboratorInitial(name) {
  return Array.from(String(name || "").trim())[0] || "协";
}

function renderCollaboratorRow(collaborator) {
  return `
    <div class="developer-row">
      <div class="developer-name-cell">
        <span class="mini-avatar">${escapeHtml(getCollaboratorInitial(collaborator.name))}</span>
        <span>${escapeHtml(collaborator.name)}</span>
      </div>
      <span><span class="developer-role-pill">${escapeHtml(collaborator.role)}</span></span>
      ${renderApprovalChoices(collaborator.needsApproval)}
      <span><button class="table-link" type="button" data-action="remove-collaborator" data-collaborator-id="${escapeHtml(
        collaborator.id,
      )}">移除</button></span>
    </div>
  `;
}

function renderJobDescriptionField(app, field) {
  return `
    <div class="locale-row">
      <div class="job-field-label-row">
        <p class="info-label">${escapeHtml(field.label)}</p>
        <button class="edit-link job-edit-button" type="button" data-action="${field.action}" aria-label="修改${escapeHtml(
          field.label,
        )}">
          ${getJobEditIconSvg()}
        </button>
      </div>
      <p class="info-text">${escapeHtml(app[field.key] || "暂无")}</p>
    </div>
  `;
}

function createAppIcon(app, large = false) {
  const icon = document.createElement("div");
  icon.className = `app-icon${large ? " large" : ""}`;
  icon.style.background = `linear-gradient(135deg, ${app.colorA}, ${app.colorB})`;

  if (app.iconDataUrl) {
    const image = document.createElement("img");
    image.src = app.iconDataUrl;
    image.alt = `${app.name} 图标`;
    icon.appendChild(image);
  } else if (app.iconKey) {
    icon.innerHTML = getIconSvg(app.iconKey);
  } else {
    icon.textContent = getInitials(app.name);
  }

  return icon;
}

function getPondFilterConfig(key) {
  return POND_FILTER_FIELDS.find((field) => field.key === key) || null;
}

function normalizePondFilterValues(values) {
  const normalized = values
    .map((item) => String(item || "").trim())
    .filter(Boolean);

  return normalized.length ? Array.from(new Set(normalized)) : ["—"];
}

function getAppFilterValues(app, key) {
  if (key === "spaceName") {
    return normalizePondFilterValues([getSpaceManageValues(app).spaceName]);
  }

  if (key === "trainerDisplay") {
    return normalizePondFilterValues(getTrainerNames(app));
  }

  if (key === "managerDisplay") {
    return normalizePondFilterValues(getManagerNames(app));
  }

  return normalizePondFilterValues([app[key]]);
}

function sortPondFilterValues(values) {
  return [...values].sort((left, right) =>
    String(left).localeCompare(String(right), "zh-CN", {
      numeric: true,
      sensitivity: "base",
    }),
  );
}

function matchesListQuery(app) {
  const query = state.query.trim().toLowerCase();
  if (!query) {
    return true;
  }

  const haystack = [
    app.name,
    app.id,
    app.employeeNo,
    app.miId,
    app.owner,
    app.description,
    app.department,
    app.coreScenario,
    app.containerNeeds,
    app.trainerList,
    getSpaceManageValues(app).spaceName,
    getTrainerNames(app).join(" "),
    getManagerNames(app).join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function matchesPondFilters(app, excludedKey = "") {
  return POND_FILTER_FIELDS.every((field) => {
    if (field.key === excludedKey) {
      return true;
    }

    const selectedValues = state.pondFilters[field.key] || [];
    if (!selectedValues.length) {
      return true;
    }

    const appValues = getAppFilterValues(app, field.key);
    return selectedValues.some((value) => appValues.includes(value));
  });
}

function getPondFilterSourceApps(excludedKey = "") {
  return state.apps.filter(
    (app) => matchesListQuery(app) && matchesPondFilters(app, excludedKey),
  );
}

function getPondFilterOptions(key) {
  return sortPondFilterValues(
    Array.from(
      new Set(
        getPondFilterSourceApps(key).flatMap((app) => getAppFilterValues(app, key)),
      ),
    ),
  );
}

function getVisiblePondFilterOptions(key) {
  const keyword = String(state.pondFilterSearches[key] || "")
    .trim()
    .toLowerCase();
  const options = getPondFilterOptions(key);

  if (!keyword) {
    return options;
  }

  return options.filter((option) => String(option).toLowerCase().includes(keyword));
}

function getPondFilterButtonLabel(field) {
  const selected = state.pondFilters[field.key] || [];
  return selected.length ? `${field.label}(${selected.length})` : field.label;
}

function renderPondFilterDropdown(field) {
  const selected = state.pondFilters[field.key] || [];
  const searchValue = String(state.pondFilterSearches[field.key] || "");
  const visibleOptions = getVisiblePondFilterOptions(field.key);
  const allSelected =
    Boolean(visibleOptions.length) &&
    visibleOptions.every((option) => selected.includes(option));

  return `
    <div class="pond-filter-dropdown">
      <label class="pond-filter-dropdown__search">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7.2" cy="7.2" r="4.9" stroke="currentColor" stroke-width="1.4" />
          <path d="m10.9 10.9 2.9 2.9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
        </svg>
        <input
          type="text"
          value="${escapeHtml(searchValue)}"
          data-filter-search-input="${escapeHtml(field.key)}"
          placeholder="搜索"
        />
      </label>
      <div class="pond-filter-dropdown__options">
        ${
          visibleOptions.length
            ? visibleOptions
                .map(
                  (option) => `
                    <label class="pond-filter-option">
                      <input
                        type="checkbox"
                        data-filter-option="${escapeHtml(field.key)}"
                        data-filter-value="${escapeHtml(encodeURIComponent(option))}"
                        ${selected.includes(option) ? "checked" : ""}
                      />
                      <span class="pond-filter-option__label" title="${escapeHtml(option)}">${escapeHtml(option)}</span>
                    </label>
                  `,
                )
                .join("")
            : '<div class="pond-filter-dropdown__empty">暂无可选项</div>'
        }
      </div>
      <button
        class="pond-filter-dropdown__footer"
        type="button"
        data-filter-select-all="${escapeHtml(field.key)}"
      >
        ${allSelected ? "取消全选" : "全选"}
      </button>
    </div>
  `;
}

function renderPondFilterToolbar() {
  if (!pondFilterToolbar) {
    return;
  }

  pondFilterToolbar.innerHTML = `
    <div class="pond-filter-toolbar__inner">
      ${POND_FILTER_FIELDS.map((field, index) => {
        const isOpen = state.openPondFilterKey === field.key;
        const isActive = isOpen || Boolean((state.pondFilters[field.key] || []).length);
        return `
          <div class="pond-filter-item ${isOpen ? "is-open" : ""} ${
            index % 6 >= 4 ? "is-align-right" : ""
          }">
            <button
              class="pond-filter-trigger ${isActive ? "is-active" : ""}"
              type="button"
              data-filter-trigger="${escapeHtml(field.key)}"
            >
              <span>${escapeHtml(getPondFilterButtonLabel(field))}</span>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m4.2 6.3 3.8 3.6 3.8-3.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            ${isOpen ? renderPondFilterDropdown(field) : ""}
          </div>
        `;
      }).join("")}
      <div class="pond-filter-actions">
        <button class="pond-filter-action-button pond-filter-reset" type="button" data-clear-pond-filters="true">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3.1 5.6V2.9m0 0H5.8m-2.7 0 1.7 1.8a5.2 5.2 0 1 1-1.2 4.4" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>重置</span>
        </button>
        <span class="pond-filter-actions__divider" aria-hidden="true"></span>
        <button class="pond-filter-action-button pond-filter-manage" type="button" data-open-field-manage="true">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6.7 2.8h2.6l.4 1.3c.2.1.4.2.7.3l1.2-.6 1.9 1.9-.6 1.2c.1.2.2.5.3.7l1.3.4v2.6l-1.3.4c-.1.2-.2.4-.3.7l.6 1.2-1.9 1.9-1.2-.6c-.2.1-.5.2-.7.3l-.4 1.3H6.7l-.4-1.3a5 5 0 0 1-.7-.3l-1.2.6-1.9-1.9.6-1.2a5 5 0 0 1-.3-.7l-1.3-.4V7.8l1.3-.4c.1-.2.2-.5.3-.7l-.6-1.2 1.9-1.9 1.2.6c.2-.1.5-.2.7-.3l.4-1.3Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" />
            <circle cx="8" cy="8.9" r="1.95" stroke="currentColor" stroke-width="1.35" />
          </svg>
          <span>字段管理</span>
        </button>
      </div>
    </div>
  `;
}

function getVisibleApps() {
  const apps = [...state.apps].sort((left, right) => {
    const delta =
      new Date(left.updatedAt).getTime() - new Date(right.updatedAt).getTime();
    return state.sortDesc ? -delta : delta;
  });

  return apps.filter((app) => matchesListQuery(app) && matchesPondFilters(app));
}

function exportVisibleApps() {
  const apps = getVisibleApps();

  if (!apps.length) {
    toast("当前没有可导出的岗位虾。", "导出");
    return;
  }

  const header = POND_LIST_FIELDS.map((field) => field.label);
  const rows = apps.map((app) =>
    POND_LIST_FIELDS.map((field) => getPondListValue(app, field.key)),
  );
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => escapeCsvCell(cell)).join(","))
    .join("\n");
  const blob = new Blob([`\uFEFF${csv}`], {
    type: "text/csv;charset=utf-8;",
  });
  const fileName = `岗位虾塘-${new Date().toISOString().slice(0, 10)}.csv`;
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = href;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(href), 0);
  toast(`已导出 ${apps.length} 条岗位虾。`, "导出");
}

function getPondLifecycleStatus(status) {
  if (status === "草稿" || status === "开发中") {
    return "draft";
  }

  if (status === "试运行" || status === "待上线") {
    return "trial";
  }

  if (status === "上岗" || status === "已启用") {
    return "active";
  }

  if (status === "冻结" || status === "已冻结") {
    return "frozen";
  }

  if (status === "下岗" || status === "已下岗") {
    return "offboarded";
  }

  return null;
}

function renderPondStatusOverview() {
  if (!pondStatusOverview) {
    return;
  }

  const counts = {
    draft: 0,
    trial: 0,
    active: 0,
    frozen: 0,
    offboarded: 0,
  };

  getVisibleApps().forEach((app) => {
    const lifecycleStatus = getPondLifecycleStatus(app.status);

    if (lifecycleStatus) {
      counts[lifecycleStatus] += 1;
    }
  });

  pondStatusOverview.innerHTML = POND_STATUS_ITEMS.map(
    (item) => `
      <article class="pond-status-card">
        <div class="pond-status-card__head">
          <span class="pond-status-card__label">${item.label}</span>
          <span
            class="pond-status-card__note"
            title="${escapeHtml(item.tip)}"
            aria-label="${escapeHtml(item.tip)}"
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6.15" stroke="currentColor" stroke-width="1.35" />
              <path d="M8 7.1v3.05" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
              <circle cx="8" cy="4.85" r="0.9" fill="currentColor" />
            </svg>
          </span>
        </div>
        <div class="pond-status-card__value">
          <strong class="pond-status-card__number">${counts[item.id]}</strong>
          <span class="pond-status-card__unit">个</span>
        </div>
      </article>
    `,
  ).join("");
}

function splitMemberList(value) {
  return String(value || "")
    .split(/[、，,\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function uniqueMemberNames(names) {
  return Array.from(new Set(names.filter(Boolean)));
}

function getTrainerNames(app) {
  const ownerAsTrainer = app.role === "训虾员" ? [app.owner] : [];
  const trainerCollaborators = Array.isArray(app.collaborators)
    ? app.collaborators
        .filter((item) => item.role === "训虾员")
        .map((item) => item.name)
    : [];

  return uniqueMemberNames([
    ...ownerAsTrainer,
    ...splitMemberList(app.trainerList),
    ...trainerCollaborators,
  ]);
}

function getManagerNames(app) {
  const collaboratorManagers = Array.isArray(app.collaborators)
    ? app.collaborators
        .filter((item) => item.role === "汇报人" || item.role === "管理者")
        .map((item) => item.name)
    : [];
  const managers = uniqueMemberNames([
    ...splitMemberList(app.managerList),
    ...collaboratorManagers,
  ]);

  return managers.length ? managers : uniqueMemberNames([app.owner]);
}

function getContainerSpecValue(value) {
  return CONTAINER_SPEC_OPTIONS.includes(value) ? value : "2核8G";
}

function normalizeSpaceName(value) {
  const trimmedValue = String(value || "").trim();

  if (trimmedValue === "德国车研所空间") {
    return "非洲新零售运营空间";
  }

  return trimmedValue;
}

function getSpaceManageValues(app) {
  const spaceOwner =
    String(app.spaceOwner || app.owner || "Wei He 何伟").trim() || "Wei He 何伟";
  const baseName = String(app.department || app.name || "岗位虾").trim() || "岗位虾";
  const spaceAdmins = uniqueMemberNames([
    ...splitMemberList(app.spaceAdmins),
    ...getManagerNames({ ...app, owner: spaceOwner }),
  ]).join("、");

  return {
    spaceName:
      normalizeSpaceName(app.spaceName) || normalizeSpaceName(`${baseName}空间`),
    spaceModel: String(app.spaceModel || "").trim() || DEFAULT_SPACE_MODEL,
    spaceImage: String(app.spaceImage || "").trim() || DEFAULT_SPACE_IMAGE,
    containerSpec: getContainerSpecValue(String(app.containerSpec || "").trim()),
    updatedAt: formatDateTime(app.updatedAt),
    spaceAdmins: spaceAdmins || spaceOwner,
  };
}

function getPondListValue(app, key) {
  let value = "";

  if (key === "trainerDisplay") {
    value = getTrainerNames(app).join("、");
  } else if (key === "managerDisplay") {
    value = getManagerNames(app).join("、");
  } else {
    value = String(app[key] || "").trim();
  }

  return value || "—";
}

function renderPondListRow(app) {
  const cells = POND_LIST_FIELDS.map((field) => {
    const value = getPondListValue(app, field.key);

    if (field.key === "name") {
      return `
        <td class="app-list-cell" data-field="${escapeHtml(field.key)}">
          <button
            class="app-list-name-link"
            type="button"
            data-open-manage="${escapeHtml(app.id)}"
            title="${escapeHtml(value)}"
          >
            ${escapeHtml(value)}
          </button>
        </td>
      `;
    }

    if (field.key === "spaceName") {
      return `
        <td class="app-list-cell" data-field="${escapeHtml(field.key)}">
          <button
            class="app-list-action"
            type="button"
            data-open-space-manage="${escapeHtml(app.id)}"
            title="${escapeHtml(value)}"
          >
            ${escapeHtml(value)}
          </button>
        </td>
      `;
    }

    return `
      <td class="app-list-cell" data-field="${escapeHtml(field.key)}">
        <span class="app-list-text" title="${escapeHtml(value)}">${escapeHtml(value)}</span>
      </td>
    `;
  }).join("");

  return `
    <tr class="app-list-row">
      ${cells}
    </tr>
  `;
}

function renderAppList() {
  const apps = getVisibleApps();
  appGrid.innerHTML = "";

  if (!apps.length) {
    emptyState.classList.remove("is-hidden");
    return;
  }

  emptyState.classList.add("is-hidden");

  appGrid.innerHTML = `
    <div class="app-list-table">
      <div class="app-list-table__scroll">
        <table class="app-list-table__inner">
          <thead>
            <tr>
              ${POND_LIST_FIELDS.map(
                (field) =>
                  `<th class="app-list-head-cell" data-field="${escapeHtml(field.key)}" scope="col">${escapeHtml(field.label)}</th>`,
              ).join("")}
            </tr>
          </thead>
          <tbody>
            ${apps.map((app) => renderPondListRow(app)).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderTabPanels() {
  state.activeTab = "custom";
  customPanel.classList.remove("is-hidden");
  if (storePanel) {
    storePanel.classList.add("is-hidden");
  }
  document.querySelectorAll(".app-tab").forEach((button) => {
    button.classList.add("is-active");
  });
}

function getSelectedApp() {
  return state.apps.find((app) => app.id === state.selectedId) || null;
}

function appendActivity(app, title, description) {
  app.activity.unshift({
    title,
    description,
    time: new Date().toISOString(),
  });
  app.activity = app.activity.slice(0, 10);
}

function getRouteHash(appId, section = "baseinfo") {
  const query = section === "capability" ? "?from=ability" : "";
  return `#app/${appId}/${section}${query}`;
}

function navigateToList(replace = false) {
  const hash = "#app";
  if (replace) {
    history.replaceState(null, "", hash);
    applyRouteFromHash();
    return;
  }

  if (window.location.hash === hash) {
    applyRouteFromHash();
    return;
  }
  window.location.hash = hash;
}

function navigateToDetail(appId, section = "baseinfo", replace = false) {
  const hash = getRouteHash(appId, section);
  if (replace) {
    history.replaceState(null, "", hash);
    applyRouteFromHash();
    return;
  }

  if (window.location.hash === hash) {
    applyRouteFromHash();
    return;
  }
  window.location.hash = hash;
}

function openManageInParentPortal(appId, section = "baseinfo") {
  if (isExternalNavMode || window.parent === window) {
    return false;
  }

  try {
    window.parent.postMessage(
      {
        type: "job-shrimp-open-config",
        payload: {
          appId,
          section,
        },
      },
      window.location.origin,
    );
    return true;
  } catch {
    return false;
  }
}

function parseHash() {
  const raw = window.location.hash || "#app";
  if (raw === "#" || raw === "") {
    return { view: "list" };
  }

  if (raw === "#app") {
    return { view: "list" };
  }

  const clean = raw.slice(1);
  const [path] = clean.split("?");
  const parts = path.split("/").filter(Boolean);

  if (parts[0] !== "app" || !parts[1]) {
    return { view: "list" };
  }

  const sectionAliasMap = {
    security: "safe",
    testing: "version",
    test: "version",
    publish: "version",
    quality: "analysis",
    analytics: "analysis",
    devquality: "development-quality",
  };
  const rawSection = sectionAliasMap[parts[2]] || parts[2];
  const section = DETAIL_SECTIONS.has(rawSection) ? rawSection : "baseinfo";
  return { view: "detail", appId: parts[1], section };
}

function applyRouteFromHash() {
  const route = parseHash();

  if (route.view === "list") {
    state.currentView = "list";
    state.selectedId = "";
    state.detailSection = "baseinfo";
    state.secretVisible = false;
    render();
    return;
  }

  const appExists = state.apps.some((app) => app.id === route.appId);
  if (!appExists) {
    navigateToList(true);
    return;
  }

  state.currentView = "detail";
  state.selectedId = route.appId;
  state.detailSection = route.section;
  state.qualityExpanded = ["analysis", "feedback", "development-quality"].includes(
    route.section,
  )
    ? true
    : state.qualityExpanded;
  if (route.section !== "baseinfo") {
    state.secretVisible = false;
  }
  render();
}

function getDetailSectionMeta(sectionId) {
  for (const group of DETAIL_NAV_GROUPS) {
    for (const item of group.items) {
      if (item.id === sectionId) {
        return {
          groupTitle: group.title,
          label: item.label,
          parentLabel: "",
        };
      }

      if (item.children?.length) {
        const child = item.children.find((entry) => entry.id === sectionId);
        if (child) {
          return {
            groupTitle: group.title,
            label: child.label,
            parentLabel: item.label,
          };
        }
      }
    }
  }

  return {
    groupTitle: "应用配置",
    label: "页面开发中",
    parentLabel: "",
  };
}

function getEnabledCapabilityCount(app) {
  return Object.values(app.capabilities || {}).filter(Boolean).length;
}

function renderSidebar(app) {
  const capabilityCount = getEnabledCapabilityCount(app);
  const collaboratorCount = 1 + (app.collaborators?.length || 0);
  const groupMarkup = DETAIL_NAV_GROUPS.map((group) => {
    const items = group.items
      .map((item) => {
        if (item.children?.length) {
          const childActive = item.children.some(
            (child) => child.id === state.detailSection,
          );
          const children = state.qualityExpanded
            ? `
                <div class="detail-nav-children">
                  ${item.children
                    .map((child) => {
                      const childClass =
                        child.id === state.detailSection ? " is-active" : "";
                      return `
                        <button class="detail-nav-child${childClass}" type="button" data-section="${child.id}">
                          <span>${escapeHtml(child.label)}</span>
                        </button>
                      `;
                    })
                    .join("")}
                </div>
              `
            : "";

          return `
            <div class="detail-nav-parent-wrap">
              <button class="detail-nav-item detail-nav-parent${
                childActive ? " is-parent-active" : ""
              }" type="button" data-toggle-group="${item.id}">
                <span class="detail-nav-icon">${getNavIconSvg(item.icon)}</span>
                <span>${escapeHtml(item.label)}</span>
                <span class="detail-nav-caret${
                  state.qualityExpanded ? " is-open" : ""
                }">⌃</span>
              </button>
              ${children}
            </div>
          `;
        }

        const active = item.id === state.detailSection ? " is-active" : "";
        return `
          <button class="detail-nav-item${active}" type="button" data-section="${item.id}">
            <span class="detail-nav-icon">${getNavIconSvg(item.icon)}</span>
            <span>${escapeHtml(item.label)}</span>
          </button>
        `;
      })
      .join("");

    return `
      <div class="sidebar-group-block">
        <div class="sidebar-group-head">
          <p class="sidebar-group-heading">${escapeHtml(group.title)}</p>
          <span class="sidebar-group-count">${group.items.length}</span>
        </div>
        ${items}
      </div>
    `;
  }).join("");

  detailSidebar.innerHTML = `
    <div class="detail-sidebar-shell">
      <section class="detail-sidebar-card detail-sidebar-intro">
        <span class="detail-sidebar-kicker">HiUI 风格导航</span>
        <div class="detail-sidebar-title-row">
          <strong>${escapeHtml(app.name)}</strong>
          <span class="status-pill ${getStatusMeta(app.status).className}">${escapeHtml(app.status)}</span>
        </div>
        <p>按基础配置、能力配置、版本发布与运营监控分区组织应用菜单，减少配置路径跳转。</p>
        <div class="detail-sidebar-meta-row">
          <div class="detail-sidebar-metric">
            <span>当前版本</span>
            <strong>${escapeHtml(app.version)}</strong>
          </div>
          <div class="detail-sidebar-metric">
            <span>已启能力</span>
            <strong>${capabilityCount} 项</strong>
          </div>
          <div class="detail-sidebar-metric">
            <span>协作者</span>
            <strong>${collaboratorCount} 人</strong>
          </div>
          <div class="detail-sidebar-metric">
            <span>最近更新</span>
            <strong>${escapeHtml(formatDateTime(app.updatedAt))}</strong>
          </div>
        </div>
      </section>

      ${groupMarkup}
    </div>
  `;
}

function renderDetailOverview(app) {
  const meta = getDetailSectionMeta(state.detailSection);
  const capabilityCount = getEnabledCapabilityCount(app);
  const collaboratorCount = 1 + (app.collaborators?.length || 0);
  const summary =
    DETAIL_SECTION_SUMMARY[state.detailSection] ||
    "按左侧导航维护当前岗位虾配置，内容区聚焦当前任务和操作。";

  return `
    <section class="detail-overview-panel">
      <div class="detail-overview-header">
        <div class="detail-overview-copy">
          <span class="detail-overview-breadcrumb">
            ${escapeHtml(meta.groupTitle)}${meta.parentLabel ? ` / ${escapeHtml(meta.parentLabel)}` : ""} / ${escapeHtml(meta.label)}
          </span>
          <h1>${escapeHtml(app.name)}</h1>
          <p>${escapeHtml(summary)}</p>
        </div>

        <div class="detail-overview-state">
          <span class="status-pill ${getStatusMeta(app.status).className}">${escapeHtml(app.status)}</span>
          <span class="detail-overview-state-text">当前页面：${escapeHtml(meta.label)}</span>
        </div>
      </div>

      <div class="detail-overview-stats">
        <article class="detail-overview-stat">
          <span>当前导航</span>
          <strong>${escapeHtml(meta.label)}</strong>
          <p>${escapeHtml(meta.groupTitle)}</p>
        </article>
        <article class="detail-overview-stat">
          <span>能力状态</span>
          <strong>${capabilityCount} / ${Object.keys(app.capabilities || {}).length}</strong>
          <p>已启用能力数量</p>
        </article>
        <article class="detail-overview-stat">
          <span>协作规模</span>
          <strong>${collaboratorCount} 人</strong>
          <p>包含训虾员与协作者</p>
        </article>
        <article class="detail-overview-stat">
          <span>最近更新</span>
          <strong>${escapeHtml(formatDateTime(app.updatedAt))}</strong>
          <p>创建于 ${escapeHtml(formatDateTime(app.createdAt))}</p>
        </article>
      </div>
    </section>
  `;
}

function renderBaseInfoSection(app) {
  return `
    <div class="detail-section-stack">
      <div class="page-title-row">
        <div>
          <h1>基础信息</h1>
        </div>
      </div>

      <article class="info-card">
        <h2>组织信息</h2>
        <div class="credential-grid">
          <div class="credential-item">
            <span>名称</span>
            <div class="credential-value-row">
              <strong>${escapeHtml(app.name)}</strong>
            </div>
          </div>
          <div class="credential-item">
            <span>工号</span>
            <div class="credential-value-row">
              <strong>${escapeHtml(app.employeeNo)}</strong>
            </div>
          </div>
          <div class="credential-item">
            <span>MiID</span>
            <div class="credential-value-row">
              <strong>${escapeHtml(app.miId)}</strong>
            </div>
          </div>
        </div>
      </article>

      <article class="info-card">
        <div class="info-card-head">
          <h2>综合信息</h2>
          <button class="edit-link" type="button" data-action="edit-info" aria-label="修改综合信息">${getJobEditIconSvg()}</button>
        </div>
        <div class="baseinfo-grid">
          <div class="baseinfo-icon-panel">
            <p class="info-label">应用图标</p>
            <div class="baseinfo-icon-row">
              <div class="detail-icon-preview" data-icon-preview="main"></div>
              <p class="info-tip">JPEG/PNG/SVG/BMP 格式，2 MB 以内，大于 240*240 px，无圆角</p>
            </div>
          </div>
          <div class="baseinfo-side-grid">
            <div class="baseinfo-meta-row">
              <p class="info-label">管理后台主页</p>
              <p class="info-text">暂无</p>
            </div>
            <div class="baseinfo-meta-row">
              <p class="info-label">创建时间</p>
              <p class="info-text">${formatDateTime(app.createdAt)}</p>
            </div>
            <div class="baseinfo-meta-row">
              <p class="info-label">最近更新时间</p>
              <p class="info-text">${formatDateTime(app.updatedAt)}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderJobDescriptionSection(app) {
  return `
    <div class="detail-section-stack">
      <article class="info-card page-card">
        <div class="page-title-row">
          <div>
            <h1>岗位说明书</h1>
            <p>查看岗位申请时填写的核心信息，用于后续配置、协作与发布流转。</p>
          </div>
        </div>

        <div class="locale-info job-description-info">
          ${JOB_DESCRIPTION_FIELDS.map((field) =>
            renderJobDescriptionField(app, field),
          ).join("")}
        </div>
      </article>
    </div>
  `;
}

function renderDevelopersSection(app) {
  const rows = [
    `
      <div class="developer-row">
        <div class="developer-name-cell">
          <span class="mini-avatar">W</span>
          <span>${escapeHtml(app.owner)}</span>
        </div>
        <span><span class="developer-role-pill">训虾员</span></span>
        ${renderApprovalChoices(false)}
        <span><button class="table-link" type="button" data-action="transfer-owner">转移</button></span>
      </div>
    `,
    ...app.collaborators.map(renderCollaboratorRow),
  ].join("");

  return `
    <article class="info-card page-card">
      <div class="page-title-row">
        <div>
          <h1>协作者管理</h1>
          <p>添加协作者后，可共同管理应用配置、权限申请与发布流程。训虾员拥有最高权限，可转移给其他协作者。</p>
        </div>
        <button class="secondary-button compact" type="button" data-action="add-collaborator">添加协作者</button>
      </div>

      <div class="developer-table">
        <div class="developer-row developer-head">
          <span>姓名</span>
          <span>角色</span>
          <span>是否需要审批</span>
          <span>操作</span>
        </div>
        ${rows}
      </div>
    </article>
  `;
}

function getCapabilityAction(app, capabilityId) {
  if (capabilityId === "bot") {
    return app.capabilities.bot
      ? {
          label: "配置",
          className: "secondary-button compact",
          action: "open-bot",
        }
      : {
          label: "+ 添加",
          className: "secondary-button compact is-blue-outline",
          action: "toggle-capability",
        };
  }

  if (capabilityId === "web") {
    return app.capabilities.web
      ? {
          label: "已添加",
          className: "secondary-button compact",
          action: "noop",
        }
      : {
          label: "+ 添加",
          className: "secondary-button compact is-blue-outline",
          action: "toggle-capability",
        };
  }

  if (capabilityId === "widget") {
    return app.capabilities.widget
      ? {
          label: "已添加",
          className: "secondary-button compact",
          action: "noop",
        }
      : {
          label: "+ 添加",
          className: "secondary-button compact is-blue-outline",
          action: "toggle-capability",
        };
  }

  return {
    label: "+ 添加",
    className: "secondary-button compact is-blue-outline",
    action: "placeholder",
  };
}

function renderCapabilitySection(app) {
  const cards = CAPABILITY_CARDS.map((card) => {
    const action = getCapabilityAction(app, card.id);
    const tag = card.tag
      ? `<span class="ability-tag ${card.tagClass || ""}">${escapeHtml(card.tag)}</span>`
      : "";

    return `
      <article class="ability-card">
        <div class="ability-preview ${card.color}">
          <div class="ability-preview-window">
            <div class="ability-preview-toolbar"></div>
            <div class="ability-preview-body">
              <span class="preview-line short"></span>
              <span class="preview-line"></span>
              <span class="preview-line tiny"></span>
            </div>
          </div>
        </div>
        <div class="ability-card-content">
          <div class="ability-title-row">
            <span class="ability-mini-icon">${getIconSvg(card.icon)}</span>
            <strong>${escapeHtml(card.title)}</strong>
            ${tag}
          </div>
          <p>${escapeHtml(card.description)}</p>
          <button
            class="${action.className}"
            type="button"
            data-action="${action.action}"
            data-capability="${card.id}"
          >${escapeHtml(action.label)}</button>
        </div>
      </article>
    `;
  }).join("");

  return `
    <article class="info-card page-card capability-page-card">
      <div class="page-title-block">
        <h1>添加应用能力</h1>
        <p>1. 你可以根据实际需求，为应用开启能力。单个应用可开启多种能力，一个能力可用于一个或多个飞书场景。</p>
        <p>2. 如果不确定需要添加什么能力，可切换至“按场景添加”，根据所需的业务场景选择能力。<a href="#" class="inline-text-link">了解更多</a></p>
      </div>

      <div class="capability-tab-bar">
        <button class="capability-subtab is-active" type="button">按能力添加</button>
        <button class="capability-subtab" type="button">按场景添加</button>
      </div>

      <div class="ability-card-grid">
        ${cards}
      </div>
    </article>
  `;
}

function renderBotSection() {
  return `
    <article class="info-card page-card">
      <div class="page-title-row">
        <div>
          <h1>机器人</h1>
          <p>与用户在聊天中交互的应用，可以向用户或群组自动发送消息、响应用户的消息、管理群组 <a href="#" class="inline-text-link">如何开发</a></p>
        </div>
        <button class="secondary-button compact" type="button" data-action="delete-bot">删除能力</button>
      </div>

      <button class="lead-link-button" type="button" data-action="bot-intro">查看能力介绍</button>

      <div class="notice-panel">
        <strong>注意：</strong>
        为了使机器人具有收发消息的基础功能，请在“权限管理”面板中开通以下权限：获取与发送单聊、群组消息；开通该权限后，机器人可以向用户发送单聊消息，或向机器人所在的群聊发送群消息；添加“接收消息”事件。
        <button class="notice-link-button" type="button" data-action="open-auth">展开详情</button>
      </div>

      <div class="bot-section-stack">
        <section class="bot-config-card">
          <h3>机器人配置</h3>

          <div class="bot-config-row">
            <div class="bot-config-head">
              <strong>如何开始使用</strong>
              <button class="edit-link" type="button" data-action="edit-bot-start" aria-label="修改如何开始使用">${getJobEditIconSvg()}</button>
            </div>
            <p class="muted-paragraph">暂无</p>
          </div>

          <div class="bot-config-row">
            <div class="bot-config-head">
              <strong>消息卡片回调请求方式</strong>
            </div>
            <p class="muted-paragraph">
              卡片回调能力已全新升级，你可以前往“事件与回调”添加卡片的“卡片回传交互”回调，以接收与事件订阅结构一致、加密策略一致的回调服务。
              若你的服务端逻辑需要继续使用旧版的卡片回调能力，可添加“卡片回传交互（旧版）”回调
              <button class="inline-action-button" type="button" data-action="open-event-callback">去配置</button>
            </p>
          </div>

          <div class="bot-config-row">
            <div class="bot-config-head">
              <strong>机器人自定义菜单</strong>
              <button class="edit-link" type="button" data-action="edit-bot-menu" aria-label="修改机器人自定义菜单">${getJobEditIconSvg()}</button>
            </div>
            <p class="muted-paragraph">
              开启机器人菜单能力后，用户可以在与机器人的单聊中访问菜单，更高效地使用机器人功能
              <a href="#" class="inline-text-link">了解更多</a>
            </p>
            <div class="bot-preview-pair">
              <div class="bot-device-card">
                <div class="device-toolbar"></div>
                <div class="device-screen">
                  <span class="preview-line short"></span>
                  <span class="preview-line"></span>
                  <div class="floating-menu-chip">消息菜单</div>
                </div>
              </div>
              <div class="bot-device-card compact">
                <div class="device-toolbar"></div>
                <div class="device-screen dimmed">
                  <span class="preview-line tiny"></span>
                  <span class="preview-line short"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  `;
}

function renderEventTabBody() {
  if (state.eventTab === "callback-config") {
    return `
      <div class="event-config-card">
        <h2>回调配置</h2>
        <p>当用户在飞书中的操作需要你的服务端立即返回内容时，飞书开放平台会将对应请求发送到你的回调地址。你需要保证服务可以快速响应，并按协议返回结果。</p>

        <div class="event-setting-row">
          <div class="event-setting-head">
            <strong>请求地址</strong>
            <button class="edit-link" type="button" data-action="edit-callback-url" aria-label="修改请求地址">${getJobEditIconSvg()}</button>
          </div>
          <p class="muted-paragraph">未配置</p>
        </div>

        <div class="event-setting-row">
          <div class="event-setting-head">
            <strong>卡片回传交互</strong>
            <button class="edit-link" type="button" data-action="edit-card-callback" aria-label="修改卡片回传交互">${getJobEditIconSvg()}</button>
          </div>
          <p class="muted-paragraph">未配置。添加后可接收用户在互动卡片中的点击、表单提交等交互行为。</p>
        </div>
      </div>
    `;
  }

  if (state.eventTab === "crypto") {
    return `
      <div class="event-config-card">
        <h2>加密策略</h2>
        <p>你可以为事件订阅与回调配置签名校验、加密 Key 等信息，以提升请求安全性并校验请求来源。</p>

        <div class="event-setting-row">
          <div class="event-setting-head">
            <strong>Encrypt Key</strong>
            <button class="edit-link" type="button" data-action="edit-encrypt-key" aria-label="修改 Encrypt Key">${getJobEditIconSvg()}</button>
          </div>
          <p class="muted-paragraph">未配置</p>
        </div>

        <div class="event-setting-row">
          <div class="event-setting-head">
            <strong>Verification Token</strong>
            <button class="edit-link" type="button" data-action="edit-verification-token" aria-label="修改 Verification Token">${getJobEditIconSvg()}</button>
          </div>
          <p class="muted-paragraph">未配置</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="event-config-card">
      <h2>事件配置</h2>
      <p>订阅事件后，飞书开放平台将会在事件（如机器人入群）发生时向请求地址推送消息 <a href="#" class="inline-text-link">了解更多</a></p>

      <div class="event-setting-row">
        <div class="event-setting-head">
          <strong>订阅方式</strong>
          <button class="edit-link" type="button" data-action="edit-event-mode" aria-label="修改订阅方式">${getJobEditIconSvg()}</button>
        </div>
        <p class="muted-paragraph">未配置</p>
      </div>
    </div>
  `;
}

function renderEventSection() {
  const tabs = [
    { id: "event-config", label: "事件配置" },
    { id: "callback-config", label: "回调配置" },
    { id: "crypto", label: "加密策略" },
  ]
    .map(
      (tab) => `
        <button class="capability-subtab${state.eventTab === tab.id ? " is-active" : ""}" type="button" data-event-tab="${tab.id}">
          ${escapeHtml(tab.label)}
        </button>
      `,
    )
    .join("");

  return `
    <article class="info-card page-card event-page-card">
      <div class="page-title-block">
        <h1>事件与回调</h1>
        <p>订阅事件或回调后，飞书开放平台将会在事件（如机器人入群）发生时向请求地址推送消息。注意：事件与回调的处理方式不同。订阅回调后，你需要立即返回响应内容，以反馈用户操作，而事件则不要求返回。<a href="#" class="inline-text-link">了解更多</a></p>
      </div>

      <button class="lead-link-button" type="button" data-action="collapse-event-intro">收起介绍</button>

      <div class="event-flow-card">
        <div class="event-flow-row">
          <div class="event-flow-label">事件</div>
          <div class="event-flow-node">飞书服务器</div>
          <div class="event-flow-arrow">推送数据变化</div>
          <div class="event-flow-node">开发者服务器</div>
          <div class="event-flow-return">可选择返回 HTTP 200，以确认收到数据</div>
        </div>
        <div class="event-flow-row">
          <div class="event-flow-label is-callback">回调</div>
          <div class="event-flow-node">终端用户</div>
          <div class="event-flow-arrow">触发特定交互行为</div>
          <div class="event-flow-node">飞书服务器</div>
          <div class="event-flow-arrow">推送交互行为的上下文</div>
          <div class="event-flow-node">开发者服务器</div>
          <div class="event-flow-return">立即返回响应内容</div>
        </div>
      </div>

      <div class="capability-tab-bar event-tab-bar">
        ${tabs}
      </div>

      ${renderEventTabBody()}
    </article>
  `;
}

function getFilteredPermissions() {
  const query = state.authQuery.trim().toLowerCase();
  if (!query) {
    return AUTH_PERMISSION_ROWS;
  }
  return AUTH_PERMISSION_ROWS.filter((row) =>
    [row.name, row.code, row.type].join(" ").toLowerCase().includes(query),
  );
}

function renderAuthSection() {
  const rows = getFilteredPermissions()
    .map(
      (row) => `
        <div class="auth-table-row">
          <div class="auth-name-cell">
            <strong>${escapeHtml(row.name)}</strong>
            <span>${escapeHtml(row.code)}</span>
          </div>
          <div class="auth-type-cell">${escapeHtml(row.type)}</div>
          <div><span class="auth-status-pill is-open">已开通</span></div>
          <div class="auth-range-cell">-</div>
          <div class="auth-ops-cell">
            <button class="table-link" type="button" data-action="show-api">相关 API/事件</button>
            <button class="table-link table-link-muted" type="button" data-action="close-permission">关闭</button>
          </div>
        </div>
      `,
    )
    .join("");

  return `
    <article class="info-card page-card auth-page-card">
      <div class="page-title-block">
        <h1>权限管理</h1>
        <p>开通 API 权限后，应用才能以应用身份（tenant_access_token）或用户身份（user_access_token）调用飞书 API；以应用身份调用飞书 API 时，应用可能还需要申请对应的数据权限。<a href="#" class="inline-text-link">了解更多</a></p>
      </div>

      <button class="lead-link-button" type="button" data-action="collapse-auth-intro">收起介绍</button>

      <div class="auth-flow-card">
        <div class="auth-flow-rail">
          <span class="flow-node blue">申请权限</span>
          <span class="flow-node green">免审权限</span>
          <span class="flow-node lime">权限开通成功，可调用 API/事件</span>
          <span class="flow-node amber">需审批权限</span>
          <span class="flow-node gray">用户身份权限</span>
          <span class="flow-node teal">以应用开发者身份调用 API，需审批权限可测试</span>
          <span class="flow-node green">提交版本，管理员审核通过</span>
          <span class="flow-node lime">权限开通成功，可调用 API/事件</span>
        </div>
      </div>

      <div class="auth-toolbar">
        <div class="auth-toolbar-primary">
          <button class="primary-button compact" type="button" data-action="open-permission">开通权限</button>
          <button class="secondary-button compact is-blue-outline" type="button" data-action="bulk-permission">批量导入/导出权限</button>
        </div>

        <div class="auth-toolbar-filters">
          <label class="table-search">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="5.75" stroke="currentColor" stroke-width="1.5" />
              <path d="m13.5 13.5 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <input type="search" value="${escapeHtml(
              state.authQuery,
            )}" placeholder="例如：获取群组信息、im:cha..." data-auth-search="true" />
          </label>
          <button class="filter-chip" type="button">权限名称</button>
          <button class="filter-chip" type="button">业务模块</button>
          <button class="filter-chip" type="button">权限类型</button>
          <button class="filter-chip" type="button">权限状态</button>
        </div>
      </div>

      <div class="auth-table">
        <div class="auth-table-head">
          <span>权限名称</span>
          <span>权限类型</span>
          <span>权限状态</span>
          <span>可访问的数据范围 <button class="inline-action-button" type="button" data-action="configure-range">配置</button></span>
          <span>操作</span>
        </div>
        ${rows || '<div class="auth-empty">没有匹配的权限项。</div>'}
      </div>
    </article>
  `;
}

function renderSafeSection() {
  return `
    <article class="info-card page-card safe-page-card">
      <div class="safe-tab-bar">
        <button class="capability-subtab${state.safeTab === "redirect" ? " is-active" : ""}" type="button" data-safe-tab="redirect">
          重定向 URL
        </button>
        <button class="capability-subtab${state.safeTab === "ip" ? " is-active" : ""}" type="button" data-safe-tab="ip">
          IP 白名单
        </button>
      </div>

      <section class="safe-card" id="safeRedirectCard">
        <h2>重定向 URL</h2>
        <p>添加重定向 URL 作为免登授权码跳转地址，其他重定向 URL 将无法获取免登授权码。<a href="#" class="inline-text-link">查看文档</a></p>
        <div class="safe-form-row">
          <input class="safe-input" type="text" placeholder="请填写 HTTP/HTTPS URL" />
          <button class="primary-button compact" type="button" data-action="add-redirect-url">添加</button>
          <button class="secondary-button compact" type="button" data-action="batch-edit-redirect">批量修改</button>
        </div>
      </section>

      <section class="safe-card" id="safeIpCard">
        <h2>IP 白名单</h2>
        <p>开启 IP 白名单后，仅白名单中的来源请求可以正常调用开放平台 API，不在白名单中的来源请求会被拒绝。<a href="#" class="inline-text-link">查看文档</a></p>
        <div class="safe-form-row">
          <input class="safe-input" type="text" placeholder="请填写有效的 IP" />
          <button class="primary-button compact" type="button" data-action="add-ip-whitelist">添加</button>
          <button class="secondary-button compact" type="button" data-action="batch-edit-ip">批量修改</button>
        </div>
      </section>
    </article>
  `;
}

function renderTestSection() {
  return `
    <article class="info-card page-card test-page-card">
      <div class="page-title-row">
        <div>
          <h1>灰度测试</h1>
          <p>每个开发者仅可创建 3 个测试企业。你可以在测试企业内直接获得开发所需要的各项权限，对应用修改也无需提交审核即可直接在已安装的测试企业内生效。</p>
          <a href="#" class="inline-text-link standalone-link">如何解散测试企业</a>
        </div>
        <button class="primary-button" type="button" data-action="create-test-company">创建测试企业</button>
      </div>

      <div class="test-table">
        <div class="test-table-head">
          <span>测试企业名称</span>
          <span>创建者</span>
          <span>测试人员</span>
          <span>操作</span>
        </div>

        <div class="test-empty-state">
          <div class="test-empty-illustration" aria-hidden="true">
            <div class="test-sheet"></div>
            <div class="test-ribbon one"></div>
            <div class="test-ribbon two"></div>
            <div class="test-line short"></div>
            <div class="test-line"></div>
          </div>
          <p>暂无数据</p>
        </div>
      </div>
    </article>
  `;
}

function getVersionDisplayStatus(status) {
  if (status === "已启用") {
    return { label: "已发布", className: "is-published" };
  }
  if (status === "待上线") {
    return { label: "待发布", className: "is-pending" };
  }
  return { label: "开发中", className: "is-draft" };
}

function renderVersionSection(app) {
  const versionStatus = getVersionDisplayStatus(app.status);

  return `
    <article class="info-card page-card version-page-card">
      <div class="page-title-row">
        <div>
          <h1>版本管理与发布</h1>
          <p>若企业所属岗位虾需要供企业内其他用户使用，均需先发布版本</p>
        </div>
        <button class="primary-button" type="button" data-action="create-version">创建版本</button>
      </div>

      <div class="version-table">
        <div class="version-table-head">
          <span>版本号</span>
          <span>版本状态</span>
          <span>发布人</span>
          <span>发布通过时间</span>
          <span>操作</span>
        </div>

        <div class="version-table-row">
          <div>${escapeHtml(app.version)}</div>
          <div>
            <span class="version-status ${versionStatus.className}">
              <span class="version-status-dot"></span>
              ${escapeHtml(versionStatus.label)}
            </span>
          </div>
          <div class="version-owner-cell">
            <span class="mini-avatar version-avatar">W</span>
            <span>${escapeHtml(app.owner)}</span>
          </div>
          <div>${formatDateTime(app.updatedAt)}</div>
          <div>-</div>
        </div>
      </div>
    </article>
  `;
}

function getLogsTabMeta() {
  const map = {
    server: {
      title: "服务端日志检索",
      description:
        "可查询调用飞书开放平台的 服务端 API 时的日志数据，仅支持查询 7 日内的调用日志。",
      requestPlaceholder: "X-Request-Id 或 X-Tt-Logid",
      openIdPlaceholder: "仅当 API 通过 user_access_token 鉴权时可搜索到",
    },
    event: {
      title: "事件日志检索",
      description:
        "可查询订阅事件、回调请求的投递日志，便于定位回调失败、签名校验和请求内容问题。",
      requestPlaceholder: "事件 ID / Log ID",
      openIdPlaceholder: "可输入用户 Open ID 进一步过滤",
    },
    client: {
      title: "客户端日志检索",
      description:
        "可查询客户端侧能力调用的日志信息，适合排查网页应用、小程序或工作台组件相关问题。",
      requestPlaceholder: "Trace ID / Request ID",
      openIdPlaceholder: "可输入终端用户 Open ID",
    },
  };

  return map[state.logsTab] || map.server;
}

function renderLogsSection() {
  const meta = getLogsTabMeta();
  const tabs = [
    { id: "server", label: "服务端日志检索" },
    { id: "event", label: "事件日志检索" },
    { id: "client", label: "客户端日志检索" },
  ]
    .map(
      (tab) => `
        <button class="capability-subtab${state.logsTab === tab.id ? " is-active" : ""}" type="button" data-logs-tab="${tab.id}">
          ${escapeHtml(tab.label)}
        </button>
      `,
    )
    .join("");

  return `
    <article class="info-card page-card logs-page-card">
      <div class="safe-tab-bar logs-tab-bar">
        ${tabs}
      </div>

      <div class="logs-head-block">
        <h1>${escapeHtml(meta.title)}</h1>
        <p>${escapeHtml(meta.description)}</p>
      </div>

      <div class="logs-tip-banner">
        <span class="logs-tip-icon">i</span>
        <span>如遇无法解决的问题，可直接将日志信息 <a href="#" class="inline-text-link">转发给飞书客服</a></span>
      </div>

      <div class="logs-form-grid">
        <div class="logs-field-group">
          <label class="logs-field-label">起止时间 <span class="required-mark">*</span></label>
          <div class="logs-time-row">
            <input class="safe-input" type="text" value="2026-04-23" />
            <input class="safe-input logs-time-input" type="text" value="00:00:00" />
            <input class="safe-input" type="text" value="2026-04-23" />
            <input class="safe-input logs-time-input" type="text" value="21:37:09" />
          </div>
        </div>

        <div class="logs-field-group">
          <label class="logs-field-label">请求 URL <span class="logs-label-tip">ⓘ</span></label>
          <input class="safe-input" type="text" placeholder="URL 中无需包含请求参数" />
        </div>

        <div class="logs-field-group">
          <label class="logs-field-label">Request ID <span class="logs-label-tip">ⓘ</span></label>
          <input class="safe-input" type="text" placeholder="${escapeHtml(meta.requestPlaceholder)}" />
        </div>

        <div class="logs-field-group">
          <label class="logs-field-label">用户 Open ID <span class="logs-label-tip">ⓘ</span> <a href="#" class="inline-text-link">如何获取 openId</a></label>
          <input class="safe-input" type="text" placeholder="${escapeHtml(meta.openIdPlaceholder)}" />
        </div>

        <div class="logs-field-group">
          <label class="logs-field-label">返回状态</label>
          <div class="logs-status-row">
            <button class="logs-filter-chip is-active" type="button">ALL</button>
            <button class="logs-filter-chip" type="button">SUCCESS</button>
            <button class="logs-filter-chip" type="button">FAIL</button>
          </div>
        </div>

        <div class="logs-field-group">
          <label class="logs-field-label">错误码</label>
          <input class="safe-input" type="text" placeholder="请输入" />
        </div>

        <div class="logs-field-group logs-field-wide">
          <label class="logs-field-label">错误信息</label>
          <input class="safe-input" type="text" placeholder="请输入" />
        </div>
      </div>

      <div class="logs-action-row">
        <button class="primary-button" type="button" data-action="search-logs">查询</button>
        <button class="secondary-button" type="button" data-action="reset-logs">重置</button>
      </div>

      <div class="logs-result-table">
        <div class="logs-result-head">
          <span>时间</span>
          <span>请求 URL</span>
          <span>返回状态</span>
          <span>错误码</span>
          <span>错误信息</span>
        </div>

        <div class="logs-empty-state">
          <div class="test-empty-illustration logs-empty-illustration" aria-hidden="true">
            <div class="test-sheet"></div>
            <div class="test-ribbon one"></div>
            <div class="test-ribbon two"></div>
            <div class="test-line short"></div>
            <div class="test-line"></div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderAnalysisSection() {
  const analysisMeta =
    state.analysisTab === "feature"
      ? {
          title: "功能分析",
          sectionTitle: "功能分析",
          firstMetric: "功能日活跃用户数",
          secondMetric: "功能新增活跃用户数",
          thirdMetric: "功能累计活跃用户数",
          chartTitle: "功能数据",
          chartMetric: "功能活跃用户数",
        }
      : {
          title: "应用分析",
          sectionTitle: "应用分析",
          firstMetric: "应用活跃用户数",
          secondMetric: "应用新增活跃用户数",
          thirdMetric: "应用累计活跃用户数",
          chartTitle: "应用数据",
          chartMetric: "应用活跃用户数",
        };

  return `
    <article class="info-card page-card analysis-page-card">
      <div class="safe-tab-bar analysis-tab-bar">
        <button class="capability-subtab${state.analysisTab === "app" ? " is-active" : ""}" type="button" data-analysis-tab="app">
          应用分析
        </button>
        <button class="capability-subtab${state.analysisTab === "feature" ? " is-active" : ""}" type="button" data-analysis-tab="feature">
          功能分析
        </button>
      </div>

      <section class="analysis-section-card">
        <h1>${escapeHtml(analysisMeta.sectionTitle)}</h1>
        <p>每日 10:00 左右更新截至两日前的数据，仅展示线上已开启能力的统计指标</p>

        <div class="analysis-filter-row">
          <input class="safe-input analysis-date-input" type="text" value="2026-04-22" />
          <div class="analysis-chip-group">
            <span class="analysis-chip-label">日期范围</span>
            <button class="logs-filter-chip is-active" type="button">近 1 日</button>
          </div>
        </div>

        <div class="analysis-metric-grid">
          <div class="analysis-metric-card is-blue">
            <span>${escapeHtml(analysisMeta.firstMetric)} <span class="logs-label-tip">ⓘ</span></span>
            <strong>0</strong>
            <p>较前一日 <span class="analysis-trend-up">▲</span> -</p>
          </div>
          <div class="analysis-metric-card is-green">
            <span>${escapeHtml(analysisMeta.secondMetric)} <span class="logs-label-tip">ⓘ</span></span>
            <strong>0</strong>
            <p>较前一日 <span class="analysis-trend-up">▲</span> -</p>
          </div>
          <div class="analysis-metric-card is-teal">
            <span>${escapeHtml(analysisMeta.thirdMetric)} <span class="logs-label-tip">ⓘ</span></span>
            <strong>0</strong>
            <p>较前一日 <span class="analysis-trend-up">▲</span> -</p>
          </div>
        </div>
      </section>

      <section class="analysis-section-card is-large">
        <div class="analysis-card-head">
          <div>
            <h2>${escapeHtml(analysisMeta.chartTitle)}</h2>
            <p>每日 10:00 左右更新截至两日前的数据，仅展示线上已开启能力的统计指标</p>
          </div>
          <button class="primary-button compact" type="button" data-action="export-analysis">导出数据</button>
        </div>

        <div class="analysis-filter-row is-wide">
          <input class="safe-input analysis-range-input" type="text" value="2026-03-24  -  2026-04-22" />
          <div class="analysis-chip-group">
            <span class="analysis-chip-label">日期范围</span>
            <button class="logs-filter-chip" type="button">近 1 日</button>
            <button class="logs-filter-chip" type="button">近 7 日</button>
            <button class="logs-filter-chip is-active" type="button">近 30 日</button>
            <button class="logs-filter-chip" type="button">近 90 日</button>
          </div>
        </div>

        <div class="analysis-chart-frame">
          <div class="analysis-chart-title">${escapeHtml(analysisMeta.chartMetric)} <span class="logs-label-tip">ⓘ</span></div>
          <div class="analysis-chart-plot">
            <span class="analysis-line"></span>
            <span class="analysis-dot d1"></span>
            <span class="analysis-dot d2"></span>
            <span class="analysis-dot d3"></span>
            <span class="analysis-dot d4"></span>
          </div>
        </div>
      </section>
    </article>
  `;
}

function renderFeedbackSection() {
  const feedbackMeta =
    state.feedbackTab === "suggestion"
      ? { title: "产品建议" }
      : state.feedbackTab === "stats"
        ? { title: "反馈统计" }
        : { title: "故障反馈" };

  return `
    <article class="info-card page-card feedback-page-card">
      <div class="safe-tab-bar feedback-tab-bar">
        <button class="capability-subtab${state.feedbackTab === "bug" ? " is-active" : ""}" type="button" data-feedback-tab="bug">
          故障反馈
        </button>
        <button class="capability-subtab${state.feedbackTab === "suggestion" ? " is-active" : ""}" type="button" data-feedback-tab="suggestion">
          产品建议
        </button>
        <button class="capability-subtab${state.feedbackTab === "stats" ? " is-active" : ""}" type="button" data-feedback-tab="stats">
          反馈统计
        </button>
      </div>

      <div class="page-title-row feedback-head-row">
        <div>
          <h1>${escapeHtml(feedbackMeta.title)}</h1>
          <p>以下数据实时更新</p>
        </div>
        <button class="primary-button compact" type="button" data-action="export-feedback">导出数据</button>
      </div>

      <div class="feedback-filter-grid">
        <div class="logs-field-group">
          <label class="logs-field-label">反馈时间</label>
          <input class="safe-input" type="text" value="2025-10-25  -  2026-04-23" />
        </div>
        <div class="logs-field-group">
          <label class="logs-field-label">故障类型</label>
          <button class="feedback-select" type="button">全部 <span>⌄</span></button>
        </div>
        <div class="logs-field-group">
          <label class="logs-field-label">处理状态</label>
          <button class="feedback-select" type="button">全部 <span>⌄</span></button>
        </div>
      </div>

      <div class="feedback-action-row">
        <button class="secondary-button compact" type="button" data-action="mark-feedback-processing">标记为处理中</button>
        <button class="secondary-button compact" type="button" data-action="mark-feedback-done">标记为已处理</button>
        <button class="secondary-button compact" type="button" data-action="mark-feedback-closed">标记为已关闭</button>
        <span class="feedback-selected-text">已选择 0 条</span>
      </div>

      <div class="feedback-table feedback-table-rich">
        <div class="feedback-table-head">
          <span><input type="checkbox" disabled /></span>
          <span>反馈时间</span>
          <span>反馈人</span>
          <span>反馈详情</span>
          <span>故障类型</span>
          <span>日志信息</span>
          <span>处理状态</span>
        </div>

        <div class="feedback-empty-wrap">
          <div class="test-empty-illustration logs-empty-illustration" aria-hidden="true">
            <div class="test-sheet"></div>
            <div class="test-ribbon one"></div>
            <div class="test-ribbon two"></div>
            <div class="test-line short"></div>
            <div class="test-line"></div>
          </div>
          <p>暂无数据</p>
        </div>
      </div>
    </article>
  `;
}

function renderDevQualitySection() {
  const devQualityMeta =
    state.devQualityTab === "frontend"
      ? {
          tabTitle: "应用前端质量监控",
          firstMetric: "前端页面白屏率",
          secondMetric: "前端 JS 异常率",
          thirdMetric: "前端资源加载失败率",
          detailTabs: ["页面性能", "JS 异常", "资源加载"],
        }
      : {
          tabTitle: "开放接口质量监控",
          firstMetric: "服务端接口失败率",
          secondMetric: "事件推送失败率",
          thirdMetric: "客户端接口失败率",
          detailTabs: ["服务端日志", "事件日志", "客户端日志"],
        };

  return `
    <article class="info-card page-card dev-quality-page-card">
      <div class="safe-tab-bar dev-quality-tab-bar">
        <button class="capability-subtab${state.devQualityTab === "api" ? " is-active" : ""}" type="button" data-dev-quality-tab="api">
          开放接口质量监控
        </button>
        <button class="capability-subtab${state.devQualityTab === "frontend" ? " is-active" : ""}" type="button" data-dev-quality-tab="frontend">
          应用前端质量监控
        </button>
      </div>

      <section class="analysis-section-card">
        <h1>质量概览</h1>
        <p>数据实时更新，刷新页面即可查看最新数据</p>

        <div class="analysis-filter-row">
          <input class="safe-input analysis-date-input" type="text" value="2026-04-22" />
        </div>

        <div class="analysis-metric-grid">
          <div class="analysis-metric-card is-blue">
            <span>${escapeHtml(devQualityMeta.firstMetric)} <span class="logs-label-tip">ⓘ</span></span>
            <strong>--</strong>
            <p>日环比 ▼ 0.00%</p>
            <div class="dev-quality-low">落后于 0% 的应用</div>
          </div>
          <div class="analysis-metric-card is-blue">
            <span>${escapeHtml(devQualityMeta.secondMetric)} <span class="logs-label-tip">ⓘ</span></span>
            <strong>--</strong>
            <p>日环比 ▼ 0.00%</p>
            <div class="dev-quality-low">落后于 0% 的应用</div>
          </div>
          <div class="analysis-metric-card is-blue">
            <span>${escapeHtml(devQualityMeta.thirdMetric)} <span class="logs-label-tip">ⓘ</span></span>
            <strong>--</strong>
            <p>日环比 ▼ 0.00%</p>
            <div class="dev-quality-low">落后于 0% 的应用</div>
          </div>
        </div>
      </section>

      <section class="analysis-section-card is-large">
        <div class="analysis-card-head">
          <div>
            <h2>指标详情</h2>
            <p>当日期范围为同一天时，数据图可按小时或分钟展示（最多可查看近一个月时间的数据）</p>
          </div>
          <button class="primary-button compact" type="button" data-action="export-dev-quality">导出数据</button>
        </div>

        <div class="dev-quality-mini-tabs">
          <button class="mini-tab is-active" type="button">${escapeHtml(devQualityMeta.detailTabs[0])}</button>
          <button class="mini-tab" type="button">${escapeHtml(devQualityMeta.detailTabs[1])}</button>
          <button class="mini-tab" type="button">${escapeHtml(devQualityMeta.detailTabs[2])}</button>
        </div>

        <div class="analysis-filter-row is-wide">
          <input class="safe-input analysis-range-input" type="text" value="2026-04-16  -  2026-04-23" />
          <div class="analysis-chip-group">
            <span class="analysis-chip-label">时间粒度</span>
            <button class="logs-filter-chip is-active" type="button">按天</button>
            <button class="logs-filter-chip" type="button">按小时</button>
            <button class="logs-filter-chip" type="button">按分钟</button>
          </div>
        </div>

        <div class="analysis-chart-frame">
          <div class="analysis-chart-title">${escapeHtml(devQualityMeta.firstMetric)} <span class="logs-label-tip">ⓘ</span></div>
          <div class="analysis-chart-plot">
            <span class="analysis-line"></span>
            <span class="analysis-dot d1"></span>
            <span class="analysis-dot d2"></span>
            <span class="analysis-dot d3"></span>
            <span class="analysis-dot d4"></span>
          </div>
        </div>
      </section>
    </article>
  `;
}

function renderPlaceholderSection(section) {
  const item = DETAIL_NAV_GROUPS.flatMap((group) => group.items).find(
    (entry) => entry.id === section,
  );
  const title = item?.label || "页面开发中";

  return `
    <article class="info-card page-card placeholder-page-card">
      <div class="page-title-block">
        <h1>${escapeHtml(title)}</h1>
        <p>这个页面已经接入到左侧导航和路由结构中，当前先保留为占位内容，方便继续按飞书开放平台样式补齐。</p>
      </div>
      <div class="placeholder-panel">
        <div class="placeholder-window">
          <span class="preview-line short"></span>
          <span class="preview-line"></span>
          <span class="preview-line tiny"></span>
        </div>
        <button class="secondary-button compact" type="button" data-action="placeholder">继续完善此页面</button>
      </div>
    </article>
  `;
}

function renderDetailSection(app) {
  switch (state.detailSection) {
    case "baseinfo":
      return renderBaseInfoSection(app);
    case "job-description":
      return renderJobDescriptionSection(app);
    case "developers":
      return renderDevelopersSection(app);
    case "capability":
      return renderCapabilitySection(app);
    case "bot":
      return renderBotSection(app);
    case "event":
      return renderEventSection(app);
    case "auth":
      return renderAuthSection(app);
    case "safe":
      return renderSafeSection(app);
    case "test":
      return renderTestSection(app);
    case "version":
      return renderVersionSection(app);
    case "logs":
      return renderLogsSection(app);
    case "analysis":
      return renderAnalysisSection(app);
    case "feedback":
      return renderFeedbackSection(app);
    case "development-quality":
      return renderDevQualitySection(app);
    default:
      return renderPlaceholderSection(state.detailSection);
  }
}

function renderDetailView() {
  const app = getSelectedApp();
  if (!app) {
    return;
  }

  const currentHeaderIcon = document.getElementById("detailHeaderIcon");
  const nextHeaderIcon = createAppIcon(app);
  nextHeaderIcon.id = "detailHeaderIcon";
  currentHeaderIcon.replaceWith(nextHeaderIcon);

  const meta = getStatusMeta(app.status);
  detailHeaderName.textContent = app.name;
  detailHeaderStatus.textContent = app.status;
  detailHeaderStatus.className = `status-pill ${meta.className}`;
  detailHeaderMeta.textContent = "正式应用@小米科技";

  renderSidebar(app);
  detailMain.innerHTML = `
    <div class="detail-content-shell">
      ${renderDetailSection(app)}
    </div>
  `;

  const iconPreview = detailMain.querySelector('[data-icon-preview="main"]');
  if (iconPreview) {
    iconPreview.innerHTML = "";
    iconPreview.appendChild(createAppIcon(app));
  }
}

let overflowSyncFrame = 0;

function syncViewportOverflow() {
  overflowSyncFrame = 0;

  const root = document.documentElement;
  const body = document.body;
  const needsVerticalScroll = root.scrollHeight > window.innerHeight + 1;
  const overflowY = needsVerticalScroll ? "auto" : "hidden";

  root.style.overflowY = overflowY;
  body.style.overflowY = overflowY;
}

function scheduleViewportOverflowSync() {
  if (overflowSyncFrame) {
    window.cancelAnimationFrame(overflowSyncFrame);
  }

  overflowSyncFrame = window.requestAnimationFrame(syncViewportOverflow);
}

function render() {
  listView.classList.toggle("is-hidden", state.currentView !== "list");
  detailView.classList.toggle("is-hidden", state.currentView !== "detail");
  renderTabPanels();

  if (state.currentView === "list" && state.activeTab === "custom") {
    renderPondStatusOverview();
    renderPondFilterToolbar();
    renderAppList();
  }

  if (state.currentView === "detail" && state.selectedId) {
    renderDetailView();
  }

  scheduleViewportOverflowSync();
}

function toast(message, title = "提示") {
  const node = document.createElement("div");
  node.className = "toast";
  node.innerHTML = `<strong>${escapeHtml(title)}</strong><div>${escapeHtml(
    message,
  )}</div>`;
  toastStack.appendChild(node);
  window.setTimeout(() => node.remove(), 2500);
}

function saveAndRender() {
  saveApps();
  render();
}

function openCreateModal() {
  resetCreateForm();
  setCreateStep(1);
  createModalLayer.classList.remove("is-hidden");
}

function closeCreateModal() {
  createModalLayer.classList.add("is-hidden");
  resetCreateForm();
}

function openJobEditModal(field, app) {
  state.jobEditAction = field.action;
  jobEditTitle.textContent = `请输入${field.label}`;
  jobEditTextarea.value = String(app[field.key] || "");
  jobEditError.textContent = "";
  jobEditError.classList.add("is-hidden");
  jobEditModalLayer.classList.remove("is-hidden");
  window.setTimeout(() => {
    jobEditTextarea.focus();
    jobEditTextarea.setSelectionRange(
      jobEditTextarea.value.length,
      jobEditTextarea.value.length,
    );
  }, 0);
}

function closeJobEditModal() {
  state.jobEditAction = "";
  jobEditTextarea.value = "";
  jobEditError.textContent = "";
  jobEditError.classList.add("is-hidden");
  jobEditModalLayer.classList.add("is-hidden");
}

function renderCollaboratorPermissions() {
  const meta = COLLABORATOR_ROLE_META[state.collaboratorRole];
  if (!meta) {
    collaboratorPermissionList.innerHTML = "";
    return;
  }

  const midpoint = Math.ceil(meta.permissions.length / 2);
  const columns = [meta.permissions.slice(0, midpoint), meta.permissions.slice(midpoint)];
  document.getElementById("collaboratorPermissionTitle").textContent = `${state.collaboratorRole}权限`;
  collaboratorPermissionList.innerHTML = columns
    .map(
      (items) => `
        <ul>
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      `,
    )
    .join("");
}

function openCollaboratorModal() {
  state.collaboratorRole = "汇报人";
  collaboratorForm.reset();
  collaboratorMembersInput.value = "";
  collaboratorError.textContent = "";
  collaboratorError.classList.add("is-hidden");
  const defaultRole = collaboratorForm.querySelector(
    'input[name="collaboratorRole"][value="汇报人"]',
  );
  if (defaultRole) {
    defaultRole.checked = true;
  }
  renderCollaboratorPermissions();
  collaboratorModalLayer.classList.remove("is-hidden");
  window.setTimeout(() => collaboratorMembersInput.focus(), 0);
}

function closeCollaboratorModal() {
  collaboratorModalLayer.classList.add("is-hidden");
  collaboratorError.textContent = "";
  collaboratorError.classList.add("is-hidden");
  collaboratorMembersInput.value = "";
}

function setSpaceManageError(message) {
  spaceManageError.textContent = message;
  spaceManageError.classList.remove("is-hidden");
}

function setFormError(message) {
  formError.textContent = message;
  formError.classList.remove("is-hidden");
}

function setJobEditError(message) {
  jobEditError.textContent = message;
  jobEditError.classList.remove("is-hidden");
}

function clearFormError() {
  formError.textContent = "";
  formError.classList.add("is-hidden");
}

function setCollaboratorError(message) {
  collaboratorError.textContent = message;
  collaboratorError.classList.remove("is-hidden");
}

function clearSpaceManageError() {
  spaceManageError.textContent = "";
  spaceManageError.classList.add("is-hidden");
}

function openSpaceManageModal(appId) {
  const app = state.apps.find((item) => item.id === appId);
  if (!app) {
    return;
  }

  const values = getSpaceManageValues(app);
  state.spaceManageId = appId;
  spaceManageTitleName.textContent = app.name || "当前岗位虾";
  spaceManageNameInput.value = values.spaceName;
  spaceManageModelInput.value = values.spaceModel;
  spaceManageImageInput.value = values.spaceImage;
  spaceManageSpecInput.value = values.containerSpec;
  spaceManageOwnerInput.value = values.updatedAt;
  spaceManageAdminsInput.value = values.spaceAdmins;
  clearSpaceManageError();
  spaceManageModalLayer.classList.remove("is-hidden");
  window.setTimeout(() => {
    closeSpaceManageModalButton?.focus();
  }, 0);
}

function closeSpaceManageModal() {
  state.spaceManageId = "";
  spaceManageTitleName.textContent = "当前岗位虾";
  clearSpaceManageError();
  spaceManageForm.reset();
  spaceManageModalLayer.classList.add("is-hidden");
}

// ─── Agent Card Modal ─────────────────────────────────────
function openAgentCardModal(appId) {
  const app = state.apps.find((a) => a.id === appId);
  if (!app) return;

  const lifecycleStatus = getPondLifecycleStatus(app.status);
  const statusColorMap = {
    草稿: { bg: "#F2F3F5", color: "#86909C" },
    试运行: { bg: "#E8F0FF", color: "#1A6FB5" },
    上岗: { bg: "#E8F8E5", color: "#237F3F" },
    冻结: { bg: "#FFECE8", color: "#CB2634" },
    下岗: { bg: "#F2F3F5", color: "#C9CDD4" },
  };
  const sc = statusColorMap[lifecycleStatus] || statusColorMap["草稿"];

  const trainerNames = getTrainerNames(app).join("、") || "—";
  const managerNames = getManagerNames(app).join("、") || "—";
  const reporterName = (app.collaborators || []).find((c) => c.role === "汇报人")?.name || "—";
  const avatarText = app.name.slice(0, 2);
  const gradientBg = `linear-gradient(135deg, ${app.colorA || "#667EEA"} 0%, ${app.colorB || "#764BA2"} 100%)`;

  const modal = document.createElement("div");
  modal.className = "agent-card-overlay";
  modal.innerHTML = `
    <div class="agent-card-modal">
      <div class="agent-card-header">
        <div class="agent-card-avatar" style="background: ${gradientBg}">${escapeHtml(avatarText)}</div>
        <div class="agent-card-header-info">
          <div class="agent-card-header-row">
            <span class="agent-card-name">${escapeHtml(app.name)}</span>
            <span class="agent-card-status" style="background: ${sc.bg}; color: ${sc.color}"><span class="agent-card-status-dot" style="background: ${sc.color}"></span>${escapeHtml(lifecycleStatus)}</span>
          </div>
          <div class="agent-card-dept">${escapeHtml(app.department || "—")}</div>
        </div>
        <button class="agent-card-close" type="button" aria-label="关闭">&times;</button>
      </div>
      <div class="agent-card-body">
        <div class="agent-card-section-title">账号信息</div>
        <div class="agent-card-fields">
          <div class="agent-card-field"><div class="agent-card-field-label">工号</div><div class="agent-card-field-value">${escapeHtml(app.employeeNo || "—")}</div></div>
          <div class="agent-card-field"><div class="agent-card-field-label">MiID</div><div class="agent-card-field-value">${escapeHtml(app.miId || "—")}</div></div>
          <div class="agent-card-field"><div class="agent-card-field-label">App ID</div><div class="agent-card-field-value agent-card-mono">${escapeHtml(app.id)}</div></div>
          <div class="agent-card-field"><div class="agent-card-field-label">版本</div><div class="agent-card-field-value">${escapeHtml(app.version || "—")}</div></div>
        </div>
        <div class="agent-card-section-title">组织信息</div>
        <div class="agent-card-fields">
          <div class="agent-card-field"><div class="agent-card-field-label">所属部门</div><div class="agent-card-field-value">${escapeHtml(app.department || "—")}</div></div>
          <div class="agent-card-field"><div class="agent-card-field-label">汇报上级</div><div class="agent-card-field-value">${escapeHtml(reporterName)}</div></div>
          <div class="agent-card-field agent-card-field--full"><div class="agent-card-field-label">训虾员</div><div class="agent-card-field-value">${escapeHtml(trainerNames)}</div></div>
          <div class="agent-card-field agent-card-field--full"><div class="agent-card-field-label">管理者</div><div class="agent-card-field-value">${escapeHtml(managerNames)}</div></div>
        </div>
        <div class="agent-card-section-title">岗位职责</div>
        <div class="agent-card-desc">${escapeHtml(app.description || "暂无岗位说明")}</div>
        ${app.coreScenario ? `<div class="agent-card-section-title">核心场景</div><div class="agent-card-tags"><span class="agent-card-tag">${escapeHtml(app.coreScenario)}</span></div>` : ""}
      </div>
      <div class="agent-card-footer">
        <button class="agent-card-btn" type="button">关闭</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add("is-visible"));

  const close = () => {
    modal.classList.remove("is-visible");
    setTimeout(() => modal.remove(), 200);
  };
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".agent-card-close") || e.target.closest(".agent-card-btn")) {
      close();
    }
  });
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function updateFieldCounters() {
  nameCounter.textContent = `${appNameInput.value.length}/32`;
}

// ─── 中文→英文名自动翻译（简易映射）──────────────────
const CN_EN_MAP = {
  "销售": "Sales", "客服": "Customer Service", "培训": "Training",
  "数据": "Data", "分析": "Analysis", "报表": "Report",
  "运营": "Operations", "门店": "Store", "渠道": "Channel",
  "质检": "Quality", "合同": "Contract", "舆情": "Sentiment",
  "监控": "Monitor", "财务": "Finance", "人事": "HR",
  "法务": "Legal", "市场": "Marketing", "产品": "Product",
  "技术": "Tech", "研发": "R&D", "测试": "Testing",
  "设计": "Design", "采购": "Procurement", "物流": "Logistics",
  "库存": "Inventory", "价格": "Pricing", "促销": "Promotion",
  "会员": "Member", "商家": "Merchant", "供应商": "Supplier",
  "专员": "Specialist", "助理": "Assistant", "经理": "Manager",
  "主管": "Supervisor", "总监": "Director", "虾": "Shrimp",
  "助手": "Assistant", "巡检": "Inspection", "话术": "Script",
  "考核": "Assessment", "对接": "Coordinator", "监测": "Monitor",
};

function autoTranslateToEnglish(cnName) {
  if (!cnName) return "";
  let result = cnName;
  const sortedKeys = Object.keys(CN_EN_MAP).sort((a, b) => b.length - a.length);
  for (const cn of sortedKeys) {
    if (result.includes(cn)) {
      result = result.replace(cn, CN_EN_MAP[cn]);
    }
  }
  // 如果还有未翻译的中文字符，取拼音首字母近似
  if (/[一-龥]/.test(result)) {
    result = result.replace(/[一-龥]/g, "");
  }
  return result.trim() || cnName;
}

// ─── 部门→汇报上级映射 ──────────────────────────────
const DEPARTMENT_REPORTER_MAP = {
  "集团信息技术部": "郭瑞琪 Seven",
  "国际BI": "Wei He 何伟",
  "ITBP": "杨帆",
  "国际参谋部": "李建国",
  "国际-销售管理": "杨帆",
  "客户服务部": "战达",
  "培训发展部": "Eric Deng 邓舟",
  "数据分析部": "战达",
  "东南亚销售部": "杨帆",
  "国际业务部": "Wei He 何伟",
};

// ─── 步骤导航 ──────────────────────────────────────
const TOTAL_STEPS = 3;

function setCreateStep(step) {
  state.createStep = step;

  // 更新步骤指示器
  const items = stepIndicator.querySelectorAll(".step-item");
  const lines = stepIndicator.querySelectorAll(".step-line");
  items.forEach((item, i) => {
    const stepNum = i + 1;
    item.classList.remove("is-active", "is-done");
    if (stepNum === step) item.classList.add("is-active");
    else if (stepNum < step) item.classList.add("is-done");
  });
  lines.forEach((line, i) => {
    line.classList.toggle("is-done", i + 1 < step);
  });

  // 切换表单步骤
  const formSteps = createAppForm.querySelectorAll(".form-step");
  formSteps.forEach((fs) => {
    fs.classList.toggle("is-active", Number(fs.dataset.step) === step);
  });

  // 更新底部按钮
  prevStepButton.classList.toggle("is-hidden", step === 1);
  nextStepButton.classList.toggle("is-hidden", step === TOTAL_STEPS);
  submitCreateButton.classList.toggle("is-hidden", step !== TOTAL_STEPS);
}

function validateCreateStep(step) {
  clearFormError();
  if (step === 1) {
    const name = (appNameInput.value || "").trim();
    if (name.length < 2) {
      setFormError("虾名至少需要 2 个字符。");
      return false;
    }
    const emailPrefix = (appEmailPrefixInput.value || "").trim();
    if (emailPrefix.length < 2) {
      setFormError("邮箱前缀至少需要 2 个字符。");
      return false;
    }
  } else if (step === 2) {
    if (!departmentSelect.value) {
      setFormError("请选择所属部门。");
      return false;
    }
    if (!spaceSelect.value) {
      setFormError("请选择所属空间。");
      return false;
    }
  } else if (step === 3) {
    const jobTitle = (jobTitleInput.value || "").trim();
    if (jobTitle.length < 2) {
      setFormError("岗位名称至少需要 2 个字符。");
      return false;
    }
    if (!jobLevelSelect.value) {
      setFormError("请选择岗位定级。");
      return false;
    }
    const attachment = (attachmentInput.value || "").trim();
    if (!attachment) {
      setFormError("请提供岗位说明附件链接。");
      return false;
    }
  }
  return true;
}

function handleNextStep() {
  if (!validateCreateStep(state.createStep)) return;
  if (state.createStep < TOTAL_STEPS) {
    setCreateStep(state.createStep + 1);
  }
}

function handlePrevStep() {
  if (state.createStep > 1) {
    setCreateStep(state.createStep - 1);
    clearFormError();
  }
}

function renderColorOptions() {
  if (!colorOptions) {
    return;
  }
  colorOptions.innerHTML = "";
  CREATE_COLOR_OPTIONS.forEach((color) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `color-chip${
      state.createColor === color ? " is-selected" : ""
    }`;
    button.dataset.color = color;
    button.style.background = color;
    colorOptions.appendChild(button);
  });
}

function renderIconOptions() {
  if (!iconOptions) {
    return;
  }
  iconOptions.innerHTML = "";
  ICON_LIBRARY.forEach((icon) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `icon-option${
      state.createIconKey === icon.key ? " is-selected" : ""
    }`;
    button.dataset.iconKey = icon.key;
    button.innerHTML = icon.svg;
    iconOptions.appendChild(button);
  });
}

function createPreviewIcon() {
  const current = document.getElementById("uploadAvatarPreview");
  if (!current) {
    updateFieldCounters();
    return;
  }
  const tempApp = {
    name: appNameInput.value.trim() || "新岗位",
    colorA: state.createColor,
    colorB: state.createColor,
    iconDataUrl: state.uploadDataUrl,
    iconKey: state.createIconKey,
  };
  const next = createAppIcon(tempApp, true);
  next.id = "uploadAvatarPreview";
  current.replaceWith(next);
  updateFieldCounters();
}

function renderCreateSelectors() {
  renderColorOptions();
  renderIconOptions();
}

function resetCreateForm() {
  createAppForm.reset();
  state.uploadDataUrl = "";
  state.createColor = CREATE_COLOR_OPTIONS[2];
  state.createIconKey = "cube";
  state.createStep = 1;
  renderCreateSelectors();
  createPreviewIcon();
  clearFormError();
  if (nameCounter) nameCounter.textContent = "0/32";
  if (reporterInput) reporterInput.value = "";
}

function createAppFromForm(formData) {
  const name = String(formData.get("name") || "").trim();
  const englishName = String(formData.get("englishName") || "").trim();
  const emailPrefix = String(formData.get("emailPrefix") || "").trim();
  const department = String(formData.get("department") || "").trim();
  const reporter = String(formData.get("reporter") || "").trim();
  const space = String(formData.get("space") || "").trim();
  const jobTitle = String(formData.get("jobTitle") || "").trim();
  const jobLevel = String(formData.get("jobLevel") || "").trim();
  const attachment = String(formData.get("attachment") || "").trim();

  if (name.length < 2) {
    setFormError("虾名至少需要 2 个字符。");
    return null;
  }

  if (emailPrefix.length < 2) {
    setFormError("邮箱前缀至少需要 2 个字符。");
    return null;
  }

  if (!department) {
    setFormError("请选择所属部门。");
    return null;
  }

  if (!space) {
    setFormError("请选择所属空间。");
    return null;
  }

  if (jobTitle.length < 2) {
    setFormError("岗位名称至少需要 2 个字符。");
    return null;
  }

  if (!jobLevel) {
    setFormError("请选择岗位定级。");
    return null;
  }

  if (!attachment) {
    setFormError("请提供岗位说明附件链接。");
    return null;
  }

  const now = new Date().toISOString();
  const description = `${jobTitle} - ${jobLevel}`;
  const coreScenario = attachment;

  return {
    id: generateAppId(),
    name,
    englishName,
    emailPrefix,
    description,
    employeeNo: generateEmployeeNo(`${name}${now}`),
    miId: `m${generateEmployeeNo(`${name}${now}`)}`,
    department,
    reporter,
    space,
    jobTitle,
    jobLevel,
    attachment,
    coreScenario,
    containerNeeds: "",
    trainerList: "",
    owner: reporter || "Wei He 何伟",
    role: "训虾员",
    capabilities: {
      bot: false,
      web: false,
      widget: false,
    },
    status: "已启用",
    version: "0.1.0",
    updatedAt: now,
    createdAt: now,
    secret: generateSecret(),
    colorA: state.createColor,
    colorB: state.createColor,
    iconDataUrl: state.uploadDataUrl,
    iconKey: state.createIconKey,
    collaborators: [],
    activity: [
      {
        title: "创建岗位虾",
        description: "已提交岗位虾申请，并生成默认版本与凭证。",
        time: now,
      },
      {
        title: "下一步建议",
        description: "建议继续配置基础信息、能力管理与发布信息。",
        time: now,
      },
    ],
  };
}

function updateAppById(appId, mutator) {
  const index = state.apps.findIndex((app) => app.id === appId);
  if (index === -1) {
    return null;
  }

  const current = state.apps[index];
  const updated = normalizeApp(
    mutator({ ...current, capabilities: { ...current.capabilities } }),
  );
  state.apps[index] = updated;
  saveAndRender();
  return updated;
}

function updateSelectedApp(mutator) {
  return updateAppById(state.selectedId, mutator);
}

function setCapability(capability, enabled) {
  const updated = updateSelectedApp((app) => {
    app.capabilities[capability] = enabled;
    app.updatedAt = new Date().toISOString();
    if (app.status === "已启用") {
      app.status = "待上线";
    }
    appendActivity(
      app,
      enabled ? "开启能力" : "关闭能力",
      `${CAPABILITY_LABELS[capability]}已${enabled ? "开启" : "关闭"}。`,
    );
    return app;
  });

  if (!updated) {
    return;
  }

  toast(
    `${CAPABILITY_LABELS[capability]}已${enabled ? "开启" : "关闭"}。`,
    "配置已保存",
  );
}

function copyText(value, label) {
  const done = () => toast(`${label}已复制到剪贴板。`, "复制成功");
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value).then(done).catch(done);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  done();
}

function handleDetailAction(action, capability = "") {
  const app = getSelectedApp();
  if (!app) {
    return;
  }

  const jobField = getJobFieldConfig(action);
  if (jobField) {
    openJobEditModal(jobField, app);
    return;
  }

  if (action === "toggle-secret") {
    state.secretVisible = !state.secretVisible;
    render();
    return;
  }

  if (action === "refresh-secret") {
    updateSelectedApp((current) => {
      current.secret = generateSecret();
      current.updatedAt = new Date().toISOString();
      appendActivity(current, "刷新 Secret", "已生成新的 App Secret。");
      return current;
    });
    state.secretVisible = true;
    render();
    toast("App Secret 已刷新。", "更新成功");
    return;
  }

  if (action === "add-collaborator") {
    openCollaboratorModal();
    return;
  }

  if (action === "transfer-owner") {
    toast("当前示例账号为训虾员，可继续补充转移弹窗。", "协作者管理");
    return;
  }

  if (action === "remove-collaborator") {
    const collaboratorId = capability;
    updateSelectedApp((current) => {
      current.collaborators = current.collaborators.filter(
        (item) => item.id !== collaboratorId,
      );
      current.updatedAt = new Date().toISOString();
      appendActivity(current, "移除协作者", "已从协作者列表中移除成员。");
      return current;
    });
    toast("协作者已移除。", "协作者管理");
    return;
  }

  if (action === "open-bot") {
    navigateToDetail(app.id, "bot");
    return;
  }

  if (action === "toggle-capability" && capability) {
    setCapability(capability, true);
    if (capability === "bot") {
      navigateToDetail(app.id, "bot");
    } else {
      render();
    }
    return;
  }

  if (action === "delete-bot") {
    setCapability("bot", false);
    navigateToDetail(app.id, "capability");
    return;
  }

  if (action === "open-auth") {
    navigateToDetail(app.id, "auth");
    return;
  }

  if (action === "open-event-callback") {
    state.eventTab = "callback-config";
    navigateToDetail(app.id, "event");
    return;
  }

  if (action === "open-permission") {
    toast("演示页已展示权限管理布局，可继续补充真实开通流程。", "权限管理");
    return;
  }

  if (action === "create-version") {
    updateSelectedApp((current) => {
      const [major, minor, patch] = current.version
        .split(".")
        .map((part) => Number(part) || 0);
      current.version = `${major}.${minor}.${patch + 1}`;
      current.status = "待上线";
      current.updatedAt = new Date().toISOString();
      appendActivity(current, "创建版本", `已创建版本 ${current.version}，等待发布。`);
      return current;
    });
    toast("已创建新的待发布版本。", "版本管理");
    return;
  }

  if (action === "search-logs") {
    toast("当前演示页暂无日志数据。", "日志检索");
    return;
  }

  if (action === "export-analysis") {
    toast("演示页暂未生成导出文件。", "运营分析");
    return;
  }

  if (action === "export-feedback") {
    toast("演示页暂未生成导出文件。", "用户反馈");
    return;
  }

  if (action === "export-dev-quality") {
    toast("演示页暂未生成导出文件。", "开发质量");
    return;
  }

  if (action === "reset-logs") {
    toast("筛选条件已重置为默认展示。", "日志检索");
    render();
    return;
  }

  if (
    action === "create-test-company" ||
    action === "mark-feedback-processing" ||
    action === "mark-feedback-done" ||
    action === "mark-feedback-closed" ||
    action === "add-redirect-url" ||
    action === "batch-edit-redirect" ||
    action === "add-ip-whitelist" ||
    action === "batch-edit-ip" ||
    action === "bulk-permission" ||
    action === "show-api" ||
    action === "close-permission" ||
    action === "configure-range" ||
    action === "collapse-event-intro" ||
    action === "edit-event-mode" ||
    action === "edit-callback-url" ||
    action === "edit-card-callback" ||
    action === "edit-encrypt-key" ||
    action === "edit-verification-token" ||
    action === "collapse-auth-intro" ||
    action === "edit-info" ||
    action === "edit-i18n" ||
    action === "edit-bot-start" ||
    action === "edit-bot-menu" ||
    action === "bot-intro" ||
    action === "placeholder" ||
    action === "noop"
  ) {
    toast("该交互已留出位置，当前为静态演示。", "提示");
  }
}

document.querySelectorAll(".app-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTab = "custom";
    render();
  });
});

if (openCreateButton) {
  openCreateButton.addEventListener("click", openCreateModal);
}
if (exportPondButton) {
  exportPondButton.addEventListener("click", exportVisibleApps);
}
if (openCreateFromBanner) {
  openCreateFromBanner.addEventListener("click", openCreateModal);
}
if (closeCreateModalButton) {
  closeCreateModalButton.addEventListener("click", closeCreateModal);
}
if (cancelCreateButton) {
  cancelCreateButton.addEventListener("click", closeCreateModal);
}
if (prevStepButton) {
  prevStepButton.addEventListener("click", handlePrevStep);
}
if (nextStepButton) {
  nextStepButton.addEventListener("click", handleNextStep);
}
backToListButton.addEventListener("click", () => navigateToList());

createModalLayer.addEventListener("click", (event) => {
  if (event.target.dataset.closeCreate === "true") {
    closeCreateModal();
  }
});

jobEditModalLayer.addEventListener("click", (event) => {
  if (event.target.dataset.closeJobEdit === "true") {
    closeJobEditModal();
  }
});

collaboratorModalLayer.addEventListener("click", (event) => {
  if (event.target.dataset.closeCollaborator === "true") {
    closeCollaboratorModal();
  }
});

spaceManageModalLayer.addEventListener("click", (event) => {
  if (event.target.dataset.closeSpaceManage === "true") {
    closeSpaceManageModal();
  }
});

if (cancelJobEditButton) {
  cancelJobEditButton.addEventListener("click", closeJobEditModal);
}

if (closeCollaboratorModalButton) {
  closeCollaboratorModalButton.addEventListener("click", closeCollaboratorModal);
}

if (closeSpaceManageModalButton) {
  closeSpaceManageModalButton.addEventListener("click", closeSpaceManageModal);
}

if (cancelCollaboratorButton) {
  cancelCollaboratorButton.addEventListener("click", closeCollaboratorModal);
}

if (cancelSpaceManageButton) {
  cancelSpaceManageButton.addEventListener("click", closeSpaceManageModal);
}

jobEditForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const app = getSelectedApp();
  const field = getJobFieldConfig(state.jobEditAction);
  if (!app || !field) {
    closeJobEditModal();
    return;
  }

  const trimmed = jobEditTextarea.value.trim();
  if (trimmed.length < field.minLength) {
    setJobEditError(`${field.label}至少需要 ${field.minLength} 个字符。`);
    return;
  }

  updateSelectedApp((current) => {
    current[field.key] = trimmed;
    current.updatedAt = new Date().toISOString();
    appendActivity(current, `更新${field.label}`, `${field.label}已更新。`);
    return current;
  });

  closeJobEditModal();
  toast(`${field.label}已更新。`, "岗位说明书");
});

collaboratorForm.addEventListener("change", (event) => {
  const roleInput = event.target.closest('input[name="collaboratorRole"]');
  if (!roleInput) {
    return;
  }
  state.collaboratorRole = roleInput.value;
  renderCollaboratorPermissions();
});

collaboratorMembersInput.addEventListener("input", () => {
  collaboratorError.textContent = "";
  collaboratorError.classList.add("is-hidden");
});

collaboratorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const app = getSelectedApp();
  if (!app) {
    closeCollaboratorModal();
    return;
  }

  const rawMembers = collaboratorMembersInput.value.trim();
  if (!rawMembers) {
    setCollaboratorError("请填写协作者姓名或邮箱。");
    return;
  }

  const names = rawMembers
    .split(/[、，,\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (!names.length) {
    setCollaboratorError("请至少添加一个协作者。");
    return;
  }

  const role = state.collaboratorRole;
  const needsApproval = COLLABORATOR_ROLE_META[role].needsApproval;
  const existingNames = new Set(
    [app.owner, ...app.collaborators.map((item) => item.name)].map((item) =>
      String(item).trim(),
    ),
  );
  const additions = names
    .filter((name) => !existingNames.has(name))
    .map((name, index) => ({
      id: `col_${Date.now().toString(36)}_${index}`,
      name,
      role,
      needsApproval,
    }));

  if (!additions.length) {
    setCollaboratorError("输入的成员已存在于协作者列表中。");
    return;
  }

  updateSelectedApp((current) => {
    current.collaborators = [...current.collaborators, ...additions];
    current.updatedAt = new Date().toISOString();
    appendActivity(current, "新增协作者", `已新增 ${additions.length} 位协作者。`);
    return current;
  });

  closeCollaboratorModal();
  toast("协作者已添加。", "协作者管理");
});

spaceManageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearSpaceManageError();
});

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });
}

if (sortButton) {
  sortButton.addEventListener("click", () => {
    state.sortDesc = !state.sortDesc;
    toast(
      state.sortDesc ? "已切换为最近更新优先。" : "已切换为较早更新优先。",
      "排序已切换",
    );
    render();
  });
}

if (pondFilterToolbar) {
  pondFilterToolbar.addEventListener("click", (event) => {
    event.stopPropagation();

    const trigger = event.target.closest("[data-filter-trigger]");
    if (trigger) {
      const filterKey = trigger.dataset.filterTrigger;
      state.openPondFilterKey =
        state.openPondFilterKey === filterKey ? "" : filterKey;
      renderPondFilterToolbar();

      if (state.openPondFilterKey) {
        const input = pondFilterToolbar.querySelector(
          `[data-filter-search-input="${filterKey}"]`,
        );
        if (input) {
          input.focus();
        }
      }
      return;
    }

    const selectAllButton = event.target.closest("[data-filter-select-all]");
    if (selectAllButton) {
      const filterKey = selectAllButton.dataset.filterSelectAll;
      const visibleOptions = getVisiblePondFilterOptions(filterKey);
      const nextSelected = new Set(state.pondFilters[filterKey] || []);
      const allSelected =
        Boolean(visibleOptions.length) &&
        visibleOptions.every((option) => nextSelected.has(option));

      if (allSelected) {
        visibleOptions.forEach((option) => nextSelected.delete(option));
      } else {
        visibleOptions.forEach((option) => nextSelected.add(option));
      }

      state.pondFilters[filterKey] = sortPondFilterValues([...nextSelected]);
      render();
      return;
    }

    const clearButton = event.target.closest("[data-clear-pond-filters]");
    if (clearButton) {
      state.pondFilters = Object.fromEntries(
        POND_FILTER_FIELDS.map((field) => [field.key, []]),
      );
      state.pondFilterSearches = {};
      state.openPondFilterKey = "";
      render();
      return;
    }

    const fieldManageButton = event.target.closest("[data-open-field-manage]");
    if (fieldManageButton) {
      toast("字段管理功能位已预留，当前为静态演示。", "字段管理");
    }
  });

  pondFilterToolbar.addEventListener("input", (event) => {
    const searchField = event.target.closest("[data-filter-search-input]");
    if (!searchField) {
      return;
    }

    const filterKey = searchField.dataset.filterSearchInput;
    state.pondFilterSearches[filterKey] = searchField.value;
    renderPondFilterToolbar();

    const nextInput = pondFilterToolbar.querySelector(
      `[data-filter-search-input="${filterKey}"]`,
    );
    if (nextInput) {
      nextInput.focus();
      nextInput.setSelectionRange(searchField.value.length, searchField.value.length);
    }
  });

  pondFilterToolbar.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-filter-option]");
    if (!checkbox) {
      return;
    }

    const filterKey = checkbox.dataset.filterOption;
    const optionValue = decodeURIComponent(checkbox.dataset.filterValue || "");
    const nextSelected = new Set(state.pondFilters[filterKey] || []);

    if (checkbox.checked) {
      nextSelected.add(optionValue);
    } else {
      nextSelected.delete(optionValue);
    }

    state.pondFilters[filterKey] = sortPondFilterValues([...nextSelected]);
    render();
  });
}

document.addEventListener("click", () => {
  if (!state.openPondFilterKey) {
    return;
  }

  state.openPondFilterKey = "";
  renderPondFilterToolbar();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !state.openPondFilterKey) {
    return;
  }

  state.openPondFilterKey = "";
  renderPondFilterToolbar();
});

appGrid.addEventListener("click", (event) => {
  const agentCardButton = event.target.closest("[data-open-agent-card]");
  if (agentCardButton) {
    openAgentCardModal(agentCardButton.dataset.openAgentCard);
    return;
  }

  const spaceManageButton = event.target.closest("[data-open-space-manage]");
  const spaceManageId = spaceManageButton?.dataset.openSpaceManage;
  if (spaceManageId) {
    openSpaceManageModal(spaceManageId);
    return;
  }

  const button = event.target.closest("[data-open-manage]");
  const appId = button?.dataset.openManage;
  if (!appId) {
    return;
  }
  if (openManageInParentPortal(appId, "baseinfo")) {
    return;
  }
  navigateToDetail(appId, "baseinfo");
});

createAppForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFormError();

  const app = createAppFromForm(new FormData(createAppForm));
  if (!app) {
    return;
  }

  state.apps.unshift(app);
  state.activeTab = "custom";
  state.query = "";
  if (searchInput) {
    searchInput.value = "";
  }
  saveApps();
  closeCreateModal();
  toast(`已创建 ${app.name}。`, "应用创建成功");
  if (openManageInParentPortal(app.id, "baseinfo")) {
    return;
  }
  navigateToDetail(app.id, "baseinfo");
});

appNameInput.addEventListener("input", () => {
  createPreviewIcon();
  updateFieldCounters();
  // 自动翻译英文名
  if (appEnglishNameInput && !appEnglishNameInput.dataset.manual) {
    appEnglishNameInput.value = autoTranslateToEnglish(appNameInput.value.trim());
  }
  // 自动生成邮箱前缀
  if (appEmailPrefixInput && !appEmailPrefixInput.dataset.manual) {
    const prefix = appNameInput.value.trim()
      .replace(/[^\w一-鿿]/g, "")
      .toLowerCase()
      .slice(0, 20);
    appEmailPrefixInput.value = prefix;
  }
});

// 英文名手动编辑标记
if (appEnglishNameInput) {
  appEnglishNameInput.addEventListener("input", () => {
    appEnglishNameInput.dataset.manual = appEnglishNameInput.value ? "1" : "";
  });
}

// 邮箱前缀手动编辑标记
if (appEmailPrefixInput) {
  appEmailPrefixInput.addEventListener("input", () => {
    appEmailPrefixInput.dataset.manual = appEmailPrefixInput.value ? "1" : "";
  });
}

// 部门选择→自动带出汇报上级
if (departmentSelect) {
  departmentSelect.addEventListener("change", () => {
    const dept = departmentSelect.value;
    if (reporterInput) {
      reporterInput.value = DEPARTMENT_REPORTER_MAP[dept] || "";
    }
  });
}

if (colorOptions) {
  colorOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-color]");
    if (!button) {
      return;
    }
    state.createColor = button.dataset.color;
    renderColorOptions();
    createPreviewIcon();
  });
}

if (iconOptions) {
  iconOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-icon-key]");
    if (!button) {
      return;
    }
    state.createIconKey = button.dataset.iconKey;
    renderIconOptions();
    createPreviewIcon();
  });
}

if (appIconInput) {
  appIconInput.addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    if (!file) {
      state.uploadDataUrl = "";
      createPreviewIcon();
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      appIconInput.value = "";
      state.uploadDataUrl = "";
      setFormError("应用图标需小于 2 MB。");
      createPreviewIcon();
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      state.uploadDataUrl = typeof reader.result === "string" ? reader.result : "";
      clearFormError();
      createPreviewIcon();
    };
    reader.readAsDataURL(file);
  });
}

detailSidebar.addEventListener("click", (event) => {
  const toggleButton = event.target.closest("[data-toggle-group]");
  if (toggleButton) {
    if (toggleButton.dataset.toggleGroup === "quality") {
      state.qualityExpanded = !state.qualityExpanded;
      render();
    }
    return;
  }

  const button = event.target.closest("[data-section]");
  if (!button || !state.selectedId) {
    return;
  }
  if (
    ["analysis", "feedback", "development-quality"].includes(
      button.dataset.section,
    )
  ) {
    state.qualityExpanded = true;
  }
  navigateToDetail(state.selectedId, button.dataset.section);
});

detailMain.addEventListener("click", (event) => {
  const devQualityTabButton = event.target.closest("[data-dev-quality-tab]");
  if (devQualityTabButton) {
    state.devQualityTab = devQualityTabButton.dataset.devQualityTab;
    render();
    return;
  }

  const feedbackTabButton = event.target.closest("[data-feedback-tab]");
  if (feedbackTabButton) {
    state.feedbackTab = feedbackTabButton.dataset.feedbackTab;
    render();
    return;
  }

  const analysisTabButton = event.target.closest("[data-analysis-tab]");
  if (analysisTabButton) {
    state.analysisTab = analysisTabButton.dataset.analysisTab;
    render();
    return;
  }

  const logsTabButton = event.target.closest("[data-logs-tab]");
  if (logsTabButton) {
    state.logsTab = logsTabButton.dataset.logsTab;
    render();
    return;
  }

  const eventTabButton = event.target.closest("[data-event-tab]");
  if (eventTabButton) {
    state.eventTab = eventTabButton.dataset.eventTab;
    render();
    return;
  }

  const safeTabButton = event.target.closest("[data-safe-tab]");
  if (safeTabButton) {
    state.safeTab = safeTabButton.dataset.safeTab;
    render();

    const targetId = state.safeTab === "ip" ? "safeIpCard" : "safeRedirectCard";
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    const app = getSelectedApp();
    if (!app) {
      return;
    }

    if (copyButton.dataset.copy === "appId") {
      copyText(app.id, "App ID");
    } else {
      copyText(app.secret, "App Secret");
    }
    return;
  }

  const sectionJump = event.target.closest("[data-section-jump]");
  if (sectionJump && state.selectedId) {
    navigateToDetail(state.selectedId, sectionJump.dataset.sectionJump);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    handleDetailAction(
      actionButton.dataset.action,
      actionButton.dataset.collaboratorId || actionButton.dataset.capability || "",
    );
  }
});

detailMain.addEventListener("input", (event) => {
  const input = event.target.closest("[data-auth-search]");
  if (!input) {
    return;
  }
  state.authQuery = input.value;
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeJobEditModal();
    closeCreateModal();
  }
});

window.addEventListener("hashchange", applyRouteFromHash);
window.addEventListener("resize", scheduleViewportOverflowSync);

state.apps = loadApps();
saveApps();
renderCreateSelectors();
createPreviewIcon();
updateFieldCounters();

if (!window.location.hash) {
  history.replaceState(null, "", "#app");
}
applyRouteFromHash();
