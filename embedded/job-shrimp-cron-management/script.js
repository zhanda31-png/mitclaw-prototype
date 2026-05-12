const isExternalNavMode =
  new URLSearchParams(window.location.search).get("externalNav") === "1";

const NAV_ICONS = {
  credential:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.3" y="2.7" width="11.4" height="10.6" rx="1.8" stroke="currentColor" stroke-width="1.4"/><path d="M5 6.1h6M5 9h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  doc:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 2.6h5.2l2.8 2.8v8H4V2.6Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9.2 2.6v2.8H12M5.5 7.2h5M5.5 9.5h5M5.5 11.8h3.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  users:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="5.5" cy="5.4" r="1.8" stroke="currentColor" stroke-width="1.4"/><circle cx="10.8" cy="6" r="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M2.8 12a2.8 2.8 0 0 1 5.4 0M8.7 12a2.3 2.3 0 0 1 4.5 0" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  capability:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.2" y="2.4" width="4.4" height="4.4" rx="1.2" stroke="currentColor" stroke-width="1.4"/><rect x="9.4" y="2.4" width="4.4" height="4.4" rx="1.2" stroke="currentColor" stroke-width="1.4"/><rect x="2.2" y="9.2" width="4.4" height="4.4" rx="1.2" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 11.4h2.2M11.6 10.3v2.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  cron:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.2" stroke="currentColor" stroke-width="1.4"/><path d="M8 5.1v3.2l2.1 1.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bot:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.6" y="4.6" width="10.8" height="7" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M8 2.6v2M5.8 8h.01M10.2 8h.01" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  strategy:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 4.2h9.6M3.2 8h9.6M3.2 11.8h6.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="11.7" cy="11.8" r="1.1" fill="currentColor"/></svg>',
  knowledge:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 3.1h4.6c1 0 1.9.8 1.9 1.9v7.9H5.8A1.8 1.8 0 0 0 4 14.7V3.1Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 4v8.9H7.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  shield:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2.3 12.2 3.9v3.3c0 2.6-1.6 4.3-4.2 6-2.6-1.7-4.2-3.4-4.2-6V3.9L8 2.3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  publish:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 11.8V3.4M5 6.4l3-3 3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12.8h10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  log:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="2.8" width="10" height="10.4" rx="1.8" stroke="currentColor" stroke-width="1.4"/><path d="M5.5 6.1h5M5.5 8.5h5M5.5 10.9h3.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  chart:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 12.8h10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M5 11V7.8M8 11V5.6M11 11V8.9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  callback:
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5.3 4.3H12v6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="m6.2 10.7-2.3-2.3 2.3-2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const APPS = {
  cli_hwshrimp_2026: {
    id: "cli_hwshrimp_2026",
    name: "训虾员",
    status: "试运行",
    subtitle: "岗位训练与运营协作",
    version: "v0.9.4",
    enabledCount: 6,
    collaborators: 4,
  },
};

const CRON_TASKS = [
  {
    id: "report-daily",
    name: "训练日报汇总",
    description: "每天工作日早上 9 点汇总前一日训练完成情况和失败原因。",
    type: "日报汇总",
    enabled: true,
    registerStatus: "success",
    cron: "0 9 * * 1-5",
    scheduleLabel: "工作日 09:00",
    timezone: "Asia/Shanghai",
    nextRun: "2026-05-12 09:00",
    lastRunAt: "今天 09:00",
    lastRunResult: "success",
    retryPolicy: "失败后 10 分钟重试 2 次",
    registerSteps: [
      { title: "参数校验", status: "success", detail: "任务名称、调度规则和目标群组校验通过。" },
      { title: "生成注册请求", status: "success", detail: "已生成调度请求和执行参数快照。" },
      { title: "提交调度系统", status: "success", detail: "已返回 jobshrimp-train-report-0900。" },
      { title: "结果回写", status: "success", detail: "列表状态已更新为注册成功。" },
    ],
    runs: [
      { time: "今天 09:00", result: "success", duration: "11s", summary: "已推送日报给 3 位训虾员" },
      { time: "昨天 09:00", result: "success", duration: "10s", summary: "日报生成并写入日报群" },
      { time: "前天 09:00", result: "failed", duration: "5s", summary: "知识库连接超时，已自动重试" },
    ],
  },
  {
    id: "knowledge-sync",
    name: "知识库增量同步",
    description: "每 30 分钟扫描新增资料并同步训练索引。",
    type: "同步任务",
    enabled: true,
    registerStatus: "failed",
    cron: "*/30 * * * *",
    scheduleLabel: "每 30 分钟",
    timezone: "Asia/Shanghai",
    nextRun: "2026-05-08 12:00",
    lastRunAt: "今天 11:30",
    lastRunResult: "failed",
    retryPolicy: "失败后 5 分钟重试 2 次",
    registerSteps: [
      { title: "参数校验", status: "success", detail: "基础参数通过。" },
      { title: "生成注册请求", status: "success", detail: "调度参数已生成。" },
      { title: "提交调度系统", status: "pending", detail: "调度中心返回权限不足，需要补齐知识库写权限。" },
      { title: "结果回写", status: "pending", detail: "等待重新注册后更新。" },
    ],
    runs: [
      { time: "今天 11:30", result: "failed", duration: "7s", summary: "资料库写权限不足" },
      { time: "今天 11:00", result: "failed", duration: "6s", summary: "调度注册未生效，任务未执行" },
      { time: "今天 10:30", result: "success", duration: "9s", summary: "已同步 12 条增量资料" },
    ],
  },
  {
    id: "weekly-inspection",
    name: "每周规则巡检",
    description: "每周一上午 10 点检查策略配置和容器配额，有异常提醒协作者。",
    type: "巡检任务",
    enabled: false,
    registerStatus: "waiting",
    cron: "0 10 * * 1",
    scheduleLabel: "每周一 10:00",
    timezone: "Asia/Shanghai",
    nextRun: "2026-05-19 10:00",
    lastRunAt: "本周一 10:00",
    lastRunResult: "success",
    retryPolicy: "不自动重试",
    registerSteps: [
      { title: "参数校验", status: "pending", detail: "当前为草稿，待确认巡检对象列表。" },
      { title: "生成注册请求", status: "pending", detail: "未生成。" },
      { title: "提交调度系统", status: "pending", detail: "未提交。" },
      { title: "结果回写", status: "pending", detail: "未回写。" },
    ],
    runs: [
      { time: "本周一 10:00", result: "success", duration: "14s", summary: "未发现异常项" },
      { time: "上周一 10:00", result: "success", duration: "13s", summary: "容器配额正常" },
    ],
  },
  {
    id: "failed-recovery",
    name: "训练失败补偿",
    description: "每天晚上 10:30 补跑白天失败的训练任务。",
    type: "补偿任务",
    enabled: true,
    registerStatus: "success",
    cron: "30 22 * * *",
    scheduleLabel: "每天 22:30",
    timezone: "Asia/Shanghai",
    nextRun: "2026-05-08 22:30",
    lastRunAt: "昨天 22:30",
    lastRunResult: "success",
    retryPolicy: "失败后 30 分钟重试 1 次",
    registerSteps: [
      { title: "参数校验", status: "success", detail: "补偿范围和重试策略已确认。" },
      { title: "生成注册请求", status: "success", detail: "已生成补偿任务请求。" },
      { title: "提交调度系统", status: "success", detail: "调度任务已生效。" },
      { title: "结果回写", status: "success", detail: "列表状态已同步。" },
    ],
    runs: [
      { time: "昨天 22:30", result: "success", duration: "17s", summary: "补跑 4 条失败任务" },
      { time: "前天 22:30", result: "success", duration: "15s", summary: "补跑 2 条失败任务" },
    ],
  },
];

const detailMain = document.getElementById("detailMain");

const state = {
  selectedAppId: "cli_hwshrimp_2026",
  detailSection: "cron-management",
  selectedTaskId: CRON_TASKS[0].id,
  createMode: false,
  createStage: "prompt",
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTaskById(taskId) {
  return CRON_TASKS.find((item) => item.id === taskId) || CRON_TASKS[0];
}

function getCurrentApp() {
  return APPS[state.selectedAppId] || APPS.cli_hwshrimp_2026;
}

function getRouteHash(appId, section) {
  return `#app/${appId}/${section}`;
}

function parseHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const [path] = hash.split("?");
  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "app" && segments[1]) {
    state.selectedAppId = segments[1];
  }

  if (segments[2]) {
    state.detailSection = segments[2];
  }
}

function notifyOfflineRouteChange(appId, section) {
  if (window.parent === window || !appId) {
    return;
  }

  try {
    window.parent.postMessage(
      {
        type: "job-shrimp-offline-route-change",
        payload: {
          appId,
          section,
        },
      },
      "*",
    );
  } catch {
    // no-op
  }
}

function navigateToDetail(appId, section, replace = false) {
  const hash = getRouteHash(appId, section);
  if (replace) {
    history.replaceState(null, "", hash);
  } else {
    window.location.hash = hash;
  }

  if (document.documentElement.hasAttribute("data-offline-embedded-page")) {
    notifyOfflineRouteChange(appId, section);
  }
}

function handleOfflineNavigateMessage(event) {
  const message = event?.data;
  if (!message || message.type !== "job-shrimp-offline-navigate") {
    return;
  }

  const appId = String(message.payload?.appId || "").trim();
  const section = String(message.payload?.section || "cron-management").trim() || "cron-management";
  if (!appId) {
    return;
  }

  state.selectedAppId = appId;
  state.detailSection = section;
  render();
}

function getRegisterBadge(status) {
  if (status === "success") {
    return '<span class="badge badge-register-ok">注册成功</span>';
  }
  if (status === "failed") {
    return '<span class="badge badge-register-fail">注册失败</span>';
  }
  return '<span class="badge badge-register-wait">待注册</span>';
}

function getEnabledBadge(enabled) {
  return enabled
    ? '<span class="badge badge-running">运行中</span>'
    : '<span class="badge badge-stopped">已停用</span>';
}

function renderMetrics() {
  const runningCount = CRON_TASKS.filter((item) => item.enabled).length;
  const failedCount = CRON_TASKS.filter((item) => item.registerStatus === "failed").length;
  return `
    <section class="metrics">
      <article class="metric-card">
        <div class="label">任务总数</div>
        <div class="value">${CRON_TASKS.length}</div>
        <div class="tip">当前岗位虾下已登记的 cron 任务</div>
      </article>
      <article class="metric-card">
        <div class="label">运行中</div>
        <div class="value">${runningCount}</div>
        <div class="tip">已启用的任务可直接参与调度执行</div>
      </article>
      <article class="metric-card">
        <div class="label">注册失败</div>
        <div class="value">${failedCount}</div>
        <div class="tip">建议优先处理卡在注册阶段的任务</div>
      </article>
      <article class="metric-card">
        <div class="label">24h 成功率</div>
        <div class="value">91%</div>
        <div class="tip">按最近执行结果汇总，用于快速巡检</div>
      </article>
    </section>
  `;
}

function renderTable() {
  const rows = CRON_TASKS.map((task) => {
    const active = task.id === state.selectedTaskId ? " is-active" : "";
    return `
      <tr class="cron-row${active}" data-task-id="${task.id}">
        <td>
          <div class="task-name">${escapeHtml(task.name)}</div>
          <div class="task-sub">${escapeHtml(task.description)}</div>
        </td>
        <td>${escapeHtml(task.type)}</td>
        <td>${getEnabledBadge(task.enabled)}</td>
        <td>
          <div>${escapeHtml(task.scheduleLabel)}</div>
          <div class="task-sub"><code>${escapeHtml(task.cron)}</code></div>
        </td>
        <td>${getRegisterBadge(task.registerStatus)}</td>
        <td>
          <div>${escapeHtml(task.lastRunAt)}</div>
          <div class="task-sub ${task.lastRunResult === "success" ? "status-good" : "status-bad"}">${task.lastRunResult === "success" ? "成功" : "失败"}</div>
        </td>
        <td>
          <div class="row-actions">
            <button class="mini-button" type="button" data-action="edit-task" data-task-id="${task.id}">编辑</button>
            <button class="mini-button" type="button" data-action="toggle-task" data-task-id="${task.id}">${task.enabled ? "停用" : "启用"}</button>
            <button class="mini-button" type="button" data-action="reregister-task" data-task-id="${task.id}">重注册</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  return `
    <article class="info-card">
      <div class="info-card-head">
        <div>
          <h2>Cron 列表</h2>
          <p>先看现有任务，再决定编辑、启停或重新注册。</p>
        </div>
        <button class="action-button" type="button" data-action="refresh">刷新状态</button>
      </div>
      <div class="filters">
        <input class="field" type="text" value="日报" />
        <select class="select"><option>全部状态</option><option selected>运行中</option><option>已停用</option></select>
        <select class="select"><option>全部注册状态</option><option selected>注册成功</option><option>待注册</option><option>注册失败</option></select>
        <select class="select"><option>全部任务类型</option><option selected>日报汇总</option><option>同步任务</option><option>巡检任务</option></select>
      </div>
      <table class="cron-table">
        <thead>
          <tr>
            <th style="width: 28%">任务名称</th>
            <th style="width: 12%">类型</th>
            <th style="width: 12%">任务状态</th>
            <th style="width: 18%">调度规则</th>
            <th style="width: 12%">注册状态</th>
            <th style="width: 12%">最近执行</th>
            <th style="width: 18%">操作</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </article>
  `;
}

function renderTaskDetail() {
  const task = getTaskById(state.selectedTaskId);
  const registerSteps = task.registerSteps
    .map((step, index) => {
      const dotClass = step.status === "success" ? " success" : step.status === "pending" ? " pending" : "";
      return `
        <div class="timeline-item">
          <div class="timeline-dot${dotClass}">${index + 1}</div>
          <div>
            <strong>${escapeHtml(step.title)}</strong>
            <span>${escapeHtml(step.detail)}</span>
          </div>
        </div>
      `;
    })
    .join("");

  const runRows = task.runs
    .map(
      (run) => `
        <tr>
          <td>${escapeHtml(run.time)}</td>
          <td class="${run.result === "success" ? "status-good" : "status-bad"}">${run.result === "success" ? "成功" : "失败"}</td>
          <td>${escapeHtml(run.duration)}</td>
          <td>${escapeHtml(run.summary)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <div class="side-panel">
      <article class="info-card">
        <div class="side-panel" style="padding: 16px 18px 18px;">
          <div class="drawer-title">
            <div>
              <h2>${escapeHtml(task.name)}</h2>
              <p>当前选中任务详情。MVP 里在同一侧栏完成查看、编辑和注册过程确认。</p>
            </div>
            <span class="pill">${task.registerStatus === "success" ? "已注册" : task.registerStatus === "failed" ? "待修复" : "草稿"}</span>
          </div>

          <section class="section-block">
            <h3>基础信息</h3>
            <div class="kv-grid">
              <div class="k">任务类型</div><div>${escapeHtml(task.type)}</div>
              <div class="k">任务说明</div><div>${escapeHtml(task.description)}</div>
              <div class="k">下次执行</div><div>${escapeHtml(task.nextRun)}</div>
              <div class="k">重试策略</div><div>${escapeHtml(task.retryPolicy)}</div>
            </div>
          </section>

          <section class="section-block">
            <h3>调度规则</h3>
            <div class="kv-grid">
              <div class="k">可读规则</div><div>${escapeHtml(task.scheduleLabel)}</div>
              <div class="k">Cron</div><div><code>${escapeHtml(task.cron)}</code></div>
              <div class="k">时区</div><div>${escapeHtml(task.timezone)}</div>
              <div class="k">任务状态</div><div>${task.enabled ? '<span class="status-good">运行中</span>' : '<span class="status-bad">已停用</span>'}</div>
            </div>
          </section>

          <section class="section-block">
            <h3>注册过程</h3>
            <div class="timeline">${registerSteps}</div>
          </section>

          <section class="section-block">
            <h3>最近执行</h3>
            <table class="preview-table">
              <thead>
                <tr><th>执行时间</th><th>结果</th><th>耗时</th><th>摘要</th></tr>
              </thead>
              <tbody>${runRows}</tbody>
            </table>
          </section>
        </div>
      </article>
    </div>
  `;
}

function renderCreateFlow() {
  const stagePromptHidden = state.createStage !== "prompt" ? ' class="is-hidden"' : "";
  const stageConfirmHidden = state.createStage !== "confirm" ? ' class="is-hidden"' : "";

  return `
    <div class="side-panel">
      <article class="info-card">
        <div class="side-panel" style="padding: 16px 18px 18px;">
          <div class="drawer-title">
            <div>
              <h2>新建 Cron</h2>
              <p>默认用自然语言创建任务，再由系统解析成结构化配置。Cron 表达式只作为高级信息展示，不作为第一输入项。</p>
            </div>
            <span class="pill">自然语言创建</span>
          </div>

          <div${stagePromptHidden}>
            <section class="hero-card">
              <strong>先告诉系统你希望它什么时候做什么</strong>
              <p>建议一句话带上时间、动作和结果去向。系统会自动拆解成任务内容、调度规则、执行对象和运行保障。</p>
              <div class="prompt-box">
                <textarea>每天工作日早上 9 点生成训练日报，汇总前一天完成情况和失败原因，并发给训虾员日报群。</textarea>
                <div class="prompt-footer">
                  <div class="hint">提示：一句话至少带上“做什么 + 什么时候 + 结果发给谁”</div>
                  <button class="action-button-primary" type="button" data-action="parse-intent">解析任务</button>
                </div>
              </div>
            </section>

            <section class="section-block">
              <h3>示例输入</h3>
              <div class="chip-row">
                <div class="chip">每周一上午 10 点巡检策略配置，有异常就提醒协作者</div>
                <div class="chip">每 30 分钟同步一次知识库增量内容，失败后自动重试 2 次</div>
                <div class="chip">每晚 10 点补跑当天失败的训练任务，并把结果回写到日报</div>
              </div>
            </section>
          </div>

          <div${stageConfirmHidden}>
            <section class="section-block">
              <h3>解析结果</h3>
              <div class="cards">
                <div class="mini-card"><div class="label">任务名称</div><div class="value">训练日报汇总</div></div>
                <div class="mini-card"><div class="label">任务类型</div><div class="value">日报汇总</div></div>
                <div class="mini-card"><div class="label">调度规则</div><div class="value">工作日 09:00 执行</div></div>
                <div class="mini-card"><div class="label">高级 Cron</div><div class="value"><code>0 9 * * 1-5</code></div></div>
              </div>
            </section>

            <section class="section-block">
              <h3>用户确认区</h3>
              <div class="stack-list">
                <div class="stack-item">
                  <div><strong>任务内容</strong><span>生成前一天训练日报，包含完成情况、失败原因和补偿建议。</span></div>
                  <span class="badge badge-register-ok">已识别</span>
                </div>
                <div class="stack-item">
                  <div><strong>执行对象</strong><span>训练日报生成器 + 训练结果数据源 + 日报模板。</span></div>
                  <span class="badge badge-register-ok">已识别</span>
                </div>
                <div class="stack-item">
                  <div><strong>结果去向</strong><span>训虾员日报群</span></div>
                  <span class="badge badge-running">已补齐</span>
                </div>
                <div class="stack-item">
                  <div><strong>失败处理</strong><span>建议增加“失败后 10 分钟重试 2 次，并通知协作者”。</span></div>
                  <span class="badge badge-register-wait">待确认</span>
                </div>
              </div>
            </section>

            <section class="section-block">
              <h3>有效性校验</h3>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-dot success">1</div>
                  <div><strong>意图校验</strong><span>已识别出“做什么、什么时候、结果发给谁”三项核心信息。</span></div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot success">2</div>
                  <div><strong>调度校验</strong><span>工作日 09:00 合法，时区使用 Asia/Shanghai，频率在允许范围内。</span></div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot pending">3</div>
                  <div><strong>执行校验</strong><span>待确认训练结果数据源权限和目标群组权限，确认后可进行模拟执行。</span></div>
                </div>
              </div>
            </section>

            <section class="section-block">
              <h3>未来 5 次执行时间</h3>
              <table class="preview-table">
                <thead><tr><th>序号</th><th>预计触发时间</th><th>备注</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>2026-05-12 09:00</td><td>周一</td></tr>
                  <tr><td>2</td><td>2026-05-13 09:00</td><td>周二</td></tr>
                  <tr><td>3</td><td>2026-05-14 09:00</td><td>周三</td></tr>
                  <tr><td>4</td><td>2026-05-15 09:00</td><td>周四</td></tr>
                  <tr><td>5</td><td>2026-05-16 09:00</td><td>周五</td></tr>
                </tbody>
              </table>
            </section>

            <section class="section-block">
              <h3>模拟执行结果</h3>
              <div class="stack-list">
                <div class="stack-item">
                  <div><strong>生成内容预览</strong><span>会输出日报摘要、失败任务数、异常分布和补偿建议。</span></div>
                  <span class="badge badge-running">可预览</span>
                </div>
                <div class="stack-item">
                  <div><strong>发送目标</strong><span>训虾员日报群，当前已识别群组存在。</span></div>
                  <span class="badge badge-running">已通过</span>
                </div>
                <div class="stack-item">
                  <div><strong>数据源检查</strong><span>训练结果数据源可读，但失败任务补偿明细权限待确认。</span></div>
                  <span class="badge badge-register-wait">待补齐</span>
                </div>
              </div>
            </section>
          </div>

          <div class="footer-actions">
            ${
              state.createStage === "prompt"
                ? '<button class="action-button" type="button" data-action="cancel-create">取消</button>'
                : '<button class="action-button" type="button" data-action="back-prompt">返回修改描述</button>'
            }
            <button class="action-button" type="button" data-action="save-draft">保存草稿</button>
            <button class="action-button-primary" type="button" data-action="${state.createStage === "prompt" ? "parse-intent" : "save-register"}">${state.createStage === "prompt" ? "解析任务" : "保存并注册"}</button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderMain() {
  const app = getCurrentApp();
  const sideContent = state.createMode ? renderCreateFlow() : renderTaskDetail();
  detailMain.innerHTML = `
    <div class="cron-shell">
      <section class="page-hero-card">
        <div class="page-hero-main">
          <div class="app-icon" aria-hidden="true">训</div>
          <div class="page-hero-text">
            <strong>${escapeHtml(app.name)} · Cron管理</strong>
            <p>管理当前岗位虾的定时任务、注册状态和最近执行结果。去掉页面内部配置导航后，内容区只保留任务管理本身。</p>
          </div>
        </div>
        <div class="page-hero-meta">
          <div class="page-hero-metric">
            <span>当前版本</span>
            <strong>${escapeHtml(app.version)}</strong>
          </div>
          <div class="page-hero-metric">
            <span>已启能力</span>
            <strong>${escapeHtml(String(app.enabledCount))} 项</strong>
          </div>
          <div class="page-hero-metric">
            <span>协作者</span>
            <strong>${escapeHtml(String(app.collaborators))} 人</strong>
          </div>
        </div>
      </section>

      <div class="page-title-row">
        <div>
          <h1>Cron管理</h1>
          <p>管理当前岗位虾的定时任务、注册状态和最近执行结果。新建任务默认走自然语言创建，再进入结构化确认和有效性校验。</p>
        </div>
        <div class="page-actions">
          <button class="action-button" type="button" data-action="view-register-log">查看注册记录</button>
          <button class="action-button-primary" type="button" data-action="open-create">新建 Cron</button>
        </div>
      </div>

      <div class="tip-strip">
        <span class="tip-pill">1. 新建任务并输入自然语言描述</span>
        <span class="tip-pill">2. 系统解析成结构化任务草稿</span>
        <span class="tip-pill">3. 预览未来执行时间和模拟结果</span>
        <span class="tip-pill">4. 保存并注册到调度系统</span>
      </div>

      ${renderMetrics()}

      <div class="cron-grid">
        ${renderTable()}
        ${sideContent}
      </div>
    </div>
  `;
}

function render() {
  renderMain();
}

detailMain.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const action = actionButton.dataset.action;
    if (action === "open-create") {
      state.createMode = true;
      state.createStage = "prompt";
      renderMain();
      return;
    }
    if (action === "cancel-create") {
      state.createMode = false;
      renderMain();
      return;
    }
    if (action === "parse-intent") {
      state.createStage = "confirm";
      renderMain();
      return;
    }
    if (action === "back-prompt") {
      state.createStage = "prompt";
      renderMain();
      return;
    }
    if (action === "edit-task") {
      state.selectedTaskId = actionButton.dataset.taskId || state.selectedTaskId;
      state.createMode = true;
      state.createStage = "confirm";
      renderMain();
      return;
    }
    if (action === "toggle-task" || action === "reregister-task" || action === "refresh" || action === "view-register-log" || action === "save-draft" || action === "save-register") {
      return;
    }
  }

  const row = event.target.closest("[data-task-id]");
  if (row && row.dataset.taskId) {
    state.selectedTaskId = row.dataset.taskId;
    state.createMode = false;
    renderMain();
  }
});

window.addEventListener("message", handleOfflineNavigateMessage);
window.addEventListener("hashchange", () => {
  parseHash();
  render();
});

if (isExternalNavMode) {
  document.documentElement.classList.add("external-nav-mode");
}

parseHash();
if (!window.location.hash) {
  navigateToDetail(state.selectedAppId, "cron-management", true);
}
render();
