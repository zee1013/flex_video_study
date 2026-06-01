window.addEventListener("load", ()=>{
    const items = document.querySelectorAll("article")
    const aside = document.querySelector("aside")
    const close = aside.querySelector("span")
    items.forEach((item)=>{
        // article 호버시
        item.addEventListener("mouseenter", (e)=>{ // 마우스를 호버했을 때 영상 플레이
            // e.currentTarget 으로 선택한 자신을 잡을 수 있음
            e.currentTarget.querySelector("video").play()
        })
        item.addEventListener("mouseleave", (e)=>{ // 마우스가 떠났을 때 영상 정지
            e.currentTarget.querySelector("video").pause()
        })
        // 클릭 이벤트
        item.addEventListener("click", (e)=>{
            let title = e.currentTarget.querySelector("h2").innerText // 태그 안에 있는 텍스트
            let txt = e.currentTarget.querySelector("p").innerText
            let src = e.currentTarget.querySelector("video").getAttribute("src") // 태그 안에 있는 비디오의 src속성
            aside.querySelector("h1").innerText = title
            aside.querySelector("p").innerText = txt
            aside.querySelector("video").setAttribute("src", src)
            // aside가 보이게
            aside.classList.add("on")
            // aside의 요소 동영상 재생
            aside.querySelector("video").play()
            // 스크롤 제거
            document.body.style.overflow = "hidden"
            // 스크롤 맨 위로 이동
            window.scrollTo({top : 0,})
        })
        // close 클릭 이벤트
        close.addEventListener("click", ()=>{
            aside.classList.remove("on")
            aside.querySelector("video").pause()
            // 스크롤 다시 생성
            document.body.style.overflow = "auto"
        })
    })
})