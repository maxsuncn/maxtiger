# maxtiger.org

科技小虎哥的个人品牌与内容站，使用 Astro 生成静态页面，部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

新增文章只需要在 `src/content/posts/` 新建 Markdown 文件，填写标题、日期、简介和主题即可。

## 发布

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。自定义域名由 `public/CNAME` 指定为 `www.maxtiger.org`。

课程入口：<https://tongka.maxtiger.org/>
