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
