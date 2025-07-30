// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';

import ssp from '../index.js';


test('E-mail subject prefixes', (t) => {
  t.plan(8);
  const subjPfx = ['Re:', 'Aw:', 'Fwd:', 'Fw:', 'WL:', ' '];

  const plainSubj = 'Mail Client Config (was: Re: Hello)';
  let pfx = '';
  let suf = plainSubj;
  t.equal(ssp(subjPfx, pfx + suf), suf);

  pfx = ' ';
  t.equal(ssp(subjPfx, pfx + suf), suf);

  pfx = '';
  suf = 'RE: AW: aw: re: ' + plainSubj;
  t.equal(ssp(subjPfx, pfx + suf), suf);

  let opt = {};
  t.equal(ssp(subjPfx, opt, pfx + suf), suf);

  opt = { prefixes: subjPfx };
  t.equal(ssp(opt, pfx + suf), suf);

  pfx = 'RE: AW: aw: re: ';
  suf = plainSubj;

  opt = { ignoreCase: true };
  t.equal(ssp(subjPfx, opt, pfx + suf), suf);

  opt = { prefixes: subjPfx, ignoreCase: true };
  t.equal(ssp(opt, pfx + suf), suf);
  t.equal(ssp([], opt, pfx + suf), suf);

  t.end();
});













console.info('+OK basics test passed.');
