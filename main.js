// ===== 스크롤 등장 애니메이션 =====
// .reveal 요소가 화면에 들어오면 .is-visible 클래스를 붙여서 나타나게 함
// (CSS의 transition-delay(--delay)로 순서대로 등장)
// ※ 'js' 클래스는 main.html <head>에서 미리 붙임 (깜빡임 방지)

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // 한 번만 실행
    }
  });
}, {
  threshold: 0.2,                 // 요소가 20% 보이면 시작
  rootMargin: '0px 0px -60px 0px' // 화면 아래 끝보다 조금 더 올라왔을 때
});

revealItems.forEach((item) => revealObserver.observe(item));

// ===== 9. Testimonial 슬라이드 =====
// .testi-slide가 2개 이상이면 화살표로 이전/다음 후기를 보여줌 (마지막 → 처음으로 순환)
const testiSlides = document.querySelectorAll('.testi-slide');
let testiIndex = 0;

function showTesti(index) {
  testiSlides[testiIndex].classList.remove('is-active');
  testiIndex = (index + testiSlides.length) % testiSlides.length;
  testiSlides[testiIndex].classList.add('is-active');
}

if (testiSlides.length) {
  document.querySelector('.testi-prev').addEventListener('click', () => showTesti(testiIndex - 1));
  document.querySelector('.testi-next').addEventListener('click', () => showTesti(testiIndex + 1));
}
