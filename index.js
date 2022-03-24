const testimonial = 
[
    {
        name: "Cherise G.",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I Am with Apple."   
    },
    {
        name: "Hammad L.",
        photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Very easy to use. Apple should be nominated for service of the year. Apple is the most valuable business resource we have EVER purchased. Without Apple, we would have gone bankrupt by now."   
    },
    {
        name: "Kimberley A.",
        photoUrl:"https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "I was amazed at the quality of Apple. Great job, I will definitely be ordering again! Apple is both attractive and highly adaptable. The very best."   
    }
]

const imageElement = document.querySelector("img");
const textElement = document.querySelector(".text");
const userNameElement = document.querySelector(".username");

let index = 0;

function updateTestimonial()
{
    const {name, photoUrl, text} = testimonial[index];

    imageElement.src = photoUrl;
    textElement.innerText = text;
    userNameElement.innerText = name;

    index++

    if(index === testimonial.length)
    {
        index = 0;  
    };

    setTimeout(() => 
    {
        updateTestimonial();
    }, 10000);
};

updateTestimonial();