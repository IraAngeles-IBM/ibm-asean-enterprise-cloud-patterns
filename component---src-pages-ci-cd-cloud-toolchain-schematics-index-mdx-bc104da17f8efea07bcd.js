(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"3hdS":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return n})),t.d(a,"default",(function(){return d}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var c=t("7ljp"),i=t("013z");t("qKvR");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e}).apply(this,arguments)}var n={},b=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",a)}},o=b("PageDescription"),r=b("AnchorLinks"),l=b("AnchorLink"),p=b("InlineNotification"),g={_frontmatter:n},m=i.a;function d(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,c,i={},s=Object.keys(e);for(c=0;c<s.length;c++)t=s[c],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(c.b)(m,s({},g,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)(o,{mdxType:"PageDescription"},Object(c.b)("p",null,"IBM Cloud Toolchain: Managed Devops for Schematics/Terraform")),Object(c.b)("p",null,"IBM Cloud Schematics uses the open source Terraform provisioning engine to do Infrastructure as Code (IaC).\nOne of the features of IBM Cloud Schematics is the ability to link an IBM Cloud Toolchain to the Schematics workspace which will enable continious delivery.\nBy enabling continious delivery we enable a ",Object(c.b)("strong",{parentName:"p"},"GitOps")," workflow-\nthe git source repository which holds our terraform code defines the desired state of our infrastructure/applications.\nChanges to this repository will trigger immediate action to adjust the actual state of our infrastructure/applications to match the\nupdated desired state in our git repository."),Object(c.b)("p",null,"For more information on Schematics workspace on IBM Cloud, visit the ",Object(c.b)("a",s({parentName:"p"},{href:"../iac/schematics"}),"IBM Cloud Schematics")," section."),Object(c.b)("p",null,"In this section we will outline the process to enable continuous delivery and GitOps for an IBM Cloud Schematics workspace."),Object(c.b)(r,{small:!0,mdxType:"AnchorLinks"},Object(c.b)(l,{mdxType:"AnchorLink"},"Fork Terraform Scripts"),Object(c.b)(l,{mdxType:"AnchorLink"},"Create Schematics Workspace"),Object(c.b)(l,{mdxType:"AnchorLink"},"Enable Continuous Delivery for Schematics"),Object(c.b)(l,{mdxType:"AnchorLink"},"Triggering a Change")),Object(c.b)("h2",null,"Fork Terraform Scripts"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fork a copy of ",Object(c.b)("inlineCode",{parentName:"li"},"https://github.com/jzaccone/iac-pattern-guide/")," to your own github account. You will edit this code later to trigger a kickoff of the CD pipeline")),Object(c.b)("h2",null,"Create Schematics Workspace"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"From the upper lefthand menu, go to ",Object(c.b)("strong",{parentName:"li"},"Schematics"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"662px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"113.54166666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAACxklEQVQ4y51UW0tqQRjdf6BeAx+ENOh0AS9xonPqrT/QS78nMDPUoP6HoST4EGE9+RRZoVlqZRdLu9nVSq3WOeuD2exNu46cgcU3e/bMmvWtb2Y0j8cDh8OBsbEx9Pf340dfH/r+ore3V9DT0wOn02mCGhsYGMDQ0BC8Xq9EQrPb7bDZbDKpu7sbP4eH4XZ78Ht0FCMjv9DR0SHo7Ow0gWNdXV0iYnBwUCKhTUxMYHx8HJOTk3C5XLIro9qZfbfbLYv4j1B9RvWfkdCurq5QKBRwcnKCdDqNnZ0dbG5uYmNjA1tbW8hkMoKnpyc0m028vr7i/v4eb29vWF5extTUFGZnZxEIBAQaJzw+PsoEotVqodFoyEJGBau2trYGv9+Pubk5hMNhgfb+/i4/Pz4+8F1TGyqwJZNJ+Hw+IQoGgwJdoYrPz8+6Ko4RVK02JZQIEk5PT5sJr6+vsbu7i+PjY/Fqf38fuVwO6+vryGazMnZ3d2fKQkUjYSgUEmjcXaXwXTOSGRV+SrlWq+Hs7AylUkkqWywWdWWsOOPp6emXKVt6WK/XZSL7qgAvLy8Cevmdh5YK6d/R0REODg7EP45ZpdwWIRXw0FIlq3x7eysH+L89fHh4QLValUrSy5ubG1QqFemXy2VRz6PUdspUR0JeJ5JcXFwIISPHSUjlbRPSeE7iIpKqItFHpewrD1dXVz8TXl5egqAaHhOmyaOzt7eHw8PDL88lhSwtLWFmZsZMyPS4kDfGCCqkYnpK8JuRm7NwFLC4uCiEvCE64fb2tniRSqUQj8eRSCQkrqysiFIeavrIyI15TdnncxeNRnWF+tWjCr6JLA7ToG8EfeSYFfifWSiFppRZjPPzc0E+nxfvuPu/GteRkI+qSaHxMaUqquS3sapWFeb5jUQinz1Urw3ByYR6ua3AW0RiWhWLxUTdwsIC5ufnBX8AX5nlMEUWTToAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Menu",title:"Schematics Menu",src:"/static/d476aa8e9ee762128767181c3a568ed6/7a604/cicd-schematics-menu.png",srcSet:["/static/d476aa8e9ee762128767181c3a568ed6/7fc1e/cicd-schematics-menu.png 288w","/static/d476aa8e9ee762128767181c3a568ed6/a5df1/cicd-schematics-menu.png 576w","/static/d476aa8e9ee762128767181c3a568ed6/7a604/cicd-schematics-menu.png 662w"],sizes:"(max-width: 662px) 100vw, 662px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"On the Workspaces page, click ",Object(c.b)("strong",{parentName:"li"},"Create workspace"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABGklEQVQoz41R203EMBBMe/zQCl1AFVRAEZQBEkJ5O++HH7Hj5HJDdk85RfdFpJHt2cnueBxkWYYwDJEkCZRSd2it/wWlNKRUMJNFnucI+r7HMAxctNbCOcfr44/GGMYj753G4hSuq0VZ7A3JjZQS3nssy8KgPTWe55mHFUWBpmkY0zRxzTkLu6+/wuIrsfhOPX7CAgE167oO4zjeHdCQwzVxVCPdEcfNrUY/SLy8Gzy/KTy9Wnx8CgQ0VQjBqOsabduykziO+UyRpGmKqqrQtDufxmygLEtEUbRra9bJcUC264JzXnRFus62bTh/FMO6rthwhV89c6QhPbm9XFbmaGhABOVyPAjtj/OBW2Y7To92gLTGTJy7EAX+ANR9FLocccXCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Menu",title:"Schematics Menu",src:"/static/b600a4df61f38d980cca268302b1fb8b/3cbba/cicd-schematics-workspaces.png",srcSet:["/static/b600a4df61f38d980cca268302b1fb8b/7fc1e/cicd-schematics-workspaces.png 288w","/static/b600a4df61f38d980cca268302b1fb8b/a5df1/cicd-schematics-workspaces.png 576w","/static/b600a4df61f38d980cca268302b1fb8b/3cbba/cicd-schematics-workspaces.png 1152w","/static/b600a4df61f38d980cca268302b1fb8b/1f4d1/cicd-schematics-workspaces.png 1177w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fill out values for ",Object(c.b)("strong",{parentName:"li"},"Workspace name"),", ",Object(c.b)("strong",{parentName:"li"},"Resource group"),", and ",Object(c.b)("strong",{parentName:"li"},"Location"),". Then click ",Object(c.b)("strong",{parentName:"li"},"Create"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABFklEQVQoz32RvU6EQBSF5y3tfAVt3GY7Lbaw2cbERitj5UMpRnYFhoH5B8Y93osK65qV5MsJk/DdcxlRygaq9SirGnn+Bikl0jCMDP+QUkKMEU3ToO/76UwURYEsy0i2wUv2ClkraGPRagNjjuOcQyAhw4+nd601RL6VeM622BQKVW2hdEBrIiVN1w7WssBSzvwIY/CoqoIo8V7W6LoIoVpDggBtA6zvRoyLX5hvof0r5OyGHTVMcISloh/UVHDNaQWayP8lxjDi3Pzx/ro8hM9WTw1OriVO15KywvJBUUOl0LZ6FHkfCD/lfpvDdszt3SPOFle4WK5wvrjE+uYegm+JpSGECZZzHjb73dLSzSYMaUeLznwCyscRLIqPq4wAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Menu",title:"Schematics Menu",src:"/static/dad61bf6f96a640b7a475028ce36c4c9/3cbba/cicd-schematics-createworkspace2.png",srcSet:["/static/dad61bf6f96a640b7a475028ce36c4c9/7fc1e/cicd-schematics-createworkspace2.png 288w","/static/dad61bf6f96a640b7a475028ce36c4c9/a5df1/cicd-schematics-createworkspace2.png 576w","/static/dad61bf6f96a640b7a475028ce36c4c9/3cbba/cicd-schematics-createworkspace2.png 1152w","/static/dad61bf6f96a640b7a475028ce36c4c9/0b124/cicd-schematics-createworkspace2.png 1728w","/static/dad61bf6f96a640b7a475028ce36c4c9/4ea69/cicd-schematics-createworkspace2.png 2304w","/static/dad61bf6f96a640b7a475028ce36c4c9/f66db/cicd-schematics-createworkspace2.png 2806w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Once you create your schematics workspace, you will be redirected to the settings page.\nScroll down to the ",Object(c.b)("strong",{parentName:"li"},"Import your Terraform Template")," section."),Object(c.b)("li",{parentName:"ul"},"Provide the fork you created earlier for the ",Object(c.b)("strong",{parentName:"li"},"Github or Gitlab repository URL"),"."),Object(c.b)("li",{parentName:"ul"},"Select ",Object(c.b)("strong",{parentName:"li"},"terraform_v0.12")," for ",Object(c.b)("strong",{parentName:"li"},"Terraform version")),Object(c.b)("li",{parentName:"ul"},"Click ",Object(c.b)("strong",{parentName:"li"},"Save template information"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2ElEQVQ4y3WTTY7TQBCFvWWNOAACibtwCHawBMQpONTws0EwrCbxKJNREhiJJP632+52p5PQeVPVsT2Oxll8ftV2d9WrUturqgpZljnyPO9I09TRxllGMSFlBSUl6TBeWZaYTCbwfR+z2QzT6RTz+dytR6MRFovFMR5f48q/QZxVqGQNpSShHuGxwzAMT4iiCEIIcDEhSpQU56JCWmiEqUReVC6hlMq54kQnDpfLJVar1Yly0jiOnbqYNQyQJJEr0E/S4hzyg5PyoSRJ3LxYWzgpw7Hb03znM/v9Hrvdzqkx5uiQH3Vdg1sfmsmQi1a11h2cwyXkROv1GkEQnCi3zsrueJ5FUXTK7vgwn23pWn6o+njA/E5RZa7eulCqdu1xm302bct8p4zZYLs15zE9aM37zaYHrbVuWhalxOwucvz9l2KdSASpQpD0oHWUnSek72mu3FXycqEgSmqzKogS//dbAAfCdlhrobeH8xiLMG9aLoTEd1/j4krjy+iBr2ONb8QFxZe3NRJyEJObOB+A3rMx5/AuUHj1yeL5+wNefrR48YFji6dvLZ69s3jy5oDXn+m+GbpeqqEeoPlzvIJm+Jsc/JrWuGzg+OfNkR8TjfGfuvernYf33AOJFhtipTMUcQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Import",title:"Schematics Import",src:"/static/6c7d1aec2c515507c1ae9dd02fa8c083/3cbba/cicd-schematics-import.png",srcSet:["/static/6c7d1aec2c515507c1ae9dd02fa8c083/7fc1e/cicd-schematics-import.png 288w","/static/6c7d1aec2c515507c1ae9dd02fa8c083/a5df1/cicd-schematics-import.png 576w","/static/6c7d1aec2c515507c1ae9dd02fa8c083/3cbba/cicd-schematics-import.png 1152w","/static/6c7d1aec2c515507c1ae9dd02fa8c083/942b3/cicd-schematics-import.png 1456w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",null,"Once the page refreshes, you should see a ",Object(c.b)("strong",{parentName:"p"},"Variables")," section. You will need to provide values for each of these."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"For ",Object(c.b)("strong",{parentName:"li"},"environment"),", put any value"),Object(c.b)("li",{parentName:"ul"},"For ",Object(c.b)("strong",{parentName:"li"},"public_key"),", copy and paste a ssh public key that you will use to access your VSIs. For mac:")),Object(c.b)("pre",null,Object(c.b)("code",s({parentName:"pre"},{className:"language-bash"}),"ssh-keygen -t rsa # If you need a new key\ncat ~/.ssh/id_rsa.pub # Copy and paste this value\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Select ",Object(c.b)("strong",{parentName:"li"},"Sensitive")," box next to the ",Object(c.b)("strong",{parentName:"li"},"public_key")," field to treat that data as Sensitive"),Object(c.b)("li",{parentName:"ul"},"Leave ",Object(c.b)("strong",{parentName:"li"},"port")," blank to keep the default 8080 port"),Object(c.b)("li",{parentName:"ul"},"Set any value for ",Object(c.b)("strong",{parentName:"li"},"project_name")),Object(c.b)("li",{parentName:"ul"},"Click ",Object(c.b)("strong",{parentName:"li"},"Save changes"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABEElEQVQoz21S223DMAzMZPnqKlkkQIboPF0hnsAwbPghybIsyQ4KVseWKGHn40zrSJ6Oki51XVNVVdQ0Dc3zTNM0kTGGYa3lNYBcCIGWZTkBfIyRay5oBIkFRJ1zjGEYqOs68t7zGjkIi6iO2LhtW65jQTRLI4oQwYPTrnLOtG3bCcihnh3iI0JoBiCkRxR+XVdKKZ2A3DiOv4LiRp8HEkdBjIVauHwn2Pf9v0NxIM1wCAFAcvu+83gQPGKBCT6yw8haELzmQomxjHx0mHMqfOkp9V5Gxu1BRI8MXrt2uOHyDxE8kfgnuMZExgWarCdji6Actr5NfQSaQ8TG/CJmT6/s6esZ6OPxouv9m26fiX4ATjqvImfv3nkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Variables",title:"Schematics Variables",src:"/static/b314731ffe2a2736256c3ae44117179a/3cbba/cicd-schematics-variables2.png",srcSet:["/static/b314731ffe2a2736256c3ae44117179a/7fc1e/cicd-schematics-variables2.png 288w","/static/b314731ffe2a2736256c3ae44117179a/a5df1/cicd-schematics-variables2.png 576w","/static/b314731ffe2a2736256c3ae44117179a/3cbba/cicd-schematics-variables2.png 1152w","/static/b314731ffe2a2736256c3ae44117179a/0b124/cicd-schematics-variables2.png 1728w","/static/b314731ffe2a2736256c3ae44117179a/4ea69/cicd-schematics-variables2.png 2304w","/static/b314731ffe2a2736256c3ae44117179a/57040/cicd-schematics-variables2.png 2310w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",null,"To test your Schematics workspace, click on the ",Object(c.b)("strong",{parentName:"p"},"Apply Plan")," button "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"316px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+UlEQVQY02N4//79qzcfn736+ByOXiOxcaN37z8wfPr4MXbqb7XCvwblf/XL/+qVgRCIUQ5lYEW6pX/P3v4C0mzf+Ich/B9f0j/m6H8ccf844/+xxiAY7LEgNhoCih+7BtT86aNLyx/h1H/hE/8F9/1zb/sX0PvPoOKff8+/0P5/nh3/NIv/8Sf9E075J4SEgCLHr8M0cyf8Uy/659D4T7cMpFOt8J9x5T+9MpBOiYx//Mn/BFARbyJE88eP7m1/gG4DCnHH/+NLBEkADeZJACEgGygulIKOoDZ//Pjx+qNvZ25/O3/n2/m7YPLOt3N3oAwIGyt68+4zADIwEcYgtP6ZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Apply",title:"Schematics Apply",src:"/static/651e14ce4f4c038f81ee59237f0fdbec/51c48/cicd-schematics-apply.png",srcSet:["/static/651e14ce4f4c038f81ee59237f0fdbec/7fc1e/cicd-schematics-apply.png 288w","/static/651e14ce4f4c038f81ee59237f0fdbec/51c48/cicd-schematics-apply.png 316w"],sizes:"(max-width: 316px) 100vw, 316px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",null,"You should see an update to your workspace ",Object(c.b)("strong",{parentName:"p"},"Activity")," page with a new entry for ",Object(c.b)("strong",{parentName:"p"},"Applying plan")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.583333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAkklEQVQoz6WSyxXDMAgE1X9haSI92JYAfcEbSXmJr4l8mOuwLDiSDO8DYhS01pYptYIlwQVhEBNSSlBVmNkSrWmXNriNNvjgkXO+LcylC3fapzDGOIUrmOklPPhAoACRd4dj2i3hTEgeRITai/0If11V9VpZUr06ZOZvwhW0Axgc9ysP2aCUMlP+y3iZ0yoeT8MLVDV08wKY7jIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Activity",title:"Schematics Activity",src:"/static/2adc8afb41dd1aa86cb8177d1050bbf6/3cbba/cicd-schematics-activity.png",srcSet:["/static/2adc8afb41dd1aa86cb8177d1050bbf6/7fc1e/cicd-schematics-activity.png 288w","/static/2adc8afb41dd1aa86cb8177d1050bbf6/a5df1/cicd-schematics-activity.png 576w","/static/2adc8afb41dd1aa86cb8177d1050bbf6/3cbba/cicd-schematics-activity.png 1152w","/static/2adc8afb41dd1aa86cb8177d1050bbf6/0b124/cicd-schematics-activity.png 1728w","/static/2adc8afb41dd1aa86cb8177d1050bbf6/4ea69/cicd-schematics-activity.png 2304w","/static/2adc8afb41dd1aa86cb8177d1050bbf6/d4e2e/cicd-schematics-activity.png 2306w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",null,"Click ",Object(c.b)("strong",{parentName:"p"},"View log")," to see the progress. Once the plan has been successfully applied, find the ",Object(c.b)("strong",{parentName:"p"},"entrypoint")," to the hello world application this terraform deploys."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAjElEQVQY042P2QrDIBRE/f+fDOKCITQVlxpNdJprsLSQhw4c5uLDcGScc2itoZTqvW0bUkrIOfebGPe+72it3ULx3oNJKTHPM4wxvUspqLXiOI4PNETQO2UMjPwMTtPUzYQQkELCPi3S6zIk02H2T0IIYPTVbvg4DdezV4PFLogxdsiYBr+N7yB75xzeTNE225CmzI4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Logs",title:"Schematics Logs",src:"/static/b6b9867743e05b71c3c7bb7f3fcf4454/3cbba/cicd-schematics-logs.png",srcSet:["/static/b6b9867743e05b71c3c7bb7f3fcf4454/7fc1e/cicd-schematics-logs.png 288w","/static/b6b9867743e05b71c3c7bb7f3fcf4454/a5df1/cicd-schematics-logs.png 576w","/static/b6b9867743e05b71c3c7bb7f3fcf4454/3cbba/cicd-schematics-logs.png 1152w","/static/b6b9867743e05b71c3c7bb7f3fcf4454/0b124/cicd-schematics-logs.png 1728w","/static/b6b9867743e05b71c3c7bb7f3fcf4454/4ea69/cicd-schematics-logs.png 2304w","/static/b6b9867743e05b71c3c7bb7f3fcf4454/a4e71/cicd-schematics-logs.png 2452w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.569444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAg0lEQVQY063O0QrCMAwF0P7/N7rp3Dot2II2TddKexcLA5G9iAYOIQkJUaUU5PwEhYCbdThPGsM4Qc8XzFeDQ9ejP57EgE7yKPO7p10PoZxzsNYixoiUMkLghjmCpeeJQBQaLwIzUs67Xo8pYwy01liWiH+Eei9qrT9pBz8bW/42tr0V0v+HFSZQVxMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics helloworld",title:"Schematics helloworld",src:"/static/8b902b0ff4d456d5c3283b9cb8f1b646/3cbba/cicd-schematics-helloworld.png",srcSet:["/static/8b902b0ff4d456d5c3283b9cb8f1b646/7fc1e/cicd-schematics-helloworld.png 288w","/static/8b902b0ff4d456d5c3283b9cb8f1b646/a5df1/cicd-schematics-helloworld.png 576w","/static/8b902b0ff4d456d5c3283b9cb8f1b646/3cbba/cicd-schematics-helloworld.png 1152w","/static/8b902b0ff4d456d5c3283b9cb8f1b646/e3892/cicd-schematics-helloworld.png 1186w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h2",null,"Enable Continuous Delivery for Schematics"),Object(c.b)("p",null,"Next we will enable ",Object(c.b)("strong",{parentName:"p"},"GitOps")," for our schematics/terraform by enabling Continuous delivery for our workspace.\nGitOps is a practice that uses git source repository as the declarative source of truth for the state of our applications.\nMeaning that if change something in the code and commit it, a terraform apply will be triggered, and our application state will be updated."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"To enable continious delivery for our Schematics workspace, from the workspace page, go to ",Object(c.b)("strong",{parentName:"li"},"Settings"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABpklEQVQoz3WSWevaUBDF8xXEBXdBBHFfUXEFP77iEvNgbR/+iooajaiJPqhw6pk2tgX78GNObu6cmXvnKoZxxFidQH0xHquiv82+YzLRoE5UaK/vr9UCP/QvHPQ9rKuF2+32kev1CsU0TfzigvP5jAu5/NaveDqdsN/vcTgc/om2tr8NwxAUJm42G0lkBcuyBBa53+/QNA3dbhfNZhPtdhuNRgOdTkc011qtluhKpYJ6vQ6FRqvVCtvtVkxsQ3b3fD7R6/WQTCZlM5Py+bxQKpXe8F8kEoHT6YSyWCxedzfGdDrFer1+s1wu5Qj9fh/pdBq5XA6pVEp0NpsVzTVqrsViMQQCASg87mw2w3w+l/vQdV3Y7XbSJQ2ZXC6XpTPbhBSLRRQKBYnxeFy6lKEcj0dJtidFuM4jDwYDZDKZd3KtVpNj0rxarUohFqQhr0YM7WH8mbgpBR6PhxhyIw0SiQRCoZAQDAYlhsNheL1eOBwO+P3+v5+N+dFwOBxKIjf7fD64XC643W6Bmng8HoH7FCZ+MuRz4rMZjUZyNzRjV/+DA4lGo/gJWLUlmeEuAuAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Settings",title:"Schematics Settings",src:"/static/26d5b6144634d5bc601355c45bbffeb1/3cbba/cicd-schematics-settings.png",srcSet:["/static/26d5b6144634d5bc601355c45bbffeb1/7fc1e/cicd-schematics-settings.png 288w","/static/26d5b6144634d5bc601355c45bbffeb1/a5df1/cicd-schematics-settings.png 576w","/static/26d5b6144634d5bc601355c45bbffeb1/3cbba/cicd-schematics-settings.png 1152w","/static/26d5b6144634d5bc601355c45bbffeb1/c87b7/cicd-schematics-settings.png 1240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Scroll down to ",Object(c.b)("strong",{parentName:"li"},"Details")," and click the link that says ",Object(c.b)("strong",{parentName:"li"},"Enable continuous delivery"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA80lEQVQoz3WSP2vDMBDF9f0/QqF0yNKhkHQI6dK10GYOHUo6m0JSW5Yt6++r7oiMnKgHPwR3T+/uZIu+79F1HWKMCCHcQPlryjpFmRPjOIJMrbXw3t9cNsaANM65mawjAykla7KxGIaBDZVScyEXKajeti2fRKkjTdM0vGFuwhNqrRdGGQqqT0WjMkgzTdPcjFemjr/nE1Qv0zo2Sy/QhCpd0tVmtRDOh0XC+lgAGBcZ9qh8oGvE4fML96sn3D08Yvf6hpMCfmRMpLOLOKv08GnA8P9Qywm/j0e87LZ43qyx/3hP0wDahAs+vYvj9WPll6rxB+QwcPydXQpVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Enable CD",title:"Schematics Enable CD",src:"/static/b0ecb9a410a68dc1d266462f77faac18/3cbba/cicd-schematics-enablecd.png",srcSet:["/static/b0ecb9a410a68dc1d266462f77faac18/7fc1e/cicd-schematics-enablecd.png 288w","/static/b0ecb9a410a68dc1d266462f77faac18/a5df1/cicd-schematics-enablecd.png 576w","/static/b0ecb9a410a68dc1d266462f77faac18/3cbba/cicd-schematics-enablecd.png 1152w","/static/b0ecb9a410a68dc1d266462f77faac18/0b124/cicd-schematics-enablecd.png 1728w","/static/b0ecb9a410a68dc1d266462f77faac18/b786b/cicd-schematics-enablecd.png 1812w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Name your toolchain, and accept the default values for everything in the ",Object(c.b)("strong",{parentName:"li"},"GitHub")," section"),Object(c.b)("li",{parentName:"ul"},"Under ",Object(c.b)("strong",{parentName:"li"},"Delivery Pipeline"),", add the ",Object(c.b)("strong",{parentName:"li"},"IBM Cloud API Key")," you created before, or click ",Object(c.b)("strong",{parentName:"li"},"New")," to generate a new one."),Object(c.b)("li",{parentName:"ul"},"Click ",Object(c.b)("strong",{parentName:"li"},"Create"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABdklEQVQoz3WTS07DMBCGe082nIADAGLFDdjwrEBiA2IZsUDqkgNwg0LVNm/HsRPn2R/PtI4oSi19mYnj/PnHE0/m399YrdfI8xxaacRJgsVyhZ/FEkmaYe5rBGGELBNQSvE6ioeYpGlqF2fQWjOxUPAjycSphsgLni/LEsYYhvIxaN2EEiklixKKHDCSXZmyQF3XLFRVFedt26LrOtDYbDZDZEESCcMQvu9jbUunPAgCjoktn3DP3Ry9SOKjgnQhh1Q/uS2KbYnkpO97duJw903Tcj4qSAJRFHG5tOEkTtGVN0bXbiGRUYdUhhACuXXpmuP2zGEMRcMxEhUSuS9IjgfBOI5ZNBUSiUXmatdNM3SXnUuBdaxwfA2cPJEIhjE4xN4wO6jcxu7Vf2qez3QLaaFuu45TZMHpdIrzs1M8PD7j4rXD0VWDl0+DvlHWqR624C+msA0sDvzYnufh7vYG3vsH7mc1Lt8qzL5KtBWdCn3gRGhm7GO/XpdHhtAwROMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics API Key",title:"Schematics API Key",src:"/static/042f0d2c31b380cf5f64bd978bf415b2/3cbba/cicd-schematics-apikey.png",srcSet:["/static/042f0d2c31b380cf5f64bd978bf415b2/7fc1e/cicd-schematics-apikey.png 288w","/static/042f0d2c31b380cf5f64bd978bf415b2/a5df1/cicd-schematics-apikey.png 576w","/static/042f0d2c31b380cf5f64bd978bf415b2/3cbba/cicd-schematics-apikey.png 1152w","/static/042f0d2c31b380cf5f64bd978bf415b2/0b124/cicd-schematics-apikey.png 1728w","/static/042f0d2c31b380cf5f64bd978bf415b2/93955/cicd-schematics-apikey.png 2056w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",null,"Voila! You have a pipeline for your Schematics project. Click on ",Object(c.b)("strong",{parentName:"p"},"Delivery Pipeline")," to see the different stages created for your project."),Object(c.b)("p",null,Object(c.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.06944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABUUlEQVQoz21RTU/CUBDs//8Rnj2YeNTEBDWIWmMFDF6IiVAQAQv9ep99xXHeQ4wHD5Pdnc5ud/ZFSloY7dC6LzR2ByU1IZhrcjbAaAkhBIwxcM4FWGtQ1hJZoSEU68ZBaYuoMzhG9+UE9+NTnCdHGL5eYjBe4yJJcTNa4iyeoPM0xVs6x1UvRjIcofeQoNO9QzqbI076eOw/Mw5wfRsj+sjeka4WmBLpKsWmWCPLa8yWOSaLjFyBz1yirCrkRYmqFsi2BbYhr7HNixA3jJu8RGRsw1UbaLOD0NjnWrO2aJoGpuEZjNdo2mrJ0R7PI01LnYGxe7vtDuxvEQkpUfDvfoBzFPFOUqlwH8UGR6XlYCkVb6UD15ILWq0DJ4kDF5VVHSwUjJJi31jTll+/rEQY4BtqPop/mLD9D3xd067iAgcu8qSU8vejx3/cX1T/cIHnUt/h4hPBbASrewAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Pipeline",title:"Schematics Pipeline",src:"/static/fd3b8a81910b5a434d28c09776119411/3cbba/cicd-schematics-pipeline.png",srcSet:["/static/fd3b8a81910b5a434d28c09776119411/7fc1e/cicd-schematics-pipeline.png 288w","/static/fd3b8a81910b5a434d28c09776119411/a5df1/cicd-schematics-pipeline.png 576w","/static/fd3b8a81910b5a434d28c09776119411/3cbba/cicd-schematics-pipeline.png 1152w","/static/fd3b8a81910b5a434d28c09776119411/0b124/cicd-schematics-pipeline.png 1728w","/static/fd3b8a81910b5a434d28c09776119411/4ea69/cicd-schematics-pipeline.png 2304w","/static/fd3b8a81910b5a434d28c09776119411/555a8/cicd-schematics-pipeline.png 2794w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Once finished, click on the ",Object(c.b)("strong",{parentName:"li"},"Apply Plan")," stage to find the logs and entrypoint to the application just as before.")),Object(c.b)("h2",null,"Triggering a Change"),Object(c.b)("p",null,"Now we will change our source code to trigger a pipeline execution. "),Object(c.b)(p,{mdxType:"InlineNotification"},"These steps assume that you have followed the fork steps above, or have write permission to your repository."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Find your source control repo and navigate to ",Object(c.b)("inlineCode",{parentName:"li"},"02-schematics/main.tf")),Object(c.b)("li",{parentName:"ul"},"Edit “Hello World” text to say something different. Like “Hello beautiful world”"),Object(c.b)("li",{parentName:"ul"},"Commit the change")),Object(c.b)("p",null,Object(c.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABSElEQVQoz4WSSVLDMBBFff9zsGMHC3IINqSKFQWLMCTGjkeNVsufbtmZigxd9SzJav1S91cWiOCdRehKmLaGYhyvjTEYxxESMl5Dou97xBiRkQj6If3cthrvXwUqHjtlUXcaDTOfORs7QaXUJCgfPwQ4H1hIoWr6vVCiN4fDVwT3N3TOoePFcRBvEMWUIPObJTPWTi3KXpbPWCweuESNn/UG602OECiVGeOIyBOKt5FciSwMnk3wWOUt3lY5Pr5LbPsBlSLUmtDoiMZcYN7bcq7xcRLclWlZVBsHYz2UsdDWwaXeDjPhIpb35bUkwTGVFKH5p+F+WmZnkrgvvZygE6Qtw4zk07Gg2BcsYCqFIi+xKQr8ljWKsoTSOjnYGY/WSomElgmpZ//fYyZitW9x//mEu9UjlvkrqDV868NNQghcUjxBTDjn+B8dKg1cZGKMTAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Change Source",title:"Schematics Change Source",src:"/static/8b0c2038751bf4d92c9a91577091f3f4/3cbba/cicd-schematics-changesource.png",srcSet:["/static/8b0c2038751bf4d92c9a91577091f3f4/7fc1e/cicd-schematics-changesource.png 288w","/static/8b0c2038751bf4d92c9a91577091f3f4/a5df1/cicd-schematics-changesource.png 576w","/static/8b0c2038751bf4d92c9a91577091f3f4/3cbba/cicd-schematics-changesource.png 1152w","/static/8b0c2038751bf4d92c9a91577091f3f4/0b124/cicd-schematics-changesource.png 1728w","/static/8b0c2038751bf4d92c9a91577091f3f4/6bf9d/cicd-schematics-changesource.png 2176w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Navigate back to your pipeline to see your changes taking place. You should be able to see your commit under ",Object(c.b)("strong",{parentName:"li"},"Last Input")," in the ",Object(c.b)("strong",{parentName:"li"},"Update")," stage.")),Object(c.b)("p",null,Object(c.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABYklEQVQoz12RTUvDQBiE8/9/guDBHlQ8eBCxiCKKWhDrN1hE8BNb2jSb/Xy3SSrjbFo9eFh298nszPAmG09L+BBhvSAvNLQxmBRjuGAQxKLQOVQ5hdIKuZq0zHrN8xjGakxVzjs9yEtTIOtevOLk/gv7lx/Y7b3gfTjC8cM6zgbb3Dew11/B9fMRnj6ucHjXwTn54W0H3f4q3kYD9AY7OH3conYTBzdryD6HOXI9gzIC42dsG5hkMC1LtlBkgekBznu21e3SzsFSF2Sh/eWK58wLTbhcqCmqISIIUWgsiLOGhg2/VxAyRxOhNsTEa8SY3nqGCar6m6aCLM0uPa6bOZqmaQ1TI8tmVd1gPp+jqiq2ETLfzrtZamOMDPGwLrTvhfesUKxamlYYUjpbaOM4bN0mS6QZAz0DCuqUtgxcahmijW25Sz/WeWTJIDDFp3TOxnEFnhNPzC2ZX7KF1v1p/T/tDyDUEGK1zJ9qAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics Change Source",title:"Schematics Change Source",src:"/static/8c8015138031696bbf9065bec41f1742/3cbba/cicd-schematics-pipelineafter.png",srcSet:["/static/8c8015138031696bbf9065bec41f1742/7fc1e/cicd-schematics-pipelineafter.png 288w","/static/8c8015138031696bbf9065bec41f1742/a5df1/cicd-schematics-pipelineafter.png 576w","/static/8c8015138031696bbf9065bec41f1742/3cbba/cicd-schematics-pipelineafter.png 1152w","/static/8c8015138031696bbf9065bec41f1742/0b124/cicd-schematics-pipelineafter.png 1728w","/static/8c8015138031696bbf9065bec41f1742/4ea69/cicd-schematics-pipelineafter.png 2304w","/static/8c8015138031696bbf9065bec41f1742/2cc83/cicd-schematics-pipelineafter.png 2836w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Once the ",Object(c.b)("strong",{parentName:"li"},"Apply")," stage has finished, refresh the page for your app to see the deployed changes")),Object(c.b)("p",null,Object(c.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"948px"}}),"\n      ",Object(c.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAv0lEQVQoz62NiwqCMBiF9/5PaIiSpuZs8zK3li53+tUgAoUID3wc2OU7rFM9OqUhRI1KdrhcJfKyJiQK3qAUdFYInDO+dJJXSPMb0uIGLhVkayAaol1heMc5BztMkN2DJAoZiWf5/DijgSi5krRCnJZIqBOStnqAdcB9+MDCMEQcx4iiaOkgOIHzahnxxOTX3sqTLt1z+oJprWGMQd+rpY3RsNauQu9XLbXfYCtsZ3xT8Avs34+7QhwcNo4jjuQFuWlwvZfULEUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Schematics App After",title:"Schematics App After",src:"/static/962d93790a0e68205229af562b56c46f/23bc3/cicd-schematics-appafter2.png",srcSet:["/static/962d93790a0e68205229af562b56c46f/7fc1e/cicd-schematics-appafter2.png 288w","/static/962d93790a0e68205229af562b56c46f/a5df1/cicd-schematics-appafter2.png 576w","/static/962d93790a0e68205229af562b56c46f/23bc3/cicd-schematics-appafter2.png 948w"],sizes:"(max-width: 948px) 100vw, 948px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ci-cd-cloud-toolchain-schematics-index-mdx-bc104da17f8efea07bcd.js.map