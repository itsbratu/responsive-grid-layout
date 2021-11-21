import React from 'react'

const TopContainer = () => {
    return(
        <section className = "top-container">
            <header className = "showcase">
                <h1>Your Web Presence</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim voluptatem nobis cupiditate, praesentium fuga est quas obcaecati libero quos officia quis corrupti provident aliquid temporibus, autem asperiores. Inventore sit in laboriosam ipsum voluptate. Cupiditate ipsam quidem maxime facilis provident aspernatur tenetur sapiente modi vero, esse alias, dolor illum ab.</p>
                <a href = "#" className = "bg-dark text-light py-3 px-5 border-0">
                    Read More
                </a>
            </header>
            <div className = "top-box top-box-a">
                <h4>Membership</h4>
                <p className = "price">$1.99/mo</p>
                <a href = "#" className = "bg-dark text-light py-3 px-5 border-0">
                    Buy Now!
                </a>
            </div>
            <div className = "top-box top-box-b">
                <h4>Pro Membership</h4>
                <p className = "price">$2.99/mo</p>
                <a href = "#" className = "bg-dark text-light py-3 px-5 border-0">
                    Buy Now!
                </a>
            </div>
        </section>
    )
}

export default TopContainer;