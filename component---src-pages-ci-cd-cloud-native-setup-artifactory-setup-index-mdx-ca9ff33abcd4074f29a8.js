(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"T0C+":function(e,t,a){"use strict";a("91GP"),a("f3/d");var i=a("q1tI"),n=a.n(i),o=a("qKvR"),r={longName:"IBM Garage Cloud Native Toolkit",shortName:"Cloud Native Toolkit",env:"Developer Environment",ic:"IBM Cloud",ibmcloud:"IBM Cloud",iccli:"IBM Cloud CLI",kube:"Kubernetes",iks:"IBM Cloud Kubernetes Service",ocp:"Red Hat OpenShift",roks:"Red Hat OpenShift on IBM Cloud",method:"IBM Garage Method",template:"Code Pattern",templates:"Code Patterns",dashboard:"Developer Dashboard",igccli:"IGC CLI",cloudpaks:"IBM Cloud Paks"},c=function(e){var t=e.name;return Object(o.b)(n.a.Fragment,null,r[t])};c.get=function(e){return r[e]},c.set=function(e,t){r[e]=t},Object.assign(c,r),t.a=c},uFRA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),n=a("013z"),o=a("T0C+");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var c={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=p("PageDescription"),l=p("InlineNotification"),b=p("ArtDirection"),d={_frontmatter:c},m=n.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(m,r({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"Complete the steps for setting up the Artifactory tool")),Object(i.b)(l,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": An ",Object(i.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(i.b)("a",r({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/admin/plan-installation#roles"}),"Plan Installation > Roles")," for the overview of the roles involved.")),Object(i.b)("h2",null,"Overview"),Object(i.b)("p",null,"Artifactory is the ",Object(i.b)("a",r({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/guides/artifact-management"}),Object(i.b)(o.a,{name:"env",mdxType:"Globals"}),"’s artifact repository manager"),".\nBefore you can use it as part of the ",Object(i.b)("a",r({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/guides/continuous-integration"}),"continuous integration pipeline"),",\nit first must be configured as part of the environment."),Object(i.b)("h2",null,"Configuration"),Object(i.b)("p",null,"Set up Artifactory in the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})," with a Helm repository.\nAlso, set up the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})," to access Artifactory."),Object(i.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," The version of Artifactory that is installed into the cluster is\nnot configured for high availability. It is limited to the\nstorage size of your cluster. It is highly recommended you integrate your\npipelines with an enterprise grade Helm repository or artifact\nmanagement\nsystem.  ")),Object(i.b)("h3",null,"Set up Artifactory"),Object(i.b)("p",null,"Create a repository in Artifactory for storing Helm charts."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the Artifactory dashboard from the ",Object(i.b)("a",r({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/getting-started/dashboard"}),Object(i.b)(o.a,{name:"dashboard",mdxType:"Globals"}))," and login")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Log into Artifactory using the default userid and password, ",Object(i.b)("inlineCode",{parentName:"p"},"igc credentials")," can show these values. The first time\nyou log in the Welcome Page will prompt you to configure Artifactory using the Onboarding Wizard.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("strong",{parentName:"p"},"Get Started")),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB30lEQVQoz52SS2tTURSF7w9yoiMRzbMJ2A7UNjd9hLbaNxiDiIqdCHGgo1LakXSk1nmrA8EfIBRx4APTqFQjpq0B2xvjvTf3/Xly2iQVjI9uWOxzNnsv1jr7KLHTAzQQ7x4klFTpHZzCsm0aEQQB/xtKrPvPhP+KZr8iFQqyeM8QoYRK3/DhFDZ7FUmW6KcrOUC4RyU1PYnl2PtdYHs2plunLmC4hrg78my6Zivrot5WeEYoy04QyY4TUVOkLh8gFPFFL/N65w3F6juZP9Y+UdDWJd7uFnhf/UBZ32wTRs9lODGf4+TCJSJjKdTZiV8Idy2NUu0zW/q2RPnHJl/1ChWzwpaxjWZrtOxIy2qG6MURYjfOE832kb41juXuv6H0LA4NRybUay5VzcDQbRzLw3cCHNuTb25ZDr7vo3SpaRIjKsmcWM61XtTFaSyvrXCt8pz7xYfcKy5T2FmXNc8XZIEv8h58P5Bk0nJ8RizleoZEXii9nSZ9dxLbbRO+/PaK1dJjVkqP2Pi+IWsNso7/MDw/Q+TOBWJzY8QX+xlaGpab7TTYrHX6j8qppSzhhSlCD3Icf3KFs09nhWWnNbRnzWvZPEj2W4Wh/CjHVq9ydC3PkWc3ib6Yw/Kdjir+Fj8B/uY8t5qQBeUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/att-cloudnative/ibmcloud-pattern-guide/static/172c192d1918479d1859274b4c7f78fe/3cbba/1-jfrog.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/172c192d1918479d1859274b4c7f78fe/7fc1e/1-jfrog.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/172c192d1918479d1859274b4c7f78fe/a5df1/1-jfrog.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/172c192d1918479d1859274b4c7f78fe/3cbba/1-jfrog.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/172c192d1918479d1859274b4c7f78fe/0b124/1-jfrog.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/172c192d1918479d1859274b4c7f78fe/ee6ee/1-jfrog.png 2088w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The first step of the setup wizard is to change the default password. It is\nrecommend you use a password generated by a password manager. ",Object(i.b)("a",r({parentName:"p"},{href:"https://1password.com"}),"1Password\n")," is the tool IBM recommends to its employees."),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("p",{parentName:"li"}," ",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1005px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABcklEQVQ4y52SbU7CQBiEezFECBSKLR9ioQgaPhLjGfzhgUy8gfEQRv+rgVI0AkIJtHQ77m4LtkgbwyaTbDbZZ2feWUFUm0gXNSSlGlKyhiNRhVLtQh+OELdc1/0jtgSl0YNYbVFoA+mShkTuDPJpF8boE+PxFwaDAfr9PnRd3+4taxX5iCBVesiX2sgpl8gUmkhkKJA6NIwPrFYWJpNvqhmm0xnmc5OLndv2moJ/RQjxHJa0a+TLHYjKBaRyG+nCOQcOKZC9aC4WcNbOHyeEhLWNLKtXHMhghUoHSbHuAf0Z2rYNx3GoyPZS3FyFYt1zmDmh5UgNJLJq2KG5wHK5hEt84J4yQqVkadSs3OLAVF7jwGDLzB3xYZtLcU6FpFjDca7OFQRuIrP5BCHxoSmQQYLadei150b+vV1FAochYPTH3uwdl47GJf9zGFXAvnkeDGTn3D3lTawJHoxHPE9fDovMI9J/6fjAV/MNN0+3uHu/xw+pNV9QswRuPwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Reset Password",title:"Reset Password",src:"/att-cloudnative/ibmcloud-pattern-guide/static/144cf83a48b366e08a6c246d0bf918ec/0ba0f/2-resetpassword.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/144cf83a48b366e08a6c246d0bf918ec/7fc1e/2-resetpassword.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/144cf83a48b366e08a6c246d0bf918ec/a5df1/2-resetpassword.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/144cf83a48b366e08a6c246d0bf918ec/0ba0f/2-resetpassword.png 1005w"],sizes:"(max-width: 1005px) 100vw, 1005px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Save the password somewhere safe or in your password manager; you will need to\nmanually update the password in the  ",Object(i.b)("inlineCode",{parentName:"p"},"secret")," that is stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace/project\ncalled ",Object(i.b)("inlineCode",{parentName:"p"},"artifactory-access"),". There are more detailed instructions after you\nhave completed the setup wizard."))),Object(i.b)("p",null,"The next step is to define the base url that will be used by the server. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"From the browser you are currently using copy the ",Object(i.b)("inlineCode",{parentName:"p"},"URL")," from the address bar."),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABIElEQVQoz62Sy06DQBSG56mqLjSl0JYWuTQaBC0ajTE+hC5046K+iInP494VJnUniA4z88ttCAYtjfEkXw4hJx/zc4Zo9hxDc46xGWDinGCzb+PqZoG8OOcQQqCr5Ew+T4beETTHh2r4GGXijR0L17f3xUAYvmSEWC5fi2HORdXlc0nzo0R3A6gzD4rlQjMOS2F1wiiKEcfvSJIPUJq2ScsuhXkntnuJ6ewURsbu3hm2FKeOnCQJPin9Fq0LYuyfY2QFRVzdPkZv26yF6whaQtO9gJ4tI487mHhF5HopQqy1lGYRJZMMKtSpj15D+KcT9scuJP8iVPQDSH4Tdt3BGnQI5R1bRfsfrhTyHyX5e8YYUpaCUYaH50fcPS3wlkb4As2v5FUGCWXdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/att-cloudnative/ibmcloud-pattern-guide/static/57b6570fd198faa11ab380c6dfada830/3cbba/3-baseurl.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/57b6570fd198faa11ab380c6dfada830/7fc1e/3-baseurl.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/57b6570fd198faa11ab380c6dfada830/a5df1/3-baseurl.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/57b6570fd198faa11ab380c6dfada830/3cbba/3-baseurl.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/57b6570fd198faa11ab380c6dfada830/0b124/3-baseurl.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/57b6570fd198faa11ab380c6dfada830/9ae98/3-baseurl.png 2082w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Past the URL into the ",Object(i.b)("strong",{parentName:"p"},"Select Base URL")," form and remove any trailing\ncontext roots, similar to the one in this view."),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("p",{parentName:"li"}," ",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABSElEQVQoz52S207CQBCG961QLzifii0tmtAiJUhMTHwEvcBLNT6LiU/jA5ggNzU1QEG63f3dg1WJRouT/TrdzeTLzGZJ1fZRs3w0rAEMZ4jdooPz8TVkMMbElyNLcM5VPal5fVSdHipmD3Wrj52CjYvLG1U0nU4xmTwhCAJV/B2ukLI0SNMdoNrpoWy7qJlHWjjWwsUiQhQt8bpeI6YUlCYqp8i9RAu5WsR2z9ByRjDsIfYPRtgrdcTIWhi8PCOchZgv55hFkpn61yze0ftVvBI+DtI6PEG9PRDj+miKnMu3P4RxEoMyqvLviG6Z7pRY3VMYnWPUTR+Vlodc4VP49W6yBikbHiSlpouKsSlknCnpNpBio4sU1WF+s8OthbKzlJ9GzjK2nCThyd9C+daydLVxh/8RyvMkYeINUkCsu8d7XD3cIlyHeANfdOJKwtPYmAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/att-cloudnative/ibmcloud-pattern-guide/static/7b0f9f8ea40e638e35b4fd8d256d3598/3cbba/3-baseurl-complete.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/7b0f9f8ea40e638e35b4fd8d256d3598/7fc1e/3-baseurl-complete.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/7b0f9f8ea40e638e35b4fd8d256d3598/a5df1/3-baseurl-complete.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/7b0f9f8ea40e638e35b4fd8d256d3598/3cbba/3-baseurl-complete.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/7b0f9f8ea40e638e35b4fd8d256d3598/0b124/3-baseurl-complete.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/7b0f9f8ea40e638e35b4fd8d256d3598/d33b7/3-baseurl-complete.png 2076w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The next page in the wizard is the Configure a Proxy Server page. This is to\nsetup a proxy for external resources. You can click ",Object(i.b)("strong",{parentName:"p"},"Next")," to skip this\nstep."),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABWElEQVQoz32SW06DQBiF2VX1xd4spU0BS9TWFGnUxC3og8/2wbWYuBoX4AOQaMUa2zIMw3FmEEQs/OFkLmE+zvkZ5dCcoafPoI5saKaD/dYRbu7uISpJEhRLrOvEGIOiHjtQzXP09VR7EriQANf14Ps+PC8dl8sl33MRRRGqStGmc6iWzaE2OqMpGk0Dtz/A17cAQfAp9R6ssFp9YbMJQSKKiMagXBGfE0LlXAIN5xI96wzN0Qm6Yw5sG7nD9XojX2QsAY1jhCGRcxFNKI2ZKmuPMrSueFQHmuFgYM7ROPgFykOlXhZ7Vi6xpxiTawzGF1B1G91hGjkDEt6rcuPrSgI7gymE2tpEjkVgFazqL8vIrf4pMpUdbsMQMe9ddoAQ8me9EyicZfoXmZC8+ULiuhTXWbGEIU7SD9UCdzmocpbfwzpg0U1RIrZwTykF+PP48oTF8wMC8oFvAjnhyYCOGaEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/att-cloudnative/ibmcloud-pattern-guide/static/b568c150189a10c0137c612fdeb67ed8/3cbba/4-proxy.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/b568c150189a10c0137c612fdeb67ed8/7fc1e/4-proxy.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/b568c150189a10c0137c612fdeb67ed8/a5df1/4-proxy.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/b568c150189a10c0137c612fdeb67ed8/3cbba/4-proxy.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/b568c150189a10c0137c612fdeb67ed8/0b124/4-proxy.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/b568c150189a10c0137c612fdeb67ed8/87d20/4-proxy.png 2078w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The next page in the wizard is the Create Repositories page. Since the open source release of\nArtifactory doesn’t provide a package for Helm repositories, we will use a generic repository to hold the helm\nartifacts.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("strong",{parentName:"p"},"Generic"),", then press ",Object(i.b)("strong",{parentName:"p"},"Next")),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABpElEQVQoz32TS0/CUBCF+V8axRbl4bMaXkqUpSzcuvCfGZcmrly49rUhEIOhQFv7ur09ztzWhiIwycn0PvLdM5NpQd9vQ6+1sXtwgc3SGeoXPUgpsSriOM7yvDiiKEKhbFyiZnRRPelia7eugHwwGo0wGAyUhsMh+v0+fN/LQZc9Vtg77qBydAmt1sKGZqDRSYAzy4Y5mWFCMlP5fpBzJeV/lwnwkFySw+29Bjm8zkoWBA7DEDFlDt5PFGd3EnCyp4C60ULxqA7tpIkN/TTrIWs8HmM6nWL840LEDIhzJZu2AyGj3F6hYlyhdHiOnRoBNQJ2EiCX/fb2Ctv18DD4hhMGMK0vBMKHRY/EdOf+8Qkz207dp8DS/jn0ahtapbUAlLAsS5X84ziQtBZCJGdpFkGgwH/9VMBiuQGWVs0DWb7vw/O8ud6tUwrcqTTBWgTyqw45s6mkdXOpyqX+stTYLANyuRzskCOg0hjqum7mnLOagIWZXAGM1MWsZ7Sezwzib1YgArxa7/iwP5XLlSWv+yMYGIoQUkiY3gS95xvcvtzRCAn8AiUoNEOSUdRmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Select Repo Type",title:"Select Repo Type",src:"/att-cloudnative/ibmcloud-pattern-guide/static/25b90936408bd8860843b8c66e9b253e/3cbba/5-selectrepotype.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/25b90936408bd8860843b8c66e9b253e/7fc1e/5-selectrepotype.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/25b90936408bd8860843b8c66e9b253e/a5df1/5-selectrepotype.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/25b90936408bd8860843b8c66e9b253e/3cbba/5-selectrepotype.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/25b90936408bd8860843b8c66e9b253e/0b124/5-selectrepotype.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/25b90936408bd8860843b8c66e9b253e/671e2/5-selectrepotype.png 2072w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The next page in the wizard is the Onboarding Complete page. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("strong",{parentName:"p"},"Finish")),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABY0lEQVQoz52SS0/CQBSF+8N88GgLBUwB0SLy2sjGtQt/oxuXGmOCG+yGh5R2Ou1MjzMDEsAKxElO7iQz+eacuVfTKy3opRaMyi3OjAZqzh18P8ChlSTJluRijEEr1Lqw7B6Kdhfn5tUaOJ1MMBx+wHVdjEYjVRnjW4C0BzSz2lEwvdzCSb6OenOggL5PMB7PMJ3OMZ7MlDwvwGJBQEKKOGYIRfU8D5zzNVQz7DbMizasag+ZorN0GASgNAIhoapRFCuArJwvnXApAZIxN6Nrpt1BqdqHVevjVL9UwIAQ4dBXr1MaClj8Eyz17zb3mtFoIVtxkC/diMgC2Exvyi4oTQqYLTsi6jWyIu4ucPfyMZ3XMgUBKzjIWfuBxzssLh3+B4gEqwZxJeVQAqVyf0TeGxG/z1OBixVQjkWaM9l1NS5i/Egc4uXrFW/zdzDODjtME6UU0WqUPgMXg6d7PDw/wo99fAO7mzZ8IvUnygAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Setup Complete",title:"Setup Complete",src:"/att-cloudnative/ibmcloud-pattern-guide/static/a77a04de8b5f3da43762e4473f31c591/3cbba/5-createcomplete.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/a77a04de8b5f3da43762e4473f31c591/7fc1e/5-createcomplete.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/a77a04de8b5f3da43762e4473f31c591/a5df1/5-createcomplete.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/a77a04de8b5f3da43762e4473f31c591/3cbba/5-createcomplete.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/a77a04de8b5f3da43762e4473f31c591/0b124/5-createcomplete.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/a77a04de8b5f3da43762e4473f31c591/c0f60/5-createcomplete.png 2074w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("h3",null,"Allow Anonymous Access to Artifactory"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the Artifactory dashboard from the ",Object(i.b)("a",r({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/getting-started/dashboard"}),Object(i.b)(o.a,{name:"dashboard",mdxType:"Globals"}))," and login")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"Settings")," tab on the left menu (the one with the gear icon), and then select\n",Object(i.b)("strong",{parentName:"p"},"Security"),"\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABGElEQVQY05WPS0sCYRiFx1XrQCiCiJFWYqViYk0ZZVj4C6pVZBCtc9GVCFrVzwnTHIoWRX+kpDY1d8ZmnKe5LAwyogOHj/fwfg/vERLiFMmJPOLoJOtrVeTbe67qTa4bLVryHTd93GjKPDw+cXB0Rio9g1RcobhYoSAtI+R3F8htzyOWU9QuT9BUk+eXNu3XNxRNR9MN1D4OckXVeFfUnj8UhMyGxOxmiUQlxd7FIYFMywztOA7/lZBNL5HLlhDHMtRqp2FomRaG4UP917ZtOp0Onuf9acdxEQrFVabnyown8+wfn4dA3TD8CyOY67p0u93wQ6DfYIGCXWEwPkR8eIRYbICt6k5U2TT59OtGoF4d7/vAzzwAfgGRfpDk5fSQEQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Security Configuration",title:"Security Configuration",src:"/att-cloudnative/ibmcloud-pattern-guide/static/b732ce47a32934a5207a5e33dcb5b15a/3cbba/securitysettings.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/b732ce47a32934a5207a5e33dcb5b15a/7fc1e/securitysettings.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/b732ce47a32934a5207a5e33dcb5b15a/a5df1/securitysettings.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/b732ce47a32934a5207a5e33dcb5b15a/3cbba/securitysettings.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/b732ce47a32934a5207a5e33dcb5b15a/a3d24/securitysettings.png 1241w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check the ",Object(i.b)("inlineCode",{parentName:"p"},"Allow Anonymous Access")," check box and press ",Object(i.b)("strong",{parentName:"p"},"Save")))),Object(i.b)("h3",null,"Obtain the encrypted password"),Object(i.b)("p",null,"To enable the CI pipelines (",Object(i.b)("a",r({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/guides/continuous-integration"}),"Jenkins"),", ",Object(i.b)("a",r({parentName:"p"},{href:"/att-cloudnative/ibmcloud-pattern-guide/guides/continuous-integration-tekton"}),"Tekton"),", etc.)\nto store the Helm artifacts in the Artifactory repository, we need to obtain\nArtifactory’s encrypted password and save it where the pipeline can access the password — in the ",Object(i.b)("inlineCode",{parentName:"p"},"artifactory-access"),"\nKubernetes secret in the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace in the Development Tools environment."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the Artifactory console, press the ",Object(i.b)("strong",{parentName:"p"},"Welcome, admin")," menu button in the top right corner of the console and select ",Object(i.b)("strong",{parentName:"p"},"Edit profile"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the User Profile: admin page, enter you Artifactory password and press ",Object(i.b)("strong",{parentName:"p"},"Unlock")),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"601px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQoz62SPUsEMRCG89Os7Kyu8gcKlofgR2Uj/gqvUG69bWRvk83ka5O8TjZkucpT8IUnM8yECbwT0R16ND72Hb6GI1yYYX04i/F+pdWEJoMKYdIEYx3CHH9FjliJMXFthsg5wzkHz1hr4fm1UjtHygl61pBBQgWFkAKKREoJlYyW/zQocr9oTx2uXjbYvF7j4vkSN++3dSD+rLycFAkP/RPu+0dsP+/wNu3qwIE8jozzvAjH5jo2m+Mp9oRW83wf7N1CqvjiYS8NDiMvxDjIiSC1waio5sy4RLNSezUflGKmJZZNl98hinf/oebxN7cKbCzUay83AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"API Key",title:"API Key",src:"/att-cloudnative/ibmcloud-pattern-guide/static/13e529470af59505b57fc76d0586f5ab/577a7/jfrogapikey.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/13e529470af59505b57fc76d0586f5ab/7fc1e/jfrogapikey.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/13e529470af59505b57fc76d0586f5ab/a5df1/jfrogapikey.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/13e529470af59505b57fc76d0586f5ab/577a7/jfrogapikey.png 601w"],sizes:"(max-width: 601px) 100vw, 601px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("p",null,"Below, in the ",Object(i.b)("strong",{parentName:"p"},"Authentication Settings")," section, is the ",Object(i.b)("strong",{parentName:"p"},"Encrypted Password")," field."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press the ",Object(i.b)("strong",{parentName:"p"},"Eye")," icon to view the encrypted password and press the ",Object(i.b)("strong",{parentName:"p"},"Cut & Paste")," icon to copy it"),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"550px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuElEQVQoz5WRiQqEMAxE+/+fKYi3iPc9yyukqMiyG3iQtE0607p93zWOo6Zp0jzPIs7z1HEct/wNC84YjoFFUSjLMuV5rjRNfQ1JkqiqKg3DoL7vA13Xib44jhVFURhKOBKUofAKqhlEvq6rlmXxWI7Ctm3VNM1NpWNj27Ybdtu/ESzXde0tYq8sS1+bujdQj0p6EcBasIxCe5crrNH4Bpdh3WoEMDy84TcL/+x5y89vv/LLmz3PfwCY9XOdnlac2wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/att-cloudnative/ibmcloud-pattern-guide/static/a9126a60fc81ab00711dd5e2212845b5/50322/viewapikey.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/a9126a60fc81ab00711dd5e2212845b5/7fc1e/viewapikey.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/a9126a60fc81ab00711dd5e2212845b5/50322/viewapikey.png 550w"],sizes:"(max-width: 550px) 100vw, 550px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Now we have obtained the ",Object(i.b)("strong",{parentName:"p"},"Encrypt")," key and had kept a copy of the\nPassword we changed on the initial setup wizard. We need to update the\nsecrets that stores these inside the cluster."))),Object(i.b)("h3",null,"Update the OpenShift secret"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the OpenShift 4 Console then select the ",Object(i.b)("strong",{parentName:"p"},"Administrator")," menu. Select ",Object(i.b)("strong",{parentName:"p"},"Workloads\n")," then ",Object(i.b)("strong",{parentName:"p"},"Secrets"),". At the top select the ",Object(i.b)("inlineCode",{parentName:"p"},"tool")," namespace and narrow the selection to\n",Object(i.b)("inlineCode",{parentName:"p"},"artifactory-access")," then select the ",Object(i.b)("strong",{parentName:"p"},"Edit Secrets")," context menu on the right. You do\nnot need to base encode these values the OpenShift console does this for you.\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1006px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.09722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACeElEQVQ4y52S208TQRTGtzxJ0tAnMUiBtPSyhdZiAykXCVgsF6mtDQSJRh8UMSbG+FfwxAO3f9BoTHpju93d2d3ubj/nDGUjAV6c5JczczL7zTnfWWkiGkFmeBjL+Tym02mER0cRDocxODiIgYEBQSAQ8Pc+PBeg+CCIoVAIoaEhBINBSNFYHHJSRnYmh4ScwujYOBYWl3B2doajoyMcHx/j9PRUcHJy0oefKVL+/BwXFxc+UjqbQ35xGdncHCIxGcMjY6ju7OF/l5ScyiCZSmM8EkM0LuPR4zGUKlUwxlCv16EoisCyLNi2DYtj30G32xVI8vQT5GbzQoygCkvlKhynC13XfRHTNG9AD17HTqeDVqslzkIwlc5iIhrHZCLlC3qeh1qthkaj4dNsNv09iRAkQpVRB47jQCKxqcwMJiYTQpBa3i6/Fn6oqgrdMKBpmoAq1jRdRKOfp06uV6/Xg5Tg/snTGeFhJJbEw5EwXr6qiAtUJV26Dy4B03bBLIdHB67rQlp4toJCcUNMmYjzB/bfvqfn4PBW6MP7hGlppos2c9Hh0fV4hRvlHZSqe1heLWClUMTc/BIODr/CtmzuWUu0TYaTP0L8H0Hao18p+jmpUNwULa6urXPRNeTm5vHx4JALmtx0lUeLG27CMpmAMUNg+jAYuga13eZ/hAXpxfoWqrtvsFWq4DkXfTp7JWiYDn7+ruHXn/oNas026i0VqmZB1W10OG3NRKttQGf8PySx/XcfsLldFqJU6bfvP7gnQONSE5eVDoOiMhHNbg98Brfgs+Fe8paLm9uoVHdFddcefvr8BbYHKLoLlXmcXh8PiuHeyaV+NZi/GdxN6SR/E6cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/att-cloudnative/ibmcloud-pattern-guide/static/baf099ff7e1e093f55729f5d7260fd22/72da9/settingskeys.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/baf099ff7e1e093f55729f5d7260fd22/7fc1e/settingskeys.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/baf099ff7e1e093f55729f5d7260fd22/a5df1/settingskeys.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/baf099ff7e1e093f55729f5d7260fd22/72da9/settingskeys.png 1006w"],sizes:"(max-width: 1006px) 100vw, 1006px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Update the values that you retrieved for the encrypt key and updated the\nadmin password"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Update the ",Object(i.b)("inlineCode",{parentName:"li"},"ARTIFACTORY_ENCRYPT")," value with your encrypt key value"),Object(i.b)("li",{parentName:"ul"},"Update the ",Object(i.b)("inlineCode",{parentName:"li"},"ARTIFACTORY_PASSWORD")," value with thew new admin password"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Save")," in OpenShift Console ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"View the secret in the console and confirm that the visible value of ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT")," matches the encrypted password shown in the Artifactory console")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can check the values were updated correctly by running ",Object(i.b)("inlineCode",{parentName:"p"},"igc credentials")," from the command line"))),Object(i.b)("h3",null,"Kubernetes and OpenShift 3"),Object(i.b)("p",null,"To update the secret in Kuberentes or Openshift 3 navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"secret")," called ",Object(i.b)("inlineCode",{parentName:"p"},"artifactory-access"),"\nin the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace and update the following values. You will need encode these value in base64 key before\nediting the secret."),Object(i.b)("p",null,Object(i.b)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually"}),"Kubernetes secrets"),"\nstore data in base64 format. So to store Artifactory’s encrypted password in a secret, it needs to be encoded into\nbase64."),Object(i.b)("p",null,"Any base64 encoding tool will work. For example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to the ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.base64encode.org/"}),"Base64 Encode")," website")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Paste the encrypted password into the online tool and press the ",Object(i.b)("strong",{parentName:"p"},"Encode")," button")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the field below, copy the encoded value into you clipboard or store it somewhere safe")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find the ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRYPT")," value (under ",Object(i.b)("inlineCode",{parentName:"p"},"data"),") and paste in the Artifactory base64 key into the field")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find the ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_PASSWORD")," value (under ",Object(i.b)("inlineCode",{parentName:"p"},"data"),") and paste in the"))),Object(i.b)("h2",null,"Rerun the Pipeline"),Object(i.b)("p",null,"Previously, when you deployed you first app, the pipeline’s Package Helm Chart stage didn’t store the chart because\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRYPT")," property was not set. Now that it has been set, rerun your pipeline and check that the Helm\nchart for your app is stored correctly in Artifactory with matching semantic version information."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the Artifactory console, select the Artifacts page and expand the ",Object(i.b)("inlineCode",{parentName:"p"},"generic-local")," repository"),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABW0lEQVQoz41Qy0rDQBTNF7kSBUGhVFyoWBARty5qq0KluhEX7gSXfoMI/oJ9i78iVGybZJLpZCbJJMe5Y6MLW/DC4b7PPTPO0vIadvcPUSrvYHvvCJWDY9zdP6DXf8VLq4tOd4B2p4+WQXsGilvtHvqDNzw+PWNzq4LV9TJWNkpwmte38IMQ78MhPscTBHyKcCoQhBxBwOF5DNzkIpJzwWezPgvADI/TuLpBrDOMfQahYsRZDplqyCSFSASYYtC5xn8syzI49fNLaBNwzpGmKfI8t6CmVBKJTmyuzZEkSeYTmf7EiJGm79TOmrZQEJJZQoMoiqCksjXqe54HpRSklL/ezPjTCL0P17zIEFbrF0i1BmMMcRxbsm/5uc1pkYzIiaCokS/iQrk2PM7J6YUtjEajH5UFaEEIYQcpJ7/ISEhqvsWp1hq2QNfDMLRK7FMNGR1wXffPdywCEX4BfnBMl/B0Y7UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/att-cloudnative/ibmcloud-pattern-guide/static/198eae5ba5dc1fb394205d3f2167cd39/3cbba/artifact-repo-browser.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/198eae5ba5dc1fb394205d3f2167cd39/7fc1e/artifact-repo-browser.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/198eae5ba5dc1fb394205d3f2167cd39/a5df1/artifact-repo-browser.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/198eae5ba5dc1fb394205d3f2167cd39/3cbba/artifact-repo-browser.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/198eae5ba5dc1fb394205d3f2167cd39/46052/artifact-repo-browser.png 1382w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("p",null,"You will see a folder named after your resource group containing the tar file for a Helm chart."),Object(i.b)("h2",null,"Conclusion"),Object(i.b)("p",null,"Artifactory is now set up in your ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})," and CI pipelines can\nstore Helm charts in Artifactory repository. Artifactory can now be used as a\nHelm repository for CD tools like ArgoCD and IBM Cloud Pak for Multi\nCloud\nManagement."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ci-cd-cloud-native-setup-artifactory-setup-index-mdx-ca9ff33abcd4074f29a8.js.map