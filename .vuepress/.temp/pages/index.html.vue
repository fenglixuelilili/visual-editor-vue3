<template><div><h1 id="vue-3-typescript-vite" tabindex="-1"><a class="header-anchor" href="#vue-3-typescript-vite" aria-hidden="true">#</a> Vue 3 + TypeScript + Vite</h1>
<p>This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 <code v-pre>&lt;script setup&gt;</code> SFCs, check out the <a href="https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup" target="_blank" rel="noopener noreferrer">script setup docs<ExternalLinkIcon/></a> to learn more.</p>
<h2 id="recommended-ide-setup" tabindex="-1"><a class="header-anchor" href="#recommended-ide-setup" aria-hidden="true">#</a> Recommended IDE Setup</h2>
<ul>
<li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code<ExternalLinkIcon/></a> + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noopener noreferrer">Volar<ExternalLinkIcon/></a> (and disable Vetur) + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank" rel="noopener noreferrer">TypeScript Vue Plugin (Volar)<ExternalLinkIcon/></a>.</li>
</ul>
<h2 id="type-support-for-vue-imports-in-ts" tabindex="-1"><a class="header-anchor" href="#type-support-for-vue-imports-in-ts" aria-hidden="true">#</a> Type Support For <code v-pre>.vue</code> Imports in TS</h2>
<p>TypeScript cannot handle type information for <code v-pre>.vue</code> imports by default, so we replace the <code v-pre>tsc</code> CLI with <code v-pre>vue-tsc</code> for type checking. In editors, we need <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank" rel="noopener noreferrer">TypeScript Vue Plugin (Volar)<ExternalLinkIcon/></a> to make the TypeScript language service aware of <code v-pre>.vue</code> types.</p>
<p>If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a <a href="https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669" target="_blank" rel="noopener noreferrer">Take Over Mode<ExternalLinkIcon/></a> that is more performant. You can enable it by the following steps:</p>
<ol>
<li>Disable the built-in TypeScript Extension
<ol>
<li>Run <code v-pre>Extensions: Show Built-in Extensions</code> from VSCode's command palette</li>
<li>Find <code v-pre>TypeScript and JavaScript Language Features</code>, right click and select <code v-pre>Disable (Workspace)</code></li>
</ol>
</li>
<li>Reload the VSCode window by running <code v-pre>Developer: Reload Window</code> from the command palette.</li>
</ol>
</div></template>


