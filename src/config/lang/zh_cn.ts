export default {
  menu: {
    home: '首页',
    login: '登录',
    project: '项目配置',
    projectDetail: '项目详情',
    vuln: '应用漏洞',
    vulnList: '应用漏洞列表',
    vulnDetail: '应用漏洞详情',
    sca: '组件管理',
    scaList: '组件管理列表',
    scaDetail: '组件管理详情',
    setting: '系统配置',
    agentManage: '引擎管理',
    strategyManage: '策略管理',
    hookRule: '自定义规则',
    upgradeOnline: '系统升级',
    sysInfo: '系统信息',
    changePassword: '密码修改',
    logManage: '操作日志',
    user: '角色管理',
    talent: '租户管理',
    department: '组织管理',
    taintPool: '搜索',
    search: '污点搜索',
    poolDetail: '污点详情',
    projectManage: '项目管理',
  },
  views: {
    login: {
      title: '用户登录',
      subTitle: '欢迎使用IAST系统',
      user: '账号',
      usernamePlaceholder: '请输入账号，默认admin',
      password: '密码',
      passwordPlaceholder: '请输入密码，默认admin',
      captcha: '验证码',
      captchaPlaceholder: '请输入验证码',
    },
    search: {
      defPolicy: '内置策略',
      myPolicy: '我的策略',
    },
    vulnList: {
      filter: '过滤器',
      language: '语言',
      level: '等级',
      type: '类型',
      reset: '重置',
      resetAll: '重置全部',
      project_name: '项目',
      orderOptions: {
        type: '漏洞类型',
        level: '漏洞等级',
        url: 'url',
        latest_time: '最新上报时间',
        first_time: '首次上报时间',
      },
    },
    vulnDetail: {
      source_value: '初始污点',
      target_value: '传播后污点',
      baseInfo: '基本信息',
      vulnDesc: '漏洞描述',
      recheck: '验证',
      export: '导出',
      delete: '删除',
      httpRequest: 'HTTP请求',
      codeDemo: '漏洞代码示例',
      graphy: '污点流图',
      suggest: '修复建议',
      appInfo: '应用信息',
      devEnv: '运行时环境',
      path: '环境变量',
      url: 'url',
      first_time: '首次出现',
      serverIp: '服务器 IP',
      clientIp: '客户端 IP',
      language: '语言',
      port: '端口',
      projectName: '项目名称',
      level: '危害等级',
      counts: '出现次数',
      type: '类型',
      file: '文件',
      num: '行号',
      caller: '调用方法',
      fileAndNum: '文件及行号',
      wuDianZhi: '污点值',
      route: '路径',
      middleware: '中间件',
      command: '启动命令',
      other: '其他',
      state: '状态',
      taintValue: '攻击向量',
      taintParamName: '攻击参数',
      agent: '探针',
      version: '项目版本',
    },
    scaList: {
      filter: '过滤器',
      language: '语言',
      level: '等级',
      type: '类型',
      reset: '重置',
      resetAll: '重置全部',
      project_name: '项目',
      orderOptions: {
        project_name: '项目名称',
        level: '风险等级',
        package_name: '包名',
        version: '版本',
        language: '语言',
        vul_count: '风险数量',
      },
      tableHeaders: {
        name: '组件名称',
        version: '组件版本',
        application: '所属应用',
        language: 'language',
        level: '安全等级',
        count: '漏洞数量',
        time: '发现时间',
      },
    },
    scaDetail: {
      agent: '探针',
      version_now: '项目版本',
      version: '组件版本',
      level: '风险等级',
      project_name: '项目名称',
      vul_count: '漏洞数量',
      unit: '个',
      signature_value: '组件哈希',
      vulList: '漏洞列表',
      cveNumber: 'CVE 编号',
      cweNumber: 'CWE 编号',
      vulName: '漏洞名称',
      vulLevel: '漏洞等级',
      safeVersion: '安全版本',
      operate: '操作',
      detail: '详情',
      vulDetail: {
        title: '漏洞详情',
        num: '漏洞编号',
        name: '漏洞名称',
        desc: '漏洞概述',
        detail: '漏洞细节',
      },
    },
    changePassword: {
      username: '用户名',
      oldPassword: '旧密码',
      newPassword: '新密码',
      confirmNewPassword: '确认新密码',
      submit: '确认',
    },
    agentManage: {
      address: '服务器地址',
      payload: '服务器负载',
      status: '运行状态',
      manage: '管理',
      owner: '负责人',
      timestapm: '时间',
      projectName: '项目名称',
      healthy: '健康'
    },
    strategyManage: {
      name: '策略名称',
      detail: '策略详情',
      status: '启用状态',
      operate: '操作',
    },
    upgradeOnline: {
      online: '在线升级',
      onlineDesc:
        '在线升级需要连接公网，访问动态IAST的远程升级服务器，请确保当前机器可访问公网。',
      address: '升级服务器地址',
      onlineSubmit: '立即升级',
      offline: '离线升级',
      offlineDesc:
        '请联系火线平台售后支持，获取最新的离线安装包，然后上传离线安装包进行升级',
      select: '选择离线安装包',
      offlineSubmit: '上传并升级',
    },
    sysInfo: {
      infoTitle: '授权信息',
      infolicense: '',
    },
    projectManage: {
      title: '项目列表',
      name: '项目名称',
      vul: '漏洞',
      agent: 'Agent数量',
      owner: '负责人',
      time: '最新时间',
      manage: '管理',
    },
    projectEdit: {
      title: '基本设置',
      name: '项目名称',
      namePlaceholder: '请输入项目名称',
      mode: '扫描模式',
      mode1: '插桩模式',
      mode2: '流量模式',
      agent: '选择Agent',
      agentPlaceholder: '请选择Agent',
      scan: '扫描策略',
      scanPlaceholder: '请选择扫描策略',
      scanAdd: '新增策略模板',
      added: '已添加',
      submit: '保存',
      version_name: '版本号',
      versionNamePlaceholder: '请输入版本号',
      description: '版本描述',
      descriptionPlaceholder: '请输入版本描述',
    },
    projectDetail: {
      mode: '扫描模式',
      latest_time: '最新时间',
      projectDesc: '项目概况',
      projectVul: '项目漏洞',
      projectComponent: '项目组件',
      vulNum: '漏洞数量',
      type: '类型分布',
      owner: '负责人',
      version: '版本',
      add_version: '新增版本',
      version_dialog: '版本管理',
      version_name: '版本名称',
      description: '版本描述',
      handle: '操作',
      current_version: '当前版本',
      versionCurrent: '设为当前版本',
      editVersion: '修改',
      enterVersion: '确定',
      dialogEnterVersion: '关 闭',
      cancelVersion: '取消',
      deleteVersion: '删除',
      hasEdit: '有版本处于编辑状态',
      hasSame: '存在相同版本名称',
      warning: '提示',
      warningInfo: '此操作将永久删除该版本, 是否继续?',
      setting: '设置',
      export: '报告导出',
      recheck: '漏洞验证'
    },
    userList: {
      keywordPlaceholder: '请输入名称关键字',
      addUser: '新增用户',
      editUser: '修改用户信息',
      userID: '用户ID',
      name: '用户名称',
      namePlaceholder: '请输入用户名称',
      email: '用户邮箱',
      emailPlaceholder: '请输入用户邮箱',
      role: '用户级别',
      department: '所属部门',
      departmentPlaceholder: '请选择所属部门',
      phone: '联系电话',
      phonePlaceholder: '请输入联系电话',
      operate: '操作',
      password: '密码',
      passwordPlaceholder: '请输入密码',
      rePass: '确认密码',
      rePassPlaceholder: '请再次输入密码',
      submit: '确认',
      cancel: '取消',
      isActive: '状态',
      dateJoined: '创建时间',
      lastLogin: '登陆时间',
      reset: '重置密码',
    },
    talent: {
      title: {
        add: '新增租户',
        modify: '修改租户信息',
        placeholder: '请输入租户名称进行搜索，例如：火线白帽社区',
      },
      table: {
        name: '租户名称',
        enable: '启用状态',
        create: '创建时间',
        update: '更新时间',
        modifyBy: '操作人员',
        operate: '操作',
      },
      add: {
        email: '邮箱地址',
        emailPlaceholder: '请输入企业邮箱，注意：必须使用企业邮箱',
        enable: '启用状态',
        enablePlaceholder: '租户是否启用',
        placeholder: '请输入租户名称，注意：租户名称不能重复',
        submit: '确认',
        cancel: '取消',
      },
    },
  },
}
