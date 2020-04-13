import Vue from 'vue';
import MarkDownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';

const md = new MarkDownIt();

const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

md.renderer.rules.link_open = (tokens : Array<Token>, idx : number, options, env, self) => {
  const aToken : Token = tokens[idx];
  const hrefUrl : string | null = aToken.attrGet('href');
  // Regex matches <schema>:// or schema relative urls //
  const urlIsAbsolute : boolean = !!(hrefUrl && hrefUrl.match(/^(?:[a-zA-Z]+:)?\/\//));

  if (urlIsAbsolute) {
    aToken.attrSet('target', '_BLANK');
  }

  return defaultRender(tokens, idx, options, env, self);
};

Vue.prototype.$md = (markdown: string) => md.render(markdown);
