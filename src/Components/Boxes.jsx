import React from 'react'

const Boxes = () => {
    return(
        <section className = "grid grid-cols-4 gap-5 sm:grid-cols-1">
            <div className = "bg-primary items-center py-6 px-8 text-center">
                <i class="fas fa-chart-pie fa-4x"></i>
                <h3>Analytics</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, obcaecati!</p>
            </div>
            <div className = "bg-primary items-center py-6 px-8 text-center">
                <i class="fas fa-globe fa-4x"></i>
                <h3>Marketing</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, obcaecati!</p>
            </div>
            <div className = "bg-primary items-center py-6 px-8 text-center">
                <i class="fas fa-cog fa-4x"></i>
                <h3>Development</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, obcaecati!</p>
            </div>
            <div className = "bg-primary items-center py-6 px-8 text-center">
                <i class="fas fa-users fa-4x"></i>
                <h3>Support</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, obcaecati!</p>
            </div>
        </section>
    )
}

export default Boxes;