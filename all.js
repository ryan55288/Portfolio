const action2 = document.getElementById("action");
let isAnimating = false;

function addAnimationClass() {
    if (!isAnimating) {
        isAnimating = true;
        action2.classList.add("animate__animated", "animate__bounceInLeft");

        // 使用 setTimeout 延遲一段時間後再移除動畫的 CSS 類別
        setTimeout(() => {
            action2.classList.remove("animate__bounceInLeft");
            isAnimating = false;
        }, 1000); // 這裡可以自行調整延遲時間，單位為毫秒
    }
}

if (action2) {
    action2.addEventListener("click", addAnimationClass);
}

const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const experience = document.getElementById("experience");

searchButton.addEventListener("click", function () {
    const keyword = searchBox.value.trim().toLowerCase();
    const paragraphs = experience.getElementsByTagName("p");

    let found = false;
    for (const paragraph of paragraphs) {
        const text = paragraph.textContent.toLowerCase();
        if (text.indexOf(keyword) !== -1) {
            paragraph.style.backgroundColor = "yellow"; // 做出搜尋效果
            paragraph.scrollIntoView({
                behavior: "smooth"
            }); // 滑動到該元素
            found = true;
        }
    }

    if (!found) {
        alert("找不到相似的結果");
    }
});
const video = document.getElementById("video");

// 等待頁面載入完成後再綁定事件
window.addEventListener("load", function () {
    // 將影片暫停
    video.pause();
});

// 監聽頁面的點擊事件
document.addEventListener("click", function () {
    // 如果影片還沒有播放，則開始播放影片
    if (video.paused) {
        video.play();
    }
});