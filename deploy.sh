cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:cbregantejs/classify-sentimental.git main:gh-pages