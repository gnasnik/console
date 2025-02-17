/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

module.exports = {
  // 工作区
  'Please select workspace': '请选择工作区',
  'workspaces found': '共找到 {count} 个工作区',
  WS_STORAGE_QUOTA_DESC: '可以对工作区下的存储资源总量进行限制。',
  ROLE_WORKSPACES_MANAGER: '管理 KubeSphere 平台上的所有工作区。',
  ROLE_PLATFORM_REGULAR: '被邀请加入工作区之前无法访问任何资源。',
  ROLE_PLATFORM_SELF_PROVISIONER: '创建工作区并成为所创建的工作区的管理员。',
  PERMISSION_WORKSPACES_VIEW: '工作区查看',
  PERMISSION_WORKSPACES_MANAGEMENT: '工作区管理',
  PERMISSION_WORKSPACES_MANAGEMENT_DESC: '创建、编辑和删除工作区。',
  PERMISSION_WORKSPACES_CREATE: '工作区创建',
  PERMISSION_WORKSPACES_CREATE_DESC: '创建工作区并成为所创建的工作区的管理员。',
  WORKSPACE_PL: '工作区',
  WORKSPACE_DESC:
    '工作区是一个组织您的业务和 DevOps 业务、管理资源访问权限以及在团队内部共享资源等的逻辑单元，可以作为团队工作的独立工作空间。',
  CREATE_WORKSPACE: '创建工作区',
  WORKSPACE_NAME_EMPTY_DESC: '请输入工作区名称。',
  WORKSPACE_CREATE_DESC: '设置工作区的基本信息。',
  WORKSPACE_NAME_EXISTS_DESC: '工作区名称已存在。',
  INVALID_WORKSPACE_NAME: '工作区名称无效。',
  SELECT_CLUSTERS_DESC: '选择工作区需要使用的集群。',
  NO_CLUSTER_AVAILABLE_DESC:
    '未发现可用的集群。请在工作区创建完成后，联系平台管理员或集群管理员将一个集群授权给该工作区。',
  WORKSPACE_NO_CLUSTER_TIP: '请联系平台管理员或者集群管理员将一个集群授权给工作区。',
  DELETE_WORKSPACE: '删除工作区',
  WORKSPACE_LOW: '工作区',
  APP_REVIEW_EMPTY_DESC: '请在工作区中创建应用模板并提交审核。',
  APP_EMPTY_DESC: '请在工作区中创建应用模板并将其发布到应用商店。',
  EDIT_VISIBILITY_DESC: '编辑集群在工作区中的可见性。',
  CLUSTER_VISIBILITY_DESC:
    '集群可见性控制集群对工作区的授权。将集群授权给工作区后，即可在工作区中查看并管理集群资源。',
  CLUSTER_VISIBILITY_Q1: '如何将集群授权给指定的工作区使用？',
  CLUSTER_VISIBILITY_A1: '您可以点击编辑可见性将集群授权给指定的工作区使用。',
  WORKSPACE: '工作区',
  HOST_CLUSTER_VISIBILITY_WARNING:
    '请谨慎将主集群授权给工作区，主集群负载过高会导致多集群系统稳定性下降。',
  CLUSTER_VISIBILITY_REMOVE_WARNING:
    '移除集群对工作区的授权后，该工作区在当前集群下的所有资源将被删除。',
  REMOVE_WORKSPACE_CONFIRM_SI:
    '请输入工作区名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',
  REMOVE_WORKSPACE_CONFIRM_PL:
    '请输入工作区名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',
  WORKSPACES: '工作区',
  IPPOOL_WORKSPACE_EMPTY_TIP: '未发现工作区使用此 IP 池',
  IPPOOL_ASSIGN_WORKSPACE_DESC: '为 IP 池分配一个工作区。',
  IPPOOL_ASSIGN_WORKSPACE_ALLOCATED_WARNING: 'IP 池已被使用，无法分配给另一个具体的工作区。',
  IPPOOL_ASSIGN_WORKSPACE_CHANGE_WARNING: 'IP 池已被使用且已指定具体的工作区，无法更改工作区。',
  ASSIGN_WORKSPACE: '分配工作区',
  SELECT_WORKSPACE_DESC: '选择一个工作区。',
  VISIBILITY_PARTIAL: '对部分工作区可见',
  VISIBILITY_PUBLIC: '对所有工作区可见',
  PROJECT_ADMINISTRATOR_DESC: '选择工作区中的用户作为业务管理员。',
  PROJECT_ASSIGN_DESC: '业务被分配到工作区后不允许变更业务所属的工作区。',
  AUTHORIZATION_RULES_DESC: '设置授权规则使用户只能在特定业务和工作区使用存储类。',
  KS_CONTROLLER_MANAGER_DESC:
    '实现业务逻辑。例如，创建工作区时创建对应的权限，创建服务策略时生成对应的 Istio 配置。',
  DEVOPS_PROJECT_MEMBER_EMPTY_DESC: '请邀请当前工作区的成员到当前 DevOps 业务。',
  INVITE_MEMBER_DESC_DEVOPS: '邀请当前工作区的成员到当前 DevOps 业务。',
  HOW_TO_INVITE_MEMBER_A:
    '业务管理员或者拥有成员邀请权限的用户可以邀请当前工作区内的成员加入业务。',
  ACCESS_CONTROL_DESC: '对平台中的工作区、用户、以及角色进行统一管理。',
  CURRENT_WORKSPACE: '当前工作区',
  FROM_APP_TEMPLATE_DESC: '从工作区或远程应用仓库中的应用模板创建应用。',
  APP_TEMPLATES_MODAL_DESC: '从下拉列表中选择当前工作区或远程应用仓库以查看可用的应用模板。',
  WORKSPACE_REMAINING_QUOTAS: '工作区剩余配额',
  REQUEST_EXCEED_WORKSPACE: '资源预留和资源上限均不能超过工作区资源上限。',
  NETWORK_ISOLATION_DESC:
    '通过配置网络隔离控制同一工作区容器组之间的流量以及来自外部的流量，从而实现隔离应用并增强应用的安全性。',
  INTERNAL_ALLOWLIST_TIP: '将工作区内部的业务和服务添加到白名单。',
  INTERNAL_ALLOWLIST_DESC: '允许当前业务中的容器组与当前工作区其他业务中的服务进行通信。',
  EXTERNAL_ALLOWLIST_TIP: '将工作区外部的网段和端口添加到白名单。',
  EXTERNAL_ALLOWLIST_DESC: '允许当前业务中的容器组与工作区外部的特定网段和端口进行通信。',
  EXTERNAL_TRAFFIC_DIRECTION_DESC:
    '出站表示从当前业务到工作区外的方向。入站表示从工作区外到当前业务的方向。',
  PROJECT_MEMBER_DESC:
    '业务成员可以查看或管理业务资源。业务管理员可以邀请工作区成员至该业务并对业务成员进行管理。',
  INVITE_MEMBER_DESC: '邀请当前工作区的成员到当前业务。',
  PROJECT_MEMBER_EMPTY_DESC: '请邀请当前工作区的成员到当前业务。',
  AUDIT_LOG_WORKSPACE_TIP: '输入工作区名称查找审计日志。',
  METERING_AND_BILLING_DESC: '查看集群和工作区的资源消费情况。',
  WORKSPACE_CONSUMPTION: '工作区资源消费情况',
  WORKSPACE_CONSUMPTION_DESC: '查看工作区的资源消费情况。',
  WORKSPACE_RESOURCE_CONSUMPTION_DESC: '<strong>工作区</strong>的 CPU、内存、卷等资源的消费情况',
  WORKSPACE_PROJECT_CONSUMPTION_DESC:
    '工作区中<strong>业务</strong>的 CPU、内存、卷等资源的消费情况',
  RESOURCE_EVENT_WORKSPACE_TIP: '输入工作区名称查找资源事件。',
  SEARCH_BY_WORKSPACE: '按工作区搜索',
  AUDIT_LOG_WORKSPACE_TIP: '输入工作区名称查找审计日志。',
  METERING_AND_BILLING_DESC: '查看集群和工作区的资源消费情况。',
  WORKSPACE_SCAP: '工作区',
  ADD_CLUSTER_FOR_WORKSPACE: '请将集群授权给工作区。',
  WORKSPACE_CONSUMPTION: '工作区资源消费情况',
  WORKSPACE_CONSUMPTION_DESC: '查看工作区的资源消费情况。',
  WORKSPACE_RESOURCE_CONSUMPTION_DESC: '<strong>工作区</strong>的 CPU、内存、卷等资源的消费情况',
  WORKSPACE_PROJECT_CONSUMPTION_DESC:
    '工作区中<strong>业务</strong>的 CPU、内存、卷等资源的消费情况',
  RESOURCE_EVENT_WORKSPACE_TIP: '输入工作区名称查找资源事件。',
  SEARCH_BY_WORKSPACE: '按工作区搜索',
  WORKBENCH_WORKSPACE: '工作区',
  HOW_TO_USE_APP_REPO_A:
    '您需要转到在该工作区下的业务。在部署新应用时，选择<b>来自应用模板</b>并在下拉列表中选择您的应用仓库，即可部署应用仓库中的应用。',
  HOW_PUBLISH_APP_DESC:
    '您可以将 Helm chart 上传为工作区的应用模板，审核通过后，应用将会发布在应用商店中。',
  HOW_TO_APPLY_MORE_CLUSTER_Q: '如何为工作区申请更多的集群？',
  WORKSPACE_OVERVIEW_DESC:
    '工作区为 TitanContainer 提供了安全隔离的、具有访问权限控制的工作平台。这里您可以看到当前工作区内资源运行的概况。',
  WORKSPACE_SETTINGS: '工作区设置',
  WORKSPACE_BASIC_INFO_DESC: '基本信息提供工作区的信息概览，您可以查看工作区的基本信息。',
  WORKSPACE_BASE_INFO_Q1: '如何为工作区申请更多的集群？',
  WORKSPACE_INFO: '工作区信息',
  WORKSPACE_MEMBER_TCAP: '工作区成员',
  WORKSPACE_MEMBER_TCAP_PL: '工作区成员',
  WS_MEMBER_SCAP: '工作区成员',
  WS_MEMBER_SCAP_PL: '工作区成员',
  WS_NETWORK_ISOLATION: '工作区网络隔离',
  DELETE_WORKSPACE_PROJECTS_DESC: '删除工作区中的业务',
  DELETE_WORKSPACE_DESC: '工作区删除后将无法恢复, 工作区下的资源也同时会被销毁。',
  DELETE_WORKSPACE_TIP:
    '确定删除工作区 <strong>{resource}</strong> ? 删除后将无法恢复, 工作区下的资源也同时会被销毁。',
  DEPARTMENT_DESC:
    '工作区中的部门是用来管理权限的逻辑单元。您可以在部门中设置工作区角色、多个业务角色以及多个 DevOps 业务角色，还可以将用户分配到部门中以批量管理用户权限。',
  WORKSPACE_ROLE: '工作区角色',
  GROUP_WORKSPACE_ROLE_DESC: '工作区角色将授予部门中的所有用户。',
  WORKSPACE_MEMBERS: '工作区成员',
  WORKSPACE_MEMBER_PL: '工作区成员',
  WORKSPACE_MEMBER_DESC:
    '工作区成员可以查看或管理工作区资源。您可以管理工作区中的成员并控制成员权限。',
  WORKSPACE_MEMBER_EMPTY_DESC: '请邀请一个用户到当前工作区。',
  INVITE_WORKSPACE_MEMBER_DESC: '邀请用户到当前工作区。',
  WORKSPACE_QUOTA_PL: '工作区配额',
  WORKSPACE_QUOTAS_DESC: '工作区配额用于管理工作区中所有业务和 DevOps 业务的总资源用量。',
  EDIT_WORKSPACE_QUOTAS: '编辑工作区配额',
  WORKSPACE_ROLE_PL: '工作区角色',
  WORKSPACE_ROLE_DESC: '工作区角色定义了在当前工作区下用户所拥有的权限。',
  WORKSPACE_ROLE_EMPTY_DESC: '请创建一个工作区角色。',
  ROLE_WORKSPACE_ADMIN: '管理工作区中的所有资源。',
  ROLE_WORKSPACE_REGULAR: '查看工作区设置。',
  ROLE_WORKSPACE_VIEWER: '查看工作区中的所有资源。',
  CREATE_WORKSPACE_ROLE: '创建工作区角色',
  PERMISSION_PROJECTS_VIEW_DESC: '查看工作区中的所有业务。',
  PERMISSION_PROJECTS_MANAGEMENT_DESC: '创建、编辑和删除工作区中的业务。',
  PERMISSION_DEVOPS_VIEW_DESC: '查看工作区中的所有 DevOps 业务。',
  PERMISSION_DEVOPS_MANAGEMENT_DESC: '创建、编辑和删除工作区中的 DevOps 业务。',
  PERMISSION_WORKSPACE_APP_REPOS_VIEW_DESC: '查看工作区中的应用仓库。',
  PERMISSION_WORKSPACE_APP_REPOS_MANAGEMENT_DESC: '创建、编辑和删除工作区中的应用仓库。',
  PERMISSION_WORKSPACE_APP_TEMPLATES_VIEW_DESC: '查看工作区中的应用模板。',
  PERMISSION_WORKSPACE_GROUPS_VIEW_DESC: '查看工作区部门的结构和成员。',
  PERMISSION_WORKSPACE_GROUPS_MANAGEMENT_DESC: '管理工作区部门的结构、成员和权限。',
  PERMISSION_WORKSPACE_MEMBERS_VIEW_DESC: '查看工作区成员。',
  PERMISSION_WORKSPACE_MEMBERS_MANAGEMENT_DESC: '邀请、编辑和移除工作区成员。',
  PERMISSION_WORKSPACE_ROLES_VIEW_DESC: '查看工作区角色。',
  PERMISSION_WORKSPACE_ROLES_MANAGEMENT_DESC: '创建、编辑和删除系统预置角色外的工作区角色。',
  PERMIGROUP_WORKSPACE_SETTINGS: '工作区设置',
  PERMISSION_WORKSPACE_SETTINGS_VIEW: '工作区设置查看',
  PERMISSION_WORKSPACE_SETTINGS_VIEW_DESC: '查看工作区设置。',
  PERMISSION_WORKSPACE_SETTINGS_MANAGEMENT: '工作区设置管理',
  PERMISSION_WORKSPACE_SETTINGS_MANAGEMENT_DESC: '管理工作区的基本信息、网络策略等设置。',
  'Clean Workspace': '清理工作区',

  // 业务
  DEVOPS_PROJECT_SETTINGS: '业务管理',
  DEVOPS_PROJECT_ROLE_SCAP: 'DevOps 业务角色',
  DEVOPS_PROJECT_SCAP: 'DevOps 业务',
  DEVOPS_PROJECT_ROLE_PL_SCAP: 'DevOps 业务角色',
  CREDENTIAL_EMPTY_DESC: '請創建一個 DevOps 业务憑證。',
  DEVOPS_PROJECT_MEMBER_PL: 'DevOps 业务成員',
  DEVOPS_PROJECT_MEM_DESC: '對业务内的成員進行管理及角色分配。',
  INVITE_MEMBER_DESC_DEVOPS: '您可以邀請當前企業空間成員至該 DevOps 业务。',
  DEVOPS_PROJECT_ROLE_PL: 'DevOps 业务角色',
  DEVOPS_PROJECT_ROLES_DESC: '成員角色定義了在目前 DevOps 业务下用戶所擁有的權限。',
  ROLE_DEVOPS_VIEWER: 'DevOps 业务觀察者，可以查看 DevOps 业务下所有的資源。',
  ROLE_DEVOPS_OPERATOR: 'DevOps 业务普通成員，可以在 DevOps 业务下創建流水線憑證等。',
  DEVOPS_PROJECT: 'DevOps 业务',
  WORKBENCH_DEVOPS: 'DevOps 业务',
  CREATE_DEVOPS_PROJECT: '創建 DevOps 业务',
  DEVOPS_ADMIN_DESC: '指定业务内一個成員為管理員。',
  DELETE_DEVOPS_PROJECT: '刪除 DevOps 业务',
  DEVOPS_PROJECT_TCAP: 'DevOps 业务',
  DEVOPS_PROJECT_LOW: 'DevOps 业务',
  DEVOPS_PROJECT_ROLE: 'DevOps 业务角色',
  ADD_DEVOPS_PROJECT: '添加 DevOps 业务',
  ROLE_WORKSPACE_REGULAR: '企業空間普通成員，無法創建 DevOps 业务和項目。',
  ROLE_WORKSPACE_SELF_PROVISIONER: '企業空間普通成員，可以在企業空間下創建 DevOps 业务和項目。',
  pipeline_owner: 'DevOps 业务的所有者，可以進行 DevOps 业务的所有操作',
  pipeline_maintainer: 'DevOps 业务的主要維護者，可以進行項目内的憑證配置、Pipeline 配置等操作',
  pipeline_developer: 'DevOps 业务的開發者，可以進行 Pipeline 的觸發以及查看',
  pipeline_reporter: 'DevOps 业务的觀察者，可以查看 Pipeline 的運行情况',
  DEVOPS_PROJECT_DESC: 'DevOps 业务用於對資源進行分組管理以及控製不同用戶的資源管理權限。',
  'Please select project': '请选择业务',
  NAV_PROJECTS: '业务',
  SET_AS_DEFAULT_REGISTRY_DESC:
    '设置镜像服务为为默认镜像服务。如果没有特别指定，系统将使用默认镜像服务中的镜像创建容器。每个业务只允许存在一个默认镜像服务。',
  PROJECT_CPU_USAGE: '业务 CPU 用量',
  NS_STORAGE_QUOTA_DESC: '可以对业务下的存储资源总量进行限制。',
  KS_DESCRIPTION:
    'Titan Container 是基于 KubeSphere 打造的新一代容器计算平台，包含边缘计算(Edge Container)和数据中心(DC Container)两大核心组件。我们在 KubeSphere 强大的容器管理能力基础上，通过区块链技术提供去中心化的容器编排和算力调度，创新性地利用智能合约实现跨节点的资源自动分配和透明结算。去中心化架构确保数据隐私和系统安全，所有操作均可追溯且不可篡改，为企业级计算、AI训练和大数据分析提供安全、高效的一站式解决方案。',
  REPS_ADDRESS: '业务地址',
  WORKSPACE_DESC:
    '工作区是一个组织您的业务和 DevOps 业务、管理资源访问权限以及在团队内部共享资源等的逻辑单元，可以作为团队工作的独立工作空间。',
  FEDPROJECT_CANNOT_DEPLOY_APP_TIP: '无法在多集群业务中安装应用。',
  ALL_PROJECTS: '全部业务',
  SELECT_PROJECT_DESC: '选择将要创建资源的业务。',
  SELECT_PROJECT_DESC: '选择将要创建资源的业务。',
  PROJECT_NOT_SELECT_DESC: '请选择一个业务。',
  FEDPROJECT_RESOURCE_TIP: '无法在集群管理内创建多集群业务的资源, 请到多集群业务页面内进行操作。',
  PROJECT: '业务',
  PREREQUESTS_FOR_USE_ROUTE_A: '如需使用应用路由，您需要联系业务管理员启用业务网关。',
  NO_GATEWAY_DESC: '如需使用自动生成模式，请联系业务管理员在此业务的高级设置中设置网关访问模式。',
  PERMIGROUP_PROJECT_RESOURCES_MANAGEMENT: '业务资源',
  PERMISSION_PROJECT_RESOURCES_VIEW: '业务资源查看',
  PERMISSION_PROJECT_RESOURCES_MANAGEMENT: '业务资源管理',
  PROJECT_GATEWAY_PL: '业务网关',
  PROJECT_GATEWAY_NOT_ENABLED: '业务网关未启用',
  PROJECT_ENABLE_GATEWAY_DESC: '请启用业务网关。',
  PROJECT_GATEWAY_LOW: '业务网关',
  PROJECT_DEVOPS_PROJECT: '业务/DevOps 业务',
  ALERTING_MESSAGE_EMPTY_DESC: '当前业务中没有发现告警。',
  DEVOPS_PROJECT_PL: 'DevOps 业务',
  PROJECT_PL: '业务',
  PROJECT_COUNT: '业务数量',
  ENABLE_GATEWAY_TIP: '要使用网关，请在集群或业务中配置网关',
  PROJECT_DESC: '业务用于对资源进行分组管理和控制不同用户的资源管理权限。',
  SYSTEM_PROJECTS: '系统业务',
  USER_PROJECTS: '用户业务',
  PROJECT_ADMINISTRATOR: '业务管理员',
  PROJECT_ADMINISTRATOR_DESC: '选择工作区中的用户作为业务管理员。',
  PROJECT_ASSIGN_DESC: '业务被分配到工作区后不允许变更业务所属的工作区。',
  CREATE_PROJECT_DESC: '创建业务以对资源进行分组并控制不同用户的权限。',
  PROJECT_NAME_EXIST_DESC: '名称已存在，请输入其他名称。业务名称必须在整个平台上唯一。',
  PROJECT_LOW: '业务',
  AUTHORIZATION_RULES_DESC: '设置授权规则使用户只能在特定业务和工作区使用存储类。',
  GLUSTERFS_SECRET_NAMESPACE_DESC: 'Heketi 用户密钥的所属业务。',
  SECRET_NAMESPACE: '密钥所属业务',
  CEPHRBD_ADMIN_SECRET_NAMESPACE_DESC: 'adminSecrect 所在的业务。',
  CEPHRBD_USER_SECRET_NAMESPACE_DESC: 'userSecret 所在的业务。',
  STORAGE_NAMESPACE: '存储所属业务',
  AUTO_CREATE_PROJECT_DESC: '在业务不存在的情况下自动为应用程序资源创建业务。',
  AUTO_CREATE_PROJECT: '自动创建业务',
  DEVOPS_PROJECT_SETTINGS: 'DevOps 业务设置',
  DEVOPS_DESCRIPTION:
    'DevOps 业务是一个独立的命名空间，其中定义了一组流水线。用户可以按照自己的方式对流水线进行分组（例如：业务类型、组织类型）。',
  DEVOPS_PROJECT_ROLE_SCAP: 'DevOps 业务角色',
  DEVOPS_PROJECT_SCAP: 'DevOps 业务',
  DEVOPS_PROJECT_MEMBER_SCAP: 'DevOps 业务成员',
  DEVOPS_PROJECT_MEMBER_PL_SCAP: 'DevOps 业务成员',
  DEVOPS_PROJECT_ROLE_PL_SCAP: 'DevOps 业务角色',
  MULTI_CLUSTER_PROJECT_NOT_FOR_CD: '多集群业务不能用于持续部署。',
  DEVOPS_PROJECT_MEMBER: 'DevOps 业务成员',
  DEVOPS_PROJECT_MEMBER_PL: 'DevOps 业务成员',
  DEVOPS_PROJECT_MEM_DESC: '对业务内的成员进行管理及角色分配。',
  DEVOPS_PROJECT_MEMBER_EMPTY_DESC: '请邀请当前工作区的成员到当前 DevOps 业务。',
  INVITE_MEMBER_DESC_DEVOPS: '邀请当前工作区的成员到当前 DevOps 业务。',
  HOW_TO_INVITE_MEMBER_Q: '如何邀请成员到业务？',
  HOW_TO_INVITE_MEMBER_A:
    '业务管理员或者拥有成员邀请权限的用户可以邀请当前工作区内的成员加入业务。',

  DEVOPS_PROJECT_ROLE_PL: 'DevOps 业务角色',
  DEVOPS_PROJECT_ROLES_DESC: '成员角色定义了在当前 DevOps 业务下用户所拥有的权限。',
  DEVOPS_PROJECT_ROLE_EMPTY_DESC: '请创建一个 DevOps 业务角色。',
  ROLE_DEVOPS_VIEWER: '查看 DevOps 业务中的所有资源。',
  ROLE_DEVOPS_OPERATOR: '管理 DevOps 凭证和流水线以及查看 DevOps 业务中成员和角色。',
  ROLE_DEVOPS_ADMIN: '管理 DevOps 业务中的所有资源。',
  PERMISSION_PIPELINES_VIEW_DESC: '查看 DevOps 业务流水线和下载制品。',
  PERMISSION_PIPELINES_MANAGEMENT_DESC: '创建、编辑和删除 DevOps 业务流水线。',
  PERMISSION_PIPELINERUNS_VIEW_DESC: '查看 DevOps 业务流水线执行记录。',
  PERMISSION_PIPELINERUNS_MANAGEMENT_DESC: '查看、编辑和删除 DevOps 业务流水线执行记录。',
  PERMIGROUP_DEVOPS_SETTINGS: '业务设置',
  PERMISSION_DEVOPS_SETTINGS: '业务设置管理',
  PERMISSION_DEVOPS_SETTINGS_DESC: '管理 DevOps 业务的设置。',
  PERMISSION_CONTINUOUS_DEPLOYMENTS_VIEW_DESC: '查看 DevOps 业务中的持续部署。',
  PERMISSION_CONTINUOUS_DEPLOYMENTS_MANAGEMENT_DESC: '管理 DevOps 业务中的持续部署。',
  PERMISSION_CODE_REPOSITORIES_VIEW_DESC: '查看 DevOps 业务中的代码仓库。',
  PERMISSION_CODE_REPOSITORIES_MANAGEMENT_DESC: '管理 DevOps 业务中的代码仓库。',
  DEVOPS_PROJECT: 'DevOps 业务',
  PIPELINE_NAME_DESC: '流水线的名称，同一个业务内流水线不能重名。',
  PIPELINE_CREATE_DEVOPS_PROJECT_DESC: '选择流水线所属的 DevOps 业务。',
  PROJECT_GROUP_OWNER: '业务组/所有者',
  PROJECT_GROUP_OWNER_EMPTY_TIP: '请输入 GitLab 业务组或业务所有者的名称。',
  INVALID_PROJECT: '业务无效。',
  ALLOW_PRIVILEGE_ESCALATION_DESC:
    '允许容器进程获取比父进程更多的特权。当特权模式启用时，此选业务默认启用。',
  MULTI_CLUSTER_PROJECT_EMPTY_DESC: '请创建一个多集群业务。',
  MULTI_CLUSTER_PROJECT_LOW: '多集群业务',
  MULTI_CLUSTER_PROJECT_SCAP: '多集群业务',
  PROJECT_NAME: '业务名称',
  DELETE_PROJECT: '删除业务',
  PROJECT_COLLECT_SAVED_DISABLED_DESC: '如需启用此功能，您需要在业务设置中启用收集卷上日志。',
  SERVICE_ACCOUNT_PROJECT_ROLE_DESC: '选择服务帐户在当前业务中的角色。',
  PROJECT_ROLE_SI: '业务角色',
  SELECT_PROJECT_ROLE_DESC: '选择一个业务角色以指定权限。',
  PROJECT_QUOTAS_NOT_SET: '业务配额未设置',
  PROJECT_QUOTAS_DESC:
    '业务配额用于指定业务中可用的 CPU 和内存资源数量和容器组、部署、服务等应用资源的最大数量。',
  DEFAULT_CONTAINER_QUOTAS_DESC:
    '默认容器配额用于指定业务中创建的容器的默认 CPU 预留、CPU 上限、内存预留和内存上限。',

  PROJECT_SETTINGS: '业务设置',
  HOW_TO_USE_QUOTA_A:
    '资源配额是用来限制资源用量的一种机制，您可以通过<b>编辑业务</b>来编辑业务资源配额和默认容器配额。',
  WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_A:
    '默认容器配额用于指定业务中创建的容器的默认 CPU 预留、CPU 上限、内存预留和内存上限。',
  PROJECT_BASIC_INFO_DESC: '基本信息提供业务的信息概览，您可以查看业务的信息以及默认容器配额。',
  EDIT_PROJECT_QUOTA: '编辑业务配额',
  PROJECT_REMAINING_QUOTAS: '业务剩余配额',
  DELETE_PROJECT_TIP: '请输入业务名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
  PROJECT_INFO: '业务信息',
  EDIT_PROJECT_QUOTAS: '编辑业务配额',
  PROJECT_ROLE_SCAP: '业务角色',
  PROJECT_ROLE_SCAP_PL: '业务角色',
  PROJECT_MEMBER_SCAP: '业务成员',
  PROJECT_MEMBER_SCAP_PL: '业务成员',
  PROJECT_QUOTA_PL: '业务配额',
  PROJECT_GATEWAY_DESC: '对业务中的外网访问网关以及服务治理等配置进行设置和管理。',
  PROJECT_GATEWAY: '业务网关',
  PROJECT_GATEWAY_EMPTY_DESC: '请创建一个业务网关。',
  CLUSTER_GATEWAY_GUIDE_DESC:
    '如果同时存在集群网关和业务网关，业务网关禁用后无法再次启用。建议仅使用集群网关或仅使用业务网关。',
  PROJECT_NETWORK_ISOLATION: '业务网络隔离',
  NETWORK_POLICY_EMP_DESC:
    '启用业务网络隔离后，将禁止其他业务访问当前业务，但您可以按需放行业务、服务以及外部 IP 地址。',
  INTERNAL_ALLOWLIST_TIP: '将工作区内部的业务和服务添加到白名单。',
  INTERNAL_EGRESS_DESC: '当前业务中的容器组可以访问以下服务和业务的容器组。',
  INTERNAL_INGRESS_DESC: '当前业务中的容器组可以被以下服务和业务的容器组访问。',
  INTERNAL_ALLOWLIST_DESC: '允许当前业务中的容器组与当前工作区其他业务中的服务进行通信。',
  EMPTY_RESOURCE_DESC: '请选择至少一个业务或服务。',
  EXTERNAL_ALLOWLIST_DESC: '允许当前业务中的容器组与工作区外部的特定网段和端口进行通信。',
  EXTERNAL_EGRESS_DESC: '当前业务中的容器组可以访问以下网段和端口。',
  EXTERNAL_INGRESS_DESC: '当前业务中的容器组可以被以下网段和端口访问。',
  EXTERNAL_TRAFFIC_DIRECTION_DESC:
    '出站表示从当前业务到工作区外的方向。入站表示从工作区外到当前业务的方向。',
  INTERNAL_TRAFFIC_DIRECTION_DESC:
    '出站表示从当前业务到其他业务的方向。入站表示从其他业务到当前业务的方向。',
  PROJECT_MEMBER: '业务成员',
  PROJECT_MEMBER_PL: '业务成员',
  PROJECT_MEMBER_DESC:
    '业务成员可以查看或管理业务资源。业务管理员可以邀请工作区成员至该业务并对业务成员进行管理。',
  INVITE_MEMBER_DESC: '邀请当前工作区的成员到当前业务。',
  PROJECT_MEMBER_EMPTY_DESC: '请邀请当前工作区的成员到当前业务。',
  INVITE_MEMBER_SEARCH_PLACEHOLDER: '输入用户名邀请业务成员',

  PROJECT_ROLE_PL: '业务角色',
  PROJECT_ROLE_DESC: '业务角色定义了在当前业务下用户所拥有的权限。',
  ROLE_PROJECT_ADMIN: '管理业务中的所有资源。',
  ROLE_PROJECT_REGULAR: '管理业务中除用户和角色之外的资源。',
  ROLE_PROJECT_VIEWER: '查看业务中的所有资源。',
  ROLE_PROJECT_OPERATOR: '管理业务中除用户和角色之外的资源。',
  PROJECT_ROLE_EMPTY_DESC: '请创建一个业务角色。',
  PERMISSION_APPLICATION_WORKLOADS_VIEW_DESC:
    '查看业务中的应用、服务、工作负载、任务、灰度发布任务和镜像构建器等资源。',
  PERMISSION_APPLICATION_WORKLOADS_MANAGEMENT_DESC:
    '创建、编辑和删除业务中的应用、服务、工作负载、任务、灰度发布任务和镜像构建器等资源。',
  PERMISSION_VOLUME_SNAPSHOTS_VIEW_DESC: '查看业务中的卷快照。',
  PERMISSION_VOLUME_SNAPSHOTS_MANAGEMENT_DESC: '创建、编辑和删除业务中的卷快照。',
  PERMISSION_VOLUMES_VIEW_DESC: '查看业务中的持久卷声明。',
  PERMISSION_VOLUMES_MANAGEMENT_DESC: '创建、编辑和删除业务中的持久卷声明。',
  PERMISSION_CONFIGMAPS_VIEW_DESC: '查看业务中的配置字典。',
  PERMISSION_CONFIGMAPS_MANAGEMENT_DESC: '创建、编辑和删除业务中的配置字典。',
  PERMISSION_SECRETS_VIEW_DESC: '查看业务中的保密字典。',
  PERMISSION_SECRETS_MANAGEMENT_DESC: '创建、编辑和删除业务中的保密字典。',
  PERMISSION_SERVICEACCOUNT_VIEW_DESC: '查看业务中的服务帐户。',
  PERMISSION_SERVICEACCOUNT_MANAGEMENT_DESC: '创建、编辑和删除业务中的服务帐户。',
  PERMISSION_ALERTING_MESSAGES_VIEW_DESC: '查看业务中的告警。',
  PERMISSION_ALERTING_MESSAGES_MANAGEMENT_DESC: '评论并删除业务中的告警。',
  PERMISSION_ALERTING_POLICIES_VIEW_DESC: '查看业务中的规则组。',
  PERMISSION_ALERTING_POLICIES_MANAGEMENT_DESC: '创建、编辑和删除业务中的规则组。',
  PERMISSION_CUSTOM_MONITORING_VIEW_DESC: '查看业务中的自定义监控面板。',
  PERMISSION_CUSTOM_MONITORING_MANAGEMENT_DESC: '创建、编辑和删除业务中的自定义监控面板。',
  PERMISSION_PROJECT_MEMBERS_VIEW_DESC: '查看业务成员。',
  PERMISSION_PROJECT_MEMBERS_MANAGEMENT_DESC: '邀请、编辑和移除业务成员。',
  PERMISSION_PROJECT_ROLES_VIEW_DESC: '查看业务角色。',
  PERMISSION_PROJECT_ROLES_MANAGEMENT_DESC: '创建、编辑和删除系统预置角色以外的业务角色。',
  PERMIGROUP_PROJECT_SETTINGS: '业务设置',
  PERMISSION_PROJECT_SETTINGS: '业务设置管理',
  PERMISSION_PROJECT_SETTINGS_DESC:
    '管理业务设置，包括业务基本信息、外部访问设置、网络策略、资源配额、日志收集设置等。',
  AUDIT_LOG_PROJECT_TIP: '输入业务名称查找审计日志。',
  SEARCH_BY_PROJECT: '按业务搜索',
  CONTAINER_LOG_PROJECT_TIP: '输入业务名称查找容器日志。',
  PROJECT_SCAP: '业务',
  WORKSPACE_PROJECT_CONSUMPTION_DESC:
    '工作区中<strong>业务</strong>的 CPU、内存、卷等资源的消费情况',
  PROJECT_CONSUMPTION_DESC:
    '业务中的<strong>应用</strong>、<strong>服务</strong>、<strong>容器组</strong>的 CPU、内存、卷等资源的消费情况',
  RESOURCE_EVENT_PROJECT_TIP: '输入业务名称查找资源事件。',
  AUDIT_LOG_PROJECT_TIP: '输入业务名称查找审计日志。',
  SEARCH_BY_PROJECT: '按业务搜索',
  CONTAINER_LOG_PROJECT_TIP: '输入业务名称查找容器日志。',
  PROJECT_SCAP: '业务',
  RESOURCE_EVENT_PROJECT_TIP: '输入业务名称查找资源事件。',
  MULTI_CLUSTER_DEPLOYMENT: '多集群业务',
  WORKBENCH_PROJECT: '业务',
  WORKBENCH_DEVOPS: 'DevOps 业务',
  WORKBENCH_MULTI_CLUSTER_PROJECT: '多集群业务',
  MULTI_CLUSTER_PROJECT_TIP: '此业务跨多个集群。',
  HOW_TO_USE_APP_REPO_A:
    '您需要转到在该工作区下的业务。在部署新应用时，选择<b>来自应用模板</b>并在下拉列表中选择您的应用仓库，即可部署应用仓库中的应用。',
  DEVOPS_PROJECT_EMPTY_DESC: '请创建一个 DevOps 业务。',
  CREATE_DEVOPS_PROJECT: '创建 DevOps 业务',
  DEVOPS_BASEINFO_DESC: '请设置 DevOps 业务的基本信息',
  DEVOPS_ADMIN_DESC: '选择一个业务成员作为业务管理员。',
  DELETE_MULTIPLE_DEVOPS_PROJECTS: '批量删除 DevOps 业务',
  DELETE_DEVOPS_PROJECT: '删除 DevOps 业务',
  DELETE_DEVOPS_PROJECT_TIP: '请输入 DevOps 业务名称 {resource} 以确认您了解此操作的风险。',
  DELETE_DEVOPS_PROJECT_TIP_PL:
    '请输入 DevOps 业务名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
  PROJECT_EMPTY_DESC: '请创建一个业务。',
  CREATE_PROJECT: '创建业务',
  CREATE_MULTI_CLUSTER_PROJECT: '创建多集群业务',
  CREATE_MULTI_CLUSTER_PROJECT_DESC:
    '您可以创建多集群业务，让业务运行在多个集群中，为应用提供快速迭代开发的容器环境并实现高可用。',
  MULTI_CLUSTER_PROJECT_PL: '多集群业务',
  FED_HOST_NAMESPACE_TIP: '该业务与多集群业务关联, 请勿修改此业务中的资源。',
  MULTI_CLUSTER_PROJECT: '多集群业务',
  PROJECT_NAME_EXISTS_IN_HOST: '业务名称在主集群中已经存在，请输入其他业务名称。',
  SELECT_CLUSTER_DESC: '选择要创建业务的集群。',
  PROJECT_NAME_EXISTS_IN_CLUSTER: '业务名称在在 {cluster} 集群中已存在，请输入其他业务名称。',
  PROJECT_CLUSTER_SETTINGS_DESC:
    '为业务选择至少一个集群。如果选择多个集群，主集群上将创建同名业务。',
  DEVOPS_PROJECT_TCAP: 'DevOps 业务',
  DEVOPS_PROJECT_TCAP_PL: 'DevOps 业务',
  DEVOPS_PROJECT_LOW: 'DevOps 业务',
  DEVOPS_PROJECT_LOW_PL: 'DevOps 业务',
  PROJECTS: '业务',
  DEPARTMENT_DESC:
    '工作区中的部门是用来管理权限的逻辑单元。您可以在部门中设置工作区角色、多个业务角色以及多个 DevOps 业务角色，还可以将用户分配到部门中以批量管理用户权限。',
  PROJECT_VALUE: '业务：{value}',
  PROJECT_ROLE_VALUE: '业务角色：{value}',
  DEVOPS_VALUE: 'DevOps 业务：{value}',
  DEVOPS_PROJECT_ROLES_VALUE: 'DevOps 业务角色：{value}',
  PROJECT_ROLE: '业务角色',
  SELECT_ROLE_TIP: '请选择角色。',
  ADD_PROJECT: '添加业务',
  DEVOPS_PROJECT_ROLE: 'DevOps 业务角色',
  ADD_DEVOPS_PROJECT: '添加 DevOps 业务',
  DEVOPS_PROJECTS: 'DevOps 业务',
  WORKSPACE_QUOTAS_DESC: '工作区配额用于管理工作区中所有业务和 DevOps 业务的总资源用量。',
  ROLE_WORKSPACE_SELF_PROVISIONER: '查看企业设置、管理应用模板、创建业务和 DevOps 业务。',
  PERMIGROUP_PROJECTS_MANAGEMENT: '业务',
  PERMISSION_PROJECTS_VIEW: '业务查看',
  PERMISSION_PROJECTS_VIEW_DESC: '查看工作区中的所有业务。',
  PERMISSION_PROJECTS_MANAGEMENT: '业务管理',
  PERMISSION_PROJECTS_MANAGEMENT_DESC: '创建、编辑和删除工作区中的业务。',
  PERMISSION_PROJECTS_CREATE: '业务创建',
  PERMISSION_PROJECTS_CREATE_DESC: '创建业务并成为所创建的业务的管理员。',
  PERMIGROUP_DEVOPS_MANAGEMENT: 'DevOps 业务',
  PERMISSION_DEVOPS_VIEW: 'DevOps 业务查看',
  PERMISSION_DEVOPS_VIEW_DESC: '查看工作区中的所有 DevOps 业务。',
  PERMISSION_DEVOPS_MANAGEMENT: 'DevOps 业务管理',
  PERMISSION_DEVOPS_MANAGEMENT_DESC: '创建、编辑和删除工作区中的 DevOps 业务。',
  PERMISSION_DEVOPS_CREATE: 'DevOps 业务创建',
  PERMISSION_DEVOPS_CREATE_DESC: '创建 DevOps 业务并成为所创建的 DevOps 业务的管理员。',
  CREDENTIALS_CREATE_DESC: '创建用于 DevOps 业务中的凭证',
  pipeline_owner: 'DevOps 业务的所有者，可以进行 DevOps 业务的所有操作',
  pipeline_maintainer: 'DevOps 业务的主要维护者，可以进行业务内的凭证配置、流水线配置等操作',
  pipeline_developer: 'DevOps 业务的开发者，可以进行流水线的触发以及查看',
  pipeline_reporter: 'DevOps 业务的观察者，可以查看流水线的运行情况',
  DEVOPS_PROJECT_DESC: 'DevOps 业务用于对资源进行分组管理以及控制不同用户的资源管理权限。',
  PLEASE_SELECT_CLUSTER: '请选择集群',
  // 应用介绍
  NO_DOCUMENT_DESC: '未发现应用介绍。',
  DOCUMENTATION: '应用介绍',
  NO_DOCUMENT_FOUND: '未发现应用介绍',

  // 配置文件
  CHART_FILES: '配置文件',
  NO_APP_CHART_FILE_FOUND: '未发现该应用的 配置文件。',

  // 版本信息
  UPDATE_LOG: '版本信息',
  NO_UPDATE_LOG_DESC: '未发现版本信息。',
  CHANGELOGS: '版本信息',
};
