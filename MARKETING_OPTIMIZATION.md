# Oakheart Marketing 优化方案

基于 Marketing Skills 框架的深度分析与实施计划

---

## 一、战略定位优化

### 当前问题
- 品牌定位模糊：「桌游设计资源库」过于宽泛
- 缺少差异化价值主张
- 目标用户画像不够精准

### 优化方案

#### 新品牌定位
```
Oakheart - 桌游创作者的一站式成功指南
从设计到出版，从众筹到发货，助你将创意变成货架上的游戏
```

#### 目标用户画像 (Buyer Persona)

| 用户类型 | 特征 | 核心痛点 | 内容需求 |
|---------|------|---------|---------|
| 新手设计师 | 有游戏创意，0-1年经验 | 不知从何开始，害怕投入 | 入门指南、学习路径 |
| 进阶设计师 | 1-3个原型，准备发布 | 众筹复杂、出版商难找 | 众筹攻略、出版商数据库 |
| 独立出版商 | 已出版1-2款游戏 | 供应链优化、成本控制 | 关税计算、物流选择 |

---

## 二、Content Pillars (内容支柱) 重构

### Pillar 1: 游戏设计入门 (Awareness Stage)
**目标关键词**: 桌游设计, board game design, 如何设计桌游

#### Hub Page: `/guides/board-game-design-101`
```markdown
# 桌游设计完全入门指南 (2025)

从零开始学习桌游设计，包含核心技能、设计流程、常见错误避坑指南。

## 目录
1. 什么是游戏设计？设计师 vs 开发者 vs 出版商
2. 游戏设计的10个核心要素
3. 新手常犯的10个错误
4. 从创意到原型的完整流程
5. 测试与迭代方法论
```

#### Spoke Pages (子页面)
- `/guides/game-design-elements` - 10个优秀游戏设计要素
- `/guides/designer-common-mistakes` - 出版商视角：新手10大错误
- `/guides/prototyping-guide` - 低成本原型制作指南
- `/guides/playtesting-guide` - 终极测试周末安排

### Pillar 2: Kickstarter 众筹攻略 (Consideration Stage)
**目标关键词**: Kickstarter众筹, 游戏众筹, 桌游众筹攻略

#### Hub Page: `/guides/kickstarter-masterclass`
```markdown
# Kickstarter 桌游众筹完全攻略 (2025)

从页面设计到社区建设，从定价策略到履约发货，
来自成功出版商的实战经验。

## 目录
1. 众筹前：你准备好了吗？
2. 页面设计：完美 Kickstarter 页面线框图
3. 社区建设：4步构建你的支持者群体
4. 定价策略：如何计算你的众筹价格
5. 10个必须避免的众筹红旗
```

#### Spoke Pages
- `/guides/kickstarter-red-flags` - 众筹10大红旗警告
- `/guides/kickstarter-page-wireframe` - 完美众筹页面线框图
- `/guides/building-community` - 众筹社区建设4部曲
- `/guides/crowdfunding-vat` - VAT 新手指南

### Pillar 3: 出版商数据库 (Decision Stage)
**目标关键词**: 桌游出版商, board game publishers, 投稿出版商

#### Hub Page: `/publishers`
```markdown
# 桌游出版商数据库 - 500+ 全球出版商

找到最适合你游戏的出版商。按国家、类型、规模筛选，
查看投稿要求和联系方式。

## 筛选条件
- 按国家/地区
- 按游戏类型 (欧式/美式/家庭/派对)
- 按规模 (大型/中型/独立)
- 是否接受投稿
- 众筹频率
```

### Pillar 4: 行业洞察 (Thought Leadership)
**目标关键词**: 桌游行业, 游戏出版, 关税影响

#### Hub Page: `/industry`
```markdown
# 桌游行业深度洞察

关税危机、供应链挑战、市场趋势...
来自一线出版商的行业分析与应对策略。
```

---

## 三、Programmatic SEO 实施方案

### 出版商详情页 (500+ 自动生成页面)

每个出版商生成独立页面，模板如下：

```markdown
# {Publisher Name} - 桌游出版商介绍

## 基本信息
- 国家: {Country}
- 网站: {Website}
- 是否接受投稿: {Accepting}
- 游戏目录规模: {Catalog Size}

## 感兴趣的游戏类型
{Categories}

## 他们在找什么样的游戏
{Interested In}

## 代表作品
{Representative Games}

## 投稿方式
- 首选联系方式: {Preferred Contact}
- 联系信息: {Contact Info}

## 社交媒体
- BGG: {BoardGameGeek}
- Facebook: {Facebook}
- Twitter: {Twitter}
- Instagram: {Instagram}

## 常参加的展会
{Conventions}

---
**相关出版商**
- 同国家: [Link1], [Link2]
- 同类型: [Link1], [Link2]
```

**SEO 价值**: 每页锁定长尾关键词如 "25th Century Games submissions", "Alley Cat Games contact"

### 类型筛选页 (Programmatic)

```
/publishers/country/usa - 美国桌游出版商列表
/publishers/country/germany - 德国桌游出版商列表
/publishers/type/euro-games - 欧式游戏出版商
/publishers/type/family-games - 家庭游戏出版商
/publishers/accepting-submissions - 接受投稿的出版商
```

---

## 四、页面 SEO 优化

### Meta 标题模板
```
{主题} - {具体内容} | Oakheart 桌游创作指南

示例:
- Kickstarter众筹攻略 - 10个必须避免的红旗 | Oakheart 桌游创作指南
- 25th Century Games - 出版商投稿指南 | Oakheart 桌游创作指南
- 2025最佳双人桌游排行榜 | Oakheart 桌游创作指南
```

### Meta Description 模板
```
{痛点/问题}？{解决方案}。{权威背书}。{CTA}

示例:
- 准备在 Kickstarter 发布游戏？了解10个可能导致项目失败的红旗警告，来自成功出版商的实战经验。立即阅读避坑指南。
- 寻找接受投稿的桌游出版商？25th Century Games 专注欧式和派对游戏，查看投稿要求和联系方式。
```

### Schema.org 结构化数据

```json
// 文章页面
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kickstarter 桌游众筹完全攻略",
  "author": {
    "@type": "Organization",
    "name": "Oakheart"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Oakheart",
    "logo": {
      "@type": "ImageObject",
      "url": "https://oakheart.com/logo.png"
    }
  },
  "datePublished": "2025-01-27",
  "articleSection": "Crowdfunding"
}

// 出版商页面
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "25th Century Games",
  "url": "https://www.25thcenturygames.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "USA"
  },
  "sameAs": [
    "https://boardgamegeek.com/boardgamepublisher/28620/25th-century-games",
    "https://www.facebook.com/25thCenturyGames"
  ]
}

// 排行榜页面
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "2025年最佳双人桌游排行榜",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Toy Battle"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "The Architects of Amytis"
    }
  ]
}
```

---

## 五、内容差距分析 & 新增内容建议

### 高优先级缺失内容

| 内容主题 | 关键词 | 买家阶段 | 搜索意图 |
|---------|--------|---------|---------|
| 桌游设计软件工具 | board game design software | Awareness | 工具选型 |
| Tabletop Simulator 教程 | tabletop simulator demo | Implementation | 实操教程 |
| 桌游定价计算器 | board game pricing calculator | Decision | 工具使用 |
| 众筹 vs 传统出版对比 | kickstarter vs traditional publishing | Consideration | 决策对比 |
| 中国制造商选择指南 | china board game manufacturer | Decision | 供应商选择 |
| 桌游版权保护 | board game copyright | Awareness | 知识普及 |

### Shareable 内容建议 (社交传播)

1. **数据驱动内容**
   - 「2025年Kickstarter桌游众筹数据报告」
   - 「500家出版商分析：他们最想要什么类型的游戏？」
   - 「关税对桌游价格的真实影响：数据分析」

2. **争议性观点**
   - 「为什么大多数桌游众筹注定失败」
   - 「独立出版 vs 签约出版商：哪个更赚钱？」

3. **案例研究**
   - 「从0到$100万：[游戏名]的众筹复盘」
   - 「我是如何在第三次尝试后成功众筹的」

---

## 六、内部链接策略

### 链接架构
```
首页
├── /guides (Pillar Hub)
│   ├── /guides/board-game-design-101 (Pillar 1)
│   │   ├── /guides/game-design-elements (Spoke)
│   │   ├── /guides/prototyping-guide (Spoke)
│   │   └── /guides/playtesting-guide (Spoke)
│   ├── /guides/kickstarter-masterclass (Pillar 2)
│   │   ├── /guides/kickstarter-red-flags (Spoke)
│   │   ├── /guides/kickstarter-page-wireframe (Spoke)
│   │   └── /guides/building-community (Spoke)
│   └── /guides/publishing-101 (Pillar 3)
├── /publishers (Programmatic)
│   ├── /publishers/{publisher-slug} (500+ pages)
│   ├── /publishers/country/{country} (Filter pages)
│   └── /publishers/type/{game-type} (Filter pages)
├── /rankings (Listicles)
│   ├── /rankings/best-two-player-games-2025
│   └── /rankings/most-anticipated-2026
└── /industry (News/Trends)
    ├── /industry/tariff-impact
    └── /industry/market-trends
```

### 内链规则
1. 每篇文章至少3个内部链接
2. 出版商页面链接到相关指南
3. 指南文章链接到出版商筛选页
4. 使用锚文本包含目标关键词

---

## 七、实施优先级

### Phase 1: 基础优化 (1-2周)
- [ ] 重写 README.md 作为站点首页内容
- [ ] 为所有现有内容添加 Meta 标题/描述
- [ ] 创建3个 Pillar Hub 页面框架

### Phase 2: 出版商页面生成 (2-3周)
- [ ] 编写页面生成脚本
- [ ] 生成500+ 出版商详情页
- [ ] 创建筛选/分类页面

### Phase 3: 内容扩充 (持续)
- [ ] 每周发布1篇高优先级缺失内容
- [ ] 月度行业洞察文章
- [ ] 季度数据报告

### Phase 4: 链接与推广
- [ ] 实施内部链接策略
- [ ] 外链建设 (BoardGameGeek, Reddit r/tabletopgamedesign)
- [ ] 社交媒体内容分发

---

## 八、KPI 指标

| 指标 | 当前 | 3个月目标 | 6个月目标 |
|-----|-----|---------|---------|
| 索引页面数 | ~150 | 700+ | 1000+ |
| 月自然流量 | - | 1000 UV | 5000 UV |
| 关键词排名 (Top 10) | 0 | 20+ | 50+ |
| 出版商数据库使用 | 0 | 500/月 | 2000/月 |

---

## 九、工具推荐

- **关键词研究**: Ahrefs, SEMrush, Google Keyword Planner
- **内容优化**: Clearscope, SurferSEO
- **技术SEO**: Screaming Frog, Google Search Console
- **数据分析**: Google Analytics 4, Plausible

---

## 附录：关键词清单

### 高优先级关键词
| 关键词 | 月搜索量 (估) | 难度 | 内容类型 |
|-------|-------------|-----|---------|
| board game design | 5000+ | 中 | Pillar |
| kickstarter board game | 3000+ | 中 | Pillar |
| board game publisher | 2000+ | 低 | Database |
| how to make a board game | 8000+ | 高 | Guide |
| board game prototype | 1500+ | 低 | Guide |
| tabletop simulator tutorial | 2000+ | 中 | Tutorial |

### 长尾关键词 (出版商相关)
- "{publisher name} submissions"
- "{publisher name} contact"
- "board game publishers accepting submissions"
- "euro game publishers"
- "kickstarter board game publishers"
