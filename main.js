// handle menu
const menuIcon = document.getElementById('menu');
const navbar = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
menuIcon.addEventListener('click', () => {
    if(navbar.classList.contains('mobile')) {
        navbar.classList.remove('mobile');
    } else {
        navbar.classList.add('mobile');
    }
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        })
        link.classList.add('active');
        navbar.classList.remove('mobile');
    })
})

document.getElementById('copy-icon').addEventListener('click', function() {
    const email = document.getElementById('email-address').innerText;
    navigator.clipboard.writeText(email).then(() => {
        // Optional: Change icon to a checkmark temporarily
        this.className = "fa-solid fa-check";
        setTimeout(() => {
            this.className = "fa-regular fa-copy";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

const copyIcon = document.getElementById("copy-icon");

if (copyIcon) {

    copyIcon.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                "yg9552753@gmail.com"
            );

            copyIcon.classList.remove("fa-copy");
            copyIcon.classList.add("fa-check");

            copyIcon.title = "Copied!";

            setTimeout(() => {

                copyIcon.classList.remove("fa-check");
                copyIcon.classList.add("fa-copy");

                copyIcon.title = "Copy Email";

            }, 2000);

        } catch (err) {

            console.error("Failed to copy:", err);

        }

    });

}



