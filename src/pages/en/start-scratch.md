---
title: Start from scratch
description: Lorem ipsum dolor sit amet - 2
layout: ../../layouts/MainLayout.astro
---

## Use an E7L from scratch

### Install with hardhat

Initialize a npm project

```
npm init
```

<br/>

Install hardhat

```sh
npm install --save-dev hardhat
```

<br/>

Initialize a hardhat project

```sh
npx hardhat
```

Select `Create a TypeScript project` and install `@nomicfoundation/hardhat-toolbox`

<br/>

Folder structure after the installation

```
├── contracts
│   └── Lock.sol
├── scripts
│   └── deploy.ts
├── test
│   └── Lock.ts
├── hardhat.config.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

<br/>

Install E7L

```
npm install -D erc721l
```

### Create the contract

Create a new file `contracts/myE7L.sol`
