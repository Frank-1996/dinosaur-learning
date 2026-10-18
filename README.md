# 恐龙学习资料库

按**年代 × 类群**组织的中文恐龙学习资料。当前收录 **100个不同属级条目、300张关联知识卡、8个重点档案及8张注明作者与许可的图片**。更新：2026-10-18。

从你关心的恐龙开始：[霸王龙（暴龙属）](docs/profiles/tyrannosaurus.md) · [棘龙](docs/profiles/spinosaurus.md) · [迅猛龙（伶盗龙）](docs/profiles/velociraptor.md) · [牛龙（食肉牛龙）](docs/profiles/carnotaurus.md) · [三角龙](docs/profiles/triceratops.md) · [剑龙](docs/profiles/stegosaurus.md) · [甲龙](docs/profiles/ankylosaurus.md) · [腕龙](docs/profiles/brachiosaurus.md)。

## 浏览入口

- [100条恐龙总图鉴](docs/DINOSAURS.md)：中文名、属名、年代、类群、体型、食性、产地及来源。
- [按年代阅读](docs/TIMELINE.md)：晚三叠世至晚白垩世的6个分期。
- [按种类／类群阅读](docs/TAXONOMY.md)：9个学习分组，明确与正式分类阶元的区别。
- [300张知识卡](docs/KNOWLEDGE.md)：年代与地层100张、规格与比较100张、产地与分布100张。
- [图片与署名](docs/IMAGES.md)：8张可追溯图片，其他条目提供博物馆配图／资料入口。
- [来源、争议与核对说明](docs/SOURCES.md)：保留旧目录原值，公开已知冲突和复核边界。
- [恐龙JSON](data/dinosaurs.json) · [知识卡JSON](data/knowledge-cards.json) · [图片JSON](data/images.json)。

## 详略安排

霸王龙、棘龙、迅猛龙、牛龙、三角龙、剑龙、甲龙、腕龙有独立重点档案，补充辨识、常见误区、证据边界和对照练习；其余92条以规格、年代、产地和简述为主，可从双索引查阅。学名用于解决译名歧义。

## 数量与口径

100按**不同属**计数，不把别名当新种。300张卡是同一批恐龙资料按三个学习维度整理，**不等于另加300种恐龙或300篇独立研究**，也不把索引与JSON导出重复相加。

规格来自博物馆科普目录，为参考估值，不能当作最新最大体型或全属统一范围。数值年龄与分期冲突时暂不采用数字，保留原文口径并列出警示。骨架装架、模型和艺术复原均作区别标注。

## 验证

需要Node.js，执行：

```sh
node scripts/validate.mjs
```

此命令检查计数、引用、档案与本地链接。来源已在线读取，但不宣称已完成100个属的原始论文级复核。
