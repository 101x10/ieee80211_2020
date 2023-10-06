Object.assign(window.search, {"doc_urls":["chapter_1.html#chapter-1","chapter_2.html#2","chapter_3.html#3","chapter_4.html#4","chapter_5.html#5","chapter_6.html#6","chapter_7.html#7","chapter_8.html#8","chapter_9.html#9","chapter_10.html#10","chapter_11.html#11","chapter_12.html#12","chapter_12_1.html#121","chapter_12_2.html#122","chapter_12_5.html#ctr-with-cbc-mac-protocolccmp","chapter_12_5.html#概述","chapter_12_5.html#ccmp-mpdu-格式","chapter_12_5.html#ccmp-加密过程"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":3,"title":2},"1":{"body":0,"breadcrumbs":2,"title":1},"10":{"body":0,"breadcrumbs":2,"title":1},"11":{"body":0,"breadcrumbs":2,"title":1},"12":{"body":0,"breadcrumbs":3,"title":1},"13":{"body":0,"breadcrumbs":3,"title":1},"14":{"body":0,"breadcrumbs":10,"title":4},"15":{"body":76,"breadcrumbs":6,"title":0},"16":{"body":2,"breadcrumbs":8,"title":2},"17":{"body":15,"breadcrumbs":7,"title":1},"2":{"body":0,"breadcrumbs":2,"title":1},"3":{"body":0,"breadcrumbs":2,"title":1},"4":{"body":0,"breadcrumbs":2,"title":1},"5":{"body":0,"breadcrumbs":2,"title":1},"6":{"body":0,"breadcrumbs":2,"title":1},"7":{"body":0,"breadcrumbs":2,"title":1},"8":{"body":0,"breadcrumbs":2,"title":1},"9":{"body":0,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"","breadcrumbs":"chapter_1 » Chapter 1","id":"0","title":"Chapter 1"},"1":{"body":"","breadcrumbs":"chapter_2 » 2","id":"1","title":"2"},"10":{"body":"","breadcrumbs":"chapter_11 » 11","id":"10","title":"11"},"11":{"body":"","breadcrumbs":"Security » 12","id":"11","title":"12"},"12":{"body":"","breadcrumbs":"Security » overview » 12.1","id":"12","title":"12.1"},"13":{"body":"","breadcrumbs":"Security » Framework » 12.2","id":"13","title":"12.2"},"14":{"body":"","breadcrumbs":"Security » RSNA confidentiality and integrity protocols » CCMP » CTR with CBC-MAC protocol(CCMP)","id":"14","title":"CTR with CBC-MAC protocol(CCMP)"},"15":{"body":"第 12.5.3 款规定了 CCMP 的所有变体，它提供数据机密性、身份验证、完整性、 和重放保护。non-DMG RSNA STA 需支持 CCMP-128。 CCMP 基于 AES 加密算法的 CCM。 CCM 结合 CTR 来保证数据机密性和 CBC-MAC 用于身份验证和完整性。 CCM 保护 MPDU 数据字段和 IEEE 802.11 MPDU 帧头的选定部分。 AES 算法在 FIPS 197 中定义。CCMP 中使用的 AES 处理使用的是密钥具有 128-bit 密钥 (CCMP-128) 或 256 位密钥 (CCMP-256)。 CCM 在 IETF RFC 3610 中定义。CCM 是一种通用模式，可用于任何面向块的 加密算法。 CCM 有两个参数（M 和 L）。 对于 CCMP-128 的 CCM 的参数值如下: M = 8: 表明 MIC 是 8 个八位字节 L = 2: 表明 Length 字段是2个八位字节，2个字节足够容纳最大可能的 IEEE 802.11 MPDU 长度，用八位字节表示 对于 CCMP-256 的 CCM 的参数值如下: M = 16: 表明 MIC 是 16 个八位字节 L = 2: 表明 Length 字段是2个八位字节，2个字节足够容纳最大可能的 IEEE 802.11 MPDU 长度，用八位字节表示 CCM 需要为每个会话提供新的临时密钥。CCM 还要求每个帧有一个唯一的随机数值由给定的临时密钥保护。重复使用具有相同临时密钥的随机数值会使所有安全保证失效。 当 CCMP 选择为 RSN 成对密码 且 管理帧保护协商使能时，单播robust管理帧和组播管理帧（Group addressed privacy为YES的组播管理帧）需要使用 CCMP 进行保护。","breadcrumbs":"Security » RSNA confidentiality and integrity protocols » CCMP » 概述","id":"15","title":"概述"},"16":{"body":"下图描述了使用 CCMP 的MPDU 帧格式","breadcrumbs":"Security » RSNA confidentiality and integrity protocols » CCMP » CCMP MPDU 格式","id":"16","title":"CCMP MPDU 格式"},"17":{"body":"加密步骤 1）增加 PN，为每个 MPDU 获取一个新的 PN，以便该 PN 永远不会重复相同的临时密钥。 注意： 重传的 MPDU 在重传时不会被修改 2）构建 AAD 3）构建 CCM nonce 块 4）构建 CCMP Header 5）","breadcrumbs":"Security » RSNA confidentiality and integrity protocols » CCMP » CCMP 加密过程","id":"17","title":"CCMP 加密过程"},"2":{"body":"","breadcrumbs":"chapter_3 » 3","id":"2","title":"3"},"3":{"body":"","breadcrumbs":"chapter_4 » 4","id":"3","title":"4"},"4":{"body":"","breadcrumbs":"chapter_5 » 5","id":"4","title":"5"},"5":{"body":"","breadcrumbs":"chapter_6 » 6","id":"5","title":"6"},"6":{"body":"","breadcrumbs":"chapter_7 » 7","id":"6","title":"7"},"7":{"body":"","breadcrumbs":"chapter_8 » 8","id":"7","title":"8"},"8":{"body":"","breadcrumbs":"chapter_9 » 9","id":"8","title":"9"},"9":{"body":"","breadcrumbs":"chapter_10 » 10","id":"9","title":"10"}},"length":18,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"0":{"df":1,"docs":{"9":{"tf":1.0}}},"1":{"df":1,"docs":{"10":{"tf":1.0}}},"2":{".":{"1":{"df":1,"docs":{"12":{"tf":1.0}}},"2":{"df":1,"docs":{"13":{"tf":1.0}}},"5":{".":{"3":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"df":1,"docs":{"15":{"tf":2.0}}},"df":1,"docs":{"11":{"tf":1.0}}},"6":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}},"9":{"7":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.0},"17":{"tf":1.0}}},"2":{"5":{"6":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":3,"docs":{"1":{"tf":1.0},"15":{"tf":1.4142135623730951},"17":{"tf":1.0}},"个":{"df":0,"docs":{},"八":{"df":0,"docs":{},"位":{"df":0,"docs":{},"字":{"df":0,"docs":{},"节":{"df":0,"docs":{},"，":{"2":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}}},"3":{"6":{"1":{"0":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"17":{"tf":1.0},"2":{"tf":1.0}}},"4":{"df":2,"docs":{"17":{"tf":1.0},"3":{"tf":1.0}}},"5":{"df":2,"docs":{"17":{"tf":1.0},"4":{"tf":1.0}}},"6":{"df":1,"docs":{"5":{"tf":1.0}}},"7":{"df":1,"docs":{"6":{"tf":1.0}}},"8":{"0":{"2":{".":{"1":{"1":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"15":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"9":{"df":1,"docs":{"8":{"tf":1.0}}},"a":{"a":{"d":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}},"d":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"15":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}},"c":{"b":{"c":{"df":2,"docs":{"14":{"tf":1.0},"15":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"m":{"df":2,"docs":{"15":{"tf":3.1622776601683795},"17":{"tf":1.0}},"p":{"df":3,"docs":{"15":{"tf":3.1622776601683795},"16":{"tf":1.4142135623730951},"17":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":2,"docs":{"14":{"tf":1.0},"15":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"l":{"df":1,"docs":{"15":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}}}}}}},"m":{"a":{"c":{"df":2,"docs":{"14":{"tf":1.0},"15":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"15":{"tf":1.7320508075688772}},"i":{"c":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"p":{"d":{"df":0,"docs":{},"u":{"df":3,"docs":{"15":{"tf":2.0},"16":{"tf":1.4142135623730951},"17":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"17":{"tf":1.0}}},"df":1,"docs":{"15":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"n":{"df":1,"docs":{"17":{"tf":1.7320508075688772}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"a":{"c":{"df":0,"docs":{},"y":{"df":0,"docs":{},"为":{"df":0,"docs":{},"y":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"(":{"c":{"c":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"f":{"c":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"o":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"管":{"df":0,"docs":{},"理":{"df":0,"docs":{},"帧":{"df":0,"docs":{},"和":{"df":0,"docs":{},"组":{"df":0,"docs":{},"播":{"df":0,"docs":{},"管":{"df":0,"docs":{},"理":{"df":0,"docs":{},"帧":{"df":0,"docs":{},"（":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.0}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"15":{"tf":1.0}}},"df":1,"docs":{"15":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"1":{"0":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"1":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}},"2":{".":{"1":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"2":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"5":{".":{"3":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"df":1,"docs":{"15":{"tf":2.0}}},"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"6":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}},"9":{"7":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"17":{"tf":1.0}}},"2":{"5":{"6":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":3,"docs":{"1":{"tf":1.4142135623730951},"15":{"tf":1.4142135623730951},"17":{"tf":1.0}},"个":{"df":0,"docs":{},"八":{"df":0,"docs":{},"位":{"df":0,"docs":{},"字":{"df":0,"docs":{},"节":{"df":0,"docs":{},"，":{"2":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}}},"3":{"6":{"1":{"0":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"17":{"tf":1.0},"2":{"tf":1.4142135623730951}}},"4":{"df":2,"docs":{"17":{"tf":1.0},"3":{"tf":1.4142135623730951}}},"5":{"df":2,"docs":{"17":{"tf":1.0},"4":{"tf":1.4142135623730951}}},"6":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"7":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"8":{"0":{"2":{".":{"1":{"1":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"15":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}},"9":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"a":{"a":{"d":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}},"d":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"15":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}},"c":{"b":{"c":{"df":2,"docs":{"14":{"tf":1.4142135623730951},"15":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"m":{"df":2,"docs":{"15":{"tf":3.1622776601683795},"17":{"tf":1.0}},"p":{"df":4,"docs":{"14":{"tf":1.0},"15":{"tf":3.3166247903554},"16":{"tf":2.0},"17":{"tf":2.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"1":{"0":{"df":1,"docs":{"9":{"tf":1.0}}},"1":{"df":1,"docs":{"10":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.0}}},"2":{"df":1,"docs":{"1":{"tf":1.0}}},"3":{"df":1,"docs":{"2":{"tf":1.0}}},"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"4":{"tf":1.0}}},"6":{"df":1,"docs":{"5":{"tf":1.0}}},"7":{"df":1,"docs":{"6":{"tf":1.0}}},"8":{"df":1,"docs":{"7":{"tf":1.0}}},"9":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":4,"docs":{"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":2,"docs":{"14":{"tf":1.4142135623730951},"15":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.0}}}},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"13":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"15":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":4,"docs":{"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0}}}}}}}},"l":{"df":1,"docs":{"15":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}}}}}}},"m":{"a":{"c":{"df":2,"docs":{"14":{"tf":1.4142135623730951},"15":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"15":{"tf":1.7320508075688772}},"i":{"c":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"p":{"d":{"df":0,"docs":{},"u":{"df":3,"docs":{"15":{"tf":2.0},"16":{"tf":1.7320508075688772},"17":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"17":{"tf":1.0}}},"df":1,"docs":{"15":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"n":{"df":1,"docs":{"17":{"tf":1.7320508075688772}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"a":{"c":{"df":0,"docs":{},"y":{"df":0,"docs":{},"为":{"df":0,"docs":{},"y":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"(":{"c":{"c":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":4,"docs":{"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"f":{"c":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"o":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"管":{"df":0,"docs":{},"理":{"df":0,"docs":{},"帧":{"df":0,"docs":{},"和":{"df":0,"docs":{},"组":{"df":0,"docs":{},"播":{"df":0,"docs":{},"管":{"df":0,"docs":{},"理":{"df":0,"docs":{},"帧":{"df":0,"docs":{},"（":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.0}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"n":{"a":{"df":4,"docs":{"14":{"tf":1.0},"15":{"tf":1.4142135623730951},"16":{"tf":1.0},"17":{"tf":1.0}}},"df":1,"docs":{"15":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":7,"docs":{"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"a":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}}}}},"title":{"root":{"1":{"0":{"df":1,"docs":{"9":{"tf":1.0}}},"1":{"df":1,"docs":{"10":{"tf":1.0}}},"2":{".":{"1":{"df":1,"docs":{"12":{"tf":1.0}}},"2":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"11":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.0}}},"2":{"df":1,"docs":{"1":{"tf":1.0}}},"3":{"df":1,"docs":{"2":{"tf":1.0}}},"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"4":{"tf":1.0}}},"6":{"df":1,"docs":{"5":{"tf":1.0}}},"7":{"df":1,"docs":{"6":{"tf":1.0}}},"8":{"df":1,"docs":{"7":{"tf":1.0}}},"9":{"df":1,"docs":{"8":{"tf":1.0}}},"c":{"b":{"c":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":2,"docs":{"16":{"tf":1.0},"17":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"a":{"c":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"d":{"df":0,"docs":{},"u":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"(":{"c":{"c":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});