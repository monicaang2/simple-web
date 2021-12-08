function postComment(event){
    event.preventDefault();

    var li = document.createElement("li");
    li.className = "d-flex align-items-center fw-lighter mt-2";

    var img = document.createElement("img");
    img.className = "avatar";
    img.src = "/blogger-livecode/images/AvatarMonica.png";
    li.appendChild(img);

    var KomenDong = document.getElementById("comment").value;
    var span = document.createElement("span");
    span.innerText = KomenDong;
    li.appendChild(span);

    if (KomenDong === '') {
        alert("Masih kosong komentarnya tuh kak..");
    } else {
        document.getElementById("comment-list").appendChild(li);
    }
    document.getElementById("comment").value = "";
}