(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{jR3C:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return h}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=o("PageDescription"),s=o("AnchorLinks"),p=o("AnchorLink"),b=o("InlineNotification"),d={_frontmatter:i},u=r.a;function h(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(u,c({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Deploying certificates to VPC Load Balancers")),Object(n.b)("p",null,"The Certificate Manager service provides support for deploying certificates to multiple IBM Cloud services. This section reviews how to configure access from the VPC Load Balancer service to the Certificate Manager service and add an HTTPS listener to a VPC Load Balancer."),Object(n.b)("p",null,"The example will use the certificate ordered in the ",Object(n.b)("a",c({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/certificate-management/service-setup"}),"service setup")," section. The terraform code from ",Object(n.b)("a",c({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/iac-resources/compute"}),"IaC compute")," will be used to create the vpc, application and load balancer instance."),Object(n.b)("p",null,"The code to manage the creation of the example can be found in the GitHub repository ",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/IBM/cloud-enterprise-examples/"}),"https://github.com/IBM/cloud-enterprise-examples/")," in the directory ",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/IBM/cloud-enterprise-examples/tree/master/iac/14-certificate-management/vpc-lbaas-certificate"}),"14-certificate-management/vpc-lbaas-certificate"),"."),Object(n.b)(s,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Configure VPC Load Balancer HTTPS listener"),Object(n.b)(p,{mdxType:"AnchorLink"},"Clean Up")),Object(n.b)(b,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Requirements")),Object(n.b)("p",null,"To be able to execute and complete the instructions in this page, make sure you have an ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud account"),": if you don’t have one yet, you can ",Object(n.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-quickstart_lite#prereqs-lite"}),"create a Lite account")," for free."),Object(n.b)("p",null,"These examples will require an internet DNS domain that is managed by the user or can be used with a domain managed by the IBM Cloud Internet Services service."),Object(n.b)("p",null,"Also make sure you have the environment setup as explained in the ",Object(n.b)("a",c({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/iac/setup-environment"}),"Setup Environment")," page to have installed the IBM Cloud CLI, logged in to your account with the IBM Cloud CLI and set the ",Object(n.b)("inlineCode",{parentName:"p"},"IC_API_KEY")," environment variable to a key which has the ability to manage IAM configuration.")),Object(n.b)("h2",null,"Configure VPC Load Balancer HTTPS listener"),Object(n.b)("p",null,"The VPC Load Balancer service can terminate and offload processing of ",Object(n.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/docs/vpc?topic=vpc-load-balancers#ssl-offloading-and-required-authorizations"}),"incoming SSL/TLS connections"),". In order to do this, a front-end listener pool is defined using the HTTPS protocol and the CRN of the desired certificate in the Certificate Manager. Access to the certificate and the associated private key requires a service authorization between the VPC Load Balancer service and the Certificate Manager service."),Object(n.b)("p",null,"These actions can be performed from the web UI, or the IBM Cloud CLI, but in keeping with the example code that is being extended, terraform code to provide the service authorization and listener pool creation is provided in the ",Object(n.b)("inlineCode",{parentName:"p"},"tls.tf")," file. This file has a placeholder for the CRN of the certificate to be used by the front-end listener. Update the placeholder with these steps."),Object(n.b)("p",null,"Change to the ",Object(n.b)("inlineCode",{parentName:"p"},"14-certificate-management/order-certificate")," directory and obtain the CRN of the ordered certificate:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"CERT_CRN=$(terraform output ordered-certificate-id)\n")),Object(n.b)("p",null,"Change to the ",Object(n.b)("inlineCode",{parentName:"p"},"14-certificate-management/vpc-lbaas-certificate")," directory and update the placeholder in the ",Object(n.b)("inlineCode",{parentName:"p"},"tls.tf")," file."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),'sed -i.bak "s|CERT-CRN|${CERT_CRN}|" tls.tf && rm tls.tf.bak\n')),Object(n.b)("p",null,"After running this command, the ",Object(n.b)("inlineCode",{parentName:"p"},"tls.tf")," file will look like:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-hcl",metastring:"pathname=tls.tf",pathname:"tls.tf"}),'data "ibm_resource_instance" "cm" {\n    name     = "iac-certificate-manager"\n    service  = "cloudcerts"\n}\n\nvariable "certificate_crn" {\n    default = "crn:v1:bluemix:public:cloudcerts:us-south:a/06788ee4fd5a4d779f236bbe43f09b4b:d6cad342-cf54-49d3-b5f9-42e842e43c40:certificate:df56720b1dab1db089f73d0fd8d6ad20"\n}\n\nresource "ibm_iam_authorization_policy" "policy" {\n  source_service_name           = "is"  \n  source_resource_type          = "load-balancer"\n  target_service_name           = "cloudcerts"\n  roles                          = ["Writer"]\n}\n\nresource "ibm_is_lb_listener" "iac_app_lb_listener_tls" {\n  lb                        = ibm_is_lb.iac_app_lb.id\n  port                      = "443"\n  protocol                  = "https"\n  certificate_instance      = var.certificate_crn\n  default_pool              = ibm_is_lb_pool.iac_app_lb_pool.id\n}\n\noutput "load_balancer_host_status" {\n  value = "add the host ${ibm_is_lb.iac_app_lb.hostname} as CNAME to the tls host"\n}\n')),Object(n.b)("p",null,"Use this command from the IaC Compute section to add the public key used for SSH connections to the folder for use during the environment creation."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),'echo "public_key = \\"$(cat ~/.ssh/id_rsa.pub)\\"" > secrets.auto.tfvars\n')),Object(n.b)("p",null,"Now use terraform to create the environment with compute, load balancer and the HTTPS enabled front-end listener."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"terraform init \nterraform plan \nterraform apply\n")),Object(n.b)("p",null,"When the code completes, a message will appear with the hostname of the VPC Load Balancer:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-text"}),'Apply complete! Resources: 29 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nentrypoint = http://8f962775-us-south.lb.appdomain.cloud:8080\nlb_ip_address = [\n  "52.116.196.98",\n  "52.117.1.76",\n]\nload_balancer_host_status = add the host 8f962775-us-south.lb.appdomain.cloud as CNAME to the tls host\n')),Object(n.b)("p",null," Update the DNS domain name entry in the certificate with a CNAME record that direct to the hostname of the VPC Load Balancer. Once the CNAME is in place, you can access the deployed example application."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),'curl https://movies.timro.us/movies/675\n{\n  "id": "675",\n  "title": "Kagemusha",\n...\n')),Object(n.b)("h2",null,"Clean up"),Object(n.b)("p",null,"To cleanup all the resources created by the script, run the following:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"terraform destroy\n")),Object(n.b)("p",null,"This will not delete the Certificate Manager instance or the imported or ordered certificates. Only delete the certificate manager instance if you will not be completing the “Certificates for Kubernetes” example."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-certificate-management-deploy-to-vpclb-index-mdx-e4e264c70b3ad0a398f6.js.map