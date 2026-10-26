# Longwei Liu 的学术主页

适合 GitHub Pages 的静态网页，无需安装前端框架或运行构建命令。

主页地址：<https://shinei-nouzen-arch.github.io/>

## 修改内容

- `index.html`：个人简介、研究方向、教育、工作经历、荣誉及技能。
- `style.css`：桌面和手机排版、字体与颜色。
- `main.js`：随滚动更新侧栏当前栏目。
- `assets/favicon.svg`：浏览器标签图标。

用浏览器直接打开 `index.html` 即可预览，也可以在此文件夹运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

然后访问 <http://127.0.0.1:8000/>。

## 发布

仓库名为 `Shinei-Nouzen-Arch.github.io`。在 GitHub 仓库的 Settings → Pages 中选择 Deploy from a branch，分支为 `main`，目录为 `/ (root)`。

修改后提交并推送到 `main`，GitHub Pages 会自动更新。

## 内容维护约定

只展示已发表的论文。当前页面未设置论文栏目；有已发表的成果后再添加。

不要把未公开研究的名称、摘要、实验数据或包含这些内容的原始简历加入仓库，包括 HTML 注释和历史提交。如需提供简历下载，请先制作仅包含可公开内容的版本。

页面使用姓名排版，之后可按需加入个人照片。
