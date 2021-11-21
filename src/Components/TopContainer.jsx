import React from 'react'

const TopContainer = () => {
    return(
        <section className = "grid gap-5 grid-areas-topContainer">
            <header className = "grid-in-showcase bg-laptop bg-cover bg-center p-12 flex flex-col justify-center items-start shadow-lg">
                <h1 className = "text-6xl mb-0 text-light">Your Web Presence</h1>
                <p className = "text-2xl mt-0 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim voluptatem nobis cupiditate, praesentium fuga est quas obcaecati libero quos officia quis corrupti provident aliquid temporibus, autem asperiores. Inventore sit in laboriosam ipsum voluptate. Cupiditate ipsam quidem maxime facilis provident aspernatur tenetur sapiente modi vero, esse alias, dolor illum ab.</p>
                <a href = "#" className = "bg-dark text-light py-3 px-5 mt-3 border-0">
                    Read More
                </a>
            </header>
            <div className = "grid-in-top-box-a bg-primary flex flex-col items-center justify-center shadow-lg p-6">
                <h4 className = "text-lg">Membership</h4>
                <p className = "mt-5 text-2xl">$1.99/mo</p>
                <a href = "#" className = "bg-dark text-light py-3 px-5 border-0 mt-3">
                    Buy Now!
                </a>
            </div>
            <div className = "grid-in-top-box-b bg-primary flex flex-col items-center justify-center shadow-lg p-6">
                <h4 className = "text-lg">Pro Membership</h4>
                <p className = "mt-5 text-2xl">$2.99/mo</p>
                <a href = "#" className = "bg-dark text-light py-3 px-5 border-0 mt-3">
                    Buy Now!
                </a>
            </div>
        </section>
    )
}

export default TopContainer;