import React from "react";
import Info from "../src/components/Info"
import About from "../src/components/About"
import Interests from "../src/components/Interests"
import Footer from "../src/components/Footer"

export default function App(){
    return (
        <main className="main-container">
            <section className="content-container">
                    <Info />
                    <About />
                    <Interests />
            </section>
                    <Footer />
        </main>
        
    )
}