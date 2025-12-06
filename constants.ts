
import { CardData } from './types';

export const FALLBACK_TALKS: Omit<CardData, 'id' | 'timestamp'>[] = [
  // 情感链接 & 甜蜜回忆
  { category: 'deep-talk', icon: '⏳', title: '时空穿越', description: '如果能穿越，最想回到我们哪一刻？', suggestion: '是初见还是某个感动的瞬间？' },
  { category: 'deep-talk', icon: '💓', title: '初见印象', description: '第一次见我时，你心里在想什么？', suggestion: '说实话，不许美化哦。' },
  { category: 'deep-talk', icon: '🧠', title: '默契时刻', description: '你觉得我们之间最特别的默契是什么？', suggestion: '不需要语言的那种。' },
  { category: 'deep-talk', icon: '🌹', title: '浪漫瞬间', description: '我做过的哪件事让你觉得最浪漫？', suggestion: '也许是一件很小的小事。' },
  { category: 'deep-talk', icon: '👀', title: '心动瞬间', description: '哪一个瞬间让你觉得“就是这个人了”？', suggestion: '那个决定性的时刻。' },
  
  // 深入内心 & 陪伴
  { category: 'deep-talk', icon: '🩹', title: '脆弱时刻', description: '最脆弱的时候，你希望我怎么陪你？', suggestion: '安静拥抱还是带你去疯？' },
  { category: 'deep-talk', icon: '🔋', title: '能量来源', description: '和你在一起时，我最让你安心的是什么？', suggestion: '关于安全感。' },
  { category: 'deep-talk', icon: '🔮', title: '未来五年', description: '未来五年，你最期待的生活画面？', suggestion: '描述一个具体的场景。' },
  
  // 童年 & 成长
  { category: 'deep-talk', icon: '🧸', title: '童年阴影', description: '小时候最害怕的一件事是什么？', suggestion: '现在还害怕吗？' },
  { category: 'deep-talk', icon: '🍭', title: '儿时快乐', description: '童年最快乐的一个回忆是什么？', suggestion: '那时候的简单快乐。' },
  { category: 'deep-talk', icon: '🏠', title: '原生家庭', description: '你最不想重复父母身上的哪一点？', suggestion: '关于成长与改变。' },
  
  // 价值观 & 生活态度
  { category: 'deep-talk', icon: '💰', title: '金钱观念', description: '如果不考虑钱，你最想做什么工作？', suggestion: '纯粹的兴趣所在。' },
  { category: 'deep-talk', icon: '🌍', title: '完美一天', description: '你理想中完美的一天是怎么度过的？', suggestion: '从起床到睡觉的安排。' },
  { category: 'deep-talk', icon: '🤝', title: '关于信任', description: '你认为感情中最重要的底线是什么？', suggestion: '除了忠诚以外。' },
  { category: 'deep-talk', icon: '👵', title: '老去之后', description: '当我们老了，你希望我们是什么样？', suggestion: '想象一下白发苍苍的样子。' },
  { category: 'deep-talk', icon: '🎁', title: '爱的语言', description: '你觉得收到礼物和听到夸奖哪个更开心？', suggestion: '了解彼此爱的接收方式。' },
  { category: 'deep-talk', icon: '🌧️', title: '面对困难', description: '遇到分歧时，你希望我们如何沟通？', suggestion: '冷战还是通过吵架解决？' },
  { category: 'deep-talk', icon: '🌟', title: '自我价值', description: '你最引以为傲的一个品质是什么？', suggestion: '夸夸你自己。' },
  { category: 'deep-talk', icon: '✈️', title: '旅行意义', description: '你觉得旅行对我们关系的意义是什么？', suggestion: '是放松还是考验？' },
  { category: 'deep-talk', icon: '📖', title: '人生书单', description: '哪本书或电影对你的三观影响最大？', suggestion: '分享你的精神世界。' }
];

export const FALLBACK_ACTIVITIES: Omit<CardData, 'id' | 'timestamp'>[] = [
  { category: 'activity', icon: '🍳', title: '神厨侠侣', description: '一起做顿饭，从买菜到洗碗全程合作。', suggestion: '不许只有一个人动手！' },
  { category: 'activity', icon: '🎨', title: '灵魂画手', description: '互画肖像，画风不限，画完分享。', suggestion: '抽象派也是艺术。' },
  { category: 'activity', icon: '📸', title: '时光倒流', description: '一起翻看三年前的旧照片。', suggestion: '讲讲照片背后的故事。' },
  { category: 'activity', icon: '🎵', title: '音乐交换', description: '分享一首最近单曲循环的歌。', suggestion: '一起戴耳机听完。' },
  { category: 'activity', icon: '💆', title: '专属技师', description: '给对方做5分钟的肩颈按摩。', suggestion: '力度要适中哦。' },
  { category: 'activity', icon: '👀', title: '对视挑战', description: '互相注视3分钟，坚持不许笑。', suggestion: '看谁先破功。' },
  { category: 'activity', icon: '🚶', title: '断网散步', description: '放下手机，下楼散步20分钟。', suggestion: '只专注于牵手和聊天。' },
  { category: 'activity', icon: '📖', title: '朗读者', description: '为对方朗读一段你喜欢的文字。', suggestion: '诗歌、歌词或小说片段。' },
  { category: 'activity', icon: '🍦', title: '甜蜜投喂', description: '去便利店买样零食互相投喂。', suggestion: '选对方平时爱吃的。' },
  { category: 'activity', icon: '🤳', title: '搞怪三连', description: '一起拍三张最丑的搞怪自拍。', suggestion: '必须做鬼脸！' },
  { category: 'activity', icon: '🧘', title: '共同冥想', description: '一起闭眼安静坐着，听5分钟白噪音。', suggestion: '感受彼此的呼吸。' },
  { category: 'activity', icon: '💃', title: '客厅舞会', description: '放一首慢歌，在客厅拥抱慢舞。', suggestion: '不需要任何舞蹈技巧。' },
  { category: 'activity', icon: '📝', title: '优点轰炸', description: '在一张纸上写下对方的3个优点。', suggestion: '写完大声读出来。' },
  { category: 'activity', icon: '🦶', title: '足浴时光', description: '给对方准备一盆热水泡脚。', suggestion: '暖身又暖心。' },
  { category: 'activity', icon: '🎲', title: '真心话', description: '用石头剪刀布决定谁回答一个真心话。', suggestion: '问题由赢家出。' }
];
