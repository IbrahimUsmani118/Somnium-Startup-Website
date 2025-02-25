function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            
            console.log('Form submitted:', formData);
            // Add API call logic here
        } catch (error) {
            console.error('Form submission error:', error);
            alert('An error occurred while submitting the form.');
        } finally {
            setLoading(false);
        }
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    
    return (
        <section data-name="contact" id="contact" className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <form onSubmit={handleSubmit} className="contact-form space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
