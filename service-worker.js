/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/06/03/1. 人工智能与机器学习/index.html","21994beb9ed3ab777d41f838f1b00103"],["/2017/06/10/2.1 回归算法/index.html","911404f8d00ec68cd393a46075b6b0b5"],["/2017/06/17/2.2 KNN算法/index.html","2639d0d1f6905a445448a2769a066ca3"],["/2017/06/17/2.3 决策树/index.html","58c0a8b37f0b0878fc4146efb3ef590b"],["/2017/06/17/2.4 贝叶斯分类器/index.html","cb0cfd3bb670565a21cba6e57090fc7a"],["/2017/06/23/2.5 支持向量机/index.html","ae1534ad2b5bcced6b75fecd9dc4a4a6"],["/2017/07/02/2.6 神经网络算法/index.html","81e590d79606ea1132717d85f4a165ce"],["/2017/07/07/3.1 聚类算法类/index.html","64513d3e0c212ea5079c9384fb32ce27"],["/2017/07/07/3.2 降维算法类/index.html","336eb7112cf303d4181ecafccd8aedf3"],["/2017/07/15/3.3 异常检测/index.html","c9b127988bc585cc8405b0d6e2d678f4"],["/2017/07/16/3.4 推荐系统/index.html","a038d3c4acb780f1ddbdb8e973c45cb8"],["/2017/07/23/4.1 深度学习概述/index.html","53ca74169c3a2134e36f1a068d827b09"],["/2017/07/29/4.2 深入神经元激活函数/index.html","f86d17a9d9dd63b81df2b190d30d653c"],["/2017/07/30/4.3 深入梯度下降算法/index.html","0c9f698ebf5895949a538f435e10374b"],["/2017/08/01/4.4 深入反向传播算法/index.html","e99db3911fc3d7fce6ffb2f543041a57"],["/2017/08/03/4.5 神经网络梯度消失问题/index.html","8b2e973ae3abb02235ff509f73686418"],["/2017/08/05/4.6 卷积神经网络/index.html","ec318aabe427bbe7ebcd0f422530e43a"],["/2017/08/06/4.7 循环神经网络/index.html","4a48d3cb43a19d0ad4ca11f54ce76bcd"],["/2017/08/09/5.1 机器学习系统最佳实践/index.html","6ef330f5645b8b19c59b6e075f469433"],["/2017/08/12/5.2 如何评估机器学习算法/index.html","b61d7853bef1b1d804a695b78a5adc4a"],["/2017/08/13/5.3 如何改进机器学习算法/index.html","7c1375d71f9443cecb6907a0faed806e"],["/2017/08/15/5.4 大规模数据机器学习/index.html","f5d925a0cdddeb565ad0b0b799fd2b1d"],["/2017/08/19/5.5 自动化机器学习/index.html","264de166708e516f88fdb63eff1f2055"],["/2017/08/20/IrisClassifier/index.html","5970d394b3e1f11c2c914675c3fc5251"],["/2017/08/22/SpamEmailClassifier/index.html","1f802bbc10ed878296802f72c67e7d18"],["/2017/08/24/StockPricePrediction/index.html","bee9e47d09ea0b8d8a44ecbe6fb107d0"],["/2017/08/26/BreastCancerPrediction/index.html","82554a2162688c67abbd7afc6cb1327f"],["/2017/08/27/GenderPrediction/index.html","6554388c1d4d112f4ea97e3ddf7506d4"],["/2017/09/02/MnistRecognization/index.html","6e84a541ab9b0030de2be8ede2123708"],["/2017/09/06/CatsVsDogsRecognization/index.html","cb02291e5e172306a677cd1333c20e0f"],["/2017/09/10/GeneticAlgorithm/index.html","af449c09f9507211832450ab969cd9d1"],["/2017/09/17/情感分析/index.html","b59876fa13d35bdcfcc87f65bfd3ba50"],["/404.html","ebef235d54463c94c89e06b9749370de"],["/about/index.html","e132c6dd1a980a499abd9bb134bb5a57"],["/archives/2017/06/index.html","aaa4e612a901841cb0eda1f1d22325cd"],["/archives/2017/07/index.html","224b1dab57244b0f6568b7b225d8597b"],["/archives/2017/08/index.html","853b360d9640768c18191adba7fade48"],["/archives/2017/08/page/2/index.html","7a418a5d94f4cf5a1b4b4de51129cbd1"],["/archives/2017/09/index.html","64ac1a252bd90ebae7d0618784070740"],["/archives/2017/index.html","9e57f260dce9d3ac7d0768cb05794e49"],["/archives/2017/page/2/index.html","9652998b85fb16cd2813b35010fe158e"],["/archives/2017/page/3/index.html","100e9606f3a32a8d3d193604ce2d01c3"],["/archives/2017/page/4/index.html","2f8112e254ddc34bc2222cc7eca4e936"],["/archives/index.html","6fc8af50358b5804f2d75404ab5ee605"],["/archives/page/2/index.html","727f7dd3afa5b17c98e8cec7339e6fad"],["/archives/page/3/index.html","5b7f5f396f5528f714ad7de53ec61adf"],["/archives/page/4/index.html","57bea262cc8cc06a0ea3bf9496c293f0"],["/categories/1-人工智能与机器学习/index.html","e566bde3e2ca3e26ff973f55af88c07f"],["/categories/2-监督学习算法/index.html","ff82f6061dd782927311ea8dc2c6d49a"],["/categories/3-非监督学习算法/index.html","d2a2534f06a94381754745d03d1f5c4a"],["/categories/4-深度学习/index.html","292d6aab28c1a2a99840da7f85c85d72"],["/categories/5-机器学习系统设计/index.html","94fae495bc05349a9bd8070fcc7a38d5"],["/categories/Machine-Learning-Project/index.html","c6002a7e9cd3335916c1a9e16df944a5"],["/categories/Machine-Learning-Project/page/2/index.html","d1840225b2a4ab1c766060c165734c0b"],["/categories/index.html","0ce55523b884b304b4a674bf7d7c76fa"],["/css/index.css","34ca7cee0df530eb7010c54298d78ba9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/ai/2.1.2.1非凸函数.png","704af3d6370d422e883a1e98069b7866"],["/img/ai/2.1房价单变量模型.png","678209631503f40dc9e4cd2dedb379cc"],["/img/ai/2.2KNN算法举例.png","9b68984b8b53e8668395a929d1ac4156"],["/img/ai/2.2梯度下降三维图.png","3e84639911332ea439f47e82ec1daef8"],["/img/ai/2.3房价多变量模型.png","ce2ff555a765165851e3640c790f2b6e"],["/img/ai/2.4.1贝叶斯本质.jpg","98048ae8e9cb8dd3b280de017cd585b1"],["/img/ai/2.4.2贝叶斯机器学习流程.png","a82f3b197e39d09712bbab7ce6cb9195"],["/img/ai/2.4数据scaling.png","d9fc0d7b9e92ff33516123370c292eeb"],["/img/ai/2.5.10SVM直观理解-1.png","0c201e78d267c911c30da31e706555ca"],["/img/ai/2.5.10SVM直观理解-2.png","f248345baa01c9ba0d6b78ac55152736"],["/img/ai/2.5.11核函数.png","61426f1ad20b6c31578316dba0154905"],["/img/ai/2.5.12G的理解.png","1a2c6870ea1944de63cc35ac8d0d2d8a"],["/img/ai/2.5.12核函数示例.png","3b4e15b7b78cb00c5e2cddcfe06fdb4e"],["/img/ai/2.5.13SVM多分类.png","aaac59792334baa07848708e986ab4cf"],["/img/ai/2.5.1逻辑回归.png","035abef899c38827ee744e713d7cfd55"],["/img/ai/2.5.2线性分类.png","95801110b06f324e8da19e56b85339f7"],["/img/ai/2.5.3超平面.png","de9968552c313aa1b08cad6ee43ebd3a"],["/img/ai/2.5.4最大分类器.png","38676796cfe1c7740471f7612413d0e3"],["/img/ai/2.5.5支持向量机最优超平面.png","cc9204d30f00eed654fa7cc65ac7898a"],["/img/ai/2.5.6逻辑回归代价函数.png","20fa5de8404138157380f010832add9f"],["/img/ai/2.5.7支持向量机代价函数.png","1c21c8a3b97654d2f2a7454c2b2768c6"],["/img/ai/2.5.8大边界直观理解.png","c18820d70325513e5b81f68769f6cc9b"],["/img/ai/2.5.9C值选择.png","03ff0da609d333141ef423576c49af32"],["/img/ai/2.5S函数.png","5ea02d9cd0704f40b513dd6d1febab72"],["/img/ai/2.6.10四分类神经网络模型.png","6c60e5bf65e1aab8fa2b119a474777ef"],["/img/ai/2.6.11四分类神经网络模型输出.png","4191bf80b83a59ef08c64b408a605b6b"],["/img/ai/2.6.13前向传播算法-1.png","0ce016069f5dffdd8c3ec39a1139ceaa"],["/img/ai/2.6.14前向传播算法-2.png","9880f53e43f64a15bc6298706059c011"],["/img/ai/2.6.15反向传播算法.png","c0632e0919b57df5d49038db54761c95"],["/img/ai/2.6.17神经网络梯度检验实现.png","e8968c5d57e0cfd801c8bc8d43ebdc3a"],["/img/ai/2.6.19神经网络结构选择.png","580362b3979bf60647971deaca3b9f7a"],["/img/ai/2.6.1神经网络.png","e11a732b2da56f36a6b083b919a5ef41"],["/img/ai/2.6.2神经元模型.png","b2a43ad8e141293d2f1ae901dc271c6f"],["/img/ai/2.6.3神经网络一般模型.png","a5bf3b7a0d62b3453d9e9c358de558d5"],["/img/ai/2.6.5逻辑与.png","738e1639b500d748c8621ac8765ad475"],["/img/ai/2.6.6逻辑或.png","5b1c0f0034c03dd0c2e389270e9872e0"],["/img/ai/2.6.7逻辑非.png","1dacf0c48874899194f8794a6bc0366e"],["/img/ai/2.6.8都取零才为一.png","058e2db012553ecf8dda13f0c5d7ed1c"],["/img/ai/2.6.9逻辑异或取反.png","d90807e5f04bac21526239b04f6fc04f"],["/img/ai/2.6多分类模型.png","57892ed7836a2ea1a288da652289de9b"],["/img/ai/2.8线性过拟合.png","ecaee68210ffbfef9c9b93516f932ab8"],["/img/ai/2.9逻辑过拟合.png","7257bd02271eea827d23687b4c108cb5"],["/img/ai/3.1.2聚类算法应用.png","b2dd8cd950e8128393539755c244a242"],["/img/ai/3.1.3K选择.png","693f610c11b6279b1927c32af8497a14"],["/img/ai/3.1.4肘部法则.png","df0174d99fb4eada3dff0d92307c77b6"],["/img/ai/3.2.1二维降维.png","547beffe3f6117e2226e5652e244417a"],["/img/ai/3.2.2三维降维.png","7302b2cec194cbe0efa3b647b5356f91"],["/img/ai/3.2.3降维基本思想.png","fb2d4f423766417c3023e5c6e58ade42"],["/img/ai/3.2.4重建压缩.png","8571a08dbceb244b135fd257a0e52c4c"],["/img/ai/3.3.1异常检测与监督学习.png","ceb80e29e2ec7fc4a2101995beac62b7"],["/img/ai/3.3.2异常检测示例.png","a14d68a1f3e0e19383c5b36b42422eee"],["/img/ai/3.3.3源高斯分布模型与多元高斯分布模型.png","c91a879c5c84d2698a4f89c4deee65e4"],["/img/ai/3.4.1电影推荐.png","b76720cec1a9db725c248f435c988905"],["/img/ai/3.4.2电影推荐均值归一化.png","f6c62641701344cf60875df3f84ce7db"],["/img/ai/4.10Tanh函数.png","4256a8779fe38d37f295865ccf196e22"],["/img/ai/4.11修正线性函数.png","4504332d6bd2bdbcdd137b4dcd66bbd7"],["/img/ai/4.12模型参数.png","79f78502a0038975113f38667f4cec92"],["/img/ai/4.13代价函数假设.png","762727c461b75b9cb6c9571da1cbffd9"],["/img/ai/4.14梯度消失模型.png","ca61edf544b3f6f8d10e0b8df6352f1c"],["/img/ai/4.15S型函数导数.png","820eb6714e8008bbda0c51da04572299"],["/img/ai/4.16卷积神经网络一般结构.png","6d9ec33b1419a85f6f94d72007bc0d56"],["/img/ai/4.17MNIST图片结构.png","6ffa9c91b5cd10ca14daeec18fd4cc89"],["/img/ai/4.185x5局部感受野.png","6edf119be5d23278b8020ca9b7b39346"],["/img/ai/4.194.185x5局部感受野移动.png","c6f6f542da63d3d0c9cf60da2eb163dc"],["/img/ai/4.1深度神经网络分类.png","47d348d1f8a08f674c36cf83c429d4f5"],["/img/ai/4.20特征映射.png","fd2837cacfffa1f5efb578265850d763"],["/img/ai/4.21混合层.png","39315989b817460dc9905c1c94818213"],["/img/ai/4.22卷积填充方式.png","b762d061625a5bc787114eff43d9c684"],["/img/ai/4.23单向循环神经网络模型.png","7f23971b7f42abe81ff24a47be53de32"],["/img/ai/4.24双向循环神经网络结构图.png","f1a5af0916c30fe933e619a7b85690bd"],["/img/ai/4.25LSTM模型.png","e150b3958c09a9f036d1876727cc72c8"],["/img/ai/4.26长期单元状态控制.png","3793cd0eb8508c339752d5129d47cf8d"],["/img/ai/4.2深度神经网络模型.png","06b3d61e156b5733df2d22b8402bac39"],["/img/ai/4.3人脸识别.png","2962a3f549787ca2e92ecdc23509306c"],["/img/ai/4.4阶跃激活函数神经元.png","51787b3d56d5ca9523f1667b659e24d7"],["/img/ai/4.5阶跃函数.png","9f4877553abce60b9c07361d36dc2630"],["/img/ai/4.7权重改变影响输出.png","7f0dfa90f1dcaf4bce0f46524159df87"],["/img/ai/4.8S激活函数神经元.png","b0c13792deb7eaefba84d3980dfc02f3"],["/img/ai/4.9S函数.png","4b12dbe2cb19bdda6d0db6830cac33f2"],["/img/ai/5.10随机梯度下降收敛.png","78570640c8ba499bf9b0946beb5a0f79"],["/img/ai/5.11分布式数据集划分示例.png","f501c45e0f1d6755fb6335b09c775751"],["/img/ai/5.11集群.png","f24708aff4a67b1f03fa18b4679fb682"],["/img/ai/5.12多核.png","cff5b6346fc91144a6723eb3e367a8e9"],["/img/ai/5.13遗传算法组成.png","d066ea699d1676690a88999cee707cb8"],["/img/ai/5.14背包物品参数.png","a1362defc7f1ff05ad152e611b8c2acd"],["/img/ai/5.15遗传算法步骤.png","610e5a5b2e173bf8280f7cf17e329a9c"],["/img/ai/5.16背包问题基因与种群.png","4baeef0834449e10e24bd30e81a6af4e"],["/img/ai/5.17背包问题轮盘选择计算过程.png","59e0b375d971871e455e4a930cb058b2"],["/img/ai/5.18背包问题轮盘选择.png","f0142fe4ec61e3dd5779ecd24c15f214"],["/img/ai/5.19单点交叉.png","b03d549b71cf8713cf0882304b50ccbc"],["/img/ai/5.1机器学习系统最佳实践.png","0b3b53710d67dc5082999eee5bc214ea"],["/img/ai/5.20多点交叉.png","a9a1cda9aeadc50f5bd852fe94bf398d"],["/img/ai/5.21变异.png","4a327e8016239c79b9d2d00bdf657ad9"],["/img/ai/5.2学习曲线诊断高偏差.png","7d37a9aff2d93a194728f009a8af1099"],["/img/ai/5.2学习曲线诊断高方差.png","c8ecb68a8723ec8cce864e023f7dd43e"],["/img/ai/5.3学习曲线高偏差.png","a4aaa22bff6d0db2fd4ed1ff2db549d0"],["/img/ai/5.4学习曲线高方差.png","8e81e1f9d98deae7dca90be8737228e5"],["/img/ai/5.5多项式偏差方差诊断.png","2219e7997e9cce67610dc0318243e3d9"],["/img/ai/5.6正则参数偏差方差诊断.png","62de8315bd94f6635f736e31cf24db80"],["/img/ai/5.7独立高斯分布权重初始化.png","44ce1cd6dae66327f8f25ef960f4543e"],["/img/ai/5.8标准权重初始化.png","49b834c01c123b1c233b1dd233927b04"],["/img/ai/5.9随机梯度下降过程图.png","3517fa84e2f8e0053e491f9b79e994ac"],["/img/ai/Scikit-learn机器学习算法.png","b76a0a0d0d92eab83185c53574683946"],["/img/ai/default_top_img.jpg","c54f45369e6700fa8ace19991df494dc"],["/img/ai/人工智能&机器学习&深度学习之间的关系.png","347c28a24be64302adbd5ef57608b577"],["/img/ai/人工智能涵盖的学科.png","83bf4ddb3113460ed0c47885b0959c3b"],["/img/ai/监督学习.png","ee8c29e30d1b9c2a51c283c68d1ce3c5"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","cdcb389c56972f40a35cda959d1230fe"],["/img/avatar.png","f649ad1624c19af9fccf6e77eec8ffd0"],["/img/default_top_img-1.jpg","6007a79d1e4ac28c95fc54fd5c24e9d0"],["/img/default_top_img-2.jpg","8410a14ff056ef2b7ab12a543f300f36"],["/img/default_top_img-3.jpg","c7d7829f4b62a5dcc5a32171e4445136"],["/img/default_top_img.jpg","6a314ceccf72e70368710b24af05d3b4"],["/img/favicon.png","6cbe5247b83a380bb606b2afa2d3a3b2"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.jpg","4f1153d1b8ca2f58f828542e8f33693f"],["/index.html","6896c0147c0e8cd20fe4656eb55bac34"],["/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/link/index.html","88ad8a2c782a0e5ab29c6ae27670ac8b"],["/page/2/index.html","440422b27f6690d9a90a8ce615b9afcb"],["/page/3/index.html","53527906508a196315cb9736f022055f"],["/page/4/index.html","1cc432e2c0f7f2835976f5b295cdacc7"],["/tags/AI/index.html","15c0103f4bcd87352cc0551b7d85176f"],["/tags/AI/page/2/index.html","b6a0ac0580d37a7b2bfcc6e9bd6cf193"],["/tags/AI/page/3/index.html","8c8c503a86c6940deac4f39da63a03b1"],["/tags/AI/page/4/index.html","f022d03d08ec7114be68a934e693fa3a"],["/tags/index.html","e6fdfabb461b2e7779d145ad903c7b05"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://rocskyfly.github.io/"});




