import * as React from "react"
import styles from "./index.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { R } from "../r"

const IndexPage = () => (
  <Layout>
    <SEO title={R().ZhengHuSResume} />
    <div className={styles.content}>
      <div className={styles.experience}>
        <div className={styles.experienceSection}>{R().Education}</div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceTitle} href="https://www.zju.edu.cn" target="_blank">{R().ZJU}</a>
          <div className={styles.experienceSubtTitle}>{R().BS}{R().comma}{R().Math}</div>
          <div className={styles.experienceTime}>2012 年 9 月 ~ 2017 年 6 月{R().comma}{R().Hangzhou}</div>
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experienceSection}>经历</div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceTitle} href="https://www.bytedance.com/" target="_blank">{R().Bytedance}</a>
          <div className={styles.experienceSubtTitle}>{R().fe}{R().comma}{R().fulltime}</div>
          <div className={styles.experienceTime}>2018 年 2 月 ~ 现在{R().comma}{R().Beijing}</div>
          <div className={styles.experienceContent}>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>电商小程序<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div
                  className={styles.experienceHighlightDescription}>从头开发全功能的电商小程序。践行了视图与逻辑分离，将所有视图状态和操作描述在状态管理机制中，得以对视图逻辑提供全面覆盖的单元测试，并由此实现测试用例的自动录制。解决了小程序中渲染
                  HTML，同时要保持图片可点击的问题。通过 parse HTML 并重新构建等效结构，将原 HTML
                  拆分成图片部分和非图片部分的列表，分别利用不可点击但精确还原的 <pre>{"<"}rich-text /{">"}</pre> 和可点击但只能显示图片的 <pre>{"<"}image /{">"}</pre> 进行渲染。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>小程序</div>
                <div className={styles.experienceHighlightSkillsItem}>单元测试</div>
                <div className={styles.experienceHighlightSkillsItem}>UI 测试</div>
                <div className={styles.experienceHighlightSkillsItem}>HTML</div>
              </div>
            </div>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>电商即时通讯工具「飞鸽」<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div
                  className={styles.experienceHighlightDescription}>基于已有的后端基础设施，从头开发即时通讯工具的前端，包括用于商户的电脑端网页和用于用户的移动端网页，以及一个试验性的用于商户的移动客户端。主要基于
                  React Native Web 实现网页，从而得以低成本复用在基于 React Native 的移动客户端。利用 Inversify 的依赖注入实现对宿主客户端的适配。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>React</div>
                <div className={styles.experienceHighlightSkillsItem}>React Native Web</div>
                <div className={styles.experienceHighlightSkillsItem}>React Native</div>
                <div className={styles.experienceHighlightSkillsItem}>TypeScript</div>
              </div>
            </div>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>电商后台管理系统<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>维护服务商户和运营的后台管理系统。对一个可能多达 8000
                  个输入框的表单进行优化，利用虚拟滚动极大减少真正渲染的元素数量，将流畅时的最大输入框数从 80 提升到了几乎无限。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>虚拟滚动</div>
                <div className={styles.experienceHighlightSkillsItem}>Vue.js</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceTitle} href="https://www.catch.cc/" target="_blank">杭州熵功场科技有限公司</a>
          <div className={styles.experienceSubtTitle}>{R().fe}{R().comma}{R().intership}</div>
          <div className={styles.experienceTime}>2016 年 7 月 ~ 2017 年 2 月{R().comma}{R().Hangzhou}</div>
          <div className={styles.experienceContent}>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>Catch×Airbnb 商城<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}><a
                  className={styles.inlineHref}
                  href="https://photo.catch.cc/"
                  target="_blank"
                >桌面端摄影服务预约网站</a>，提供下单、订单查看等功能。
                  技术特点：利用 React 作为前端框架，Redux 作为状态管理系统，用 <pre>webpack-isomorphic-tools</pre> 实现了（部分的）同构渲染。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>React</div>
                <div className={styles.experienceHighlightSkillsItem}>同构渲染</div>
              </div>
            </div>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>Catch 应用<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>用 Vue.js 实现的 Web app，后端则是建构于 Leancloud API 之上的、用
                  TypeScript 写的服务器。负责服务器端的端到端测试，数据一致性检查和清理脚本的开发，以及数据访问接口的重构。基于 decorator 实现了 AOP 的缓存系统，提高了首页的吞吐量。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>Node.js</div>
                <div className={styles.experienceHighlightSkillsItem}>Express</div>
                <div className={styles.experienceHighlightSkillsItem}>Leancloud</div>
                <div className={styles.experienceHighlightSkillsItem}>TypeScript</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceTitle} href="https://www.qsc.zju.edu.cn/" target="_blank">浙江大学求是潮团队</a>
          <div className={styles.experienceSubtTitle}>软件工程师，校内组织</div>
          <div className={styles.experienceTime}>2015 年 3 月 ~ 2017 年 6 月{R().comma}{R().Hangzhou}</div>
          <div className={styles.experienceContent}>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>浙江大学求是潮网站<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}><a
                  className={styles.inlineHref}
                  href="https://www.qsc.zju.edu.cn/"
                  target="_blank"
                >学生组织「求是潮」的网站，媒体门户性质。</a>从头实现了新版的网站。利用 express 作为服务器，jade 作为模板引擎，sequelize 作为
                  ORM，实现了一个传统型网站（即非单页应用），但有做了一些类单页应用的优化，如利用 pjax 实现了列表翻页、文章切换不重新加载页面。利用 Vue 实现了图片、视频轮播。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>Node.js</div>
                <div className={styles.experienceHighlightSkillsItem}>Express</div>
                <div className={styles.experienceHighlightSkillsItem}>Sequelize</div>
                <div className={styles.experienceHighlightSkillsItem}>PJAX</div>
                <div className={styles.experienceHighlightSkillsItem}>Vue.js</div>
                <div className={styles.experienceHighlightSkillsItem}>Jade (Pug)</div>
              </div>
            </div>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>浙江大学青年电影节网站<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>合作开发了<a
                  className={styles.inlineHref}
                  href="https://yff.zjuqsc.com/"
                  target="_blank"
                >「求是潮」中「水朝夕」部门举办的「青年电影节」的活动网站。</a>利用 AngularJS Material 库实现基本的布局和响应式设计，并实现了大小不一的方格系统。用 PHP 的 CodeIgniter
                  框架实现了投票统计和作品上传的后台。我负责一部分前端和全部的后端，过程中自己封装了一个 ORM。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>MySQL</div>
                <div className={styles.experienceHighlightSkillsItem}>PHP</div>
                <div className={styles.experienceHighlightSkillsItem}>CodeIgniter</div>
                <div className={styles.experienceHighlightSkillsItem}>ORM</div>
                <div className={styles.experienceHighlightSkillsItem}>Angular.js</div>
                <div className={styles.experienceHighlightSkillsItem}>Angular.js Material</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experienceSection}>项目</div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceTitle} href="https://www.eliseos.org" target="_blank">净土</a>
          <div className={styles.experienceSubtTitle}>知识社区，网站，支持多国语言</div>
          <div className={styles.experienceTime}>2017 年 11 月 ~ 现在{R().comma}</div>
          <div className={styles.experienceContent}>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>后端<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>实现了一套基于 decorator 的 GraphQL schema
                  自动生成系统（详见前述文章），结合 sequelize-typescript，较大程度地避免了 TypeScript 接口、数据库模型、GraphQL 模型等相似模型的重新定义。利用
                  InversifyJS 做依赖注入，实现了后端的类 Java 型工程化开发，降低了接口复杂化下的开发难度。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>Node.js</div>
                <div className={styles.experienceHighlightSkillsItem}>PostgreSQL</div>
                <div className={styles.experienceHighlightSkillsItem}>GraphQL</div>
                <div className={styles.experienceHighlightSkillsItem}>TypeScript</div>
                <div className={styles.experienceHighlightSkillsItem}>依赖注入</div>
                <div className={styles.experienceHighlightSkillsItem}>GraphQL</div>
                <div className={styles.experienceHighlightSkillsItem}>Nginx</div>
              </div>
            </div>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>前端社区功能<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>前后端共享文件，利用 TypeScript 的 literal type
                  功能，实现了带有类型检查的错误消息国际化。前端利用 Angular Universal 实现了服务器端渲染。解决了 MathJax 渲染过慢的问题，详见<a
                    className={styles.inlineHref}
                    href="https://www.eliseos.org/zh/water/post/6"
                    target="_blank"
                  >《我是如何解决 Angular 上用 MathJax
                    的一些问题的》</a>。利用双重缓冲，解决了编辑过程中 MathJax 重复渲染导致的预览闪烁。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>Angular</div>
                <div className={styles.experienceHighlightSkillsItem}>TypeScript</div>
                <div className={styles.experienceHighlightSkillsItem}>GraphQL</div>
                <div className={styles.experienceHighlightSkillsItem}>双重缓冲</div>
                <div className={styles.experienceHighlightSkillsItem}>同构渲染</div>
              </div>
            </div>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>前端学语言功能<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>提供了<a
                  className={styles.inlineHref}
                  href="https://www.eliseos.org/zh/babel/learn"
                  target="_blank"
                >在阅读文章时候标注生词的功能</a>。这些生词，连通其出现的例句，会被储存。下次在文章中再遇到，会被自动标识出来。同时也可以为这些生词查询及贡献释义。功能介绍可见<a
                  className={styles.inlineHref}
                  href="https://colliot.org/zh/2018/01/%E7%94%A8-angular-%E5%BC%84%E4%BA%86%E4%B8%80%E4%B8%AA%E8%83%8C%E5%8D%95%E8%AF%8D%E7%9A%84%E7%BD%91%E7%AB%99-eliseos-org/"
                  target="_blank"
                >《用 Angular 弄了一个背单词的网站——eliseos.org》</a>
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>TypeScript</div>
                <div className={styles.experienceHighlightSkillsItem}>GraphQL</div>
                <div className={styles.experienceHighlightSkillsItem}>HTML5</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceTitle} href="https://github.com/Axure/ACLLib" target="_blank">ACLLib (fork)</a>
          <div className={styles.experienceSubtTitle}>图形库</div>
          <div className={styles.experienceTime}>2016 年 8 月</div>
          <div className={styles.experienceContent}>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>平台移植<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>
                  ACLLib 是用于浙江大学 C 语言程序设计课的一个图形库，基于 Win32 API 开发，拥有简单的绘图接口。我将它从 Windows 平台移植到了 Qt 和 GTK 后端，从而实现了跨平台。利用
                  Qt 的 <pre>paintEvent</pre> 转写类 Win32 的事件循环 API。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>Qt</div>
                <div className={styles.experienceHighlightSkillsItem}>GTK</div>
                <div className={styles.experienceHighlightSkillsItem}>C</div>
                <div className={styles.experienceHighlightSkillsItem}>C++</div>
              </div>
            </div>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>细节处理<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>
                  用双重缓冲避免朴素实现会遇到的绘图闪烁问题。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>双重缓冲</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceTitle} href="https://github.com/Axure/MathAsYouWill" target="_blank">Math as
            You Will</a>
          <div className={styles.experienceSubtTitle}>Chrome 扩展，<a
            className={styles.inlineHref}
            href="https://chrome.google.com/webstore/detail/math-as-you-will/dhclcadjnhmoimnlkbboigmihbebfmdc"
            target="_blank"
          >在 Chrome 扩展商店中上架</a>。
          </div>
          <div className={styles.experienceTime}>2015 年 9 月</div>
          <div className={styles.experienceContent}>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>渲染数学<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>利用 Chrome 扩展的 background 和 extension 互相通信，实现了通过
                  extension API 匹配当前网址，并传送信息给 background 中嵌入的 MathJax 来启动渲染。
                </div>
              </div>
              <div className={styles.experienceHighlightSkills}>
                <div className={styles.experienceHighlightSkillsName}>相关技术<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightSkillsItem}>Chrome 扩展</div>
                <div className={styles.experienceHighlightSkillsItem}>MathJax</div>
              </div>
            </div>
            <div className={styles.experienceHighlight}>
              <div className={styles.experienceBullet} />
              <div className={styles.experienceHighlightText}>
                <div className={styles.experienceHighlightName}>域名选择<span
                  dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                <div className={styles.experienceHighlightDescription}>使用 Angular.js 搭建了配置界面，可以利用正则表达式配置想要启用渲染的网址，也可以更改
                  MathJax 的渲染分隔符和渲染习惯。
                </div>
                <div className={styles.experienceHighlightSkills}>
                  <div className={styles.experienceHighlightSkillsName}>相关技术<span
                    dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
                  <div className={styles.experienceHighlightSkillsItem}>Angular.js</div>
                  <div className={styles.experienceHighlightSkillsItem}>Bootstrap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experienceSection}>博文</div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceBlogTitle} href="https://colliot.org/zh/2017/11/what-is-gadt-in-haskell/"
             target="_blank">什么是 Haskell 中的 GADT（广义代数数据类型）？</a>
          <div
            className={styles.experienceBlogDescription}>解释了代数数据类型和广义代数数据类型的关系，并利用语言嵌入的例子，说明了我们为什么需要广义代数数据类型。
          </div>
          <div className={styles.experienceHighlightSkills}>
            <div className={styles.experienceHighlightSkillsName}>相关技术<span
              dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
            <div className={styles.experienceHighlightSkillsItem}>Haskell</div>
            <div className={styles.experienceHighlightSkillsItem}>类型系统</div>
          </div>
        </div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceBlogTitle}
             href="https://colliot.me/zh/2017/11/%E4%BE%8B%E8%AF%B4-c-%E8%AF%AD%E8%A8%80%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E/"
             target="_blank">例说 C 语言类型声明</a>
          <div className={styles.experienceBlogDescription}>用例子结合 C 语言标准，探讨了如何理解和解构类似 <pre>double complex_func(int(*(int(*[9])[5]))[5]);</pre> 的复杂类型声明。
          </div>
          <div className={styles.experienceHighlightSkills}>
            <div className={styles.experienceHighlightSkillsName}>相关技术<span
              dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
            <div className={styles.experienceHighlightSkillsItem}>C</div>
            <div className={styles.experienceHighlightSkillsItem}>类型系统</div>
          </div>
        </div>
        <div className={styles.experienceItem}>
          <a className={styles.experienceBlogTitle}
             href="https://colliot.me/zh/2017/09/%E3%80%90c-%E6%A8%A1%E6%9D%BF%E5%85%83%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8%E3%80%91%E5%9C%A8%E7%BC%96%E8%AF%91%E6%9C%9F%E5%AE%9E%E7%8E%B0-peano-%E6%95%B0/"
             target="_blank">【C++ 模板元编程入门】在编译期实现 Peano 数</a>
          <div className={styles.experienceBlogDescription}>利用基本的自然数公理系统（Peano 公理系统），展现了如何用 C++
            模板元编程完成基本的表示和运算。
          </div>
          <div className={styles.experienceHighlightSkills}>
            <div className={styles.experienceHighlightSkillsName}>相关技术<span
              dangerouslySetInnerHTML={{ __html: R().colon }} /></div>
            <div className={styles.experienceHighlightSkillsItem}>C++</div>
            <div className={styles.experienceHighlightSkillsItem}>模板元编程</div>
            <div className={styles.experienceHighlightSkillsItem}>类型系统</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
