#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Nowy Zapis'
git push -f git@github.com:LukaszPomocki/portfolio__vue.git master:gh-pages

cd -