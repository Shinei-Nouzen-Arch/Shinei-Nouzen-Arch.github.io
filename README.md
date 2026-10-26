# Longwei Liu 的个人主页

参考 <https://baichen318.github.io/> 的 jemdoc 页面布局制作；沿用参考页的 `jemdoc.css`、`middle-layout.css` 和通用 GitHub 图标。无构建依赖，可直接用于 GitHub Pages。

当前仅保留本地版本，网页尚未上传或发布。已创建的 GitHub 仓库为空。

未来发布时的预留地址：<https://shinei-nouzen-arch.github.io/>

## 文件

- `index.html`：个人资料、各栏目、照片和导师主页链接。
- `jemdoc.css`、`middle-layout.css`：沿用原站布局，调整照片大小及个人信息间距，并使用港中文紫金配色。
- `main.js`：侧栏切换和 URL 锚点。
- `icons/github.png`：GitHub 链接图标。
- `images/longwei-liu.jpeg`：个人照片，来自[导师团队页面](https://mypage.cuhk.edu.cn/academics/chentinghuan/team.html)中标注为 Longwei Liu 的条目，保留原图比例。
- `images/cuhk-emblem.jpg`：来自[港中文官方校徽介绍页](https://www.cuhk.edu.hk/english/aboutus/mission.html)的[原始校徽图片](https://www.cuhk.edu.hk/english/images/aboutus/logo.jpg)，保留原图比例，链接至港中大（深圳）官网。

配色参考[港中文校徽使用指引](https://www.iso.cuhk.edu.hk/english/documents/resource/cuhk-emblem/emblem-guideline.pdf)：紫色 `#750F6D`、金色 `#DDA300`，浅金色 `#F4DFB0`。标题、链接及导航使用紫色，细线和选中状态使用金色。

## 本地预览

用浏览器直接打开 `index.html`，或在此文件夹运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

然后访问 <http://127.0.0.1:8000/>。

## 内容约定

- 保留 About、Publications、Experience、Professional Service，移除 Teaching、Team。
- 缺少的简历链接和未提供的栏目内容留空。
- 只展示已发表的论文。未公开研究的名称、细节、数据和原始简历不加入网页、注释、下载文件或仓库。
- 若后续需要简历下载，先制作仅包含可公开内容的版本。

## GitHub Pages

仓库名：`Shinei-Nouzen-Arch.github.io`。

在 Settings → Pages 选择 Deploy from a branch，分支 `main`、目录 `/ (root)`。更新内容后提交并推送到 `main`，网页会自动重新发布。
