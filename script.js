function showContact() {

    const contactInfo = document.querySelector(".contact-info");

    if (contactInfo.style.display === "flex") {
        contactInfo.style.display = "none";
    } else {
        contactInfo.style.display = "flex";
    }

}