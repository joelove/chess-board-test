import { JSDOM } from 'jsdom';
import { expect } from 'chai';

global.document = new JSDOM('<body></body>');
global.window = document.parentWindow;
global.expect = expect;
