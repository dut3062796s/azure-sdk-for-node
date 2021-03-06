/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

exports.RegisterClusterPackage = require('./registerClusterPackage');
exports.UnregisterClusterPackage = require('./unregisterClusterPackage');
exports.Node = require('./node');
exports.NodeId = require('./nodeId');
exports.NodeNodeDeactivationInfo = require('./nodeNodeDeactivationInfo');
exports.NodeList = require('./nodeList');
exports.HealthReport = require('./healthReport');
exports.NodeHealthReport = require('./nodeHealthReport');
exports.DisableNode = require('./disableNode');
exports.HealthEvent = require('./healthEvent');
exports.HealthEvaluation = require('./healthEvaluation');
exports.UnhealthyEvaluation = require('./unhealthyEvaluation');
exports.EventHealthEvaluation = require('./eventHealthEvaluation');
exports.PartitionsHealthEvaluation = require('./partitionsHealthEvaluation');
exports.ReplicasHealthEvaluation = require('./replicasHealthEvaluation');
exports.DeployedServicePackagesHealthEvaluation = require('./deployedServicePackagesHealthEvaluation');
exports.DeployedApplicationsHealthEvaluation = require('./deployedApplicationsHealthEvaluation');
exports.ServicesHealthEvaluation = require('./servicesHealthEvaluation');
exports.NodesHealthEvaluation = require('./nodesHealthEvaluation');
exports.ApplicationsHealthEvaluation = require('./applicationsHealthEvaluation');
exports.UpgradeDomainNodesHealthEvaluation = require('./upgradeDomainNodesHealthEvaluation');
exports.UpgradeDomainDeployedApplicationsHealthEvaluation = require('./upgradeDomainDeployedApplicationsHealthEvaluation');
exports.SystemApplicationHealthEvaluation = require('./systemApplicationHealthEvaluation');
exports.PartitionHealthEvaluation = require('./partitionHealthEvaluation');
exports.ReplicaHealthEvaluation = require('./replicaHealthEvaluation');
exports.DeployedServicePackageHealthEvaluation = require('./deployedServicePackageHealthEvaluation');
exports.DeployedApplicationHealthEvaluation = require('./deployedApplicationHealthEvaluation');
exports.ServiceHealthEvaluation = require('./serviceHealthEvaluation');
exports.NodeHealthEvaluation = require('./nodeHealthEvaluation');
exports.ApplicationHealthEvaluation = require('./applicationHealthEvaluation');
exports.DeltaNodesCheckHealthEvaluation = require('./deltaNodesCheckHealthEvaluation');
exports.UpgradeDomainDeltaNodesCheckHealthEvaluation = require('./upgradeDomainDeltaNodesCheckHealthEvaluation');
exports.RegisterApplicationType = require('./registerApplicationType');
exports.UnregisterApplicationType = require('./unregisterApplicationType');
exports.ApplicationTypeHealthEvaluation = require('./applicationTypeHealthEvaluation');
exports.NodeHealth = require('./nodeHealth');
exports.DeployedApplication = require('./deployedApplication');
exports.DeployedApplicationHealthReport = require('./deployedApplicationHealthReport');
exports.DeployedServicePackageHealthState = require('./deployedServicePackageHealthState');
exports.DeployedApplicationHealth = require('./deployedApplicationHealth');
exports.NodeLoadMetricInformation = require('./nodeLoadMetricInformation');
exports.NodeLoadInformation = require('./nodeLoadInformation');
exports.CodePackageEntryPointStatistics = require('./codePackageEntryPointStatistics');
exports.EntryPoint = require('./entryPoint');
exports.DeployedCodePackage = require('./deployedCodePackage');
exports.DeployedReplica = require('./deployedReplica');
exports.DeployedReplicaDetail = require('./deployedReplicaDetail');
exports.DeployedReplicaDetailReplicatorStatus = require('./deployedReplicaDetailReplicatorStatus');
exports.DeployedReplicaDetailReplicatorStatusReplicationQueueStatus = require('./deployedReplicaDetailReplicatorStatusReplicationQueueStatus');
exports.DeployedServicePackage = require('./deployedServicePackage');
exports.DeployedServicePackageHealth = require('./deployedServicePackageHealth');
exports.DeployedServiceType = require('./deployedServiceType');
exports.DeployedServiceHealthReport = require('./deployedServiceHealthReport');
exports.ApplicationType = require('./applicationType');
exports.ApplicationTypeDefaultParameterListItem = require('./applicationTypeDefaultParameterListItem');
exports.ServiceManifest = require('./serviceManifest');
exports.ServiceType = require('./serviceType');
exports.ServiceTypeServiceTypeDescription = require('./serviceTypeServiceTypeDescription');
exports.Application = require('./application');
exports.ApplicationParametersItem = require('./applicationParametersItem');
exports.ApplicationList = require('./applicationList');
exports.ApplicationDescription = require('./applicationDescription');
exports.ApplicationDescriptionParameterListItem = require('./applicationDescriptionParameterListItem');
exports.ApplicationManifest = require('./applicationManifest');
exports.ApplicationHealthReport = require('./applicationHealthReport');
exports.Service = require('./service');
exports.ServiceList = require('./serviceList');
exports.ServiceHealthReport = require('./serviceHealthReport');
exports.PartitionDescription = require('./partitionDescription');
exports.ServiceGroupMemberDescription = require('./serviceGroupMemberDescription');
exports.ServiceGroupDescription = require('./serviceGroupDescription');
exports.ServiceCorrelationDescription = require('./serviceCorrelationDescription');
exports.StatelessServiceGroupDescription = require('./statelessServiceGroupDescription');
exports.StatefulServiceGroupDescription = require('./statefulServiceGroupDescription');
exports.CreateServiceGroupDescription = require('./createServiceGroupDescription');
exports.StatelessCreateServiceGroupDescription = require('./statelessCreateServiceGroupDescription');
exports.StatefulCreateServiceGroupDescription = require('./statefulCreateServiceGroupDescription');
exports.ServiceGroupMember = require('./serviceGroupMember');
exports.ApplicationHealth = require('./applicationHealth');
exports.ApplicationHealthServiceHealthStatesItem = require('./applicationHealthServiceHealthStatesItem');
exports.ApplicationHealthDeployedApplicationHealthStatesItem = require('./applicationHealthDeployedApplicationHealthStatesItem');
exports.ClusterUpgradeHealthPolicy = require('./clusterUpgradeHealthPolicy');
exports.ApplicationHealthPolicyMap = require('./applicationHealthPolicyMap');
exports.StartClusterUpgrade = require('./startClusterUpgrade');
exports.ApplicationUpgrade = require('./applicationUpgrade');
exports.ApplicationUpgradeCurrentUpgradeDomainProgress = require('./applicationUpgradeCurrentUpgradeDomainProgress');
exports.ApplicationUpgradeDeployedApplicationHealthStates = require('./applicationUpgradeDeployedApplicationHealthStates');
exports.ServiceLoadMetricDescription = require('./serviceLoadMetricDescription');
exports.ServicePlacementPolicyDescription = require('./servicePlacementPolicyDescription');
exports.ServiceDescription = require('./serviceDescription');
exports.StatelessServiceDescription = require('./statelessServiceDescription');
exports.StatefulServiceDescription = require('./statefulServiceDescription');
exports.ServiceDescriptionTemplate = require('./serviceDescriptionTemplate');
exports.CreateServiceDescription = require('./createServiceDescription');
exports.StatelessCreateServiceDescription = require('./statelessCreateServiceDescription');
exports.StatefulCreateServiceDescription = require('./statefulCreateServiceDescription');
exports.UpdateServiceDescription = require('./updateServiceDescription');
exports.StatelessUpdateServiceDescription = require('./statelessUpdateServiceDescription');
exports.StatefulUpdateServiceDescription = require('./statefulUpdateServiceDescription');
exports.UpdateServiceGroupDescription = require('./updateServiceGroupDescription');
exports.StatelessUpdateServiceGroupDescription = require('./statelessUpdateServiceGroupDescription');
exports.StatefulUpdateServiceGroupDescription = require('./statefulUpdateServiceGroupDescription');
exports.ServiceHealth = require('./serviceHealth');
exports.ServiceHealthPartitionHealthStatesItem = require('./serviceHealthPartitionHealthStatesItem');
exports.PartitionInformation = require('./partitionInformation');
exports.Partition = require('./partition');
exports.PartitionCurrentConfigurationEpoch = require('./partitionCurrentConfigurationEpoch');
exports.PartitionList = require('./partitionList');
exports.PartitionHealthReport = require('./partitionHealthReport');
exports.Replica = require('./replica');
exports.ReplicaList = require('./replicaList');
exports.ReplicaHealthReport = require('./replicaHealthReport');
exports.PartitionHealth = require('./partitionHealth');
exports.PartitionHealthReplicaHealthStatesItem = require('./partitionHealthReplicaHealthStatesItem');
exports.ReplicaHealth = require('./replicaHealth');
exports.PartitionLoadInformation = require('./partitionLoadInformation');
exports.ReplicaLoadInformation = require('./replicaLoadInformation');
exports.LoadMetricInformation = require('./loadMetricInformation');
exports.LoadMetricInformationMinNodeLoadId = require('./loadMetricInformationMinNodeLoadId');
exports.LoadMetricInformationMaxNodeLoadId = require('./loadMetricInformationMaxNodeLoadId');
exports.ClusterHealthReport = require('./clusterHealthReport');
exports.ClusterLoadInformation = require('./clusterLoadInformation');
exports.ClusterHealth = require('./clusterHealth');
exports.ClusterHealthNodeHealthStatesItem = require('./clusterHealthNodeHealthStatesItem');
exports.ClusterHealthNodeHealthStatesItemId = require('./clusterHealthNodeHealthStatesItemId');
exports.ClusterHealthApplicationHealthStateItem = require('./clusterHealthApplicationHealthStateItem');
exports.MonitoringPolicy = require('./monitoringPolicy');
exports.ApplicationHealthPolicy = require('./applicationHealthPolicy');
exports.ApplicationHealthPolicyDefaultServiceTypeHealthPolicy = require('./applicationHealthPolicyDefaultServiceTypeHealthPolicy');
exports.StartApplicationUpgrade = require('./startApplicationUpgrade');
exports.StartApplicationUpgradeParametersItem = require('./startApplicationUpgradeParametersItem');
exports.UpdateDescription = require('./updateDescription');
exports.ClusterHealthPolicy = require('./clusterHealthPolicy');
exports.UpdateClusterUpgrade = require('./updateClusterUpgrade');
exports.UpdateApplicationUpgrade = require('./updateApplicationUpgrade');
exports.ResumeClusterUpgrade = require('./resumeClusterUpgrade');
exports.ResumeApplicationUpgrade = require('./resumeApplicationUpgrade');
exports.ResolvedServicePartition = require('./resolvedServicePartition');
exports.ResolvedServicePartitionEndpointsItem = require('./resolvedServicePartitionEndpointsItem');
exports.ClusterUpgradeProgress = require('./clusterUpgradeProgress');
exports.ClusterUpgradeProgressCurrentUpgradeDomainProgress = require('./clusterUpgradeProgressCurrentUpgradeDomainProgress');
exports.ClusterUpgradeProgressUpgradeDomainProgressAtFailure = require('./clusterUpgradeProgressUpgradeDomainProgressAtFailure');
exports.ErrorModel = require('./errorModel');
exports.ErrorModelError = require('./errorModelError');
exports.discriminators = {
  'HealthEvaluation' : exports.HealthEvaluation,
  'HealthEvaluation.Event' : exports.EventHealthEvaluation,
  'HealthEvaluation.Partitions' : exports.PartitionsHealthEvaluation,
  'HealthEvaluation.Replicas' : exports.ReplicasHealthEvaluation,
  'HealthEvaluation.DeployedServicePackages' : exports.DeployedServicePackagesHealthEvaluation,
  'HealthEvaluation.DeployedApplications' : exports.DeployedApplicationsHealthEvaluation,
  'HealthEvaluation.Services' : exports.ServicesHealthEvaluation,
  'HealthEvaluation.Nodes' : exports.NodesHealthEvaluation,
  'HealthEvaluation.Applications' : exports.ApplicationsHealthEvaluation,
  'HealthEvaluation.UpgradeDomainNodes' : exports.UpgradeDomainNodesHealthEvaluation,
  'HealthEvaluation.UpgradeDomainDeployedApplications' : exports.UpgradeDomainDeployedApplicationsHealthEvaluation,
  'HealthEvaluation.SystemApplication' : exports.SystemApplicationHealthEvaluation,
  'HealthEvaluation.Partition' : exports.PartitionHealthEvaluation,
  'HealthEvaluation.Replica' : exports.ReplicaHealthEvaluation,
  'HealthEvaluation.DeployedServicePackage' : exports.DeployedServicePackageHealthEvaluation,
  'HealthEvaluation.DeployedApplication' : exports.DeployedApplicationHealthEvaluation,
  'HealthEvaluation.Service' : exports.ServiceHealthEvaluation,
  'HealthEvaluation.Node' : exports.NodeHealthEvaluation,
  'HealthEvaluation.Application' : exports.ApplicationHealthEvaluation,
  'HealthEvaluation.DeltaNodesCheck' : exports.DeltaNodesCheckHealthEvaluation,
  'HealthEvaluation.UpgradeDomainDeltaNodesCheck' : exports.UpgradeDomainDeltaNodesCheckHealthEvaluation,
  'HealthEvaluation.ApplicationType' : exports.ApplicationTypeHealthEvaluation,
  'ServiceGroupDescription' : exports.ServiceGroupDescription,
  'ServiceGroupDescription.Stateless' : exports.StatelessServiceGroupDescription,
  'ServiceGroupDescription.Stateful' : exports.StatefulServiceGroupDescription,
  'CreateServiceGroupDescription' : exports.CreateServiceGroupDescription,
  'CreateServiceGroupDescription.Stateless' : exports.StatelessCreateServiceGroupDescription,
  'CreateServiceGroupDescription.Stateful' : exports.StatefulCreateServiceGroupDescription,
  'ServiceDescription' : exports.ServiceDescription,
  'ServiceDescription.Stateless' : exports.StatelessServiceDescription,
  'ServiceDescription.Stateful' : exports.StatefulServiceDescription,
  'CreateServiceDescription' : exports.CreateServiceDescription,
  'CreateServiceDescription.Stateless' : exports.StatelessCreateServiceDescription,
  'CreateServiceDescription.Stateful' : exports.StatefulCreateServiceDescription,
  'UpdateServiceDescription' : exports.UpdateServiceDescription,
  'UpdateServiceDescription.Stateless' : exports.StatelessUpdateServiceDescription,
  'UpdateServiceDescription.Stateful' : exports.StatefulUpdateServiceDescription,
  'UpdateServiceGroupDescription' : exports.UpdateServiceGroupDescription,
  'UpdateServiceGroupDescription.Stateless' : exports.StatelessUpdateServiceGroupDescription,
  'UpdateServiceGroupDescription.Stateful' : exports.StatefulUpdateServiceGroupDescription
};
