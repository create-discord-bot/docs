"use strict";(self.webpackChunkcreate_discord_bot=self.webpackChunkcreate_discord_bot||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,slug:"/"},l="Introduction",i={unversionedId:"intro",id:"intro",title:"Introduction",description:"Get up and running in less than 10 minutes!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/create-discord-bot/create-discord-bot.github.io/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Basics",permalink:"/docs/category/basics"}},s={},d=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Generate a new project",id:"generate-a-new-project",level:2},{value:"Complete the Setup",id:"complete-the-setup",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Get up and running in ",(0,r.kt)("strong",{parentName:"p"},"less than 10 minutes!")),(0,r.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When installing Node.js, we recommended checking all checkboxes related to dependencies."))),(0,r.kt)("li",{parentName:"ul"},"Basic Javascript and NodeJS knowledge.")),(0,r.kt)("h2",{id:"generate-a-new-project"},"Generate a new project"),(0,r.kt)("p",null,"Generate a new Discord bot using the ",(0,r.kt)("strong",{parentName:"p"},"create-discord-bot CLI tool"),"."),(0,r.kt)("p",null,"It will be automatically generated when you run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @flzyy/discord-bot@latest\n")),(0,r.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,r.kt)("p",null,"It should ask you a few questions; answer them, and we can proceed. You can also add ","[command line arguments]","(basics/command-line arguments) to skip some questions or be able to skip them all."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Where would you like to create the discord bot ?\n# This is where you want to put the files for your Discord bot. (./ by default)\n\n? What language do you want to use ? #(Use arrow keys)\n\u276f Typescript # Recommended, similar to Javascript, gives you type safety and intellisense.\n\u276f Javascript # Default Javascript.\n\n? What type of logging do you want to use ? #(Use arrow keys)\n\u276f Default # Default console.log/error/info/warn\n\u276f Pino # Recommended: low overhead, nicely formatted.\n\n? What deployment method(s) do you want to use ? #(Press space to select, a to toggle, i to invert selection and enter to proceed)\n\u25c9 Global # Will add global command deployment.\n\u25ef Guild # Will add guild-only command deployment.\n\n? Do you want to enable ESLint ? #(y/n)\n# Recommended, points out errors and bad practices in your code.\n\n? Do you want to enable Prettier ? #(y/n)\n# Recommended, formats your code and makes it generally more readable.\n\n# ...\n\n? Would you like to install dependencies now ?\n\u276f npm\n\u276f yarn\n\u276f pnpm\n\u276f No\n")),(0,r.kt)("h2",{id:"complete-the-setup"},"Complete the Setup"),(0,r.kt)("p",null,"First, ",(0,r.kt)("code",null,"cd")," into the folder you created (Not needed if you made it in the root directory)."),(0,r.kt)("p",null,"If you chose not to install dependencies now in the CLI tool, run the following command to install dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install # or pnpm/yarn\n")),(0,r.kt)("admonition",{title:"Important!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't already ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://discordjs.guide/preparations/setting-up-a-bot-application.html"},"created a discord bot application")),", follow the linked guide and get your Bot's Token and Client ID.")),(0,r.kt)("p",null,"Once you've done that, open the newly created ",(0,r.kt)("code",null,".env")," file; in it, you should see the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'DISCORD_TOKEN="YOUR TOKEN HERE"\nCLIENT_ID="YOUR CLIENT ID HERE"\nGUILD_ID="YOUR GUILD ID HERE"\n')),(0,r.kt)("p",null,"Paste your Token and Client ID accordingly. And you should only need to fill in ",(0,r.kt)("code",null,"GUILD_ID")," if you\nwant to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/options/deployment"},"guild only deployments"),"."),(0,r.kt)("p",null,"Now, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,r.kt)("p",null,"And you should now see that your bot is online! You might also know that it has the command ",(0,r.kt)("code",null,"/ping"),"; run it, and if it replies, your bot is working correctly!"))}u.isMDXComponent=!0}}]);