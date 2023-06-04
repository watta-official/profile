// ファーストビューのアニメーションを500ミリ秒遅延させる
window.addEventListener('load', function() {
  setTimeout(() => {
    const fv = document.querySelector('.fv');
    const header = document.querySelector('.header');
    fv.classList.add('start');
    header.classList.add('start');
  }, 500);
})

// スクロールアニメーション
const targetElement = [...document.querySelectorAll('.section-wrap .content')];
const targetTitle = [...document.querySelectorAll('.fv .title')];
console.log(targetTitle)
const options = {
// root: document.querySelector('body'),　監視対象を制限する
lootMargin: '-100px 0px', //監視エリアに入って50pxスクロールしたら
threshold: .3, //要素がどれくらいみえたかの指定
}

// コールバック関数の定義
const callback = (entries) => {
entries.forEach((entry) => {
if(entry.isIntersecting) {
entry.target.classList.add('active');
}else {
// entry.target.classList.remove('active'); 監視範囲を出た場合の条件指定
}
});
}
const observer = new IntersectionObserver( callback, options ); //オブザーバーの生成

targetElement.map((item) => {// map関数でバラバラにし、返り値（配列）で返す
observer.observe(item); //observeメソットに監視対象の要素を指定
});

targetTitle.map((item) => {// map関数でバラバラにし、返り値（配列）で返す
observer.observe(item); //observeメソットに監視対象の要素を指定
});

//トップスクロール
const btn = document.querySelector('.top-btn');
btn.addEventListener('click', top_scroll);
function top_scroll() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

window.addEventListener('scroll', function() {
  const windowHeight = window.scrollY;
  const fvheight = document.querySelector('.fv').clientHeight;
  console.log(windowHeight);
  if(windowHeight >= fvheight) {
    btn.classList.add('show');
  }else {
    btn.classList.remove('show');
  }
}, false);