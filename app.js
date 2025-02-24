function App() {
    return (
        <div data-name="app">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Faq />
            <Footer />
            <ThemeToggle />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
