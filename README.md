# Infra Steps
1. Create vnet and two subnets
2. Create AKS resource and assign to aks subnet. Also, include ACR and the Key Vault secret provider.
3. Create Key Vault
4. Create user assigned managed identity and assign to Key Vault and the VMSS
5. Create a Jumpbox VM
6. In ACR, under Access Keys, click the Admin user checkbox
7. Run the following kubectl command to setup the pull secret using username and password from step 6:

kubectl create secret docker-registry acr-secret --docker-server="acrName.azurecr.io" --docker-username=UserNameFromACRAccessKey --docker-password="AcrPassword" --docker-email=me@hotmail.com

8. Run the following az command to enable keyvault secret rotation (run az login and az account set --subscription MySubscriptionId first to login to subscription)

az aks addon update -g ResourceGroupName-n AKSName -a azure-keyvault-secrets-provider --enable-secret-rotation
