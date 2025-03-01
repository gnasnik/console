/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

module.exports = {
  // Edit Information
  CODE_REPOSITORY: 'Code Repository',
  // Attributes
  TASK_STATUS: 'Task Status',
  NOT_RUNNING: 'Not running',
  QUEUED: 'Queued',
  ABORTED: 'Aborted',
  UNSTABLE: 'Unstable',
  SKIPPED: 'Skipped',
  NOT_BUILT: 'Not built',
  SYNC_STATUS: 'Sync Status',
  DEVOPS_PROJECT: 'DevOps Project',
  // More > Edit Settings
  // More > Scan Repository
  SCAN_REPO_SUCCESSFUL: 'Repository scan was triggered successfully.',
  // More > View Scan Logs
  VIEW_SCAN_LOGS: 'View Scan Logs',
  STARTED_BY_NAME: 'Started By: {name}',
  REPOSITORY_SCAN_LOGS: 'Repository Scan Logs',
  RESCAN: 'Rescan',
  LOGS_OBTAINED_SUCCESSFULLY: 'The logs were obtained successfully.',
  // Health Status
  HEALTH_STATUS_SCAP: 'Health status',
  // Task Status
  PIPELINE_QUEUED_TITLE: 'About to Complete Initialization',
  INITIALIZING_PIPELINE: 'Pipeline Initializing',
  PIPELINE_PREPARE_DESC: 'Preparing the environment...',
  INITIALIZING_PIPELINE_DESC: 'Please wait until the pipeline initialization is complete.',
  TASK_FAILED_NOT_OPERATIONAL: 'The stage has failed and is not operational.',
  NO_PIPELINE_CONFIG_FILE_TIP: 'No pipeline configuration file is found.',
  // Task Status > Edit Pipeline
  EDIT_PIPELINE: 'Edit Pipeline',
  JENKINS_UNAVAILABLE: 'Jenkins is unready.',
  AGENT_TYPE_DESC: `The agent section specifies
    where the entire Pipeline or a particular stage will be executed in the Jenkins environment,
    depending on where the Agent part is placed.
    This part must be defined at the top level within the pipeline block,
    but the stage level usage is optional. `,
  NOT_VALID_REPO: 'Code repo is not valid and cannot be created',
  CREATE_PIPELINE_DESC: 'Build, test and deploy with Pipelines',
  CI: 'Continuous Integration (CI)',
  CI_DESC:
    'Continuous integration (CI) is the process of automatically detecting, pulling, building, and (in most cases) unit testing after source code changes.',
  CICD: 'Continuous Integration & Delivery (CI/CD)',
  CICD_DESC:
    "Continuous deployment (CD) refers to the idea of automatically providing the release version in the continuous delivery pipeline to end users. According to the user's installation method, automatic deployment in the cloud environment, app upgrades (such as apps on mobile phones), website updates, or only the list of available versions.",
  CUSTOM_PIPELIEN: 'Custom Pipeline',
  CUSTOM_PIPELIEN_DESC:
    'You can select the tasks you need to customize the contents of the pipeline.',
  CC: 'CC',
  CREDENTIAL_NAME: 'Credential Name',
  REMOTE_REPOSITORY_URL: 'Remote Repository URL',
  SCM: 'SCM',
  INPUT_MESSAGE_DESC: 'This message will be displayed in the pipeline running state.',
  KUBERNETES_DEPLOY_DESC: `Deploy resources on a Kubernetes cluster.
    In a continuous integration or continuous deployment environment,
    only those resources that need to be updated regularly should be placed in the deployment step.
    Therefore, this step is mostly used to process the deployment of such resources.`,
  KUBERNETES_DEPLOY_DESC_MORE: `<br />
  <label>This step has the following main features:</label>
  <li>Distribution without kubectl</li>
  <li>Variable substitution in Jenkinsfile, Dynamic deployment is possible. </li>
  <li>Support for pulling docker images from private image repositories</li>
  <label> Currently this step supports the following resources:</label>
  <br />
  <li>Configuration </li>
  <li>Key</li>
  <li>Deploy</li>
  <li>Dave Process Set</li>
  <li>App Routing</li>
  <li>Namespace</li>
  <li>Task</li>
  <li>Service</li>
  <li>Replica Set</li>
  <li>
  Replication
  Controller (rolling updates are not supported, and use deployment if you want to use rolling updates)
  </li>`,
  STAGE: 'Stage',
  KUBERNETES_DEPLOY_DEPRECATED_TIP:
    'This step will be deprecated in subsequent versions, and it is recommended that you consider other alternatives.',
  ORIGINAL_IMAGE_ADDRESS: 'Original Image Address',
  NEW_IMAGE_ADDRESS: 'New Image Address',
  NEW_IMAGE_TAG: 'New Image Tag',
  CD_STEP_DESC: 'Update image information using continuous deployment.',
  UPDATE_CD_TITLE: 'Continuous Deployment of Updates',
  // Task Status > Edit Jenkinsfile
  EDIT_JENKINSFILE: 'Edit Jenkinsfile',
  CLOSE_JENKINSFILE_EDITOR_TIP: 'Are you sure to close the Jenkinsfile editor?',
  // Task Status > View Logs
  PIPELINE_RUN_LOGS: 'Pipeline Run Logs',
  VIEW_LOGS: 'View Logs',
  DURATION_VALUE: 'Duration: {value}',
  DOWNLOAD_LOGS: 'Download Logs',
  // Task Status > View Logs > View Logs
  START_REAL_TIME_LOG: 'Enable real-time logs',
  STOP_REAL_TIME_LOG: 'Disable real-time logs',
  // Run Records
  RUN_RECORDS: 'Run Records',
  RUN: 'Run',
  ACTIVITY_EMPTY_TIP: 'The pipeline has not been run.',
  COMMIT: 'Commit',
  LAST_MESSAGE: 'Last Message',
  RUN_ID: 'Run ID',
  STOP_PIPELINE_SUCCESSFUL: 'The pipeline was stopped successfully.',
  INVALID_JENKINSFILE_TIP:
    'The current Jenkinsfile is not a standard declarative Jenkinsfile and graphical display is unavailable.',
  PAUSED: 'Paused',
  // Run Records > Run
  SET_PARAMETERS: 'Set Parameters',
  PARAMS_DESC: `The following parameters are generated based on the pipeline settings or
     the parameters section of the Jenkinsfile, which are entered according to operational requirements.`,
  PIPELINE_RUN_START_SI: 'Starts to run the pipeline...',
  PIPELINE_RUN_START_PL: 'Starts to run the pipelines...',
  // Run Records > Run Record Details > Details
  // Run Records > Run Record Details > Task Status
  BREAK: 'Break',
  PROCEED: 'Proceed',
  WAITING_FOR_INPUT: 'Waiting for input...',
  CANCELLED_IN_REVIEW: 'Cancelled in review',
  STEPS_COMPLETE_TOTAL: 'Steps: {complete}/{total}',
  // Run Records > Run Record Details > Commits
  COMMIT_PL: 'Commits',
  AUTHOR: 'Author',
  NO_COMMIT_FOUND: 'No Commit Found.',
  // Run Records > Run Record Details > Artifacts
  ARTIFACT_PL: 'Artifacts',
  NO_ARTIFACT_FOUND_TIP: 'No artifact is found.',
  SIZE: 'Size',
  // Run Records > Run > Set Parameters
  // Branches
  BRANCH_SI: 'Branch',
  BRANCH_PL: 'Branches',
  SCAN_REPOSITORY: 'Scan Repository',
  PIPELINE: 'Pipeline',
  NO_BRANCHES_FOUND: 'No Branches Found',
  // Branches > Code Check
  CODE_CHECK: 'Code Check',
  BUG_PL: 'Bugs',
  VULNERABILITY_PL: 'Vulnerabilities',
  CODE_SMELL_PL: 'Code Smells',
  CODE_LINE_COUNT: 'Code Lines',
  COVERAGE: 'Coverage',
  TEST_RESULTS: 'Results',
  ISSUE_PL: 'Issues',
  CRITICAL: 'Critical',
  MAJOR: 'Major',
  MINOR: 'Minor',
  DISPLAY_ALL: 'Display All',
  DISPLAY_ONLY_LAST_TEN: 'Only the last 10 issues are displayed.',
  LINE_VALUE: 'Line: {value}',
  PASSED: 'Passed',
  // Pull Requests
  PULL_REQUEST_PL: 'Pull Requests',
  FAILED_CHECK_SCRIPT_COMPILE:
    'The check of script compile failed, if you want to bypass the step, please click the continue button',
  WEBSITE: 'Website',
  GITBOOK: 'Gitbook',
  GITHUB: 'Github',
  TWITTER: 'Twitter',
  TELEGRAM: 'Telegram',
  DISCORD: 'Discord',
};
