cd ..
npm run build:dev
cp dist/* demo/node_modules/runtime-nodejs/dist
cd demo
npm run demo
