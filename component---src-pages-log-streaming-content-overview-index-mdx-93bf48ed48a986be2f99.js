(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"R3+6":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),n=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},r=s("PageDescription"),d=s("AnchorLinks"),l=s("AnchorLink"),p=s("InlineNotification"),g={_frontmatter:c},b=n.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(b,o({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r,{mdxType:"PageDescription"},Object(i.b)("p",null,"What is LogDNA Streaming? ")),Object(i.b)("p",null,"Streaming enables LogDNA to produce content to a message bus queue and Topic. LogDNA streaming helps you to connect third party consumers of topics to ingest into dashboards for visualization of event log data. "),Object(i.b)("p",null,"Third party horizonal technologies such as Splunk, used in organizations for application management, security and compliance are able to leverage IBM Cloud Log Analysis with LogDNA Streaming."),Object(i.b)("p",null,"The content in this pattern, we’ll walk through setting up a sample event stream by utilizing IBM Cloud Event Streams and LogDNA Streaming, to produce events to a topic for a simple consumer application to ingest. "),Object(i.b)("p",null,"IBM Cloud Event Streams is a high-through put message bus built with Kafka, see ",Object(i.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/EventStreams?topic=EventStreams-about"}),"What is Event Streams")," and ",Object(i.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/EventStreams?topic=EventStreams-plan_choose"}),"Choosing Your Plan")),Object(i.b)(d,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(l,{mdxType:"AnchorLink"},"Create IBM Event Streams Instance"),Object(i.b)(l,{mdxType:"AnchorLink"},"Setup Event Streams Demo"),Object(i.b)(l,{mdxType:"AnchorLink"},"Configure LogDNA Streaming"),Object(i.b)(l,{mdxType:"AnchorLink"},"Start LogDNA Streaming to Consumer")),Object(i.b)(p,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Please Note:")," The functionality of connecting LogDNA to Event Streams is currently available as an ",Object(i.b)("inlineCode",{parentName:"p"},"Early Access")," only.  You will need approval from IBM to have it enabled for a specific instance of LogDNA.")),Object(i.b)("h2",null,"Create IBM Event Streams Instance"),Object(i.b)("p",null,"You’ll need to use a previous LogDNA instance or create a new one, see ",Object(i.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/Activity-Tracker-with-LogDNA?topic=Activity-Tracker-with-LogDNA-provision"}),"Provisioning an Instance")),Object(i.b)("p",null,"For the demo, an IBM Cloud Event Streams instance is required. Log into IBM Cloud > services and create your Event Streams instance, see ",Object(i.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/EventStreams?topic=EventStreams-connecting#provision_instance"}),"Provision Event Streams Instance")),Object(i.b)("p",null,"Once your IBM Event Stream instance is setup, create a ",Object(i.b)("strong",{parentName:"p"},"Service Credential")," account and then expand it to show the username, password (apikey) and kafka_brokers_sasl, similar to the screen shown below."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQoz32SSXKDMBBFuf91coOssssiWXrjGIElMQmQzfzTX8Q4HspUPRpVNU/9BZGxOYwxMFrDWIOsrFE3DZontG37gPet9K/1JEQqjoOwLEvs9wekxyOyzMLaK1mWBYqiCH33FKXD+7fH506EbHLOoawqxCpBkqbI83yTEKUUkiRZk9xhBW1yvH2I9Msh8t6H0c/ns4zs4UTMDQhjDsOArutCXZYF8zxvcL1AroV30iO6nA9f0rbAT6Kh5TwZlXHqug4bjuOIaZpCJdyA0tUXtOKRyGymsBdh5WocVAot58jYlDIWY7+6LkIOtQlD5JP/+3LXyqa+72+iPoNSTr0KH34Ff/P8f/0KDvYLkIFminCcWo4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Service Credential",title:"Service Credential",src:"/att-cloudnative/ibmcloud-pattern-guide/static/874e68d6afb22fc361ffb371ec4ec1ef/3cbba/servicecredential1.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/874e68d6afb22fc361ffb371ec4ec1ef/7fc1e/servicecredential1.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/874e68d6afb22fc361ffb371ec4ec1ef/a5df1/servicecredential1.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/874e68d6afb22fc361ffb371ec4ec1ef/3cbba/servicecredential1.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/874e68d6afb22fc361ffb371ec4ec1ef/0b124/servicecredential1.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/874e68d6afb22fc361ffb371ec4ec1ef/743a9/servicecredential1.png 1911w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Make a copy of the Service Credential username, password and Kafka_brokers_sasl URL"),". "),Object(i.b)("h2",null,"Setup Event Streams Demo"),Object(i.b)("p",null,"You’ll need to setup a sample ",Object(i.b)("strong",{parentName:"p"},"Topic"),", ",Object(i.b)("strong",{parentName:"p"},"Producer")," and ",Object(i.b)("strong",{parentName:"p"},"Consumer"),", see ",Object(i.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/EventStreams?topic=EventStreams-getting_started"}),"Getting Started Tutorial"),"."),Object(i.b)("p",null,"For this demo, choose the ",Object(i.b)("strong",{parentName:"p"},"kafka-java-console-sample")," from the Git Hub repo, ",Object(i.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-messaging/event-streams-samples"}),"event-streams-samples"),"."),Object(i.b)("p",null,"Make sure to create the sample topic ”",Object(i.b)("strong",{parentName:"p"},"kafka-java-console-sample-topic"),"” in your IBM Cloud Event Streams instance, similar to the screen shown below."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAtklEQVQY052NXVKDUAyFWX3b4UEuIrgiZ1yAbqFO/aHlJnADpX4GWl98NDNnviRncpLlec52s2G323JXlDTNo6uhrus/elhZVRUhBMqyvPGewu+KsDCQmRm/9c3/Ks1gl2ufvR8OdF2kPQlfx4gORp9GOk20nTqN2BufR/G59949SXy0kZMMJJt4fn3j6WWPiJCpKqr9ehQ9RIeRNM6uswdPK83nZb/Ibp7448Gu/nSesWlGPOcHDKUffV1BLcsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Topic",title:"Topic",src:"/att-cloudnative/ibmcloud-pattern-guide/static/9dd2c5b5a80dd68a917870fe2440d0b0/3cbba/topic.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/9dd2c5b5a80dd68a917870fe2440d0b0/7fc1e/topic.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd2c5b5a80dd68a917870fe2440d0b0/a5df1/topic.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd2c5b5a80dd68a917870fe2440d0b0/3cbba/topic.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd2c5b5a80dd68a917870fe2440d0b0/0b124/topic.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd2c5b5a80dd68a917870fe2440d0b0/210a0/topic.png 1912w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Once your ",Object(i.b)("strong",{parentName:"p"},"Producer")," is up and running with the ",Object(i.b)("strong",{parentName:"p"},"kafka-java-console-sample-topic"),", you should see a screen similar to the one shown below."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.06944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA5klEQVQoz4WQ2YqEQAxFywVExX3fRf9B8K1xRq3//6F030DJyDTdD4ebSiW3khLyeND2+0PyPElKScdx0L7vDGKwbRufz1cNFHXQdV1vLMtCIi9KCoKAkiShMAzJtm3GcRxyXZdjy7KuPHKe5zFCiP/M80xN09A4jkzf99S2Lee6rrvFuPN9n82gpmmSpmmk6/qlAiZFUXDjMAzcnGUZa13XDGLcAzS+nUyBV2GARjVNmqZUliVVVXWpMjcM47MhVkYhjKdp4rVhgLNaE6gv+WqIpjiOKc9zngYaRRFP/RfkAf/TB8MnGaWwpHld/eYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Producer",title:"Producer",src:"/att-cloudnative/ibmcloud-pattern-guide/static/9dd4d13a6869359d046864dfc95522e5/3cbba/producer.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/9dd4d13a6869359d046864dfc95522e5/7fc1e/producer.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd4d13a6869359d046864dfc95522e5/a5df1/producer.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd4d13a6869359d046864dfc95522e5/3cbba/producer.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd4d13a6869359d046864dfc95522e5/0b124/producer.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd4d13a6869359d046864dfc95522e5/4ea69/producer.png 2304w","/att-cloudnative/ibmcloud-pattern-guide/static/9dd4d13a6869359d046864dfc95522e5/19a13/producer.png 2512w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"After you’ve completed the ",Object(i.b)("strong",{parentName:"p"},"Getting started Tutorial"),", you should now have a ",Object(i.b)("strong",{parentName:"p"},"Consumer")," running as well, similar to the screen shown below. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA90lEQVQoz1WRR27FMAxEff/TZeG4997bxja8YP4joA9HwICERA6HI+vX/hHX98V1HPE8T1zXFeeTx3EseZ5LFEUSBIGCvO97Rdd1MgyDLMui2LZNjuMQy7ZtbfY/pGEYahMghwTStm2lqippmkbO81Tc9y3XdWkEz/MIx4IsyzJtTtNUkiTRAXVdK1lZlkpGLIpCc2rGcZRpmlTdvu9fWCihgDWNMgABAwD3DGEoEVtYGdJ5nnVdA4tiFOIfzTS8FQLeAYPNNvj4JvwqhJBCCCEyHrLam8goJeK3IWTtfwrNVIqIxkc+AM+AUco9EUuMunVd9XcN/gA0pwEAEDZPmQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Consumer",title:"Consumer",src:"/att-cloudnative/ibmcloud-pattern-guide/static/c8ad97133734afd2307c867a06f61a03/3cbba/consumer.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/c8ad97133734afd2307c867a06f61a03/7fc1e/consumer.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/c8ad97133734afd2307c867a06f61a03/a5df1/consumer.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/c8ad97133734afd2307c867a06f61a03/3cbba/consumer.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/c8ad97133734afd2307c867a06f61a03/db203/consumer.png 1580w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"Configure LogDNA Streaming"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," You’ll need an instance of LogDNA, see ",Object(i.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/Activity-Tracker-with-LogDNA?topic=Activity-Tracker-with-LogDNA-provision"}),"Provisioning an Instance")),Object(i.b)("p",null,"Lets get started by following the steps below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Login to IBM Cloud, then go to > Observability > logging, and choose your instance of LogDNA. "),Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("strong",{parentName:"li"},"View LogDNA")," "),Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("strong",{parentName:"li"},"Settings")," gear icon and choose Streaming.")),Object(i.b)(p,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," You may need to contact IBM Cloud support to have your LogDNA instance whitelisted, for Streaming to show up in the ",Object(i.b)("strong",{parentName:"p"},"Settings")," menu selection.")),Object(i.b)("p",null,"If your LogDNA Streaming has been whitelisted, you should see a screen similar to the one shown below. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABCUlEQVQoz5WSfW6EIBDFMekJunfQ/d/7X6IHaLvdVte6Cgoq4McrTLsbNa5JTV6E4fFjBoYdDs+I4xhSKdi+h9YGxlj6SymhmgZdp8E5R85rtC6uSdr5zEwWnYsx9yGMIuTXAlUtwUUFUdUoucDr2ztOH2d8JSmSNEN6uSBxYz/PvnPyrcWCIEAUHXEtStRSUdCDvYQQlN2vOrT3saYMyTPze7EnFiAMwwXwZrLWYhzHTQ3DsA2kkh8AW9UQ1G9eq98DRu4Ot4DaaPQPgMM+8EiPcgf6ReFe9OWE0fQYp2lR7vQ3381wDrwZy8/MtY5yrdNS+yzkruPfwKISm60x1xq6XfLq1D2tvT+yds18fE1QGgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"LogDNA Streaming",title:"LogDNA Streaming",src:"/att-cloudnative/ibmcloud-pattern-guide/static/6f34e7a5020f2bfe7a1708a13a24e9df/3cbba/eventstreams2.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/6f34e7a5020f2bfe7a1708a13a24e9df/7fc1e/eventstreams2.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/6f34e7a5020f2bfe7a1708a13a24e9df/a5df1/eventstreams2.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/6f34e7a5020f2bfe7a1708a13a24e9df/3cbba/eventstreams2.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/6f34e7a5020f2bfe7a1708a13a24e9df/0b124/eventstreams2.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/6f34e7a5020f2bfe7a1708a13a24e9df/d29ac/eventstreams2.png 1874w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," To configure LogDNA Streaming, follow the instructions below:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Obtain the IBM Cloud Event Streams Service Credential, ",Object(i.b)("strong",{parentName:"li"},"username"),", ",Object(i.b)("strong",{parentName:"li"},"password")," and ",Object(i.b)("strong",{parentName:"li"},"Kafka_brokers_sasl")," URL."),Object(i.b)("li",{parentName:"ol"},"Configure the Event Streams ",Object(i.b)("strong",{parentName:"li"},"Service Credential")," information in the ",Object(i.b)("strong",{parentName:"li"},"LogDNA Streaming")," fields."),Object(i.b)("li",{parentName:"ol"},"Click Save."),Object(i.b)("li",{parentName:"ol"},"Next, you’ll need to stop the ",Object(i.b)("strong",{parentName:"li"},"Producer")," from producing events. "),Object(i.b)("li",{parentName:"ol"},"Stop the ",Object(i.b)("strong",{parentName:"li"},"Producer")," by typing in the command ",Object(i.b)("strong",{parentName:"li"},"Cntrl"),"+",Object(i.b)("strong",{parentName:"li"},"C"),"."),Object(i.b)("li",{parentName:"ol"},"Now bring up the ",Object(i.b)("strong",{parentName:"li"},"Consumer")," terminal window, notice the constant, ",Object(i.b)("strong",{parentName:"li"},"INFO No messages consumed")," text, similar to the screen shown below.")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQoz42R2QqEMAxF+/9/Jy51X1EQ3BB9NeMJ08GHGZjCJUuT25vUxNYXmyQS+L7EcSxRFCnyPJfkzgPyWGut+kEQSFVVirqupes66ftehmEQk92NZVlqcVEUCsgooLhpGrWAO2ohnaZJlmWRdV1l3/cPDAU0pWmqLxLTyGtt2+qdU0Mei9pxHJV0nmfZtu0DwyWKwjBUm2WZAiJiSFELnI/ap7LjOOQ8T4VhVAry9+huL/jskkbOdV3yPMTfYPz7MyBzi2d0FOJ7nqcjfSP8dQxETqFT5/aG+qfCf/ACHrkHU6mERaYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Consumer",title:"Consumer",src:"/att-cloudnative/ibmcloud-pattern-guide/static/139af3ac0d58578c1f95d9ee9fc538fc/3cbba/producer_stopped.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/139af3ac0d58578c1f95d9ee9fc538fc/7fc1e/producer_stopped.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/139af3ac0d58578c1f95d9ee9fc538fc/a5df1/producer_stopped.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/139af3ac0d58578c1f95d9ee9fc538fc/3cbba/producer_stopped.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/139af3ac0d58578c1f95d9ee9fc538fc/db203/producer_stopped.png 1580w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"Start LogDNA Streaming to Consumer"),Object(i.b)("p",null,"Let’s go a head and start LogDNA Streaming, you may see a notice from LogDNA Streaming asking if you’ve received the sample messages similar to the screen shown below, click yes."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbklEQVQoz5WSy0oDMRSG05aCfYApKG7Vx22tYH0K965cK4JCN67Ugu3MMJdkksythf6eEztaHRc18DMnk5Pv3CI8z0On08HldApeeZ6jqmrU9QqWbJVlKMoSxlhESYrUFHRWo6wq8iORvSsxHHro9/uYTC4cMKZLUmlk2sAPQry+zbFY+lj6AQLa+/RdLAO3T1JJAfUPibOTUxwfHlGGVw7YOGnOKE6c2DY2/9Z2z//Zl4M3EoODAYQQGJ9PvoCZbpw0oihCHMfQZLNKKn+9Xjtx2S0g94+Bo9F4B2ico7EWGfWQ+2rJNsY4m8V95F63gL1e7xM4/gWkPpZ0iReD0jR1cM5SKYWiKNwQWsBut9vOkBtMh1ZmkGEES8AVZbPZbLC76n8BucR5iJf7GZKKBlBXkBRAKQpC4oA5ZbkXsJlySAO5e3rE8/UtgpsHSCrXSO3AmqacF+X+QD5kOwhDyPcQ1o/dA2dIsZX549l8AGBOu/1xajovAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Samples",title:"Samples",src:"/att-cloudnative/ibmcloud-pattern-guide/static/b22467e5af50aebc17864f6b34dd5292/3cbba/sample_logs.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/b22467e5af50aebc17864f6b34dd5292/7fc1e/sample_logs.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/b22467e5af50aebc17864f6b34dd5292/a5df1/sample_logs.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/b22467e5af50aebc17864f6b34dd5292/3cbba/sample_logs.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/b22467e5af50aebc17864f6b34dd5292/0b124/sample_logs.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/b22467e5af50aebc17864f6b34dd5292/4ea69/sample_logs.png 2304w","/att-cloudnative/ibmcloud-pattern-guide/static/b22467e5af50aebc17864f6b34dd5292/b3b78/sample_logs.png 3224w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Add in an email recipient and then click start streaming, similar to the screen shown below. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABfklEQVQoz32SS2vbQBSFZRLSlQ0G0zxMd13FMv7/v6FdtNBmlzSB0tqyNO/xzEhKTu/cVIlN3EocDhrmfvel4uP8A87enWG1WmEXAlJKCDEixgQfA3RwJA9hFX41NWrv4NIOJvqXe4Pyd3F+eYHRaIRyuYSQCkobSKXZN6LGz2aNygrI6GBaD0Uuo31283xXcozhmGJ+NcfpyQkWi5IPtLHsitw5jy61MFpDNAJKSJYkPfY9/G73EjOouHh/jqIoCLjgbAMwZw0h4oleKSWapoEQgj2r6zo4fwQ4m8245WsCHlRIstbxTK21MCYnCDSryJ6Bljp4A5xMJlxhWZYHFWY3pG1VwXuPRKBBbdsiP84fAY7H46PALG7JaN5+T4CsR5Khir99v3lTwP+BeSm09Z4W0NN5+r2G/fwJXd0gbGtsb++g85IyaB/4r5YZWAu06wpxvYH7cQ/95Svc/QPSpsITge0x4HQ6ZeCS/sODFv5C1V4CzVt9HckAU3sz/ANu5bD8NkR3VgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Streaming Configuration",title:"Streaming Configuration",src:"/att-cloudnative/ibmcloud-pattern-guide/static/5cd1a1c04e12c498f1f488a656f28dd6/3cbba/streaming_configured.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/5cd1a1c04e12c498f1f488a656f28dd6/7fc1e/streaming_configured.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/5cd1a1c04e12c498f1f488a656f28dd6/a5df1/streaming_configured.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/5cd1a1c04e12c498f1f488a656f28dd6/3cbba/streaming_configured.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/5cd1a1c04e12c498f1f488a656f28dd6/0b124/streaming_configured.png 1728w","/att-cloudnative/ibmcloud-pattern-guide/static/5cd1a1c04e12c498f1f488a656f28dd6/369ed/streaming_configured.png 1916w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"LogDNA should now have been successfully configured. If you have a ",Object(i.b)("strong",{parentName:"p"},"Kubernetes cluster"),",",Object(i.b)("strong",{parentName:"p"},"VSI")," or any other services configured with LogDNA enabled, you should see activity in the ",Object(i.b)("strong",{parentName:"p"},"Consumer")," terminal, similar to the screen shown below. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA20lEQVQoz5WRWW6DYAyE//sfrqJJ2PcdiZ0LuP1cGSWPRRrNGI0H27jn80v8MBTf9yX85SAIbvY8T9q2leM4ZN/3D2zbdjPAA9zr9ZI8zyVJEknTVLIs0xr9/Xio6T+PI6gsSw0oikI1XFWVxHEs4zjKdV33ROd5fmgDHtjZVFEUKZsmmEBAzRnQ+NmKkzRNI13XKfq+V3asxzQYDTTa1HBd1+oBaHtPyLIs9x3Xdf0LxGTMV2HM7zUghBo2cJJpmpT5gY6XwzBoAwwIm+dZNUZgq9FM4/uq5iHjB91MAlgx5f0uAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"LogDNA Streaming Started",title:"LogDNA Streaming Started",src:"/att-cloudnative/ibmcloud-pattern-guide/static/24ad9bc4110dae726a547d3e2bf7982c/3cbba/logdna_streaming_start.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/24ad9bc4110dae726a547d3e2bf7982c/7fc1e/logdna_streaming_start.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/24ad9bc4110dae726a547d3e2bf7982c/a5df1/logdna_streaming_start.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/24ad9bc4110dae726a547d3e2bf7982c/3cbba/logdna_streaming_start.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/24ad9bc4110dae726a547d3e2bf7982c/12909/logdna_streaming_start.png 1579w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"LogDNA ",Object(i.b)("strong",{parentName:"p"},"Streaming")," is active, similar to the screen shown below. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA90lEQVQozz2Ra3LEIAyDc//bdSYhCYG83226R9DysXV/aISxsGVTNE0p1zQqy1J1XWc459S2beaqqtR1nUIImQG5Jr2JMWqaJs3zrH1b9eWCimEYUrDlxLqu2tIZvq4rn/d913EcmYnP89SyLP867rn7vi9Vba9iHMd8SZKHBgrCiGErQAwbrOF9nar9oALbiLENG3hoDq2hNUWLS2AO7+TQx/EzMgIKwzhmfITEgBgdOeC9V9/3qcit53n+8KN53VWwZJIsmcWzcO4oREwj+wgKceaj0DOBrSU77OLHIaNQFCfG5pAcjM5+lCY0Y2R2DX5fL/Wh0xtho/13kCdTrgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Consumer Recevied LogDNA Streams",title:"Consumer Recevied LogDNA Streams",src:"/att-cloudnative/ibmcloud-pattern-guide/static/0f87197d0af1c88b4096325f8f54704a/3cbba/consumer_logdna_activity.png",srcSet:["/att-cloudnative/ibmcloud-pattern-guide/static/0f87197d0af1c88b4096325f8f54704a/7fc1e/consumer_logdna_activity.png 288w","/att-cloudnative/ibmcloud-pattern-guide/static/0f87197d0af1c88b4096325f8f54704a/a5df1/consumer_logdna_activity.png 576w","/att-cloudnative/ibmcloud-pattern-guide/static/0f87197d0af1c88b4096325f8f54704a/3cbba/consumer_logdna_activity.png 1152w","/att-cloudnative/ibmcloud-pattern-guide/static/0f87197d0af1c88b4096325f8f54704a/30cc3/consumer_logdna_activity.png 1583w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)(p,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The Consumer is now consuming an event log topic, that LogDNA Streaming is sending to the IBM Cloud Event Streams message bus"),". ")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-log-streaming-content-overview-index-mdx-93bf48ed48a986be2f99.js.map