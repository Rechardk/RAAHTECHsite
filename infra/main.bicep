param environmentName string
param location string = resourceGroup().location

var resourceToken = uniqueString(environmentName, subscription().subscriptionId)

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-${environmentName}'
  location: location
  tags: {
    'azd-env-name': environmentName
  }
}

output RESOURCE_GROUP_ID string = resourceGroup.id
