function App() {
    return (
        <div data-name="app">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Faq />
            <Footer />
            <ThemeToggle />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
