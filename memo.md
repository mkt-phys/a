# udemy TypeScript はむさん

## 4 typescript とは

- TypeScript PlayGround
  MS が出しとるやつ遊び場

## 7

```
 git checkout -b create-package-json
```

チェックアウトとリポジトリ作成を両方やる

## 8 TypeScript をインストールする

```
npm i typescript@3.7.5 --save-dev
```

Powershell でファイルを新規作成

```
  New-Item src/install-typescript.ts
```

- ts をコンパイル
  tsc はグローバルにインストールされていないので`node_modules`から指定する

```
./node_modules/.bin/tsc src/install-typescript.ts
```

- gitbash でコードを見る

```
cat install-typescript.ts

```

- 生成された js ファイルを削除するまでの流れ
  全部加える

```
 git add .
```

status 見る

```
git status
```

git の追跡から外したくない場合は`git reset`する

```
makito.mori@PC790 MINGW64 ~/Desktop/self_study/udemy/udemy-typescript (install-ts)
$ git reset src/install-typescript.ts

makito.mori@PC790 MINGW64 ~/Desktop/self_study/udemy/udemy-typescript (install-ts)
$ git status
On branch install-ts
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   memo.md
        modified:   package.json
        new file:   src/install-typescript.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/install-typescript.ts

```

ファイル削除(参考：https://qiita.com/k0uh0t/items/ae885bf2d5e05614b80f)

```
$ git clean -f
Removing src/install-typescript.ts

```
