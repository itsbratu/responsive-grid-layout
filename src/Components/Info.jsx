import React from 'react'

const Info = () => {
    return(
        <section className = "bg-primary shadow-lg grid gap-8 grid-cols-2 p-12">
            <img src = "images/inovation.jpg"></img>
            <div className = "flex flex-col text-center justify-evenly">
                <h2 className = "text-4xl">Your bussiness on the web!</h2>
                <p className = "text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore veritatis dicta facilis maiores facere libero temporibus illum. Incidunt, beatae soluta! Temporibus sequi esse tenetur possimus id quod. Doloribus, quas?</p>
                <a href = "#" className = "bg-dark text-light py-3 px-5 border-0">
                    Learn more!
                </a>
            </div>
        </section>
    );
}

export default Info;