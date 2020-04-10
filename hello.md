
npm install pug
express의 setting 변경: view engine: undefined -> pug

app.js
app.set('view engine', "pug");

controller.js
export const home = (req, res) => res.render("home"); // views 폴더에서 home.pug return


layout

/views 안에 pug 파일들
/views/layouts에 layout 작성

doctype html
html
    head
        title Wetube
    body
        main
            block content // content는 block 이름, 이 안에 다른 pug들이 들어감
        footer
            span &copy; WeTube

// 사용
extends layouts/main.pug


partials: 페이지의 일부분
//사용
include ../partials/footer

fontawesome.com icon.
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.css


add javascript in pug
#{}

one single source of truth. 한 곳에서만 정보를 보관
