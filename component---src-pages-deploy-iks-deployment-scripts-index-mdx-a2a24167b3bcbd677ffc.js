(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{sMKN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},b=l("PageDescription"),c=l("AnchorLinks"),s=l("AnchorLink"),p=l("InlineNotification"),m={_frontmatter:r},h=i.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(h,o({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(b,{mdxType:"PageDescription"},Object(a.b)("p",null,"What is ____?")),Object(a.b)(c,{small:!0,mdxType:"AnchorLinks"},Object(a.b)(s,{mdxType:"AnchorLink"},"Item 1"),Object(a.b)(s,{mdxType:"AnchorLink"},"Item 2")),Object(a.b)(p,{mdxType:"InlineNotification"},Object(a.b)("h6",null,"What is this page for?"),Object(a.b)("p",null,"This page has some examples of content you can use such as this notification, anchor links, page description and code. Delete all of them from this page or keep it as a sample to create your pattern."),Object(a.b)("p",null,"Use this page to introduce your pattern. You may have tiles to the pages of your pattern.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'echo "This is an example of some shell scripting code"\necho "just use \'bash\' after the 3 back sticks"\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-hcl"}),"variable \"example\" {\n  description: \"You can use other languages too, such as 'hcl' for Terraform code, 'js' for Javascript, 'go', 'python', etc...\"\n}\n")),Object(a.b)("h2",null,"Instructions"),Object(a.b)("p",null,"This page is in MDX format which is Markdown with JSX, or HTML if you want to call it that way. Use an IDE (I suggest Visual Studio Code) to edit the content and install the ",Object(a.b)("a",o({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=nickytonline.vscode-gatsby-snippets"}),"Gatsby Snippets")," extension."),Object(a.b)("p",null,"This code is made with Gastby using the Carbon theme. To know more about the components of Gastby, Carbon and Markdown refer to the following links:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://gatsby-theme-carbon.now.sh/components/Accordion"}),"Gatsby theme Carbon")," Components"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://www.carbondesignsystem.com/components/overview"}),"Carbon")," Components"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://www.gatsbyjs.org/tutorial/"}),"Gatsby")," Tutorial & Docs"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://daringfireball.net/projects/markdown/syntax"}),"Markdown"),", if you Google for ",Object(a.b)("inlineCode",{parentName:"li"},"Markdown")," you’ll find more")),Object(a.b)("p",null,"For every new page you create you have to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open ",Object(a.b)("inlineCode",{parentName:"li"},"src/data/nav-items.yaml")),Object(a.b)("li",{parentName:"ol"},"Locate your pattern title (i.e. ",Object(a.b)("inlineCode",{parentName:"li"},"Infrastructure as Code"),")"),Object(a.b)("li",{parentName:"ol"},"Add a new ",Object(a.b)("inlineCode",{parentName:"li"},"title")," and ",Object(a.b)("inlineCode",{parentName:"li"},"path")," under the ",Object(a.b)("inlineCode",{parentName:"li"},"pages")," section"),Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"title")," would be something like ",Object(a.b)("inlineCode",{parentName:"li"},"Content Overview")),Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"path")," is the relative path from ",Object(a.b)("inlineCode",{parentName:"li"},"src/pages")," to the new page. Example: ",Object(a.b)("inlineCode",{parentName:"li"},"/iac/content-overview")),Object(a.b)("li",{parentName:"ol"},"Create the directory on ",Object(a.b)("inlineCode",{parentName:"li"},"src/pages")," as specified in ",Object(a.b)("inlineCode",{parentName:"li"},"path"),". You can execute: ",Object(a.b)("inlineCode",{parentName:"li"},"mkdir -p ./src/pages/XYZ/content-overview"),", replace ",Object(a.b)("inlineCode",{parentName:"li"},"XYZ")," to your pattern dir name."),Object(a.b)("li",{parentName:"ol"},"Create the ",Object(a.b)("inlineCode",{parentName:"li"},"index.mdx")," page inside that directory or copy it from this one, something like this: ",Object(a.b)("inlineCode",{parentName:"li"},"cp ./src/pages/XYZ/content-overview/index.mdx ./src/pages/XYZ/ABC/"),", replace ",Object(a.b)("inlineCode",{parentName:"li"},"XYZ")," to your pattern dir name and ",Object(a.b)("inlineCode",{parentName:"li"},"ABC")," to your new page dir name."),Object(a.b)("li",{parentName:"ol"},"Modify the ",Object(a.b)("inlineCode",{parentName:"li"},"title"),", ",Object(a.b)("inlineCode",{parentName:"li"},"description")," and ",Object(a.b)("inlineCode",{parentName:"li"},"keyword")," inside the page metadata section in ",Object(a.b)("inlineCode",{parentName:"li"},"index.mdx"),". They are in the first 5 lines of the file."),Object(a.b)("li",{parentName:"ol"},"Modify the ",Object(a.b)("inlineCode",{parentName:"li"},"<PageDescription>")," section with something similar to the ",Object(a.b)("inlineCode",{parentName:"li"},"title")," field above."),Object(a.b)("li",{parentName:"ol"},"Update the ",Object(a.b)("inlineCode",{parentName:"li"},"<AnchorLinks>")," with the sub-titles in your pages. They must have the same text, otherwise the link won’t work."),Object(a.b)("li",{parentName:"ol"},"Feel free to refer to other pages in the site to reuse code, design patterns and structure"),Object(a.b)("li",{parentName:"ol"},"Add a link from the overview page (this page) to the new page using a tile. Go to IaC > Overview as an example.")),Object(a.b)("p",null,"To document a pattern, use the following guide or structure when applies:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Introduce the resource with an example"),Object(a.b)("li",{parentName:"ul"},"List all or the most important input parameters"),Object(a.b)("li",{parentName:"ul"},"List the most important output parameters if any or if they will be used"),Object(a.b)("li",{parentName:"ul"},"Provide instructions to get the value of the input parameters, either using ",Object(a.b)("inlineCode",{parentName:"li"},"ibmcloud"),", API or the Web console."),Object(a.b)("li",{parentName:"ul"},"Provide instructions to execute the code either with Terraform or Schematics, if applies, needed or required.")),Object(a.b)("p",null,"This pattern applies for IaC, it may not fit for your pattern but try to follow something similar when needed."),Object(a.b)("p",null,"To document your examples, use screenshots when using the IBM Cloud Web console. If possible provide code as Infrastructure as Code using Terraform or Schematics. Go to the IaC section for multiple examples, patterns and how to setup your environment to use it."),Object(a.b)("p",null,"The development workflow is as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Environment Setup: (",Object(a.b)("em",{parentName:"li"},"only when repo is clone"),") Execute ",Object(a.b)("inlineCode",{parentName:"li"},"npm install")," to download all the dependencies."),Object(a.b)("li",{parentName:"ol"},"Create a branch following this naming convention: ",Object(a.b)("inlineCode",{parentName:"li"},"docs/OWNER/issue_NN/NAME")," where:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"OWNER")," would be your name or nick name to identify you, could be the GH user if it’s short"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"NN")," is the issue number linked to this branch or the Pull Request"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"NAME")," is the name of the change, it could be the patter name or the page in the pattern"),Object(a.b)("li",{parentName:"ol"},"The command to create the branch is: ",Object(a.b)("inlineCode",{parentName:"li"},"git branch -b docs/OWNER/issue_NN/NAME")),Object(a.b)("li",{parentName:"ol"},"Check the branch you are working on with: ",Object(a.b)("inlineCode",{parentName:"li"},"git branch")))),Object(a.b)("li",{parentName:"ol"},"To view your changes, execute the following command in the root of the repo ",Object(a.b)("inlineCode",{parentName:"li"},"npm run dev"),", when you see ",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:8000/")," go to that page in a browser."),Object(a.b)("li",{parentName:"ol"},"Every change you do in your code will appear immediately in the browser page, there is no need to refresh."),Object(a.b)("li",{parentName:"ol"},"When happy with the changes push the changes. ",Object(a.b)("inlineCode",{parentName:"li"},"git add FILES"),", ",Object(a.b)("inlineCode",{parentName:"li"},"git commit -m 'DESCRIPTION'"),", ",Object(a.b)("inlineCode",{parentName:"li"},"git push")),Object(a.b)("li",{parentName:"ol"},"Create a Pull Request in the GitHub page with this new branch (this is a one time step)",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"IMPORTANT"),": make sure you the base repository is ",Object(a.b)("inlineCode",{parentName:"li"},"ibmcloud-pattern-guide")," and NOT ",Object(a.b)("inlineCode",{parentName:"li"},"ibm-gsi-cloud-native")))),Object(a.b)("li",{parentName:"ol"},"If you have to do more changes go to step #5 but there is no need to repeat step #6"),Object(a.b)("li",{parentName:"ol"},"When happy with the changes and ready for Peer Review, you can do one of the following options:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Provide instructions in the PR to checkout the branch, run Gatsby and view the changes in a browser. Ask a coworker/reviewer to follow those instructions to review your branch"),Object(a.b)("li",{parentName:"ol"},"Merge the changes into ",Object(a.b)("inlineCode",{parentName:"li"},"dev"),", TravisCI will generate the Web pages. You can ask a coworker/reviewer to review the changes there."))),Object(a.b)("li",{parentName:"ol"},"If there are more changes to do or fix, go to step #5 (there is no need to do step #6)"),Object(a.b)("li",{parentName:"ol"},"If everything is good, you can close the PR and delete the branch.")),Object(a.b)("p",null,"When the team is ready to merge from ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," to ",Object(a.b)("inlineCode",{parentName:"p"},"master")," it will be done by a team member. This could be done during or after the Sprint Review at the end of the Sprint."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IMPORTANT"),": Make sure to delete these instructions and guides before release the page to the ",Object(a.b)("inlineCode",{parentName:"p"},"master")," branch. Or, comment them out."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deploy-iks-deployment-scripts-index-mdx-a2a24167b3bcbd677ffc.js.map