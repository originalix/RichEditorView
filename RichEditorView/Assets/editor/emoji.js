var emotions = ['d_aini','d_aoteman','d_baibai','d_beishang','d_bishi','d_bizui','d_chanzui','d_chijing','d_dahaqi','d_dalian','d_ding','d_doge','d_feizao','d_ganmao','d_guzhang','d_haha','d_haixiu','d_han','d_hehe','d_heixian','d_heng','d_huaxin','d_jiyan','d_keai','d_kelian','d_ku','d_kun','d_landelini','d_lei','d_madaochenggong','d_miao','d_nanhaier','d_nu','d_numa','d_numa','d_qian','d_qinqin','d_shayan','d_shengbing','d_shenshou','d_shiwang','d_shuai','d_shuijiao','d_sikao','d_taikaixin','d_touxiao','d_tu','d_tuzi','d_wabishi','d_weiqu','d_xiaoku','d_xiongmao','d_xixi','d_xu','d_yinxian','d_yiwen','d_youhengheng','d_yun','d_zhajipijiu','d_zhuakuang','d_zhutou','d_zuiyou','d_zuohengheng','f_geili','f_hufen','f_jiong','f_meng','f_shenma','f_v5','f_xi','f_zhi','h_buyao','h_good','h_haha','h_lai','h_ok','h_quantou','h_ruo','h_woshou','h_ye','h_zan','h_zuoyi','l_shangxin','l_xin','o_dangao','o_feiji','o_ganbei','o_huatong','o_lazhu','o_liwu','o_lvsidai','o_weibo','o_weiguan','o_yinyue','o_zhaoxiangji','o_zhong','w_fuyun','w_shachenbao','w_taiyang','w_weifeng','w_xianhua','w_xiayu','w_yueliang'];

var words = ["[爱你]","[奥特曼]","[拜拜]","[悲伤]","[鄙视]","[闭嘴]","[馋嘴]","[吃惊]","[哈欠]","[打脸]","[顶]","[doge]","[肥皂]","[感冒]","[鼓掌]","[哈哈]","[害羞]","[汗]","[微笑]","[黑线]","[哼]","[色]","[挤眼]","[可爱]","[可怜]","[酷]","[困]","[白眼]","[泪]","[马到成功]","[喵喵]","[男孩儿]","[怒]","[怒骂]","[女孩儿]","[钱]","[亲亲]","[傻眼]","[生病]","[草泥马]","[失望]","[衰]","[睡]","[思考]","[太开心]","[偷笑]","[吐]","[兔子]","[挖鼻]","[委屈]","[笑cry]","[熊猫]","[嘻嘻]","[嘘]","[阴险]","[疑问]","[右哼哼]","[晕]","[炸鸡啤酒]","[抓狂]","[猪头]","[最右]","[左哼哼]","[给力]","[互粉]","[囧]","[萌]","[神马]","[威武]","[喜]","[织]","[NO]","[good]","[haha]","[来]","[OK]","[拳头]","[弱]","[握手]","[耶]","[赞]","[作揖]","[伤心]","[心]","[蛋糕]","[飞机]","[干杯]","[话筒]","[蜡烛]","[礼物]","[绿丝带]","[围脖]","[围观]","[音乐]","[照相机]","[钟]","[浮云]","[沙尘暴]","[太阳]","[微风]","[鲜花]","[下雨]","[月亮]"];

RE.insertEmoji = function(word) {
    var index = words.indexOf(word)
    if (index < 0) {
        return;
    }
    var emotion = emotions[index];
    var emojiClass = emotion.substr(emotion.indexOf('_') + 1);
    RE.insertHTML('<img class="emoji emoji-' + emojiClass + '" src="null.png">');
}