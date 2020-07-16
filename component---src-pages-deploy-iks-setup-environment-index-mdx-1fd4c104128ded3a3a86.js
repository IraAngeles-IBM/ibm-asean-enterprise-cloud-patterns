(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{mGek:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),c=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},i=s("AnchorLinks"),l=s("AnchorLink"),b=s("InlineNotification"),p={_frontmatter:r},u=c.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["components"]);return Object(n.b)(u,o({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(l,{mdxType:"AnchorLink"},"Create an instance of VPC Gen2"),Object(n.b)(l,{mdxType:"AnchorLink"},"Create IKS on VPC Infrastructure"),Object(n.b)(l,{mdxType:"AnchorLink"},"Install the IBM Cloud CLI and plug-ins"),Object(n.b)(l,{mdxType:"AnchorLink"},"Install Kubernetes CLI"),Object(n.b)(l,{mdxType:"AnchorLink"},"Gain access to your cluster")),Object(n.b)("h2",null,"Create an instance of VPC Gen2"),Object(n.b)("p",null,"Create a Virtual Private Cloud (VPC) on generation 2 compute with a subnet that is located in the zone where you want to create the cluster. Make sure to attach a public gateway to your subnet so that you can access public endpoints from your cluster."),Object(n.b)("p",null,"Create a standard VPC Generation 2 compute cluster by using the IBM Cloud console. For more detailed information, please refer\n",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/vpc?topic=vpc-creating-a-vpc-using-the-ibm-cloud-console"}),"here"),". "),Object(n.b)("p",null,"Once VPC is created, you need to edit the default security group to allow incoming network traffic from the VPC load balancers. Follow the steps given ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-vpc-firewall#security_groups_ui"}),"here"),"\nfor opening security group ports via console.\nAfter editing, the Default Security Group of your VPC will show Inbound rules as shown in snapshot below."),Object(n.b)("p",null,Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.208333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+klEQVQY05WO226DMBBE+f/vQ1FEIMW4DlRIDfHd2Ga6dtJK7VsfjjQza+9OsywLGGMQQmDbNkgp/4Ui7pvEskqsnwpNWdS2Lfg0oe97nE4nTKQvlw7XYQDnvPoyL/qbUqLruh8/sgm324zGGIN933EAcM7VliF4aJdwfxgopahJQcNQljOREhIRYySfn1S/00JrEbwDJQi0ONKgLvcB1vmq83G8QPV4ZY7mmgrF+PxTjjS2BFoB64zw2OqlstwZXUE5kOIfqCEdN0rCaY1cmhKlcWPFhMjfgA8Bz3qkmVdt2QA79lUfy/tvKMv0Tl07yP4MT/8PMSJRsS87u8rdER1s4gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Security Group",title:"Security Group",src:"/static/e81b52cb5e013fcaa78c075f41593d0e/3cbba/vpc-security-group.png",srcSet:["/static/e81b52cb5e013fcaa78c075f41593d0e/7fc1e/vpc-security-group.png 288w","/static/e81b52cb5e013fcaa78c075f41593d0e/a5df1/vpc-security-group.png 576w","/static/e81b52cb5e013fcaa78c075f41593d0e/3cbba/vpc-security-group.png 1152w","/static/e81b52cb5e013fcaa78c075f41593d0e/0b124/vpc-security-group.png 1728w","/static/e81b52cb5e013fcaa78c075f41593d0e/aeaa3/vpc-security-group.png 1948w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(n.b)("h2",null,"Create IKS on VPC Infrastructure"),Object(n.b)("p",null,"Follow the instructions given ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-getting-started#vpc-classic-gs"}),"here")," and create an IKS instance on VPC. For this pattern, we have created IKS which has worker pool (2vCPU and 4GB RAM) with three worker nodes. Once created, wait for some time (~40 minutes) for the cluster to get ready. "),Object(n.b)("h2",null,"Install the IBM Cloud CLI and plug-ins"),Object(n.b)("p",null,"It includes the installation of these CLIs and plug-ins:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"IBM Cloud CLI (ibmcloud)"),Object(n.b)("li",{parentName:"ol"},"IBM Cloud Kubernetes Service plug-in (ibmcloud ks)"),Object(n.b)("li",{parentName:"ol"},"IBM Cloud Container Registry plug-in (ibmcloud cr)")),Object(n.b)("p",null,"Refer to the ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-cs_cli_install#cs_cli_install_steps"}),"link")," to install these."),Object(n.b)("h2",null,"Install Kubernetes CLI"),Object(n.b)("p",null,"To work with your cluster, you need to install the Kubernetes CLI. Please refer this ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-cs_cli_install#kubectl"}),"link"),". "),Object(n.b)("h2",null,"Gain access to your cluster"),Object(n.b)("p",null,"Go to IBM Cloud dashboard and navigate to your Kubernetes cluster. Click on the ",Object(n.b)("inlineCode",{parentName:"p"},"Access")," tab as shown below."),Object(n.b)("p",null,Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"18.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA0ElEQVQY03XNTU7DMBAF4Nwpi0QEml9F6hW5QY/ABbrsiiIWIBaJndhxXGKnVoHFwx4pCxYsPr3nGVkT3T/skOc54jgmobdti6ZpSF3XKIoCZVlSVlVFsixDmqZIksT3O8p9kyHio4KeZzDBIaTANE0YhgFK+bnW/wr7zeQtF4XHp09Edl1xvTrIyww1ayzLAiEEjDFY/c5aS0LfbG/nHAn/v28Oh+MXotPzB17eR7x65zcBNmpw1oNzjr7v0XUdJWOMMsxDl1L+OWiMBX4MfgEPYwPCTBb1egAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Access Your Cluster",title:"Access Your Cluster",src:"/static/0fe5737541a4870de58f6ca89ab10256/3cbba/access-cluster.png",srcSet:["/static/0fe5737541a4870de58f6ca89ab10256/7fc1e/access-cluster.png 288w","/static/0fe5737541a4870de58f6ca89ab10256/a5df1/access-cluster.png 576w","/static/0fe5737541a4870de58f6ca89ab10256/3cbba/access-cluster.png 1152w","/static/0fe5737541a4870de58f6ca89ab10256/0b124/access-cluster.png 1728w","/static/0fe5737541a4870de58f6ca89ab10256/d890f/access-cluster.png 1852w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(n.b)("p",null,"Perform the steps given in ",Object(n.b)("inlineCode",{parentName:"p"},"access")," tab."),Object(n.b)(b,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"NOTE:"),"\nNeed to complete these configuration steps every time that you work with your cluster.")),Object(n.b)("p",null,"Verify the environment using the following command."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"kubectl config current-context\n")),Object(n.b)("p",null,"It should return the details of the cluster that you are planning to work with."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deploy-iks-setup-environment-index-mdx-1fd4c104128ded3a3a86.js.map