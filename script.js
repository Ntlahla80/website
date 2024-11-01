$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow");
    });

    
    const keywordResponses = {
        "portfolio": "My portfolio showcases my skills and projects in web development, design, and more. You can check it out <a href='homepage.html' target='_blank'>here</a>.",
        "contact": "You can contact me via email at ntlahlapikwa80@gmail.com or visit the <a href='contact.html' target='_blank'>Contact</a> page.",
        "skills": "I have skills in HTML, CSS, JavaScript, React, Java, C#, MySQL, and Android Studio! You can view more details in the <a href='skills.html' target='_blank'>Skills</a> section.",
        "projects": "You can view my projects in the <a href='skills.html' target='_blank'>Skills</a> section of my portfolio.",
        "about yourself": "I'm Ntlahla Pikwa, a passionate developer and designer. You can learn more on the <a href='about.html' target='_blank'>About</a> page.",
        "html5": "HTML5 is a markup language used for structuring and presenting hypertext documents on the World Wide Web. You can learn more in the <a href='skills.html' target='_blank'>Skills</a> section.",
        "java": "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Check the <a href='skills.html' target='_blank'>Skills</a> section for details.",
        "c#": "C# is used for developing a variety of applications, including desktop, web, and mobile applications. More info can be found in the <a href='skills.html' target='_blank'>Skills</a> section.",
        "mysql": "MySQL is a database management system used for creating, managing, and accessing databases. Learn more in the <a href='skills.html' target='_blank'>Skills</a> section.",
        "android": "Android Studio is the official integrated development environment for Google's Android operating system. Check out the <a href='skills.html' target='_blank'>Skills</a> section for more.",
      
    };

   
    $(".send-btn").click((e) => {
        e.preventDefault(); 
        const message = $(".chat-input input").val().trim().toLowerCase();
        if (message) {
            $(".chats").append(`<div class="my-chat">${message}</div>`);
            $(".chat-input input").val(''); 

            
            let responseMessage = "I'm sorry, I don't have an answer for that.";
            for (const keyword in keywordResponses) {
                if (message.includes(keyword)) {
                    responseMessage = keywordResponses[keyword];
                    break;
                }
            }

            setTimeout(() => {
                $(".chats").append(`<div class="client-chat">${responseMessage}</div>`);
                $('.chats').scrollTop($('.chats')[0].scrollHeight); 
            }, 1000);
        }
    });
});
