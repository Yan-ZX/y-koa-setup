#!/usr/bin/env node

import fs from 'fs'
import { indexTemplate } from "./indexTemplate.js"
import { packageJsonTemplate } from './packageJsonTemplate.js';
import { question } from './question/index.js';
import { createConfig } from "./config.js";
import execa from "execa";
import path from 'path';

const answer = await question()

const config = createConfig(answer)


//1.创建文件夹
fs.mkdirSync(getRootPath());

//2.创建index.js
fs.writeFileSync(getRootPath()+"/index.js", indexTemplate(config));

//3.创建Package.json
fs.writeFileSync(getRootPath()+"/package.json",packageJsonTemplate(config))

//4.安装依赖
//TODO package -> yarn
execa("npm i", {
    cwd: getRootPath(),
    stdio: [2,2,2],
})

function getRootPath() {
    return path.resolve(process.cwd(), config.packageName)
    
}