import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const {records,counts}=read('data/dinosaurs.json'); const {cards}=read('data/knowledge-cards.json'); const images=read('data/images.json');
assert.equal(records.length,100); assert.equal(new Set(records.map(r=>r.genus)).size,100); assert.equal(new Set(records.map(r=>r.id)).size,100);
assert.equal(cards.length,300); assert.equal(new Set(cards.map(c=>c.id)).size,300); assert.equal(new Set(cards.map(c=>c.content)).size,300);
for(const r of records){assert(r.name_zh&&r.summary&&r.locations.length&&r.source_url&&r.period&&r.group);assert(Number.isFinite(r.length_reference_m)&&r.length_reference_m>0);for(const u of [r.source_url,...r.additional_source_urls])assert.equal(new URL(u).protocol,'https:');}
for(const c of cards){assert(records.some(r=>r.id===c.dinosaur_id&&r.genus===c.genus));assert(c.content&&c.source_urls.length);}
for(const d of ['年代与地层','规格与比较','产地与分布'])assert.equal(cards.filter(c=>c.dimension===d).length,100);
assert.equal(images.length,8);for(const i of images)assert(i.url&&i.page&&i.author&&i.license&&i.kind);
for(const folder of ['periods','groups']){const files=fs.readdirSync(path.join(root,'docs',folder));assert.equal(files.length,folder==='periods'?6:9);let total=0;for(const f of files){const content=fs.readFileSync(path.join(root,'docs',folder,f),'utf8');total+=(content.match(/^## DINO-/gm)||[]).length;}assert.equal(total,100);}
assert.equal(fs.readdirSync(path.join(root,'docs/profiles')).length,8);
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,item.name);if(item.isDirectory())walk(f);else if(f.endsWith('.md')){const text=fs.readFileSync(f,'utf8');for(const m of text.matchAll(/\]\(([^)]+)\)/g)){const link=m[1];if(/^(https?:|#)/.test(link))continue;assert(fs.existsSync(path.resolve(path.dirname(f),link.split('#')[0])),f+': '+link);}}}}walk(root);
assert.equal(counts.dinosaurs,records.length);assert.equal(counts.knowledge_cards,cards.length);console.log('PASS: 100 unique genera; 300 cards; 8 profiles/images; 6 period and 9 group indexes; local links valid.');
